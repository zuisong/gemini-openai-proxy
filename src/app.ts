import { Hono } from "hono"
import { cors } from "hono/cors"
import { getRuntimeKey } from "hono/adapter"
import { logger } from "hono/logger"
import { timing } from "hono/timing"
import { chatProxyHandler } from "./chat/complete/ChatProxyHandler.ts"
import { Logger, gen_logger } from "./log.ts"

export const app = new Hono({ strict: true })
  .use("*", cors({ origin: (it) => it }), timing(), logger())
  .use("*", async (c, next) => {
    const logger = gen_logger(`${Date.now()}_${Math.random()}`)
    c.set("log", logger)
    await next()
    c.set("log", null)
  })
  .get("/", (c) => {
    const log = c.get("log") as Logger
    console.log(log)
    return c.text(`Hello Gemini-OpenAI-Proxy from ${getRuntimeKey()}!`)
  })
  .post("/v1/chat/completions", chatProxyHandler)
