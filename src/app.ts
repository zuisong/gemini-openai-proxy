import { Hono } from "hono/"
import { cors } from "hono/cors"
import { etag } from "hono/etag"
import { logger } from "hono/logger"
import { ChatProxyHandler } from "./ChatProxyHandler.ts"
import log from "loglevel"
export const app = new Hono({ strict: true })
  .use(
    "/",
    cors({
      allowHeaders: ["*"],
      origin: "*",
    }),
  )
  .use("*", etag(), logger())
  .get("/", (c) => c.text("Hello Gemini-OpenAI-Proxy!"))
  .post("/v1/chat/completions", ChatProxyHandler)

log.enableAll()
