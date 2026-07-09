# ============================================================================
# Stage 1: Base — Node.js LTS + pnpm
# ============================================================================
FROM node:22-alpine AS base

# Install pnpm globally
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# ============================================================================
# Stage 2: Dependencies — install ALL deps (dev + prod) for building
# ============================================================================
FROM base AS deps

# Native build tools required by better-sqlite3 and @swc/core
RUN apk add --no-cache python3 make g++

# Copy dependency manifests
COPY package.json pnpm-lock.yaml .npmrc ./

# PERBAIKAN: Ditambahkan env var untuk bypass blokir skrip pnpm v10
RUN PNPM_ALLOW_ONLY_BUILT_DEPENDENCIES=1 pnpm install --frozen-lockfile

# ============================================================================
# Stage 3: Build — compile TypeScript to JavaScript
# ============================================================================
FROM deps AS build

# Copy the full source code
COPY . .

# Build the AdonisJS project (outputs to ./build)
RUN node ace build

# ============================================================================
# Stage 4: Production deps — install only prod deps with native build tools
# ============================================================================
FROM base AS prod-deps

# Native build tools for better-sqlite3
RUN apk add --no-cache python3 make g++

COPY --from=build /app/build/package.json /app/build/pnpm-lock.yaml ./
COPY --from=build /app/.npmrc ./

# PERBAIKAN: Ditambahkan juga di sini karena pnpm mengulang proses build biner untuk prod
RUN PNPM_ALLOW_ONLY_BUILT_DEPENDENCIES=1 pnpm install --frozen-lockfile --prod

# ============================================================================
# Stage 5: Production — lean runtime image
# ============================================================================
FROM base AS production

ENV NODE_ENV=production

WORKDIR /app

# Copy the compiled build output
COPY --from=build /app/build ./

# Copy production node_modules (with native modules already built)
COPY --from=prod-deps /app/node_modules ./node_modules

# AdonisJS default port
EXPOSE 3333

# Start the server
CMD ["node", "bin/server.js"]