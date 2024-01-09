ARG BUN_VERSION=1
FROM oven/bun:${BUN_VERSION}
WORKDIR /data
COPY . .
RUN bun install
CMD bun run start:bun
