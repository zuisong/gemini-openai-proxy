#----------------
FROM denoland/deno:latest AS builder
WORKDIR /data
COPY . .
RUN deno task build:deno

#----------------
FROM denoland/deno:latest
WORKDIR /data
COPY  --from=builder /data/dist/main_deno.mjs app.mjs
ENTRYPOINT [ "" ]
CMD ["deno","run","--allow-net","--allow-env","app.mjs"]
