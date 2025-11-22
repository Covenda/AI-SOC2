import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function RansomwarePage() {
  return (
    <div>
      <Hero
        badge="Use Case"
        title="Ransomware Defense with Covenda AI-SOC"
        description="How Covenda AI-SOC defends against ransomware: threat modeling maps ransomware attack paths, threat hunting looks for signs of ransomware activity, and threat intelligence tracks groups and campaigns preemptively."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Covenda AI-SOC defends against ransomware through continuous threat operations. The Covenda Technology System models ransomware attack paths (threat modeling), hunts for signs of ransomware activity in your environment (threat hunting), and delivers preemptive intelligence on ransomware groups and campaigns (threat intelligence).
            </p>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Forward-Deployed Engineers wire detections and automations specific to ransomware, and the AI-SOC continuously monitors and assesses ransomware risks, prioritizing based on business impact.
            </p>
          </div>
        </div>
      </section>

      <FeatureGrid
        title="How Covenda AI-SOC Defends Against Ransomware"
        features={[
          {
            icon: '🎯',
            title: 'Preemptive Threat Modeling',
            description: 'The Covenda Technology System models ransomware attack paths before incidents occur, including how ransomware groups target your industry and systems.',
          },
          {
            icon: '⚠️',
            title: 'Event-Agnostic Intelligence',
            description: 'Preemptive intelligence on ransomware groups, campaigns, and TTPs that feeds threat modeling and hunting operations, not reactive alerts.',
          },
          {
            icon: '🔍',
            title: 'Threat Hunting',
            description: 'Proactively hunts for signs of ransomware activity in your environment, looking for indicators of modeled ransomware threats.',
          },
          {
            icon: '🛡️',
            title: 'Risk-Based Assessment',
            description: 'Prioritizes ransomware risks based on business impact and your specific threat landscape, not just generic threat feeds.',
          },
        ]}
      />
    </div>
  );
}
