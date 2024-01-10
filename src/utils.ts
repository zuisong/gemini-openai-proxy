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
  const systemMessage = messages
    .filter((msg) => msg.role === "system")
    .map((msg) => {
      const { content } = msg as OpenAI.ChatCompletionSystemMessageParam
      return {
        text: content,
      } satisfies Part
    })
    .flatMap((sysMessage) => {
      return [
        {
          role: "user",
          parts: [sysMessage],
        },
        {
          role: "model",
          parts: [{ text: "" }],
        },
      ]
    })

  const result = messages
    .filter((msg) => msg.role !== "system")
    .map(({ role, content }) => {
      let parts: Part[]
      if (content == null) {
        parts = [{ text: "" }]
      } else if (typeof content === "string") {
        parts = [{ text: content }]
      } else {
        parts = content.map((item) => {
          if (item.type === "image_url") {
            return parseBase64(item.image_url.url)
          }
          return { text: item.text }
        })
      }

      return {
        role: "user" === role ? "user" : "model",
        parts: parts,
      } satisfies Content
    })

  return [...systemMessage, ...result]
}

export function hasImageMessage(
  messages: Array<OpenAI.Chat.ChatCompletionMessageParam>,
): boolean {
  return messages.some((msg) => {
    const content = msg.content
    if (content == null) return false
    if (typeof content === "string") return false
    return content.some((it) => it.type === "image_url")
  })
}
