import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function HealthcarePage() {
  return (
    <div>
      <Hero
        badge="Industry"
        title="Intelligence for Healthcare"
        description="Compliance & Detection: How Forward-Deployed Security Engineers help healthcare organizations build and operate effective AI-SOC capabilities."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <FeatureGrid
        title="Compliance & Detection for Healthcare"
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
            title: 'Compliance Support',
            description: 'Build detections and workflows that support HIPAA and healthcare compliance requirements.',
          },
        ]}
      />
    </div>
  );
}
