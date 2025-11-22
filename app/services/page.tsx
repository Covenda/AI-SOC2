import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div>
      <Hero
        badge="Services"
        title="How You Engage with Covenda's AI-SOC"
        description="Covenda runs security operations as a product. These are the three main ways customers engage with our AI-SOC: Security Engineering, Forward-Deployed Engineering, and AI-SOC Co-Management."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <FeatureGrid
        title="Three Ways to Engage with Covenda's AI-SOC"
        description="These aren't standalone consulting services—they're engagement models for how Covenda's AI-SOC operates with your team"
        features={[
          {
            icon: '🔍',
            title: 'Security Engineering',
            description:
              'Designing and tuning controls, detections, and automations in the Covenda Technology System. Configuring the platform and your existing tools for optimal threat operations.',
            href: '/services/security-engineering',
          },
          {
            icon: '🚀',
            title: 'Forward-Deployed Engineering',
            description:
              'Product engineers embed with your team to bridge the Covenda Technology System and your environment. They accelerate value by wiring detections and automations that matter immediately.',
            href: '/services/forward-deployed-engineering',
          },
          {
            icon: '⚙️',
            title: 'AI-SOC Co-Management',
            description:
              'For organizations with existing SOC teams: Covenda co-manages AI-SOC operations with your staff. Covenda Technology System + FDEs + your team = shared outcomes.',
            href: '/services/ai-soc-co-management',
          },
        ]}
        columns={3}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              How Covenda's AI-SOC Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-4">Threat Modeling & Intelligence</h3>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  The Covenda Technology System models threats before incidents happen. Event-agnostic, spec-driven intelligence maps the gap between your security posture and actual systems.
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-4">Forward-Deployed Engineering</h3>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Product engineers embed with your team to wire the Covenda Technology System into your environment. They bridge the platform and your reality, accelerating time to value.
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">⚙️</span>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-4">Continuous Operations</h3>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Threat hunting, monitoring, and assessment run 24/7 through the AI-SOC. Risk-based prioritization and automated response, co-managed with your team.
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

