import * as swc from "@swc/wasm"
import * as rollup from "rollup"
import { nodeResolve } from "@rollup/plugin-node-resolve"

const config: rollup.InputOptions & { output: rollup.OutputOptions } = {
  input: ["main_cloudflare-workers.ts"],
  output: {
    sourcemap: false,
    dir: "cloudflare-workers",
    format: "module",
    esModule: true,
  },
  plugins: [
    {
      name: "swc",
      async transform(rawCode, filename) {
        return await swc.transform(rawCode, {
          filename,
          jsc: { parser: { syntax: "typescript" } },
          env: { targets: "chrome>=60,safari>=13,firefox>=60" },
          sourceMaps: true,
          minify: false,
        })
      },
    },
    nodeResolve(),
  ],
}

const bundle = await rollup.rollup(config)
await bundle.write(config.output)
