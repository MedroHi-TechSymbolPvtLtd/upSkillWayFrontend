# Build React/Vite App (ARM64)
FROM --platform=linux/arm64 public.ecr.aws/docker/library/node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
COPY .env.production .env.production  # Explicitly ensure it is included

COPY . .
RUN npm run build

# Serve with Nginx (ARM64)
FROM --platform=linux/arm64 public.ecr.aws/docker/library/nginx:alpine

# Create SSL directory in container
RUN mkdir -p /etc/nginx/ssl

# Copy Cloudflare Origin SSL into container (from repo)
COPY certs/origin.crt /etc/nginx/ssl/origin.crt
COPY certs/origin.key /etc/nginx/ssl/origin.key

# Set permissions
RUN chmod 600 /etc/nginx/ssl/origin.key && \
    chmod 644 /etc/nginx/ssl/origin.crt

# Copy custom NGINX config (HTTPS + redirect)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built project
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
