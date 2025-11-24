# Build React/Vite App (ARM64)
FROM --platform=linux/arm64 node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Serve with Nginx (ARM64)
FROM --platform=linux/arm64 nginx:alpine

# REMOVE ALL DEFAULT NGINX CONFIGS
RUN rm -f /etc/nginx/conf.d/default.conf || true
RUN rm -f /etc/nginx/http.d/default.conf || true

# Copy your custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built frontend
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
