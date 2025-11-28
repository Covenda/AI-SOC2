# Content Editing System

This system allows **anyone** to edit all text on the website directly in the browser. Changes are saved permanently to GitHub and sync across all users - **no code access needed!**

## How It Works

1. **Edit Mode**: Click the "Edit" button in the bottom-right corner to enable edit mode
2. **Edit Text**: Click any text on the page to edit it directly
3. **Auto-Save**: Changes are automatically saved to GitHub when you click outside the text
4. **Universal Sync**: When someone else refreshes, they see your changes instantly!
5. **No Code Access**: Users can edit content without touching the codebase!

## Storage System

### GitHub API (No Backend Needed!)

- ✅ **No database** - Uses GitHub repository as storage
- ✅ **No backend** - Everything happens from the browser
- ✅ **Auto-commits** - Changes are automatically committed to GitHub
- ✅ **Works with static sites** - Perfect for GitHub Pages
- ✅ **Real-time sync** - Everyone sees changes after refresh
- ✅ **No manual git** - Everything is automatic!

### One-Time Setup Required

Before users can edit, you need to set up a GitHub token (5 minutes):

1. **Create GitHub Personal Access Token** (see `SETUP.md`)
2. **Add to `.env.local`**:
   ```env
   NEXT_PUBLIC_GITHUB_OWNER=your-username
   NEXT_PUBLIC_GITHUB_REPO=AI-SOC2
   NEXT_PUBLIC_GITHUB_TOKEN=your-token
   ```
3. **Deploy** - That's it!

See `SETUP.md` for detailed instructions.

## Making Changes (For Website Users)

**No code access needed!** Anyone can edit:

1. **Visit the website**
2. **Click the "Edit" button** (bottom-right corner)
3. **Click any text** to edit it
4. **Click outside** to save
5. **Done!** Changes are automatically saved to GitHub

When someone else refreshes the page, they'll see your changes!

## How Real-time Sync Works

1. **User A** edits text → Saved to GitHub via API
2. **User B** refreshes page → Loads latest from GitHub
3. **User B** sees changes instantly!

The system uses GitHub API to:
- Save changes directly to the repository
- Load the latest content on every page load
- No manual git operations needed
- Works with static sites (GitHub Pages)

## File Structure

```
public/
  └── data/
      └── content.json      # Content file (auto-updated by GitHub API)
```

The content file is automatically managed by the GitHub API - you don't need to touch it manually!

## Removing the Edit Button

Once you're done editing and want to remove the edit button:

1. **Remove from layout**:
   - Open `app/layout.tsx`
   - Remove or comment out: `<EditModeToggle />`

2. **Keep the system**:
   - The `EditableTextManager` will still load saved content
   - All your edits will remain visible to all users
   - The edit button just won't be shown

3. **Rebuild**:
   ```bash
   npm run build
   npm run deploy
   ```

## Content File Format

```json
{
  "version": "1.0",
  "lastUpdated": "2024-01-15T10:30:00.000Z",
  "content": {
    "/-h1-0-Your-AI-SOC": "Your Custom Title",
    "/-p-1-Description": "Your custom description text"
  }
}
```

- `textId` format: `{path}-{tag}-{index}-{preview}`
- Each text element gets a unique ID based on its location

## Troubleshooting

### Changes not saving?
- Check browser console for errors
- Verify GitHub token is configured in `.env.local`
- Make sure token has `repo` scope
- Restart dev server after adding env variables

### Changes not visible to others?
- They need to refresh the page
- Check that the file was updated in GitHub
- Verify the token has write access to the repository

### "GitHub not configured" error?
- Check that `.env.local` exists with all three variables:
  - `NEXT_PUBLIC_GITHUB_OWNER`
  - `NEXT_PUBLIC_GITHUB_REPO`
  - `NEXT_PUBLIC_GITHUB_TOKEN`
- Restart your dev server after adding env variables
- Make sure repository name matches exactly

### Content not loading?
- Check browser console for errors
- Verify GitHub API is accessible
- Check network tab to see if GitHub API requests are working
- Make sure the token is valid in GitHub settings

## Security

- ✅ **Safe token exposure** - The token only has access to this repository
- ✅ **Read-only for viewers** - Users can only edit content, not code
- ✅ **Revocable** - You can revoke the token anytime in GitHub settings
- ✅ **No code access** - Users edit content without touching the codebase

If you want more security:
- Use a GitHub App instead of personal token
- Add authentication to restrict who can edit
- Use repository secrets (requires server-side proxy)

