import type { OpenAI } from "openai"
import type { Content, Part } from "@google/generative-ai"
export function getToken(headers: Record<string, string>): string | null {
  for (const [k, v] of Object.entries(headers)) {
    if (k.toLowerCase() === "authorization") {
      return v.substring(v.indexOf(" ") + 1)
    }
  }
  return null
}

function parseBase64(base64: string): Part {
  if (!base64.startsWith("data:")) {
    return { text: "" }
  }
  const [m, data, ..._arr] = base64.split(",")
  const mimeType = m.match(/:(?<mime>.*?);/)?.groups?.mime ?? "img/png"
  return {
    inlineData: {
      mimeType: mimeType,
      data,
    },
  }
}

export function openAIMessageToGeminiMessage(
  messages: Array<OpenAI.Chat.ChatCompletionMessageParam>,
): Array<Content> {
  const result = messages
    .map(({ role, content }) => {
      let parts: Part[]

      if (typeof content === "string") {
        parts = [{ text: content?.toString() ?? "" }]
      } else {
        parts =
          content?.map((item) => {
            if (item.type === "image_url") {
              return parseBase64(item.image_url.url)
            }
            return { text: item.text }
          }) ?? []
      }

      return {
        role: ["user", "system"].includes(role) ? "user" : "model",
        parts,
      } satisfies Content
    })
    .flatMap((it, idx, arr) =>
      // 连续出现两个user消息 是不允许的
      it.role === arr.at(idx + 1)?.role
        ? [it, { role: "model", parts: [{ text: "" }] }]
        : [it],
    )

  return result
}

export function hasImageMesasge(
  messages: Array<OpenAI.Chat.ChatCompletionMessageParam>,
): boolean {
  return messages.some((msg) => {
    const content = msg.content
    if (content == null) return false
    if (typeof content === "string") return false
    return content.some((it) => it.type === "image_url")
  })
}
