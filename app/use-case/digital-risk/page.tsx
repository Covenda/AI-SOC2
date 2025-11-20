import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function DigitalRiskPage() {
  return (
    <div>
      <Hero
        badge="Use Case"
        title="Digital Risk Protection"
        description="Protect your organization from digital risks including brand abuse, executive impersonation, and data leakage."
        primaryCTA={{ text: 'Book a Demo', href: '/get-started#book-demo' }}
      />

      <FeatureGrid
        title="Digital Risk Capabilities"
        features={[
          {
            icon: '🎯',
            title: 'Brand Protection',
            description: 'Monitor and protect your brand from abuse across digital channels.',
          },
          {
            icon: '👥',
            title: 'Executive Protection',
            description: 'Protect executives from impersonation and targeted attacks.',
          },
          {
            icon: '📱',
            title: 'Social Media Monitoring',
            description: 'Monitor social media for threats and brand abuse.',
          },
          {
            icon: '🔍',
            title: 'Data Leakage Detection',
            description: 'Detect sensitive data exposure across the web and dark web.',
          },
        ]}
      />
    </div>
  );
}
