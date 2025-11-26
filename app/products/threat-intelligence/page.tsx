import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function ThreatIntelligencePage() {
  return (
    <div>
      <Hero
        badge="AI-SOC Capability"
        title="Threat Intelligence"
        description="Event-agnostic, spec-driven threat intelligence for Covenda AI-SOC. Models threats before incidents happen, delivering preemptive intelligence that powers threat modeling, hunting, and assessment."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
        secondaryCTA={{ text: 'Learn More', href: '/platform' }}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Threat Intelligence is a core capability domain within Covenda AI-SOC. It's delivered through the Covenda AI as event-agnostic, spec-driven intelligence that models threats before incidents occur.
            </p>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              This intelligence powers threat modeling (mapping how systems can be attacked), threat hunting (proactively looking for signs of modeled threats), and threat assessment (prioritizing risk based on business impact). It's preemptive and event-agnostic—not reactive to specific incidents.
            </p>
          </div>
        </div>
      </section>

      <FeatureGrid
        title="How Threat Intelligence Powers the AI-SOC"
        features={[
          {
            icon: '🎯',
            title: 'Autonomous Threat Modelling',
            description: 'Models threats before incidents happen. Event-agnostic intelligence that maps how systems can be attacked, including AI-/AGI-specific scenarios.',
          },
          {
            icon: '📊',
            title: 'Risk-Based Assessment',
            description: 'Prioritizes threats based on business risk and relevance to your organization, not just generic threat feeds.',
          },
          {
            icon: '🔍',
            title: 'Threat Actor Intelligence',
            description: 'Tracks threat actors, their TTPs, and campaign activity in an event-agnostic way that feeds threat hunting operations.',
          },
          {
            icon: '⚡',
            title: 'Intelligence Graph Integration',
            description: 'Connects with the Intelligence Graph to enrich alerts, detections, and threat assessments with contextual intelligence.',
          },
        ]}
      />
    </div>
  );
}
