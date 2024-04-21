import type { OpenAI } from "../types.ts"
export const modelData: OpenAI.Models.Model[] = [
  {
    created: 1677610602,
    object: "model",
    owned_by: "openai",
    id: "gpt-3.5-turbo",
  },
  {
    created: 1685474247,
    object: "model",
    owned_by: "openai",
    id: "gpt-4-vision-preview",
  },
  {
    created: 1687882411,
    object: "model",
    owned_by: "openai",
    id: "gpt-4-turbo",
  },
  {
    created: 1687882412,
    object: "model",
    owned_by: "openai",
    id: "gpt-4-turbo-preview",
  },
]

export const models = () => {
  return {
    object: "list",
    data: modelData,
  }
}

export const modelDetail = (model: string) => {
  return modelData.find((it) => it.id === model)
}
