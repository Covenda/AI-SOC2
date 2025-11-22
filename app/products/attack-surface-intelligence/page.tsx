import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function AttackSurfaceIntelligencePage() {
  return (
    <div>
      <Hero
        badge="AI-SOC Capability"
        title="Attack Surface Intelligence"
        description="Maps your external attack surface to feed threat modeling and hunting operations. Discovers exposures and misconfigurations that create gaps between your security specifications and actual systems."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Attack Surface Intelligence is a capability domain within Covenda AI-SOC that maps your external exposure to feed threat modeling and hunting operations. It identifies the gap between your intended security posture and what's actually exposed.
            </p>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              This intelligence powers threat modeling by showing how attackers can reach your systems, feeds threat hunting by identifying exposed assets that need monitoring, and supports threat assessment by prioritizing exposures based on business risk.
            </p>
          </div>
        </div>
      </section>

      <FeatureGrid
        title="How Attack Surface Intelligence Powers the AI-SOC"
        features={[
          {
            icon: '🌐',
            title: 'Continuous Asset Discovery',
            description: 'Automatically discovers all internet-facing assets, including shadow IT and unmanaged systems that create security gaps.',
          },
          {
            icon: '🔍',
            title: 'Exposure Mapping',
            description: 'Identifies and monitors security exposures and misconfigurations that create gaps between specifications and reality.',
          },
          {
            icon: '📊',
            title: 'Threat Modeling Integration',
            description: 'Feeds threat modeling by showing how exposed assets can be attacked, including AI-/AGI-specific attack paths.',
          },
          {
            icon: '🎯',
            title: 'Risk-Based Prioritization',
            description: 'Prioritizes exposures based on business risk and exploitability, feeding threat assessment operations.',
          },
        ]}
      />
    </div>
  );
}
