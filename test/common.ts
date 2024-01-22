import * as process from "node:process"

export function getApiKeyFromEnv(): string {
  return process.env.GEMINI_API_KEY ?? ""
}
