import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function PaymentFraudIntelligencePage() {
  return (
    <div>
      <Hero
        variant="product"
        badge="AI-SOC Capability"
        title="Payment Fraud Intelligence"
        description="Payment fraud intelligence that powers threat modeling, hunting, and assessment within Covenda AI-SOC. Monitors fraud schemes, compromised cards, and threat actors to feed threat operations."
        primaryCTA={{ text: 'Get a custom demo', href: '/book-demo' }}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Payment Fraud Intelligence is a capability domain within Covenda AI-SOC that focuses on payment-related threats. It feeds threat modeling (how payment systems can be attacked), threat hunting (looking for fraud indicators), and threat assessment (prioritizing payment risks).
            </p>
          </div>
        </div>
      </section>

      <FeatureGrid
        title="How Payment Fraud Intelligence Powers the AI-SOC"
        features={[
          {
            icon: '💳',
            title: 'Card Compromise Detection',
            description: 'Identifies compromised payment cards before fraud occurs, feeding threat hunting and monitoring operations.',
          },
          {
            icon: '🎣',
            title: 'Fraud Scheme Intelligence',
            description: 'Tracks emerging fraud schemes and techniques, powering threat modeling and intelligence operations.',
          },
          {
            icon: '👥',
            title: 'Threat Actor Tracking',
            description: 'Monitors fraud-focused threat actors and their activities, feeding threat intelligence and assessment.',
          },
          {
            icon: '🌐',
            title: 'Dark Web Monitoring',
            description: 'Tracks stolen payment data on dark web marketplaces, powering threat hunting and intelligence operations.',
          },
        ]}
      />
    </div>
  );
}
