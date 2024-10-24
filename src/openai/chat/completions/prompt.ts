import type { OpenAI } from "../../../types.ts"


export function calculatePromptTokens(
  messages: OpenAI.Chat.ChatCompletionMessageParam[],
): number {
  let result = 0;
  messages.flatMap(({ _, content }) => {
    result += content.length;
  })
  return result
}