import { app } from "./src/app.ts";

// @ts-ignore supress idea warning
Deno.serve(app.fetch);
