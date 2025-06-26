import type { IRequest } from "itty-router/"
import { cors } from "itty-router/cors"
import { Router } from "itty-router/Router"
import { geminiProxy } from "./gemini-proxy.ts"
import { hello } from "./hello.ts"
import { type Any, Logger } from "./log.ts"
import { chatProxyHandler } from "./openai/chat/completions/ChatProxyHandler.ts"
import { embeddingProxyHandler } from "./openai/embeddingProxyHandler.ts"
import { modelDetail, models } from "./openai/models.ts"

const { preflight, corsify } = cors({ allowHeaders: "*" })

const app = Router<IRequest, Any[], Response>({
  before: [
    preflight,
    (req) => {
      req.logger = new Logger(crypto.randomUUID().toString())
      req.logger.warn(`--> ${req.method} ${req.url}`)
    },
  ],
  finally: [
    corsify,
    (_, req) => {
      req.logger?.warn(`<-- ${req.method} ${req.url}`)
      // return resp
    },
  ],
})

app.get("/", hello)
app.post("/v1/chat/completions", chatProxyHandler)
app.post("/v1/embeddings", embeddingProxyHandler)
app.get("/v1/models", async (req) => Response.json(await models(req)))
app.get("/v1/models/:model", (c) => Response.json(modelDetail(c.params.model)))
app.post("/:model_version/models/:model_and_action", geminiProxy)
app.all("*", () => new Response("Page Not Found", { status: 404 }))

export { app }
