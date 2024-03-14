import type { OpenAI } from "../../../types.ts"
import { getToken } from "../../../utils.ts"
import { nonStreamingChatProxyHandler } from "./NonStreamingChatProxyHandler.ts"
import { streamingChatProxyHandler } from "./StreamingChatProxyHandler.ts"

export async function chatProxyHandler(rawReq: Request) {
  const req = (await rawReq.json()) as OpenAI.Chat.ChatCompletionCreateParams
  const headers = rawReq.headers
  const apiParam = getToken(headers)
  if (apiParam == null) {
    return new Response("Unauthorized", { status: 401 })
  }

  rawReq.logger?.debug(req)

  if (req.stream !== true) {
    const resp = await nonStreamingChatProxyHandler(req, apiParam, rawReq.logger)
    rawReq.logger?.debug(resp)
    return Response.json(resp)
  }

  const respArr = streamingChatProxyHandler(req, apiParam)
  return sseResponse(
    (async function* () {
      for await (const data of respArr) {
        rawReq.logger?.debug(data)
        yield JSON.stringify(data)
      }
      yield "[DONE]"
    })(),
  )
}

export function sseResponse(dataStream: AsyncGenerator<string>): Response {
  const { readable, writable } = new TransformStream<Uint8Array, Uint8Array>()

  const response = new Response(readable, {
    status: 200,
    headers: new Headers({
      "Content-Type": "text/event-stream",
    }),
  })

  const encoder = new TextEncoder()

  async function writer(data: string) {
    const w = writable.getWriter()
    await w.write(encoder.encode(data))
    w.releaseLock()
  }
  ;(async () => {
    for await (const data of dataStream) {
      await writer(toSseMsg({ data }))
    }
    await writable.close()
  })()

  return response
}

export function toSseMsg(sseEvent: SseEvent) {
  const { event, data, id } = sseEvent
  let result = `data: ${data}\n`
  if (event) {
    result += `event: ${event ?? ""}\n`
  }
  if (id) {
    result += `id: ${id ?? ""}\n`
  }
  return `${result}\n`
}

export interface SseEvent {
  event?: string
  id?: string
  data: string
}
