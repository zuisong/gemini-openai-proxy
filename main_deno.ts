import { app } from "./src/app.ts"

// @ts-ignore supress idea warning
Deno.serve({ port: 8000 }, app.fetch)
