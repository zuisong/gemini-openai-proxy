#----------------
FROM lukechannings/deno:latest as builder
WORKDIR /data
COPY . .
RUN deno task build:deno

#----------------
FROM lukechannings/deno:latest
WORKDIR /data
COPY  --from=builder /data/dist/main_deno.mjs app.mjs
ENTRYPOINT [ "" ]
CMD ["deno","run","--allow-net","app.mjs"]
