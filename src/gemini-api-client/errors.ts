export class GoogleGenerativeAIError extends Error {
  constructor(message: string) {
    super(`[GoogleGenerativeAI Error]: ${message}`)
  }
}

export class GoogleGenerativeAIResponseError<T> extends GoogleGenerativeAIError {
  constructor(
    message: string,
    public response?: T,
  ) {
    super(message)
  }
}
