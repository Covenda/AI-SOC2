import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function AISOCCoManagementPage() {
  return (
    <div>
      <Hero
        badge="Service"
        title="AI-SOC Co-Management"
        description="For organizations with existing SOC teams: Covenda co-manages AI-SOC operations with your staff. Covenda Technology System + Forward-Deployed Engineers + your team = shared outcomes."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Co-Managing AI-SOC Operations with Your Team
            </h2>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              If you already have a SOC team, Covenda AI-SOC Co-Management model lets you leverage the Covenda Technology System and Forward-Deployed Engineers while keeping your team in the loop. We co-manage threat operations—threat modeling, hunting, intelligence, monitoring, and assessment—with defined Service Level Objectives (SLOs) and continuous improvement.
            </p>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              The Covenda Technology System runs the AI-SOC operations, Forward-Deployed Engineers tune and integrate it into your environment, and your team provides domain knowledge and context. This shared model means you get the benefits of Covenda AI-SOC without replacing your existing team—instead, we augment and accelerate what you're already doing.
            </p>
          </div>
        </div>
      </section>

      <FeatureGrid
        title="Co-Management Capabilities"
        features={[
          {
            icon: '📊',
            title: 'Defined SLOs',
            description:
              'Clear Service Level Objectives for threat operations: detection coverage, mean time to detect, mean time to respond, and risk-based prioritization.',
          },
          {
            icon: '👥',
            title: 'Shared Operations',
            description:
              'Covenda Technology System + Forward-Deployed Engineers + your team working together on threat modeling, hunting, intelligence, monitoring, and assessment.',
          },
          {
            icon: '🔍',
            title: 'Continuous Threat Operations',
            description:
              '24/7 threat hunting, monitoring, and assessment through the Covenda Technology System, tuned by FDEs and contextualized by your team.',
          },
          {
            icon: '⚡',
            title: 'Automated Response',
            description:
              'Automated response playbooks and workflows that integrate with your existing processes and tools.',
          },
          {
            icon: '📈',
            title: 'Continuous Improvement',
            description:
              'Regular reviews and improvements to detections, workflows, and threat models based on real-world performance and your feedback.',
          },
          {
            icon: '📋',
            title: 'Transparent Reporting',
            description:
              'Regular reporting on threat operations, incidents, risk assessments, and improvements with full visibility for your team.',
          },
        ]}
      />
    </div>
  );
}

