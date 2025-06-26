import { expect } from "jsr:@std/expect"
import * as bdd from "jsr:@std/testing/bdd"
import { app } from "../src/app.ts"

import { modelData } from "../src/openai/models.ts"
import type { OpenAI } from "../src/types.ts"
import { MockFetch } from "./mock-fetch.ts"

const fetchMocker = new MockFetch()

bdd.describe("openai model api test", () => {
  bdd.beforeEach(() => {
    fetchMocker.mock(
      (req) => req.url.includes(`generativelanguage.googleapis.com/v1beta/openai/models`),
      () => Response.json({ data: modelData }),
    )
  })

  bdd.it("models test", async () => {
    const res = await app.fetch(
      new Request("http://127.0.0.1/v1/models", {
        method: "GET",
      }),
    )

    const { data: models } = (await res.json()) as OpenAI.Models.ModelsPage
    console.log(models)

    expect(models).toStrictEqual(modelData)
  })
  bdd.it("models/:name test", async () => {
    const res = await app.fetch(
      new Request("http://127.0.0.1/v1/models/gpt-3.5-turbo", {
        method: "GET",
      }),
    )

    const model = await res.json()

    expect(model).toStrictEqual(modelData[0])
  })
})
