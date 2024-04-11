import type { components } from "../generated-types/gemini-types.ts"

export type GenerateContentRequest = components["schemas"]["GenerateContentRequest"]
export type Content = components["schemas"]["Content"]

export type GenerateContentResponse = components["schemas"]["GenerateContentResponse"]

export type Candidate = components["schemas"]["Candidate"]

export type FunctionCall = components["schemas"]["FunctionCall"]

export type FinishReason = Candidate["finishReason"]

export type Part = components["schemas"]["Part"]

export interface RequestOptions {
  timeout: number
}

export interface EnhancedGenerateContentResponse extends GenerateContentResponse {
  /**
   * Returns the text string from the response, if available.
   * Throws if the prompt or candidate was blocked.
   */
  result: () => string | FunctionCall
}

export interface GenerateContentResult {
  response: EnhancedGenerateContentResponse
}
