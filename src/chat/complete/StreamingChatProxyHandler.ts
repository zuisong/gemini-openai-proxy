import type { OpenAI } from "openai"
import { streamSSE } from "hono/streaming"
import { hasImageMessage, openAIMessageToGeminiMessage } from "../../utils.ts"
import { ChatProxyHandlerType } from "./ChatProxyHandler.ts"
import { Logger } from "../../log.ts"

export const streamingChatProxyHandler: ChatProxyHandlerType = async (
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

  const genOpenAIResp = (content: string, stoped: boolean) =>
    ({
      id: "chatcmpl-abc123",
      object: "chat.completion.chunk",
      created: Date.now(),
      model: req.model,
      choices: [
        {
          delta: {
            role: "assistant",
            content: content,
          },
          logprobs: null,
          finish_reason: stoped ? "stop" : null,
          index: 0,
        },
      ],
    }) satisfies OpenAI.Chat.ChatCompletionChunk

  return streamSSE(c, async (sseStream) => {
    await model
      .generateContentStream({
        contents: openAIMessageToGeminiMessage(req.messages),
      })
      .then(async ({ stream, response }) => {
        let geminiResult = ""
        for await (const { text } of stream) {
          geminiResult += text()
          await sseStream.writeSSE({
            data: JSON.stringify(genOpenAIResp(geminiResult, false)),
          })
        }
        await sseStream.writeSSE({
          data: JSON.stringify(genOpenAIResp((await response).text(), true)),
        })
        log.info(geminiResult)
      })
      .catch(async (e) => {
        await sseStream.writeSSE({
          data: JSON.stringify(genOpenAIResp(e.toString(), true)),
        })
        log.info(e)
      })

    await sseStream.writeSSE({ data: "[DONE]" })
    await sseStream.close()
  })
}
