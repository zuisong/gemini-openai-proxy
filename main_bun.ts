import { app } from "./src/app.ts"
class PolyfillTextDecoderStream extends TransformStream<Uint8Array, string> implements TextDecoderStream {
  readonly encoding: string
  readonly fatal: boolean
  readonly ignoreBOM: boolean

  constructor(
    encoding = "utf-8",
    { fatal = false, ignoreBOM = false }: ConstructorParameters<typeof TextDecoder>[1] = {},
  ) {
    const decoder = new TextDecoder(encoding, { fatal, ignoreBOM })
    super({
      transform(chunk: Uint8Array, controller: TransformStreamDefaultController<string>) {
        const decoded = decoder.decode(chunk, { stream: true })
        if (decoded.length > 0) {
          controller.enqueue(decoded)
        }
      },
      flush(controller: TransformStreamDefaultController<string>) {
        const output = decoder.decode()
        if (output.length > 0) {
          controller.enqueue(output)
        }
      },
    })

    this.encoding = encoding
    this.fatal = fatal
    this.ignoreBOM = ignoreBOM
  }
  [Symbol.toStringTag] = "PolyfillTextDecoderStream"
}
// fix bun does not support TextDecoderStream
// https://github.com/oven-sh/bun/issues/5648
globalThis.TextDecoderStream = PolyfillTextDecoderStream

console.log("Listening on http://localhost:8000/")

// @ts-ignore supress warning
Bun.serve({
  port: 8000,
  fetch: app.fetch,
})
