import { generateContent } from "../../../gemini-api-client/gemini-api-client.ts"
import type { OpenAI } from "../../../types.ts"
import { genModel } from "../../../utils.ts"
import { ChatProxyHandlerType } from "./ChatProxyHandler.ts"

export const nonStreamingChatProxyHandler: ChatProxyHandlerType = async (c, req, apiParam) => {
  const log = c.var.log
  const [model, geminiReq] = genModel(req)
  const geminiResp: string = await generateContent(apiParam, model, geminiReq)
    .then((it) => it.response.text())
    .catch((err) => {
      // 出现异常时打印请求参数和响应，以便调试
      log.error(req)
      log.error(err?.message ?? err.toString())
      return err?.message ?? err.toString()
    })
  log.debug(req)
  log.debug(geminiResp)

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
  return c.json(resp)
}
