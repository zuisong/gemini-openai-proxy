import type {
  Content,
  GenerateContentCandidate,
  GenerateContentRequest,
  Part,
} from "./gemini-api-client/types.ts"
import { HarmBlockThreshold, HarmCategory } from "./gemini-api-client/types.ts"
import type { OpenAI } from "./types.ts"

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
      mimeType,
      data,
    },
  }
}

export function openAiMessageToGeminiMessage(
  messages: OpenAI.Chat.ChatCompletionMessageParam[],
): Content[] {
  const result: Content[] = messages
    .flatMap(({ role, content }) => {
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
    .flatMap((item, idx, arr) => {
      if (item.role === arr.at(idx + 1)?.role && item.role === "user") {
        return [item, { role: "model", parts: [{ text: "" }] }]
      }
      return [item]
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
  req: OpenAI.Chat.ChatCompletionCreateParams,
): [GeminiModel, GenerateContentRequest] {
  const model = hasImageMessage(req.messages)
    ? GeminiModel.GEMINI_PRO_VISION
    : GeminiModel.GEMINI_PRO

  const generateContentRequest: GenerateContentRequest = {
    contents: openAiMessageToGeminiMessage(req.messages),
    generationConfig: {
      maxOutputTokens: req.max_tokens ?? undefined,
      temperature: req.temperature ?? undefined,
      topP: req.top_p ?? undefined,
    },
    safetySettings: [
      HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      HarmCategory.HARM_CATEGORY_HARASSMENT,
    ].map((category) => ({
      category,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    })),
  }
  return [model, generateContentRequest]
}
export enum GeminiModel {
  GEMINI_PRO = "gemini-pro",
  GEMINI_PRO_VISION = "gemini-pro-vision",
}
