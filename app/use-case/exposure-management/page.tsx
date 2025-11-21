import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function ExposureManagementPage() {
  return (
    <div>
      <Hero
        badge="Use Case"
        title="Exposure Management"
        description="Discover, assess, and reduce security exposures across your attack surface with continuous monitoring."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <FeatureGrid
        title="Exposure Management Capabilities"
        features={[
          {
            icon: '🌐',
            title: 'Asset Discovery',
            description: 'Continuously discover internet-facing assets and exposures.',
          },
          {
            icon: '📊',
            title: 'Risk Assessment',
            description: 'Assess and prioritize exposures based on exploitability.',
          },
          {
            icon: '🔍',
            title: 'Vulnerability Correlation',
            description: 'Correlate exposures with vulnerability intelligence.',
          },
          {
            icon: '⚡',
            title: 'Remediation Guidance',
            description: 'Get actionable guidance to reduce exposures.',
          },
        ]}
      />
    </div>
  );
}
