import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function GeopoliticalIntelligencePage() {
  return (
    <div>
      <Hero
        badge="AI-SOC Capability"
        title="Geopolitical Intelligence"
        description="Geopolitical intelligence that powers threat modeling and assessment within Covenda's AI-SOC. Understands how geopolitical events impact security posture and feeds threat operations with regional risk context."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Geopolitical Intelligence is a capability domain within Covenda's AI-SOC that focuses on how geopolitical events impact security. It feeds threat modeling (nation-state attack scenarios), threat intelligence (geopolitical threat context), and threat assessment (regional risk prioritization).
            </p>
          </div>
        </div>
      </section>

      <FeatureGrid
        title="How Geopolitical Intelligence Powers the AI-SOC"
        features={[
          {
            icon: '🌍',
            title: 'Global Threat Landscape',
            description: 'Monitors geopolitical developments affecting cybersecurity, feeding threat intelligence and modeling operations.',
          },
          {
            icon: '🎯',
            title: 'Nation-State Activity',
            description: 'Tracks nation-state threat actors and campaigns, powering threat modeling and assessment with geopolitical context.',
          },
          {
            icon: '📊',
            title: 'Regional Risk Assessment',
            description: 'Assesses cyber risks by geographic region, feeding threat assessment with regional risk prioritization.',
          },
          {
            icon: '⚠️',
            title: 'Early Warning',
            description: 'Provides early warnings of geopolitical cyber threats, feeding threat intelligence and monitoring operations.',
          },
        ]}
      />
    </div>
  );
}
