import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function SecurityEngineeringPage() {
  return (
    <div>
      <Hero
        badge="Service"
        title="Security Engineering"
        description="Comprehensive security posture evaluation with actionable roadmap and custom detection engineering."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Comprehensive Security Posture Assessment
            </h2>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              We start every engagement with a comprehensive 2-4 week assessment to understand your current security posture, identify gaps, and build a prioritized roadmap. This assessment helps us understand your environment, threat landscape, and business context.
            </p>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Our security engineers evaluate your existing detections, security tools, processes, and workflows to identify areas for improvement and build a clear path forward.
            </p>
          </div>
        </div>
      </section>

      <FeatureGrid
        title="Security Engineering Capabilities"
        features={[
          {
            icon: '📊',
            title: 'Security Posture Assessment',
            description:
              'Comprehensive evaluation of your current security posture, tools, processes, and capabilities.',
          },
          {
            icon: '🗺️',
            title: 'Actionable Roadmap',
            description:
              'Prioritized roadmap with clear milestones and measurable outcomes to guide your security journey.',
          },
          {
            icon: '🔍',
            title: 'Detection Engineering',
            description:
              'Design and build custom detections tailored to your environment and threat landscape.',
          },
          {
            icon: '📈',
            title: 'Gap Analysis',
            description:
              'Identify gaps in your security operations and recommend solutions to address them.',
          },
          {
            icon: '🛠️',
            title: 'Tool Evaluation',
            description:
              'Evaluate your existing security tools and recommend optimizations or new solutions.',
          },
          {
            icon: '📋',
            title: 'Process Optimization',
            description:
              'Review and optimize your security processes and workflows for efficiency and effectiveness.',
          },
        ]}
      />
    </div>
  );
}

