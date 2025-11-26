# Build React/Vite App (ARM64)
FROM --platform=linux/arm64 public.ecr.aws/docker/library/node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Serve with Nginx (ARM64)
FROM --platform=linux/arm64 public.ecr.aws/docker/library/nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
