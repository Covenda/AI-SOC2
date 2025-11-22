import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function TechnologyPage() {
  return (
    <div>
      <Hero
        badge="Industry"
        title="AI-SOC for Technology Companies"
        description="Covenda AI-SOC for technology companies: preemptive threat intelligence, risk-based vulnerability management, and Forward-Deployed Engineers tuned for software supply chain security, SaaS platform threats, and AI/AGI systems."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Covenda AI-SOC is designed for technology companies building SaaS platforms, software products, and AI/AGI systems. The Covenda Technology System delivers preemptive threat intelligence and risk-based vulnerability management that's especially suited for advanced digital systems and software supply chain security.
            </p>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Forward-Deployed Engineers embed with your team to wire the platform into your environment, building detections and automations tuned for technology sector threats (software supply chain attacks, SaaS platform security, AI/AGI-specific threats) and the operational realities of modern software development and deployment.
            </p>
          </div>
        </div>
      </section>

      <FeatureGrid
        title="How Covenda AI-SOC Serves Technology Companies"
        features={[
          {
            icon: '🔍',
            title: 'AI/AGI-Focused Threat Operations',
            description: 'Threat modeling, hunting, intelligence, monitoring, and assessment tuned for AI/AGI systems and software supply chain security.',
          },
          {
            icon: '🚀',
            title: 'Forward-Deployed Engineering',
            description: 'FDEs embed with your team to wire the Covenda Technology System into CI/CD pipelines and cloud environments, accelerating time to value.',
          },
          {
            icon: '⚙️',
            title: 'Supply Chain Intelligence',
            description: 'Third-Party Intelligence monitors vendor and supply chain risks, feeding threat modeling and assessment with supply chain threat context.',
          },
          {
            icon: '📊',
            title: '24/7 AI-SOC Operations',
            description: 'Continuous threat operations through the Covenda Technology System, co-managed with your team and aligned with technology sector SLOs.',
          },
        ]}
      />
    </div>
  );
}
