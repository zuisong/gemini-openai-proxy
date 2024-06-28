import { createCache } from "jsr:@deno/cache-dir"
import { bundle } from "jsr:@deno/emit"
import { emptyDir } from "jsr:@std/fs"

await emptyDir("./dist")

for (const f of ["main_bun", "main_cloudflare-workers", "main_deno", "main_node"]) {
  const cache = createCache({})

  const result = await bundle(`./${f}.ts`, {
    minify: false,
    importMap: {
      imports: {
        "itty-router/": "https://esm.sh/itty-router/",
        "eventsource-parser/": "https://esm.sh/eventsource-parser/",
        "@hono/node-server": "https://esm.sh/@hono/node-server",
      },
    },
    load: async (specifier) => {
      if (specifier.startsWith("node:")) {
        return { kind: "external", specifier }
      }
      return await cache.load(specifier)
    },
  })

  const { code } = result
  console.log(code)

  Deno.writeTextFileSync(`./dist/${f}.mjs`, code)
}
