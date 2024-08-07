import { EventSourceParserStream } from "eventsource-parser/stream"
import type { ApiParam, GeminiModel } from "../utils.ts"
import { GoogleGenerativeAIError } from "./errors.ts"
import type {
  EmbedContentRequest,
  EmbedContentResponse,
  GenerateContentRequest,
  GenerateContentResponse,
  GenerateContentResult,
  RequestOptions,
} from "./types.ts"

interface Task {
  generateContent: {
    request: GenerateContentRequest
    response: GenerateContentResponse
  }
  streamGenerateContent: {
    request: GenerateContentRequest
    response: GenerateContentResponse
  }
  embedContent: {
    request: EmbedContentRequest
    response: EmbedContentResponse
  }
}

export async function* generateContent<T extends keyof Task>(
  task: T,
  apiParam: ApiParam,
  model: GeminiModel,
  params: Task[T]["request"],
  requestOptions?: RequestOptions,
): AsyncGenerator<Task[T]["response"]> {
  const url = new RequestUrl(model, task, true, apiParam)
  const response = await makeRequest(url, JSON.stringify(params), requestOptions)
  const body = response.body
  if (body == null) {
    return
  }

  for await (const event of body.pipeThrough(new TextDecoderStream()).pipeThrough(new EventSourceParserStream())) {
    const responseJson: Task[T]["response"] = JSON.parse(event.data)
    yield responseJson
  }
}
export enum TaskType {
  TASK_TYPE_UNSPECIFIED = "TASK_TYPE_UNSPECIFIED",
  RETRIEVAL_QUERY = "RETRIEVAL_QUERY",
  RETRIEVAL_DOCUMENT = "RETRIEVAL_DOCUMENT",
  SEMANTIC_SIMILARITY = "SEMANTIC_SIMILARITY",
  CLASSIFICATION = "CLASSIFICATION",
  CLUSTERING = "CLUSTERING",
}

async function makeRequest(url: RequestUrl, body: string, requestOptions?: RequestOptions): Promise<Response> {
  let response: Response
  try {
    response = await fetch(url.toURL(), {
      ...buildFetchOptions(requestOptions),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    })
    if (!response.ok) {
      let message = ""
      try {
        const errResp = await response.json()
        message = errResp.error.message
        if (errResp.error.details) {
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

export class RequestUrl {
  constructor(
    public model: GeminiModel,
    public task: keyof Task,
    public stream: boolean,
    public apiParam: ApiParam,
  ) {}
  toURL(): URL {
    const api_version = API_VERSION.v1beta
    const url = new URL(`${BASE_URL}/${api_version}/models/${this.model}:${this.task}`)
    url.searchParams.append("key", this.apiParam.apikey)
    if (this.stream) {
      url.searchParams.append("alt", "sse")
    }
    return url
  }
}

const BASE_URL = "https://generativelanguage.googleapis.com"

enum API_VERSION {
  v1beta = "v1beta",
  v1 = "v1",
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
