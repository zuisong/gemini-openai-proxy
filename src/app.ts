import type { Context } from "hono"
import { env, getRuntimeKey } from "hono/adapter"
import { cors } from "hono/cors"
import { Hono } from "hono/tiny"
import { type ILogger, Logger } from "./log.ts"
import { chatProxyHandler } from "./openai/chat/completions/ChatProxyHandler.ts"
import { modelDetail, models } from "./openai/models.ts"

export const app = new Hono({ strict: true })
  .use("*", cors())
  .use("*", async (c: ContextWithLogger, next) => {
    const logger = new Logger({
      level: env(c)?.LogLevel as string | undefined,
      prefix: crypto.randomUUID(),
    })
    c.set("log", logger)
    await next()
  })
  .use("*", async (c: ContextWithLogger, next) => {
    c.var.log.warn(`--> ${c.req.method} ${c.req.path}`)
    await next()
    c.var.log.warn(`<-- ${c.req.method} ${c.req.path}`)
  })
  .get("/", (c) => {
    const origin = new URL(c.req.url).origin
    return c.text(`
Hello Gemini-OpenAI-Proxy from ${getRuntimeKey()}! 

You can try it with:

curl ${origin}/v1/chat/completions \\
    -H "Authorization: Bearer $YOUR_GEMINI_API_KEY" \\
    -H "Content-Type: application/json" \\
    -d '{
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": "Hello"}],
        "temperature": 0.7
        }'
`)
  })
  .post("/v1/chat/completions", chatProxyHandler)
  .get("/v1/models", models)
  .get("/v1/models/:model", modelDetail)
  .post(":model_version/models/:model_and_action", async (c) => {
    const rawReq = c.req.raw
    const url = new URL(rawReq.url)
    url.host = "generativelanguage.googleapis.com"
    url.port = ""
    url.protocol = "https:"
    const req = new Request(url, rawReq)
    const resp = await fetch(req)
    return c.newResponse(resp.body, resp)
  })

export type ContextWithLogger = Context<{ Variables: { log: ILogger } }>
