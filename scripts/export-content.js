#!/usr/bin/env node

/**
 * Export content script
 * This script exports all content edits to data/content.json
 * Run this after making edits to commit them to git
 * 
 * Usage: node scripts/export-content.js
 */

const fs = require('fs');
const path = require('path');

const contentFile = path.join(process.cwd(), 'data', 'content.json');
const publicContentFile = path.join(process.cwd(), 'public', 'data', 'content.json');

// Read existing content
let contentData = {
  version: '1.0',
  lastUpdated: null,
  content: {},
};

try {
  if (fs.existsSync(contentFile)) {
    const fileContent = fs.readFileSync(contentFile, 'utf-8');
    contentData = JSON.parse(fileContent);
  }
} catch (error) {
  console.warn('Could not read existing content file:', error.message);
}

// Update timestamp
contentData.lastUpdated = new Date().toISOString();

// Ensure directories exist
const dataDir = path.dirname(contentFile);
const publicDataDir = path.dirname(publicContentFile);

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

if (!fs.existsSync(publicDataDir)) {
  fs.mkdirSync(publicDataDir, { recursive: true });
}

// Write to both locations
fs.writeFileSync(contentFile, JSON.stringify(contentData, null, 2), 'utf-8');
fs.writeFileSync(publicContentFile, JSON.stringify(contentData, null, 2), 'utf-8');

console.log('✅ Content exported successfully!');
console.log(`   - ${contentData.lastUpdated}`);
console.log(`   - ${Object.keys(contentData.content).length} content items`);
console.log('\n📝 Next steps:');
console.log('   1. Review data/content.json');
console.log('   2. Commit to git: git add data/content.json public/data/content.json');
console.log('   3. git commit -m "Update content edits"');

