#----------------
FROM lukechannings/deno:latest as builder
WORKDIR /data
COPY . .
RUN deno task build:deno

#----------------

FROM oven/bun:1-alpine
WORKDIR /data
COPY  --from=builder /data/dist/main_bun.mjs app.mjs
CMD ["bun", "app.mjs"]