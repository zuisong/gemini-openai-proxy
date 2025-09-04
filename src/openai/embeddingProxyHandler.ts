import type { BatchEmbedContentsRequest } from "../gemini-api-client/gemini-api-client.ts"
import { batchEmbedContents } from "../gemini-api-client/gemini-api-client.ts"
import type { OpenAI } from "../types.ts"
import { GeminiModel, getToken } from "../utils.ts"

//https://ai.google.dev/gemini-api/docs/embeddings#javascript_1
//https://ai.google.dev/gemini-api/docs/embeddings#control-embedding-size
const GEMINI_EMBEDDING_MODEL = "text-embedding-004"
//"embedding-001"
//"gemini-embedding-001"
const GEMINI_EMBEDDING_MODEL_OUTPUT_DIM = 768
// Google API's recommended batch size limit is 100
const BATCH_SIZE = 100
//https://github.com/lobehub/lobe-chat/issues/8482
//change database can solve this problem
//alter table embeddings alter column embeddings type vector(768);
export async function embeddingProxyHandler(rawReq: Request): Promise<Response> {
  const req = (await rawReq.json()) as OpenAI.Embeddings.EmbeddingCreateParams
  const log = rawReq.logger
  const headers = rawReq.headers
  const apiParam = getToken(headers)
  if (apiParam == null) {
    return new Response("Unauthorized", { status: 401 })
  }

  // batch
  const inputs = [req.input].flat().map((it) => it.toString())
  const allEmbeddings: number[][] = []

  const modelIdentifier = `models/${GEMINI_EMBEDDING_MODEL}`
  try {
    // Loop through the inputs in chunks of BATCH_SIZE
    for (let i = 0; i < inputs.length; i += BATCH_SIZE) {
      const batchInputs = inputs.slice(i, i + BATCH_SIZE)

      log?.warn(`Processing batch of ${batchInputs.length} inputs... (starting at index ${i})`)

      // Construct the request payload for batchEmbedContents
      const batchRequest: BatchEmbedContentsRequest = {
        // The `requests` field is an array of individual embedding requests
        requests: batchInputs.map((text) => ({
          model: modelIdentifier,
          content: {
            parts: [{ text }],
          },
        })),
      }

      // Call the new, efficient batching function
      const response = await batchEmbedContents(apiParam, new GeminiModel(GEMINI_EMBEDDING_MODEL), batchRequest)

      // The response contains a list of embeddings, in the same order as the requests
      if (response.embeddings) {
        const embeddingsForBatch = response.embeddings.map((emb) => emb.values)
        allEmbeddings.push(...embeddingsForBatch)
      }
    }

    // Now, format the collected embeddings into the OpenAI-compatible response structure
    const responseData = allEmbeddings.map((embedding, index) => ({
      object: "embedding",
      index: index,
      embedding: embedding,
    }))

    const finalResponse: OpenAI.Embeddings.CreateEmbeddingResponse = {
      object: "list",
      data: responseData,
      model: req.model,
      usage: {
        prompt_tokens: 0, // Note: You would need to implement token counting separately
        total_tokens: 0,
      },
    }

    return Response.json(finalResponse)
  } catch (err) {
    log?.error("Request failed:", req)
    log?.error("Error details:", err?.message ?? err.toString())
    return new Response(JSON.stringify({ error: { message: err.message } }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }

  // batch
  /*
  
  
    const embedContentRequest: EmbedContentRequest = {
      model:  GEMINI_EMBEDDING_MODEL,
      content: {
        parts: [req.input].flat().map((it) => ({ text: it.toString() })),
      },
      outputDimensionality: GEMINI_EMBEDDING_MODEL_OUTPUT_DIM 
    }
  
    log?.warn("request", embedContentRequest)
  
    let geminiResp: number[] | undefined = []
  
    try {
      const it = await embedContent(apiParam, new GeminiModel(GEMINI_EMBEDDING_MODEL), embedContentRequest)
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
  */
}
