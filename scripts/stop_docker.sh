#!/bin/bash

echo "Stopping old container if running..."
docker stop upskillway || true

echo "Removing old container..."
docker rm upskillway || true

echo "Pruning unused Docker resources..."
docker system prune -f || true
