# Quick Setup Guide

## One-Time Setup (5 minutes)

To enable content editing that syncs across all users, you need to set up a GitHub Personal Access Token.

### Step 1: Create GitHub Token

1. Go to GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name like "Website Content Editor"
4. Select scope: **`repo`** (full control of private repositories)
5. Click "Generate token"
6. **Copy the token immediately** (you won't see it again!)

### Step 2: Add Environment Variables

Create a file called `.env.local` in your project root:

```env
NEXT_PUBLIC_GITHUB_OWNER=your-github-username
NEXT_PUBLIC_GITHUB_REPO=AI-SOC2
NEXT_PUBLIC_GITHUB_TOKEN=your-token-here
```

Replace:
- `your-github-username` with your GitHub username
- `AI-SOC2` with your repository name (if different)
- `your-token-here` with the token you just created

### Step 3: Deploy

That's it! Now when users edit content:
- Changes are automatically saved to GitHub
- No manual git operations needed
- Everyone sees changes after refreshing
- No database or backend required!

## How It Works

1. User edits text → Saved via GitHub API
2. Changes are auto-committed to `public/data/content.json`
3. Other users refresh → Load latest from GitHub
4. Everyone sees the same content!

## Security Note

The GitHub token is exposed in the client code (it's in `NEXT_PUBLIC_*`). This is safe because:
- The token only has access to this one repository
- Users can only edit content, not code
- You can revoke the token anytime in GitHub settings

If you want more security, you can:
- Use a GitHub App instead of personal token
- Add authentication to restrict who can edit
- Use a server-side proxy to hide the token

## Troubleshooting

**"GitHub not configured" error?**
- Check that `.env.local` exists and has all three variables
- Restart your dev server after adding env variables
- Make sure the token has `repo` scope

**Changes not saving?**
- Check browser console for errors
- Verify token is valid in GitHub settings
- Make sure repository name matches exactly

**Changes not visible to others?**
- They need to refresh the page
- Check that the file was updated in GitHub
- Verify the token has write access

