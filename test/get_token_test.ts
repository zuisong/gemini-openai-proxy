import { expect } from "jsr:@std/expect"
import { getToken } from "../src/utils.ts"
import type { ApiParam } from "../src/utils.ts"

Deno.test("get token_test", () => {
  expect(getToken({ authorization: "Bearer my_key" })).toStrictEqual({
    apikey: "my_key",
    useBeta: false,
  } satisfies ApiParam)
  expect(getToken({ other_key: "Bearer my_key" })).toStrictEqual(null)
  expect(getToken({ other_key: "my_key" })).toStrictEqual(null)
  expect(getToken({ authorization: "my_key" })?.apikey).toStrictEqual("my_key")
  expect(getToken({ Authorization: "my_key" })?.apikey).toStrictEqual("my_key")
  expect(getToken({ Authorization: "Bearer my_key#useBeta" })).toStrictEqual({
    apikey: "my_key",
    useBeta: true,
  } satisfies ApiParam)
  expect(getToken({ Authorization: "bearer my_key#useBeta" })).toStrictEqual({
    apikey: "my_key",
    useBeta: true,
  } satisfies ApiParam)
  expect(getToken({ Authorization: "bearer my_key#otherConfig" })).toStrictEqual({
    apikey: "my_key",
    useBeta: false,
  } satisfies ApiParam)
})
