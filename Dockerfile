# ---------------------------------------------------------
# 1) Build Stage (Vite Build on x86_64)
# ---------------------------------------------------------
FROM --platform=linux/amd64 public.ecr.aws/docker/library/node:20-alpine AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all project files
COPY . .

# Ensure .env.production is copied
COPY .env.production /app/.env.production

# Build the Vite app
RUN npm run build

# ---------------------------------------------------------
# 2) Nginx Stage (Serve built static files)
# ---------------------------------------------------------
FROM --platform=linux/amd64 public.ecr.aws/docker/library/nginx:alpine

# Create SSL directory
RUN mkdir -p /etc/nginx/ssl

# Copy SSL certs
COPY certs/origin.crt /etc/nginx/ssl/origin.crt
COPY certs/origin.key /etc/nginx/ssl/origin.key

# Set correct permission
RUN chmod 600 /etc/nginx/ssl/origin.key && \
    chmod 644 /etc/nginx/ssl/origin.crt

# Copy your custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built assets
COPY --from=build /app/dist /usr/share/nginx/html

# Expose ports
EXPOSE 80 443

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
