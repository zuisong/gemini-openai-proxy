#!/usr/bin/env -S deno run --allow-net  --allow-write=./src --allow-read=. --allow-env --unstable-unsafe-proto
import { emptyDirSync } from "jsr:@std/fs"
import { convert } from "https://esm.sh/gh/APIs-guru/google-discovery-to-swagger@openapi3/src/index.js?bundle&dev&a.js"
import openapiTS from "https://esm.sh/openapi-typescript@6.7.6?bundle"

const url = new URL(
  "https://github.com/google/generative-ai-go/raw/main/genai/internal/generativelanguage/v1beta/generativelanguage-api.json",
)
const data = await fetch(url).then((res) => res.json())

const openapi = convert(data ?? "{}")

import { stringify as yamlStringify } from "jsr:@std/yaml"

import { Readable } from "node:stream"

const openapis = [
  {
    data: await fetch("https://raw.githubusercontent.com/openai/openai-openapi/master/openapi.yaml").then((res) =>
      res.text(),
    ),
    path: "./src/generated-types/openai-types.ts",
  },
  {
    path: "./src/generated-types/gemini-types.ts",
    data: yamlStringify(openapi),
  },
] as const

emptyDirSync("./src/generated-types/")

for (const { path, data } of openapis) {
  const code = await openapiTS(Readable.from(data), {
    excludeDeprecated: false,
    cwd: ".",
    alphabetize: true,
    additionalProperties: true,
  })

  await Deno.writeTextFile(path, code)
}
