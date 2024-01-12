import type { OpenAI } from "openai"
import type { Content, GoogleGenerativeAI, Part } from "@google/generative-ai"

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

export function openAiMessageToGeminiMessage(
  messages: OpenAI.Chat.ChatCompletionMessageParam[],
): Content[] {
  const result: Content[] = messages.flatMap(({ role, content }) => {
    if (role === "system") {
      return [
        { role: "user", parts: [{ text: content }] },
        { role: "model", parts: [{ text: "" }] },
      ]
    }

    const parts: Part[] =
      content == null || typeof content === "string"
        ? [{ text: content?.toString() ?? "" }]
        : content.map((item) =>
            item.type === "text"
              ? { text: item.text }
              : parseBase64(item.image_url.url),
          )

    return [{ role: "user" === role ? "user" : "model", parts: parts }]
  })

  return result
}

function hasImageMessage(
  messages: OpenAI.Chat.ChatCompletionMessageParam[],
): boolean {
  return messages.some((msg) => {
    const content = msg.content
    if (content == null) {
      return false
    }
    if (typeof content === "string") {
      return false
    }
    return content.some((it) => it.type === "image_url")
  })
}

export function genModel(
  genAi: GoogleGenerativeAI,
  req:
    | OpenAI.ChatCompletionCreateParamsNonStreaming
    | OpenAI.ChatCompletionCreateParamsStreaming,
) {
  const model = genAi.getGenerativeModel({
    model: hasImageMessage(req.messages)
      ? GeminiModel.GEMINI_PRO_VISION
      : GeminiModel.GEMINI_PRO,
    generationConfig: {
      maxOutputTokens: req.max_tokens ?? undefined,
      temperature: req.temperature ?? undefined,
      topP: req.top_p ?? undefined,
    },
  })
  return model
}
enum GeminiModel {
  GEMINI_PRO = "gemini-pro",
  GEMINI_PRO_VISION = "gemini-pro-vision",
}
