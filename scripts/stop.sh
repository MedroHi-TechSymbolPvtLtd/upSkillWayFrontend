#!/bin/bash
set -e
DIR="$(cd "$(dirname "$0")" && pwd)"

# Call your real stop script if it exists
if [ -f "$DIR/stop_docker.sh" ]; then
  /bin/bash "$DIR/stop_docker.sh"
  exit 0
fi

# Fallback: stop container named 'upskillway' (safe)
docker ps -q --filter "name=upskillway" | xargs -r docker stop || true
