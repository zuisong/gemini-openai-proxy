# Gemini-OpenAI-Proxy

Gemini-OpenAI-Proxy is a proxy software. It is designed to convert OpenAI API
protocol calls into Google Gemini Pro protocol, so that software using OpenAI
protocol can use Gemini Pro model without perception.

If you're interested in using Google Gemini but don't want to modify your
software, Gemini-OpenAI-Proxy is a great option. It allows you to easily
integrate the powerful features of Google Gemini without having to do any
complex development work.

## Demo

> Get api key from <https://makersuite.google.com/app/apikey>

```shell
export YOUR_GEMINI_API_KEY="your api key"

curl -s http://localhost:8000/v1/chat/completions \
  -H "Authorization: Bearer $YOUR_GEMINI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
      "model": "gpt-3.5-turbo",
      "messages": [{"role": "user", "content": "Hello, Who are you?"}],
      "temperature": 0.7
      }'
```

![demo](./assets/demo.png)

## Plan

- [x] `/v1/chat/completions`
  - [x] stream
  - [x] complete

## Run On Serverless

### [Cloudflare Workers](https://workers.cloudflare.com)

> build command  `npm run build:cf_worker`

Copy [`main_cloudflare-workers.mjs`](./dist/main_cloudflare-workers.mjs) to `cloudflare-workers`

### [Deno Deploy](https://deno.com/deploy)

> build command `npm run build:deno`

Copy [`main_deno.mjs`](./dist/main_deno.mjs) to `deno deploy`

## Run On Local

### deno

```shell
deno task start:deno
```

### node

```shell
npm install && npm run start:node
```

### bun

```shell
bun run start:bun
```

### docker

```shell
docker run -d -p 8000:8000 ghcr.io/zuisong/gemini-openai-proxy:deno
## or
docker run -d -p 8000:8000 ghcr.io/zuisong/gemini-openai-proxy:bun
## or
docker run -d -p 8000:8000 ghcr.io/zuisong/gemini-openai-proxy:node
```
