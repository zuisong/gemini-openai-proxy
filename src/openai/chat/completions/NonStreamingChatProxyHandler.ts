import { generateContent } from "../../../gemini-api-client/gemini-api-client.ts"
import type { OpenAI } from "../../../types.ts"
import { type ApiParam, genModel } from "../../../utils.ts"

export async function nonStreamingChatProxyHandler(req: OpenAI.Chat.ChatCompletionCreateParams, apiParam: ApiParam) {
  const [model, geminiReq] = genModel(req)
  const geminiResp: string = await generateContent(apiParam, model, geminiReq)
    .then((it) => it.response.text())
    .catch((e) => e.message ?? e?.toString())

  const resp: OpenAI.Chat.ChatCompletion = {
    id: "chatcmpl-abc123",
    object: "chat.completion",
    created: Date.now(),
    model: req.model,
    choices: [
      {
        message: { role: "assistant", content: geminiResp },
        logprobs: null,
        finish_reason: "stop",
        index: 0,
      },
    ],
  }
  return resp
}
