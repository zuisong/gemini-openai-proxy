// node_modules/.deno/@hono+node-server@1.9.1/node_modules/@hono/node-server/dist/index.mjs
import { createServer as createServerHTTP } from "http";
import { Http2ServerRequest } from "http2";
import { Readable } from "stream";
import crypto2 from "crypto";
var GlobalRequest = global.Request;
var Request2 = class extends GlobalRequest {
  constructor(input, options) {
    if (typeof input === "object" && getRequestCache in input) {
      input = input[getRequestCache]();
    }
    if (options?.body instanceof ReadableStream) {
      ;
      options.duplex ??= "half";
    }
    super(input, options);
  }
};
Object.defineProperty(global, "Request", {
  value: Request2
});
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
var newRequest = (incoming) => {
  const req = Object.create(requestPrototype);
  req[incomingKey] = incoming;
  req[urlKey] = new URL(
    `${incoming instanceof Http2ServerRequest || incoming.socket && incoming.socket.encrypted ? "https" : "http"}://${incoming instanceof Http2ServerRequest ? incoming.authority : incoming.headers.host}${incoming.url}`
  ).href;
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
    } catch (e3) {
      cancel(e3);
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
    if (typeof body === "string" || body instanceof ReadableStream) {
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
Object.defineProperty(global, "Response", {
  value: Response2
});
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
var handleFetchError = (e3) => new Response(null, {
  status: e3 instanceof Error && (e3.name === "TimeoutError" || e3.constructor.name === "TimeoutError") ? 504 : 500
});
var handleResponseError = (e3, outgoing) => {
  const err = e3 instanceof Error ? e3 : new Error("unknown error", { cause: e3 });
  if (err.code === "ERR_STREAM_PREMATURE_CLOSE") {
    console.info("The user aborted a request.");
  } else {
    console.error(e3);
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
      (e3) => handleResponseError(e3, outgoing)
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
  return async (incoming, outgoing) => {
    let res;
    const req = newRequest(incoming);
    outgoing.on("close", () => {
      if (incoming.destroyed) {
        req[getAbortController]().abort();
      }
    });
    try {
      res = fetchCallback(req, { incoming, outgoing });
      if (cacheKey in res) {
        return responseViaCache(res, outgoing);
      }
    } catch (e3) {
      if (!res) {
        if (options.errorHandler) {
          res = await options.errorHandler(e3);
          if (!res) {
            return;
          }
        } else {
          res = handleFetchError(e3);
        }
      } else {
        return handleResponseError(e3, outgoing);
      }
    }
    try {
      return responseViaResponseObject(res, outgoing, options);
    } catch (e3) {
      return handleResponseError(e3, outgoing);
    }
  };
};
var createAdaptorServer = (options) => {
  const fetchCallback = options.fetch;
  const requestListener = getRequestListener(fetchCallback);
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

// node_modules/.deno/itty-router@5.0.4/node_modules/itty-router/Router.mjs
var r = ({ base: r3 = "", routes: e3 = [], ...a } = {}) => ({ __proto__: new Proxy({}, { get: (a2, t3, o, c) => (a3, ...l) => e3.push([t3.toUpperCase?.(), RegExp(`^${(c = (r3 + a3).replace(/\/+(\/|$)/g, "$1")).replace(/(\/?\.?):(\w+)\+/g, "($1(?<$2>*))").replace(/(\/?\.?):(\w+)/g, "($1(?<$2>[^$1/]+?))").replace(/\./g, "\\.").replace(/(\/?)\*/g, "($1.*)?")}/*$`), l, c]) && o }), routes: e3, ...a, async fetch(r4, ...t3) {
  let o, c, l = new URL(r4.url), p = r4.query = { __proto__: null };
  for (let [r5, e4] of l.searchParams)
    p[r5] = p[r5] ? [].concat(p[r5], e4) : e4;
  r:
    try {
      for (let e4 of a.before || [])
        if (null != (o = await e4(r4.proxy ?? r4, ...t3)))
          break r;
      e:
        for (let [a2, p2, f, h] of e3)
          if ((a2 == r4.method || "ALL" == a2) && (c = l.pathname.match(p2))) {
            r4.params = c.groups || {}, r4.route = h;
            for (let e4 of f)
              if (null != (o = await e4(r4.proxy ?? r4, ...t3)))
                break e;
          }
    } catch (e4) {
      if (!a.catch)
        throw e4;
      o = await a.catch(e4, r4.proxy ?? r4, ...t3);
    }
  try {
    for (let e4 of a.finally || [])
      o = await e4(o, r4.proxy ?? r4, ...t3) ?? o;
  } catch (e4) {
    if (!a.catch)
      throw e4;
    o = await a.catch(e4, r4.proxy ?? r4, ...t3);
  }
  return o;
} });

// node_modules/.deno/itty-router@5.0.4/node_modules/itty-router/cors.mjs
var e = (e3 = {}) => {
  const { origin: o = "*", credentials: s = false, allowMethods: r3 = "*", allowHeaders: n, exposeHeaders: c, maxAge: t3 } = e3, a = { "access-control-allow-headers": n?.join?.(",") ?? n, "access-control-expose-headers": c?.join?.(",") ?? c, "access-control-allow-methods": r3?.join?.(",") ?? r3, "access-control-max-age": t3, "access-control-allow-credentials": s }, l = (e4) => {
    const r4 = e4?.headers.get("origin");
    return true === o ? r4 : o instanceof RegExp ? o.test(r4) ? r4 : void 0 : Array.isArray(o) ? o.includes(r4) ? r4 : void 0 : o instanceof Function ? o(r4) : "*" == o && s ? r4 : o;
  };
  return { corsify: (e4, o2) => e4?.headers?.get("access-control-allow-origin") ? e4 : new Response(e4.body, { ...e4, headers: [...e4.headers, ["access-control-allow-origin", l(o2)], ...Object.entries(a)].filter((e5) => e5[1]) }), preflight: (e4) => {
    if ("OPTIONS" == e4.method)
      return new Response(null, { status: 204, headers: Object.entries({ "access-control-allow-origin": l(e4), ...a }).filter((e5) => e5[1]) });
  } };
};

// node_modules/.deno/itty-router@5.0.4/node_modules/itty-router/error.mjs
var t = /* @__PURE__ */ ((t3 = "text/plain; charset=utf-8", e3) => (r3, { ...n } = {}) => {
  if (void 0 === r3 || r3 instanceof Response)
    return r3;
  const o = new Response(e3?.(r3) ?? r3, n);
  return o.headers.set("content-type", t3), o;
})("application/json; charset=utf-8", JSON.stringify);
var e2 = (t3) => ({ 400: "Bad Request", 401: "Unauthorized", 403: "Forbidden", 404: "Not Found", 500: "Internal Server Error" })[t3] || "Unknown Error";
var r2 = (r3 = 500, n) => {
  if (r3 instanceof Error) {
    const { message: t3, ...o } = r3;
    r3 = r3.status || 500, n = { error: t3 || e2(r3), ...o };
  }
  return n = { status: r3, ..."object" == typeof n ? n : { error: n || e2(r3) } }, t(n, { status: r3 });
};

// node_modules/.deno/itty-router@5.0.4/node_modules/itty-router/json.mjs
var t2 = /* @__PURE__ */ ((t3 = "text/plain; charset=utf-8", e3) => (n, { ...s } = {}) => {
  if (void 0 === n || n instanceof Response)
    return n;
  const o = new Response(e3?.(n) ?? n, s);
  return o.headers.set("content-type", t3), o;
})("application/json; charset=utf-8", JSON.stringify);

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

// src/utils.ts
function getToken(headers) {
  for (const [k, v] of headers.entries()) {
    if (k.toLowerCase() !== "authorization")
      continue;
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
function hasImageMessage(messages) {
  return messages.some((msg) => {
    const content = msg.content;
    if (content == null) {
      return false;
    }
    if (typeof content === "string") {
      return false;
    }
    return content.some((it) => it.type === "image_url");
  });
}
function genModel(req) {
  const model = hasImageMessage(req.messages) ? "gemini-pro-vision" /* GEMINI_PRO_VISION */ : "gemini-pro" /* GEMINI_PRO */;
  const generateContentRequest = {
    contents: openAiMessageToGeminiMessage(req.messages),
    generationConfig: {
      maxOutputTokens: req.max_tokens ?? void 0,
      temperature: req.temperature ?? void 0,
      topP: req.top_p ?? void 0
    },
    safetySettings: [
      "HARM_CATEGORY_HATE_SPEECH" /* HARM_CATEGORY_HATE_SPEECH */,
      "HARM_CATEGORY_SEXUALLY_EXPLICIT" /* HARM_CATEGORY_SEXUALLY_EXPLICIT */,
      "HARM_CATEGORY_DANGEROUS_CONTENT" /* HARM_CATEGORY_DANGEROUS_CONTENT */,
      "HARM_CATEGORY_HARASSMENT" /* HARM_CATEGORY_HARASSMENT */
    ].map((category) => ({
      category,
      threshold: "BLOCK_NONE" /* BLOCK_NONE */
    }))
  };
  return [model, generateContentRequest];
}
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
  response.text = () => {
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
  return "";
}
var badFinishReasons = ["RECITATION" /* RECITATION */, "SAFETY" /* SAFETY */];
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
  } catch (e3) {
    const err = new GoogleGenerativeAIError(`Error fetching from ${url.toURL()} -> ${e3.message}`);
    err.stack = e3.stack;
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
    const api_version = this.apiParam.useBeta ? "v1beta" /* v1beta */ : "v1" /* v1 */;
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
async function nonStreamingChatProxyHandler(req, apiParam) {
  const [model, geminiReq] = genModel(req);
  const geminiResp = await generateContent(apiParam, model, geminiReq).then((it) => it.response.text()).catch((e3) => e3.message ?? e3?.toString());
  const resp = {
    id: "chatcmpl-abc123",
    object: "chat.completion",
    created: Date.now(),
    model: req.model,
    choices: [
      {
        message: { role: "assistant", content: geminiResp },
        logprobs: null,
        finish_reason: "stop",
        index: 0
      }
    ]
  };
  return resp;
}

// src/openai/chat/completions/StreamingChatProxyHandler.ts
async function* streamingChatProxyHandler(req, apiParam) {
  const [model, geminiReq] = genModel(req);
  const geminiResp = await generateContent(apiParam, model, geminiReq).then((it) => it.response.text()).catch((e3) => e3.message ?? e3?.toString());
  function genOpenAiResp(content, stop) {
    return {
      id: "chatcmpl-abc123",
      object: "chat.completion.chunk",
      created: Date.now(),
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
    const resp = await nonStreamingChatProxyHandler(req, apiParam);
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
    created: 1677649963,
    object: "model",
    owned_by: "openai",
    id: "gpt-3.5-turbo-0301"
  },
  {
    created: 1686587434,
    object: "model",
    owned_by: "openai",
    id: "gpt-3.5-turbo-0613"
  },
  {
    created: 1683758102,
    object: "model",
    owned_by: "openai-internal",
    id: "gpt-3.5-turbo-16k"
  },
  {
    created: 1685474247,
    object: "model",
    owned_by: "openai",
    id: "gpt-3.5-turbo-16k-0613"
  },
  {
    created: 1687882411,
    object: "model",
    owned_by: "openai",
    id: "gpt-4"
  },
  {
    created: 1687882410,
    object: "model",
    owned_by: "openai",
    id: "gpt-4-0314"
  },
  {
    created: 1686588896,
    object: "model",
    owned_by: "openai",
    id: "gpt-4-0613"
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

// src/routes.ts
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

// src/app.ts
var { preflight, corsify } = e();
var app = r({
  before: [
    preflight,
    (req) => {
      req.logger = new Logger({ prefix: crypto.randomUUID().toString() });
      req.logger.warn(`--> ${req.method} ${req.url}`);
    }
  ],
  catch: r2,
  finally: [
    corsify,
    (_, req) => {
      req.logger?.warn(`<-- ${req.method} ${req.url}`);
    },
    t2
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
