import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function FinancialPage() {
  return (
    <div>
      <Hero
        badge="Industry"
        title="Intelligence for Financial Services"
        description="SOC Modernization: How Forward-Deployed Security Engineers help financial institutions build and operate effective AI-SOC capabilities."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <FeatureGrid
        title="SOC Modernization for Financial Services"
        features={[
          {
            icon: '🔍',
            title: 'Security Posture Assessment',
            description: 'Comprehensive evaluation of your current security posture with actionable roadmap.',
          },
          {
            icon: '🚀',
            title: 'Forward-Deployed Engineers',
            description: 'Embed security engineers with your team to build detections and automate responses.',
          },
          {
            icon: '⚙️',
            title: 'Co-Managed Operations',
            description: 'Co-manage your AI-SOC operations with defined SLOs and measurable outcomes.',
          },
          {
            icon: '📊',
            title: 'Measurable Results',
            description: 'Achieve 70% faster MTTD, 24/7 coverage, and production-ready detections in 2-4 weeks.',
          },
        ]}
      />
    </div>
  );
}
