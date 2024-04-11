#!/usr/bin/env -S deno run --allow-net --allow-env --allow-write=./src --allow-read=.
import { convert } from "https://esm.sh/google-discovery-to-swagger@2.1.0?dev"
import openapiTS from "https://esm.sh/openapi-typescript@6.7.5?bundle"
import converter from "https://esm.sh/swagger2openapi@7.0.8"

const url = new URL("https://generativelanguage.googleapis.com/$discovery/rest")

url.searchParams.set("key", Deno.env.get("YOUR_GEMINI_API_KEY") ?? "")
url.searchParams.set("version", "v1beta")

const data = await fetch(url).then((res) => res.json())

import { stringify } from "https://esm.sh/safe-stable-stringify@2.4.3?dev"

const res = convert(JSON.parse(stringify(data) ?? "{}"))

const { openapi } = await converter.convert(res, {})

import { Buffer } from "node:buffer"
import { Readable } from "node:stream"
import { stringify as yamlStringify } from "jsr:@std/yaml"

const openapis = [
  {
    url: "https://raw.githubusercontent.com/openai/openai-openapi/master/openapi.yaml",
    path: "./src/generated-types/openai-types.ts",
  },
  {
    path: "./src/generated-types/gemini-types.ts",
    url: Readable.from(Buffer.from(yamlStringify(openapi), "utf-8")),
  },
] as const

for (const { url, path } of openapis) {
  const code = await openapiTS(url, {
    excludeDeprecated: false,
    cwd: ".",
    alphabetize: false,
    additionalProperties: true,
  })

  await Deno.writeTextFile(path, code)
}
