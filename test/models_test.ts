import { expect } from "jsr:@std/expect"
import * as bdd from "jsr:@std/testing/bdd"
import { app } from "../src/app.ts"

import { modelData } from "../src/openai/models.ts"

bdd.describe("openai model api test", () => {
  bdd.it("models test", async () => {
    const res = await app.fetch(
      new Request("http://127.0.0.1/v1/models", {
        method: "GET",
      }),
    )

    const { data: models } = await res.json()

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
