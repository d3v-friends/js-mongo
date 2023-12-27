#!/bin/bash
set -e

TAG1="docker.stdlib.in/mango-arm64:jammy"

docker build \
  -t "$TAG1" \
  -f ./dockerfile .
docker push "$TAG1"
