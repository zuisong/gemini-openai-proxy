import { assertFalse } from "jsr:@std/assert"
import { expect } from "jsr:@std/expect"
import { afterAll, afterEach, beforeAll, beforeEach, describe, it } from "jsr:@std/testing/bdd"
import { MockFetch } from "https://deno.land/x/deno_mock_fetch@1.0.1/mod.ts"
import { type ParseEvent, createParser } from "eventsource-parser"
import { app } from "../src/app.ts"
import type { OpenAI } from "../src/types.ts"
import { gemini_ok_resp } from "./test-data.ts"

describe("openai to gemini test", () => {
  describe("success test", () => {
    const mockFetch = new MockFetch()
    beforeAll(() => {
      mockFetch
        // Intercept `GET https://example.com/hello`
        .intercept((url) => url.includes("generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent"), {
          method: (m) => true,
        })
        .response(JSON.stringify(gemini_ok_resp), {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        })
    })

    afterAll(() => {
      mockFetch.close()
    })

    it("no streaming test", async () => {
      const res = await app.request("/v1/chat/completions", {
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
      })

      const resp = (await res.json()) as OpenAI.Chat.ChatCompletion
      console.log(resp)
      expect(resp.choices.map((it) => it.message.content).join("")).toEqual("Hello there! How can I assist you today?")
    })

    it("stream test", async () => {
      const res = await app.request("/v1/chat/completions", {
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
      })

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
