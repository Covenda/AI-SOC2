import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function AttackSurfaceIntelligencePage() {
  return (
    <div>
      <Hero
        badge="Product"
        title="Attack Surface Intelligence"
        description="Discover, monitor, and reduce your external attack surface with continuous asset discovery and risk assessment."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <FeatureGrid
        title="Attack Surface Management"
        features={[
          {
            icon: '🌐',
            title: 'Asset Discovery',
            description: 'Automatically discover all internet-facing assets.',
          },
          {
            icon: '🔍',
            title: 'Exposure Monitoring',
            description: 'Identify and monitor security exposures and misconfigurations.',
          },
          {
            icon: '📊',
            title: 'Risk Prioritization',
            description: 'Prioritize risks based on exploitability and business impact.',
          },
          {
            icon: '🎯',
            title: 'Shadow IT Detection',
            description: 'Discover unknown and unmanaged assets.',
          },
        ]}
      />
    </div>
  );
}
