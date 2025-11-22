import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function ThirdPartyIntelligencePage() {
  return (
    <div>
      <Hero
        badge="AI-SOC Capability"
        title="Third-Party Intelligence"
        description="Third-party and supply chain intelligence that powers threat modeling and assessment within Covenda AI-SOC. Monitors vendor risks and supply chain threats to feed threat operations."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Third-Party Intelligence is a capability domain within Covenda AI-SOC that focuses on vendor and supply chain risks. It feeds threat modeling (how third parties can be attacked), threat assessment (prioritizing third-party risks), and threat monitoring (watching for third-party incidents).
            </p>
          </div>
        </div>
      </section>

      <FeatureGrid
        title="How Third-Party Intelligence Powers the AI-SOC"
        features={[
          {
            icon: '📊',
            title: 'Vendor Risk Scoring',
            description: 'Automated risk assessments for third-party vendors that feed threat modeling and assessment operations.',
          },
          {
            icon: '🔍',
            title: 'Supply Chain Monitoring',
            description: 'Continuous monitoring of supply chain security posture, feeding threat modeling and hunting operations.',
          },
          {
            icon: '⚠️',
            title: 'Breach Detection',
            description: 'Early detection of third-party breaches and incidents, powering threat intelligence and assessment.',
          },
          {
            icon: '📈',
            title: 'Risk Trends',
            description: 'Tracks vendor risk trends over time, feeding threat assessment with context on evolving third-party threats.',
          },
        ]}
      />
    </div>
  );
}
