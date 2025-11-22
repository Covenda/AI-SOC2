import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function RetailPage() {
  return (
    <div>
      <Hero
        badge="Industry"
        title="AI-SOC for Retail"
        description="Covenda's AI-SOC for retail organizations: preemptive threat intelligence, risk-based vulnerability management, and Forward-Deployed Engineers tuned for payment fraud, brand protection, and e-commerce security."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Covenda's AI-SOC is designed for retail organizations facing payment fraud, brand abuse, and e-commerce security threats. The Covenda Technology System delivers preemptive threat intelligence and risk-based vulnerability management tuned for retail-specific threats.
            </p>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Forward-Deployed Engineers embed with your team to wire the platform into your environment, building detections and automations tuned for retail threats (payment fraud, brand impersonation, e-commerce attacks) and the operational realities of retail operations.
            </p>
          </div>
        </div>
      </section>

      <FeatureGrid
        title="How Covenda's AI-SOC Serves Retail"
        features={[
          {
            icon: '💳',
            title: 'Payment Fraud Intelligence',
            description: 'Payment Fraud Intelligence feeds threat modeling, hunting, and assessment with fraud schemes, compromised cards, and threat actor intelligence.',
          },
          {
            icon: '🏷️',
            title: 'Brand Protection',
            description: 'Brand Intelligence monitors for brand abuse, counterfeiting, and impersonation, feeding threat operations with brand-focused intelligence.',
          },
          {
            icon: '🛒',
            title: 'E-Commerce Security',
            description: 'Threat operations tuned for securing online shopping platforms from cyber attacks, including attack surface management and vulnerability prioritization.',
          },
          {
            icon: '📱',
            title: '24/7 AI-SOC Operations',
            description: 'Continuous threat operations through the Covenda Technology System, co-managed with your team and aligned with retail sector SLOs.',
          },
        ]}
      />
    </div>
  );
}
