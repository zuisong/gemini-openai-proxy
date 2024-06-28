// node_modules/.deno/itty-router@5.0.17/node_modules/itty-router/Router.mjs
var r = ({ base: r2 = "", routes: e = [], ...a } = {}) => ({ __proto__: new Proxy({}, { get: (a2, t, o, c) => (a3, ...l) => e.push([t.toUpperCase?.(), RegExp(`^${(c = (r2 + a3).replace(/\/+(\/|$)/g, "$1")).replace(/(\/?\.?):(\w+)\+/g, "($1(?<$2>*))").replace(/(\/?\.?):(\w+)/g, "($1(?<$2>[^$1/]+?))").replace(/\./g, "\\.").replace(/(\/?)\*/g, "($1.*)?")}/*$`), l, c]) && o }), routes: e, ...a, async fetch(r3, ...t) {
  let o, c, l = new URL(r3.url), p = r3.query = { __proto__: null };
  for (let [r4, e2] of l.searchParams) p[r4] = p[r4] ? [].concat(p[r4], e2) : e2;
  r: try {
    for (let e2 of a.before || []) if (null != (o = await e2(r3.proxy ?? r3, ...t))) break r;
    e: for (let [a2, p2, f, h] of e) if ((a2 == r3.method || "ALL" == a2) && (c = l.pathname.match(p2))) {
      r3.params = c.groups || {}, r3.route = h;
      for (let e2 of f) if (null != (o = await e2(r3.proxy ?? r3, ...t))) break e;
    }
  } catch (e2) {
    if (!a.catch) throw e2;
    o = await a.catch(e2, r3.proxy ?? r3, ...t);
  }
  try {
    for (let e2 of a.finally || []) o = await e2(o, r3.proxy ?? r3, ...t) ?? o;
  } catch (e2) {
    if (!a.catch) throw e2;
    o = await a.catch(e2, r3.proxy ?? r3, ...t);
  }
  return o;
} });

// src/gemini-proxy.ts
async function geminiProxy(rawReq) {
  const url = new URL(rawReq.url);
  url.host = "generativelanguage.googleapis.com";
  url.port = "";
  url.protocol = "https:";
  const req = new Request(url, rawReq);
  const resp = await fetch(req);
  return new Response(resp.body, resp);
}

// src/utils.ts
function getToken(headers) {
  for (const [k, v] of headers) {
    if (k.toLowerCase() !== "authorization") continue;
    const rawApikey = v.substring(v.indexOf(" ") + 1);
    if (!rawApikey.includes("#")) {
      return {
        apikey: rawApikey,
        useBeta: false
      };
    }
    const apikey = rawApikey.substring(0, rawApikey.indexOf("#"));
    const params = new URLSearchParams(rawApikey.substring(rawApikey.indexOf("#") + 1));
    return {
      apikey,
      useBeta: params.has("useBeta")
    };
  }
  return null;
}
function parseBase64(base64) {
  if (!base64.startsWith("data:")) {
    return { text: "" };
  }
  const [m, data, ..._arr] = base64.split(",");
  const mimeType = m.match(/:(?<mime>.*?);/)?.groups?.mime ?? "img/png";
  return {
    inlineData: {
      mimeType,
      data
    }
  };
}
function openAiMessageToGeminiMessage(messages) {
  const result = messages.flatMap(({ role, content }) => {
    if (role === "system") {
      return [
        { role: "user", parts: [{ text: content }] },
        { role: "model", parts: [{ text: "" }] }
      ];
    }
    const parts = content == null || typeof content === "string" ? [{ text: content?.toString() ?? "" }] : content.map((item) => item.type === "text" ? { text: item.text } : parseBase64(item.image_url.url));
    return [{ role: "user" === role ? "user" : "model", parts }];
  }).flatMap((item, idx, arr) => {
    if (item.role === arr.at(idx + 1)?.role && item.role === "user") {
      return [item, { role: "model", parts: [{ text: "" }] }];
    }
    return [item];
  });
  return result;
}
function genModel(req) {
  const model = ModelMapping[req.model] ?? "gemini-1.0-pro-latest";
  let functions = req.tools?.filter((it) => it.type === "function")?.map((it) => it.function) ?? [];
  functions = functions.concat(req.functions ?? []);
  const responseMimeType = req.response_format?.type === "json_object" ? "application/json" : "text/plain";
  const generateContentRequest = {
    contents: openAiMessageToGeminiMessage(req.messages),
    generationConfig: {
      maxOutputTokens: req.max_tokens ?? void 0,
      temperature: req.temperature ?? void 0,
      topP: req.top_p ?? void 0,
      responseMimeType
    },
    tools: functions.length === 0 ? void 0 : [
      {
        functionDeclarations: functions
      }
    ],
    safetySettings: [
      "HARM_CATEGORY_HATE_SPEECH",
      "HARM_CATEGORY_SEXUALLY_EXPLICIT",
      "HARM_CATEGORY_DANGEROUS_CONTENT",
      "HARM_CATEGORY_HARASSMENT"
    ].map((category) => ({
      category,
      threshold: "BLOCK_NONE"
    }))
  };
  return [model, generateContentRequest];
}
var ModelMapping = {
  "gpt-3.5-turbo": "gemini-1.0-pro-latest",
  "gpt-4": "gemini-1.5-pro-latest",
  "gpt-4o": "gemini-1.5-flash-latest",
  "gpt-4-vision-preview": "gemini-1.0-pro-vision-latest",
  "gpt-4-turbo": "gemini-1.5-pro-latest",
  "gpt-4-turbo-preview": "gemini-1.5-pro-latest"
};
function getRuntimeKey() {
  const global = globalThis;
  if (global?.Deno !== void 0) {
    return "deno";
  }
  if (global?.Bun !== void 0) {
    return "bun";
  }
  if (typeof global?.WebSocketPair === "function") {
    return "workerd";
  }
  if (typeof global?.EdgeRuntime === "string") {
    return "edge-light";
  }
  if (global?.fastly !== void 0) {
    return "fastly";
  }
  if (global?.process?.release?.name === "node") {
    return "node";
  }
  return "other";
}

// src/hello.ts
function hello(req) {
  const origin = new URL(req.url).origin;
  return new Response(`
    Hello Gemini-OpenAI-Proxy from ${getRuntimeKey()}!

    You can try it with:

    curl ${origin}/v1/chat/completions \\
    -H "Authorization: Bearer $YOUR_GEMINI_API_KEY" \\
    -H "Content-Type: application/json" \\
    -d '{
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": "Hello"}],
        "temperature": 0.7
    }'
    `);
}

// src/itty-router/cors.ts
function cors(options = {}) {
  const { origin = "*", credentials = false, allowMethods = "*", allowHeaders, exposeHeaders, maxAge } = options;
  const getAccessControlOrigin = (request) => {
    const requestOrigin = request?.headers.get("origin");
    if (!requestOrigin) return void 0;
    if (origin === true) return requestOrigin;
    if (origin instanceof RegExp) return origin.test(requestOrigin) ? requestOrigin : void 0;
    if (Array.isArray(origin)) return origin.includes(requestOrigin) ? requestOrigin : void 0;
    if (origin instanceof Function) return origin(requestOrigin);
    return origin === "*" && credentials ? requestOrigin : origin;
  };
  const appendHeadersAndReturn = (response, headers) => {
    for (const [key, value] of Object.entries(headers)) {
      if (value) response.headers.append(key, value);
    }
    return response;
  };
  const preflight2 = (request) => {
    if (request.method === "OPTIONS") {
      const response = new Response(null, { status: 204 });
      return appendHeadersAndReturn(response, {
        "access-control-allow-origin": getAccessControlOrigin(request),
        "access-control-allow-methods": [allowMethods].flat().join(","),
        // include allowed methods
        "access-control-expose-headers": [exposeHeaders].flat().join(","),
        // include allowed headers
        "access-control-allow-headers": [allowHeaders].flat().join?.(",") || request.headers.get("access-control-request-headers") || "",
        // include allowed headers
        "access-control-max-age": maxAge?.toString(),
        "access-control-allow-credentials": credentials.toString()
      });
    }
  };
  const corsify2 = (response, request) => {
    if (response?.headers?.get("access-control-allow-origin") || response.status === 101) return response;
    return appendHeadersAndReturn(response, {
      "access-control-allow-origin": getAccessControlOrigin(request),
      "access-control-allow-credentials": credentials.toString()
    });
  };
  return { corsify: corsify2, preflight: preflight2 };
}

// src/log.ts
var LEVEL = ["debug", "info", "warn", "error"];
var Logger = class {
  config;
  debug;
  info;
  warn;
  error;
  constructor(config) {
    const level = LEVEL.find((it) => it === config?.level) ?? "warn";
    this.config = {
      prefix: config?.prefix ?? "",
      level
    };
    for (const m of LEVEL) {
      this[m] = (...data) => this.#write(m, ...data);
    }
  }
  #write(level, ...data) {
    const { level: configLevel, prefix } = this.config;
    if (LEVEL.indexOf(level) < LEVEL.indexOf(configLevel)) {
      return;
    }
    console[level](`${(/* @__PURE__ */ new Date()).toISOString()} ${level.toUpperCase()}${prefix ? ` ${prefix}` : ""}`, ...data);
  }
};

// node_modules/.deno/eventsource-parser@1.1.2/node_modules/eventsource-parser/dist/index.js
function createParser(onParse) {
  let isFirstChunk;
  let buffer;
  let startingPosition;
  let startingFieldLength;
  let eventId;
  let eventName;
  let data;
  reset();
  return {
    feed,
    reset
  };
  function reset() {
    isFirstChunk = true;
    buffer = "";
    startingPosition = 0;
    startingFieldLength = -1;
    eventId = void 0;
    eventName = void 0;
    data = "";
  }
  function feed(chunk) {
    buffer = buffer ? buffer + chunk : chunk;
    if (isFirstChunk && hasBom(buffer)) {
      buffer = buffer.slice(BOM.length);
    }
    isFirstChunk = false;
    const length = buffer.length;
    let position = 0;
    let discardTrailingNewline = false;
    while (position < length) {
      if (discardTrailingNewline) {
        if (buffer[position] === "\n") {
          ++position;
        }
        discardTrailingNewline = false;
      }
      let lineLength = -1;
      let fieldLength = startingFieldLength;
      let character;
      for (let index = startingPosition; lineLength < 0 && index < length; ++index) {
        character = buffer[index];
        if (character === ":" && fieldLength < 0) {
          fieldLength = index - position;
        } else if (character === "\r") {
          discardTrailingNewline = true;
          lineLength = index - position;
        } else if (character === "\n") {
          lineLength = index - position;
        }
      }
      if (lineLength < 0) {
        startingPosition = length - position;
        startingFieldLength = fieldLength;
        break;
      } else {
        startingPosition = 0;
        startingFieldLength = -1;
      }
      parseEventStreamLine(buffer, position, fieldLength, lineLength);
      position += lineLength + 1;
    }
    if (position === length) {
      buffer = "";
    } else if (position > 0) {
      buffer = buffer.slice(position);
    }
  }
  function parseEventStreamLine(lineBuffer, index, fieldLength, lineLength) {
    if (lineLength === 0) {
      if (data.length > 0) {
        onParse({
          type: "event",
          id: eventId,
          event: eventName || void 0,
          data: data.slice(0, -1)
          // remove trailing newline
        });
        data = "";
        eventId = void 0;
      }
      eventName = void 0;
      return;
    }
    const noValue = fieldLength < 0;
    const field = lineBuffer.slice(index, index + (noValue ? lineLength : fieldLength));
    let step = 0;
    if (noValue) {
      step = lineLength;
    } else if (lineBuffer[index + fieldLength + 1] === " ") {
      step = fieldLength + 2;
    } else {
      step = fieldLength + 1;
    }
    const position = index + step;
    const valueLength = lineLength - step;
    const value = lineBuffer.slice(position, position + valueLength).toString();
    if (field === "data") {
      data += value ? "".concat(value, "\n") : "\n";
    } else if (field === "event") {
      eventName = value;
    } else if (field === "id" && !value.includes("\0")) {
      eventId = value;
    } else if (field === "retry") {
      const retry = parseInt(value, 10);
      if (!Number.isNaN(retry)) {
        onParse({
          type: "reconnect-interval",
          value: retry
        });
      }
    }
  }
}
var BOM = [239, 187, 191];
function hasBom(buffer) {
  return BOM.every((charCode, index) => buffer.charCodeAt(index) === charCode);
}

// node_modules/.deno/eventsource-parser@1.1.2/node_modules/eventsource-parser/dist/stream.js
var EventSourceParserStream = class extends TransformStream {
  constructor() {
    let parser;
    super({
      start(controller) {
        parser = createParser((event) => {
          if (event.type === "event") {
            controller.enqueue(event);
          }
        });
      },
      transform(chunk) {
        parser.feed(chunk);
      }
    });
  }
};

// src/gemini-api-client/errors.ts
var GoogleGenerativeAIError = class extends Error {
  constructor(message) {
    super(`[GoogleGenerativeAI Error]: ${message}`);
  }
};
var GoogleGenerativeAIResponseError = class extends GoogleGenerativeAIError {
  constructor(message, response) {
    super(message);
    this.response = response;
  }
};

// src/gemini-api-client/response-helper.ts
function addHelpers(response) {
  ;
  response.result = () => {
    if (response.candidates && response.candidates.length > 0) {
      if (response.candidates.length > 1) {
        console.warn(
          `This response had ${response.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`
        );
      }
      if (hadBadFinishReason(response.candidates[0])) {
        throw new GoogleGenerativeAIResponseError(
          `${formatBlockErrorMessage(response)}`,
          response
        );
      }
      return getText(response);
    }
    if (response.promptFeedback) {
      throw new GoogleGenerativeAIResponseError(
        `Text not available. ${formatBlockErrorMessage(response)}`,
        response
      );
    }
    return "";
  };
  return response;
}
function getText(response) {
  if (response.candidates?.[0].content?.parts?.[0]?.text) {
    return response.candidates[0].content.parts[0].text;
  }
  if (response.candidates?.[0].content?.parts?.[0]?.functionCall) {
    return response.candidates[0].content.parts[0].functionCall;
  }
  return "";
}
var badFinishReasons = ["RECITATION", "SAFETY"];
function hadBadFinishReason(candidate) {
  return !!candidate.finishReason && badFinishReasons.includes(candidate.finishReason);
}
function formatBlockErrorMessage(response) {
  let message = "";
  if ((!response.candidates || response.candidates.length === 0) && response.promptFeedback) {
    message += "Response was blocked";
    if (response.promptFeedback?.blockReason) {
      message += ` due to ${response.promptFeedback.blockReason}`;
    }
    if (response.promptFeedback?.blockReasonMessage) {
      message += `: ${response.promptFeedback.blockReasonMessage}`;
    }
  } else if (response.candidates?.[0]) {
    const firstCandidate = response.candidates[0];
    if (hadBadFinishReason(firstCandidate)) {
      message += `Candidate was blocked due to ${firstCandidate.finishReason}`;
      if (firstCandidate.finishMessage) {
        message += `: ${firstCandidate.finishMessage}`;
      }
    }
  }
  return message;
}

// src/gemini-api-client/gemini-api-client.ts
async function* generateContent(apiParam, model, params, requestOptions) {
  const url = new RequestUrl(model, "streamGenerateContent" /* STREAM_GENERATE_CONTENT */, true, apiParam);
  const response = await makeRequest(url, JSON.stringify(params), requestOptions);
  const body = response.body;
  if (body == null) {
    return;
  }
  for await (const event of body.pipeThrough(new TextDecoderStream()).pipeThrough(new EventSourceParserStream())) {
    const responseJson = JSON.parse(event.data);
    const enhancedResponse = addHelpers(responseJson);
    yield {
      response: enhancedResponse
    };
  }
}
async function makeRequest(url, body, requestOptions) {
  let response;
  try {
    response = await fetch(url.toURL(), {
      ...buildFetchOptions(requestOptions),
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body
    });
    if (!response.ok) {
      let message = "";
      try {
        const errResp = await response.json();
        message = errResp.error.message;
        if (errResp.error.details) {
          message += ` ${JSON.stringify(errResp.error.details)}`;
        }
      } catch (_e) {
      }
      throw new Error(`[${response.status} ${response.statusText}] ${message}`);
    }
  } catch (e) {
    console.log(e);
    const err = new GoogleGenerativeAIError(`Error fetching from google -> ${e.message}`);
    err.stack = e.stack;
    throw err;
  }
  return response;
}
var RequestUrl = class {
  constructor(model, task, stream, apiParam) {
    this.model = model;
    this.task = task;
    this.stream = stream;
    this.apiParam = apiParam;
  }
  toURL() {
    const api_version = "v1beta" /* v1beta */;
    const url = new URL(`${BASE_URL}/${api_version}/models/${this.model}:${this.task}`);
    url.searchParams.append("key", this.apiParam.apikey);
    if (this.stream) {
      url.searchParams.append("alt", "sse");
    }
    return url;
  }
};
var BASE_URL = "https://generativelanguage.googleapis.com";
function buildFetchOptions(requestOptions) {
  const fetchOptions = {};
  if (requestOptions?.timeout) {
    const abortController = new AbortController();
    const signal = abortController.signal;
    setTimeout(() => abortController.abort(), requestOptions.timeout);
    fetchOptions.signal = signal;
  }
  return fetchOptions;
}

// src/openai/chat/completions/NonStreamingChatProxyHandler.ts
async function nonStreamingChatProxyHandler(req, apiParam, log) {
  const [model, geminiReq] = genModel(req);
  let geminiResp = "";
  try {
    for await (const it of generateContent(apiParam, model, geminiReq)) {
      const data = it.response.result();
      if (typeof data === "string") {
        geminiResp += data;
      } else {
        geminiResp = data;
        break;
      }
    }
  } catch (err) {
    log?.error(req);
    log?.error(err?.message ?? err.toString());
    geminiResp = err?.message ?? err.toString();
  }
  log?.debug(req);
  log?.debug(geminiResp);
  function genOpenAiResp(content) {
    if (typeof content === "string") {
      return {
        id: "chatcmpl-abc123",
        object: "chat.completion",
        created: Math.floor(Date.now() / 1e3),
        model: req.model,
        choices: [
          {
            message: { role: "assistant", content },
            finish_reason: "stop",
            index: 0,
            logprobs: null
          }
        ]
      };
    }
    return {
      id: "chatcmpl-abc123",
      object: "chat.completion",
      created: Math.floor(Date.now() / 1e3),
      model: req.model,
      choices: [
        {
          message: {
            role: "assistant",
            content: null,
            function_call: {
              name: content.name ?? "",
              arguments: JSON.stringify(content.args)
            }
          },
          finish_reason: "function_call",
          index: 0,
          logprobs: null
        }
      ]
    };
  }
  return genOpenAiResp(geminiResp);
}

// src/openai/chat/completions/StreamingChatProxyHandler.ts
async function* streamingChatProxyHandler(req, apiParam) {
  const [model, geminiReq] = genModel(req);
  try {
    for await (const it of generateContent(apiParam, model, geminiReq)) {
      const data = it.response.result();
      yield genOpenAiResp(data, false);
    }
  } catch (error) {
    yield genOpenAiResp(error?.message ?? error.toString(), true);
  }
  yield genOpenAiResp("", true);
  return void 0;
  function genOpenAiResp(content, stop) {
    if (typeof content === "string") {
      return {
        id: "chatcmpl-abc123",
        object: "chat.completion.chunk",
        created: Math.floor(Date.now() / 1e3),
        model: req.model,
        choices: [
          {
            delta: { role: "assistant", content },
            finish_reason: stop ? "stop" : null,
            index: 0
          }
        ]
      };
    }
    return {
      id: "chatcmpl-abc123",
      object: "chat.completion.chunk",
      created: Math.floor(Date.now() / 1e3),
      model: req.model,
      choices: [
        {
          delta: { role: "assistant", function_call: content },
          finish_reason: stop ? "function_call" : null,
          index: 0
        }
      ]
    };
  }
}

// src/openai/chat/completions/ChatProxyHandler.ts
async function chatProxyHandler(rawReq) {
  const req = await rawReq.json();
  const headers = rawReq.headers;
  const apiParam = getToken(headers);
  if (apiParam == null) {
    return new Response("Unauthorized", { status: 401 });
  }
  rawReq.logger?.debug(req);
  if (req.stream !== true) {
    const resp = await nonStreamingChatProxyHandler(req, apiParam, rawReq.logger);
    rawReq.logger?.debug(resp);
    return Response.json(resp);
  }
  const respArr = streamingChatProxyHandler(req, apiParam);
  return sseResponse(
    async function* () {
      for await (const data of respArr) {
        rawReq.logger?.debug("streamingChatProxyHandler", data);
        yield JSON.stringify(data);
      }
      yield "[DONE]";
      return void 0;
    }()
  );
}
var encoder = new TextEncoder();
function sseResponse(dataStream) {
  const s = new ReadableStream({
    async pull(controller) {
      const { value, done } = await dataStream.next();
      if (done) {
        controller.close();
      } else {
        controller.enqueue(encoder.encode(toSseMsg({ data: value })));
      }
    }
  });
  const response = new Response(s, {
    status: 200,
    headers: new Headers({
      "Content-Type": "text/event-stream"
    })
  });
  return response;
}
function toSseMsg(sseEvent) {
  const { event, data, id } = sseEvent;
  let result = `data: ${data}
`;
  if (event) {
    result += `event: ${event ?? ""}
`;
  }
  if (id) {
    result += `id: ${id ?? ""}
`;
  }
  return `${result}
`;
}

// src/openai/models.ts
var modelData = Object.keys(ModelMapping).map((model) => ({
  created: 1677610602,
  object: "model",
  owned_by: "openai",
  id: model
}));
var models = () => {
  return {
    object: "list",
    data: modelData
  };
};
var modelDetail = (model) => {
  return modelData.find((it) => it.id === model);
};

// src/app.ts
var { preflight, corsify } = cors({ allowHeaders: "*" });
var app = r({
  before: [
    preflight,
    (req) => {
      req.logger = new Logger({ prefix: crypto.randomUUID().toString() });
      req.logger.warn(`--> ${req.method} ${req.url}`);
    }
  ],
  finally: [
    corsify,
    (_, req) => {
      req.logger?.warn(`<-- ${req.method} ${req.url}`);
    }
  ]
});
app.get("/", hello);
app.post("/v1/chat/completions", chatProxyHandler);
app.get("/v1/models", () => Response.json(models()));
app.get("/v1/models/:model", (c) => Response.json(modelDetail(c.params.model)));
app.post(":model_version/models/:model_and_action", geminiProxy);
app.all("*", () => new Response("Page Not Found", { status: 404 }));

// main_cloudflare-workers.ts
var main_cloudflare_workers_default = {
  fetch: app.fetch
};
export {
  main_cloudflare_workers_default as default
};
