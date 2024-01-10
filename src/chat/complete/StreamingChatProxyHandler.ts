import type { OpenAI } from "openai"
import { streamSSE } from "hono/streaming"
import { genModel, openAIMessageToGeminiMessage } from "../../utils.ts"
import { ChatProxyHandlerType } from "./ChatProxyHandler.ts"
import { Logger } from "../../log.ts"

export const streamingChatProxyHandler: ChatProxyHandlerType = async (
  c,
  req,
  genAi,
) => {
  const log = c.get("log")
  const model = genModel(genAi, req)

  const genOpenAIResp = (content: string, stop: boolean) =>
    ({
      id: "chatcmpl-abc123",
      object: "chat.completion.chunk",
      created: Date.now(),
      model: req.model,
      choices: [
        {
          delta: { role: "assistant", content: content },
          finish_reason: stop ? "stop" : null,
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
        for await (const { text } of stream) {
          await sseStream.writeSSE({
            data: JSON.stringify(genOpenAIResp(text(), false)),
          })
        }
        await sseStream.writeSSE({
          data: JSON.stringify(genOpenAIResp("", true)),
        })
        const geminiResult = (await response).text()
        log.info(JSON.stringify(geminiResult))
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
