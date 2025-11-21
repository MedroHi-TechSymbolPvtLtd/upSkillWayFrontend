# Step 1: Build React App (ARM64 Node)
FROM --platform=linux/arm64 node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Step 2: Serve with ARM64 Nginx
FROM --platform=linux/arm64 nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
