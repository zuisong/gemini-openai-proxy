import { app } from "./src/app.ts"

// @ts-ignore supress warning
Deno.serve({ port: 8000 }, app.fetch)
