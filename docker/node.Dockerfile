#----------------
FROM denoland/deno:latest as builder
WORKDIR /data
COPY . .
RUN deno task build:deno

#----------------
FROM node:latest
WORKDIR /data
COPY  --from=builder /data/dist/main_node.mjs app.mjs
CMD ["node", "app.mjs"]