import type { Context, Handler } from "hono"
import { env, getRuntimeKey } from "hono/adapter"
import { cors } from "hono/cors"
import { logger } from "hono/logger"
import { timing } from "hono/timing"
import { Hono } from "hono/tiny"
import { ILogger, Logger } from "./log.ts"
import { chatProxyHandler } from "./openai/chat/completions/ChatProxyHandler.ts"
import { modelDetail, models } from "./openai/models.ts"

const geminiProxy: Handler = async (c) => {
  const rawReq = c.req.raw
  const url = new URL(rawReq.url)

  url.host = "generativelanguage.googleapis.com"
  url.port = ""
  url.protocol = "https:"

  const req = new Request(url, rawReq.clone())

  const resp = await fetch(req)

  return c.newResponse(resp.body, resp)
}

export const app = new Hono({ strict: true })
  .use("*", cors(), timing(), logger())
  .use("*", async (c: ContextWithLogger, next) => {
    const logger = new Logger((env(c).LogLevel as string) ?? "error", crypto.randomUUID())
    c.set("log", logger)
    await next()
    c.set("log", undefined as unknown as ILogger)
  })
  .options("*", (c) => c.text("", 204))
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
  .post(":model_version/models/:model_and_action", geminiProxy)

export type ContextWithLogger = Context<{ Variables: { log: ILogger } }>
