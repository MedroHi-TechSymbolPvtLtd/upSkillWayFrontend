#!/bin/bash
set -e
DIR="$(cd "$(dirname "$0")" && pwd)"

if [ -x "$DIR/stop_docker.sh" ] || [ -f "$DIR/stop_docker.sh" ]; then
  /bin/bash "$DIR/stop_docker.sh"
  exit 0
fi

# fallback - stop container by name 'upskillway'
docker ps -q --filter "name=upskillway" | xargs -r docker stop || true
