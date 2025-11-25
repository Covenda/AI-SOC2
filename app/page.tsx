import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-brand-orange overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container-custom relative">
          <div className="py-24 md:py-32 lg:py-40 max-w-5xl">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium">
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                AI-SOC as a Product
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              Your AI-SOC
            </h1>
            <p className="text-xl md:text-2xl text-neutral-200 mb-8 max-w-3xl text-balance">
              Covenda runs security operations as a product. We deliver threat modeling, hunting, intelligence, monitoring, and assessment—continuously, preemptively, and risk-based—through our platform and Forward-Deployed Engineers.
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
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-neutral-600">AI-SOC Operations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">Preemptive</div>
              <div className="text-neutral-600">Threat Modeling</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">Risk-Based</div>
              <div className="text-neutral-600">Vulnerability Management</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">Event-Agnostic</div>
              <div className="text-neutral-600">Intelligence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-semibold mb-6">
                Covenda AI
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
                The Platform That Powers Your AI-SOC
              </h2>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Covenda AI delivers preemptive threat intelligence and risk-based vulnerability management. It models threats, maps specifications to systems, and drives continuous security operations.
              </p>
              <ul className="space-y-5 mb-10">
                {[
                  'Preemptive threat modeling before incidents occur',
                  'Risk-based vulnerability management beyond CVSS scores',
                  'Event-agnostic threat intelligence and hunting',
                  'Seamless integration with SIEM, EDR, cloud, and identity systems',
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
                    <span className="text-lg text-neutral-700 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/platform" className="btn btn-primary">
                Explore Platform
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-brand-orange p-1">
                <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 bg-brand-orange rounded-full flex items-center justify-center shadow-glow-orange">
                      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <div className="text-brand-navy font-semibold text-lg">Covenda AI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-orange relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container-custom relative text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Turn on your AI-SOC
          </h2>
          <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
            Covenda runs security operations as a product. Forward-Deployed Engineers embed with your team to wire it into your environment. Get started with a demo or assessment.
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
