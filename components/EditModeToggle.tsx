'use client';

import { useEditMode } from '@/contexts/EditModeContext';

export default function EditModeToggle() {
  const { isEditMode, toggleEditMode } = useEditMode();

  return (
    <button
      onClick={toggleEditMode}
      className={`fixed bottom-6 right-6 z-50 px-4 py-3 rounded-lg font-semibold text-sm shadow-lg transition-all duration-200 flex items-center gap-2 ${
        isEditMode
          ? 'bg-brand-orange text-white hover:bg-brand-navy'
          : 'bg-neutral-700 text-white hover:bg-neutral-800'
      }`}
      title={isEditMode ? 'Exit Edit Mode' : 'Enter Edit Mode'}
    >
      {isEditMode ? (
        <>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          <span>Editing</span>
        </>
      ) : (
        <>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          <span>Edit</span>
        </>
      )}
    </button>
  );
}

