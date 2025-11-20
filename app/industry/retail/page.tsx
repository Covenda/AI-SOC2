import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function RetailPage() {
  return (
    <div>
      <Hero
        badge="Industry"
        title="Intelligence for Retail"
        description="Protect your retail business from payment fraud, brand abuse, and cyber threats targeting e-commerce."
        primaryCTA={{ text: 'Book a Demo', href: '/get-started#book-demo' }}
      />

      <FeatureGrid
        title="Retail Security Solutions"
        features={[
          {
            icon: '💳',
            title: 'Payment Fraud Prevention',
            description: 'Detect and prevent payment card fraud and compromise.',
          },
          {
            icon: '🏷️',
            title: 'Brand Protection',
            description: 'Protect your brand from counterfeiting and abuse.',
          },
          {
            icon: '🛒',
            title: 'E-Commerce Security',
            description: 'Secure online shopping platforms from cyber attacks.',
          },
          {
            icon: '📱',
            title: 'Mobile App Security',
            description: 'Protect mobile shopping apps from threats.',
          },
        ]}
      />
    </div>
  );
}
