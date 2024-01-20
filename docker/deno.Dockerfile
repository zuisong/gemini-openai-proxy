#----------------
FROM oven/bun:1-alpine as builder
WORKDIR /data
COPY . .
RUN bun install && bun run build

#----------------
FROM lukechannings/deno:latest
WORKDIR /data
COPY  --from=builder /data/dist/main_deno.mjs app.mjs
ENTRYPOINT [ "" ]
CMD ["deno","run","--allow-net","app.mjs"]
