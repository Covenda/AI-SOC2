import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function PaymentFraudIntelligencePage() {
  return (
    <div>
      <Hero
        badge="Product"
        title="Payment Fraud Intelligence"
        description="Detect and prevent payment fraud with real-time intelligence on fraud schemes, compromised cards, and threat actors."
        primaryCTA={{ text: 'Book a Demo', href: '/get-started#book-demo' }}
      />

      <FeatureGrid
        title="Fraud Prevention"
        features={[
          {
            icon: '💳',
            title: 'Card Compromise Detection',
            description: 'Identify compromised payment cards before fraud occurs.',
          },
          {
            icon: '🎣',
            title: 'Fraud Scheme Intelligence',
            description: 'Stay ahead of emerging fraud schemes and techniques.',
          },
          {
            icon: '👥',
            title: 'Threat Actor Tracking',
            description: 'Monitor fraud-focused threat actors and their activities.',
          },
          {
            icon: '🌐',
            title: 'Dark Web Monitoring',
            description: 'Track stolen payment data on dark web marketplaces.',
          },
        ]}
      />
    </div>
  );
}
