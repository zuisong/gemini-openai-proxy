import { serve } from "@hono/node-server"
import { app } from "./src/app.ts"

serve({
  fetch: app.fetch,
  port: 8000,
})
