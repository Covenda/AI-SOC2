import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function AutomationSecurityWorkflowsPage() {
  return (
    <div>
      <Hero
        badge="Use Case"
        title="Security Workflow Automation with Covenda AI-SOC"
        description="Forward-Deployed Engineers wire it into your environment, building detections, automations, and workflows that accelerate AI-SOC operations and reduce time to value."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Covenda AI-SOC automates security workflows through Forward-Deployed Engineers who wire it into your environment. They build detections, automations, and workflows that accelerate threat operations and reduce time from first meeting to first meaningful win.
            </p>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              FDEs integrate the platform with your existing tools (SIEM, SOAR, ticketing, CI/CD), build custom solutions as needed, then feed those patterns back into the Covenda AI so they become reusable. This YC-style approach means we "do things that don't scale" early, then scale what works.
            </p>
          </div>
        </div>
      </section>

      <FeatureGrid
        title="How Forward-Deployed Engineers Automate AI-SOC Workflows"
        features={[
          {
            icon: '🔍',
            title: 'Detection Engineering',
            description: 'Build and tune detections in the Covenda AI that feed threat hunting and monitoring operations, tailored to your environment.',
          },
          {
            icon: '🤖',
            title: 'Automated Response Playbooks',
            description: 'Create automated response playbooks that integrate with your existing tools, reducing mean time to respond.',
          },
          {
            icon: '⚡',
            title: 'Workflow Integration',
            description: 'Wire the Covenda AI into your SIEM, SOAR, ticketing, and CI/CD systems for seamless automation.',
          },
          {
            icon: '📊',
            title: 'Pattern Reuse',
            description: 'FDEs build custom solutions, then feed patterns back into the platform so they become reusable across customers.',
          },
        ]}
      />
    </div>
  );
}
