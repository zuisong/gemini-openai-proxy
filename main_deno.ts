import { app } from "./src/app.ts"

Deno.serve({ port: 8000 }, app.fetch)
