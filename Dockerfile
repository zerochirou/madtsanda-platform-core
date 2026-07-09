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

# Copy dependency manifests
COPY package.json pnpm-lock.yaml .npmrc ./

# Install all dependencies (including devDependencies for the build step)
# RUN pnpm install --frozen-lockfile
RUN pnpm install

# ============================================================================
# Stage 3: Build — compile TypeScript to JavaScript
# ============================================================================
FROM deps AS build

# Copy the full source code
COPY . .

# Build the AdonisJS project (outputs to ./build)
RUN node ace build

# ============================================================================
# Stage 4: Production — lean runtime image
# ============================================================================
FROM base AS production

ENV NODE_ENV=production

WORKDIR /app

# Copy the compiled build output
COPY --from=build /app/build ./

# Copy .npmrc for pnpm config consistency
COPY --from=build /app/.npmrc ./

# Install production-only dependencies inside the build output
RUN pnpm install --frozen-lockfile --prod

# AdonisJS default port
EXPOSE 3333

# Start the server
CMD ["node", "bin/server.js"]
