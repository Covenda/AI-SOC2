import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function ForwardDeployedEngineeringPage() {
  return (
    <div>
      <Hero
        badge="Service"
        title="Forward-Deployed Engineering"
        description="Security engineers embedded with your team to build detections, automate workflows, and transfer knowledge."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Embedded Security Engineers
            </h2>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Our Forward-Deployed Security Engineers embed directly with your team to understand your environment, build custom detections, and automate security workflows. They work alongside your team, not as external consultants, ensuring knowledge transfer and building your team's capabilities over time.
            </p>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              This embedded approach ensures that our engineers understand your business context, threat landscape, and operational constraints, enabling them to build solutions that actually work in your environment.
            </p>
          </div>
        </div>
      </section>

      <FeatureGrid
        title="Forward-Deployed Engineering Capabilities"
        features={[
          {
            icon: '👥',
            title: 'Team Embedding',
            description:
              'Security engineers work directly with your team, understanding your environment and business context.',
          },
          {
            icon: '🔍',
            title: 'Custom Detection Engineering',
            description:
              'Build and tune custom detections tailored to your environment, threat landscape, and business needs.',
          },
          {
            icon: '🤖',
            title: 'Workflow Automation',
            description:
              'Automate security workflows and response playbooks to reduce mean time to respond.',
          },
          {
            icon: '📚',
            title: 'Knowledge Transfer',
            description:
              'Transfer knowledge and best practices to your team, building their capabilities over time.',
          },
          {
            icon: '🔧',
            title: 'Tool Integration',
            description:
              'Integrate and optimize your security tools, ensuring they work together effectively.',
          },
          {
            icon: '📊',
            title: 'Continuous Improvement',
            description:
              'Continuously improve detections, workflows, and processes based on real-world performance.',
          },
        ]}
      />
    </div>
  );
}

