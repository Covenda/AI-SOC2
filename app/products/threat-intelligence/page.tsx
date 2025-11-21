import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function ThreatIntelligencePage() {
  return (
    <div>
      <Hero
        badge="Product"
        title="Threat Intelligence"
        description="Real-time threat intelligence to identify, investigate, and respond to cyber threats before they impact your organization."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
        secondaryCTA={{ text: 'Learn More', href: '/platform' }}
      />

      <FeatureGrid
        title="Key Capabilities"
        features={[
          {
            icon: '🎯',
            title: 'Real-Time Threat Detection',
            description: 'Identify emerging threats as they develop across global sources.',
          },
          {
            icon: '📊',
            title: 'Risk Scoring',
            description: 'Automated risk scoring to prioritize threats based on relevance.',
          },
          {
            icon: '🔍',
            title: 'Threat Actor Tracking',
            description: 'Monitor threat actors, their TTPs, and campaign activity.',
          },
          {
            icon: '⚡',
            title: 'Automated Enrichment',
            description: 'Enrich alerts with context from our Intelligence Graph.',
          },
        ]}
      />
    </div>
  );
}
