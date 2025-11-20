import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function AutomationSecurityWorkflowsPage() {
  return (
    <div>
      <Hero
        badge="Use Case"
        title="Security Workflow Automation"
        description="Automate security workflows with intelligence-driven orchestration to reduce response times and analyst workload."
        primaryCTA={{ text: 'Book a Demo', href: '/get-started#book-demo' }}
      />

      <FeatureGrid
        title="Automation Capabilities"
        features={[
          {
            icon: '⚡',
            title: 'Alert Enrichment',
            description: 'Automatically enrich alerts with threat intelligence context.',
          },
          {
            icon: '🤖',
            title: 'SOAR Integration',
            description: 'Seamlessly integrate with SOAR platforms for automated response.',
          },
          {
            icon: '📊',
            title: 'Threat Prioritization',
            description: 'Automatically prioritize threats based on risk and relevance.',
          },
          {
            icon: '🔄',
            title: 'Workflow Orchestration',
            description: 'Orchestrate complex security workflows across tools.',
          },
        ]}
      />
    </div>
  );
}
