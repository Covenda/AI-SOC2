import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function SecOpsIntelligencePage() {
  return (
    <div>
      <Hero
        badge="Product"
        title="SecOps Intelligence"
        description="Streamline security operations with automated threat detection, investigation, and response capabilities."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <FeatureGrid
        title="SecOps Capabilities"
        features={[
          {
            icon: '⚡',
            title: 'Alert Triage',
            description: 'Automate alert enrichment and prioritization to reduce noise.',
          },
          {
            icon: '🔍',
            title: 'Threat Hunting',
            description: 'Proactive threat hunting with context-rich intelligence.',
          },
          {
            icon: '🤖',
            title: 'SOAR Integration',
            description: 'Automate workflows with seamless SOAR platform integration.',
          },
          {
            icon: '📊',
            title: 'Incident Response',
            description: 'Accelerate incident response with actionable intelligence.',
          },
        ]}
      />
    </div>
  );
}
