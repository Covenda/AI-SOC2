import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function DemoCenterPage() {
  return (
    <div>
      <Hero
        variant="simple"
        badge="Demo Center"
        title="Experience the Intelligence Cloud"
        description="Explore interactive demos and see how Recorded Future transforms security operations."
        primaryCTA={{ text: 'Book a Live Demo', href: '/get-started#book-demo' }}
      />

      <FeatureGrid
        title="Interactive Demos"
        description="Explore our platform capabilities through guided demonstrations"
        features={[
          {
            icon: '🛡️',
            title: 'Threat Intelligence Demo',
            description: 'See how we identify and prioritize threats in real-time.',
          },
          {
            icon: '🔍',
            title: 'Vulnerability Management',
            description: 'Explore our approach to vulnerability prioritization.',
          },
          {
            icon: '👤',
            title: 'Identity Monitoring',
            description: 'Learn how we detect credential compromise and exposure.',
          },
          {
            icon: '🌐',
            title: 'Attack Surface Discovery',
            description: 'Discover and monitor your external attack surface.',
          },
        ]}
      />
    </div>
  );
}
