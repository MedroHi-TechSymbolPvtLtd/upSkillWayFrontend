#!/bin/bash
set -e

REGION="ap-south-1"
ACCOUNT_ID="488479524661"
IMAGE_REPO="upskillway"

echo " Logging in to Amazon ECR..."
aws ecr get-login-password --region $REGION | \
docker login --username AWS --password-stdin $ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com

echo " Stopping old container if exists"
docker stop upskillway || true
docker rm upskillway || true

echo " Pulling latest Docker image"
docker pull $ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/$IMAGE_REPO:latest

echo " Starting new container (running on port 8080)..."
docker run -d -p 8080:80 --restart always --name upskillway \
  $ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/$IMAGE_REPO:latest

echo " Deployment complete!"
