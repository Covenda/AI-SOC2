import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function PartnerPage() {
  return (
    <div>
      <Hero
        badge="Partners"
        title="Partner Ecosystem"
        description="Partner with Covenda to deliver AI-SOC operations powered by the Covenda Technology System and Forward-Deployed Engineers to your customers."
        primaryCTA={{ text: 'Become a Partner', href: '/contact' }}
      />

      <FeatureGrid
        title="Partner Programs"
        features={[
          {
            icon: '🤝',
            title: 'Channel Partners (VAR)',
            description: 'Resell Covenda's AI-SOC and grow your security practice with the Covenda Technology System.',
            href: '/partner/var',
          },
          {
            icon: '🔌',
            title: 'Technology Partners',
            description: 'Integrate the Covenda Technology System capabilities into your products.',
            href: '/partner/tech',
          },
          {
            icon: '🛡️',
            title: 'MSSP Partners',
            description: 'Enhance your managed security services with Covenda's AI-SOC and Forward-Deployed Engineers.',
            href: '/partner/mssp',
          },
          {
            icon: '⚙️',
            title: 'OEM Partners',
            description: 'Embed the Covenda Technology System capabilities into your solutions.',
            href: '/partner/oem',
          },
          {
            icon: '🎯',
            title: 'MDR Partners',
            description: 'Power your managed detection and response with Covenda's AI-SOC and Forward-Deployed Engineers.',
            href: '/partner/managed-detection-response',
          },
        ]}
        columns={3}
      />
    </div>
  );
}
