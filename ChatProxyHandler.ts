import { Handler } from "hono";
import { OpenAI } from "openai";
import { Content, GoogleGenerativeAI } from "@google/generative-ai";
import process from "node:process"

const API_KEY = process.env.GEMINI_API_KEY ?? ""

export const ChatProxyHandler: Handler = async (c) => {
    const req = await c.req.json<OpenAI.Chat.ChatCompletionCreateParams>()
    console.log(req)
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const geminiResp: string = await model.generateContent({
        generationConfig: {
            maxOutputTokens: req.max_tokens ?? undefined,
            temperature: req.temperature ?? undefined
        },
        contents: req.messages.map(msg => {
            return {
                role: msg.role == "user" ? "user" : "model",
                parts: [
                    {
                        text: msg.content?.toString() ?? "",
                    },
                ],
            } satisfies Content
        })
    }).then(it => it.response.text())
        .catch(err => err?.message ?? err.toString())

    const resp: OpenAI.Chat.ChatCompletion = {
        "id": "chatcmpl-abc123",
        "object": "chat.completion",
        "created": Date.now(),
        "model": req.model,
        "choices": [
            {
                "message": {
                    "role": "assistant",
                    "content": geminiResp
                },
                "logprobs": null,
                "finish_reason": "stop",
                "index": 0
            }
        ]
    }


    return c.json(resp);
}