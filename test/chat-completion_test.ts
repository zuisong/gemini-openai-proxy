import { assertFalse } from "jsr:@std/assert"
import { expect } from "jsr:@std/expect"
import { afterAll, beforeAll, describe, it } from "jsr:@std/testing/bdd"
import { type ParseEvent, createParser } from "https://esm.sh/eventsource-parser@1.1.2"
import { app } from "../src/app.ts"
import type { OpenAI } from "../src/types.ts"
import { fetchMock } from "./mock-fetch.ts"
import { gemini_ok_resp } from "./test-data.ts"

describe("openai to gemini test", () => {
  describe("success test", () => {
    const mockFetch = fetchMock
    beforeAll(() => {
      mockFetch.mock((url) => url.includes("generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent"), {
        body: JSON.stringify(gemini_ok_resp),
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      })
    })

    afterAll(() => {
      mockFetch.restore()
    })

    it("no streaming test", async () => {
      const res = await app.fetch(
        new Request("http://127.0.0.1/v1/chat/completions", {
          headers: {
            authorization: "Bearer fake-api-key",
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
        }),
      )

      const resp = (await res.json()) as OpenAI.Chat.ChatCompletion
      console.log(resp)
      expect(resp.choices.map((it) => it.message.content).join("")).toEqual("Hello there! How can I assist you today?")
    })

    it("stream test", async () => {
      const res = await app.fetch(
        new Request("http://127.0.0.1/v1/chat/completions", {
          headers: {
            authorization: "Bearer fake-api-key",
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
        }),
      )

      console.log(111)
      const text = await res.text()
      console.log(text)

      createParser((event: ParseEvent) => {
        if (event.type !== "event") {
          return
        }
        if (event.data === "[DONE]") return
        const data = JSON.parse(event.data) as OpenAI.Chat.ChatCompletion
        assertFalse(data.choices.find((it) => it.finish_reason === "stop" && it.message?.content))
      })
        //
        .feed(text)
    })
  })
})
