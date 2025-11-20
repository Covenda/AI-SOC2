import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function FinancialPage() {
  return (
    <div>
      <Hero
        badge="Industry"
        title="Intelligence for Financial Services"
        description="Protect financial institutions from cyber threats, fraud, and regulatory risks with comprehensive threat intelligence."
        primaryCTA={{ text: 'Book a Demo', href: '/get-started#book-demo' }}
      />

      <FeatureGrid
        title="Solutions for Financial Services"
        features={[
          {
            icon: '💳',
            title: 'Fraud Prevention',
            description: 'Detect and prevent payment fraud, account takeover, and financial crimes.',
          },
          {
            icon: '🛡️',
            title: 'Cyber Threat Intelligence',
            description: 'Protect against targeted attacks on financial infrastructure.',
          },
          {
            icon: '📊',
            title: 'Third-Party Risk',
            description: 'Monitor vendor and supply chain security risks.',
          },
          {
            icon: '⚖️',
            title: 'Compliance',
            description: 'Meet regulatory requirements with comprehensive intelligence.',
          },
        ]}
      />
    </div>
  );
}
