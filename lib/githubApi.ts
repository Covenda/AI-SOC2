/**
 * GitHub API Integration
 * Auto-commits content changes directly to the repository
 * No manual git operations needed!
 */

const GITHUB_OWNER = process.env.NEXT_PUBLIC_GITHUB_OWNER || '';
const GITHUB_REPO = process.env.NEXT_PUBLIC_GITHUB_REPO || '';
const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN || '';
const CONTENT_FILE_PATH = 'public/data/content.json';

interface ContentData {
  version: string;
  lastUpdated: string | null;
  content: Record<string, string>;
}

/**
 * Get the current content file from GitHub
 */
export async function getContentFromGitHub(): Promise<ContentData | null> {
  if (!GITHUB_OWNER || !GITHUB_REPO || !GITHUB_TOKEN) {
    return null;
  }

  try {
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${CONTENT_FILE_PATH}`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      if (response.status === 404) {
        // File doesn't exist yet, return empty content
        return { version: '1.0', lastUpdated: null, content: {} };
      }
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();
    const content = atob(data.content.replace(/\s/g, ''));
    return JSON.parse(content) as ContentData;
  } catch (error) {
    console.error('Failed to get content from GitHub:', error);
    return null;
  }
}

/**
 * Update content file on GitHub (auto-commit)
 */
export async function updateContentInGitHub(
  updates: Array<{ textId: string; text: string }>
): Promise<{ success: boolean; message: string }> {
  if (!GITHUB_OWNER || !GITHUB_REPO || !GITHUB_TOKEN) {
    return { success: false, message: 'GitHub not configured' };
  }

  try {
    // Get current file content
    let currentContent: ContentData = { version: '1.0', lastUpdated: null, content: {} };
    let sha: string | undefined;

    try {
      const getResponse = await fetch(
        `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${CONTENT_FILE_PATH}`,
        {
          headers: {
            Accept: 'application/vnd.github.v3+json',
            Authorization: `token ${GITHUB_TOKEN}`,
          },
        }
      );

      if (getResponse.ok) {
        const data = await getResponse.json();
        const content = atob(data.content.replace(/\s/g, ''));
        currentContent = JSON.parse(content);
        sha = data.sha;
      }
    } catch (error) {
      // File doesn't exist, will create new one
    }

    // Apply updates
    updates.forEach(({ textId, text }) => {
      currentContent.content[textId] = text;
    });
    currentContent.lastUpdated = new Date().toISOString();

    // Commit to GitHub
    const contentBase64 = btoa(JSON.stringify(currentContent, null, 2));
    const commitMessage = `Update content: ${updates.length} change(s)`;

    const putResponse = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${CONTENT_FILE_PATH}`,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/vnd.github.v3+json',
          Authorization: `token ${GITHUB_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: commitMessage,
          content: contentBase64,
          sha: sha, // Include SHA if updating existing file
        }),
      }
    );

    if (!putResponse.ok) {
      const error = await putResponse.json();
      throw new Error(error.message || 'Failed to update GitHub');
    }

    return { success: true, message: 'Content saved to GitHub' };
  } catch (error: any) {
    console.error('Failed to update GitHub:', error);
    return { success: false, message: error.message || 'Failed to save' };
  }
}

/**
 * Batch update multiple content items
 */
export async function batchUpdateContent(
  updates: Array<{ textId: string; text: string }>
): Promise<{ success: boolean; message: string }> {
  return updateContentInGitHub(updates);
}

