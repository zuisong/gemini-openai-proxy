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

  if (req.stream !== true) {
    return await nonStreamingChatProxyHandler(req, apiParam, rawReq.logger)
  }
  return streamingChatProxyHandler(req, apiParam, rawReq.logger)
}
