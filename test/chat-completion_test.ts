import { ParseEvent, createParser } from "eventsource-parser"
import { app } from "../src/app.ts"
import type { OpenAI } from "../src/types.ts"
import { getApiKeyFromEnv } from "./common.ts"
import { expect } from "jsr:@std/expect"

Deno.test("test", async () => {
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

  expect((await res.json()).choices).toBeTruthy()
})

Deno.test("stream-test", async () => {
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

  createParser((event: ParseEvent) => {
    if (event.type === "event") {
      console.log("id: %s", event.id || "<none>")
      console.log("data: %s", event.data)
      console.log("-")
    } else if (event.type === "reconnect-interval") {
      console.log("We should set reconnect interval to %d milliseconds", event.value)
    }
  })
    //
    .feed(await res.text())
})
