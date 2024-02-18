import type { Context } from "hono"
import { getRuntimeKey } from "hono/adapter"
import { cors } from "hono/cors"
import { logger } from "hono/logger"
import { timing } from "hono/timing"
import { Hono } from "hono/tiny"
import { Logger, gen_logger } from "./log.ts"
import { chatProxyHandler } from "./v1/chat/completions/ChatProxyHandler.ts"
import { modelDetail, models } from "./v1/models.ts"

export const app = new Hono({ strict: true })
  .use("*", cors(), timing(), logger())
  .use("*", async (c: ContextWithLogger, next) => {
    const logger = gen_logger(crypto.randomUUID())
    c.set("log", logger)
    await next()
    c.set("log", undefined as unknown as Logger)
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

export type ContextWithLogger = Context<{ Variables: { log: Logger } }>
