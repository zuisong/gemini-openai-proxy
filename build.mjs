import * as esbuild from "esbuild"

/**
 * @type {esbuild.BuildOptions}
 */
const config = {
  entryPoints: ["./main_bun.ts", "./main_cloudflare-workers.ts", "./main_deno.ts", "./main_node.ts"],
  bundle: true,
  outdir: "dist",
  platform: "node",
  format: "esm",
  legalComments: "none",
  outExtension: { ".js": ".mjs" },
  target: ["chrome100", "node20"],
  external: ["node:*"],
  minify: false,
}

await esbuild.build(config)
