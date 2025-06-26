#!/usr/bin/env -S deno run --allow-net  --allow-write=./src/generated-types --allow-read=./src/generated-types --allow-read=.  --no-prompt --allow-env
import openapiTS, { astToString } from "https://esm.sh/openapi-typescript@7.6.1?bundle"
import { emptyDirSync } from "jsr:@std/fs"
import { parse as parseYaml } from "jsr:@std/yaml"

// @ts-types="https://unpkg.com/openapi-format@1.25.0/types/openapi-format.d.ts"
import { openapiFilter } from "openapi-format"

const openapis = [
  {
    data: await fetch("https://app.stainless.com/api/spec/documented/openai/openapi.documented.yml")
      .then((res) => res.text())
      .then(parseYaml),
    path: "./src/generated-types/openai-types.ts",
  },
  {
    data: await fetch(
      "https://github.com/zuisong/googleapis-openapi/raw/refs/heads/main/googleapis/generativelanguage/v1alpha/generativelanguage-api-openapi_v3.json",
    )
      .then((res) => res.text())
      .then(JSON.parse),
    path: "./src/generated-types/gemini-types.ts",
  },
] as const

emptyDirSync("./src/generated-types/")

for (const { path, data } of openapis) {
  const { data: res } = await openapiFilter(data, {
    filterSet: {
      inverseOperationIds: [
        /// openai
        "createChatCompletion",
        "createEmbedding",
        "listModels",
        /// googleapis
        "generativelanguage.tunedModels.streamGenerateContent",
        "generativelanguage.models.embedContent",
        "generativelanguage.tunedModels.create",
        "generativelanguage.models.list",
      ],
      unusedComponents: ["schemas"],
      preserveEmptyObjects: false,
    },
    defaultFilter: {},
  })

  const ast = await openapiTS(res, {
    excludeDeprecated: false,
    cwd: "",
    alphabetize: true,
    additionalProperties: true,
  })

  const code = astToString(ast)

  await Deno.writeTextFile(path, code)
}
