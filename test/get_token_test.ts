import { assertEquals } from "jsr:@std/assert"
import { getToken } from "../src/utils.ts"
import type { ApiParam } from "../src/utils.ts"

Deno.test("get token_test", () => {
  function checkToken(rec: Record<string, string>, res: ApiParam | null) {
    assertEquals(getToken(Object.entries(rec)), res)
  }

  checkToken({ authorization: "Bearer my_key" }, { apikey: "my_key", useBeta: false })
  checkToken({ other_key: "Bearer my_key" }, null)
  checkToken({ other_key: "my_key" }, null)
  checkToken({ authorization: "my_key" }, { apikey: "my_key", useBeta: false })
  checkToken({ Authorization: "my_key" }, { apikey: "my_key", useBeta: false })
  checkToken({ Authorization: "Bearer my_key#useBeta" }, { apikey: "my_key", useBeta: true })
  checkToken({ Authorization: "bearer my_key#useBeta" }, { apikey: "my_key", useBeta: true })
  checkToken({ Authorization: "bearer my_key#otherConfig" }, { apikey: "my_key", useBeta: false })
})
