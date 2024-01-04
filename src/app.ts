import { Hono } from "hono";
import { etag } from "hono/etag";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import { ChatProxyHandler } from "./ChatProxyHandler.ts";

export const app = new Hono({})
  .use(
    "/",
    cors({
      allowHeaders: ["*"],
      origin: "*",
    }),
  )
  .use("*", etag(), logger())
  .get("/", (c) => c.text("Hello Gemini-OpenAI-Proxy!"))
  .post("/v1/chat/completions", ChatProxyHandler);
