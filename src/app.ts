import type { IRequest, IttyRouterType } from "itty-router"
import { Router } from "itty-router/Router"
import { geminiProxy } from "./gemini-proxy.ts"
import { hello } from "./hello.ts"
import { cors } from "./itty-router/cors.ts"
import { Logger } from "./log.ts"
import { chatProxyHandler } from "./openai/chat/completions/ChatProxyHandler.ts"
import { modelDetail, models } from "./openai/models.ts"

const { preflight, corsify } = cors({ allowHeaders: "*" })

const app: IttyRouterType = Router<IRequest>({
  before: [
    preflight,
    (req) => {
      req.logger = new Logger({ prefix: crypto.randomUUID().toString() })
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
app.get("/v1/models", () => Response.json(models()))
app.get("/v1/models/:model", (c) => Response.json(modelDetail(c.params.model)))
app.post(":model_version/models/:model_and_action", geminiProxy)
app.all("*", () => new Response("Page Not Found", { status: 404 }))

export { app }
