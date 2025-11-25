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
  },
  {
    label: 'Why Covenda AI',
    href: '/why-recorded-future',
    children: [
      { label: 'About Us', href: '/about' },
      { label: 'Partners', href: '/partner' },
      { label: 'Contact', href: '/contact' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Case Studies', href: '/case-study' },
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
    title: 'Why Covenda AI',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Partners', href: '/partner' },
      { label: 'Contact', href: '/contact' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Case Studies', href: '/case-study' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/legal/privacy-policy/4-0' },
      { label: 'Terms of Service', href: '/legal/terms-of-use/7-0' },
      { label: 'Cookie Policy', href: '/legal/privacy-policy/3-0/cookies' },
      { label: 'FAQ', href: '/legal/faq' },
    ],
  },
];
