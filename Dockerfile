# Stage 1: dependencies
FROM node:20-alpine AS dependencies
WORKDIR /app

# Copy packages files and install dependencies
COPY package.json package-lock.json* ./
RUN npm ci


# Stage 2: builder 
FROM node:20-alpine AS builder
WORKDIR /app

# Copy dependencies install output from the dependencies stage
COPY --from=dependencies /app/node_modules ./node_modules

# Copy source code
COPY . .

# Build the Next.js application
RUN npm run build


# Stage 3: runner : production image
FROM node:20-alpine AS runner
WORKDIR /app

# Create a non-root user for security and restricted privileges 
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs


# Copy the standalone build output
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to non-root user
USER nextjs

# Cloud Run sets the PORT environment variable
EXPOSE 8080
ENV PORT=8080
ENV HOSTNAME="0.0.0.0"
ENV NODE_ENV=development

#rest environment in .env.development

# Start the application
CMD ["node", "server.js"]



# Build the Docker image locally
# docker build -t tourid_frontend_images .

# Run it locally in port 8080
# docker run --name tourid-fe-container -p 8080:8080 --env-file .env.development tourid_frontend_images
