import { assertEquals } from "jsr:@std/assert"
import { getToken } from "../src/utils.ts"

Deno.test("get token_test", () => {
  assertEquals(getToken({ authorization: "Bearer my_key" }), { apikey: "my_key", useBeta: false })
  assertEquals(getToken({ other_key: "Bearer my_key" }), null)
  assertEquals(getToken({ other_key: "my_key" }), null)
  assertEquals(getToken({ authorization: "my_key" }), { apikey: "my_key", useBeta: false })
  assertEquals(getToken({ Authorization: "my_key" }), { apikey: "my_key", useBeta: false })
  assertEquals(getToken({ Authorization: "Bearer my_key#useBeta" }), { apikey: "my_key", useBeta: true })
  assertEquals(getToken({ Authorization: "bearer my_key#useBeta" }), { apikey: "my_key", useBeta: true })
  assertEquals(getToken({ Authorization: "bearer my_key#otherConfig" }), { apikey: "my_key", useBeta: false })
})
