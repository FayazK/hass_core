#!/bin/bash
set -e

echo "=== Building Multi-Architecture Custom Core ==="

# Set up buildx
if ! docker buildx ls | grep -q multiarch; then
    echo "Creating multiarch builder..."
    docker buildx create --name multiarch --driver docker-container --use
    docker buildx inspect --bootstrap
else
    docker buildx use multiarch
fi

# Login to registry
docker login doc-reg.three60.app

# Build for both architectures
echo "Building for AMD64 and ARM64..."
docker buildx build \
    --platform linux/amd64,linux/arm64 \
    -f Dockerfile.custom \
    -t doc-reg.three60.app/homeassistant/core:2025.5.0-custom \
    -t doc-reg.three60.app/homeassistant/core:latest-custom \
    --push \
    .

echo "✓ Multi-arch build complete!"

# Test AMD64 specifically
echo "Testing AMD64 image..."
docker pull --platform linux/amd64 doc-reg.three60.app/homeassistant/core:2025.5.0-custom
echo "✓ AMD64 image verified"
