import { Content, GoogleGenerativeAI } from "@google/generative-ai"
import { Handler } from "hono"
import { OpenAI } from "openai"
import { getToken } from "./utils.ts"
import log from "loglevel"
export const ChatProxyHandler: Handler = async (c) => {
  const req = await c.req.json<OpenAI.Chat.ChatCompletionCreateParams>()
  log.debug(JSON.stringify(req))
  const headers = c.req.header()
  const API_KEY = getToken(headers)
  if (API_KEY == null) {
    return c.text("Unauthorized", 401)
  }
  const genAI = new GoogleGenerativeAI(API_KEY)
  const model = genAI.getGenerativeModel({
    model: "gemini-pro",
    generationConfig: {
      maxOutputTokens: req.max_tokens ?? undefined,
      temperature: req.temperature ?? undefined,
    },
  })
  const geminiResp: string = await model
    .generateContent({
      contents: req.messages.map((msg) => {
        return {
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.content?.toString() ?? "" },
          ],
        } satisfies Content
      }),
    })
    .then((it) => it.response.text())
    .catch((err) => err?.message ?? err.toString())

  const resp: OpenAI.Chat.ChatCompletion = {
    id: "chatcmpl-abc123",
    object: "chat.completion",
    created: Date.now(),
    model: req.model,
    choices: [
      {
        message: {
          role: "assistant",
          content: geminiResp,
        },
        logprobs: null,
        finish_reason: "stop",
        index: 0,
      },
    ],
  }
  log.debug(JSON.stringify(resp))
  return c.json(resp)
}
