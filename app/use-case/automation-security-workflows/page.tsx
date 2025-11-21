import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function AutomationSecurityWorkflowsPage() {
  return (
    <div>
      <Hero
        badge="Use Case"
        title="Security Workflow Automation"
        description="Our Forward-Deployed Security Engineers help you automate security workflows, build custom detections, and orchestrate responses to reduce mean time to respond."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <FeatureGrid
        title="Automation Capabilities"
        features={[
          {
            icon: '🔍',
            title: 'Detection Engineering',
            description: 'Build and tune custom detections tailored to your environment and threat landscape.',
          },
          {
            icon: '🤖',
            title: 'Automated Response',
            description: 'Create automated response playbooks to reduce mean time to respond.',
          },
          {
            icon: '⚡',
            title: 'Workflow Automation',
            description: 'Automate security workflows across your SIEM, SOAR, and ticketing systems.',
          },
          {
            icon: '📊',
            title: 'Continuous Improvement',
            description: 'Co-manage operations with defined SLOs and continuous tuning.',
          },
        ]}
      />
    </div>
  );
}
