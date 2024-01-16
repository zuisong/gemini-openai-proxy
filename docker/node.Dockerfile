ARG NODE_VERSION=21
FROM node:${NODE_VERSION}
WORKDIR /data
COPY . .
RUN npm install -g pnpm && pnpm install
CMD npm run start:node
