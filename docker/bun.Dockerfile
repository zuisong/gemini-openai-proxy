ARG NODE_VERSION=21-alpine
ARG BUN_VERSION=1

#----------------
FROM node:${NODE_VERSION} as builder
WORKDIR /data
COPY . .
RUN npm install -g pnpm && pnpm install && npm run build

#----------------

FROM oven/bun:${BUN_VERSION}-alpine
WORKDIR /data
COPY  --from=builder /data/dist/main_bun.mjs app.mjs
CMD ["bun", "app.mjs"]