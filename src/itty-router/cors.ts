import type { IRequest } from "itty-router"
// see https://github.com/kwhitley/itty-router/issues/244
export type CorsOptions = {
  credentials?: true
  origin?: boolean | string | string[] | RegExp | ((origin: string) => string | undefined)
  maxAge?: number
  allowMethods?: string | string[]
  allowHeaders?: string | string[]
  exposeHeaders?: string | string[]
}

export type Preflight = (request: IRequest) => Response | undefined
export type Corsify = (response: Response, request?: IRequest) => Response

export type CorsPair = {
  preflight: Preflight
  corsify: Corsify
}

// Create CORS function with default options.
export function cors(options: CorsOptions = {}): CorsPair {
  // Destructure and set defaults for options.
  const { origin = "*", credentials = false, allowMethods = "*", allowHeaders, exposeHeaders, maxAge } = options

  const getAccessControlOrigin = (request?: Request): string | undefined => {
    const requestOrigin = request?.headers.get("origin") // may be null if no request passed
    if (!requestOrigin) return undefined
    if (origin === true) return requestOrigin
    if (origin instanceof RegExp) return origin.test(requestOrigin) ? requestOrigin : undefined
    if (Array.isArray(origin)) return origin.includes(requestOrigin) ? requestOrigin : undefined
    if (origin instanceof Function) return origin(requestOrigin)
    return origin === "*" && credentials ? requestOrigin : (origin as string)
  }

  const appendHeadersAndReturn = (response: Response, headers: Record<string, string | undefined>): Response => {
    for (const [key, value] of Object.entries(headers)) {
      if (value) response.headers.append(key, value)
    }
    return response
  }

  const preflight = (request: Request) => {
    if (request.method === "OPTIONS") {
      const response = new Response(null, { status: 204 })

      return appendHeadersAndReturn(response, {
        "access-control-allow-origin": getAccessControlOrigin(request),
        "access-control-allow-methods": [allowMethods].flat().join(","), // include allowed methods
        "access-control-expose-headers": [exposeHeaders].flat().join(","), // include allowed headers
        "access-control-allow-headers":
          [allowHeaders].flat().join?.(",") || request.headers.get("access-control-request-headers") || "", // include allowed headers
        "access-control-max-age": maxAge?.toString(),
        "access-control-allow-credentials": credentials.toString(),
      })
    } // otherwise ignore
  }

  const corsify = (response: Response, request?: Request) => {
    // ignore if already has CORS headers
    if (response?.headers?.get("access-control-allow-origin") || response.status === 101) return response

    return appendHeadersAndReturn(response, {
      "access-control-allow-origin": getAccessControlOrigin(request),
      "access-control-allow-credentials": credentials.toString(),
    })
  }

  // Return corsify and preflight methods.
  return { corsify, preflight }
}
