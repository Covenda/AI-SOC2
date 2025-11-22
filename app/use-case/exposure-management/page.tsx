import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function ExposureManagementPage() {
  return (
    <div>
      <Hero
        badge="Use Case"
        title="Exposure Management with Covenda's AI-SOC"
        description="How Covenda's AI-SOC manages exposures: threat modeling maps how exposed assets can be attacked, attack surface intelligence discovers exposures, and risk-based vulnerability management prioritizes remediation based on business risk."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Covenda's AI-SOC manages exposures through continuous threat operations. Attack Surface Intelligence discovers exposed assets, threat modeling maps how those exposures can be attacked, and risk-based vulnerability management (powered by Lucid AI) prioritizes remediation based on the gap between your security specifications and actual systems.
            </p>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              The AI-SOC continuously monitors exposures, correlates them with vulnerability intelligence, and feeds threat assessment operations that prioritize based on business risk, not just CVSS scores.
            </p>
          </div>
        </div>
      </section>

      <FeatureGrid
        title="How Covenda's AI-SOC Manages Exposures"
        features={[
          {
            icon: '🌐',
            title: 'Continuous Asset Discovery',
            description: 'Attack Surface Intelligence continuously discovers internet-facing assets and exposures, feeding threat modeling operations.',
          },
          {
            icon: '📊',
            title: 'Risk-Based Assessment',
            description: 'Lucid AI assesses and prioritizes exposures based on business risk and exploitability, not just generic vulnerability scores.',
          },
          {
            icon: '🔍',
            title: 'Spec-to-System Gap Analysis',
            description: 'Maps the gap between your security specifications and actual exposed systems, identifying where exposures matter most.',
          },
          {
            icon: '⚡',
            title: 'Threat Assessment Integration',
            description: 'Integrates exposure data with threat modeling and assessment to prioritize remediation based on business impact.',
          },
        ]}
      />
    </div>
  );
}
