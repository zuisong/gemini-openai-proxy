import { app } from "./src/app.ts"
Bun.serve({
  port: 8000,
  fetch: app.fetch,
})
