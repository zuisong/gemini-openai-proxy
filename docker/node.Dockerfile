ARG NODE_VERSION=21-alpine


#----------------
FROM node:${NODE_VERSION} as builder
WORKDIR /data
COPY . .
RUN npm install -g pnpm && pnpm install && npm run build

#----------------
FROM node:${NODE_VERSION}
WORKDIR /data
COPY  --from=builder /data/dist/main_node.mjs app.mjs
CMD ["node", "app.mjs"]