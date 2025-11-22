import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function HealthcarePage() {
  return (
    <div>
      <Hero
        badge="Industry"
        title="AI-SOC for Healthcare"
        description="Covenda AI-SOC for healthcare organizations: preemptive threat intelligence, risk-based vulnerability management, and Forward-Deployed Engineers tuned for HIPAA compliance and healthcare-specific threats."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Covenda AI-SOC is designed for healthcare organizations operating under HIPAA and other healthcare regulations. Covenda AI delivers preemptive threat intelligence and risk-based vulnerability management that prioritizes based on business risk and PHI protection requirements.
            </p>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Forward-Deployed Engineers embed with your team to wire the platform into your environment, building detections and automations tuned for healthcare-specific threats (ransomware targeting hospitals, PHI breaches, medical device security) and HIPAA compliance requirements.
            </p>
          </div>
        </div>
      </section>

      <FeatureGrid
        title="How Covenda AI-SOC Serves Healthcare"
        features={[
          {
            icon: '🔍',
            title: 'HIPAA-Aligned Threat Operations',
            description: 'Threat modeling, hunting, intelligence, monitoring, and assessment tuned for healthcare threats and HIPAA compliance requirements.',
          },
          {
            icon: '🚀',
            title: 'Forward-Deployed Engineering',
            description: 'FDEs embed with your team to wire it into healthcare environments, accelerating time to value in complex clinical systems.',
          },
          {
            icon: '⚙️',
            title: 'PHI-Focused Risk Prioritization',
            description: 'Lucid AI prioritizes vulnerabilities and threats based on PHI exposure risk and business impact, not just generic vulnerability scores.',
          },
          {
            icon: '📊',
            title: '24/7 AI-SOC Operations',
            description: 'Continuous threat operations through the Covenda AI, co-managed with your team and aligned with healthcare sector SLOs.',
          },
        ]}
      />
    </div>
  );
}
