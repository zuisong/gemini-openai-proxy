import { GoogleGenerativeAI } from "@google/generative-ai"
import type { Handler } from "hono"
import type { OpenAI } from "openai"
import { getToken } from "../../utils.ts"
import { nonStreamingChatProxyHandler } from "./NonStreamingChatProxyHandler.ts"
import { streamingChatProxyHandler } from "./StreamingChatProxyHandler.ts"
import { Context } from "hono"
import { Logger } from "../../log.ts"

export const chatProxyHandler: Handler<{ Variables: { log: Logger } }> = async (
  c,
) => {
  const log = c.get("log") as Logger

  const req = await c.req.json<OpenAI.Chat.ChatCompletionCreateParams>()
  log.debug(JSON.stringify(req))
  const headers = c.req.header()
  const apiKey = getToken(headers)
  if (apiKey == null) {
    return c.text("Unauthorized", 401)
  }
  const genAi = new GoogleGenerativeAI(apiKey)

  if (req.stream === true) {
    return streamingChatProxyHandler(c, req, genAi)
  }
  return nonStreamingChatProxyHandler(c, req, genAi)
}

export interface ChatProxyHandlerType {
  (
    c: Context,
    req: OpenAI.Chat.ChatCompletionCreateParams,
    genAi: GoogleGenerativeAI,
  ): ReturnType<Handler>
}
