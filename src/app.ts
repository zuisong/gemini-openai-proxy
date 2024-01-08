import { Hono } from "hono/"
import { cors } from "hono/cors"
import { getRuntimeKey } from "hono/adapter"
import { logger } from "hono/logger"
import { timing } from "hono/timing"
import log from "loglevel"
import { ChatProxyHandler } from "./chat/complete/ChatProxyHandler.ts"

export const app = new Hono({ strict: true })
  .use(
    "/",
    cors({
      allowHeaders: ["*"],
      origin: "*",
    }),
  )
  .use("*", timing(), logger())
  .get("/", (c) => c.text(`Hello Gemini-OpenAI-Proxy from ${getRuntimeKey()}!`))
  .post("/v1/chat/completions", ChatProxyHandler)

log.enableAll()
