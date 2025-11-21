import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function TechnologyPage() {
  return (
    <div>
      <Hero
        badge="Industry"
        title="Intelligence for Technology Companies"
        description="SaaS Platform Supply Chain Security: How Forward-Deployed Security Engineers help technology companies build and operate effective AI-SOC capabilities."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <FeatureGrid
        title="Supply Chain Security for Technology"
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
            title: 'Supply Chain Security',
            description: 'Build detections and workflows to secure your software supply chain.',
          },
        ]}
      />
    </div>
  );
}
