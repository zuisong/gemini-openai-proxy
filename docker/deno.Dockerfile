ARG NODE_VERSION=21-alpine
ARG DENO_VERSION=latest
#----------------
FROM node:${NODE_VERSION} as builder
WORKDIR /data
COPY . .
RUN npm install -g pnpm && pnpm install && npm run build

#----------------
FROM lukechannings/deno:${DENO_VERSION} 
WORKDIR /data
COPY  --from=builder /data/dist/main_deno.mjs app.mjs
CMD ["run","--allow-net","app.mjs"]
