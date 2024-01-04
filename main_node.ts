import app from "./app.ts";
import { serve } from "@hono/node-server";

serve({
  fetch: app.fetch,
  port: 8000,
});
