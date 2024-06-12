import type { OpenAI } from "../../../types.ts"
import { getToken } from "../../../utils.ts"
import { nonStreamingChatProxyHandler } from "./NonStreamingChatProxyHandler.ts"
import { streamingChatProxyHandler } from "./StreamingChatProxyHandler.ts"

export async function chatProxyHandler(rawReq: Request): Promise<Response> {
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
        rawReq.logger?.debug("streamingChatProxyHandler", data)
        yield JSON.stringify(data)
      }
      yield "[DONE]"
      return undefined
    })(),
  )
}

const encoder = new TextEncoder()

export function sseResponse(dataStream: AsyncGenerator<string, undefined>): Response {
  const s = new ReadableStream<Uint8Array>({
    async pull(controller) {
      const { value, done } = await dataStream.next()
      if (done) {
        controller.close()
      } else {
        controller.enqueue(encoder.encode(toSseMsg({ data: value })))
      }
    },
  })

  const response = new Response(s, {
    status: 200,
    headers: new Headers({
      "Content-Type": "text/event-stream",
    }),
  })

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
