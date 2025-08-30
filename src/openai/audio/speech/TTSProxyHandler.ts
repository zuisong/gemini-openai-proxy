import { getToken } from "../../../utils.ts"

import { TTSParam } from "./utils.ts"
import { OaiProxyHandler } from "./OaiProxyHandler.ts"
import { EdgeProxyHandler } from "./EdgeProxyHandler.ts"


export async function ttsProxyHandler(rawReq: Request): Promise<Response> {
    const req = (await rawReq.json()) as TTSParam;
    const headers = rawReq.headers;
    const apiParam = getToken(headers);

    if (apiParam == null) {
        return new Response("Unauthorized", { status: 401 });
    }

    if (req.model == "tts-1") {
        return OaiProxyHandler(req);
    } else {
        return EdgeProxyHandler(req);
    }
}