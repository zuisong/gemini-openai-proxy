# Gemini-OpenAI-Proxy

Gemini-OpenAI-Proxy is a proxy software. It is designed to convert OpenAI API
protocol calls into Google Gemini Pro protocol, so that software using OpenAI
protocol can use Gemini Pro model without perception.

If you're interested in using Google Gemini but don't want to modify your
software, Gemini-OpenAI-Proxy is a great option. It allows you to easily
integrate the powerful features of Google Gemini without having to do any
complex development work.

## Plan

- [x] `/v1/chat/completions`
  - [x] stream
  - [x] complete

## Usage

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

then you got a openai server at `http://localhost:8000`

```shell
curl http://localhost:8000/v1/chat/completions \
    -H "Authorization: Bearer $YOUR_GEMINI_API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
    "model": "gpt-3.5-turbo",
    "messages": [{"role": "user", "content": "Hello"}],
    "temperature": 0.7
    }'
```

![demo](./assets/demo.png)
