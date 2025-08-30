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
  var gemini_models = await listModels(apiParam);
  var model_list = gemini_models["data"] as Array<any>
  const finala_model_list=model_list.concat(modelData);
  return {
    object: "list",
    data: finala_model_list,
  }
}

export const modelDetail = (model: string) => {
  return modelData.find((it) => it.id === model)
}
