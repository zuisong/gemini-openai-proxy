// node_modules/.deno/@hono+node-server@1.11.1/node_modules/@hono/node-server/dist/index.mjs
import { createServer as createServerHTTP } from "http";
import { Http2ServerRequest } from "http2";
import { Readable } from "stream";
import crypto2 from "crypto";
var RequestError = class extends Error {
  static name = "RequestError";
  constructor(message, options) {
    super(message, options);
  }
};
var toRequestError = (e) => {
  if (e instanceof RequestError) {
    return e;
  }
  return new RequestError(e.message, { cause: e });
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
      headerRecord.push([key, value]);
    }
  }
  const init = {
    method,
    headers: headerRecord,
    signal: abortController.signal
  };
  if (!(method === "GET" || method === "HEAD")) {
    init.body = Readable.toWeb(incoming);
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
    return this[requestCache] ||= newRequestFromIncoming(
      this.method,
      this[urlKey],
      this[incomingKey],
      this[abortControllerKey]
    );
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
["arrayBuffer", "blob", "clone", "formData", "json", "text"].forEach((k) => {
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
  const host = (incoming instanceof Http2ServerRequest ? incoming.authority : incoming.headers.host) || defaultHostname;
  if (!host) {
    throw new RequestError("Missing host header");
  }
  const url = new URL(
    `${incoming instanceof Http2ServerRequest || incoming.socket && incoming.socket.encrypted ? "https" : "http"}://${host}${incoming.url}`
  );
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
    } catch (e) {
      cancel(e);
    }
  }
}
var buildOutgoingHttpHeaders = (headers) => {
  const res = {};
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
      let headers = init?.headers || { "content-type": "text/plain; charset=UTF-8" };
      if (headers instanceof Headers) {
        headers = buildOutgoingHttpHeaders(headers);
      }
      ;
      this[cacheKey] = [init?.status || 200, body, headers];
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
["arrayBuffer", "blob", "clone", "formData", "json", "text"].forEach((k) => {
  Object.defineProperty(Response2.prototype, k, {
    value: function() {
      return this[getResponseCache]()[k]();
    }
  });
});
Object.setPrototypeOf(Response2, GlobalResponse);
Object.setPrototypeOf(Response2.prototype, GlobalResponse.prototype);
var stateKey = Reflect.ownKeys(new GlobalResponse()).find(
  (k) => typeof k === "symbol" && k.toString() === "Symbol(state)"
);
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
var handleFetchError = (e) => new Response(null, {
  status: e instanceof Error && (e.name === "TimeoutError" || e.constructor.name === "TimeoutError") ? 504 : 500
});
var handleResponseError = (e, outgoing) => {
  const err = e instanceof Error ? e : new Error("unknown error", { cause: e });
  if (err.code === "ERR_STREAM_PREMATURE_CLOSE") {
    console.info("The user aborted a request.");
  } else {
    console.error(e);
    if (!outgoing.headersSent) {
      outgoing.writeHead(500, { "Content-Type": "text/plain" });
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
    return writeFromReadableStream(body, outgoing)?.catch(
      (e) => handleResponseError(e, outgoing)
    );
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
    if (internalBody.length) {
      resHeaderRecord["content-length"] = internalBody.length;
    }
    outgoing.writeHead(res.status, resHeaderRecord);
    if (typeof internalBody.source === "string" || internalBody.source instanceof Uint8Array) {
      outgoing.end(internalBody.source);
    } else if (internalBody.source instanceof Blob) {
      outgoing.end(new Uint8Array(await internalBody.source.arrayBuffer()));
    } else {
      await writeFromReadableStream(internalBody.stream, outgoing);
    }
  } else if (res.body) {
    const {
      "transfer-encoding": transferEncoding,
      "content-encoding": contentEncoding,
      "content-length": contentLength,
      "x-accel-buffering": accelBuffering,
      "content-type": contentType
    } = resHeaderRecord;
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
        if (incoming.destroyed) {
          req[getAbortController]().abort();
        }
      });
      res = fetchCallback(req, { incoming, outgoing });
      if (cacheKey in res) {
        return responseViaCache(res, outgoing);
      }
    } catch (e) {
      if (!res) {
        if (options.errorHandler) {
          res = await options.errorHandler(req ? e : toRequestError(e));
          if (!res) {
            return;
          }
        } else if (!req) {
          res = handleRequestError();
        } else {
          res = handleFetchError(e);
        }
      } else {
        return handleResponseError(e, outgoing);
      }
    }
    try {
      return responseViaResponseObject(res, outgoing, options);
    } catch (e) {
      return handleResponseError(e, outgoing);
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
  server.listen(options?.port ?? 3e3, options.hostname ?? "0.0.0.0", () => {
    const serverInfo = server.address();
    listeningListener && listeningListener(serverInfo);
  });
  return server;
};

// node_modules/.deno/itty-router@5.0.17/node_modules/itty-router/index.mjs
var t = ({ base: e = "", routes: t2 = [], ...r2 } = {}) => ({ __proto__: new Proxy({}, { get: (r3, o2, a2, s2) => (r4, ...c) => t2.push([o2.toUpperCase?.(), RegExp(`^${(s2 = (e + r4).replace(/\/+(\/|$)/g, "$1")).replace(/(\/?\.?):(\w+)\+/g, "($1(?<$2>*))").replace(/(\/?\.?):(\w+)/g, "($1(?<$2>[^$1/]+?))").replace(/\./g, "\\.").replace(/(\/?)\*/g, "($1.*)?")}/*$`), c, s2]) && a2 }), routes: t2, ...r2, async fetch(e2, ...o2) {
  let a2, s2, c = new URL(e2.url), n = e2.query = { __proto__: null };
  for (let [e3, t3] of c.searchParams) n[e3] = n[e3] ? [].concat(n[e3], t3) : t3;
  e: try {
    for (let t3 of r2.before || []) if (null != (a2 = await t3(e2.proxy ?? e2, ...o2))) break e;
    t: for (let [r3, n2, l, i] of t2) if ((r3 == e2.method || "ALL" == r3) && (s2 = c.pathname.match(n2))) {
      e2.params = s2.groups || {}, e2.route = i;
      for (let t3 of l) if (null != (a2 = await t3(e2.proxy ?? e2, ...o2))) break t;
    }
  } catch (t3) {
    if (!r2.catch) throw t3;
    a2 = await r2.catch(t3, e2.proxy ?? e2, ...o2);
  }
  try {
    for (let t3 of r2.finally || []) a2 = await t3(a2, e2.proxy ?? e2, ...o2) ?? a2;
  } catch (t3) {
    if (!r2.catch) throw t3;
    a2 = await r2.catch(t3, e2.proxy ?? e2, ...o2);
  }
  return a2;
} });
var r = (e = "text/plain; charset=utf-8", t2) => (r2, o2 = {}) => {
  if (void 0 === r2 || r2 instanceof Response) return r2;
  const a2 = new Response(t2?.(r2) ?? r2, o2.url ? void 0 : o2);
  return a2.headers.set("content-type", e), a2;
};
var o = r("application/json; charset=utf-8", JSON.stringify);
var a = (e) => ({ 400: "Bad Request", 401: "Unauthorized", 403: "Forbidden", 404: "Not Found", 500: "Internal Server Error" })[e] || "Unknown Error";
var s = (e = 500, t2) => {
  if (e instanceof Error) {
    const { message: r2, ...o2 } = e;
    e = e.status || 500, t2 = { error: r2 || a(e), ...o2 };
  }
  return t2 = { status: e, ..."object" == typeof t2 ? t2 : { error: t2 || a(e) } }, o(t2, { status: e });
};
var p = r("text/plain; charset=utf-8", String);
var f = r("text/html");
var u = r("image/jpeg");
var h = r("image/png");
var g = r("image/webp");
var y = (e = {}) => {
  const { origin: t2 = "*", credentials: r2 = false, allowMethods: o2 = "*", allowHeaders: a2, exposeHeaders: s2, maxAge: c } = e, n = (e2) => {
    const o3 = e2?.headers.get("origin");
    return true === t2 ? o3 : t2 instanceof RegExp ? t2.test(o3) ? o3 : void 0 : Array.isArray(t2) ? t2.includes(o3) ? o3 : void 0 : t2 instanceof Function ? t2(o3) : "*" == t2 && r2 ? o3 : t2;
  }, l = (e2, t3) => {
    for (const [r3, o3] of Object.entries(t3)) o3 && e2.headers.append(r3, o3);
    return e2;
  };
  return { corsify: (e2, t3) => e2?.headers?.get("access-control-allow-origin") || 101 == e2.status ? e2 : l(e2.clone(), { "access-control-allow-origin": n(t3), "access-control-allow-credentials": r2 }), preflight: (e2) => {
    if ("OPTIONS" == e2.method) {
      const t3 = new Response(null, { status: 204 });
      return l(t3, { "access-control-allow-origin": n(e2), "access-control-allow-methods": o2?.join?.(",") ?? o2, "access-control-expose-headers": s2?.join?.(",") ?? s2, "access-control-allow-headers": a2?.join?.(",") ?? a2 ?? e2.headers.get("access-control-request-headers"), "access-control-max-age": c, "access-control-allow-credentials": r2 });
    }
  } };
};

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
  for (const [k, v] of headers.entries()) {
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
  const generateContentRequest = {
    contents: openAiMessageToGeminiMessage(req.messages),
    generationConfig: {
      maxOutputTokens: req.max_tokens ?? void 0,
      temperature: req.temperature ?? void 0,
      topP: req.top_p ?? void 0
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
  // "gpt-4": "gemini-1.0-ultra-latest",
  "gpt-4-vision-preview": "gemini-1.0-pro-vision-latest",
  "gpt-4-turbo": "gemini-1.5-pro-latest",
  "gpt-4-turbo-preview": "gemini-1.5-pro-latest"
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
async function generateContent(apiParam, model, params, requestOptions) {
  const url = new RequestUrl(model, "generateContent" /* GENERATE_CONTENT */, false, apiParam);
  const response = await makeRequest(url, JSON.stringify(params), requestOptions);
  const responseJson = await response.json();
  const enhancedResponse = addHelpers(responseJson);
  return {
    response: enhancedResponse
  };
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
        const json = await response.json();
        message = json.error.message;
        if (json.error.details) {
          message += ` ${JSON.stringify(json.error.details)}`;
        }
      } catch (_e) {
      }
      throw new Error(`[${response.status} ${response.statusText}] ${message}`);
    }
  } catch (e) {
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
  const geminiResp = await generateContent(apiParam, model, geminiReq).then((it) => it.response.result()).catch((err) => {
    log?.error(req);
    log?.error(err?.message ?? err.toString());
    return err?.message ?? err.toString();
  });
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
  const geminiResp = await generateContent(apiParam, model, geminiReq).then((it) => it.response.result()).catch((e) => e.message ?? e?.toString());
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
  yield genOpenAiResp(geminiResp, false);
  yield genOpenAiResp("", true);
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
        rawReq.logger?.debug(data);
        yield JSON.stringify(data);
      }
      yield "[DONE]";
    }()
  );
}
function sseResponse(dataStream) {
  const { readable, writable } = new TransformStream();
  const response = new Response(readable, {
    status: 200,
    headers: new Headers({
      "Content-Type": "text/event-stream"
    })
  });
  const encoder = new TextEncoder();
  async function writer(data) {
    const w = writable.getWriter();
    await w.write(encoder.encode(data));
    w.releaseLock();
  }
  ;
  (async () => {
    for await (const data of dataStream) {
      await writer(toSseMsg({ data }));
    }
    await writable.close();
  })();
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
var modelData = [
  {
    created: 1677610602,
    object: "model",
    owned_by: "openai",
    id: "gpt-3.5-turbo"
  },
  {
    created: 1685474247,
    object: "model",
    owned_by: "openai",
    id: "gpt-4-vision-preview"
  },
  {
    created: 1687882411,
    object: "model",
    owned_by: "openai",
    id: "gpt-4-turbo"
  },
  {
    created: 1687882412,
    object: "model",
    owned_by: "openai",
    id: "gpt-4-turbo-preview"
  }
];
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
var { preflight, corsify } = y({ allowHeaders: "*" });
var app = t({
  before: [
    preflight,
    (req) => {
      req.logger = new Logger({ prefix: crypto.randomUUID().toString() });
      req.logger.warn(`--> ${req.method} ${req.url}`);
    }
  ],
  catch: s,
  finally: [
    corsify,
    (_, req) => {
      req.logger?.warn(`<-- ${req.method} ${req.url}`);
    },
    o
  ]
});
app.get("/", (c) => hello(c));
app.post("/v1/chat/completions", chatProxyHandler);
app.get("/v1/models", () => Response.json(models()));
app.get("/v1/models/:model", (c) => Response.json(modelDetail(c.params.model)));
app.post(":model_version/models/:model_and_action", geminiProxy);
app.all("*", () => new Response("Page Not Found", { status: 404 }));

// main_node.ts
console.log("Listening on http://localhost:8000/");
serve({
  fetch: app.fetch,
  port: 8e3
});
