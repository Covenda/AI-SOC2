import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function TechnologyPage() {
  return (
    <div>
      <Hero
        badge="Industry"
        title="Intelligence for Technology Companies"
        description="Protect your technology infrastructure, intellectual property, and customers from cyber threats."
        primaryCTA={{ text: 'Book a Demo', href: '/get-started#book-demo' }}
      />

      <FeatureGrid
        title="Technology Security Solutions"
        features={[
          {
            icon: '🔐',
            title: 'IP Protection',
            description: 'Protect intellectual property from theft and exposure.',
          },
          {
            icon: '🌐',
            title: 'Cloud Security',
            description: 'Monitor cloud infrastructure for exposures and threats.',
          },
          {
            icon: '📦',
            title: 'Supply Chain Security',
            description: 'Secure your software supply chain from attacks.',
          },
          {
            icon: '👥',
            title: 'Customer Protection',
            description: 'Protect customers from targeted attacks and fraud.',
          },
        ]}
      />
    </div>
  );
}
