# Stage 1: Install dependencies and build the Next.js app
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Create a lightweight image for serving the Next.js app
FROM node:18-alpine AS runner

# Set environment to production
ENV NODE_ENV=production

# Set working directory
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./

# Install only production dependencies
RUN npm install --production

# Expose the port that the app will run on
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
