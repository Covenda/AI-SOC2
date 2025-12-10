// Simple in-memory store for edits
// In production, use a database like PostgreSQL, MongoDB, or Supabase

export interface Edit {
  id: string;
  elementId: string; // Unique identifier for the editable element
  content: string;
  updatedAt: string;
  updatedBy: string; // User ID
}

const edits = new Map<string, Edit>();

export function getEdit(elementId: string): Edit | null {
  return edits.get(elementId) || null;
}

export function saveEdit(elementId: string, content: string, userId: string): Edit {
  const edit: Edit = {
    id: `edit_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    elementId,
    content,
    updatedAt: new Date().toISOString(),
    updatedBy: userId,
  };
  edits.set(elementId, edit);
  return edit;
}

export function getAllEdits(): Edit[] {
  return Array.from(edits.values());
}

export function deleteEdit(elementId: string): void {
  edits.delete(elementId);
}

