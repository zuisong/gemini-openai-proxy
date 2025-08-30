import { EventSourceParserStream } from "eventsource-parser/stream"
import type { components } from "../generated-types/gemini-types.ts"
import type { ApiParam, GeminiModel } from "../utils.ts"
import { GoogleGenerativeAIError } from "./errors.ts"
import type {
  EmbedContentRequest,
  EmbedContentResponse,
  GenerateContentRequest,
  GenerateContentResponse,
  RequestOptions,
} from "./types.ts"


// +++ NEW +++
// Define the request structure for batchEmbedContents
// It's an array of individual embedContent requests.
export interface BatchEmbedContentsRequest {
  requests: EmbedContentRequest[]
}

// +++ NEW +++
// Define the response structure for batchEmbedContents
// It returns a list of embedding objects.
export interface BatchEmbedContentsResponse {
  embeddings: {
    values: number[]
    // The schema might have other fields like `model`, `statistics`, etc.
    // You would have to add them here manually.
  }[]
}

interface Task {
  streamGenerateContent: {
    request: GenerateContentRequest
    response: GenerateContentResponse
  }
  embedContent: {
    request: EmbedContentRequest
    response: EmbedContentResponse
  }
  // +++ NEW +++ Add the new task to our interface
  batchEmbedContents: {
    request: BatchEmbedContentsRequest
    response: BatchEmbedContentsResponse
  }
}

export async function listModels(apiParam: ApiParam | null) {
  const url = new URL(`${BASE_URL}/v1beta/openai/models`)
  const resp = await makeRequest(url, undefined, undefined, "GET", {
    Authorization: `Bearer ${apiParam?.apikey ?? ""}`,
  })
  return (await resp.json()) as components["schemas"]["ListModelsResponse"]
}
export async function* streamGenerateContent(
  apiParam: ApiParam,
  model: GeminiModel,
  params: Task["streamGenerateContent"]["request"],
  requestOptions?: RequestOptions,
) {
  const response = await makeRequest(
    toURL({ model, task: "streamGenerateContent", stream: true, apiParam }),
    JSON.stringify(params),
    requestOptions,
  )
  const body = response.body
  if (body == null) {
    return
  }

  for await (const event of body.pipeThrough(new TextDecoderStream()).pipeThrough(new EventSourceParserStream())) {
    const responseJson = JSON.parse(event.data) as Task["streamGenerateContent"]["response"]
    yield responseJson
  }
}

export async function embedContent(
  apiParam: ApiParam,
  model: GeminiModel,
  params: Task["embedContent"]["request"],
  requestOptions?: RequestOptions,
) {
  const response = await makeRequest(
    toURL({ model, task: "embedContent", stream: false, apiParam }),
    JSON.stringify(params),
    requestOptions,
  )
  const body = response.body
  if (body == null) {
    return
  }

  const responseJson = (await response.json()) as Task["embedContent"]["response"]
  return responseJson
}

// +++ NEW +++
/**
 * Makes a batch embedding request.
 */
export async function batchEmbedContents(
  apiParam: ApiParam,
  model: GeminiModel,
  params: Task["batchEmbedContents"]["request"],
  requestOptions?: RequestOptions,
): Promise<Task["batchEmbedContents"]["response"]> {
  const response = await makeRequest(
    toURL({ model, task: "batchEmbedContents", stream: false, apiParam }),
    JSON.stringify(params),
    requestOptions,
  )

  const responseJson = (await response.json()) as Task["batchEmbedContents"]["response"]
  return responseJson
}

async function makeRequest(
  url: URL,
  body: string | undefined,
  requestOptions?: RequestOptions,
  requestMethod = "POST",
  headers: Record<string, string> = {},
): Promise<Response> {
  let response: Response
  try {
    response = await fetch(url, {
      ...buildFetchOptions(requestOptions),
      method: requestMethod,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body,
    })
    if (!response.ok) {
      let message: string | undefined = ""
      try {
        const errResp = (await response.json()) as components["schemas"]["Operation"]
        message = errResp.error?.message
        if (errResp?.error?.details) {
          message += ` ${JSON.stringify(errResp.error.details)}`
        }
      } catch (_e) {
        // ignored
      }
      throw new Error(`[${response.status} ${response.statusText}] ${message}`)
    }
  } catch (e) {
    console.log(e)
    const err = new GoogleGenerativeAIError(`Error fetching from google -> ${e.message}`)
    err.stack = e.stack
    throw err
  }
  return response
}

const BASE_URL = "https://generativelanguage.googleapis.com"

function toURL({
  model,
  task,
  stream,
  apiParam,
}: {
  model: GeminiModel
  task: keyof Task
  stream: boolean
  apiParam: ApiParam
}) {
  const api_version = model.apiVersion()
  const url = new URL(`${BASE_URL}/${api_version}/models/${model}:${task}`)
  url.searchParams.append("key", apiParam.apikey)
  if (stream) {
    url.searchParams.append("alt", "sse")
  }
  return url
}

/**
 * Generates the request options to be passed to the fetch API.
 * @param requestOptions - The user-defined request options.
 * @returns The generated request options.
 */
function buildFetchOptions(requestOptions?: RequestOptions): RequestInit {
  const fetchOptions = {} as RequestInit
  if (requestOptions?.timeout) {
    const abortController = new AbortController()
    const signal = abortController.signal
    setTimeout(() => abortController.abort(), requestOptions.timeout)
    fetchOptions.signal = signal
  }
  return fetchOptions
}
