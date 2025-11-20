export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigationData: NavItem[] = [
  {
    label: 'Platform',
    href: '/platform',
    children: [
      { label: 'Demo Center', href: '/platform/demo-center' },
      { label: 'Intelligence Graph', href: '/platform/intelligence-graph' },
      { label: 'Collective Insights', href: '/platform/collective-insights' },
      { label: 'Integrations', href: '/platform/integrations' },
      { label: 'Recorded Future AI', href: '/platform/recorded-future-ai' },
      { label: 'Browser Extension', href: '/platform/browser-extension' },
    ],
  },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'Threat Intelligence', href: '/products/threat-intelligence' },
      { label: 'Brand Intelligence', href: '/products/brand-intelligence' },
      { label: 'SecOps Intelligence', href: '/products/secops-intelligence' },
      { label: 'Identity Intelligence', href: '/products/identity-intelligence' },
      { label: 'Third-Party Intelligence', href: '/products/third-party-intelligence' },
      { label: 'Attack Surface Intelligence', href: '/products/attack-surface-intelligence' },
      { label: 'Vulnerability Intelligence', href: '/products/vulnerability-intelligence' },
      { label: 'Geopolitical Intelligence', href: '/products/geopolitical-intelligence' },
      { label: 'Payment Fraud Intelligence', href: '/products/payment-fraud-intelligence' },
    ],
  },
  {
    label: 'Use Cases',
    href: '/use-case',
    children: [
      { label: 'Digital Risk', href: '/use-case/digital-risk' },
      { label: 'Ransomware', href: '/use-case/ransomware' },
      { label: 'Exposure Management', href: '/use-case/exposure-management' },
      { label: 'Automation & Security Workflows', href: '/use-case/automation-security-workflows' },
    ],
  },
  {
    label: 'Industries',
    href: '/industry',
    children: [
      { label: 'Financial', href: '/industry/financial' },
      { label: 'Healthcare', href: '/industry/healthcare' },
      { label: 'Public Sector', href: '/industry/public-sector' },
      { label: 'Critical Infrastructure', href: '/industry/critical-infrastructure' },
      { label: 'Technology', href: '/industry/technology' },
      { label: 'Retail', href: '/industry/retail' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Blog', href: '/blog' },
      { label: 'Events', href: '/events' },
      { label: 'Webinars', href: '/webinars' },
      { label: 'Guides', href: '/resources/guides' },
      { label: 'Research', href: '/research' },
      { label: 'Case Studies', href: '/case-study' },
      { label: 'Newsroom', href: '/newsroom' },
    ],
  },
  {
    label: 'Company',
    href: '/why-recorded-future',
    children: [
      { label: 'Why Recorded Future', href: '/why-recorded-future' },
      { label: 'Our Story', href: '/our-story' },
      { label: 'Careers', href: '/careers' },
      { label: 'Partners', href: '/partner' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export const footerSections = [
  {
    title: 'Platform',
    links: [
      { label: 'Demo Center', href: '/platform/demo-center' },
      { label: 'Intelligence Graph', href: '/platform/intelligence-graph' },
      { label: 'Collective Insights', href: '/platform/collective-insights' },
      { label: 'Integrations', href: '/platform/integrations' },
      { label: 'Recorded Future AI', href: '/platform/recorded-future-ai' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'Threat Intelligence', href: '/products/threat-intelligence' },
      { label: 'Brand Intelligence', href: '/products/brand-intelligence' },
      { label: 'SecOps Intelligence', href: '/products/secops-intelligence' },
      { label: 'Identity Intelligence', href: '/products/identity-intelligence' },
      { label: 'Vulnerability Intelligence', href: '/products/vulnerability-intelligence' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Financial', href: '/industry/financial' },
      { label: 'Healthcare', href: '/industry/healthcare' },
      { label: 'Public Sector', href: '/industry/public-sector' },
      { label: 'Technology', href: '/industry/technology' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Events', href: '/events' },
      { label: 'Webinars', href: '/webinars' },
      { label: 'Research', href: '/research' },
      { label: 'Case Studies', href: '/case-study' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Why Recorded Future', href: '/why-recorded-future' },
      { label: 'Our Story', href: '/our-story' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];
