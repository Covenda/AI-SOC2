import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function RansomwarePage() {
  return (
    <div>
      <Hero
        badge="Use Case"
        title="Ransomware Defense"
        description="Detect and defend against ransomware threats with real-time intelligence on ransomware groups, campaigns, and TTPs."
        primaryCTA={{ text: 'Book a Demo', href: '/get-started#book-demo' }}
      />

      <FeatureGrid
        title="Ransomware Protection"
        features={[
          {
            icon: '🎯',
            title: 'Ransomware Group Tracking',
            description: 'Monitor ransomware groups and their evolving tactics.',
          },
          {
            icon: '⚠️',
            title: 'Early Warning',
            description: 'Get early warnings of ransomware campaigns targeting your industry.',
          },
          {
            icon: '🔍',
            title: 'Victim Intelligence',
            description: 'Monitor ransomware leak sites for your organization.',
          },
          {
            icon: '🛡️',
            title: 'Mitigation Guidance',
            description: 'Actionable guidance to prevent and respond to ransomware.',
          },
        ]}
      />
    </div>
  );
}
