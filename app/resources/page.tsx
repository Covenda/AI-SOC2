import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function ResourcesPage() {
  return (
    <div>
      <Hero
        variant="simple"
        badge="Resources"
        title="Intelligence Resources"
        description="Access guides, reports, and tools to enhance your security program."
      />

      <FeatureGrid
        features={[
          {
            icon: '📚',
            title: 'Guides & eBooks',
            description: 'Comprehensive guides on threat intelligence and security best practices.',
            href: '/resources/guides',
          },
          {
            icon: '📊',
            title: 'Research Reports',
            description: 'In-depth research from our Insikt Group threat intelligence team.',
            href: '/research',
          },
          {
            icon: '🔍',
            title: 'Trending Vulnerabilities',
            description: 'Track the most exploited and trending vulnerabilities.',
            href: '/resources/trending-vulnerabilities',
          },
          {
            icon: '📈',
            title: 'Maturity Assessment',
            description: 'Assess your threat intelligence program maturity.',
            href: '/resources/maturity-assessment',
          },
          {
            icon: '🗄️',
            title: 'Vulnerability Database',
            description: 'Search our comprehensive vulnerability intelligence database.',
            href: '/vulnerability-database',
          },
          {
            icon: '💼',
            title: 'Case Studies',
            description: 'See how organizations use Covenda AI intelligence.',
            href: '/case-study',
          },
        ]}
      />
    </div>
  );
}
