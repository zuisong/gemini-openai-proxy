import { listModels } from "../gemini-api-client/gemini-api-client.ts"
import type { OpenAI } from "../types.ts"
import { getToken, ModelMapping } from "../utils.ts"
export const modelData: OpenAI.Models.Model[] = Object.keys(ModelMapping).map((model) => ({
  created: 1677610602,
  object: "model",
  owned_by: "openai",
  id: model,
}))

export const models = async (req: Request) => {
  const apiParam = getToken(req.headers)
  return await listModels(apiParam)

  // return {
  //   object: "list",
  //   data: modelData,
  // }
}

export const modelDetail = (model: string) => {
  return modelData.find((it) => it.id === model)
}
