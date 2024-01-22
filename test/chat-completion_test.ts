import assert from "node:assert/strict"
import { test } from "node:test"
import { EventSourceParserStream } from "eventsource-parser/stream"
import { app } from "../src/app.ts"
import type { OpenAI } from "../src/types.ts"
import { getApiKeyFromEnv } from "./common.ts"

test("test", async () => {
  const res = await app.request("/v1/chat/completions", {
    headers: {
      authorization: `Bearer ${getApiKeyFromEnv()}`,
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

test("stream-test", async () => {
  const res = await app.request("/v1/chat/completions", {
    headers: {
      authorization: `Bearer ${getApiKeyFromEnv()}`,
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
      stream: true,
    } satisfies OpenAI.Chat.ChatCompletionCreateParams),
  })

  const eventStream = res.body
    ?.pipeThrough(new TextDecoderStream())
    .pipeThrough(new EventSourceParserStream())

  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  for await (const v of eventStream!) {
    console.log(JSON.stringify(v))
  }
})
