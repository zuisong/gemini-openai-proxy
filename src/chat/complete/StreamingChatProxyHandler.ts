import type { OpenAI } from "openai"
import { streamSSE } from "hono/streaming"
import { hasImageMesasge, openAIMessageToGeminiMessage } from "../../utils.ts"
import { ChatProxyHandlerType } from "./ChatProxyHandler.ts"
import { Logger } from "../../log.ts"

export const streamingChatProxyHandler: ChatProxyHandlerType = async (
  c,
  req,
  genAi,
) => {
  const log = c.get("log") as Logger

  const model = genAi.getGenerativeModel({
    model: hasImageMesasge(req.messages) ? "gemini-pro-vision" : "gemini-pro",
    generationConfig: {
      maxOutputTokens: req.max_tokens ?? undefined,
      temperature: req.temperature ?? undefined,
    },
  })

  const resp: (geminiResp: string) => OpenAI.Chat.ChatCompletionChunk = (
    geminiResp: string,
  ) => ({
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
  })

  return streamSSE(c, async (sseStream) => {
    await model
      .generateContentStream({
        contents: openAIMessageToGeminiMessage(req.messages),
      })
      .then(async ({ stream }) => {
        let geminiResult = ""
        for await (const { text } of stream) {
          geminiResult += text()
          log.info(JSON.stringify(geminiResult))
          await sseStream.writeSSE({ data: JSON.stringify(resp(geminiResult)) })
        }
      })
      .catch(async (e) => {
        await sseStream.writeSSE({ data: JSON.stringify(resp(e.toString())) })
      })

    await sseStream.writeSSE({ data: "[DONE]" })
    await sseStream.close()
  })
}
