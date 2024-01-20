import { app } from "./src/app.ts"
// @ts-ignore supress warning
Bun.serve({
  port: 8000,
  fetch: app.fetch,
})
