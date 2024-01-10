import type { OpenAI } from "openai"
import { hasImageMessage, openAIMessageToGeminiMessage } from "../../utils.ts"
import { ChatProxyHandlerType } from "./ChatProxyHandler.ts"
import { Logger } from "../../log.ts"

export const nonStreamingChatProxyHandler: ChatProxyHandlerType = async (
  c,
  req,
  genAi,
) => {
  const log = c.get("log") as Logger

  const model = genAi.getGenerativeModel({
    model: hasImageMessage(req.messages) ? "gemini-pro-vision" : "gemini-pro",
    generationConfig: {
      maxOutputTokens: req.max_tokens ?? undefined,
      temperature: req.temperature ?? undefined,
    },
  })
  const geminiResp: string = await model
    .generateContent({
      contents: openAIMessageToGeminiMessage(req.messages),
    })
    .then((it) => it.response.text())
    .catch((err) => err?.message ?? err.toString())

  log.debug(JSON.stringify(geminiResp))

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
  return c.json(resp)
}