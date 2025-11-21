import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function IdentityIntelligencePage() {
  return (
    <div>
      <Hero
        badge="Product"
        title="Identity Intelligence"
        description="Monitor and protect against identity compromise, credential exposure, and account takeover across the web and dark web."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <FeatureGrid
        title="Identity Protection"
        features={[
          {
            icon: '🔑',
            title: 'Credential Monitoring',
            description: 'Monitor for exposed credentials across dark web marketplaces.',
          },
          {
            icon: '👤',
            title: 'Account Takeover Detection',
            description: 'Detect account compromise and unauthorized access attempts.',
          },
          {
            icon: '🎯',
            title: 'Executive Monitoring',
            description: 'Protect high-value targets from targeted attacks.',
          },
          {
            icon: '📧',
            title: 'Email Exposure',
            description: 'Track email addresses exposed in breaches and leaks.',
          },
        ]}
      />
    </div>
  );
}
