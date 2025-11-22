import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';
import Link from 'next/link';

export default function ExplorePlatformPage() {
  return (
    <div>
      <Hero
        badge="AI-SOC Platform"
        title="Explore the Covenda AI"
        description="Discover how the Covenda AI powers AI-SOC operations: preemptive threat intelligence, risk-based vulnerability management, and continuous threat operations."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
        secondaryCTA={{ text: 'View Demo Center', href: '/platform/demo-center' }}
      />

      {/* Platform Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              The Platform That Powers Covenda AI-SOC
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Covenda AI is the core AI-native fabric that powers Covenda AI-SOC. It includes Lucid AI for threat modeling, preemptive intelligence, and risk-based vulnerability management. Forward-Deployed Engineers wire it into your environment.
            </p>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <FeatureGrid
        title="How the Covenda AI Powers AI-SOC Operations"
        description="The platform delivers threat modeling, intelligence, risk-based vulnerability management, and automation—all integrated with your existing tools"
        features={[
          {
            icon: '🔍',
            title: 'Preemptive Threat Intelligence',
            description:
              'Event-agnostic, spec-driven threat intelligence that models threats before incidents happen, feeding threat operations.',
            href: '/products/threat-intelligence',
          },
          {
            icon: '🎯',
            title: 'Risk-Based Vulnerability Management',
            description:
              'Lucid AI prioritizes vulnerabilities based on business risk and the gap between specifications and systems, not just CVSS scores.',
            href: '/products/vulnerability-intelligence',
          },
          {
            icon: '⚙️',
            title: 'Threat Operations',
            description:
              'Continuous threat modeling, hunting, intelligence, monitoring, and assessment through the platform.',
            href: '/platform',
          },
          {
            icon: '🔌',
            title: 'Seamless Integrations',
            description:
              'Wires into your existing stack: SIEM, EDR, cloud, identity, ticketing, CI/CD. Works with your tools, not instead of them.',
            href: '/platform/integrations',
          },
          {
            icon: '🚀',
            title: 'Forward-Deployed Engineering',
            description:
              'FDEs embed with your team to wire the platform into your environment, accelerating time to value.',
            href: '/services/forward-deployed-engineering',
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

      {/* Key Benefits */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                Why Choose Covenda?
              </h2>
              <p className="text-xl text-neutral-600">
                Built for organizations who want to turn on an AI-SOC instead of building one from scratch
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-brand-orange"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-4">Forward-Deployed Engineers</h3>
                <p className="text-neutral-600">
                  Security engineers embedded with your team to build detections, automate responses, and co-manage operations
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-brand-orange"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-4">Measurable Outcomes</h3>
                <p className="text-neutral-600">
                  Achieve 70% faster MTTD, 24/7 coverage, and production-ready detections in 2-4 weeks
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-brand-orange"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-4">Co-Managed Operations</h3>
                <p className="text-neutral-600">
                  Co-manage your AI-SOC operations with defined SLOs and continuous improvement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Seamless Integration with Your Security Stack
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Covenda AI wires into your existing tools—SIEM, EDR, cloud, identity, ticketing, CI/CD—so the AI-SOC works with your environment, not against it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/platform/integrations" className="btn btn-primary">
                Explore Integrations
              </Link>
              <Link href="/book-demo" className="btn btn-secondary">
                See It In Action
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-brand-navy via-brand-orange to-brand-orange relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container-custom relative text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Turn on Your AI-SOC
          </h2>
          <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
            Covenda runs security operations as a product. Forward-Deployed Engineers embed with your team to wire it into your environment. Get started with a demo or assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-demo" className="btn bg-white hover:bg-neutral-100 text-brand-navy text-lg px-8 py-4">
              Book a Demo
            </Link>
            <Link
              href="/platform/demo-center"
              className="btn bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 backdrop-blur-sm text-lg px-8 py-4"
            >
              Try Interactive Demos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

