#!/usr/bin/env -S deno run --allow-net  --allow-write=./src/generated-types --allow-read=./src/generated-types  --no-prompt --allow-env --unstable-unsafe-proto
import { emptyDirSync } from "jsr:@std/fs"
import { convert } from "https://esm.sh/gh/APIs-guru/google-discovery-to-swagger@openapi3/src/index.js?bundle&dev&a.js"
import openapiTS, { astToString } from "https://esm.sh/openapi-typescript@7.1.2?bundle&dev"

const data = await fetch(
  "https://github.com/google/generative-ai-go/raw/main/genai/internal/generativelanguage/v1beta/generativelanguage-api.json",
)

const openapi = convert((await data.json()) ?? "{}")

const openapis = [
  {
    data: await fetch("https://raw.githubusercontent.com/openai/openai-openapi/master/openapi.yaml").then((res) =>
      res.text(),
    ),
    path: "./src/generated-types/openai-types.ts",
  },
  {
    path: "./src/generated-types/gemini-types.ts",
    data: openapi,
  },
] as const

emptyDirSync("./src/generated-types/")

for (const { path, data } of openapis) {
  const ast = await openapiTS(data, {
    excludeDeprecated: false,
    cwd: "",
    alphabetize: true,
    additionalProperties: true,
  })

  const code = astToString(ast)

  await Deno.writeTextFile(path, code)
}
