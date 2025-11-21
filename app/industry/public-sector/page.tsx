import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function PublicSectorPage() {
  return (
    <div>
      <Hero
        badge="Industry"
        title="Intelligence for Public Sector"
        description="Protect government agencies and critical infrastructure from nation-state threats and cyber attacks."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <FeatureGrid
        title="Public Sector Solutions"
        features={[
          {
            icon: '🏛️',
            title: 'Nation-State Threat Intelligence',
            description: 'Track nation-state actors targeting government agencies.',
          },
          {
            icon: '🔒',
            title: 'Critical Infrastructure Protection',
            description: 'Protect critical infrastructure from cyber threats.',
          },
          {
            icon: '🌍',
            title: 'Geopolitical Intelligence',
            description: 'Understand geopolitical cyber threats and risks.',
          },
          {
            icon: '⚡',
            title: 'Incident Response',
            description: 'Accelerate incident response with actionable intelligence.',
          },
        ]}
      />
    </div>
  );
}
