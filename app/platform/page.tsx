import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';
import Link from 'next/link';

export default function PlatformPage() {
  return (
    <div>
      <Hero
        variant="product"
        badge="AI-SOC Platform"
        title="Covenda AI"
        description="The core AI-native fabric that powers Covenda AI-SOC. Includes Lucid AI for threat modeling, preemptive intelligence, and risk-based vulnerability management."
        primaryCTA={{ text: 'Get a custom demo', href: '/book-demo' }}
        secondaryCTA={{ text: 'View Demo Center', href: '/platform/demo-center' }}
      />

      <FeatureGrid
        title="How the Covenda AI Powers Your AI-SOC"
        description="The platform delivers threat modeling, intelligence, risk-based vulnerability management, and automation—all integrated with your existing tools and tuned by Forward-Deployed Engineers"
        features={[
          {
            icon: '🔍',
            title: 'Preemptive Threat Intelligence',
            description:
              'Event-agnostic, spec-driven threat intelligence that models threats before incidents happen. Maps the gap between your security specifications and actual systems.',
            href: '/products/threat-intelligence',
          },
          {
            icon: '🎯',
            title: 'Risk-Based Vulnerability Management',
            description:
              'Lucid AI prioritizes vulnerabilities based on business risk, not just CVSS scores. Focuses on what actually matters to your organization.',
            href: '/products/vulnerability-intelligence',
          },
          {
            icon: '🗺️',
            title: 'Threat Modeling',
            description:
              'Models how systems can be attacked, including AI-/AGI-specific threat scenarios. Feeds threat hunting and monitoring operations.',
            href: '/platform/recorded-future-ai',
          },
          {
            icon: '🔌',
            title: 'Seamless Integrations',
            description:
              'Wires into your existing stack: SIEM, EDR, cloud, identity, ticketing, CI/CD. The platform works with your tools, not instead of them.',
            href: '/platform/integrations',
          },
          {
            icon: '📊',
            title: 'Intelligence Graph',
            description:
              'Connects threat intelligence, controls, evidence, and automated response in a unified graph that powers threat operations.',
            href: '/platform/intelligence-graph',
          },
          {
            icon: '🎯',
            title: 'Demo Center',
            description:
              'Explore interactive demos of the Covenda AI and how it powers AI-SOC operations.',
            href: '/platform/demo-center',
          },
        ]}
      />

      {/* Integration Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Integrated with Your Security Stack
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Covenda AI wires into your existing tools—SIEM, EDR, cloud, identity, ticketing, CI/CD—so the AI-SOC works with your environment, not against it.
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
