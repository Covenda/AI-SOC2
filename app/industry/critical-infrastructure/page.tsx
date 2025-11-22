import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function CriticalInfrastructurePage() {
  return (
    <div>
      <Hero
        badge="Industry"
        title="AI-SOC for Critical Infrastructure"
        description="Covenda AI-SOC for critical infrastructure: preemptive threat intelligence, risk-based vulnerability management, and Forward-Deployed Engineers tuned for OT/ICS security and nation-state threats."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Covenda AI-SOC is designed for critical infrastructure organizations facing sophisticated nation-state threats and operational disruption risks. Covenda AI delivers preemptive threat intelligence and risk-based vulnerability management tuned for OT/ICS security and geopolitical threats.
            </p>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Forward-Deployed Engineers embed with your team to wire the platform into your environment, building detections and automations tuned for critical infrastructure threats (nation-state attacks, OT/ICS security, supply chain risks) and the operational realities of power, water, transportation, and other critical systems.
            </p>
          </div>
        </div>
      </section>

      <FeatureGrid
        title="How Covenda AI-SOC Serves Critical Infrastructure"
        features={[
          {
            icon: '⚡',
            title: 'OT/ICS-Focused Threat Operations',
            description: 'Threat modeling, hunting, intelligence, monitoring, and assessment tuned for OT/ICS security and critical infrastructure threats.',
          },
          {
            icon: '🎯',
            title: 'Nation-State Intelligence',
            description: 'Preemptive intelligence on nation-state actors and campaigns targeting critical infrastructure, feeding threat modeling and assessment.',
          },
          {
            icon: '🛡️',
            title: 'Attack Surface Management',
            description: 'Attack Surface Intelligence discovers and monitors critical infrastructure exposures, feeding threat modeling and hunting operations.',
          },
          {
            icon: '🌍',
            title: 'Geopolitical Risk Assessment',
            description: 'Geopolitical Intelligence feeds threat assessment with regional risk context, prioritizing threats based on geopolitical developments.',
          },
        ]}
      />
    </div>
  );
}
