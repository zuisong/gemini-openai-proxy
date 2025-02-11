#!/usr/bin/env -S deno run --allow-net  --allow-write=./src/generated-types --allow-read=./src/generated-types --allow-read=.  --no-prompt --allow-env
import { emptyDirSync } from "jsr:@std/fs"
import openapiTS, { astToString } from "https://esm.sh/openapi-typescript@7.5.2?bundle"

const openapis = [
  {
    data: await fetch("https://raw.githubusercontent.com/openai/openai-openapi/refs/heads/master/openapi.yaml").then(
      (res) => res.text(),
    ),
    path: "./src/generated-types/openai-types.ts",
  },
  {
    data: await fetch(
      "https://github.com/zuisong/googleapis-openapi/raw/refs/heads/main/googleapis/generativelanguage/v1alpha/generativelanguage-api-openapi_v3.json",
    ).then((res) => res.text()),
    path: "./src/generated-types/gemini-types.ts",
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
