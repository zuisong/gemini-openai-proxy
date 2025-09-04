import { getToken } from "../../../utils.ts"
import { EdgeProxyHandler } from "./EdgeProxyHandler.ts"
import { OaiProxyHandler } from "./OaiProxyHandler.ts"
import type { TTSParam } from "./utils.ts"

export async function ttsProxyHandler(rawReq: Request): Promise<Response> {
  const req = (await rawReq.json()) as TTSParam
  const headers = rawReq.headers
  const apiParam = getToken(headers)

  if (apiParam == null) {
    return new Response("Unauthorized", { status: 401 })
  }

  if (req.model === "tts-1") {
    return OaiProxyHandler(req)
  }
  return EdgeProxyHandler(req)
}
