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
    <nav className="sticky top-0 z-50 bg-white border-b border-neutral-200 relative">
      {/* Mega Menu Dropdown - Full Width */}
      {activeDropdown && navigationData.find(item => item.label === activeDropdown)?.children && (
        <div 
          className="absolute left-0 right-0 top-full w-full bg-white border-b border-neutral-200 shadow-xl z-40"
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
                    <Link href="/platform/intelligence-graph" className="block group" onClick={() => setActiveDropdown(null)}>
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                          <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-neutral-800 font-medium text-sm group-hover:text-brand-orange transition-colors duration-150">Intelligence Graph®</div>
                          <div className="text-neutral-600 text-xs mt-1 leading-relaxed">Analyze and detect emerging threats with data from 1M+ global sources.</div>
                        </div>
                      </div>
                    </Link>
                    <Link href="/platform/collective-insights" className="block group" onClick={() => setActiveDropdown(null)}>
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                          <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-neutral-800 font-medium text-sm group-hover:text-brand-orange transition-colors duration-150">Collective Insights®</div>
                          <div className="text-neutral-600 text-xs mt-1 leading-relaxed">Enrich data from security tools with threat intelligence to uncover patterns in detections.</div>
                        </div>
                      </div>
                    </Link>
                    <Link href="/platform/integrations" className="block group" onClick={() => setActiveDropdown(null)}>
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
                    <Link href="/platform/recorded-future-ai" className="block group" onClick={() => setActiveDropdown(null)}>
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
                  </div>
                </div>

                {/* Right Column: Products */}
                <div className="space-y-4">
                  <h3 className="text-brand-navy font-bold text-lg mb-4">Products</h3>
                  <div className="space-y-3">
                    {navigationData.find(nav => nav.label === 'Products')?.children?.map((product) => (
                      <Link
                        key={product.href}
                        href={product.href}
                        className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {product.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeDropdown === 'Products' && (
              <div className="grid grid-cols-4 gap-8">
                <div className="space-y-4">
                  <h3 className="text-brand-navy font-bold text-lg mb-4">Intelligence Products</h3>
                  <div className="space-y-3">
                    {navigationData.find(nav => nav.label === 'Products')?.children?.slice(0, 5).map((product) => (
                      <Link
                        key={product.href}
                        href={product.href}
                        className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {product.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-brand-navy font-bold text-lg mb-4">More Products</h3>
                  <div className="space-y-3">
                    {navigationData.find(nav => nav.label === 'Products')?.children?.slice(5).map((product) => (
                      <Link
                        key={product.href}
                        href={product.href}
                        className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {product.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-brand-navy font-bold text-lg mb-4">Get Started</h3>
                  <div className="space-y-3">
                    <Link href="/book-demo" className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150" onClick={() => setActiveDropdown(null)}>
                      Book a Demo
                    </Link>
                    <Link href="/platform/demo-center" className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150" onClick={() => setActiveDropdown(null)}>
                      Try Interactive Demos
                    </Link>
                    <Link href="/pricing" className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150" onClick={() => setActiveDropdown(null)}>
                      View Pricing
                    </Link>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-brand-navy font-bold text-lg mb-4">Resources</h3>
                  <div className="space-y-3">
                    <Link href="/resources/guides" className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150" onClick={() => setActiveDropdown(null)}>
                      Product Guides
                    </Link>
                    <Link href="/case-study" className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150" onClick={() => setActiveDropdown(null)}>
                      Case Studies
                    </Link>
                    <Link href="/research" className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150" onClick={() => setActiveDropdown(null)}>
                      Research Reports
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {activeDropdown === 'Services' && (
              <div className="grid grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h3 className="text-brand-navy font-bold text-lg mb-4">Our Services</h3>
                  <p className="text-neutral-700 text-sm leading-relaxed mb-6">
                    Forward-Deployed Engineers embed with your team to wire the platform into your environment, accelerating time to value.
                  </p>
                  <div className="space-y-3">
                    <Link href="/book-demo" className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150" onClick={() => setActiveDropdown(null)}>
                      Schedule a Consultation
                    </Link>
                    <Link href="/contact" className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150" onClick={() => setActiveDropdown(null)}>
                      Contact Sales
                    </Link>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-brand-navy font-bold text-lg mb-4">Service Offerings</h3>
                  <div className="space-y-4">
                    {navigationData.find(nav => nav.label === 'Services')?.children?.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="text-neutral-800 font-medium text-sm group-hover:text-brand-orange transition-colors duration-150">{service.label}</div>
                        <div className="text-neutral-600 text-xs mt-1">
                          {service.label === 'Security Engineering' && 'Build and deploy security systems with expert guidance.'}
                          {service.label === 'Forward-Deployed Engineering' && 'Embedded engineers accelerate your security operations.'}
                          {service.label === 'AI-SOC Co-Management' && '24/7 AI-SOC operations managed by our expert team.'}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-brand-navy font-bold text-lg mb-4">Learn More</h3>
                  <div className="space-y-3">
                    <Link href="/services" className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150" onClick={() => setActiveDropdown(null)}>
                      All Services
                    </Link>
                    <Link href="/case-study" className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150" onClick={() => setActiveDropdown(null)}>
                      Customer Success Stories
                    </Link>
                    <Link href="/partner" className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150" onClick={() => setActiveDropdown(null)}>
                      Partner Program
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {activeDropdown === 'Use Cases' && (
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-brand-navy font-bold text-lg mb-4">Use Cases</h3>
                  <p className="text-neutral-700 text-sm leading-relaxed mb-6">
                    Discover how organizations use Covenda to address critical security challenges and improve their security posture.
                  </p>
                  <div className="space-y-3">
                    <Link href="/book-demo" className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150" onClick={() => setActiveDropdown(null)}>
                      See Use Cases in Action
                    </Link>
                    <Link href="/case-study" className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150" onClick={() => setActiveDropdown(null)}>
                      Read Case Studies
                    </Link>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-brand-navy font-bold text-lg mb-4">Solutions</h3>
                  <div className="space-y-3">
                    {navigationData.find(nav => nav.label === 'Use Cases')?.children?.map((useCase) => (
                      <Link
                        key={useCase.href}
                        href={useCase.href}
                        className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {useCase.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeDropdown === 'Resources' && (
              <div className="grid grid-cols-4 gap-8">
                <div className="space-y-4">
                  <h3 className="text-brand-navy font-bold text-lg mb-4">Content</h3>
                  <div className="space-y-3">
                    <Link href="/blog" className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150" onClick={() => setActiveDropdown(null)}>
                      Blog
                    </Link>
                    <Link href="/research" className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150" onClick={() => setActiveDropdown(null)}>
                      Research
                    </Link>
                    <Link href="/resources/guides" className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150" onClick={() => setActiveDropdown(null)}>
                      Guides
                    </Link>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-brand-navy font-bold text-lg mb-4">Events</h3>
                  <div className="space-y-3">
                    <Link href="/events" className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150" onClick={() => setActiveDropdown(null)}>
                      Events
                    </Link>
                    <Link href="/webinars" className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150" onClick={() => setActiveDropdown(null)}>
                      Webinars
                    </Link>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-brand-navy font-bold text-lg mb-4">Learn</h3>
                  <div className="space-y-3">
                    {navigationData.find(nav => nav.label === 'Resources')?.children?.filter(item => item.label === 'Case Studies' || item.label === 'Newsroom').map((resource) => (
                      <Link
                        key={resource.href}
                        href={resource.href}
                        className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {resource.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-brand-navy font-bold text-lg mb-4">All Resources</h3>
                  <div className="space-y-3">
                    {navigationData.find(nav => nav.label === 'Resources')?.children?.map((resource) => (
                      <Link
                        key={resource.href}
                        href={resource.href}
                        className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {resource.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeDropdown === 'Company' && (
              <div className="grid grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h3 className="text-brand-navy font-bold text-lg mb-4">About</h3>
                  <div className="space-y-3">
                    <Link href="/about" className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150" onClick={() => setActiveDropdown(null)}>
                      About Us
                    </Link>
                    <Link href="/our-story" className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150" onClick={() => setActiveDropdown(null)}>
                      Our Story
                    </Link>
                    <Link href="/why-recorded-future" className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150" onClick={() => setActiveDropdown(null)}>
                      Why Covenda
                    </Link>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-brand-navy font-bold text-lg mb-4">Connect</h3>
                  <div className="space-y-3">
                    {navigationData.find(nav => nav.label === 'Company')?.children?.filter(item => ['Contact', 'Partners', 'Careers'].includes(item.label)).map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-brand-navy font-bold text-lg mb-4">More</h3>
                  <div className="space-y-3">
                    {navigationData.find(nav => nav.label === 'Company')?.children?.filter(item => !['About', 'Contact', 'Partners', 'Careers', 'Our Story', 'Why Covenda'].includes(item.label)).map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeDropdown === 'Legal' && (
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-brand-navy font-bold text-lg mb-4">Legal & Compliance</h3>
                  <div className="space-y-3">
                    {navigationData.find(nav => nav.label === 'Legal')?.children?.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-brand-navy font-bold text-lg mb-4">Support</h3>
                  <div className="space-y-3">
                    <Link href="/contact" className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150" onClick={() => setActiveDropdown(null)}>
                      Contact Support
                    </Link>
                    <Link href="/legal/faq" className="block text-neutral-700 text-sm hover:text-brand-orange transition-colors duration-150" onClick={() => setActiveDropdown(null)}>
                      FAQ
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
              <span className="text-xl font-bold text-brand-orange">
                Covenda
              </span>
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
