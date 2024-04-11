import type { OpenAI } from "../types.ts"

/**
 * Base parameters for a number of methods.
 * @public
 */
export interface BaseParams {
  safetySettings?: SafetySetting[]
  generationConfig?: GenerationConfig
}

/**
 * Params for calling  {@link GenerativeModel.batchEmbedContents}
 * @public
 */
export interface BatchEmbedContentsRequest {
  requests: EmbedContentRequest[]
}

/**
 * Response from calling {@link GenerativeModel.batchEmbedContents}.
 * @public
 */
export interface BatchEmbedContentsResponse {
  embeddings: ContentEmbedding[]
}

/**
 * Reason that a prompt was blocked.
 * @public
 */
export enum BlockReason {
  BLOCKED_REASON_UNSPECIFIED = "BLOCKED_REASON_UNSPECIFIED",
  SAFETY = "SAFETY",
  OTHER = "OTHER",
}

/**
 * Citation metadata that may be found on a {@link GenerateContentCandidate}.
 * @public
 */
export interface CitationMetadata {
  citationSources: CitationSource[]
}

/**
 * A single citation source.
 * @public
 */
export interface CitationSource {
  startIndex?: number
  endIndex?: number
  uri?: string
  license?: string
}

/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Content type for both prompts and response candidates.
 * @public
 */
export interface Content extends InputContent {
  parts: Part[]
}

/**
 * A single content embedding.
 * @public
 */
export interface ContentEmbedding {
  values: number[]
}

/**
 * Params for calling {@link GenerativeModel.countTokens}
 * @public
 */
export interface CountTokensRequest {
  contents: Content[]
}

/**
 * Response from calling {@link GenerativeModel.countTokens}.
 * @public
 */
export interface CountTokensResponse {
  totalTokens: number
}

/**
 * Params for calling {@link GenerativeModel.embedContent}
 * @public
 */
export interface EmbedContentRequest {
  content: Content
  taskType?: TaskType
  title?: string
}

/**
 * Response from calling {@link GenerativeModel.embedContent}.
 * @public
 */
export interface EmbedContentResponse {
  embedding: ContentEmbedding
}

/**
 * Response object wrapped with helper methods.
 *
 * @public
 */
export interface EnhancedGenerateContentResponse extends GenerateContentResponse {
  /**
   * Returns the text string from the response, if available.
   * Throws if the prompt or candidate was blocked.
   */
  result: () => string | FunctionCall
}

export interface FunctionCall {
  name: string
  args: Record<string, string>
}

/**
 * Reason that a candidate finished.
 * @public
 */
export enum FinishReason {
  FINISH_REASON_UNSPECIFIED = "FINISH_REASON_UNSPECIFIED",
  STOP = "STOP",
  MAX_TOKENS = "MAX_TOKENS",
  SAFETY = "SAFETY",
  RECITATION = "RECITATION",
  OTHER = "OTHER",
}

/**
 * A candidate returned as part of a {@link GenerateContentResponse}.
 * @public
 */
export interface GenerateContentCandidate {
  index: number
  content: Content
  finishReason?: FinishReason
  finishMessage?: string
  safetyRatings?: SafetyRating[]
  citationMetadata?: CitationMetadata
}

/**
 * Request sent to `generateContent` endpoint.
 * @public
 */
export interface GenerateContentRequest extends BaseParams {
  contents: Content[]
  tools: {
    functionDeclarations: OpenAI.Chat.FunctionObject[]
  }[]
}

/**
 * Individual response from {@link GenerativeModel.generateContent} and
 * {@link GenerativeModel.generateContentStream}.
 * `generateContentStream()` will return one in each chunk until
 * the stream is done.
 * @public
 */
export interface GenerateContentResponse {
  candidates?: GenerateContentCandidate[]
  promptFeedback?: PromptFeedback
}

/**
 * Result object returned from generateContent() call.
 *
 * @public
 */
export interface GenerateContentResult {
  response: EnhancedGenerateContentResponse
}

/**
 * Result object returned from generateContentStream() call.
 * Iterate over `stream` to get chunks as they come in and/or
 * use the `response` promise to get the aggregated response when
 * the stream is done.
 *
 * @public
 */
export interface GenerateContentStreamResult {
  stream: AsyncGenerator<EnhancedGenerateContentResponse>
  response: Promise<EnhancedGenerateContentResponse>
}

/**
 * Config options for content-related requests
 * @public
 */
export interface GenerationConfig {
  candidateCount?: number
  stopSequences?: string[]
  maxOutputTokens?: number
  temperature?: number
  topP?: number
  topK?: number
}

/**
 * Interface for sending an image.
 * @public
 */
export interface GenerativeContentBlob {
  mimeType: string
  /**
   * Image as a base64 string.
   */
  data: string
}
/**
 * Threshold above which a prompt or candidate will be blocked.
 * @public
 */
export enum HarmBlockThreshold {
  HARM_BLOCK_THRESHOLD_UNSPECIFIED = "HARM_BLOCK_THRESHOLD_UNSPECIFIED",
  BLOCK_LOW_AND_ABOVE = "BLOCK_LOW_AND_ABOVE",
  BLOCK_MEDIUM_AND_ABOVE = "BLOCK_MEDIUM_AND_ABOVE",
  BLOCK_ONLY_HIGH = "BLOCK_ONLY_HIGH",
  BLOCK_NONE = "BLOCK_NONE",
}

/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Harm categories that would cause prompts or candidates to be blocked.
 * @public
 */
export enum HarmCategory {
  HARM_CATEGORY_UNSPECIFIED = "HARM_CATEGORY_UNSPECIFIED",
  HARM_CATEGORY_HATE_SPEECH = "HARM_CATEGORY_HATE_SPEECH",
  HARM_CATEGORY_SEXUALLY_EXPLICIT = "HARM_CATEGORY_SEXUALLY_EXPLICIT",
  HARM_CATEGORY_HARASSMENT = "HARM_CATEGORY_HARASSMENT",
  HARM_CATEGORY_DANGEROUS_CONTENT = "HARM_CATEGORY_DANGEROUS_CONTENT",
}

/**
 * Probability that a prompt or candidate matches a harm category.
 * @public
 */
export enum HarmProbability {
  HARM_PROBABILITY_UNSPECIFIED = "HARM_PROBABILITY_UNSPECIFIED",
  NEGLIGIBLE = "NEGLIGIBLE",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
}

/**
 * Content part interface if the part represents an image.
 * @public
 */
export interface InlineDataPart {
  text?: never
  inlineData: GenerativeContentBlob

  functionCall?: never
}

/**
 * Content part interface if the part represents an image.
 * @public
 */
export interface FunctionPart {
  text?: never
  functionCall?: FunctionCall
  inlineData?: never
}

/**
 * Content that can be provided as history input to startChat().
 * @public
 */
export interface InputContent {
  parts: string | Array<string | Part>
  role: string
}

/**
 * Params passed to {@link GoogleGenerativeAI.getGenerativeModel}.
 * @public
 */
export interface ModelParams extends BaseParams {
  model: string
}

/**
 * Content part - includes text or image part types.
 * @public
 */
export type Part = TextPart | InlineDataPart | FunctionPart

/**
 * If the prompt was blocked, this will be populated with `blockReason` and
 * the relevant `safetyRatings`.
 * @public
 */
export interface PromptFeedback {
  blockReason: BlockReason
  safetyRatings: SafetyRating[]
  blockReasonMessage?: string
}

/**
 * Params passed to {@link GoogleGenerativeAI.getGenerativeModel}.
 * @public
 */
export interface RequestOptions {
  timeout?: number
}

/**
 * A safety rating associated with a {@link GenerateContentCandidate}
 * @public
 */
export interface SafetyRating {
  category: HarmCategory
  probability: HarmProbability
}

/**
 * Safety setting that can be sent as part of request parameters.
 * @public
 */
export interface SafetySetting {
  category: HarmCategory
  threshold: HarmBlockThreshold
}

/**
 * Params for {@link GenerativeModel.startChat}.
 * @public
 */
export interface StartChatParams extends BaseParams {
  history?: InputContent[]
}

/**
 * Task type for embedding content.
 * @public
 */
export enum TaskType {
  TASK_TYPE_UNSPECIFIED = "TASK_TYPE_UNSPECIFIED",
  RETRIEVAL_QUERY = "RETRIEVAL_QUERY",
  RETRIEVAL_DOCUMENT = "RETRIEVAL_DOCUMENT",
  SEMANTIC_SIMILARITY = "SEMANTIC_SIMILARITY",
  CLASSIFICATION = "CLASSIFICATION",
  CLUSTERING = "CLUSTERING",
}

/**
 * Content part interface if the part represents a text string.
 * @public
 */
export interface TextPart {
  text: string
  inlineData?: never

  functionCall?: never
}
