#!/usr/bin/env -S deno run --allow-net --deny-env --allow-write=./src/openai-types.ts
import openapiTS from "npm:openapi-typescript@6.7.4"

const code = await openapiTS(
  "https://raw.githubusercontent.com/openai/openai-openapi/master/openapi.yaml",
  {
    excludeDeprecated: false,
    cwd: ".",
    alphabetize: false,
    additionalProperties: false,
  },
)

await Deno.writeTextFile("./src/openai-types.ts", code)
