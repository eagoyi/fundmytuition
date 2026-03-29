#!/bin/bash
set -e

# Get the directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

echo "Current working directory: $(pwd)"
echo "Installing root dependencies..."
npm ci --omit=optional

echo "Installing client dependencies..."
cd client
npm ci --omit=optional
echo "Building React client..."
npm run build
cd ..

echo "Compiling TypeScript backend..."
npm run compile

echo "Build complete!"
