import { emptyDirSync } from "jsr:@std/fs"

emptyDirSync("./dist")

for (const f of ["main_bun", "main_cloudflare-workers", "main_deno", "main_node"]) {
  new Deno.Command(Deno.execPath(), {
    args: ["bundle", `${f}.ts`, "-o", `dist/${f}.mjs`, "--sourcemap"],
  }).outputSync()
}
