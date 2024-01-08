import { GoogleGenerativeAI } from "@google/generative-ai"
import { Handler } from "hono/"
import { OpenAI } from "openai"
import log from "loglevel"
import { getToken } from "../../utils.ts"
import { NonStreamingChatProxyHandler } from "./NonStreamingChatProxyHandler.ts"
import { StreamingChatProxyHandler } from "./StreamingChatProxyHandler.ts"
export const ChatProxyHandler: Handler = async (c) => {
  const req = await c.req.json<OpenAI.Chat.ChatCompletionCreateParams>()
  log.debug(JSON.stringify(req))
  const headers = c.req.header()
  const API_KEY = getToken(headers)
  if (API_KEY == null) {
    return c.text("Unauthorized", 401)
  }
  const genAI = new GoogleGenerativeAI(API_KEY)

  if (req.stream === true) {
    return StreamingChatProxyHandler(c, req, genAI)
  }
  return NonStreamingChatProxyHandler(c, req, genAI)
}
