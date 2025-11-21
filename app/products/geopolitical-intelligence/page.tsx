import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function GeopoliticalIntelligencePage() {
  return (
    <div>
      <Hero
        badge="Product"
        title="Geopolitical Intelligence"
        description="Understand how geopolitical events impact your security posture and make informed risk decisions."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <FeatureGrid
        title="Geopolitical Risk Insights"
        features={[
          {
            icon: '🌍',
            title: 'Global Threat Landscape',
            description: 'Monitor geopolitical developments affecting cybersecurity.',
          },
          {
            icon: '🎯',
            title: 'Nation-State Activity',
            description: 'Track nation-state threat actors and campaigns.',
          },
          {
            icon: '📊',
            title: 'Regional Risk Assessment',
            description: 'Assess cyber risks by geographic region.',
          },
          {
            icon: '⚠️',
            title: 'Early Warning',
            description: 'Get early warnings of geopolitical cyber threats.',
          },
        ]}
      />
    </div>
  );
}
