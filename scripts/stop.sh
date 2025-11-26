#!/bin/bash
set -e
DIR="$(cd "$(dirname "$0")" && pwd)"

if [ -f "$DIR/stop_docker.sh" ]; then
  /bin/bash "$DIR/stop_docker.sh"
  exit 0
fi

docker ps -q --filter "name=upskillway" | xargs -r docker stop || true
