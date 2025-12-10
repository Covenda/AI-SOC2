// Simple authentication utility
// In production, use a proper auth library like NextAuth.js

export interface User {
  id: string;
  username: string;
  name: string;
}

// Simple in-memory session store (in production, use Redis or database)
const sessions = new Map<string, User>();

export function createSession(userId: string, user: User): string {
  const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  sessions.set(sessionId, user);
  return sessionId;
}

export function getSession(sessionId: string): User | null {
  return sessions.get(sessionId) || null;
}

export function deleteSession(sessionId: string): void {
  sessions.delete(sessionId);
}

// Simple user store (in production, use a database)
const users = new Map<string, { password: string; user: User }>();

// Initialize with a default admin user
users.set('admin', {
  password: 'admin123', // In production, hash this password
  user: {
    id: '1',
    username: 'admin',
    name: 'Admin User',
  },
});

export function validateUser(username: string, password: string): User | null {
  const userData = users.get(username);
  if (userData && userData.password === password) {
    return userData.user;
  }
  return null;
}

export function createUser(username: string, password: string, name: string): User {
  const user: User = {
    id: Date.now().toString(),
    username,
    name,
  };
  users.set(username, { password, user });
  return user;
}

