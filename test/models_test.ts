import { app } from "../src/app.ts"
import { expect } from "jsr:@std/expect"
import * as bdd from "jsr:@std/testing/bdd"

import { modelData } from "../src/openai/models.ts"

bdd.describe("openai model api test", () => {
  bdd.it("models test", async () => {
    const res = await app.request("/v1/models", {
      method: "get",
    })

    const { data: models } = await res.json()

    expect(models).toHaveLength(8)
    expect(models).toStrictEqual(modelData)
  })
  bdd.it("models/:name test", async () => {
    const res = await app.request("/v1/models/gpt-3.5-turbo", {
      method: "get",
    })

    const model = await res.json()

    expect(model).toStrictEqual(modelData[0])
  })
})
