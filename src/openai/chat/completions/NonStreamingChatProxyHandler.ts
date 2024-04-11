import { generateContent } from "../../../gemini-api-client/gemini-api-client.ts"
import type { FunctionCall } from "../../../gemini-api-client/types.ts"
import type { Logger } from "../../../log.ts"
import type { OpenAI } from "../../../types.ts"
import { type ApiParam, genModel } from "../../../utils.ts"

export async function nonStreamingChatProxyHandler(
  req: OpenAI.Chat.ChatCompletionCreateParams,
  apiParam: ApiParam,
  log?: Logger,
) {
  const [model, geminiReq] = genModel(req)
  const geminiResp: string | FunctionCall = await generateContent(apiParam, model, geminiReq)
    .then((it) => it.response.result())
    .catch((err) => {
      // 出现异常时打印请求参数和响应，以便调试
      log?.error(req)
      log?.error(err?.message ?? err.toString())
      return err?.message ?? err.toString()
    })
  log?.debug(req)
  log?.debug(geminiResp)

  const resp: OpenAI.Chat.ChatCompletion = {
    id: "chatcmpl-abc123",
    object: "chat.completion",
    created: Math.floor(Date.now() / 1000),
    model: req.model,
    choices: [
      {
        message: {
          role: "assistant",
          content: typeof geminiResp === "string" ? geminiResp : null,

          ...(typeof geminiResp === "string"
            ? undefined
            : {
                function_call: {
                  name: geminiResp.name ?? "",
                  arguments: JSON.stringify(geminiResp.args),
                },
              }),
        },
        logprobs: null,
        finish_reason: "stop",
        index: 0,
      },
    ],
  }
  return resp
}
