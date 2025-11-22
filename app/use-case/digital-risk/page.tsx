import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function DigitalRiskPage() {
  return (
    <div>
      <Hero
        badge="Use Case"
        title="Digital Risk Protection with Covenda AI-SOC"
        description="How Covenda AI-SOC protects against digital risks: threat modeling maps how brands and executives can be targeted, threat intelligence monitors for brand abuse and impersonation, and threat assessment prioritizes digital risks based on business impact."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Covenda AI-SOC protects against digital risks through continuous threat operations. Covenda AI models how brands and executives can be targeted (threat modeling), monitors for brand abuse and impersonation (threat intelligence), and hunts for signs of digital risk in your environment (threat hunting).
            </p>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              The AI-SOC continuously assesses digital risks, prioritizing based on business impact. Forward-Deployed Engineers wire detections and automations specific to digital risk, integrating with your existing tools.
            </p>
          </div>
        </div>
      </section>

      <FeatureGrid
        title="How Covenda AI-SOC Protects Against Digital Risk"
        features={[
          {
            icon: '🎯',
            title: 'Threat Modeling for Digital Risk',
            description: 'Models how brands and executives can be targeted, including phishing, impersonation, and brand abuse scenarios.',
          },
          {
            icon: '👥',
            title: 'Brand & Executive Intelligence',
            description: 'Preemptive intelligence on brand abuse, executive impersonation, and digital threats that feeds threat operations.',
          },
          {
            icon: '📱',
            title: 'Continuous Monitoring',
            description: 'Monitors social media, web, and dark web for threats and brand abuse, feeding threat hunting and assessment operations.',
          },
          {
            icon: '🔍',
            title: 'Data Leakage Detection',
            description: 'Detects sensitive data exposure across the web and dark web, powering threat intelligence and assessment.',
          },
        ]}
      />
    </div>
  );
}
