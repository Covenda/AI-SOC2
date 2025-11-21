import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function PartnerPage() {
  return (
    <div>
      <Hero
        badge="Partners"
        title="Partner Ecosystem"
        description="Partner with Covenda to deliver AI-SOC services with Forward-Deployed Security Engineers to your customers."
        primaryCTA={{ text: 'Become a Partner', href: '/contact' }}
      />

      <FeatureGrid
        title="Partner Programs"
        features={[
          {
            icon: '🤝',
            title: 'Channel Partners (VAR)',
            description: 'Resell Covenda AI-SOC services and grow your security practice.',
            href: '/partner/var',
          },
          {
            icon: '🔌',
            title: 'Technology Partners',
            description: 'Integrate Covenda AI platform capabilities into your products.',
            href: '/partner/tech',
          },
          {
            icon: '🛡️',
            title: 'MSSP Partners',
            description: 'Enhance your managed security services with Forward-Deployed Security Engineers.',
            href: '/partner/mssp',
          },
          {
            icon: '⚙️',
            title: 'OEM Partners',
            description: 'Embed Covenda AI platform capabilities into your solutions.',
            href: '/partner/oem',
          },
          {
            icon: '🎯',
            title: 'MDR Partners',
            description: 'Power your managed detection and response with Forward-Deployed Security Engineers.',
            href: '/partner/managed-detection-response',
          },
        ]}
        columns={3}
      />
    </div>
  );
}
