import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function IntelligenceServicesPage() {
  return (
    <div>
      <Hero
        variant="product"
        badge="Service"
        title="Intelligence Services"
        description="Comprehensive threat intelligence and analysis services to help you understand and respond to emerging threats in real-time. Get actionable insights from our Intelligence Graph® and expert analysts."
        primaryCTA={{ text: 'Get a custom demo', href: '/book-demo' }}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Actionable Threat Intelligence When You Need It
            </h2>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Our Intelligence Services provide you with comprehensive threat intelligence and analysis powered by the Covenda Intelligence Graph®. We analyze data from 1M+ global sources to deliver real-time, actionable intelligence that helps you understand emerging threats and respond proactively.
            </p>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Whether you need ongoing intelligence monitoring, threat research, or custom analysis for specific threats or campaigns, our expert analysts work with you to deliver the intelligence you need, when you need it. We combine automated intelligence from the platform with human expertise to provide context and actionable recommendations.
            </p>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Intelligence Services integrate seamlessly with your existing security operations, feeding into your SIEM, EDR, and other security tools to enrich detections and provide context for your security team.
            </p>
          </div>
        </div>
      </section>

      <FeatureGrid
        title="Intelligence Services Capabilities"
        features={[
          {
            icon: '🔍',
            title: 'Threat Intelligence Analysis',
            description:
              'Expert analysis of emerging threats, campaigns, and threat actors based on data from the Intelligence Graph®.',
          },
          {
            icon: '📊',
            title: 'Custom Intelligence Reports',
            description:
              'Tailored intelligence reports on specific threats, industries, or regions relevant to your organization.',
          },
          {
            icon: '🌐',
            title: 'Global Threat Monitoring',
            description:
              'Continuous monitoring of global threat landscape with alerts on threats relevant to your organization.',
          },
          {
            icon: '🎯',
            title: 'Threat Actor Profiling',
            description:
              'Deep-dive analysis of threat actors, their tactics, techniques, and procedures (TTPs) targeting your industry.',
          },
          {
            icon: '🔗',
            title: 'Intelligence Integration',
            description:
              'Integration of intelligence feeds into your existing security tools for enriched detections and context.',
          },
          {
            icon: '💡',
            title: 'Actionable Recommendations',
            description:
              'Expert recommendations on how to respond to threats, prioritize security efforts, and improve your security posture.',
          },
        ]}
      />
    </div>
  );
}

