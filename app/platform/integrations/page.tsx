import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function IntegrationsPage() {
  return (
    <div>
      <Hero
        badge="Integrations"
        title="1,000+ Security Integrations"
        description="Connect Recorded Future with your existing security tools for seamless intelligence enrichment."
        primaryCTA={{ text: 'Book a Demo', href: '/get-started#book-demo' }}
      />

      <FeatureGrid
        title="Integration Categories"
        features={[
          {
            icon: '📊',
            title: 'SIEM',
            description: 'Splunk, IBM QRadar, Microsoft Sentinel, and more.',
          },
          {
            icon: '🤖',
            title: 'SOAR',
            description: 'Palo Alto Cortex XSOAR, Splunk Phantom, IBM Resilient.',
          },
          {
            icon: '🔒',
            title: 'Firewalls & EDR',
            description: 'Palo Alto Networks, CrowdStrike, Carbon Black.',
          },
          {
            icon: '🎯',
            title: 'Threat Intelligence Platforms',
            description: 'Anomali, ThreatConnect, MISP, and more.',
          },
          {
            icon: '📧',
            title: 'Email Security',
            description: 'Proofpoint, Mimecast, Microsoft Defender.',
          },
          {
            icon: '🌐',
            title: 'Network Security',
            description: 'Cisco, Fortinet, Check Point, and more.',
          },
        ]}
      />
    </div>
  );
}
