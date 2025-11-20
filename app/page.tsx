import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-blue to-brand-purple overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container-custom relative">
          <div className="py-24 md:py-32 lg:py-40 max-w-5xl">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium">
                <span className="w-2 h-2 bg-brand-cyan rounded-full mr-2 animate-pulse"></span>
                Intelligence Cloud Platform
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              Real-Time Intelligence for Enterprise Security
            </h1>
            <p className="text-xl md:text-2xl text-neutral-200 mb-8 max-w-3xl text-balance">
              The world's largest provider of intelligence for cybersecurity. Proactively defend
              your organization with actionable threat intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-started#book-demo"
                className="btn bg-white hover:bg-neutral-100 text-brand-navy focus:ring-white text-lg px-8 py-4"
              >
                Book a Demo
              </Link>
              <Link
                href="/platform"
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
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">1,900+</div>
              <div className="text-neutral-600">Global Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">75+</div>
              <div className="text-neutral-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">1,000+</div>
              <div className="text-neutral-600">Integrations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-neutral-600">Threat Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
              Intelligence Solutions
            </h2>
            <p className="text-xl text-neutral-600">
              Comprehensive intelligence products designed to protect every aspect of your
              organization
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Threat Intelligence',
                description:
                  'Real-time threat intelligence to identify and mitigate cyber threats before they impact your organization.',
                href: '/products/threat-intelligence',
                icon: '🛡️',
              },
              {
                title: 'Brand Intelligence',
                description:
                  'Protect your brand from digital threats including phishing, fraud, and impersonation attacks.',
                href: '/products/brand-intelligence',
                icon: '🏷️',
              },
              {
                title: 'Vulnerability Intelligence',
                description:
                  'Prioritize vulnerabilities based on real-world exploitation data and threat context.',
                href: '/products/vulnerability-intelligence',
                icon: '🔍',
              },
              {
                title: 'Identity Intelligence',
                description:
                  'Monitor and protect against identity compromise and credential exposure across the web.',
                href: '/products/identity-intelligence',
                icon: '👤',
              },
              {
                title: 'Attack Surface Intelligence',
                description:
                  'Discover and monitor your external attack surface to reduce risk and exposure.',
                href: '/products/attack-surface-intelligence',
                icon: '🌐',
              },
              {
                title: 'Third-Party Intelligence',
                description:
                  'Assess and monitor third-party security risks across your supply chain.',
                href: '/products/third-party-intelligence',
                icon: '🤝',
              },
            ].map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="card group cursor-pointer hover:border-brand-blue hover:shadow-soft"
              >
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-blue transition-colors">
                  {product.title}
                </h3>
                <p className="text-neutral-600 mb-4">{product.description}</p>
                <div className="flex items-center text-brand-blue font-semibold">
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
              <div className="inline-block px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-semibold mb-6">
                Intelligence Cloud Platform
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
                Powered by the Intelligence Graph
              </h2>
              <p className="text-xl text-neutral-600 mb-8">
                Our Intelligence Graph analyzes data from millions of sources across the open web,
                dark web, and technical sources to deliver actionable intelligence.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Real-time collection from 1M+ sources',
                  'AI-powered analysis and correlation',
                  'Automated threat detection and alerts',
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
              <Link href="/platform/intelligence-graph" className="btn btn-primary">
                Explore Intelligence Graph
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-blue via-brand-purple to-brand-cyan p-1">
                <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-brand-blue to-brand-purple rounded-full flex items-center justify-center shadow-glow-blue">
                      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <div className="text-brand-navy font-semibold text-lg">Intelligence Graph</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
              Trusted by Leading Industries
            </h2>
            <p className="text-xl text-neutral-600">
              Organizations across every sector rely on Recorded Future for intelligence
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Financial', href: '/industry/financial' },
              { name: 'Healthcare', href: '/industry/healthcare' },
              { name: 'Public Sector', href: '/industry/public-sector' },
              { name: 'Infrastructure', href: '/industry/critical-infrastructure' },
              { name: 'Technology', href: '/industry/technology' },
              { name: 'Retail', href: '/industry/retail' },
            ].map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="card text-center group hover:border-brand-blue"
              >
                <div className="font-semibold text-brand-navy group-hover:text-brand-blue transition-colors">
                  {industry.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-brand-navy via-brand-blue to-brand-purple relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container-custom relative text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
            See how Recorded Future can transform your security operations with real-time intelligence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-started#book-demo"
              className="btn bg-white hover:bg-neutral-100 text-brand-navy focus:ring-white text-lg px-8 py-4"
            >
              Book a Demo
            </Link>
            <Link
              href="/get-started#free-tools"
              className="btn bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 backdrop-blur-sm focus:ring-white text-lg px-8 py-4"
            >
              Try Free Tools
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
