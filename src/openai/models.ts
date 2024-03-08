import type { Handler } from "hono"
import type { OpenAI } from "../types.ts"
export const modelData: OpenAI.Models.Model[] = [
  {
    created: 1677610602,
    object: "model",
    owned_by: "openai",
    id: "gpt-3.5-turbo",
  },
  {
    created: 1677649963,
    object: "model",
    owned_by: "openai",
    id: "gpt-3.5-turbo-0301",
  },
  {
    created: 1686587434,
    object: "model",
    owned_by: "openai",
    id: "gpt-3.5-turbo-0613",
  },
  {
    created: 1683758102,
    object: "model",
    owned_by: "openai-internal",
    id: "gpt-3.5-turbo-16k",
  },
  {
    created: 1685474247,
    object: "model",
    owned_by: "openai",
    id: "gpt-3.5-turbo-16k-0613",
  },
  {
    created: 1687882411,
    object: "model",
    owned_by: "openai",
    id: "gpt-4",
  },
  {
    created: 1687882410,
    object: "model",
    owned_by: "openai",
    id: "gpt-4-0314",
  },
  {
    created: 1686588896,
    object: "model",
    owned_by: "openai",
    id: "gpt-4-0613",
  },
]

export const models: Handler = async (c) => {
  return c.json({
    object: "list",
    data: modelData,
  })
}

export const modelDetail: Handler = async (c) => {
  const model = c.req.param("model")
  return c.json(modelData.find((it) => it.id === model))
}
