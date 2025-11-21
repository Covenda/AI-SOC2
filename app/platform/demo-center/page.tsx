import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function DemoCenterPage() {
  return (
    <div>
      <Hero
        variant="simple"
        badge="Demo Center"
        title="Experience the Covenda AI Platform"
        description="Explore interactive demos and see how Covenda helps build and operate effective AI-SOC capabilities."
        primaryCTA={{ text: 'Book a Live Demo', href: '/book-demo' }}
      />

      <FeatureGrid
        title="Interactive Demos"
        description="Explore our platform capabilities through guided demonstrations"
        features={[
          {
            icon: '🔍',
            title: 'Security Posture Assessment',
            description: 'See how we evaluate your current security posture and build a prioritized roadmap.',
          },
          {
            icon: '🤖',
            title: 'Detection Engineering',
            description: 'Explore how Forward-Deployed Engineers build custom detections for your environment.',
          },
          {
            icon: '⚙️',
            title: 'Automated Response',
            description: 'Learn how we automate security workflows and response playbooks.',
          },
          {
            icon: '📊',
            title: 'Co-Managed Operations',
            description: 'See how we co-manage AI-SOC operations with defined SLOs.',
          },
        ]}
      />
    </div>
  );
}
