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
      const target = event.target as HTMLElement;
      // Check if click is inside the dropdown menu or navigation
      const dropdownMenu = document.querySelector('[data-dropdown-menu]');
      if (dropdownRef.current && !dropdownRef.current.contains(target) && 
          dropdownMenu && !dropdownMenu.contains(target)) {
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
    <nav className="sticky top-0 z-50 bg-white border-b border-neutral-200 relative">
      {/* Mega Menu Dropdown - Full Width */}
      {activeDropdown && navigationData.find(item => item.label === activeDropdown)?.children && (
        <div 
          data-dropdown-menu
          className="absolute left-0 right-0 top-full w-full bg-white border-b border-neutral-200 shadow-xl z-[60]"
          style={{
            animation: 'fadeInDown 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="container-custom py-8">
            {activeDropdown === 'Platform' && (
              <div className="grid grid-cols-3 gap-12">
                {/* Left Column: Platform Overview */}
                <div className="space-y-4">
                  <h3 className="text-brand-navy font-bold text-lg mb-4">Platform Overview</h3>
                  <p className="text-neutral-700 text-sm leading-relaxed mb-6">
                    A single platform to enable organization-wide decision making—get comprehensive, real-time, and unbiased threat intelligence to identify what matters most.
                  </p>
                  <div className="space-y-3">
                    <Link href="/book-demo" className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150" onClick={() => setActiveDropdown(null)}>
                      Book a demo
                    </Link>
                    <Link href="/platform/demo-center" className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150" onClick={() => setActiveDropdown(null)}>
                      Explore on-demand demos
                    </Link>
                    <Link href="/get-started" className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150" onClick={() => setActiveDropdown(null)}>
                      Try our free tools
                    </Link>
                    <Link href="/vulnerability-database" className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150" onClick={() => setActiveDropdown(null)}>
                      View trending vulnerabilities
                    </Link>
                  </div>
                </div>

                {/* Middle Column: Platform Features */}
                <div className="space-y-4">
                  <h3 className="text-brand-navy font-bold text-lg mb-4">Platform Features</h3>
                  <div className="space-y-6">
                    <Link href="/platform/integrations" className="block group cursor-pointer" onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }}>
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                          <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-neutral-800 font-medium text-sm group-hover:text-brand-orange transition-colors duration-150">Integrations and APIs</div>
                          <div className="text-neutral-600 text-xs mt-1 leading-relaxed">Connect your security stack through pre-built integrations and flexible APIs.</div>
                        </div>
                      </div>
                    </Link>
                    <Link href="/products/vulnerability-intelligence" className="block group cursor-pointer" onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }}>
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                          <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-neutral-800 font-medium text-sm group-hover:text-brand-orange transition-colors duration-150">Risk-Based Vulnerability Management</div>
                          <div className="text-neutral-600 text-xs mt-1 leading-relaxed">Prioritizes vulnerabilities based on business risk, not just CVSS scores.</div>
                        </div>
                      </div>
                    </Link>
                    <Link href="/platform/recorded-future-ai" className="block group cursor-pointer" onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }}>
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                          <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-neutral-800 font-medium text-sm group-hover:text-brand-orange transition-colors duration-150">Covenda AI</div>
                          <div className="text-neutral-600 text-xs mt-1 leading-relaxed">Interact with the Intelligence Graph® with AI Conversations, AI Reporting, and AI Insights.</div>
                        </div>
                      </div>
                    </Link>
                    <Link href="/products/threat-intelligence" className="block group cursor-pointer" onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }}>
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                          <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-neutral-800 font-medium text-sm group-hover:text-brand-orange transition-colors duration-150">Event Agnostic Intelligence</div>
                          <div className="text-neutral-600 text-xs mt-1 leading-relaxed">Event-agnostic, spec-driven threat intelligence that models threats before incidents happen.</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Right Column: Products */}
                <div className="space-y-4">
                  <h3 className="text-brand-navy font-bold text-lg mb-4">Products</h3>
                  <div className="space-y-4">
                    {navigationData.find(nav => nav.label === 'Platform')?.children?.filter(child => child.href.startsWith('/products')).map((product) => (
                      <Link
                        key={product.href}
                        href={product.href}
                        className="block group cursor-pointer"
                        onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                            <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="text-neutral-800 font-medium text-sm group-hover:text-brand-orange transition-colors duration-150">{product.label}</div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}


            {activeDropdown === 'Services' && (
              <div className="grid grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h3 className="text-brand-navy font-bold text-lg mb-4">Our Services</h3>
                  <p className="text-neutral-700 text-sm leading-relaxed mb-6">
                    Our services include Analyst on Demand, Intelligence Services, and Vulnerability Hunting to help you build and operate a world-class AI-SOC.
                  </p>
                  <div className="space-y-4">
                    <Link href="/book-demo" className="block group" onClick={() => setActiveDropdown(null)}>
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                          <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-neutral-800 font-medium text-sm group-hover:text-brand-orange transition-colors duration-150">Schedule a Consultation</div>
                        </div>
                      </div>
                    </Link>
                    <Link href="/contact" className="block group" onClick={() => setActiveDropdown(null)}>
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                          <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-neutral-800 font-medium text-sm group-hover:text-brand-orange transition-colors duration-150">Contact Sales</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-brand-navy font-bold text-lg mb-4">Service Offerings</h3>
                  <div className="space-y-6">
                    {navigationData.find(nav => nav.label === 'Services')?.children?.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block group cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveDropdown(null);
                        }}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                            {service.label === 'Analyst on Demand' && (
                              <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            )}
                            {service.label === 'Intelligence Services' && (
                              <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                              </svg>
                            )}
                            {service.label === 'Vulnerability Hunting' && (
                              <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="text-neutral-800 font-medium text-sm group-hover:text-brand-orange transition-colors duration-150">{service.label}</div>
                            <div className="text-neutral-600 text-xs mt-1 leading-relaxed">
                              {service.label === 'Analyst on Demand' && 'Forward-Deployed Engineers embed with your team to accelerate value and wire the platform into your environment.'}
                              {service.label === 'Intelligence Services' && 'Comprehensive threat intelligence and analysis services powered by the Intelligence Graph®.'}
                              {service.label === 'Vulnerability Hunting' && 'Proactive vulnerability discovery and risk-based prioritization to identify security gaps before they become incidents.'}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-brand-navy font-bold text-lg mb-4">Learn More</h3>
                  <div className="space-y-4">
                    <Link href="/services" className="block group" onClick={() => setActiveDropdown(null)}>
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                          <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-neutral-800 font-medium text-sm group-hover:text-brand-orange transition-colors duration-150">All Services</div>
                        </div>
                      </div>
                    </Link>
                    <Link href="/case-study" className="block group" onClick={() => setActiveDropdown(null)}>
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                          <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-neutral-800 font-medium text-sm group-hover:text-brand-orange transition-colors duration-150">Customer Success Stories</div>
                        </div>
                      </div>
                    </Link>
                    <Link href="/partner" className="block group" onClick={() => setActiveDropdown(null)}>
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                          <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-neutral-800 font-medium text-sm group-hover:text-brand-orange transition-colors duration-150">Partner Program</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {activeDropdown === 'Resources' && (
              <div className="grid grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h3 className="text-brand-navy font-bold text-lg mb-4">Resources Overview</h3>
                  <p className="text-neutral-700 text-sm leading-relaxed mb-6">
                    Access our latest content, research, events, and guides to stay informed about the latest in threat intelligence and security operations.
                  </p>
                  <div className="space-y-3">
                    <Link href="/resources" className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150" onClick={() => setActiveDropdown(null)}>
                      View all resources
                    </Link>
                    <Link href="/blog" className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150" onClick={() => setActiveDropdown(null)}>
                      Read our blog
                    </Link>
                    <Link href="/events" className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150" onClick={() => setActiveDropdown(null)}>
                      Attend an event
                    </Link>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-brand-navy font-bold text-lg mb-4">Resource Categories</h3>
                  <div className="space-y-6">
                    {navigationData.find(nav => nav.label === 'Resources')?.children?.map((resource) => (
                      <Link
                        key={resource.href}
                        href={resource.href}
                        className="block group cursor-pointer"
                        onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                            {resource.label === 'Blog' && (
                              <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            )}
                            {resource.label === 'Events' && (
                              <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            )}
                            {resource.label === 'Webinars' && (
                              <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                              </svg>
                            )}
                            {resource.label === 'Guides' && (
                              <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                              </svg>
                            )}
                            {resource.label === 'Research' && (
                              <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            )}
                            {resource.label === 'Case Studies' && (
                              <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                              </svg>
                            )}
                            {resource.label === 'Newsroom' && (
                              <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                              </svg>
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="text-neutral-800 font-medium text-sm group-hover:text-brand-orange transition-colors duration-150">{resource.label}</div>
                            <div className="text-neutral-600 text-xs mt-1 leading-relaxed">
                              {resource.label === 'Blog' && 'Latest insights and analysis on threat intelligence and security operations.'}
                              {resource.label === 'Events' && 'Join us at industry conferences, webinars, and networking events.'}
                              {resource.label === 'Webinars' && 'On-demand and live webinars covering the latest security topics.'}
                              {resource.label === 'Guides' && 'Comprehensive guides to help you get the most out of our platform.'}
                              {resource.label === 'Research' && 'In-depth research reports and threat intelligence analysis.'}
                              {resource.label === 'Case Studies' && 'Real-world examples of how customers use our platform.'}
                              {resource.label === 'Newsroom' && 'Latest company news, press releases, and announcements.'}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-brand-navy font-bold text-lg mb-4">Learn More</h3>
                  <div className="space-y-4">
                    <Link href="/resources" className="block group" onClick={() => setActiveDropdown(null)}>
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                          <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-neutral-800 font-medium text-sm group-hover:text-brand-orange transition-colors duration-150">All Resources</div>
                        </div>
                      </div>
                    </Link>
                    <Link href="/contact" className="block group" onClick={() => setActiveDropdown(null)}>
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                          <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-neutral-800 font-medium text-sm group-hover:text-brand-orange transition-colors duration-150">Contact Us</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {activeDropdown === 'Why Covenda AI' && (
              <div className="grid grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h3 className="text-brand-navy font-bold text-lg mb-4">About Covenda AI</h3>
                  <p className="text-neutral-700 text-sm leading-relaxed mb-6">
                    Learn about our mission, team, and how we're revolutionizing security operations with AI-powered threat intelligence.
                  </p>
                  <div className="space-y-3">
                    <Link href="/why-recorded-future" className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150" onClick={() => setActiveDropdown(null)}>
                      Why choose Covenda AI
                    </Link>
                    <Link href="/contact" className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150" onClick={() => setActiveDropdown(null)}>
                      Get in touch
                    </Link>
                    <Link href="/pricing" className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150" onClick={() => setActiveDropdown(null)}>
                      View pricing
                    </Link>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-brand-navy font-bold text-lg mb-4">Company Information</h3>
                  <div className="space-y-6">
                    {navigationData.find(nav => nav.label === 'Why Covenda AI')?.children?.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block group cursor-pointer"
                        onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                            {item.label === 'About Us' && (
                              <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            )}
                            {item.label === 'Partners' && (
                              <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            )}
                            {item.label === 'Contact' && (
                              <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            )}
                            {item.label === 'Pricing' && (
                              <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            )}
                            {item.label === 'Case Studies' && (
                              <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="text-neutral-800 font-medium text-sm group-hover:text-brand-orange transition-colors duration-150">{item.label}</div>
                            <div className="text-neutral-600 text-xs mt-1 leading-relaxed">
                              {item.label === 'About Us' && 'Learn about our company, mission, and the team behind Covenda AI.'}
                              {item.label === 'Partners' && 'Explore our partner ecosystem and integration opportunities.'}
                              {item.label === 'Contact' && 'Get in touch with our team for sales, support, or general inquiries.'}
                              {item.label === 'Pricing' && 'View our flexible pricing plans and find the right solution for your needs.'}
                              {item.label === 'Case Studies' && 'See how customers are achieving success with Covenda AI.'}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-brand-navy font-bold text-lg mb-4">Learn More</h3>
                  <div className="space-y-4">
                    <Link href="/why-recorded-future" className="block group" onClick={() => setActiveDropdown(null)}>
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                          <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-neutral-800 font-medium text-sm group-hover:text-brand-orange transition-colors duration-150">Why Covenda AI</div>
                        </div>
                      </div>
                    </Link>
                    <Link href="/case-study" className="block group" onClick={() => setActiveDropdown(null)}>
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                          <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-neutral-800 font-medium text-sm group-hover:text-brand-orange transition-colors duration-150">Customer Success</div>
                        </div>
                      </div>
                    </Link>
                    <Link href="/partner" className="block group" onClick={() => setActiveDropdown(null)}>
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                          <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-neutral-800 font-medium text-sm group-hover:text-brand-orange transition-colors duration-150">Partner Program</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {activeDropdown === 'Legal' && (
              <div className="grid grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h3 className="text-brand-navy font-bold text-lg mb-4">Legal Overview</h3>
                  <p className="text-neutral-700 text-sm leading-relaxed mb-6">
                    Review our legal policies, terms of service, and compliance information to understand how we protect your data and privacy.
                  </p>
                  <div className="space-y-3">
                    <Link href="/legal/privacy-policy/4-0" className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150" onClick={() => setActiveDropdown(null)}>
                      Privacy Policy
                    </Link>
                    <Link href="/legal/terms-of-use/7-0" className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150" onClick={() => setActiveDropdown(null)}>
                      Terms of Service
                    </Link>
                    <Link href="/contact" className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150" onClick={() => setActiveDropdown(null)}>
                      Legal inquiries
                    </Link>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-brand-navy font-bold text-lg mb-4">Legal Documents</h3>
                  <div className="space-y-6">
                    {navigationData.find(nav => nav.label === 'Legal')?.children?.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block group cursor-pointer"
                        onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                            {item.label === 'Privacy Policy' && (
                              <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                            )}
                            {item.label === 'Terms of Service' && (
                              <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            )}
                            {item.label === 'Cookie Policy' && (
                              <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                              </svg>
                            )}
                            {item.label === 'FAQ' && (
                              <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="text-neutral-800 font-medium text-sm group-hover:text-brand-orange transition-colors duration-150">{item.label}</div>
                            <div className="text-neutral-600 text-xs mt-1 leading-relaxed">
                              {item.label === 'Privacy Policy' && 'How we collect, use, and protect your personal information.'}
                              {item.label === 'Terms of Service' && 'Terms and conditions for using our platform and services.'}
                              {item.label === 'Cookie Policy' && 'Information about how we use cookies and tracking technologies.'}
                              {item.label === 'FAQ' && 'Frequently asked questions about our legal policies and compliance.'}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-brand-navy font-bold text-lg mb-4">Support</h3>
                  <div className="space-y-4">
                    <Link href="/contact" className="block group" onClick={() => setActiveDropdown(null)}>
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                          <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-neutral-800 font-medium text-sm group-hover:text-brand-orange transition-colors duration-150">Contact Support</div>
                        </div>
                      </div>
                    </Link>
                    <Link href="/legal/faq" className="block group" onClick={() => setActiveDropdown(null)}>
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                          <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-neutral-800 font-medium text-sm group-hover:text-brand-orange transition-colors duration-150">FAQ</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20 gap-6 lg:gap-8">
          {/* Brand Name */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img 
                src="/covenda-logo.png" 
                alt="Covenda" 
                className="h-12 w-12"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:flex-1 lg:justify-center lg:gap-0.5 relative" ref={dropdownRef}>
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

              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center">
            <Link href="/get-started" className="btn btn-primary text-sm px-5 py-2.5">
              Get Started
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
            <div className="mt-6 pt-6 border-t border-neutral-200">
              <Link
                href="/get-started"
                className="btn btn-primary w-full text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
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
