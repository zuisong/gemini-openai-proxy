import { assertFalse } from "jsr:@std/assert"
import { expect } from "jsr:@std/expect"
import { afterEach, beforeEach, describe, it } from "jsr:@std/testing/bdd"
import { type ParseEvent, createParser } from "eventsource-parser"
import { app } from "../src/app.ts"
import type { OpenAI } from "../src/types.ts"
import { MockFetch } from "./mock-fetch.ts"
import { gemini_ok_resp } from "./test-data.ts"

describe("openai to gemini test", () => {
  describe("success test", () => {
    const fetchMocker = new MockFetch()

    for (const [geminiModel, openaiModel] of [
      ["gemini-1.0-pro-latest", "gpt-3.5-turbo"],
      ["gemini-1.0-pro-latest", "gpt-4"],
      ["gemini-1.5-pro-latest", "gpt-4-turbo-preview"],
    ]) {
      beforeEach(() => {
        fetchMocker.mock(
          (req) => req.url.includes(`generativelanguage.googleapis.com/v1beta/models/${geminiModel}:generateContent`),
          () =>
            new Response(JSON.stringify(gemini_ok_resp), {
              status: 200,
              headers: {
                "Content-Type": "application/json",
              },
            }),
        )

        fetchMocker.mock(
          (req) =>
            req.url.includes(`generativelanguage.googleapis.com/v1beta/models/${geminiModel}:streamGenerateContent`),
          () =>
            new Response(
              `data: ${JSON.stringify(gemini_ok_resp)}

`,
              {
                status: 200,
                headers: {
                  "Content-Type": "application/json",
                },
              },
            ),
        )
      })

      afterEach(() => {
        fetchMocker.restore()
      })

      it(`no streaming test with ${openaiModel}`, async () => {
        const res = await app.fetch(
          new Request("http://127.0.0.1/v1/chat/completions", {
            headers: {
              authorization: "Bearer fake-api-key",
            },
            method: "post",
            body: JSON.stringify({
              model: openaiModel,
              messages: [
                {
                  role: "user",
                  content: "Hello",
                },
              ],
              stream: false,
              temperature: 0.7,
              logprobs: null,
              logit_bias: null,
              frequency_penalty: null,
              presence_penalty: null,
              stop: null,
              top_p: 1,
              service_tier: null,
              n: 1,
            } satisfies OpenAI.Chat.ChatCompletionCreateParams),
          }),
        )

        const resp = (await res.json()) as OpenAI.Chat.ChatCompletion
        console.log(resp)
        expect(resp.choices.map((it) => it.message.content).join("")).toEqual(
          "Hello there! How can I assist you today?",
        )
      })

      it(`stream test with ${openaiModel}`, async () => {
        const res = await app.fetch(
          new Request("http://127.0.0.1/v1/chat/completions", {
            headers: {
              authorization: "Bearer fake-api-key",
            },
            method: "post",
            body: JSON.stringify({
              model: openaiModel,
              messages: [
                {
                  role: "user",
                  content: "Hello",
                },
              ],
              temperature: 0.7,
              stream: true,
              logprobs: null,
              logit_bias: null,
              frequency_penalty: null,
              presence_penalty: null,
              stop: null,
              top_p: 1,
              service_tier: null,
              n: 1,
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
    }
  })
})
