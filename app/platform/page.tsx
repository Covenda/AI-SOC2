import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';
import Link from 'next/link';

export default function PlatformPage() {
  return (
    <div>
      <Hero
        badge="AI-SOC Platform"
        title="Covenda AI Platform"
        description="A unified platform that connects threat intelligence, controls, evidence, and automated response in a single ecosystem."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
        secondaryCTA={{ text: 'View Demo Center', href: '/platform/demo-center' }}
      />

      <FeatureGrid
        title="Platform Capabilities"
        description="Comprehensive AI-SOC capabilities built for modern security teams"
        features={[
          {
            icon: '🔍',
            title: 'Threat Intelligence',
            description:
              'Real-time threat intelligence to identify and prioritize threats before they impact your organization.',
            href: '/products/threat-intelligence',
          },
          {
            icon: '🤖',
            title: 'Detection Engineering',
            description:
              'Build, tune, and deploy custom detections tailored to your environment and threat landscape.',
            href: '/use-case/automation-security-workflows',
          },
          {
            icon: '⚙️',
            title: 'Automated Response',
            description:
              'Automate security workflows and response playbooks to reduce mean time to respond.',
            href: '/use-case/automation-security-workflows',
          },
          {
            icon: '🔌',
            title: 'Integrations',
            description:
              'Seamlessly integrate with 50+ security tools including SIEM, SOAR, and ticketing systems.',
            href: '/platform/integrations',
          },
          {
            icon: '📊',
            title: 'Co-Managed Operations',
            description:
              'Co-manage your AI-SOC operations with defined SLOs and continuous improvement.',
            href: '/platform',
          },
          {
            icon: '🎯',
            title: 'Demo Center',
            description:
              'Explore interactive demos of our platform capabilities and use cases.',
            href: '/platform/demo-center',
          },
        ]}
      />

      {/* Integration Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Seamless Integration with Your Security Stack
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Connect Covenda AI with your existing SIEM, SOAR, ticketing systems, and other security tools
            </p>
            <Link href="/platform/integrations" className="btn btn-primary">
              Explore Integrations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
