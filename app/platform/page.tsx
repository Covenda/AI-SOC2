import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';
import Link from 'next/link';

import Image from 'next/image';

export default function PlatformPage() {
  return (
    <div>
      <Hero
        badge="AI-SOC Platform"
        title="Covenda AI"
        description="The core AI-native fabric that powers Covenda AI-SOC. Includes Lucid AI for threat modeling, preemptive intelligence, and risk-based vulnerability management."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
        secondaryCTA={{ text: 'View Demo Center', href: '/platform/demo-center' }}
      />

      {/* Platform Visual Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                The Platform That Powers Your AI-SOC
              </h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                Covenda AI delivers preemptive threat intelligence and risk-based vulnerability management. It models threats, maps specifications to systems, and drives continuous security operations.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-700">Preemptive threat modeling before incidents occur</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-700">Risk-based vulnerability management beyond CVSS scores</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-700">Event-agnostic threat intelligence and hunting</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-700">Seamless integration with SIEM, EDR, cloud, and identity systems</span>
                </li>
              </ul>
              <Link href="/platform/demo-center" className="btn btn-primary">
                Explore Platform
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/platform-visual.png" 
                  alt="AI-SOC Operations Dashboard" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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
