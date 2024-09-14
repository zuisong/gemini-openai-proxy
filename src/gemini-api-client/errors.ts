export class GoogleGenerativeAIError extends Error {
  constructor(message: string) {
    super(`[GoogleGenerativeAI Error]: ${message}`)
  }
}

export class GoogleGenerativeAIResponseError<T> extends GoogleGenerativeAIError {
  public response?: T
  constructor(message: string, response?: T) {
    super(message)
    this.response = response
  }
}
