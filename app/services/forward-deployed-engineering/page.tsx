import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function ForwardDeployedEngineeringPage() {
  return (
    <div>
      <Hero
        badge="Service"
        title="Forward-Deployed Engineering"
        description="Product engineers embed with your team to bridge the Covenda Technology System and your environment. They accelerate value by doing things that don't scale, then feed patterns back into the platform."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Product Engineers, Not Generic Consultants
            </h2>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Forward-Deployed Engineers (FDEs) are software/product engineers who embed directly with customers. They act as the bridge between your environment and the Covenda Technology System. Unlike traditional SaaS vendors who build generic products and force everyone into them, FDEs willingly "do things that don't scale" early to discover product–market fit, then abstract and scale the patterns that work.
            </p>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              FDEs work closely with customers (virtually or on-site) to understand unique, complex, often ambiguous security challenges. Their goal is to shrink the time between "first meeting" and "first meaningful win" by wiring detections, tuning automations, and building workflows that immediately matter.
            </p>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              When FDEs build custom or unscalable solutions, those patterns are brought back into the core product team and abstracted into reusable features. There's a tight loop between FDEs and the core product team; FDEs are NOT a generic services silo. Success is measured by increasing impact and speed per engagement, not by rigid uniformity.
            </p>
          </div>
        </div>
      </section>

      <FeatureGrid
        title="What Forward-Deployed Engineers Do"
        features={[
          {
            icon: '👥',
            title: 'Customer-Centric Problem Solving',
            description:
              'FDEs sit close to customers (virtually or on-site) and tackle ambiguous, complex security problems in your specific environment.',
          },
          {
            icon: '⚡',
            title: 'Accelerated Value Delivery',
            description:
              'Shrink time from first meeting to first meaningful win by wiring detections, tuning automations, and building workflows that matter immediately.',
          },
          {
            icon: '🔄',
            title: 'Product Iteration & Adaptation',
            description:
              'Build custom or unscalable solutions as needed, then feed those patterns back into the Covenda Technology System so they become reusable.',
          },
          {
            icon: '🤝',
            title: 'Strategic Partnerships',
            description:
              'Build deep trust and momentum with strategic customers, leading to higher contract value and long-term relationships.',
          },
          {
            icon: '🔧',
            title: 'Platform Integration',
            description:
              'Wire the Covenda Technology System into your existing stack (SIEM, EDR, cloud, identity, ticketing, CI/CD) so it works in your environment.',
          },
          {
            icon: '📈',
            title: 'Shared Playbooks & Patterns',
            description:
              "One FDE's work becomes a foundation for the next. Shared playbooks, automations, and patterns accelerate every engagement.",
          },
        ]}
      />
    </div>
  );
}

