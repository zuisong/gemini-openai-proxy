export async function geminiProxy(rawReq: Request) {
  const url = new URL(rawReq.url)
  url.host = "generativelanguage.googleapis.com"
  url.port = ""
  url.protocol = "https:"
  const req = new Request(url, rawReq)
  const resp = await fetch(req)
  return new Response(resp.body, resp)
}
