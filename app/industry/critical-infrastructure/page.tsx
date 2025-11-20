import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function CriticalInfrastructurePage() {
  return (
    <div>
      <Hero
        badge="Industry"
        title="Critical Infrastructure Protection"
        description="Protect critical infrastructure from sophisticated cyber threats, nation-state actors, and operational disruption."
        primaryCTA={{ text: 'Book a Demo', href: '/get-started#book-demo' }}
      />

      <FeatureGrid
        title="Infrastructure Security Solutions"
        features={[
          {
            icon: '⚡',
            title: 'OT/ICS Security',
            description: 'Protect operational technology and industrial control systems.',
          },
          {
            icon: '🎯',
            title: 'Targeted Threat Intelligence',
            description: 'Intelligence on threats targeting critical infrastructure.',
          },
          {
            icon: '🛡️',
            title: 'Attack Surface Management',
            description: 'Discover and monitor critical infrastructure exposures.',
          },
          {
            icon: '🌍',
            title: 'Geopolitical Risk',
            description: 'Assess geopolitical risks to critical operations.',
          },
        ]}
      />
    </div>
  );
}
