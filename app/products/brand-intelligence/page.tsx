import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function BrandIntelligencePage() {
  return (
    <div>
      <Hero
        badge="AI-SOC Capability"
        title="Brand Intelligence"
        description="Brand-focused intelligence that powers threat modeling, hunting, and assessment within Covenda's AI-SOC. Monitors phishing, fraud, impersonation, and domain abuse to feed threat operations."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Brand Intelligence is a capability domain within Covenda's AI-SOC that focuses on brand-related threats. It feeds threat modeling (how brands can be impersonated), threat hunting (looking for brand abuse), and threat assessment (prioritizing brand risks).
            </p>
          </div>
        </div>
      </section>

      <FeatureGrid
        title="How Brand Intelligence Powers the AI-SOC"
        features={[
          {
            icon: '🎣',
            title: 'Phishing Detection',
            description: 'Detects and tracks phishing sites targeting your brand, feeding threat hunting and monitoring operations.',
          },
          {
            icon: '🌐',
            title: 'Domain Monitoring',
            description: 'Monitors for typosquatting and malicious domain registrations, feeding threat modeling and assessment.',
          },
          {
            icon: '👥',
            title: 'Impersonation Detection',
            description: 'Identifies fake social media accounts and executive impersonation, powering threat intelligence and assessment.',
          },
          {
            icon: '🛡️',
            title: 'Brand Abuse Tracking',
            description: 'Detects unauthorized use of trademarks and brand assets, feeding threat monitoring and response operations.',
          },
        ]}
      />
    </div>
  );
}
