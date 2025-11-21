#!/bin/bash
set -e

REGION="ap-south-1"
ACCOUNT_ID="488479524661"
IMAGE_REPO="upskillway"

echo "🔐 Logging in to Amazon ECR..."
aws ecr get-login-password --region $REGION | \
docker login --username AWS --password-stdin $ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com

echo "🛑 Stopping old container if exists"
docker stop upskillway || true
docker rm upskillway || true

echo "📥 Pulling latest Docker image"
docker pull $ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/$IMAGE_REPO:latest

echo "🚀 Starting new container..."
docker run -d -p 80:80 --name upskillway $ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/$IMAGE_REPO:latest

echo "✨ Deployment complete!"
