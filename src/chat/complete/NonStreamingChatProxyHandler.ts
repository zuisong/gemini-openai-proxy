import type { OpenAI } from "openai"
import { genModel, openAIMessageToGeminiMessage } from "../../utils.ts"
import { ChatProxyHandlerType } from "./ChatProxyHandler.ts"

export const nonStreamingChatProxyHandler: ChatProxyHandlerType = async (
  c,
  req,
  genAi,
) => {
  const log = c.get("log")
  const model = genModel(genAi, req)
  const geminiResp: string = await model
    .generateContent({
      contents: openAIMessageToGeminiMessage(req.messages),
    })
    .then((it) => it.response.text())
    .catch((err) => err?.message ?? err.toString())

  log.debug(JSON.stringify(geminiResp))

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
