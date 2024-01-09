import type { GoogleGenerativeAI } from "@google/generative-ai"
import type { Context } from "hono/"
import type { OpenAI } from "openai"
import { streamSSE } from "hono/streaming"
import log from "loglevel"
import { hasImageMesasge, openAIMessageToGeminiMessage } from "../../utils.ts"

export const StreamingChatProxyHandler = async (
  c: Context,
  req: OpenAI.Chat.ChatCompletionCreateParamsStreaming,
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

  const resp: OpenAI.Chat.ChatCompletionChunk = {
    id: "chatcmpl-abc123",
    object: "chat.completion.chunk",
    created: Date.now(),
    model: req.model,
    choices: [
      {
        delta: {
          role: "assistant",
          content: geminiResp,
        },
        logprobs: null,
        finish_reason: "stop",
        index: 0,
      },
    ],
  }

  return streamSSE(c, async (stream) => {
    await stream.writeSSE({ data: JSON.stringify(resp) })
    await stream.writeSSE({ data: "[DONE]" })
    await stream.close()
  })
}
