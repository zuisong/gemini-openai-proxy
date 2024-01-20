#----------------
FROM oven/bun:1-alpine as builder
WORKDIR /data
COPY . .
RUN bun install && bun run build

#----------------

FROM oven/bun:1-alpine
WORKDIR /data
COPY  --from=builder /data/dist/main_bun.mjs app.mjs
CMD ["bun", "app.mjs"]