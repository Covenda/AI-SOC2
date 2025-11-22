import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function SecOpsIntelligencePage() {
  return (
    <div>
      <Hero
        badge="AI-SOC Capability"
        title="SecOps Intelligence"
        description="Intelligence that powers security operations within Covenda AI-SOC. Feeds threat hunting, monitoring, and assessment with context-rich intelligence that reduces noise and accelerates response."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              SecOps Intelligence is a capability domain within Covenda AI-SOC that powers security operations. It delivers context-rich intelligence that feeds threat hunting, monitoring, and assessment operations, reducing noise and accelerating response.
            </p>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              This intelligence integrates with your existing SecOps tools (SIEM, SOAR, EDR) and the Covenda AI to enrich alerts, automate triage, and power threat hunting operations that look for signs of modeled threats.
            </p>
          </div>
        </div>
      </section>

      <FeatureGrid
        title="How SecOps Intelligence Powers the AI-SOC"
        features={[
          {
            icon: '⚡',
            title: 'Alert Enrichment & Triage',
            description: 'Enriches alerts with context from the Covenda AI, reducing noise and prioritizing based on business risk.',
          },
          {
            icon: '🔍',
            title: 'Threat Hunting Support',
            description: 'Powers proactive threat hunting by providing context-rich intelligence on modeled threats and attack patterns.',
          },
          {
            icon: '🤖',
            title: 'Workflow Automation',
            description: 'Integrates with SOAR platforms and your existing tools to automate response workflows and playbooks.',
          },
          {
            icon: '📊',
            title: 'Threat Assessment',
            description: 'Feeds threat assessment operations with intelligence that helps prioritize incidents based on business impact.',
          },
        ]}
      />
    </div>
  );
}
