// ../../../.cache/deno/npm/registry.npmjs.org/@hono/node-server/1.14.1/dist/index.mjs
import { createServer as createServerHTTP } from "node:http";
import { Http2ServerRequest } from "node:http2";
import { Readable } from "node:stream";
import crypto2 from "node:crypto";
var RequestError = class extends Error {
  static name = "RequestError";
  constructor(message, options) {
    super(message, options);
  }
};
var toRequestError = (e2) => {
  if (e2 instanceof RequestError) {
    return e2;
  }
  return new RequestError(e2.message, {
    cause: e2
  });
};
var GlobalRequest = global.Request;
var Request2 = class extends GlobalRequest {
  constructor(input, options) {
    if (typeof input === "object" && getRequestCache in input) {
      input = input[getRequestCache]();
    }
    if (typeof options?.body?.getReader !== "undefined") {
      ;
      options.duplex ??= "half";
    }
    super(input, options);
  }
};
var newRequestFromIncoming = (method, url, incoming, abortController) => {
  const headerRecord = [];
  const rawHeaders = incoming.rawHeaders;
  for (let i = 0; i < rawHeaders.length; i += 2) {
    const { [i]: key, [i + 1]: value } = rawHeaders;
    if (key.charCodeAt(0) !== /*:*/
    58) {
      headerRecord.push([
        key,
        value
      ]);
    }
  }
  const init = {
    method,
    headers: headerRecord,
    signal: abortController.signal
  };
  if (method === "TRACE") {
    init.method = "GET";
    const req = new Request2(url, init);
    Object.defineProperty(req, "method", {
      get() {
        return "TRACE";
      }
    });
    return req;
  }
  if (!(method === "GET" || method === "HEAD")) {
    if ("rawBody" in incoming && incoming.rawBody instanceof Buffer) {
      init.body = new ReadableStream({
        start(controller) {
          controller.enqueue(incoming.rawBody);
          controller.close();
        }
      });
    } else {
      init.body = Readable.toWeb(incoming);
    }
  }
  return new Request2(url, init);
};
var getRequestCache = Symbol("getRequestCache");
var requestCache = Symbol("requestCache");
var incomingKey = Symbol("incomingKey");
var urlKey = Symbol("urlKey");
var abortControllerKey = Symbol("abortControllerKey");
var getAbortController = Symbol("getAbortController");
var requestPrototype = {
  get method() {
    return this[incomingKey].method || "GET";
  },
  get url() {
    return this[urlKey];
  },
  [getAbortController]() {
    this[getRequestCache]();
    return this[abortControllerKey];
  },
  [getRequestCache]() {
    this[abortControllerKey] ||= new AbortController();
    return this[requestCache] ||= newRequestFromIncoming(this.method, this[urlKey], this[incomingKey], this[abortControllerKey]);
  }
};
[
  "body",
  "bodyUsed",
  "cache",
  "credentials",
  "destination",
  "headers",
  "integrity",
  "mode",
  "redirect",
  "referrer",
  "referrerPolicy",
  "signal",
  "keepalive"
].forEach((k) => {
  Object.defineProperty(requestPrototype, k, {
    get() {
      return this[getRequestCache]()[k];
    }
  });
});
[
  "arrayBuffer",
  "blob",
  "clone",
  "formData",
  "json",
  "text"
].forEach((k) => {
  Object.defineProperty(requestPrototype, k, {
    value: function() {
      return this[getRequestCache]()[k]();
    }
  });
});
Object.setPrototypeOf(requestPrototype, Request2.prototype);
var newRequest = (incoming, defaultHostname) => {
  const req = Object.create(requestPrototype);
  req[incomingKey] = incoming;
  const incomingUrl = incoming.url || "";
  if (incomingUrl[0] !== "/" && // short-circuit for performance. most requests are relative URL.
  (incomingUrl.startsWith("http://") || incomingUrl.startsWith("https://"))) {
    if (incoming instanceof Http2ServerRequest) {
      throw new RequestError("Absolute URL for :path is not allowed in HTTP/2");
    }
    try {
      const url2 = new URL(incomingUrl);
      req[urlKey] = url2.href;
    } catch (e2) {
      throw new RequestError("Invalid absolute URL", {
        cause: e2
      });
    }
    return req;
  }
  const host = (incoming instanceof Http2ServerRequest ? incoming.authority : incoming.headers.host) || defaultHostname;
  if (!host) {
    throw new RequestError("Missing host header");
  }
  let scheme;
  if (incoming instanceof Http2ServerRequest) {
    scheme = incoming.scheme;
    if (!(scheme === "http" || scheme === "https")) {
      throw new RequestError("Unsupported scheme");
    }
  } else {
    scheme = incoming.socket && incoming.socket.encrypted ? "https" : "http";
  }
  const url = new URL(`${scheme}://${host}${incomingUrl}`);
  if (url.hostname.length !== host.length && url.hostname !== host.replace(/:\d+$/, "")) {
    throw new RequestError("Invalid host header");
  }
  req[urlKey] = url.href;
  return req;
};
function writeFromReadableStream(stream, writable) {
  if (stream.locked) {
    throw new TypeError("ReadableStream is locked.");
  } else if (writable.destroyed) {
    stream.cancel();
    return;
  }
  const reader = stream.getReader();
  writable.on("close", cancel);
  writable.on("error", cancel);
  reader.read().then(flow, cancel);
  return reader.closed.finally(() => {
    writable.off("close", cancel);
    writable.off("error", cancel);
  });
  function cancel(error) {
    reader.cancel(error).catch(() => {
    });
    if (error) {
      writable.destroy(error);
    }
  }
  function onDrain() {
    reader.read().then(flow, cancel);
  }
  function flow({ done, value }) {
    try {
      if (done) {
        writable.end();
      } else if (!writable.write(value)) {
        writable.once("drain", onDrain);
      } else {
        return reader.read().then(flow, cancel);
      }
    } catch (e2) {
      cancel(e2);
    }
  }
}
var buildOutgoingHttpHeaders = (headers) => {
  const res = {};
  if (!(headers instanceof Headers)) {
    headers = new Headers(headers ?? void 0);
  }
  const cookies = [];
  for (const [k, v] of headers) {
    if (k === "set-cookie") {
      cookies.push(v);
    } else {
      res[k] = v;
    }
  }
  if (cookies.length > 0) {
    res["set-cookie"] = cookies;
  }
  res["content-type"] ??= "text/plain; charset=UTF-8";
  return res;
};
var responseCache = Symbol("responseCache");
var getResponseCache = Symbol("getResponseCache");
var cacheKey = Symbol("cache");
var GlobalResponse = global.Response;
var Response2 = class _Response {
  #body;
  #init;
  [getResponseCache]() {
    delete this[cacheKey];
    return this[responseCache] ||= new GlobalResponse(this.#body, this.#init);
  }
  constructor(body, init) {
    this.#body = body;
    if (init instanceof _Response) {
      const cachedGlobalResponse = init[responseCache];
      if (cachedGlobalResponse) {
        this.#init = cachedGlobalResponse;
        this[getResponseCache]();
        return;
      } else {
        this.#init = init.#init;
      }
    } else {
      this.#init = init;
    }
    if (typeof body === "string" || typeof body?.getReader !== "undefined") {
      let headers = init?.headers || {
        "content-type": "text/plain; charset=UTF-8"
      };
      if (headers instanceof Headers) {
        headers = buildOutgoingHttpHeaders(headers);
      }
      ;
      this[cacheKey] = [
        init?.status || 200,
        body,
        headers
      ];
    }
  }
};
[
  "body",
  "bodyUsed",
  "headers",
  "ok",
  "redirected",
  "status",
  "statusText",
  "trailers",
  "type",
  "url"
].forEach((k) => {
  Object.defineProperty(Response2.prototype, k, {
    get() {
      return this[getResponseCache]()[k];
    }
  });
});
[
  "arrayBuffer",
  "blob",
  "clone",
  "formData",
  "json",
  "text"
].forEach((k) => {
  Object.defineProperty(Response2.prototype, k, {
    value: function() {
      return this[getResponseCache]()[k]();
    }
  });
});
Object.setPrototypeOf(Response2, GlobalResponse);
Object.setPrototypeOf(Response2.prototype, GlobalResponse.prototype);
var stateKey = Reflect.ownKeys(new GlobalResponse()).find((k) => typeof k === "symbol" && k.toString() === "Symbol(state)");
if (!stateKey) {
  console.warn("Failed to find Response internal state key");
}
function getInternalBody(response) {
  if (!stateKey) {
    return;
  }
  if (response instanceof Response2) {
    response = response[getResponseCache]();
  }
  const state = response[stateKey];
  return state && state.body || void 0;
}
var X_ALREADY_SENT = "x-hono-already-sent";
var webFetch = global.fetch;
if (typeof global.crypto === "undefined") {
  global.crypto = crypto2;
}
global.fetch = (info, init) => {
  init = {
    // Disable compression handling so people can return the result of a fetch
    // directly in the loader without messing with the Content-Encoding header.
    compress: false,
    ...init
  };
  return webFetch(info, init);
};
var regBuffer = /^no$/i;
var regContentType = /^(application\/json\b|text\/(?!event-stream\b))/i;
var handleRequestError = () => new Response(null, {
  status: 400
});
var handleFetchError = (e2) => new Response(null, {
  status: e2 instanceof Error && (e2.name === "TimeoutError" || e2.constructor.name === "TimeoutError") ? 504 : 500
});
var handleResponseError = (e2, outgoing) => {
  const err = e2 instanceof Error ? e2 : new Error("unknown error", {
    cause: e2
  });
  if (err.code === "ERR_STREAM_PREMATURE_CLOSE") {
    console.info("The user aborted a request.");
  } else {
    console.error(e2);
    if (!outgoing.headersSent) {
      outgoing.writeHead(500, {
        "Content-Type": "text/plain"
      });
    }
    outgoing.end(`Error: ${err.message}`);
    outgoing.destroy(err);
  }
};
var responseViaCache = (res, outgoing) => {
  const [status, body, header] = res[cacheKey];
  if (typeof body === "string") {
    header["Content-Length"] = Buffer.byteLength(body);
    outgoing.writeHead(status, header);
    outgoing.end(body);
  } else {
    outgoing.writeHead(status, header);
    return writeFromReadableStream(body, outgoing)?.catch((e2) => handleResponseError(e2, outgoing));
  }
};
var responseViaResponseObject = async (res, outgoing, options = {}) => {
  if (res instanceof Promise) {
    if (options.errorHandler) {
      try {
        res = await res;
      } catch (err) {
        const errRes = await options.errorHandler(err);
        if (!errRes) {
          return;
        }
        res = errRes;
      }
    } else {
      res = await res.catch(handleFetchError);
    }
  }
  if (cacheKey in res) {
    return responseViaCache(res, outgoing);
  }
  const resHeaderRecord = buildOutgoingHttpHeaders(res.headers);
  const internalBody = getInternalBody(res);
  if (internalBody) {
    const { length, source, stream } = internalBody;
    if (source instanceof Uint8Array && source.byteLength !== length) {
    } else {
      if (length) {
        resHeaderRecord["content-length"] = length;
      }
      outgoing.writeHead(res.status, resHeaderRecord);
      if (typeof source === "string" || source instanceof Uint8Array) {
        outgoing.end(source);
      } else if (source instanceof Blob) {
        outgoing.end(new Uint8Array(await source.arrayBuffer()));
      } else {
        await writeFromReadableStream(stream, outgoing);
      }
      return;
    }
  }
  if (res.body) {
    const { "transfer-encoding": transferEncoding, "content-encoding": contentEncoding, "content-length": contentLength, "x-accel-buffering": accelBuffering, "content-type": contentType } = resHeaderRecord;
    if (transferEncoding || contentEncoding || contentLength || // nginx buffering variant
    accelBuffering && regBuffer.test(accelBuffering) || !regContentType.test(contentType)) {
      outgoing.writeHead(res.status, resHeaderRecord);
      await writeFromReadableStream(res.body, outgoing);
    } else {
      const buffer = await res.arrayBuffer();
      resHeaderRecord["content-length"] = buffer.byteLength;
      outgoing.writeHead(res.status, resHeaderRecord);
      outgoing.end(new Uint8Array(buffer));
    }
  } else if (resHeaderRecord[X_ALREADY_SENT]) {
  } else {
    outgoing.writeHead(res.status, resHeaderRecord);
    outgoing.end();
  }
};
var getRequestListener = (fetchCallback, options = {}) => {
  if (options.overrideGlobalObjects !== false && global.Request !== Request2) {
    Object.defineProperty(global, "Request", {
      value: Request2
    });
    Object.defineProperty(global, "Response", {
      value: Response2
    });
  }
  return async (incoming, outgoing) => {
    let res, req;
    try {
      req = newRequest(incoming, options.hostname);
      outgoing.on("close", () => {
        const abortController = req[abortControllerKey];
        if (!abortController) {
          return;
        }
        if (incoming.errored) {
          req[abortControllerKey].abort(incoming.errored.toString());
        } else if (!outgoing.writableFinished) {
          req[abortControllerKey].abort("Client connection prematurely closed.");
        }
      });
      res = fetchCallback(req, {
        incoming,
        outgoing
      });
      if (cacheKey in res) {
        return responseViaCache(res, outgoing);
      }
    } catch (e2) {
      if (!res) {
        if (options.errorHandler) {
          res = await options.errorHandler(req ? e2 : toRequestError(e2));
          if (!res) {
            return;
          }
        } else if (!req) {
          res = handleRequestError();
        } else {
          res = handleFetchError(e2);
        }
      } else {
        return handleResponseError(e2, outgoing);
      }
    }
    try {
      return await responseViaResponseObject(res, outgoing, options);
    } catch (e2) {
      return handleResponseError(e2, outgoing);
    }
  };
};
var createAdaptorServer = (options) => {
  const fetchCallback = options.fetch;
  const requestListener = getRequestListener(fetchCallback, {
    hostname: options.hostname,
    overrideGlobalObjects: options.overrideGlobalObjects
  });
  const createServer = options.createServer || createServerHTTP;
  const server = createServer(options.serverOptions || {}, requestListener);
  return server;
};
var serve = (options, listeningListener) => {
  const server = createAdaptorServer(options);
  server.listen(options?.port ?? 3e3, options.hostname, () => {
    const serverInfo = server.address();
    listeningListener && listeningListener(serverInfo);
  });
  return server;
};

// ../../../.cache/deno/npm/registry.npmjs.org/itty-router/5.0.18/cors.mjs
var e = (e2 = {}) => {
  const { origin: o = "*", credentials: s = false, allowMethods: c = "*", allowHeaders: r2, exposeHeaders: n, maxAge: t } = e2, a = (e3) => {
    const c2 = e3?.headers.get("origin");
    return true === o ? c2 : o instanceof RegExp ? o.test(c2) ? c2 : void 0 : Array.isArray(o) ? o.includes(c2) ? c2 : void 0 : o instanceof Function ? o(c2) : "*" == o && s ? c2 : o;
  }, l = (e3, o2) => {
    for (const [s2, c2] of Object.entries(o2)) c2 && e3.headers.append(s2, c2);
    return e3;
  };
  return {
    corsify: (e3, o2) => e3?.headers?.get("access-control-allow-origin") || 101 == e3.status ? e3 : l(e3.clone(), {
      "access-control-allow-origin": a(o2),
      "access-control-allow-credentials": s
    }),
    preflight: (e3) => {
      if ("OPTIONS" == e3.method) {
        const o2 = new Response(null, {
          status: 204
        });
        return l(o2, {
          "access-control-allow-origin": a(e3),
          "access-control-allow-methods": c?.join?.(",") ?? c,
          "access-control-expose-headers": n?.join?.(",") ?? n,
          "access-control-allow-headers": r2?.join?.(",") ?? r2 ?? e3.headers.get("access-control-request-headers"),
          "access-control-max-age": t,
          "access-control-allow-credentials": s
        });
      }
    }
  };
};

// ../../../.cache/deno/npm/registry.npmjs.org/itty-router/5.0.18/Router.mjs
var r = ({ base: r2 = "", routes: e2 = [], ...a } = {}) => ({
  __proto__: new Proxy({}, {
    get: (a2, t, o, c) => (a3, ...l) => e2.push([
      t.toUpperCase?.(),
      RegExp(`^${(c = (r2 + a3).replace(/\/+(\/|$)/g, "$1")).replace(/(\/?\.?):(\w+)\+/g, "($1(?<$2>*))").replace(/(\/?\.?):(\w+)/g, "($1(?<$2>[^$1/]+?))").replace(/\./g, "\\.").replace(/(\/?)\*/g, "($1.*)?")}/*$`),
      l,
      c
    ]) && o
  }),
  routes: e2,
  ...a,
  async fetch(r3, ...t) {
    let o, c, l = new URL(r3.url), p = r3.query = {
      __proto__: null
    };
    for (let [r4, e3] of l.searchParams) p[r4] = p[r4] ? [].concat(p[r4], e3) : e3;
    r: try {
      for (let e3 of a.before || []) if (null != (o = await e3(r3.proxy ?? r3, ...t))) break r;
      e: for (let [a2, p2, f, h] of e2) if ((a2 == r3.method || "ALL" == a2) && (c = l.pathname.match(p2))) {
        r3.params = c.groups || {}, r3.route = h;
        for (let e3 of f) if (null != (o = await e3(r3.proxy ?? r3, ...t))) break e;
      }
    } catch (e3) {
      if (!a.catch) throw e3;
      o = await a.catch(e3, r3.proxy ?? r3, ...t);
    }
    try {
      for (let e3 of a.finally || []) o = await e3(o, r3.proxy ?? r3, ...t) ?? o;
    } catch (e3) {
      if (!a.catch) throw e3;
      o = await a.catch(e3, r3.proxy ?? r3, ...t);
    }
    return o;
  }
});

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
    return {
      text: ""
    };
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
        {
          role: "user",
          parts: typeof content !== "string" ? content : [
            {
              text: content
            }
          ]
        }
      ];
    }
    const parts = content == null || typeof content === "string" ? [
      {
        text: content?.toString() ?? ""
      }
    ] : content.map((item) => {
      if (item.type === "text") return {
        text: item.text
      };
      if (item.type === "image_url") return parseBase64(item.image_url.url);
      return {
        text: "OK"
      };
    });
    return [
      {
        role: "user" === role ? "user" : "model",
        parts
      }
    ];
  });
  return result;
}
function genModel(req) {
  const model = GeminiModel.modelMapping(req.model);
  let functions = req.tools?.filter((it) => it.type === "function")?.map((it) => it.function) ?? [];
  functions = functions.concat((req.functions ?? []).map((it) => ({
    strict: null,
    ...it
  })));
  const [responseMimeType, responseSchema] = (() => {
    switch (req.response_format?.type) {
      case "json_object":
        return [
          "application/json",
          void 0
        ];
      case "json_schema":
        return [
          "application/json",
          req.response_format.json_schema.schema
        ];
      case "text":
        return [
          "text/plain",
          void 0
        ];
      default:
        return [
          void 0,
          void 0
        ];
    }
  })();
  const generateContentRequest = {
    contents: openAiMessageToGeminiMessage(req.messages),
    generationConfig: {
      maxOutputTokens: req.max_completion_tokens ?? void 0,
      temperature: req.temperature ?? void 0,
      topP: req.top_p ?? void 0,
      responseMimeType,
      responseSchema,
      thinkingConfig: !model.isThinkingModel() ? void 0 : {
        includeThoughts: true
      }
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
  return [
    model,
    generateContentRequest
  ];
}
var OAI_GEMINI_MAP_DEALFULT_MODEL = "gemma-3-4b-it";
var GeminiModel = class _GeminiModel {
  static modelMapping(model) {
    const modelName = ModelMapping[model ?? ""] ?? _GeminiModel.defaultModel(model ?? "");
    return new _GeminiModel(modelName);
  }
  model;
  constructor(model) {
    this.model = model;
  }
  isThinkingModel() {
    return this.model.includes("thinking");
  }
  apiVersion() {
    if (this.isThinkingModel()) {
      return "v1alpha";
    }
    return "v1beta";
  }
  toString() {
    return this.model;
  }
  static defaultModel(m) {
    if (m.startsWith("gemini") || m.startsWith("gemma")) {
      return m;
    }
    return OAI_GEMINI_MAP_DEALFULT_MODEL;
  }
};
var ModelMapping = {
  // Updated with latest models
  "gpt-3.5-turbo": "gemini-1.5-flash-8b-latest",
  "gpt-4o": "gemini-2.5-flash",
  "gpt-4o-mini": "gemini-1.5-flash-8b-latest",
  "gpt-4": "gemini-2.5-pro",
  "gpt-4-vision-preview": "gemini-2.5-flash",
  "gpt-4-turbo": "gemini-2.5-pro",
  "gpt-4-turbo-preview": "gemini-2.5-pro",
  "gpt-4.1-nano": "gemini-1.5-flash-8b-latest",
  "gpt-4.1-mini": "gemini-2.5-flash",
  "gpt-4.1": "gemini-2.5-pro",
  "gpt-5-nano": "gemini-1.5-flash-8b-latest",
  "gpt-5-mini": "gemini-2.5-flash",
  "gpt-5": "gemini-2.5-pro",
  // Embeddings remain good
  "text-embedding-3-small": "text-embedding-004",
  "text-embedding-3-large": "text-embedding-004",
  "text-embedding-ada-002": "text-embedding-004",
  // TTS mapping
  "tts-1": "fmtts"
};
function getRuntimeKey() {
  const global2 = globalThis;
  if (global2?.Deno !== void 0) {
    return "deno";
  }
  if (global2?.Bun !== void 0) {
    return "bun";
  }
  if (typeof global2?.WebSocketPair === "function") {
    return "workerd";
  }
  if (typeof global2?.EdgeRuntime === "string") {
    return "edge-light";
  }
  if (global2?.fastly !== void 0) {
    return "fastly";
  }
  if (global2?.process?.release?.name === "node") {
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

// src/log.ts
var LEVEL = [
  "debug",
  "info",
  "warn",
  "error"
];
var Logger = class {
  config;
  debug;
  info;
  warn;
  error;
  constructor(prefix, logLevel) {
    const level = LEVEL.find((it) => it === logLevel) ?? "warn";
    this.config = {
      prefix: prefix ?? "",
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

// src/openai/audio/speech/utils.ts
async function hmacSha256(key, data) {
  const cryptoKey = await crypto.subtle.importKey("raw", key, {
    name: "HMAC",
    hash: {
      name: "SHA-256"
    }
  }, false, [
    "sign"
  ]);
  const signature = await crypto.subtle.sign("HMAC", cryptoKey, new TextEncoder().encode(data));
  return new Uint8Array(signature);
}
async function base64ToBytes(base64) {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}
async function bytesToBase64(bytes) {
  return btoa(String.fromCharCode.apply(null, Array.from(bytes)));
}
function uuid() {
  return crypto.randomUUID().replace(/-/g, "");
}
async function sign(urlStr) {
  const url = urlStr.split("://")[1];
  const encodedUrl = encodeURIComponent(url);
  const uuidStr = uuid();
  const formattedDate = dateFormat();
  const bytesToSign = `MSTranslatorAndroidApp${encodedUrl}${formattedDate}${uuidStr}`.toLowerCase();
  const decode = await base64ToBytes("oik6PdDdMnOXemTbwvMn9de/h9lFnfBaCWbGMMZqqoSaQaqUOqjVGm5NqsmjcBI1x+sS9ugjB55HEJWRiFXYFw==");
  const signData = await hmacSha256(decode, bytesToSign);
  const signBase64 = await bytesToBase64(signData);
  return `MSTranslatorAndroidApp::${signBase64}::${formattedDate}::${uuidStr}`;
}
function dateFormat() {
  const formattedDate = (/* @__PURE__ */ new Date()).toUTCString().replace(/GMT/, "").trim() + " GMT";
  return formattedDate.toLowerCase();
}
function splitAndMerge(str, chunkSize, determin) {
  const sentences = str.split(determin);
  const result = [];
  let currentChunk = [];
  let currentLength = 0;
  for (const sentence of sentences) {
    if (currentLength + sentence.length + (currentChunk.length > 0 ? 1 : 0) <= chunkSize) {
      currentChunk.push(sentence);
      currentLength += sentence.length + (currentChunk.length > 1 ? 1 : 0);
    } else {
      if (currentChunk.length > 0) {
        result.push(currentChunk.join(" "));
      }
      currentChunk = [
        sentence
      ];
      currentLength = sentence.length;
    }
  }
  if (currentChunk.length > 0) {
    result.push(currentChunk.join(" "));
  }
  return result;
}
function makeCORSHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, x-api-key",
    "Access-Control-Max-Age": "86400"
  };
}

// src/openai/audio/speech/EdgeProxyHandler.ts
var DEFAULT_AUDIO_FORMAT = "audio-24khz-48kbitrate-mono-mp3";
var Edge_TTS_VOICE_URL = "https://speech.platform.bing.com/consumer/speech/synthesize/readaloud/voices/list?trustedclienttoken=6A5AA1D4EAFF4E9FB37E23D68491D6F4";
var VOICE_LIST = [];
var TOKEN_REFRESH_BEFORE_EXPIRY = 3 * 60;
var tokenInfo = {
  endpoint: null,
  token: null,
  expiredAt: null
};
var Edge_TTS_ENDPOINT_URL = "";
var EDGE_ENDPONT2 = null;
async function getVoice() {
  const EDGE_ENDPONT = await getEndpoint();
  const response = await fetch(Edge_TTS_VOICE_URL, {
    method: "GET",
    headers: {
      Authorization: EDGE_ENDPONT?.t ?? "",
      "Content-Type": "application/ssml+xml",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0",
      "X-Microsoft-OutputFormat": DEFAULT_AUDIO_FORMAT
    }
  });
  const data = await response.json();
  VOICE_LIST = data.map((v) => v["ShortName"]);
  const VOICE_LIST_en = VOICE_LIST.filter((x) => x.startsWith("en"));
  const VOICE_LIST_zh = VOICE_LIST.filter((x) => x.startsWith("zh"));
  const VOICE_LIST_ja = VOICE_LIST.filter((x) => x.startsWith("ja"));
  VOICE_LIST = VOICE_LIST_en.concat(VOICE_LIST_zh.concat(VOICE_LIST_ja));
  console.error(VOICE_LIST);
}
async function getEndpoint() {
  if (EDGE_ENDPONT2) {
    return EDGE_ENDPONT2;
  }
  EDGE_ENDPONT2 = await getEndpoint2();
  return EDGE_ENDPONT2;
}
async function getEndpoint2() {
  const now = Date.now() / 1e3;
  if (tokenInfo.token && tokenInfo.expiredAt && now < tokenInfo.expiredAt - TOKEN_REFRESH_BEFORE_EXPIRY) {
    return tokenInfo.endpoint;
  }
  const endpointUrl = "https://dev.microsofttranslator.com/apps/endpoint?api-version=1.0";
  const clientId = crypto.randomUUID().replace(/-/g, "");
  try {
    const response = await fetch(endpointUrl, {
      method: "POST",
      headers: {
        "Accept-Language": "zh-Hans",
        "X-ClientVersion": "4.0.530a 5fe1dc6c",
        "X-UserId": "0f04d16a175c411e",
        "X-HomeGeographicRegion": "zh-Hans-CN",
        "X-ClientTraceId": clientId,
        "X-MT-Signature": await sign(endpointUrl),
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0",
        "Content-Type": "application/json; charset=utf-8",
        "Content-Length": "0",
        "Accept-Encoding": "gzip"
      }
    });
    if (!response.ok) {
      throw new Error(`\u83B7\u53D6endpoint\u5931\u8D25: ${response.status}`);
    }
    const data = await response.json();
    const jwt = data.t.split(".")[1];
    const decodedJwt = JSON.parse(atob(jwt));
    tokenInfo = {
      endpoint: data,
      token: data.t,
      expiredAt: decodedJwt.exp
    };
    return data;
  } catch (error) {
    console.error("\u83B7\u53D6endpoint\u5931\u8D25:", error);
    if (tokenInfo.token) {
      console.log("\u4F7F\u7528\u8FC7\u671F\u7684\u7F13\u5B58token");
      return tokenInfo.endpoint;
    }
    throw error;
  }
}
function getSsml(text, voiceName, rate, pitch, volume, style, slien = 0) {
  let slien_str = "";
  if (slien > 0) {
    slien_str = `<break time="${slien}ms" />`;
  }
  return `<speak xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="http://www.w3.org/2001/mstts" version="1.0" xml:lang="zh-CN"> 
                <voice name="${voiceName}"> 
                    <mstts:express-as style="${style}"  styledegree="2.0" role="default" > 
                        <prosody rate="${rate}" pitch="${pitch}" volume="${volume}">${text}</prosody> 
                    </mstts:express-as> 
                    ${slien_str}
                </voice> 
            </speak>`;
}
async function EdgeProxyDownloader(formData) {
  const EDGE_ENDPONT = await getEndpoint();
  try {
    const response = await fetch(Edge_TTS_ENDPOINT_URL, {
      method: "POST",
      headers: {
        Authorization: EDGE_ENDPONT?.t ?? "",
        "Content-Type": "application/ssml+xml",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0",
        "X-Microsoft-OutputFormat": DEFAULT_AUDIO_FORMAT
      },
      body: getSsml(formData.text, formData.voiceName, formData.rate, formData.pitch, formData.volume, formData.style, formData.slien)
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.error("TTS API Error:", {
        status: response.status,
        statusText: response.statusText,
        body: errorText,
        headers: Object.fromEntries(response.headers.entries())
      });
      console.error("TTS formData:", formData);
      console.error("TTS DEFAULT_AUDIO_FORMAT:", DEFAULT_AUDIO_FORMAT);
      return new Response(JSON.stringify({
        error: `TTS API error: ${response.status} ${response.statusText}`,
        details: errorText
      }), {
        status: response.status,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    return new Response(response.body, {
      status: 200,
      headers: {
        "Content-Type": response.headers.get("Content-Type") || "audio/mpeg",
        "Content-Length": response.headers.get("Content-Length") || ""
      }
    });
  } catch (error) {
    console.error("TTS Handler Error:", error);
    return new Response(JSON.stringify({
      error: "Internal server error",
      message: error instanceof Error ? error.message : "Unknown error"
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}
async function EdgeProxyHandler(req) {
  const EDGE_ENDPONT = await getEndpoint();
  Edge_TTS_ENDPOINT_URL = `https://${EDGE_ENDPONT?.r}.tts.speech.microsoft.com/cognitiveservices/v1`;
  if (VOICE_LIST.length === 0) {
    await getVoice();
  }
  const maxChunkSize = 4096;
  const chunks = splitAndMerge(req.input.trim(), maxChunkSize, "\n");
  const audioChunks = [];
  while (chunks.length > 0) {
    try {
      let voice = req.voice;
      if (!VOICE_LIST.includes(voice)) {
        voice = VOICE_LIST[0];
      }
      const formData = {
        text: chunks.shift(),
        voiceName: voice,
        rate: "+0%",
        pitch: "+0Hz",
        volume: "+0%",
        style: `general`,
        slien: 0
      };
      const audio_chunk = await (await EdgeProxyDownloader(formData)).blob();
      audioChunks.push(audio_chunk);
    } catch (error) {
      console.error("TTS Handler Error:", error);
      return new Response(JSON.stringify({
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error"
      }), {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
  }
  const concatenatedAudio = new Blob(audioChunks, {
    type: "audio/mpeg"
  });
  const response = new Response(concatenatedAudio, {
    headers: {
      "Content-Type": "audio/mpeg",
      ...makeCORSHeaders()
    }
  });
  return response;
}

// src/openai/audio/speech/OaiProxyHandler.ts
var OAI_TTS_ENDPOINT_URL = "https://www.openai.fm/api/generate";
var DEFAULT_AUDIO_FORMAT2 = "mp3";
var VOICE_LIST2 = [
  "alloy",
  "ash",
  "ballad",
  "coral",
  "echo",
  "fable",
  "nova",
  "onyx",
  "sage",
  "shimmer"
];
var DEFAULT_PROMPT = `Voice Affect: Calm, composed, and reassuring; project quiet authority and confidence, BBC reporter host accent.
Tone: Sincere, empathetic, and gently authoritative\u2014express genuine apology while conveying competence.
Pacing: Steady and moderate; unhurried enough to communicate care, yet efficient enough to demonstrate professionalism.
Emotion: Genuine empathy and understanding; speak with warmth, especially during apologies ("I'm very sorry for any disruption...").
Pronunciation: Clear and precise, emphasizing key reassurances ("smoothly," "quickly," "promptly") to reinforce confidence.
Pauses: Brief pauses after offering assistance or requesting details, highlighting willingness to listen and support.`;
async function OaiProxyDownloader(formData) {
  try {
    const response = await fetch(OAI_TTS_ENDPOINT_URL, {
      method: "POST",
      headers: {
        // "X-ClientVersion": "4.0.530a 5fe1dc6c",
        // "X-UserId": "0f04d16a175c411e",
        // "X-ClientTraceId": ClientId,
        // "X-MT-Signature": Signature,
        // "X-HomeGeographicRegion": "en-US",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0",
        // KEY CHANGE: Use form content type instead of JSON
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "audio/*",
        "Accept-Encoding": "gzip, deflate, br"
      },
      // KEY CHANGE: Send form data as string, not JSON
      body: formData.toString()
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.error("TTS API Error:", {
        status: response.status,
        statusText: response.statusText,
        body: errorText,
        headers: Object.fromEntries(response.headers.entries())
      });
      console.error("TTS formData:", formData);
      return new Response(JSON.stringify({
        error: `TTS API error: ${response.status} ${response.statusText}`,
        details: errorText
      }), {
        status: response.status,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    return new Response(response.body, {
      status: 200,
      headers: {
        "Content-Type": response.headers.get("Content-Type") || "audio/mpeg",
        "Content-Length": response.headers.get("Content-Length") || ""
      }
    });
  } catch (error) {
    console.error("TTS Handler Error:", error);
    return new Response(JSON.stringify({
      error: "Internal server error",
      message: error instanceof Error ? error.message : "Unknown error"
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}
async function OaiProxyHandler(req) {
  const maxChunkSize = 4096;
  const chunks = splitAndMerge(req.input.trim(), maxChunkSize, "\n");
  const audioChunks = [];
  while (chunks.length > 0) {
    try {
      const generation = crypto.randomUUID().toString();
      let voice = req.voice;
      if (!VOICE_LIST2.includes(voice)) {
        voice = VOICE_LIST2[0];
      }
      const formData = new URLSearchParams({
        input: chunks.shift(),
        voice,
        generation,
        response_format: req.response_format ?? DEFAULT_AUDIO_FORMAT2,
        prompt: req.instructions ?? DEFAULT_PROMPT
      });
      const audio_chunk = await (await OaiProxyDownloader(formData)).blob();
      audioChunks.push(audio_chunk);
    } catch (error) {
      console.error("TTS Handler Error:", error);
      return new Response(JSON.stringify({
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error"
      }), {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
  }
  const concatenatedAudio = new Blob(audioChunks, {
    type: "audio/mpeg"
  });
  const response = new Response(concatenatedAudio, {
    headers: {
      "Content-Type": "audio/mpeg",
      ...makeCORSHeaders()
    }
  });
  return response;
}

// src/openai/audio/speech/TTSProxyHandler.ts
async function ttsProxyHandler(rawReq) {
  const req = await rawReq.json();
  const headers = rawReq.headers;
  const apiParam = getToken(headers);
  if (apiParam == null) {
    return new Response("Unauthorized", {
      status: 401
    });
  }
  if (req.model === "tts-1") {
    return OaiProxyHandler(req);
  }
  return EdgeProxyHandler(req);
}

// ../../../.cache/deno/npm/registry.npmjs.org/eventsource-parser/3.0.1/dist/index.js
var ParseError = class extends Error {
  constructor(message, options) {
    super(message), this.name = "ParseError", this.type = options.type, this.field = options.field, this.value = options.value, this.line = options.line;
  }
};
function noop(_arg) {
}
function createParser(callbacks) {
  if (typeof callbacks == "function") throw new TypeError("`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?");
  const { onEvent = noop, onError = noop, onRetry = noop, onComment } = callbacks;
  let incompleteLine = "", isFirstChunk = true, id, data = "", eventType = "";
  function feed(newChunk) {
    const chunk = isFirstChunk ? newChunk.replace(/^\xEF\xBB\xBF/, "") : newChunk, [complete, incomplete] = splitLines(`${incompleteLine}${chunk}`);
    for (const line of complete) parseLine(line);
    incompleteLine = incomplete, isFirstChunk = false;
  }
  function parseLine(line) {
    if (line === "") {
      dispatchEvent();
      return;
    }
    if (line.startsWith(":")) {
      onComment && onComment(line.slice(line.startsWith(": ") ? 2 : 1));
      return;
    }
    const fieldSeparatorIndex = line.indexOf(":");
    if (fieldSeparatorIndex !== -1) {
      const field = line.slice(0, fieldSeparatorIndex), offset = line[fieldSeparatorIndex + 1] === " " ? 2 : 1, value = line.slice(fieldSeparatorIndex + offset);
      processField(field, value, line);
      return;
    }
    processField(line, "", line);
  }
  function processField(field, value, line) {
    switch (field) {
      case "event":
        eventType = value;
        break;
      case "data":
        data = `${data}${value}
`;
        break;
      case "id":
        id = value.includes("\0") ? void 0 : value;
        break;
      case "retry":
        /^\d+$/.test(value) ? onRetry(parseInt(value, 10)) : onError(new ParseError(`Invalid \`retry\` value: "${value}"`, {
          type: "invalid-retry",
          value,
          line
        }));
        break;
      default:
        onError(new ParseError(`Unknown field "${field.length > 20 ? `${field.slice(0, 20)}\u2026` : field}"`, {
          type: "unknown-field",
          field,
          value,
          line
        }));
        break;
    }
  }
  function dispatchEvent() {
    data.length > 0 && onEvent({
      id,
      event: eventType || void 0,
      // If the data buffer's last character is a U+000A LINE FEED (LF) character,
      // then remove the last character from the data buffer.
      data: data.endsWith(`
`) ? data.slice(0, -1) : data
    }), id = void 0, data = "", eventType = "";
  }
  function reset(options = {}) {
    incompleteLine && options.consume && parseLine(incompleteLine), isFirstChunk = true, id = void 0, data = "", eventType = "", incompleteLine = "";
  }
  return {
    feed,
    reset
  };
}
function splitLines(chunk) {
  const lines = [];
  let incompleteLine = "", searchIndex = 0;
  for (; searchIndex < chunk.length; ) {
    const crIndex = chunk.indexOf("\r", searchIndex), lfIndex = chunk.indexOf(`
`, searchIndex);
    let lineEnd = -1;
    if (crIndex !== -1 && lfIndex !== -1 ? lineEnd = Math.min(crIndex, lfIndex) : crIndex !== -1 ? lineEnd = crIndex : lfIndex !== -1 && (lineEnd = lfIndex), lineEnd === -1) {
      incompleteLine = chunk.slice(searchIndex);
      break;
    } else {
      const line = chunk.slice(searchIndex, lineEnd);
      lines.push(line), searchIndex = lineEnd + 1, chunk[searchIndex - 1] === "\r" && chunk[searchIndex] === `
` && searchIndex++;
    }
  }
  return [
    lines,
    incompleteLine
  ];
}

// ../../../.cache/deno/npm/registry.npmjs.org/eventsource-parser/3.0.1/dist/stream.js
var EventSourceParserStream = class extends TransformStream {
  constructor({ onError, onRetry, onComment } = {}) {
    let parser;
    super({
      start(controller) {
        parser = createParser({
          onEvent: (event) => {
            controller.enqueue(event);
          },
          onError(error) {
            onError === "terminate" ? controller.error(error) : typeof onError == "function" && onError(error);
          },
          onRetry,
          onComment
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
  response;
  constructor(message, response) {
    super(message);
    this.response = response;
  }
};

// src/gemini-api-client/gemini-api-client.ts
async function listModels(apiParam) {
  const url = new URL(`${BASE_URL}/v1beta/openai/models`);
  const resp = await makeRequest(url, void 0, void 0, "GET", {
    Authorization: `Bearer ${apiParam?.apikey ?? ""}`
  });
  return await resp.json();
}
async function* streamGenerateContent(apiParam, model, params, requestOptions) {
  const response = await makeRequest(toURL({
    model,
    task: "streamGenerateContent",
    stream: true,
    apiParam
  }), JSON.stringify(params), requestOptions);
  const body = response.body;
  if (body == null) {
    return;
  }
  for await (const event of body.pipeThrough(new TextDecoderStream()).pipeThrough(new EventSourceParserStream())) {
    const responseJson = JSON.parse(event.data);
    yield responseJson;
  }
}
async function batchEmbedContents(apiParam, model, params, requestOptions) {
  const response = await makeRequest(toURL({
    model,
    task: "batchEmbedContents",
    stream: false,
    apiParam
  }), JSON.stringify(params), requestOptions);
  const responseJson = await response.json();
  return responseJson;
}
async function makeRequest(url, body, requestOptions, requestMethod = "POST", headers = {}) {
  let response;
  try {
    response = await fetch(url, {
      ...buildFetchOptions(requestOptions),
      method: requestMethod,
      headers: {
        "Content-Type": "application/json",
        ...headers
      },
      body
    });
    if (!response.ok) {
      let message = "";
      try {
        const errResp = await response.json();
        message = errResp.error?.message;
        if (errResp?.error?.details) {
          message += ` ${JSON.stringify(errResp.error.details)}`;
        }
      } catch (_e) {
      }
      throw new Error(`[${response.status} ${response.statusText}] ${message}`);
    }
  } catch (e2) {
    console.log(e2);
    const err = new GoogleGenerativeAIError(`Error fetching from google -> ${e2.message}`);
    err.stack = e2.stack;
    throw err;
  }
  return response;
}
var BASE_URL = "https://generativelanguage.googleapis.com";
function toURL({ model, task, stream, apiParam }) {
  const api_version = model.apiVersion();
  const url = new URL(`${BASE_URL}/${api_version}/models/${model}:${task}`);
  url.searchParams.append("key", apiParam.apikey);
  if (stream) {
    url.searchParams.append("alt", "sse");
  }
  return url;
}
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

// src/gemini-api-client/response-helper.ts
function resultHelper(response) {
  if (response.candidates && response.candidates.length > 0) {
    if (response.candidates.length > 1) {
      console.warn(`This response had ${response.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`);
    }
    if (hadBadFinishReason(response.candidates[0])) {
      throw new GoogleGenerativeAIResponseError(`${formatBlockErrorMessage(response)}`, response);
    }
    return getText(response);
  }
  if (response.promptFeedback) {
    throw new GoogleGenerativeAIResponseError(`Text not available. ${formatBlockErrorMessage(response)}`, response);
  }
  return "";
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
var badFinishReasons = [
  "RECITATION",
  "SAFETY"
];
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

// src/openai/chat/completions/NonStreamingChatProxyHandler.ts
async function nonStreamingChatProxyHandler(req, apiParam, log) {
  const [model, geminiReq] = genModel(req);
  let geminiResp = "";
  try {
    for await (const it of streamGenerateContent(apiParam, model, geminiReq)) {
      const data = resultHelper(it);
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
        model: model.model,
        choices: [
          {
            message: {
              role: "assistant",
              content,
              refusal: null
            },
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
      model: model.model,
      choices: [
        {
          message: {
            role: "assistant",
            refusal: null,
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
  return Response.json(genOpenAiResp(geminiResp));
}

// src/openai/chat/completions/StreamingChatProxyHandler.ts
function streamingChatProxyHandler(req, apiParam, log) {
  const [model, geminiReq] = genModel(req);
  log?.debug("streamGenerateContent request", req);
  return sseResponse(async function* () {
    try {
      for await (const it of streamGenerateContent(apiParam, model, geminiReq)) {
        log?.debug("streamGenerateContent resp", it);
        const data = resultHelper(it);
        yield genStreamResp({
          model: model.model,
          content: data,
          stop: false
        });
      }
    } catch (error) {
      yield genStreamResp({
        model: model.model,
        content: error?.message ?? error.toString(),
        stop: true
      });
    }
    yield genStreamResp({
      model: model.model,
      content: "",
      stop: true
    });
    yield "[DONE]";
    return void 0;
  }());
}
function genStreamResp({ model, content, stop }) {
  if (typeof content === "string") {
    return {
      id: "chatcmpl-abc123",
      object: "chat.completion.chunk",
      created: Math.floor(Date.now() / 1e3),
      model,
      choices: [
        {
          delta: {
            role: "assistant",
            content
          },
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
    model,
    choices: [
      {
        delta: {
          role: "assistant",
          function_call: content
        },
        finish_reason: stop ? "function_call" : null,
        index: 0
      }
    ]
  };
}
var encoder = new TextEncoder();
function sseResponse(dataStream) {
  const s = new ReadableStream({
    async pull(controller) {
      const { value, done } = await dataStream.next();
      if (done) {
        controller.close();
      } else {
        const data = typeof value === "string" ? value : JSON.stringify(value);
        controller.enqueue(encoder.encode(toSseMsg({
          data
        })));
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
function toSseMsg({ event, data, id }) {
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

// src/openai/chat/completions/ChatProxyHandler.ts
async function chatProxyHandler(rawReq) {
  const req = await rawReq.json();
  const headers = rawReq.headers;
  const apiParam = getToken(headers);
  if (apiParam == null) {
    return new Response("Unauthorized", {
      status: 401
    });
  }
  if (req.stream !== true) {
    return await nonStreamingChatProxyHandler(req, apiParam, rawReq.logger);
  }
  return streamingChatProxyHandler(req, apiParam, rawReq.logger);
}

// src/openai/embeddingProxyHandler.ts
var GEMINI_EMBEDDING_MODEL = "text-embedding-004";
var BATCH_SIZE = 100;
async function embeddingProxyHandler(rawReq) {
  const req = await rawReq.json();
  const log = rawReq.logger;
  const headers = rawReq.headers;
  const apiParam = getToken(headers);
  if (apiParam == null) {
    return new Response("Unauthorized", {
      status: 401
    });
  }
  const inputs = [
    req.input
  ].flat().map((it) => it.toString());
  const allEmbeddings = [];
  const modelIdentifier = `models/${GEMINI_EMBEDDING_MODEL}`;
  try {
    for (let i = 0; i < inputs.length; i += BATCH_SIZE) {
      const batchInputs = inputs.slice(i, i + BATCH_SIZE);
      log?.warn(`Processing batch of ${batchInputs.length} inputs... (starting at index ${i})`);
      const batchRequest = {
        // The `requests` field is an array of individual embedding requests
        requests: batchInputs.map((text) => ({
          model: modelIdentifier,
          content: {
            parts: [
              {
                text
              }
            ]
          }
        }))
      };
      const response = await batchEmbedContents(apiParam, new GeminiModel(GEMINI_EMBEDDING_MODEL), batchRequest);
      if (response.embeddings) {
        const embeddingsForBatch = response.embeddings.map((emb) => emb.values);
        allEmbeddings.push(...embeddingsForBatch);
      }
    }
    const responseData = allEmbeddings.map((embedding, index) => ({
      object: "embedding",
      index,
      embedding
    }));
    const finalResponse = {
      object: "list",
      data: responseData,
      model: req.model,
      usage: {
        prompt_tokens: 0,
        total_tokens: 0
      }
    };
    return Response.json(finalResponse);
  } catch (err) {
    log?.error("Request failed:", req);
    log?.error("Error details:", err?.message ?? err.toString());
    return new Response(JSON.stringify({
      error: {
        message: err.message
      }
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}

// src/openai/models.ts
var modelData = Object.keys(ModelMapping).map((model) => ({
  created: 1677610602,
  object: "model",
  owned_by: "openai",
  id: model
}));
var models = async (req) => {
  const apiParam = getToken(req.headers);
  const gemini_models = await listModels(apiParam);
  const model_list = gemini_models["data"];
  const finala_model_list = model_list.concat(modelData);
  return {
    object: "list",
    data: distinctArrayByKey(finala_model_list, (item) => item.id)
  };
};
function distinctArrayByKey(arr, keySelector) {
  const seen = /* @__PURE__ */ new Set();
  return arr.filter((item) => {
    const value = keySelector(item);
    if (seen.has(value)) {
      return false;
    }
    seen.add(value);
    return true;
  });
}
var modelDetail = (model) => {
  return modelData.find((it) => it.id === model);
};

// src/app.ts
var { preflight, corsify } = e({
  allowHeaders: "*"
});
var app = r({
  before: [
    preflight,
    (req) => {
      req.logger = new Logger(crypto.randomUUID().toString());
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
app.post("/v1/audio/speech", ttsProxyHandler);
app.post("/v1/embeddings", embeddingProxyHandler);
app.get("/v1/models", async (req) => Response.json(await models(req)));
app.get("/v1/models/:model", (c) => Response.json(modelDetail(c.params.model)));
app.post("/:model_version/models/:model_and_action", geminiProxy);
app.all("*", () => new Response("Page Not Found", {
  status: 404
}));

// main_node.ts
console.log("Listening on http://localhost:8000/");
serve({
  fetch: app.fetch,
  port: 8e3
});
//# sourceMappingURL=main_node.mjs.map
