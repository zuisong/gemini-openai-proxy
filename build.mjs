import { rmdir } from "node:fs/promises"
import { build } from "esbuild"
await rmdir("./dist").catch((_) => {})

for (const f of ["main_bun", "main_cloudflare-workers", "main_deno", "main_node"]) {
  /**
   * @type {esbuild.BuildOptions}
   */
  const config = {
    entryPoints: [`./${f}.ts`],
    outfile: `./dist/${f}.mjs`,
    format: "esm",
    minify: false,
    bundle: true,
    platform: "node",
    packages: "bundle",
    treeShaking: true,
    legalComments: "none",
    outExtension: { ".js": `.mjs` },
    target: ["chrome100", "node18"],
    external: ["node:*"],
  }
  await build(config)
}
