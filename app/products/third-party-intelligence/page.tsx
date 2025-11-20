import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function ThirdPartyIntelligencePage() {
  return (
    <div>
      <Hero
        badge="Product"
        title="Third-Party Intelligence"
        description="Assess and monitor security risks across your vendor ecosystem and supply chain."
        primaryCTA={{ text: 'Book a Demo', href: '/get-started#book-demo' }}
      />

      <FeatureGrid
        title="Third-Party Risk Management"
        features={[
          {
            icon: '📊',
            title: 'Vendor Risk Scoring',
            description: 'Automated risk assessments for third-party vendors.',
          },
          {
            icon: '🔍',
            title: 'Supply Chain Monitoring',
            description: 'Continuous monitoring of your supply chain security posture.',
          },
          {
            icon: '⚠️',
            title: 'Breach Detection',
            description: 'Early detection of third-party breaches and incidents.',
          },
          {
            icon: '📈',
            title: 'Risk Trends',
            description: 'Track vendor risk trends over time.',
          },
        ]}
      />
    </div>
  );
}
