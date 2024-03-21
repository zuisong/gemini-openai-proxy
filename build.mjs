import { join } from "node:path"
import * as esbuild from "esbuild"

for (const [ext, app] of [
  ["", "app.ts"],
  ["itty.", "app-itty.ts"],
]) {
  /**
   * @type {esbuild.BuildOptions}
   */
  const config = {
    entryPoints: [
      //
      "./main_bun.ts",
      "./main_cloudflare-workers.ts",
      "./main_deno.ts",
      "./main_node.ts",
    ],
    bundle: true,
    outdir: "dist",
    platform: "node",
    treeShaking: true,
    format: "esm",
    legalComments: "none",
    outExtension: { ".js": `.${ext}mjs` },
    target: ["chrome100", "node18"],
    external: ["node:*"],
    minify: false,
    plugins: [
      {
        name: "example",
        /**@param {esbuild.PluginBuild} build  */
        setup(build) {
          build.onResolve({ filter: /app\.ts/ }, ({ resolveDir }) => ({ path: join(resolveDir, "src", app) }))
        },
      },
    ],
  }

  await esbuild.build(config)
}
