import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function IntegrationsPage() {
  return (
    <div>
      <Hero
        badge="Integrations"
        title="Integrations with Your Security Stack"
        description="Covenda AI wires into your existing tools—SIEM, EDR, cloud, identity, ticketing, CI/CD—so the AI-SOC works with your environment, not against it."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <FeatureGrid
        title="How the Covenda AI Integrates"
        description="Forward-Deployed Engineers wire the platform into your existing stack so threat operations run seamlessly across your tools"
        features={[
          {
            icon: '📊',
            title: 'SIEM Integration',
            description: 'Wires threat intelligence, detections, and alerts into your SIEM (Splunk, IBM QRadar, Microsoft Sentinel, etc.) for unified monitoring and response.',
          },
          {
            icon: '🔒',
            title: 'EDR & Endpoint Security',
            description: 'Integrates with EDR platforms (CrowdStrike, Carbon Black, etc.) to feed threat hunting and monitoring operations with endpoint telemetry.',
          },
          {
            icon: '☁️',
            title: 'Cloud Security',
            description: 'Connects with cloud security tools (AWS Security Hub, Azure Security Center, GCP Security Command Center) for cloud-native threat operations.',
          },
          {
            icon: '🆔',
            title: 'Identity & Access',
            description: 'Integrates with identity providers and IAM systems to power identity intelligence and threat assessment.',
          },
          {
            icon: '🎫',
            title: 'Ticketing & Workflow',
            description: 'Connects with ticketing systems (Jira, ServiceNow, etc.) and CI/CD pipelines to automate security workflows.',
          },
          {
            icon: '🔗',
            title: 'Custom Integrations',
            description: 'Forward-Deployed Engineers build custom integrations as needed, then feed patterns back into the platform for reuse.',
          },
        ]}
      />
    </div>
  );
}
