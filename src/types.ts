import type { components } from "./generated-types/openai-types.ts"
// deno-lint-ignore-file no-namespace
import type { Logger } from "./log.ts"

export declare namespace OpenAI {
  namespace Chat {
    type ChatCompletionCreateParams = components["schemas"]["CreateChatCompletionRequest"]
    type ChatCompletionChunk = components["schemas"]["CreateChatCompletionStreamResponse"]
    type ChatCompletion = components["schemas"]["CreateChatCompletionResponse"]
    type ChatCompletionMessageParam = components["schemas"]["ChatCompletionRequestMessage"]
    type CreateEmbeddingRequest = components["schemas"]["CreateEmbeddingRequest"]
    type FunctionObject = components["schemas"]["FunctionObject"]
  }
  namespace Models {
    type ModelsPage = components["schemas"]["ListModelsResponse"]
    type Model = components["schemas"]["Model"]
  }
  namespace Embeddings {
    type EmbeddingCreateParams = components["schemas"]["CreateEmbeddingRequest"]
    type CreateEmbeddingResponse = components["schemas"]["CreateEmbeddingResponse"]
  }
}

// export type { OpenAI } from "https://deno.land/x/openai@v4.28.0/mod.ts"

declare global {
  interface Request {
    logger: Logger | undefined
  }
}
