import { type IRequest, type IttyRouterType, Router, cors, error, json } from "itty-router"
import { geminiProxy } from "./gemini-proxy.ts"
import { hello } from "./hello.ts"
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
  catch: error,
  finally: [
    corsify,
    (_, req) => {
      req.logger?.warn(`<-- ${req.method} ${req.url}`)
      // return resp
    },
    json,
  ],
})

app.get("/", hello)
app.post("/v1/chat/completions", chatProxyHandler)
app.get("/v1/models", () => Response.json(models()))
app.get("/v1/models/:model", (c) => Response.json(modelDetail(c.params.model)))
app.post(":model_version/models/:model_and_action", geminiProxy)
app.all("*", () => new Response("Page Not Found", { status: 404 }))

export { app }
