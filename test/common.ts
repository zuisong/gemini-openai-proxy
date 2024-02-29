export function getApiKeyFromEnv(): string {
  return safeRun(() => Deno.env.toObject().GEMINI_API_KEY) ?? ""
}

export function safeRun<T>(fn: () => T): T | undefined {
  try {
    return fn()
  } catch (e) {
    console.error(e)
  }
  return undefined
}
