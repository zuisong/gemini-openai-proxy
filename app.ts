import 'dotenv/config'
import { Hono } from 'hono'
import { etag } from 'hono/etag'
import { logger } from 'hono/logger'
import { cors } from 'hono/cors'
import { ChatProxyHandler } from "./ChatProxyHandler.ts";

const app = new Hono()
app.use('/', cors({
    allowHeaders: ["*"],
    origin: "*",
}))
app.use('*', etag(), logger())
app.get('/', (c) => c.text('Hono!'))

app.post("/v1/chat/completions", ChatProxyHandler)

export default app
