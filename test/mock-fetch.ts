export type RequestHandler = (req: Request) => Response | Promise<Response>
export type RequestMatcher = (req: Request) => Promise<boolean> | boolean

const originalFetch = globalThis.fetch

export class MockFetch {
  private store: [RequestMatcher, RequestHandler][] = []

  mock(request: RequestMatcher, response: RequestHandler) {
    const store = this.store
    store.push([request, response])

    if (globalThis.fetch !== originalFetch) return

    globalThis.fetch = async (input: string | URL | Request, init?: RequestInit) => {
      const originalRequest = new Request(input, init)

      for (const [matcher, handler] of store) {
        if (await matcher(originalRequest.clone())) {
          return await handler(originalRequest.clone())
        }
      }

      return originalFetch(input, init)
    }
  }

  restore() {
    this.store.length = 0
    globalThis.fetch = originalFetch
  }
}
