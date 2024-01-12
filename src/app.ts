import { Context, Hono } from "hono"
import { cors } from "hono/cors"
import { getRuntimeKey } from "hono/adapter"
import { logger } from "hono/logger"
import { timing } from "hono/timing"
import { chatProxyHandler } from "./v1/chat/completions/ChatProxyHandler.ts"
import { Logger, gen_logger } from "./log.ts"

export const app = new Hono({ strict: true })
  .use("*", cors(), timing(), logger())
  .use("*", async (c: ContextWithLogger, next) => {
    const logger = gen_logger(crypto.randomUUID())
    c.set("log", logger)
    await next()
    c.set("log", undefined)
  })
  .options("*", (c) => c.text("", 204))
  .get("/", (c) => c.text(`Hello Gemini-OpenAI-Proxy from ${getRuntimeKey()}!`))
  .post("/v1/chat/completions", chatProxyHandler)

export type ContextWithLogger = Context<{ Variables: { log: Logger } }>
