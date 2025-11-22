import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function DemoCenterPage() {
  return (
    <div>
      <Hero
        variant="simple"
        badge="Demo Center"
        title="Experience the Covenda Technology System"
        description="Explore interactive demos and see how the Covenda Technology System powers AI-SOC operations: threat modeling, preemptive intelligence, risk-based vulnerability management, and more."
        primaryCTA={{ text: 'Book a Live Demo', href: '/book-demo' }}
      />

      <FeatureGrid
        title="Interactive Demos"
        description="Explore how the Covenda Technology System powers AI-SOC operations through guided demonstrations"
        features={[
          {
            icon: '🔍',
            title: 'Threat Modeling & Intelligence',
            description: 'See how the platform models threats before incidents happen and delivers preemptive, event-agnostic intelligence.',
          },
          {
            icon: '🎯',
            title: 'Risk-Based Vulnerability Management',
            description: 'Explore how Lucid AI prioritizes vulnerabilities based on business risk, not just CVSS scores.',
          },
          {
            icon: '🚀',
            title: 'Forward-Deployed Engineering',
            description: 'Learn how FDEs wire the Covenda Technology System into your environment and accelerate time to value.',
          },
          {
            icon: '⚙️',
            title: 'AI-SOC Operations',
            description: 'See how threat modeling, hunting, intelligence, monitoring, and assessment run continuously through the platform.',
          },
        ]}
      />
    </div>
  );
}
