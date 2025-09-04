export interface TTSParam {
  model: string
  input: string
  voice: string
  response_format?: string
  instructions?: string
}

async function hmacSha256(key: Uint8Array, data: string): Promise<Uint8Array> {
  const cryptoKey = await crypto.subtle.importKey("raw", key, { name: "HMAC", hash: { name: "SHA-256" } }, false, [
    "sign",
  ])
  const signature = await crypto.subtle.sign("HMAC", cryptoKey, new TextEncoder().encode(data))
  return new Uint8Array(signature)
}

async function base64ToBytes(base64: string): Promise<Uint8Array> {
  const binaryString = atob(base64)
  const bytes = new Uint8Array(binaryString.length)
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i)
  }
  return bytes
}

async function bytesToBase64(bytes: Uint8Array): Promise<string> {
  return btoa(String.fromCharCode.apply(null, Array.from(bytes)))
}

function uuid(): string {
  return crypto.randomUUID().replace(/-/g, "")
}

export async function sign(urlStr: string): Promise<string> {
  const url = urlStr.split("://")[1]
  const encodedUrl = encodeURIComponent(url)
  const uuidStr = uuid()
  const formattedDate = dateFormat()
  const bytesToSign = `MSTranslatorAndroidApp${encodedUrl}${formattedDate}${uuidStr}`.toLowerCase()
  const decode = await base64ToBytes(
    "oik6PdDdMnOXemTbwvMn9de/h9lFnfBaCWbGMMZqqoSaQaqUOqjVGm5NqsmjcBI1x+sS9ugjB55HEJWRiFXYFw==",
  )
  const signData = await hmacSha256(decode, bytesToSign)
  const signBase64 = await bytesToBase64(signData)
  return `MSTranslatorAndroidApp::${signBase64}::${formattedDate}::${uuidStr}`
}

function dateFormat(): string {
  const formattedDate = new Date().toUTCString().replace(/GMT/, "").trim() + " GMT"
  return formattedDate.toLowerCase()
}

export function splitAndMerge(str: string, chunkSize: number, determin) {
  const sentences = str.split(determin)
  const result: Array<string> = []
  let currentChunk: Array<string> = []
  let currentLength = 0

  for (const sentence of sentences) {
    if (currentLength + sentence.length + (currentChunk.length > 0 ? 1 : 0) <= chunkSize) {
      currentChunk.push(sentence)
      currentLength += sentence.length + (currentChunk.length > 1 ? 1 : 0)
    } else {
      if (currentChunk.length > 0) {
        result.push(currentChunk.join(" "))
      }
      currentChunk = [sentence]
      currentLength = sentence.length
    }
  }

  if (currentChunk.length > 0) {
    result.push(currentChunk.join(" "))
  }

  return result
}

export function makeCORSHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, x-api-key",
    "Access-Control-Max-Age": "86400",
  }
}
