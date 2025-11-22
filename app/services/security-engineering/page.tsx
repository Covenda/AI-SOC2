import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function SecurityEngineeringPage() {
  return (
    <div>
      <Hero
        badge="Service"
        title="Security Engineering"
        description="Designing and tuning controls, detections, and automations in the Covenda AI. Configuring the platform and your existing tools for optimal threat operations."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Engineering the Covenda AI for Your Environment
            </h2>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Security Engineering at Covenda means designing and tuning the controls, detections, and automations that run through the Covenda AI. Our engineers configure the platform—including Lucid AI—to model threats, map specifications to systems, and drive continuous security operations in your specific context.
            </p>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              This includes detection engineering (building and tuning detections for threat hunting and monitoring), automation and runbooks (automated response workflows), and configuration of both the Covenda AI and your existing security tools (SIEM, EDR, cloud, identity, etc.) so they work together effectively.
            </p>
          </div>
        </div>
      </section>

      <FeatureGrid
        title="Security Engineering Capabilities"
        features={[
          {
            icon: '🔍',
            title: 'Detection Engineering',
            description:
              'Design and build detections for threat hunting and monitoring. Tune the Covenda AI to detect modeled threats in your environment.',
          },
          {
            icon: '🤖',
            title: 'Automation & Runbooks',
            description:
              'Build automated response playbooks and workflows that integrate with your existing tools and processes.',
          },
          {
            icon: '⚙️',
            title: 'Platform Configuration',
            description:
              'Configure the Covenda AI and Lucid AI for threat modeling, risk-based vulnerability management, and preemptive intelligence.',
          },
          {
            icon: '🔗',
            title: 'Tool Integration',
            description:
              'Wire the Covenda AI into your existing stack (SIEM, EDR, cloud, identity, ticketing, CI/CD) for seamless operations.',
          },
          {
            icon: '📊',
            title: 'Threat Modeling Setup',
            description:
              'Configure threat modeling to map how your systems can be attacked, including AI-/AGI-specific threat scenarios.',
          },
          {
            icon: '🎯',
            title: 'Risk-Based Prioritization',
            description:
              'Tune risk-based vulnerability management to prioritize based on business risk, not just CVSS scores.',
          },
        ]}
      />
    </div>
  );
}

