import { GoogleGenerativeAI } from "@google/generative-ai"
import type { Handler } from "hono/"
import type { OpenAI } from "openai"
import log from "loglevel"
import { getToken } from "../../utils.ts"
import { NonStreamingChatProxyHandler } from "./NonStreamingChatProxyHandler.ts"
import { StreamingChatProxyHandler } from "./StreamingChatProxyHandler.ts"
export const ChatProxyHandler: Handler = async (c) => {
  const req = await c.req.json<OpenAI.Chat.ChatCompletionCreateParams>()
  log.debug(JSON.stringify(req))
  const headers = c.req.header()
  const apiKey = getToken(headers)
  if (apiKey == null) {
    return c.text("Unauthorized", 401)
  }
  const genAi = new GoogleGenerativeAI(apiKey)

  if (req.stream === true) {
    return StreamingChatProxyHandler(c, req, genAi)
  }
  return NonStreamingChatProxyHandler(c, req, genAi)
}
