#!/usr/bin/env -S deno run --allow-net --allow-write=./src/openai-types.ts
import openapiTS from "npm:openapi-typescript@6.7.4"

const code = await openapiTS(
  "https://raw.githubusercontent.com/openai/openai-openapi/867fecc5ab6acb93b7e714c90f0d1d384592010a/openapi.yaml",
  {
    excludeDeprecated: false,
    cwd: ".",
  },
)

await Deno.writeTextFile("./src/openai-types.ts", code)
