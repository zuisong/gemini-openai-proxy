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
  - [ ] stream
  - [x] complete

## Usage

### deno

```shell
deno task start:deno
```

### node

```shell
pnpm install && pnpm run start:node
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

### Deploy to [Deno Deploy](https://deno.com/deploy)

1. fork this project, and then deploy to [Deno Deploy](https://deno.com/deploy). **It is free!!! 😍**
   ![deno_deploy](./assets/deno-deploy.png)

2. then you got a openai server at `https://<your_site>.deno.dev`
