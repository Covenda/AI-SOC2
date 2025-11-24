import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div>
      <Hero
        badge="Services"
        title="How You Engage with Covenda AI-SOC"
        description="Covenda runs security operations as a product. These are the three main ways customers engage with our AI-SOC: Analyst on Demand, Intelligence Services, and Vulnerability Hunting."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <FeatureGrid
        title="Three Ways to Engage with Covenda AI-SOC"
        description="These aren't standalone consulting services—they're engagement models for how Covenda AI-SOC operates with your team"
        features={[
          {
            icon: '👥',
            title: 'Analyst on Demand',
            description:
              'Forward-Deployed Engineers embed with your team to bridge the Covenda AI and your environment. They accelerate value by wiring detections and automations that matter immediately.',
            href: '/services/analyst-on-demand',
          },
          {
            icon: '🧠',
            title: 'Intelligence Services',
            description:
              'Comprehensive threat intelligence and analysis services to help you understand and respond to emerging threats in real-time.',
            href: '/services/intelligence-services',
          },
          {
            icon: '🎯',
            title: 'Vulnerability Hunting',
            description:
              'Proactive vulnerability discovery and assessment services to identify and prioritize security gaps before they become incidents.',
            href: '/services/vulnerability-hunting',
          },
        ]}
        columns={3}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              How Covenda AI-SOC Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-4">Threat Modeling & Intelligence</h3>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Covenda AI models threats before incidents happen. Event-agnostic, spec-driven intelligence maps the gap between your security posture and actual systems.
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-4">Analyst on Demand</h3>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Forward-Deployed Engineers embed with your team to wire the platform into your environment. They bridge the Covenda AI and your reality, accelerating time to value.
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

