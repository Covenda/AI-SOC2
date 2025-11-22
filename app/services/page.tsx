import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div>
      <Hero
        badge="Services"
        title="AI-SOC Services"
        description="We embed Forward-Deployed Security Engineers with your team to build detections, automate responses, and co-manage operations on Covenda AI."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <FeatureGrid
        title="Our Services"
        description="Comprehensive AI-SOC services designed to help you build and operate effective security capabilities"
        features={[
          {
            icon: '🔍',
            title: 'Security Engineering',
            description:
              'Comprehensive security posture evaluation with actionable roadmap and custom detection engineering.',
            href: '/services/security-engineering',
          },
          {
            icon: '🚀',
            title: 'Forward-Deployed Engineering',
            description:
              'Security engineers embedded with your team to build detections, automate workflows, and transfer knowledge.',
            href: '/services/forward-deployed-engineering',
          },
          {
            icon: '⚙️',
            title: 'AI-SOC Co-Management',
            description:
              'Co-manage your security operations with defined SLOs, continuous improvement, and measurable outcomes.',
            href: '/services/ai-soc-co-management',
          },
        ]}
        columns={3}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              How We Work
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-4">Examine</h3>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Comprehensive security posture evaluation with actionable roadmap. No long-term commitment required.
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-4">Deploy</h3>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Forward-deployed security engineers embedded with your team to build detections and automate responses.
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">⚙️</span>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-4">Operate</h3>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Co-managed AI-SOC operations with defined SLOs and continuous improvement.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <Link href="/book-demo" className="btn btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

