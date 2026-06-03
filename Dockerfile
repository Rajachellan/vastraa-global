FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG NEXT_PUBLIC_API_URL=https://api.vastraaglobal.com/api
ARG NEXT_PUBLIC_API_ORIGIN=https://api.vastraaglobal.com
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_ORIGIN=$NEXT_PUBLIC_API_ORIGIN

# Fail fast if Jenkins did not pull the LFS video (pointer files are ~130 bytes).
RUN VIDEO="public/vastraa_home_banner.mp4" && \
    test -f "$VIDEO" && \
    SIZE=$(wc -c < "$VIDEO" | tr -d " ") && \
    if [ "$SIZE" -lt 10000000 ]; then \
      echo "ERROR: $VIDEO is $SIZE bytes. Run git lfs pull before docker build." >&2; \
      exit 1; \
    fi

RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=7007
ENV HOSTNAME=0.0.0.0

RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 7007
CMD ["node", "server.js"]
