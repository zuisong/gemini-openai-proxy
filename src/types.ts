// deno-lint-ignore-file no-namespace
import type { Logger } from "./log.ts"
import type { components } from "./openai-types.ts"

export namespace OpenAI {
  export namespace Chat {
    export type ChatCompletionCreateParams = components["schemas"]["CreateChatCompletionRequest"]
    export type ChatCompletionChunk = components["schemas"]["CreateChatCompletionStreamResponse"]
    export type ChatCompletion = components["schemas"]["CreateChatCompletionResponse"]
    export type ChatCompletionMessageParam = components["schemas"]["ChatCompletionRequestMessage"]
    export type FunctionObject = components["schemas"]["FunctionObject"]
  }
  export namespace Models {
    export type Model = components["schemas"]["Model"]
  }
}

// export type { OpenAI } from "https://deno.land/x/openai@v4.28.0/mod.ts"

declare global {
  interface Request {
    logger: Logger | undefined
  }
}
