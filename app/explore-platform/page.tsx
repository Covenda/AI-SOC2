import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';
import Link from 'next/link';

export default function ExplorePlatformPage() {
  return (
    <div>
      <Hero
        badge="AI-SOC Platform"
        title="Explore the Covenda AI Platform"
        description="Discover how our unified platform connects threat intelligence, controls, evidence, and automated response in a single ecosystem."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
        secondaryCTA={{ text: 'View Demo Center', href: '/platform/demo-center' }}
      />

      {/* Platform Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              One Platform, Complete AI-SOC
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              The Covenda AI platform is the foundation of modern AI-SOC operations. Connect threat intelligence, build detections, automate responses, and co-manage operations with Forward-Deployed Security Engineers.
            </p>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
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
              'Build and tune custom detections tailored to your environment and threat landscape.',
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

      {/* Key Benefits */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                Why Choose Covenda?
              </h2>
              <p className="text-xl text-neutral-600">
                Built for security teams who need Forward-Deployed Security Engineers and measurable outcomes
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
              Connect Covenda AI with your existing SIEM, SOAR, ticketing systems, and other security tools.
              Our platform integrates with 50+ security products out of the box.
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
            Ready to Build Your AI-SOC?
          </h2>
          <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
            Start with a 2-4 week assessment to understand your current state and build a prioritized roadmap. No long-term commitment required.
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

