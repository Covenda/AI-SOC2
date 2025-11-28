'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface EditModeContextType {
  isEditMode: boolean;
  toggleEditMode: () => void;
}

const EditModeContext = createContext<EditModeContextType | undefined>(undefined);

export function EditModeProvider({ children }: { children: ReactNode }) {
  const [isEditMode, setIsEditMode] = useState(false);

  // Load edit mode state from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('editMode');
    if (saved === 'true') {
      setIsEditMode(true);
    }
  }, []);

  // Save edit mode state to localStorage
  useEffect(() => {
    localStorage.setItem('editMode', isEditMode.toString());
  }, [isEditMode]);

  const toggleEditMode = () => {
    setIsEditMode((prev) => !prev);
  };

  return (
    <EditModeContext.Provider value={{ isEditMode, toggleEditMode }}>
      {children}
    </EditModeContext.Provider>
  );
}

export function useEditMode() {
  const context = useContext(EditModeContext);
  if (context === undefined) {
    throw new Error('useEditMode must be used within an EditModeProvider');
  }
  return context;
}

