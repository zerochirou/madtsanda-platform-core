# ============================================================================
# Stage 1: Base
# ============================================================================
FROM node:24-alpine AS base

ARG PNPM_VERSION=11.0.0

RUN corepack enable && corepack prepare pnpm@${PNPM_VERSION} --activate

WORKDIR /app

# ============================================================================
# Stage 2: Dependencies
# ============================================================================
FROM base AS deps

RUN apk add --no-cache python3 make g++

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY .npmrc* ./

RUN pnpm install --frozen-lockfile

# ============================================================================
# Stage 3: Build
# ============================================================================
FROM deps AS build

COPY . .

ENV NODE_ENV=development

# RUN node ace build
RUN node ace build --ignore-ts-errors

# ============================================================================
# Stage 4: Production dependencies
# ============================================================================
FROM base AS prod-deps

RUN apk add --no-cache python3 make g++

COPY --from=build /app/build/package.json /app/build/pnpm-lock.yaml ./
COPY --from=build /app/pnpm-workspace.yaml ./
COPY --from=build /app/.npmrc* ./

ENV NODE_ENV=production

RUN pnpm install --frozen-lockfile --prod

# ============================================================================
# Stage 5: Runtime
# ============================================================================
FROM node:24-alpine AS production

WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3333

COPY --from=build /app/build ./
COPY --from=prod-deps /app/node_modules ./node_modules

EXPOSE 3333

CMD ["node", "bin/server.js"]