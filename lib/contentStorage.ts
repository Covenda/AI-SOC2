/**
 * Content Storage System
 * Uses GitHub API to store content - no backend needed!
 * Changes are saved directly to the repository from the browser
 */

import { getContentFromGitHub, updateContentInGitHub } from './githubApi';

export interface ContentData {
  version: string;
  lastUpdated: string | null;
  content: Record<string, string>;
}

// Fallback: try loading from public folder (for static builds)
const CONTENT_FILE = '/data/content.json';

/**
 * Load content from GitHub API (or fallback to static file)
 */
export async function loadContent(): Promise<ContentData> {
  // Try GitHub API first
  const githubContent = await getContentFromGitHub();
  if (githubContent) {
    return githubContent;
  }

  // Fallback to static file
  try {
    const response = await fetch(CONTENT_FILE);
    if (!response.ok) {
      return { version: '1.0', lastUpdated: null, content: {} };
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.warn('Failed to load content, using empty data:', error);
    return { version: '1.0', lastUpdated: null, content: {} };
  }
}

/**
 * Save content via GitHub API (auto-commits to repo)
 * Works directly from browser - no backend needed!
 */
export async function saveContent(textId: string, text: string): Promise<boolean> {
  try {
    // Save directly to GitHub from browser
    const result = await updateContentInGitHub([{ textId, text }]);
    
    if (result.success) {
      // Also save to localStorage as backup
      localStorage.setItem(`editable-text-${textId}`, text);
      return true;
    } else {
      // GitHub save failed, use localStorage as fallback
      console.warn('GitHub save failed, using localStorage:', result.message);
      localStorage.setItem(`editable-text-${textId}`, text);
      return false;
    }
  } catch (error) {
    console.error('Failed to save content:', error);
    // Fallback to localStorage
    localStorage.setItem(`editable-text-${textId}`, text);
    return false;
  }
}

/**
 * Get content for a specific text ID
 */
export async function getContent(textId: string): Promise<string | null> {
  try {
    const contentData = await loadContent();
    return contentData.content[textId] || null;
  } catch (error) {
    console.error('Failed to get content:', error);
    // Fallback to localStorage
    return localStorage.getItem(`editable-text-${textId}`);
  }
}

/**
 * Export all content to JSON (for git commits)
 */
export async function exportContent(): Promise<ContentData> {
  const contentData = await loadContent();
  
  // Also merge localStorage content
  const localStorageContent: Record<string, string> = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith('editable-text-')) {
      const textId = key.replace('editable-text-', '');
      localStorageContent[textId] = localStorage.getItem(key) || '';
    }
  }

  // Merge localStorage into content
  Object.assign(contentData.content, localStorageContent);
  contentData.lastUpdated = new Date().toISOString();

  return contentData;
}

