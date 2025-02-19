import type { components } from "../generated-types/gemini-types.ts"

export type GenerateContentRequest = components["schemas"]["GenerateContentRequest"]

export type Content = components["schemas"]["Content"]

export type GenerateContentResponse = components["schemas"]["GenerateContentResponse"]

export type Candidate = components["schemas"]["Candidate"]

export type FunctionCall = components["schemas"]["FunctionCall"]

export type FinishReason = Candidate["finishReason"]

export type Part = components["schemas"]["Part"]

export type JsonSchema = components["schemas"]["Schema"]

export type EmbedContentRequest = components["schemas"]["EmbedContentRequest"]

export type EmbedContentResponse = components["schemas"]["EmbedContentResponse"]

export interface RequestOptions {
  timeout: number
}
