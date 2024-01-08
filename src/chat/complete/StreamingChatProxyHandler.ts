import { Content, GoogleGenerativeAI } from "@google/generative-ai"
import { Context } from "hono/"
import { OpenAI } from "openai"
import { streamSSE } from "hono/streaming"
import log from "loglevel"

export const StreamingChatProxyHandler = async (
  c: Context,
  req: OpenAI.Chat.ChatCompletionCreateParamsStreaming,
  genAI: GoogleGenerativeAI,
) => {
  const model = genAI.getGenerativeModel({
    model: "gemini-pro",
    generationConfig: {
      maxOutputTokens: req.max_tokens ?? undefined,
      temperature: req.temperature ?? undefined,
    },
  })
  const geminiResp: string = await model
    .generateContent({
      contents: req.messages
        .map((msg) => {
          return {
            role: ["user", "system"].includes(msg.role) ? "user" : "model",
            parts: [{ text: msg.content?.toString() ?? "" }],
          } satisfies Content
        })
        .flatMap((it, idx, arr) =>
          // 连续出现两个user消息 是不允许的
          it.role === arr.at(idx + 1)?.role
            ? [it, { role: "model", parts: [{ text: "" }] }]
            : [it],
        ),
    })
    .then((it) => it.response.text())
    .catch((err) => err?.message ?? err.toString())

  log.debug(JSON.stringify(geminiResp))

  const resp: OpenAI.Chat.ChatCompletionChunk = {
    id: "chatcmpl-abc123",
    object: "chat.completion.chunk",
    created: Date.now(),
    model: req.model,
    choices: [
      {
        delta: {
          role: "assistant",
          content: geminiResp,
        },
        logprobs: null,
        finish_reason: "stop",
        index: 0,
      },
    ],
  }

  return streamSSE(c, async (stream) => {
    await stream.writeSSE({ data: JSON.stringify(resp) })
    await stream.writeSSE({ data: "[DONE]" })
    await stream.close()
  })
}
