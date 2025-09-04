import { app } from "./src/app.ts"

console.log("Listening on http://localhost:8000/")

// @ts-expect-error supress warning
Bun.serve({
  port: 8000,
  fetch: app.fetch,
})
