import { generateContent } from "../../../gemini-api-client/gemini-api-client.ts"
import type { FunctionCall } from "../../../gemini-api-client/types.ts"
import type { OpenAI } from "../../../types.ts"
import { type ApiParam, genModel } from "../../../utils.ts"

export async function* streamingChatProxyHandler(req: OpenAI.Chat.ChatCompletionCreateParams, apiParam: ApiParam) {
  const [model, geminiReq] = genModel(req)
  const geminiResp: string | FunctionCall = await generateContent(apiParam, model, geminiReq)
    .then((it) => it.response.result())
    .catch((e: Error) => e.message ?? e?.toString())

  function genOpenAiResp(content: string | FunctionCall, stop: boolean) {
    if (typeof content === "string") {
      return {
        id: "chatcmpl-abc123",
        object: "chat.completion.chunk",
        created: Math.floor(Date.now() / 1000),
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

    return {
      id: "chatcmpl-abc123",
      object: "chat.completion.chunk",
      created: Math.floor(Date.now() / 1000),
      model: req.model,
      choices: [
        {
          delta: { role: "assistant", function_call: content },
          finish_reason: stop ? "function_call" : null,
          index: 0,
        },
      ],
    } satisfies OpenAI.Chat.ChatCompletionChunk
  }

  yield genOpenAiResp(geminiResp, false)
  yield genOpenAiResp("", true)
}
