import { Context, Hono } from "hono"
import { cors } from "hono/cors"
import { getRuntimeKey } from "hono/adapter"
import { logger } from "hono/logger"
import { timing } from "hono/timing"
import { chatProxyHandler } from "./chat/complete/ChatProxyHandler.ts"
import { Logger, gen_logger } from "./log.ts"

const openAiRoute = new Hono<{ Variables: { log: Logger } }>()
  .use("*", async (c, next) => {
    const logger = gen_logger(crypto.randomUUID())
    c.set("log", logger)
    await next()
    c.set("log", undefined)
  })
  .post("/v1/chat/completions", chatProxyHandler)

export const app = new Hono({ strict: true })
  .use("*", cors(), timing(), logger())
  .options("*", (c) => c.text("", 204))
  .route("/", openAiRoute)
  .get("/", (c) => c.text(`Hello Gemini-OpenAI-Proxy from ${getRuntimeKey()}!`))

export type ContextWithLogger = Context<{ Variables: { log: Logger } }>
