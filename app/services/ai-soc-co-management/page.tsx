import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function AISOCCoManagementPage() {
  return (
    <div>
      <Hero
        badge="Service"
        title="AI-SOC Co-Management"
        description="Co-manage your security operations with defined SLOs, continuous improvement, and measurable outcomes."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Co-Managed Security Operations
            </h2>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              We co-manage your AI-SOC operations with defined Service Level Objectives (SLOs), ensuring clear expectations, measurable outcomes, and continuous improvement. Our Forward-Deployed Security Engineers work alongside your team to monitor, detect, respond, and improve your security operations.
            </p>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              This co-managed approach combines the expertise of our security engineers with the domain knowledge of your team, resulting in more effective security operations and better outcomes.
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
              'Clear Service Level Objectives for mean time to detect, mean time to respond, and detection coverage.',
          },
          {
            icon: '👥',
            title: '24/7 Coverage',
            description:
              'Round-the-clock security monitoring and response capabilities with our team.',
          },
          {
            icon: '🔍',
            title: 'Threat Detection',
            description:
              'Continuous threat detection and analysis using our platform and expertise.',
          },
          {
            icon: '⚡',
            title: 'Incident Response',
            description:
              'Rapid incident response and containment with defined playbooks and workflows.',
          },
          {
            icon: '📈',
            title: 'Continuous Improvement',
            description:
              'Regular reviews and improvements to detections, workflows, and processes.',
          },
          {
            icon: '📋',
            title: 'Reporting & Metrics',
            description:
              'Regular reporting on security metrics, incidents, and improvements.',
          },
        ]}
      />
    </div>
  );
}

