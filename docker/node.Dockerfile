#----------------
FROM lukechannings/deno:latest as builder
WORKDIR /data
COPY . .
RUN deno task build:deno

#----------------
FROM node:21-alpine
WORKDIR /data
COPY  --from=builder /data/dist/main_node.mjs app.mjs
CMD ["node", "app.mjs"]