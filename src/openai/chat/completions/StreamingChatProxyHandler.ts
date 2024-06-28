import { generateContent } from "../../../gemini-api-client/gemini-api-client.ts"
import type { FunctionCall } from "../../../gemini-api-client/types.ts"
import type { OpenAI } from "../../../types.ts"
import { type ApiParam, genModel } from "../../../utils.ts"

export async function* streamingChatProxyHandler(req: OpenAI.Chat.ChatCompletionCreateParams, apiParam: ApiParam) {
  const [model, geminiReq] = genModel(req)

  try {
    for await (const it of generateContent(apiParam, model, geminiReq)) {
      const data = it.response.result()
      yield genOpenAiResp(data, false)
    }
  } catch (error) {
    yield genOpenAiResp(error?.message ?? error.toString(), true)
  }
  yield genOpenAiResp("", true)
  return undefined

  function genOpenAiResp(content: string | FunctionCall, stop: boolean) {
    if (typeof content === "string") {
      return {
        id: "chatcmpl-abc123",
        object: "chat.completion.chunk",
        created: Math.floor(Date.now() / 1000),
        model: req.model,
        choices: [
          {
            delta: { role: "assistant", content },
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
}
