import { Context, Hono } from "hono"
import { cors } from "hono/cors"
import { getRuntimeKey } from "hono/adapter"
import { logger } from "hono/logger"
import { timing } from "hono/timing"
import { chatProxyHandler } from "./chat/complete/ChatProxyHandler.ts"
import { Logger, gen_logger } from "./log.ts"

export const app = new Hono({ strict: true })
  .use(
    "*",
    cors({
      origin: (it) => it,
      allowMethods: ["POST", "GET", "OPTIONS"],
    }),
    timing(),
    logger(),
  )
  .use("*", async (c: ContextWithLogger, next) => {
    const logger = gen_logger(crypto.randomUUID())
    c.set("log", logger)
    await next()
  })
  .options("*", (c) => {
    return c.text("", 204)
  })
  .get("/", (c: ContextWithLogger) => {
    const log = c.get("log") as Logger
    const text = `Hello Gemini-OpenAI-Proxy from ${getRuntimeKey()}!`
    log.info(text)
    return c.text(text)
  })
  .post("/v1/chat/completions", chatProxyHandler)

export type ContextWithLogger = Context<{ Variables: { log: Logger } }>
