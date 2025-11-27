#!/bin/bash
set -e

echo "Stopping existing container if running..."

docker ps -q --filter "name=upskillway" | xargs -r docker stop || true
docker ps -aq --filter "name=upskillway" | xargs -r docker rm || true

echo "Old container stopped successfully!"
