# PATH: /Dockerfile

FROM node:22-alpine AS build
WORKDIR /app
RUN apk add --no-cache git && git init -q
RUN corepack enable
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
