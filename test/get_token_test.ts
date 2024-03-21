import { assertEquals } from "jsr:@std/assert"
import { getToken } from "../src/utils.ts"

Deno.test("get token_test", () => {
  assertEquals(getToken(new Headers({ authorization: "Bearer my_key" })), { apikey: "my_key", useBeta: false })
  assertEquals(getToken(new Headers({ other_key: "Bearer my_key" })), null)
  assertEquals(getToken(new Headers({ other_key: "my_key" })), null)
  assertEquals(getToken(new Headers({ authorization: "my_key" })), { apikey: "my_key", useBeta: false })
  assertEquals(getToken(new Headers({ Authorization: "my_key" })), { apikey: "my_key", useBeta: false })
  assertEquals(getToken(new Headers({ Authorization: "Bearer my_key#useBeta" })), { apikey: "my_key", useBeta: true })
  assertEquals(getToken(new Headers({ Authorization: "bearer my_key#useBeta" })), { apikey: "my_key", useBeta: true })
  assertEquals(getToken(new Headers({ Authorization: "bearer my_key#otherConfig" })), {
    apikey: "my_key",
    useBeta: false,
  })
})
