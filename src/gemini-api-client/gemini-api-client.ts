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
) {
  const url = new RequestUrl(model, task, true, apiParam)
  const response = await makeRequest(url, JSON.stringify(params), requestOptions)
  const body = response.body
  if (body == null) {
    return
  }

  for await (const event of body.pipeThrough(new TextDecoderStream()).pipeThrough(new EventSourceParserStream())) {
    const responseJson = JSON.parse(event.data) as Task[T]["response"]
    yield responseJson
  }
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

export class RequestUrl {
  public model: GeminiModel
  public task: keyof Task
  public stream: boolean
  public apiParam: ApiParam
  constructor(model: GeminiModel, task: keyof Task, stream: boolean, apiParam: ApiParam) {
    this.model = model
    this.task = task
    this.stream = stream
    this.apiParam = apiParam
  }

  toURL(): URL {
    const api_version = this.model.apiVersion()
    const url = new URL(`${BASE_URL}/${api_version}/models/${this.model}:${this.task}`)
    url.searchParams.append("key", this.apiParam.apikey)
    if (this.stream) {
      url.searchParams.append("alt", "sse")
    }
    return url
  }
}

const BASE_URL = "https://generativelanguage.googleapis.com"

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
