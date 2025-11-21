'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { navigationData, type NavItem } from '@/lib/navigation';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownClick = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!activeDropdown) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setActiveDropdown(null);
      }
    };

    // Use capture phase to catch clicks before they bubble
    document.addEventListener('mousedown', handleClickOutside, true);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
    };
  }, [activeDropdown]);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20 gap-6 lg:gap-8">
          {/* Brand Name */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-brand-orange">
                Covenda AI
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:flex-1 lg:justify-center lg:gap-0.5" ref={dropdownRef}>
            {navigationData.map((item) => (
              <div
                key={item.label}
                className="relative"
              >
                {item.children ? (
                  <button 
                    onClick={() => handleDropdownClick(item.label)}
                    className="nav-link px-5 py-2.5 rounded-lg flex items-center space-x-1.5"
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link 
                    href={item.href} 
                    className="nav-link px-5 py-2.5 rounded-lg block"
                    onClick={() => setActiveDropdown(null)}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.label && (
                  <div 
                    className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-neutral-200 py-2 origin-top z-50"
                    style={{
                      animation: 'fadeInDown 0.2s ease-out forwards'
                    }}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-brand-orange transition-colors duration-150"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-3">
            <Link href="/get-started" className="btn btn-secondary text-sm px-5 py-2.5">
              Get Started
            </Link>
            <Link href="/book-demo" className="btn btn-primary text-sm px-5 py-2.5">
              Book a Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-neutral-200 animate-slide-down">
            <div className="space-y-1">
              {navigationData.map((item) => (
                <MobileNavItem key={item.label} item={item} />
              ))}
            </div>
            <div className="mt-6 space-y-3 pt-6 border-t border-neutral-200">
              <Link
                href="/get-started"
                className="btn btn-secondary w-full text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
              <Link
                href="/book-demo"
                className="btn btn-primary w-full text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function MobileNavItem({ item }: { item: NavItem }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="block px-4 py-3 text-neutral-700 hover:bg-neutral-50 hover:text-brand-orange rounded-lg transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 text-neutral-700 hover:bg-neutral-50 rounded-lg transition-colors"
      >
        <span className="font-medium">{item.label}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="ml-4 mt-1 space-y-1">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-4 py-2.5 text-sm text-neutral-600 hover:text-brand-orange hover:bg-neutral-50 rounded-lg transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
