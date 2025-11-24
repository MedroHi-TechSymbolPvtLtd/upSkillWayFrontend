# Build React/Vite App (ARM64)
FROM --platform=linux/arm64 node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Serve with Nginx (ARM64)
FROM --platform=linux/arm64 nginx:alpine

# REMOVE DEFAULT NGINX CONFIG (VERY IMPORTANT)
RUN rm -f /etc/nginx/conf.d/default.conf

# Copy your custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built app
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
