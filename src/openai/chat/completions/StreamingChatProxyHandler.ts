import { streamSSE } from "hono/streaming"
import { generateContent } from "../../../gemini-api-client/gemini-api-client.ts"
import type { OpenAI } from "../../../types.ts"
import { genModel } from "../../../utils.ts"
import type { ChatProxyHandlerType } from "./ChatProxyHandler.ts"

export const streamingChatProxyHandler: ChatProxyHandlerType = async (c, req, genAi) => {
  const log = c.var.log

  const genOpenAiResp = (content: string, stop: boolean) =>
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
    const [model, geminiReq] = genModel(req)
    const geminiResp: string = await generateContent(genAi, model, geminiReq)
      .then((it) => it.response.text())
      .catch((e) => e.message ?? e?.toString())

    log.debug(req)
    log.debug(geminiResp)

    await sseStream.writeSSE({
      data: JSON.stringify(genOpenAiResp(geminiResp, false)),
    })
    await sseStream.writeSSE({
      data: JSON.stringify(genOpenAiResp("", true)),
    })

    await sseStream.writeSSE({ data: "[DONE]" })
    await sseStream.close()
  })
}
