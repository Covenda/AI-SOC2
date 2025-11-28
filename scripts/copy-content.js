#!/usr/bin/env node

/**
 * Copy content to public folder
 * This ensures content.json is available in static builds
 * Run this before building: npm run build
 */

const fs = require('fs');
const path = require('path');

const sourceFile = path.join(process.cwd(), 'data', 'content.json');
const destFile = path.join(process.cwd(), 'public', 'data', 'content.json');

// Ensure public/data directory exists
const publicDataDir = path.dirname(destFile);
if (!fs.existsSync(publicDataDir)) {
  fs.mkdirSync(publicDataDir, { recursive: true });
}

// Copy file if it exists
if (fs.existsSync(sourceFile)) {
  fs.copyFileSync(sourceFile, destFile);
  console.log('✅ Content copied to public/data/content.json');
} else {
  // Create empty content file if it doesn't exist
  const emptyContent = {
    version: '1.0',
    lastUpdated: null,
    content: {},
  };
  fs.writeFileSync(destFile, JSON.stringify(emptyContent, null, 2), 'utf-8');
  console.log('✅ Created empty content file in public/data/content.json');
}

