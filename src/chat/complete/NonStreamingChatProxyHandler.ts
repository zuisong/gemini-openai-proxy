import type { GoogleGenerativeAI } from "@google/generative-ai"
import type { Context } from "hono/"
import type { OpenAI } from "openai"
import log from "loglevel"
import { hasImageMesasge, openAIMessageToGeminiMessage } from "../../utils.ts"

export const NonStreamingChatProxyHandler = async (
  c: Context,
  req: OpenAI.Chat.ChatCompletionCreateParamsNonStreaming,
  genAi: GoogleGenerativeAI,
) => {
  const model = genAi.getGenerativeModel({
    model: hasImageMesasge(req.messages) ? "gemini-pro-vision" : "gemini-pro",
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
