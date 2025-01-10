#----------------
FROM denoland/deno:latest AS builder
WORKDIR /data
COPY . .
RUN deno task build:deno

#----------------

FROM oven/bun:latest
WORKDIR /data
COPY  --from=builder /data/dist/main_bun.mjs app.mjs
CMD ["bun", "run", "app.mjs"]