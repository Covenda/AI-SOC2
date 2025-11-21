import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-orange to-brand-orange overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container-custom relative">
          <div className="py-24 md:py-32 lg:py-40 max-w-5xl">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium">
                <span className="w-2 h-2 bg-brand-cyan rounded-full mr-2 animate-pulse"></span>
                AI-SOC Services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              We are your AI-SOC
            </h1>
            <p className="text-xl md:text-2xl text-neutral-200 mb-8 max-w-3xl text-balance">
              We embed Forward-Deployed Security Engineers with your team to build detections, automate responses, and co-manage operations on Covenda AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book-demo"
                className="btn bg-white hover:bg-neutral-100 text-brand-navy focus:ring-white text-lg px-8 py-4"
              >
                Book a Demo
              </Link>
              <Link
                href="/explore-platform"
                className="btn bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 backdrop-blur-sm focus:ring-white text-lg px-8 py-4"
              >
                Explore Platform
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b border-neutral-200">
        <div className="container-custom py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">70%</div>
              <div className="text-neutral-600">Faster MTTD</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-neutral-600">Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">2-4 wks</div>
              <div className="text-neutral-600">To Production</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">50+</div>
              <div className="text-neutral-600">Integrations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
              How It Works
            </h2>
            <p className="text-xl text-neutral-600">
              Covenda AI connects threat intelligence, controls, evidence, and automated response in a single ecosystem
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Examine',
                description:
                  'Comprehensive security posture evaluation with actionable roadmap.',
                href: '/explore-platform',
                icon: '🔍',
              },
              {
                title: 'Deploy',
                description:
                  'Forward-deployed security engineers embedded with your team.',
                href: '/work-with-us',
                icon: '🚀',
              },
              {
                title: 'Operate',
                description:
                  'Co-managed AI-SOC operations with defined SLOs.',
                href: '/platform',
                icon: '⚙️',
              },
            ].map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="card group cursor-pointer hover:border-brand-orange hover:shadow-soft"
              >
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">
                  {product.title}
                </h3>
                <p className="text-neutral-600 mb-4">{product.description}</p>
                <div className="flex items-center text-brand-orange font-semibold">
                  Learn more
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-semibold mb-6">
                Forward-Deployed Engineers
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
                Detection & Automation
              </h2>
              <p className="text-xl text-neutral-600 mb-8">
                Our Forward-Deployed Security Engineers work alongside your team to build custom detections, automate security workflows, and co-manage your AI-SOC operations.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Custom detection engineering and tuning',
                  'Automated response playbooks and workflows',
                  'Co-managed operations with defined SLOs',
                  'Seamless integration with your security stack',
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-brand-cyan mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-lg text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/platform" className="btn btn-primary">
                Explore Platform
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-orange via-brand-orange to-brand-cyan p-1">
                <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-brand-orange to-brand-orange rounded-full flex items-center justify-center shadow-glow-orange">
                      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <div className="text-brand-navy font-semibold text-lg">Covenda AI Platform</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-brand-navy via-brand-orange to-brand-orange relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container-custom relative text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to build your AI-SOC?
          </h2>
          <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
            Start with a 2-4 week assessment to understand your current state and build a prioritized roadmap. No long-term commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-demo"
              className="btn bg-white hover:bg-neutral-100 text-brand-navy focus:ring-white text-lg px-8 py-4"
            >
              Book a Demo
            </Link>
            <Link
              href="/get-started#free-tools"
              className="btn bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 backdrop-blur-sm focus:ring-white text-lg px-8 py-4"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
