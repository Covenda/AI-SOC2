'use client';

import { useEffect } from 'react';
import { useEditMode } from '@/contexts/EditModeContext';

export default function EditableTextManager() {
  const { isEditMode } = useEditMode();

  useEffect(() => {
    if (!isEditMode) {
      // Remove contentEditable from all elements when edit mode is off
      const editableElements = document.querySelectorAll('[contenteditable="true"]');
      editableElements.forEach((el) => {
        el.removeAttribute('contenteditable');
        el.classList.remove('editable-text');
        (el as HTMLElement).style.outline = '';
        (el as HTMLElement).style.cursor = '';
      });
      return;
    }

    // Function to check if element should be editable
    const shouldBeEditable = (el: Element): boolean => {
      // Skip if already processed
      if (el.hasAttribute('contenteditable')) {
        return false;
      }

      // Skip interactive elements
      if (
        el.closest('button') ||
        el.closest('input') ||
        el.closest('textarea') ||
        el.closest('select') ||
        el.closest('[role="button"]') ||
        el.closest('form') ||
        el.tagName === 'BUTTON' ||
        el.tagName === 'INPUT' ||
        el.tagName === 'TEXTAREA' ||
        el.tagName === 'SELECT'
      ) {
        return false;
      }

      // Skip navigation links (but allow other links)
      if (el.closest('nav') && el.tagName === 'A') {
        return false;
      }

      // Skip empty elements
      if (!el.textContent?.trim()) {
        return false;
      }

      // Skip SVG elements
      if (el.tagName === 'SVG' || el.closest('svg')) {
        return false;
      }

      // Skip code blocks
      if (el.closest('code') || el.closest('pre')) {
        return false;
      }

      return true;
    };

    // Function to make text elements editable
    const makeTextEditable = () => {
      // Focus on text-containing elements for better performance
      const textSelectors = [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'p', 'span', 'div', 'li', 'td', 'th',
        'label', 'strong', 'em', 'b', 'i', 'a',
        'blockquote', 'cite', 'figcaption'
      ];
      
      // Get all text elements
      const allElements: Element[] = [];
      textSelectors.forEach((selector) => {
        try {
          const elements = document.querySelectorAll(selector);
          allElements.push(...Array.from(elements));
        } catch (e) {
          // Ignore invalid selectors
        }
      });
      
      allElements.forEach((el) => {
        if (!shouldBeEditable(el)) {
          return;
        }

        // Skip if it's inside a nav element (navigation should not be editable)
        if (el.closest('nav')) {
          return;
        }

        // Make editable
        el.setAttribute('contenteditable', 'true');
        el.classList.add('editable-text');

        // Add visual indicator
        (el as HTMLElement).style.outline = 'none';
        (el as HTMLElement).style.cursor = 'text';

        // Generate unique ID for this element
        let textId = el.getAttribute('data-text-id');
        if (!textId) {
          const path = window.location.pathname;
          const tag = el.tagName.toLowerCase();
          const parent = el.parentElement;
          const index = parent ? Array.from(parent.children).indexOf(el) : 0;
          const textPreview = el.textContent?.substring(0, 30).replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '') || 'text';
          textId = `${path}-${tag}-${index}-${textPreview}`;
          el.setAttribute('data-text-id', textId);
        }

        // Load saved text if available
        const savedText = localStorage.getItem(`editable-text-${textId}`);
        if (savedText && savedText !== el.textContent) {
          el.textContent = savedText;
        }

        // Save on blur (only if changed)
        const originalText = el.textContent || '';
        const handleBlur = () => {
          const currentText = el.textContent || '';
          if (currentText !== originalText) {
            localStorage.setItem(`editable-text-${textId}`, currentText);
          }
        };

        // Remove old listener if exists and add new one
        el.removeEventListener('blur', handleBlur);
        el.addEventListener('blur', handleBlur);
      });
    };

    // Initial setup with a small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      makeTextEditable();
    }, 100);

    // Re-run when DOM changes (for dynamic content)
    const observer = new MutationObserver(() => {
      makeTextEditable();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [isEditMode]);

  return null;
}

