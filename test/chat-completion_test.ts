import assert from "node:assert/strict"
import * as process from "node:process"
import { test } from "node:test"
import type { OpenAI } from "openai"
import { app } from "../src/app.ts"

test("test", async () => {
  const res = await app.request("/v1/chat/completions", {
    headers: {
      authorization: process.env.GEMINI_API_KEY ?? "",
    },
    method: "post",
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: "Hello",
        },
      ],
      temperature: 0.7,
    } satisfies OpenAI.Chat.ChatCompletionCreateParams),
  })

  assert.ok((await res.json()).choices)
})

test("open ai client test", () => {
  if (typeof globalThis.Deno === "undefined") return
})
