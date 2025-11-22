import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function IdentityIntelligencePage() {
  return (
    <div>
      <Hero
        badge="AI-SOC Capability"
        title="Identity Intelligence"
        description="Identity-focused intelligence that powers threat modeling, hunting, and assessment within Covenda's AI-SOC. Monitors identity compromise, credential exposure, and account takeover to feed threat operations."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Identity Intelligence is a capability domain within Covenda's AI-SOC that focuses on identity-related threats. It feeds threat modeling (how identity can be compromised), threat hunting (looking for signs of identity compromise), and threat assessment (prioritizing identity risks).
            </p>
          </div>
        </div>
      </section>

      <FeatureGrid
        title="How Identity Intelligence Powers the AI-SOC"
        features={[
          {
            icon: '🔑',
            title: 'Credential Monitoring',
            description: 'Monitors for exposed credentials across dark web marketplaces, feeding threat hunting and assessment operations.',
          },
          {
            icon: '👤',
            title: 'Account Takeover Detection',
            description: 'Detects account compromise and unauthorized access attempts, powering threat monitoring and response.',
          },
          {
            icon: '🎯',
            title: 'Executive Monitoring',
            description: 'Protects high-value targets from targeted attacks, feeding threat modeling and assessment with identity-specific risk context.',
          },
          {
            icon: '📧',
            title: 'Email Exposure Tracking',
            description: 'Tracks email addresses exposed in breaches and leaks, feeding threat intelligence and assessment operations.',
          },
        ]}
      />
    </div>
  );
}
