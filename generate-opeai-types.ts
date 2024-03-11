#!/usr/bin/env -S deno run --allow-net --deny-env --allow-write=./src
import openapiTS from "https://esm.sh/openapi-typescript@6.7.4?bundle"

const openapis = [
  {
    url: "https://raw.githubusercontent.com/openai/openai-openapi/master/openapi.yaml",
    path: "./src/openai-types.ts",
  },
]

for (const { url, path } of openapis) {
  const code = await openapiTS(url, {
    excludeDeprecated: false,
    cwd: ".",
    alphabetize: false,
    additionalProperties: false,
  })

  await Deno.writeTextFile(path, code)
}
