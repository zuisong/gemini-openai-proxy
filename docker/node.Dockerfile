#----------------
FROM oven/bun:1-alpine as builder
WORKDIR /data
COPY . .
RUN bun install && bun run build

#----------------
FROM node:21-alpine
WORKDIR /data
COPY  --from=builder /data/dist/main_node.mjs app.mjs
CMD ["node", "app.mjs"]