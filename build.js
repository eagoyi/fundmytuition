#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const root = __dirname;
const clientDir = path.join(root, 'client');

console.log('[v0] Starting build process...');
console.log('[v0] Root directory:', root);
console.log('[v0] Client directory:', clientDir);

try {
  // Check if client directory exists
  if (!fs.existsSync(clientDir)) {
    throw new Error(`Client directory not found: ${clientDir}`);
  }

  // Install root dependencies
  console.log('[v0] Installing root dependencies...');
  execSync('npm ci --omit=optional', { cwd: root, stdio: 'inherit' });

  // Install client dependencies
  console.log('[v0] Installing client dependencies...');
  execSync('npm ci --omit=optional', { cwd: clientDir, stdio: 'inherit' });

  // Build React client
  console.log('[v0] Building React client...');
  execSync('npm run build', { cwd: clientDir, stdio: 'inherit' });

  // Compile TypeScript backend
  console.log('[v0] Compiling TypeScript backend...');
  execSync('npm run compile', { cwd: root, stdio: 'inherit' });

  console.log('[v0] Build completed successfully!');
} catch (error) {
  console.error('[v0] Build failed:', error.message);
  process.exit(1);
}
