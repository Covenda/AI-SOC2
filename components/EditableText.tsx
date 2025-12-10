'use client';

import { useState, useEffect, useRef } from 'react';

interface EditableTextProps {
  elementId: string;
  defaultText: string;
  className?: string;
  tag?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div';
  isAuthenticated?: boolean;
}

export default function EditableText({
  elementId,
  defaultText,
  className = '',
  tag = 'p',
  isAuthenticated = false,
}: EditableTextProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(defaultText);
  const [savedText, setSavedText] = useState(defaultText);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [showSavedIndicator, setShowSavedIndicator] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load saved content on mount
  useEffect(() => {
    loadSavedContent();
    // Poll for updates every 5 seconds
    const interval = setInterval(loadSavedContent, 5000);
    return () => clearInterval(interval);
  }, [elementId]);

  const loadSavedContent = async () => {
    try {
      const response = await fetch(`/api/edits?elementId=${encodeURIComponent(elementId)}`, {
        credentials: 'include', // Ensure cookies are sent
      });
      if (response.ok) {
        const data = await response.json();
        if (data.edit && data.edit.content !== savedText) {
          setText(data.edit.content);
          setSavedText(data.edit.content);
          setLastSaved(new Date(data.edit.updatedAt));
        }
      }
    } catch (error) {
      console.error('Error loading saved content:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = () => {
    if (!isAuthenticated) {
      alert('Please log in to edit content');
      return;
    }
    setIsEditing(true);
    // Focus textarea after a brief delay to ensure it's rendered
    setTimeout(() => {
      textareaRef.current?.focus();
      if (textareaRef.current) {
        textareaRef.current.setSelectionRange(
          textareaRef.current.value.length,
          textareaRef.current.value.length
        );
      }
    }, 0);
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const response = await fetch('/api/edits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Ensure cookies are sent
        body: JSON.stringify({
          elementId,
          content: text,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setSavedText(text);
        setLastSaved(new Date());
        setIsEditing(false);
        setShowSavedIndicator(true);
        setTimeout(() => setShowSavedIndicator(false), 3000);
      } else {
        const error = await response.json();
        alert(`Error saving: ${error.error}`);
      }
    } catch (error) {
      console.error('Error saving:', error);
      alert('Failed to save. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setText(savedText);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Escape') {
      handleCancel();
    } else if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      handleSave();
    }
  };

  const Tag = tag as keyof React.JSX.IntrinsicElements;

  if (isLoading) {
    return (
      <Tag className={className}>
        {defaultText}
        {isAuthenticated && (
          <button
            onClick={handleEdit}
            className="ml-2 text-xs text-neutral-400 hover:text-brand-orange transition-colors"
            title="Edit (login required)"
          >
            ✏️
          </button>
        )}
      </Tag>
    );
  }

  if (isEditing) {
    return (
      <div className="relative">
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          className={`w-full min-h-[60px] p-2 border-2 border-brand-orange rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange ${className}`}
          style={{
            fontFamily: 'inherit',
            fontSize: 'inherit',
            lineHeight: 'inherit',
            fontWeight: 'inherit',
            color: 'inherit',
          }}
        />
        <div className="flex gap-2 mt-2">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="px-4 py-1 bg-brand-orange text-white rounded-md hover:bg-brand-orange/90 disabled:opacity-50 text-sm"
          >
            {isSaving ? 'Saving...' : 'Save (Ctrl+Enter)'}
          </button>
          <button
            onClick={handleCancel}
            disabled={isSaving}
            className="px-4 py-1 bg-neutral-200 text-neutral-700 rounded-md hover:bg-neutral-300 disabled:opacity-50 text-sm"
          >
            Cancel (Esc)
          </button>
        </div>
        {showSavedIndicator && (
          <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 rounded-md text-sm animate-fade-in">
            ✓ Saved
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative group">
      <Tag className={className}>{text}</Tag>
      {isAuthenticated && (
        <>
          <button
            onClick={handleEdit}
            className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-neutral-400 hover:text-brand-orange"
            title="Click to edit"
            aria-label="Edit text"
          >
            ✏️
          </button>
          {lastSaved && (
            <span className="ml-2 text-xs text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity">
              (Last saved: {lastSaved.toLocaleTimeString()})
            </span>
          )}
        </>
      )}
    </div>
  );
}

