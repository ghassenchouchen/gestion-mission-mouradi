/**
 * Post-build script: copies the Prisma generated client (pre-compiled CJS)
 * into dist/generated/prisma, replacing the tsc-compiled version which
 * contains incompatible ESM syntax (import.meta.url).
 */
const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', 'generated', 'prisma');
const dst = path.join(__dirname, '..', 'dist', 'generated', 'prisma');

// Remove the tsc-compiled version
fs.rmSync(dst, { recursive: true, force: true });

// Copy the original Prisma-generated files (which have proper CJS/ESM dual support)
fs.cpSync(src, dst, { recursive: true });

console.log('✓ Prisma client copied to dist/generated/prisma');
