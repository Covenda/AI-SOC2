import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function BrandIntelligencePage() {
  return (
    <div>
      <Hero
        badge="Product"
        title="Brand Intelligence"
        description="Protect your brand from digital threats including phishing, fraud, impersonation, and domain abuse."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <FeatureGrid
        title="Brand Protection Capabilities"
        features={[
          {
            icon: '🎣',
            title: 'Phishing Detection',
            description: 'Detect and takedown phishing sites targeting your brand.',
          },
          {
            icon: '🌐',
            title: 'Domain Monitoring',
            description: 'Monitor for typosquatting and malicious domain registrations.',
          },
          {
            icon: '👥',
            title: 'Impersonation Detection',
            description: 'Identify fake social media accounts and executive impersonation.',
          },
          {
            icon: '🛡️',
            title: 'Brand Abuse',
            description: 'Detect unauthorized use of trademarks and brand assets.',
          },
        ]}
      />
    </div>
  );
}
