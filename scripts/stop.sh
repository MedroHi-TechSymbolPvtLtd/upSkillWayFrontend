#!/bin/bash

echo "Running ApplicationStop..."

# Check if docker exists
if ! command -v docker &> /dev/null
then
    echo "Docker not installed on this instance. Skipping stop."
    exit 0
fi

CONTAINER="upskillway"

if docker ps -q --filter "name=$CONTAINER" | grep -q .
then
    echo "Stopping running container: $CONTAINER"
    docker stop $CONTAINER || true
    docker rm $CONTAINER || true
else
    echo "No running container found. Skipping..."
fi

echo "ApplicationStop completed successfully."
