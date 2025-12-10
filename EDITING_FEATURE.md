# Content Editing Feature

This document explains how to use the universal content editing feature that has been added to the website.

## Overview

The editing feature allows authenticated users to edit text content on the website. All edits are saved to a central database and synchronized across all devices in real-time.

## Features

- **Authentication**: Users must log in to edit content
- **In-place Editing**: Click the edit button (✏️) that appears when hovering over editable text
- **Real-time Sync**: Edits are automatically synchronized across all devices every 5 seconds
- **Visual Feedback**: Shows "Saved" indicator and last saved timestamp
- **Keyboard Shortcuts**: 
  - `Ctrl+Enter` (or `Cmd+Enter` on Mac) to save
  - `Esc` to cancel editing

## How to Use

### 1. Login

1. Navigate to `/login` or click the "Login" button in the navbar
2. Use the default credentials:
   - **Email**: `admin@covenda.com`
   - **Password**: `admin123`

### 2. Edit Content

1. Once logged in, hover over any editable text on the homepage
2. Click the edit icon (✏️) that appears
3. Make your changes in the textarea
4. Click "Save" or press `Ctrl+Enter` (or `Cmd+Enter` on Mac)
5. Your changes will be saved and visible to all users on all devices

### 3. View Edits

- Edits are automatically loaded when the page loads
- The component polls for updates every 5 seconds
- You'll see a "Last saved" timestamp when hovering over edited content

## Technical Details

### Architecture

- **Frontend**: React components with client-side state management
- **Backend**: Next.js API routes (`/api/auth/*` and `/api/edits`)
- **Storage**: In-memory storage (can be upgraded to a database)
- **Authentication**: Session-based authentication with cookies
- **Real-time Updates**: Polling mechanism (5-second intervals)

### Files Created

1. **Authentication System**:
   - `lib/auth.ts` - Authentication utilities
   - `app/api/auth/login/route.ts` - Login endpoint
   - `app/api/auth/logout/route.ts` - Logout endpoint
   - `app/api/auth/me/route.ts` - Current user endpoint
   - `app/login/page.tsx` - Login page
   - `components/AuthProvider.tsx` - Auth context provider

2. **Editing System**:
   - `lib/edits.ts` - Edit storage utilities
   - `app/api/edits/route.ts` - Edit CRUD endpoints
   - `components/EditableText.tsx` - Editable text component

3. **Integration**:
   - Updated `app/layout.tsx` to include AuthProvider
   - Updated `components/Navbar.tsx` to show login/logout
   - Updated `app/page.tsx` to use EditableText components

### Making More Content Editable

To make any text editable, wrap it with the `EditableText` component:

```tsx
import EditableText from '@/components/EditableText';
import { useAuth } from '@/components/AuthProvider';

export default function MyPage() {
  const { user } = useAuth();
  
  return (
    <EditableText
      elementId="unique-id-for-this-text"
      defaultText="Default text content"
      tag="h1" // or 'p', 'h2', 'span', etc.
      className="your-css-classes"
      isAuthenticated={!!user}
    />
  );
}
```

**Important**: Each `elementId` must be unique across the entire website.

## Production Considerations

### Current Limitations

1. **In-memory Storage**: Edits are stored in memory and will be lost on server restart
2. **Simple Authentication**: Uses plain text passwords (not hashed)
3. **No Database**: No persistent storage for edits or users

### Recommended Upgrades

1. **Database**: Replace in-memory storage with:
   - PostgreSQL/MySQL for relational data
   - MongoDB for document storage
   - Supabase/Firebase for managed solutions

2. **Authentication**: 
   - Hash passwords using bcrypt
   - Use NextAuth.js for production-grade auth
   - Add OAuth providers (Google, GitHub, etc.)

3. **Real-time Updates**:
   - Replace polling with WebSockets
   - Use Server-Sent Events (SSE)
   - Consider using Pusher or Ably for real-time infrastructure

4. **Security**:
   - Add rate limiting
   - Implement CSRF protection
   - Add input validation and sanitization
   - Use HTTPS in production

## Development

### Running the Development Server

```bash
npm run dev
```

### Building for Production

```bash
npm run build
npm start
```

**Note**: The project has been configured to support API routes. If you need static export for deployment (e.g., GitHub Pages), you'll need to use an external backend service or API.

## Default Credentials

- **Email**: `admin@covenda.com`
- **Password**: `admin123`

**⚠️ Change these credentials before deploying to production!**

