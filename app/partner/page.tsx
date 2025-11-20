import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function PartnerPage() {
  return (
    <div>
      <Hero
        badge="Partners"
        title="Partner Ecosystem"
        description="Join our global partner network to deliver world-class threat intelligence solutions to your customers."
        primaryCTA={{ text: 'Become a Partner', href: '/contact' }}
      />

      <FeatureGrid
        title="Partner Programs"
        features={[
          {
            icon: '🤝',
            title: 'Channel Partners (VAR)',
            description: 'Resell Recorded Future solutions and grow your security practice.',
            href: '/partner/var',
          },
          {
            icon: '🔌',
            title: 'Technology Partners',
            description: 'Integrate Recorded Future intelligence into your products.',
            href: '/partner/tech',
          },
          {
            icon: '🛡️',
            title: 'MSSP Partners',
            description: 'Enhance your managed security services with threat intelligence.',
            href: '/partner/mssp',
          },
          {
            icon: '⚙️',
            title: 'OEM Partners',
            description: 'Embed Recorded Future intelligence into your solutions.',
            href: '/partner/oem',
          },
          {
            icon: '🎯',
            title: 'MDR Partners',
            description: 'Power your managed detection and response with intelligence.',
            href: '/partner/managed-detection-response',
          },
        ]}
        columns={3}
      />
    </div>
  );
}
