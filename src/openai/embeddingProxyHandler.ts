import { embedContent } from "../gemini-api-client/gemini-api-client.ts"
import type { EmbedContentRequest } from "../gemini-api-client/types.ts"
import type { OpenAI } from "../types.ts"
import { GeminiModel, getToken } from "../utils.ts"

export async function embeddingProxyHandler(rawReq: Request): Promise<Response> {
  const req = (await rawReq.json()) as OpenAI.Embeddings.EmbeddingCreateParams
  const log = rawReq.logger
  const headers = rawReq.headers
  const apiParam = getToken(headers)
  if (apiParam == null) {
    return new Response("Unauthorized", { status: 401 })
  }

  const embedContentRequest: EmbedContentRequest = {
    model: "models/text-embedding-004",
    content: {
      parts: [req.input].flat().map((it) => ({ text: it.toString() })),
    },
  }

  log?.warn("request", embedContentRequest)

  let geminiResp: number[] | undefined = []

  try {
    const it = await embedContent(apiParam, new GeminiModel("text-embedding-004"), embedContentRequest)
    const data = it?.embedding?.values
    geminiResp = data
  } catch (err) {
    // 出现异常时打印请求参数和响应，以便调试
    log?.error(req)
    log?.error(err?.message ?? err.toString())
    geminiResp = err?.message ?? err.toString()
  }

  log?.debug(req)
  log?.debug(geminiResp)

  const resp: OpenAI.Embeddings.CreateEmbeddingResponse = {
    object: "list",
    data: [
      {
        object: "embedding",
        index: 0,
        embedding: geminiResp ?? [],
      },
    ],
    model: req.model,
    usage: {
      prompt_tokens: 5,
      total_tokens: 5,
    },
  }

  return Response.json(resp)
}
