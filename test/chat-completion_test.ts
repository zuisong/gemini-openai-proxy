import { assertFalse } from "jsr:@std/assert"
import { expect } from "jsr:@std/expect"
import { afterEach, beforeEach, describe, it } from "jsr:@std/testing/bdd"
import { EventSourceParserStream } from "eventsource-parser/stream"
import { app } from "../src/app.ts"
import type { OpenAI } from "../src/types.ts"
import { MockFetch } from "./mock-fetch.ts"
import { gemini_ok_resp } from "./test-data.ts"

describe("openai to gemini test", () => {
  describe("success test", () => {
    const fetchMocker = new MockFetch()

    for (const [openaiModel, geminiModel] of [
      ["gpt-3.5-turbo", "gemini-1.5-flash-8b-latest"],
      ["gpt-4", "gemini-1.5-pro-latest"],
      ["gpt-4o", "gemini-1.5-flash-latest"],
      ["gpt-4o-mini", "gemini-1.5-flash-8b-latest"],
      ["gpt-4-vision-preview", "gemini-1.5-flash-latest"],
      ["gpt-4-turbo", "gemini-1.5-pro-latest"],
      ["gpt-4-turbo-preview", "gemini-2.0-flash-exp"],
    ]) {
      beforeEach(() => {
        fetchMocker.mock(
          (req) => req.url.includes(`generativelanguage.googleapis.com/v1beta/models/${geminiModel}:generateContent`),
          () => Response.json(gemini_ok_resp),
        )

        fetchMocker.mock(
          (req) =>
            req.url.includes(`generativelanguage.googleapis.com/v1beta/models/${geminiModel}:streamGenerateContent`),
          () => new Response(`data: ${JSON.stringify(gemini_ok_resp)}\n\n`),
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
              service_tier: "auto",
              n: 1,
              store: false,
              reasoning_effort: "medium",
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
              service_tier: "auto",
              n: 1,
              store: false,
              reasoning_effort: "medium",
            } satisfies OpenAI.Chat.ChatCompletionCreateParams),
          }),
        )

        const body = res.body ?? throws(new Error("no body"))
        const values = body.pipeThrough(new TextDecoderStream()).pipeThrough(new EventSourceParserStream()).values()

        for await (const e of values) {
          if (e.data === "[DONE]") return
          const data = JSON.parse(e.data) as OpenAI.Chat.ChatCompletion
          assertFalse(false)
          assertFalse(data.choices.find((it) => it.finish_reason === "stop" && it.message?.content))
        }
      })
    }
  })
})

function throws(e: Error): never {
  throw e
}
