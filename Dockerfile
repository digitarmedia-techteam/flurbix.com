# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the project
RUN npm run build

# Production stage
FROM node:18-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

# Copy built files and dependencies from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next

# Expose port 3005
EXPOSE 3005

# Start the Next.js server
CMD ["npm", "run", "start"]