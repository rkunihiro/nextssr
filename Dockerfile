FROM node:18.14.0-bullseye-slim AS builder
ENV NODE_ENV=development
COPY . /app
WORKDIR /app
RUN npm ci && npm run build

FROM gcr.io/distroless/nodejs18-debian11:nonroot
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone /app
COPY --from=builder /app/.next/static /app/.next/static
COPY --from=builder /app/public /app/public
WORKDIR /app
CMD ["server.js"]
