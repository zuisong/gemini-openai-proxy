// node_modules/.deno/hono@4.1.0/node_modules/hono/dist/helper/adapter/index.js
var env = (c, runtime) => {
  const global = globalThis;
  const globalEnv = global?.process?.env;
  runtime ??= getRuntimeKey();
  const runtimeEnvHandlers = {
    bun: () => globalEnv,
    node: () => globalEnv,
    "edge-light": () => globalEnv,
    deno: () => {
      return Deno.env.toObject();
    },
    workerd: () => c.env,
    fastly: () => ({}),
    other: () => ({})
  };
  return runtimeEnvHandlers[runtime]();
};
var getRuntimeKey = () => {
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
};

// node_modules/.deno/hono@4.1.0/node_modules/hono/dist/middleware/cors/index.js
var cors = (options) => {
  const defaults = {
    origin: "*",
    allowMethods: ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH"],
    allowHeaders: [],
    exposeHeaders: []
  };
  const opts = {
    ...defaults,
    ...options
  };
  const findAllowOrigin = ((optsOrigin) => {
    if (typeof optsOrigin === "string") {
      return () => optsOrigin;
    } else if (typeof optsOrigin === "function") {
      return optsOrigin;
    } else {
      return (origin) => optsOrigin.includes(origin) ? origin : optsOrigin[0];
    }
  })(opts.origin);
  return async function cors2(c, next) {
    function set(key, value) {
      c.res.headers.set(key, value);
    }
    const allowOrigin = findAllowOrigin(c.req.header("origin") || "");
    if (allowOrigin) {
      set("Access-Control-Allow-Origin", allowOrigin);
    }
    if (opts.origin !== "*") {
      set("Vary", "Origin");
    }
    if (opts.credentials) {
      set("Access-Control-Allow-Credentials", "true");
    }
    if (opts.exposeHeaders?.length) {
      set("Access-Control-Expose-Headers", opts.exposeHeaders.join(","));
    }
    if (c.req.method === "OPTIONS") {
      if (opts.maxAge != null) {
        set("Access-Control-Max-Age", opts.maxAge.toString());
      }
      if (opts.allowMethods?.length) {
        set("Access-Control-Allow-Methods", opts.allowMethods.join(","));
      }
      let headers = opts.allowHeaders;
      if (!headers?.length) {
        const requestHeaders = c.req.header("Access-Control-Request-Headers");
        if (requestHeaders) {
          headers = requestHeaders.split(/\s*,\s*/);
        }
      }
      if (headers?.length) {
        set("Access-Control-Allow-Headers", headers.join(","));
        c.res.headers.append("Vary", "Access-Control-Request-Headers");
      }
      c.res.headers.delete("Content-Length");
      c.res.headers.delete("Content-Type");
      return new Response(null, {
        headers: c.res.headers,
        status: 204,
        statusText: c.res.statusText
      });
    }
    await next();
  };
};

// node_modules/.deno/hono@4.1.0/node_modules/hono/dist/utils/color.js
function getColorEnabled() {
  const { process, Deno: Deno2 } = globalThis;
  const isNoColor = typeof process !== "undefined" ? "NO_COLOR" in process?.env : typeof Deno2?.noColor === "boolean" ? Deno2.noColor : false;
  return !isNoColor;
}

// node_modules/.deno/hono@4.1.0/node_modules/hono/dist/utils/url.js
var getPath = (request) => {
  const match = request.url.match(/^https?:\/\/[^/]+(\/[^?]*)/);
  return match ? match[1] : "";
};
var getQueryStrings = (url) => {
  const queryIndex = url.indexOf("?", 8);
  return queryIndex === -1 ? "" : "?" + url.slice(queryIndex + 1);
};
var getPathNoStrict = (request) => {
  const result = getPath(request);
  return result.length > 1 && result[result.length - 1] === "/" ? result.slice(0, -1) : result;
};
var mergePath = (...paths) => {
  let p = "";
  let endsWithSlash = false;
  for (let path of paths) {
    if (p[p.length - 1] === "/") {
      p = p.slice(0, -1);
      endsWithSlash = true;
    }
    if (path[0] !== "/") {
      path = `/${path}`;
    }
    if (path === "/" && endsWithSlash) {
      p = `${p}/`;
    } else if (path !== "/") {
      p = `${p}${path}`;
    }
    if (path === "/" && p === "") {
      p = "/";
    }
  }
  return p;
};
var _decodeURI = (value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return /%/.test(value) ? decodeURIComponent_(value) : value;
};
var _getQueryParam = (url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf(`?${key}`, 8);
    if (keyIndex2 === -1) {
      keyIndex2 = url.indexOf(`&${key}`, 8);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return void 0;
    }
  }
  const results = {};
  encoded ??= /[%+]/.test(url);
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name = url.slice(
      keyIndex + 1,
      valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex
    );
    if (encoded) {
      name = _decodeURI(name);
    }
    keyIndex = nextKeyIndex;
    if (name === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      if (!(results[name] && Array.isArray(results[name]))) {
        results[name] = [];
      }
      ;
      results[name].push(value);
    } else {
      results[name] ??= value;
    }
  }
  return key ? results[key] : results;
};
var getQueryParam = _getQueryParam;
var getQueryParams = (url, key) => {
  return _getQueryParam(url, key, true);
};
var decodeURIComponent_ = decodeURIComponent;

// node_modules/.deno/hono@4.1.0/node_modules/hono/dist/middleware/logger/index.js
var humanize = (times) => {
  const [delimiter, separator] = [",", "."];
  const orderTimes = times.map((v) => v.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + delimiter));
  return orderTimes.join(separator);
};
var time = (start) => {
  const delta = Date.now() - start;
  return humanize([delta < 1e3 ? delta + "ms" : Math.round(delta / 1e3) + "s"]);
};
var colorStatus = (status) => {
  const colorEnabled = getColorEnabled();
  const out = {
    7: colorEnabled ? `\x1B[35m${status}\x1B[0m` : `${status}`,
    5: colorEnabled ? `\x1B[31m${status}\x1B[0m` : `${status}`,
    4: colorEnabled ? `\x1B[33m${status}\x1B[0m` : `${status}`,
    3: colorEnabled ? `\x1B[36m${status}\x1B[0m` : `${status}`,
    2: colorEnabled ? `\x1B[32m${status}\x1B[0m` : `${status}`,
    1: colorEnabled ? `\x1B[32m${status}\x1B[0m` : `${status}`,
    0: colorEnabled ? `\x1B[33m${status}\x1B[0m` : `${status}`
  };
  const calculateStatus = status / 100 | 0;
  return out[calculateStatus];
};
function log(fn, prefix, method, path, status = 0, elapsed) {
  const out = prefix === "<--" ? `  ${prefix} ${method} ${path}` : `  ${prefix} ${method} ${path} ${colorStatus(status)} ${elapsed}`;
  fn(out);
}
var logger = (fn = console.log) => {
  return async function logger2(c, next) {
    const { method } = c.req;
    const path = getPath(c.req.raw);
    log(fn, "<--", method, path);
    const start = Date.now();
    await next();
    log(fn, "-->", method, path, c.res.status, time(start));
  };
};

// node_modules/.deno/hono@4.1.0/node_modules/hono/dist/utils/html.js
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw = (value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
};
var resolveCallback = async (str, phase, preserveCallbacks, context, buffer) => {
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context }))).then(
    (res) => Promise.all(
      res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context, buffer))
    ).then(() => buffer[0])
  );
  if (preserveCallbacks) {
    return raw(await resStr, callbacks);
  } else {
    return resStr;
  }
};

// node_modules/.deno/hono@4.1.0/node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setHeaders = (headers, map = {}) => {
  Object.entries(map).forEach(([key, value]) => headers.set(key, value));
  return headers;
};
var Context = class {
  req;
  env = {};
  _var = {};
  finalized = false;
  error = void 0;
  #status = 200;
  #executionCtx;
  #headers = void 0;
  #preparedHeaders = void 0;
  #res;
  #isFresh = true;
  layout = void 0;
  renderer = (content) => this.html(content);
  notFoundHandler = () => new Response();
  constructor(req, options) {
    this.req = req;
    if (options) {
      this.#executionCtx = options.executionCtx;
      this.env = options.env;
      if (options.notFoundHandler) {
        this.notFoundHandler = options.notFoundHandler;
      }
    }
  }
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  get executionCtx() {
    if (this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  get res() {
    this.#isFresh = false;
    return this.#res ||= new Response("404 Not Found", { status: 404 });
  }
  set res(_res) {
    this.#isFresh = false;
    if (this.#res && _res) {
      this.#res.headers.delete("content-type");
      for (const [k, v] of this.#res.headers.entries()) {
        if (k === "set-cookie") {
          const cookies = this.#res.headers.getSetCookie();
          _res.headers.delete("set-cookie");
          for (const cookie of cookies) {
            _res.headers.append("set-cookie", cookie);
          }
        } else {
          _res.headers.set(k, v);
        }
      }
    }
    this.#res = _res;
    this.finalized = true;
  }
  render = (...args) => this.renderer(...args);
  setLayout = (layout) => this.layout = layout;
  getLayout = () => this.layout;
  setRenderer = (renderer) => {
    this.renderer = renderer;
  };
  header = (name, value, options) => {
    if (value === void 0) {
      if (this.#headers) {
        this.#headers.delete(name);
      } else if (this.#preparedHeaders) {
        delete this.#preparedHeaders[name.toLocaleLowerCase()];
      }
      if (this.finalized) {
        this.res.headers.delete(name);
      }
      return;
    }
    if (options?.append) {
      if (!this.#headers) {
        this.#isFresh = false;
        this.#headers = new Headers(this.#preparedHeaders);
        this.#preparedHeaders = {};
      }
      this.#headers.append(name, value);
    } else {
      if (this.#headers) {
        this.#headers.set(name, value);
      } else {
        this.#preparedHeaders ??= {};
        this.#preparedHeaders[name.toLowerCase()] = value;
      }
    }
    if (this.finalized) {
      if (options?.append) {
        this.res.headers.append(name, value);
      } else {
        this.res.headers.set(name, value);
      }
    }
  };
  status = (status) => {
    this.#isFresh = false;
    this.#status = status;
  };
  set = (key, value) => {
    this._var ??= {};
    this._var[key] = value;
  };
  get = (key) => {
    return this._var ? this._var[key] : void 0;
  };
  get var() {
    return { ...this._var };
  }
  newResponse = (data, arg, headers) => {
    if (this.#isFresh && !headers && !arg && this.#status === 200) {
      return new Response(data, {
        headers: this.#preparedHeaders
      });
    }
    if (arg && typeof arg !== "number") {
      const headers2 = setHeaders(new Headers(arg.headers), this.#preparedHeaders);
      return new Response(data, {
        headers: headers2,
        status: arg.status ?? this.#status
      });
    }
    const status = typeof arg === "number" ? arg : this.#status;
    this.#preparedHeaders ??= {};
    this.#headers ??= new Headers();
    setHeaders(this.#headers, this.#preparedHeaders);
    if (this.#res) {
      this.#res.headers.forEach((v, k) => {
        this.#headers?.set(k, v);
      });
      setHeaders(this.#headers, this.#preparedHeaders);
    }
    headers ??= {};
    for (const [k, v] of Object.entries(headers)) {
      if (typeof v === "string") {
        this.#headers.set(k, v);
      } else {
        this.#headers.delete(k);
        for (const v2 of v) {
          this.#headers.append(k, v2);
        }
      }
    }
    return new Response(data, {
      status,
      headers: this.#headers
    });
  };
  body = (data, arg, headers) => {
    return typeof arg === "number" ? this.newResponse(data, arg, headers) : this.newResponse(data, arg);
  };
  text = (text, arg, headers) => {
    if (!this.#preparedHeaders) {
      if (this.#isFresh && !headers && !arg) {
        return new Response(text);
      }
      this.#preparedHeaders = {};
    }
    this.#preparedHeaders["content-type"] = TEXT_PLAIN;
    return typeof arg === "number" ? this.newResponse(text, arg, headers) : this.newResponse(text, arg);
  };
  json = (object, arg, headers) => {
    const body = JSON.stringify(object);
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "application/json; charset=UTF-8";
    return typeof arg === "number" ? this.newResponse(body, arg, headers) : this.newResponse(body, arg);
  };
  html = (html, arg, headers) => {
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "text/html; charset=UTF-8";
    if (typeof html === "object") {
      if (!(html instanceof Promise)) {
        html = html.toString();
      }
      if (html instanceof Promise) {
        return html.then((html2) => resolveCallback(html2, HtmlEscapedCallbackPhase.Stringify, false, {})).then((html2) => {
          return typeof arg === "number" ? this.newResponse(html2, arg, headers) : this.newResponse(html2, arg);
        });
      }
    }
    return typeof arg === "number" ? this.newResponse(html, arg, headers) : this.newResponse(html, arg);
  };
  redirect = (location, status = 302) => {
    this.#headers ??= new Headers();
    this.#headers.set("Location", location);
    return this.newResponse(null, status);
  };
  notFound = () => {
    return this.notFoundHandler(this);
  };
};

// node_modules/.deno/hono@4.1.0/node_modules/hono/dist/middleware/timing/index.js
var getTime = () => {
  try {
    return performance.now();
  } catch {
  }
  return Date.now();
};
var timing = (config) => {
  const options = {
    ...{
      total: true,
      enabled: true,
      totalDescription: "Total Response Time",
      autoEnd: true,
      crossOrigin: false
    },
    ...config
  };
  return async function timing2(c, next) {
    const headers = [];
    const timers = /* @__PURE__ */ new Map();
    c.set("metric", { headers, timers });
    if (options.total) {
      startTime(c, "total", options.totalDescription);
    }
    await next();
    if (options.total) {
      endTime(c, "total");
    }
    if (options.autoEnd) {
      timers.forEach((_, key) => endTime(c, key));
    }
    const enabled = typeof options.enabled === "function" ? options.enabled(c) : options.enabled;
    if (enabled) {
      c.res.headers.append("Server-Timing", headers.join(","));
      if (options.crossOrigin) {
        c.res.headers.append(
          "Timing-Allow-Origin",
          typeof options.crossOrigin === "string" ? options.crossOrigin : "*"
        );
      }
    }
  };
};
var setMetric = (c, name, valueDescription, description, precision) => {
  const metrics = c.get("metric");
  if (!metrics) {
    console.warn("Metrics not initialized! Please add the `timing()` middleware to this route!");
    return;
  }
  if (typeof valueDescription === "number") {
    const dur = valueDescription.toFixed(precision || 1);
    const metric = description ? `${name};dur=${dur};desc="${description}"` : `${name};dur=${dur}`;
    metrics.headers.push(metric);
  } else {
    const metric = valueDescription ? `${name};desc="${valueDescription}"` : `${name}`;
    metrics.headers.push(metric);
  }
};
var startTime = (c, name, description) => {
  const metrics = c.get("metric");
  if (!metrics) {
    console.warn("Metrics not initialized! Please add the `timing()` middleware to this route!");
    return;
  }
  metrics.timers.set(name, { description, start: getTime() });
};
var endTime = (c, name, precision) => {
  const metrics = c.get("metric");
  if (!metrics) {
    console.warn("Metrics not initialized! Please add the `timing()` middleware to this route!");
    return;
  }
  const timer = metrics.timers.get(name);
  if (!timer) {
    console.warn(`Timer "${name}" does not exist!`);
    return;
  }
  const { description, start } = timer;
  const duration = getTime() - start;
  setMetric(c, name, duration, description, precision);
  metrics.timers.delete(name);
};

// node_modules/.deno/hono@4.1.0/node_modules/hono/dist/compose.js
var compose = (middleware, onError, onNotFound) => {
  return (context, next) => {
    let index = -1;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      let res;
      let isError = false;
      let handler;
      if (middleware[i]) {
        handler = middleware[i][0][0];
        if (context instanceof Context) {
          context.req.routeIndex = i;
        }
      } else {
        handler = i === middleware.length && next || void 0;
      }
      if (!handler) {
        if (context instanceof Context && context.finalized === false && onNotFound) {
          res = await onNotFound(context);
        }
      } else {
        try {
          res = await handler(context, () => {
            return dispatch(i + 1);
          });
        } catch (err) {
          if (err instanceof Error && context instanceof Context && onError) {
            context.error = err;
            res = await onError(err, context);
            isError = true;
          } else {
            throw err;
          }
        }
      }
      if (res && (context.finalized === false || isError)) {
        context.res = res;
      }
      return context;
    }
  };
};

// node_modules/.deno/hono@4.1.0/node_modules/hono/dist/http-exception.js
var HTTPException = class extends Error {
  res;
  status;
  constructor(status = 500, options) {
    super(options?.message, { cause: options?.cause });
    this.res = options?.res;
    this.status = status;
  }
  getResponse() {
    if (this.res) {
      return this.res;
    }
    return new Response(this.message, {
      status: this.status
    });
  }
};

// node_modules/.deno/hono@4.1.0/node_modules/hono/dist/utils/body.js
var parseBody = async (request, options = { all: false }) => {
  const headers = request instanceof HonoRequest ? request.raw.headers : request.headers;
  const contentType = headers.get("Content-Type");
  if (isFormDataContent(contentType)) {
    return parseFormData(request, options);
  }
  return {};
};
function isFormDataContent(contentType) {
  if (contentType === null) {
    return false;
  }
  return contentType.startsWith("multipart/form-data") || contentType.startsWith("application/x-www-form-urlencoded");
}
async function parseFormData(request, options) {
  const formData = await request.formData();
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
}
function convertFormDataToBodyData(formData, options) {
  const form = {};
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  return form;
}
var handleParsingAllValues = (form, key, value) => {
  if (form[key] && isArrayField(form[key])) {
    appendToExistingArray(form[key], value);
  } else if (form[key]) {
    convertToNewArray(form, key, value);
  } else {
    form[key] = value;
  }
};
function isArrayField(field) {
  return Array.isArray(field);
}
var appendToExistingArray = (arr, value) => {
  arr.push(value);
};
var convertToNewArray = (form, key, value) => {
  form[key] = [form[key], value];
};

// node_modules/.deno/hono@4.1.0/node_modules/hono/dist/request.js
var HonoRequest = class {
  raw;
  #validatedData;
  #matchResult;
  routeIndex = 0;
  path;
  bodyCache = {};
  constructor(request, path = "/", matchResult = [[]]) {
    this.raw = request;
    this.path = path;
    this.#matchResult = matchResult;
    this.#validatedData = {};
  }
  param(key) {
    return key ? this.getDecodedParam(key) : this.getAllDecodedParams();
  }
  getDecodedParam(key) {
    const paramKey = this.#matchResult[0][this.routeIndex][1][key];
    const param = this.getParamValue(paramKey);
    return param ? /\%/.test(param) ? decodeURIComponent_(param) : param : void 0;
  }
  getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (const key of keys) {
      const value = this.getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      if (value && typeof value === "string") {
        decoded[key] = /\%/.test(value) ? decodeURIComponent_(value) : value;
      }
    }
    return decoded;
  }
  getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name) {
      return this.raw.headers.get(name.toLowerCase()) ?? void 0;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    if (this.bodyCache.parsedBody) {
      return this.bodyCache.parsedBody;
    }
    const parsedBody = await parseBody(this, options);
    this.bodyCache.parsedBody = parsedBody;
    return parsedBody;
  }
  cachedBody = (key) => {
    const { bodyCache, raw: raw2 } = this;
    const cachedBody = bodyCache[key];
    if (cachedBody) {
      return cachedBody;
    }
    if (bodyCache.arrayBuffer) {
      return (async () => {
        return await new Response(bodyCache.arrayBuffer)[key]();
      })();
    }
    return bodyCache[key] = raw2[key]();
  };
  json() {
    return this.cachedBody("json");
  }
  text() {
    return this.cachedBody("text");
  }
  arrayBuffer() {
    return this.cachedBody("arrayBuffer");
  }
  blob() {
    return this.cachedBody("blob");
  }
  formData() {
    return this.cachedBody("formData");
  }
  addValidatedData(target, data) {
    this.#validatedData[target] = data;
  }
  valid(target) {
    return this.#validatedData[target];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
};

// node_modules/.deno/hono@4.1.0/node_modules/hono/dist/router.js
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var UnsupportedPathError = class extends Error {
};

// node_modules/.deno/hono@4.1.0/node_modules/hono/dist/hono-base.js
var COMPOSED_HANDLER = Symbol("composedHandler");
function defineDynamicClass() {
  return class {
  };
}
var notFoundHandler = (c) => {
  return c.text("404 Not Found", 404);
};
var errorHandler = (err, c) => {
  if (err instanceof HTTPException) {
    return err.getResponse();
  }
  console.error(err);
  return c.text("Internal Server Error", 500);
};
var Hono = class extends defineDynamicClass() {
  router;
  getPath;
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    super();
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.map((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.#path = args1;
        } else {
          this.addRoute(method, this.#path, args1);
        }
        args.map((handler) => {
          if (typeof handler !== "string") {
            this.addRoute(method, this.#path, handler);
          }
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      if (!method) {
        return this;
      }
      for (const p of [path].flat()) {
        this.#path = p;
        for (const m of [method].flat()) {
          handlers.map((handler) => {
            this.addRoute(m.toUpperCase(), this.#path, handler);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.#path = arg1;
      } else {
        this.#path = "*";
        handlers.unshift(arg1);
      }
      handlers.map((handler) => {
        this.addRoute(METHOD_NAME_ALL, this.#path, handler);
      });
      return this;
    };
    const strict = options.strict ?? true;
    delete options.strict;
    Object.assign(this, options);
    this.getPath = strict ? options.getPath ?? getPath : getPathNoStrict;
  }
  clone() {
    const clone = new Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.routes = this.routes;
    return clone;
  }
  notFoundHandler = notFoundHandler;
  errorHandler = errorHandler;
  route(path, app2) {
    const subApp = this.basePath(path);
    if (!app2) {
      return subApp;
    }
    app2.routes.map((r) => {
      let handler;
      if (app2.errorHandler === errorHandler) {
        handler = r.handler;
      } else {
        handler = async (c, next) => (await compose([], app2.errorHandler)(c, () => r.handler(c, next))).res;
        handler[COMPOSED_HANDLER] = r.handler;
      }
      subApp.addRoute(r.method, r.path, handler);
    });
    return this;
  }
  basePath(path) {
    const subApp = this.clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  onError = (handler) => {
    this.errorHandler = handler;
    return this;
  };
  notFound = (handler) => {
    this.notFoundHandler = handler;
    return this;
  };
  mount(path, applicationHandler, optionHandler) {
    const mergedPath = mergePath(this._basePath, path);
    const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
    const handler = async (c, next) => {
      let executionContext = void 0;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      const options = optionHandler ? optionHandler(c) : [c.env, executionContext];
      const optionsArray = Array.isArray(options) ? options : [options];
      const queryStrings = getQueryStrings(c.req.url);
      const res = await applicationHandler(
        new Request(
          new URL((c.req.path.slice(pathPrefixLength) || "/") + queryStrings, c.req.url),
          c.req.raw
        ),
        ...optionsArray
      );
      if (res) {
        return res;
      }
      await next();
    };
    this.addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler);
    return this;
  }
  addRoute(method, path, handler) {
    method = method.toUpperCase();
    path = mergePath(this._basePath, path);
    const r = { path, method, handler };
    this.router.add(method, path, [handler, r]);
    this.routes.push(r);
  }
  matchRoute(method, path) {
    return this.router.match(method, path);
  }
  handleError(err, c) {
    if (err instanceof Error) {
      return this.errorHandler(err, c);
    }
    throw err;
  }
  dispatch(request, executionCtx, env2, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.dispatch(request, executionCtx, env2, "GET")))();
    }
    const path = this.getPath(request, { env: env2 });
    const matchResult = this.matchRoute(method, path);
    const c = new Context(new HonoRequest(request, path, matchResult), {
      env: env2,
      executionCtx,
      notFoundHandler: this.notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.notFoundHandler(c);
        });
      } catch (err) {
        return this.handleError(err, c);
      }
      return res instanceof Promise ? res.then(
        (resolved) => resolved || (c.finalized ? c.res : this.notFoundHandler(c))
      ).catch((err) => this.handleError(err, c)) : res;
    }
    const composed = compose(matchResult[0], this.errorHandler, this.notFoundHandler);
    return (async () => {
      try {
        const context = await composed(c);
        if (!context.finalized) {
          throw new Error(
            "Context is not finalized. You may forget returning Response object or `await next()`"
          );
        }
        return context.res;
      } catch (err) {
        return this.handleError(err, c);
      }
    })();
  }
  fetch = (request, Env, executionCtx) => {
    return this.dispatch(request, executionCtx, Env, request.method);
  };
  request = (input, requestInit, Env, executionCtx) => {
    if (input instanceof Request) {
      if (requestInit !== void 0) {
        input = new Request(input, requestInit);
      }
      return this.fetch(input, Env, executionCtx);
    }
    input = input.toString();
    const path = /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`;
    const req = new Request(path, requestInit);
    return this.fetch(req, Env, executionCtx);
  };
  fire = () => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.dispatch(event.request, event, void 0, event.request.method));
    });
  };
};

// node_modules/.deno/hono@4.1.0/node_modules/hono/dist/router/pattern-router/router.js
var PatternRouter = class {
  name = "PatternRouter";
  routes = [];
  add(method, path, handler) {
    const endsWithWildcard = path[path.length - 1] === "*";
    if (endsWithWildcard) {
      path = path.slice(0, -2);
    }
    const parts = path.match(/\/?(:\w+(?:{(?:(?:{[\d,]+})|[^}])+})?)|\/?[^\/\?]+|(\?)/g) || [];
    if (parts[parts.length - 1] === "?") {
      this.add(method, parts.slice(0, parts.length - 2).join(""), handler);
      parts.pop();
    }
    for (let i = 0, len = parts.length; i < len; i++) {
      const match = parts[i].match(/^\/:([^{]+)(?:{(.*)})?/);
      if (match) {
        parts[i] = `/(?<${match[1]}>${match[2] || "[^/]+"})`;
      } else if (parts[i] === "/*") {
        parts[i] = "/[^/]+";
      }
    }
    let re;
    try {
      re = new RegExp(`^${parts.join("")}${endsWithWildcard ? "" : "/?$"}`);
    } catch (e) {
      throw new UnsupportedPathError();
    }
    this.routes.push([re, method, handler]);
  }
  match(method, path) {
    const handlers = [];
    for (const [pattern, routeMethod, handler] of this.routes) {
      if (routeMethod === METHOD_NAME_ALL || routeMethod === method) {
        const match = pattern.exec(path);
        if (match) {
          handlers.push([handler, match.groups || {}]);
        }
      }
    }
    return [handlers];
  }
};

// node_modules/.deno/hono@4.1.0/node_modules/hono/dist/preset/tiny.js
var Hono2 = class extends Hono {
  constructor(options = {}) {
    super(options);
    this.router = new PatternRouter();
  }
};

// src/log.ts
var LEVEL = ["debug", "info", "warn", "error"];
var Logger = class {
  config;
  constructor(config) {
    const level = LEVEL.find((it) => it === config?.level) ?? "warn";
    this.config = {
      prefix: config?.prefix ?? "",
      level
    };
  }
  #write(level, ...data) {
    const { level: configLevel, prefix } = this.config;
    if (LEVEL.indexOf(level) < LEVEL.indexOf(configLevel)) {
      return;
    }
    console[level](`${(/* @__PURE__ */ new Date()).toISOString()} ${level.toUpperCase()}${prefix ? ` ${prefix}` : ""}`, ...data);
  }
  debug = (...data) => this.#write("debug", ...data);
  info = (...data) => this.#write("info", ...data);
  warn = (...data) => this.#write("warn", ...data);
  error = (...data) => this.#write("error", ...data);
};

// src/utils.ts
function getToken(headers) {
  for (const [k, v] of Object.entries(headers)) {
    if (k.toLowerCase() === "authorization") {
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
  const url = new RequestUrl(
    model,
    "generateContent" /* GENERATE_CONTENT */,
    /* stream */
    false,
    apiParam
  );
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
    response = await fetch(url.toString(), {
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
      } catch (e) {
      }
      throw new Error(`[${response.status} ${response.statusText}] ${message}`);
    }
  } catch (e) {
    const err = new GoogleGenerativeAIError(`Error fetching from ${url.toString()}: ${e.message}`);
    err.stack = e.stack;
    throw err;
  }
  return response;
}
var RequestUrl = class {
  constructor(model, task, stream2, apiParam) {
    this.model = model;
    this.task = task;
    this.stream = stream2;
    this.apiParam = apiParam;
  }
  toString() {
    const urlSearchParams = new URLSearchParams({
      key: this.apiParam.apikey
    });
    if (this.stream) {
      urlSearchParams.append("alt", "sse");
    }
    const api_version = this.apiParam.useBeta ? "v1beta" /* v1beta */ : "v1" /* v1 */;
    const url = `${BASE_URL}/${api_version}/models/${this.model}:${this.task}?${urlSearchParams.toString()}`;
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
var nonStreamingChatProxyHandler = async (c, req, apiParam) => {
  const log2 = c.var.log;
  const [model, geminiReq] = genModel(req);
  const geminiResp = await generateContent(apiParam, model, geminiReq).then((it) => it.response.text()).catch((err) => {
    log2.error(req);
    log2.error(err?.message ?? err.toString());
    return err?.message ?? err.toString();
  });
  log2.debug(req);
  log2.debug(geminiResp);
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
  return c.json(resp);
};

// node_modules/.deno/hono@4.1.0/node_modules/hono/dist/utils/stream.js
var StreamingApi = class {
  writer;
  encoder;
  writable;
  abortSubscribers = [];
  responseReadable;
  constructor(writable, _readable) {
    this.writable = writable;
    this.writer = writable.getWriter();
    this.encoder = new TextEncoder();
    const reader = _readable.getReader();
    this.abortSubscribers.push(async () => {
      await reader.cancel();
    });
    this.responseReadable = new ReadableStream({
      async pull(controller) {
        const { done, value } = await reader.read();
        done ? controller.close() : controller.enqueue(value);
      },
      cancel: () => {
        this.abortSubscribers.forEach((subscriber) => subscriber());
      }
    });
  }
  async write(input) {
    try {
      if (typeof input === "string") {
        input = this.encoder.encode(input);
      }
      await this.writer.write(input);
    } catch (e) {
    }
    return this;
  }
  async writeln(input) {
    await this.write(input + "\n");
    return this;
  }
  sleep(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }
  async close() {
    try {
      await this.writer.close();
    } catch (e) {
    }
  }
  async pipe(body) {
    this.writer.releaseLock();
    await body.pipeTo(this.writable, { preventClose: true });
    this.writer = this.writable.getWriter();
  }
  onAbort(listener) {
    this.abortSubscribers.push(listener);
  }
};

// node_modules/.deno/hono@4.1.0/node_modules/hono/dist/helper/streaming/sse.js
var SSEStreamingApi = class extends StreamingApi {
  constructor(writable, readable) {
    super(writable, readable);
  }
  async writeSSE(message) {
    const data = message.data.split("\n").map((line) => {
      return `data: ${line}`;
    }).join("\n");
    const sseData = [
      message.event && `event: ${message.event}`,
      data,
      message.id && `id: ${message.id}`,
      message.retry && `retry: ${message.retry}`
    ].filter(Boolean).join("\n") + "\n\n";
    await this.write(sseData);
  }
};
var setSSEHeaders = (context) => {
  context.header("Transfer-Encoding", "chunked");
  context.header("Content-Type", "text/event-stream");
  context.header("Cache-Control", "no-cache");
  context.header("Connection", "keep-alive");
};
var streamSSE = (c, cb, onError) => {
  const { readable, writable } = new TransformStream();
  const stream2 = new SSEStreamingApi(writable, readable);
  (async () => {
    try {
      await cb(stream2);
    } catch (e) {
      if (e instanceof Error && onError) {
        await onError(e, stream2);
      } else {
        console.error(e);
      }
    } finally {
      stream2.close();
    }
  })();
  setSSEHeaders(c);
  return c.newResponse(stream2.responseReadable);
};

// src/openai/chat/completions/StreamingChatProxyHandler.ts
var streamingChatProxyHandler = async (c, req, genAi) => {
  const log2 = c.var.log;
  const genOpenAiResp = (content, stop) => ({
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
  });
  return streamSSE(c, async (sseStream) => {
    const [model, geminiReq] = genModel(req);
    const geminiResp = await generateContent(genAi, model, geminiReq).then((it) => it.response.text()).catch((e) => e.message ?? e?.toString());
    await sseStream.writeSSE({
      data: JSON.stringify(genOpenAiResp(geminiResp, false))
    });
    await sseStream.writeSSE({
      data: JSON.stringify(genOpenAiResp("", true))
    });
    const geminiResult = geminiResp;
    log2.debug(req);
    log2.debug(geminiResult);
    await sseStream.writeSSE({ data: "[DONE]" });
    await sseStream.close();
  });
};

// src/openai/chat/completions/ChatProxyHandler.ts
var chatProxyHandler = async (c) => {
  const log2 = c.var.log;
  const req = await c.req.json();
  log2.debug(req);
  const headers = c.req.header();
  const apiParam = getToken(headers);
  if (apiParam == null) {
    return c.text("Unauthorized", 401);
  }
  if (req.stream === true) {
    return streamingChatProxyHandler(c, req, apiParam);
  }
  return nonStreamingChatProxyHandler(c, req, apiParam);
};

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
var models = async (c) => {
  return c.json({
    object: "list",
    data: modelData
  });
};
var modelDetail = async (c) => {
  const model = c.req.param("model");
  return c.json(modelData.find((it) => it.id === model));
};

// src/app.ts
var geminiProxy = async (c) => {
  const rawReq = c.req.raw;
  const url = new URL(rawReq.url);
  url.host = "generativelanguage.googleapis.com";
  url.port = "";
  url.protocol = "https:";
  const req = new Request(url, rawReq.clone());
  const resp = await fetch(req);
  return c.newResponse(resp.body, resp);
};
var app = new Hono2({ strict: true }).use("*", cors(), timing(), logger()).use("*", async (c, next) => {
  const logger2 = new Logger({
    level: env(c)?.LogLevel,
    prefix: crypto.randomUUID()
  });
  c.set("log", logger2);
  await next();
  c.set("log", void 0);
}).options("*", (c) => c.text("", 204)).get("/", (c) => {
  const origin = new URL(c.req.url).origin;
  return c.text(`
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
}).post("/v1/chat/completions", chatProxyHandler).get("/v1/models", models).get("/v1/models/:model", modelDetail).post(":model_version/models/:model_and_action", geminiProxy);

// main_bun.ts
console.log("Listening on http://localhost:8000/");
Bun.serve({
  port: 8e3,
  fetch: app.fetch
});
