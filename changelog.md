# changelog

## 0.13.0 (Unreleased)

## 0.12.0 (2024-05-16)

- add support for `gemini-1.5-pro-vision-latest` and `gemini-1.5-flash-latest`

## 0.11.0 (2024-04-11)

- Resolve CORS error: Update server configurations to enable Cross-Origin
  access.
- Add support for function calls in non-stream mode.
- Migrate to [itty-router](https://github.com/kwhitley/itty-router) to reduce
  package size.
- Utilize the official Deno Docker image for improved consistency.

## 0.10.0 (2024-02-28)

- gemini-openai-proxy can now act as a reverse proxy for google gemini, which
  can be useful for people in region that don't have access to the google gemini
  > it will request `https://generativelanguage.googleapis.com`

  ```shell
  curl \
    "http://localhost:8000/v1/models/gemini-pro:generateContent?key=$YOUR_GEMINI_API_KEY" \
  --header 'Content-Type: application/json' \
  --data '{"contents":[{"parts":[{"text":"Hello"}]}]}'
  ```

- Service settings can now be passed via apikey, currently the first supported
  setting is `useBeta` , which can be set like so
  > it will use `v1beta` version gemini api,
  > <https://ai.google.dev/docs/api_versions>

  ```shell
  curl http://localhost:8000/v1/chat/completions \
    -H "Authorization: Bearer $YOUR_GEMINI_API_KEY#useBeta" \
    -H "Content-Type: application/json" \
    -d '{
    "model": "gpt-3.5-turbo",
    "messages": [{"role": "user", "content": "Hello"}],
    "temperature": 0.7,"stream":true
    }'
  ```

## 0.9.0(2024-02-02)

- change default safe setting config #8
- fix can't pull docker image with no manifest #13

## 0.6.0(2024-01-20)

- fix bun runtime sream model problem, add ployfill for `TextDecoderStream`
  > bun does not support `TextDecoderStream` now
  > <https://github.com/oven-sh/bun/issues/5648>

- Imporve document

## 0.5.0(2024-01-19)

- Add cloudflare workers support
- Reduce docker image size
- Imporve document

## 0.4.0(2024-01-17)

- Refined the handling of consecutive user messages

## 0.3.0(2024-01-16)

- Add system message support

## 0.2.0(2024-01-10)

- Add stream api support

## 0.1.0(2024-01-08)

- support gemini-pro api
- support gemini-pro-vision api
