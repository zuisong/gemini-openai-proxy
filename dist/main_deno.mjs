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
  let functions = req.tools?.filter((it) => it.type === "function")?.map((it) => it.function) ?? [];
  functions = functions.concat(req.functions ?? []);
  const generateContentRequest = {
    contents: openAiMessageToGeminiMessage(req.messages),
    generationConfig: {
      maxOutputTokens: req.max_tokens ?? void 0,
      temperature: req.temperature ?? void 0,
      topP: req.top_p ?? void 0
    },
    tools: [
      {
        functionDeclarations: functions
      }
    ],
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
async function nonStreamingChatProxyHandler(req, apiParam, log) {
  const [model, geminiReq] = genModel(req);
  const geminiResp = await generateContent(apiParam, model, geminiReq).then((it) => it.response.result()).catch((err) => {
    log?.error(req);
    log?.error(err?.message ?? err.toString());
    return err?.message ?? err.toString();
  });
  log?.debug(req);
  log?.debug(geminiResp);
  const resp = {
    id: "chatcmpl-abc123",
    object: "chat.completion",
    created: Math.floor(Date.now() / 1e3),
    model: req.model,
    choices: [
      {
        message: {
          role: "assistant",
          content: typeof geminiResp === "string" ? geminiResp : null,
          function_call: typeof geminiResp === "string" ? void 0 : {
            name: geminiResp.name,
            arguments: JSON.stringify(geminiResp.args)
          }
        },
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
var { preflight, corsify } = e({ allowHeaders: "*" });
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

// main_deno.ts
Deno.serve({ port: 8e3 }, app.fetch);
