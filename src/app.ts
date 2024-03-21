import { env } from "hono/adapter"
import { cors } from "hono/cors"
import { Hono } from "hono/tiny"
import { geminiProxy } from "./gemini-proxy.ts"
import { Logger } from "./log.ts"
import { chatProxyHandler } from "./openai/chat/completions/ChatProxyHandler.ts"
import { modelDetail, models } from "./openai/models.ts"
import { hello } from "./routes.ts"

const app = new Hono({ strict: true }).use("*", cors()).use("*", async (c, next) => {
  const logger = new Logger({
    level: env(c)?.LogLevel as string | undefined,
    prefix: crypto.randomUUID(),
  })
  c.req.raw.logger = logger
  logger.warn(`--> ${c.req.method} ${c.req.path}`)
  await next()
  logger.warn(`<-- ${c.req.method} ${c.req.path}`)
})

app.get("/", (c) => hello(c.req.raw))
app.post("/v1/chat/completions", (c) => chatProxyHandler(c.req.raw))
app.get("/v1/models", (c) => Response.json(models()))
app.get("/v1/models/:model", (c) => Response.json(modelDetail(c.req.param().model)))
app.post(":model_version/models/:model_and_action", (c) => geminiProxy(c.req.raw))

export { app }
