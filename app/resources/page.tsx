import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function ResourcesPage() {
  return (
    <div>
      <Hero
        variant="simple"
        badge="Resources"
        title="Resources"
        description="Access guides, reports, and tools to understand how Covenda AI-SOC works and how it can serve your organization."
      />

      <FeatureGrid
        features={[
          {
            icon: '📚',
            title: 'Guides & eBooks',
            description: 'Comprehensive guides on AI-SOC operations, threat intelligence, and the Covenda AI.',
            href: '/resources/guides',
          },
          {
            icon: '📊',
            title: 'Research Reports',
            description: 'In-depth research from Covenda threat research team on threat engineering and AI-SOC operations.',
            href: '/research',
          },
          {
            icon: '🔍',
            title: 'Trending Vulnerabilities',
            description: 'Track the most exploited and trending vulnerabilities, prioritized by risk-based vulnerability management.',
            href: '/resources/trending-vulnerabilities',
          },
          {
            icon: '📈',
            title: 'Maturity Assessment',
            description: 'Assess your security operations maturity and understand how Covenda AI-SOC can serve your organization.',
            href: '/resources/maturity-assessment',
          },
          {
            icon: '🗄️',
            title: 'Vulnerability Database',
            description: 'Search vulnerability intelligence powered by Lucid AI, part of Covenda risk-based vulnerability management.',
            href: '/vulnerability-database',
          },
          {
            icon: '💼',
            title: 'Case Studies',
            description: 'See how organizations use Covenda AI-SOC,  and Forward-Deployed Engineers.',
            href: '/case-study',
          },
        ]}
      />
    </div>
  );
}
