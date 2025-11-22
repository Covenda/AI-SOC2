import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function FinancialPage() {
  return (
    <div>
      <Hero
        badge="Industry"
        title="AI-SOC for Financial Services"
        description="Covenda AI-SOC for financial institutions: preemptive threat intelligence, risk-based vulnerability management, and Forward-Deployed Engineers tuned for regulatory compliance and financial sector threats."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Covenda AI-SOC is designed for financial services organizations operating in highly regulated environments. The Covenda Technology System delivers preemptive threat intelligence and risk-based vulnerability management that prioritizes based on business risk and regulatory requirements, not just generic threat feeds.
            </p>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Forward-Deployed Engineers embed with your team to wire the platform into your environment, building detections and automations tuned for financial sector threats, regulatory compliance (FFIEC, GLBA, PCI-DSS), and the operational realities of banking, insurance, and capital markets.
            </p>
          </div>
        </div>
      </section>

      <FeatureGrid
        title="How Covenda AI-SOC Serves Financial Services"
        features={[
          {
            icon: '🔍',
            title: 'Regulatory-Aligned Threat Operations',
            description: 'Threat modeling, hunting, intelligence, monitoring, and assessment tuned for financial sector threats and regulatory requirements.',
          },
          {
            icon: '🚀',
            title: 'Forward-Deployed Engineering',
            description: 'FDEs embed with your team to wire the Covenda Technology System into your environment, accelerating time to value in complex financial systems.',
          },
          {
            icon: '⚙️',
            title: 'Risk-Based Prioritization',
            description: 'Lucid AI prioritizes vulnerabilities and threats based on business risk and regulatory impact, not just CVSS scores or generic alerts.',
          },
          {
            icon: '📊',
            title: '24/7 AI-SOC Operations',
            description: 'Continuous threat operations through the Covenda Technology System, co-managed with your team and aligned with financial sector SLOs.',
          },
        ]}
      />
    </div>
  );
}
