import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function PublicSectorPage() {
  return (
    <div>
      <Hero
        badge="Industry"
        title="AI-SOC for Public Sector"
        description="Covenda AI-SOC for government agencies: preemptive threat intelligence, risk-based vulnerability management, and Forward-Deployed Engineers tuned for nation-state threats and public sector security requirements."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Covenda AI-SOC is designed for government agencies facing sophisticated nation-state threats and public sector security requirements. Covenda AI delivers preemptive threat intelligence and risk-based vulnerability management tuned for geopolitical threats and government operations.
            </p>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Forward-Deployed Engineers embed with your team to wire the platform into your environment, building detections and automations tuned for public sector threats (nation-state attacks, election security, critical infrastructure) and the operational realities of government agencies.
            </p>
          </div>
        </div>
      </section>

      <FeatureGrid
        title="How Covenda AI-SOC Serves Public Sector"
        features={[
          {
            icon: '🏛️',
            title: 'Nation-State Threat Intelligence',
            description: 'Preemptive intelligence on nation-state actors and campaigns targeting government agencies, feeding threat modeling and assessment.',
          },
          {
            icon: '🔒',
            title: 'Critical Infrastructure Protection',
            description: 'Threat operations tuned for protecting critical infrastructure from cyber threats, including OT/ICS security.',
          },
          {
            icon: '🌍',
            title: 'Geopolitical Intelligence',
            description: 'Geopolitical Intelligence feeds threat assessment with regional risk context, prioritizing threats based on geopolitical developments.',
          },
          {
            icon: '⚡',
            title: '24/7 AI-SOC Operations',
            description: 'Continuous threat operations through the Covenda AI, co-managed with your team and aligned with public sector SLOs.',
          },
        ]}
      />
    </div>
  );
}
