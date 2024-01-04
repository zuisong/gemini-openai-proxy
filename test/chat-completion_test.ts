import { testClient } from "hono/testing";
import { app } from "../src/app.ts";
import { test } from "node:test";
import assert from "node:assert/strict";
import * as process from "node:process";
import { type OpenAI } from "openai";

test("test", async () => {
  const res = await testClient(app)["v1/chat/completions"].$post({
    header: { "authorization": process.env.GEMINI_API_KEY ?? "" },
    json: {
      "model": "gpt-3.5-turbo",
      "messages": [
        {
          "role": "user",
          "content": "Hello",
        },
      ],
      "temperature": 0.7,
    } satisfies OpenAI.Chat.ChatCompletionCreateParams,
  });

  assert.ok((await res.json()).choices);
});
