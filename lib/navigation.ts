export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigationData: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Analyst on Demand', href: '/services/analyst-on-demand' },
      { label: 'Intelligence Services', href: '/services/intelligence-services' },
      { label: 'Vulnerability Hunting', href: '/services/vulnerability-hunting' },
    ],
  },
  {
    label: 'Platform',
    href: '/platform',
    children: [
      { label: 'Demo Center', href: '/platform/demo-center' },
      { label: 'Intelligence Graph', href: '/platform/intelligence-graph' },
      { label: 'Collective Insights', href: '/platform/collective-insights' },
      { label: 'Integrations', href: '/platform/integrations' },
      { label: 'Covenda AI', href: '/platform/recorded-future-ai' },
      { label: 'Browser Extension', href: '/platform/browser-extension' },
      { label: 'Threat Intelligence', href: '/products/threat-intelligence' },
      { label: 'Brand Intelligence', href: '/products/brand-intelligence' },
      { label: 'SecOps Intelligence', href: '/products/secops-intelligence' },
      { label: 'Identity Intelligence', href: '/products/identity-intelligence' },
      { label: 'Vulnerability Intelligence', href: '/products/vulnerability-intelligence' },
      { label: 'Payment Fraud Intelligence', href: '/products/payment-fraud-intelligence' },
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
      { label: 'About', href: '/about' },
      { label: 'Case Studies', href: '/case-study' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Threat Engineering Insights', href: '/threat-engineering-insights' },
      { label: 'Why Covenda', href: '/why-recorded-future' },
      { label: 'Our Story', href: '/our-story' },
      { label: 'Careers', href: '/careers' },
      { label: 'Partners', href: '/partner' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    label: 'Legal',
    href: '/legal/privacy-policy/4-0',
    children: [
      { label: 'Privacy Policy', href: '/legal/privacy-policy/4-0' },
      { label: 'Terms of Service', href: '/legal/terms-of-use/7-0' },
      { label: 'Cookie Policy', href: '/legal/privacy-policy/3-0/cookies' },
      { label: 'FAQ', href: '/legal/faq' },
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
      { label: 'Covenda AI', href: '/platform/recorded-future-ai' },
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
      { label: 'Payment Fraud Intelligence', href: '/products/payment-fraud-intelligence' },
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
    title: 'Services',
    links: [
      { label: 'Analyst on Demand', href: '/services/analyst-on-demand' },
      { label: 'Intelligence Services', href: '/services/intelligence-services' },
      { label: 'Vulnerability Hunting', href: '/services/vulnerability-hunting' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Case Studies', href: '/case-study' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Why Covenda', href: '/why-recorded-future' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/legal/privacy-policy/4-0' },
      { label: 'Terms of Service', href: '/legal/terms-of-use/7-0' },
      { label: 'Cookie Policy', href: '/legal/privacy-policy/3-0/cookies' },
    ],
  },
];
