import { generateContent } from "../../../gemini-api-client/gemini-api-client.ts"
import type { OpenAI } from "../../../types.ts"
import { type ApiParam, genModel } from "../../../utils.ts"

export async function* streamingChatProxyHandler(req: OpenAI.Chat.ChatCompletionCreateParams, apiParam: ApiParam) {
  const [model, geminiReq] = genModel(req)
  const geminiResp: string = await generateContent(apiParam, model, geminiReq)
    .then((it) => it.response.text())
    .catch((e) => e.message ?? e?.toString())

  function genOpenAiResp(content: string, stop: boolean) {
    return {
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
    } satisfies OpenAI.Chat.ChatCompletionChunk
  }

  yield genOpenAiResp(geminiResp, false)
  yield genOpenAiResp("", true)
}
