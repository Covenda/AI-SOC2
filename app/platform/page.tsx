import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';
import Link from 'next/link';

export default function PlatformPage() {
  return (
    <div>
      <Hero
        badge="Intelligence Cloud Platform"
        title="The Intelligence Cloud Platform"
        description="A unified platform to collect, analyze, and operationalize threat intelligence across your entire security ecosystem."
        primaryCTA={{ text: 'Book a Demo', href: '/get-started#book-demo' }}
        secondaryCTA={{ text: 'View Demo Center', href: '/platform/demo-center' }}
      />

      <FeatureGrid
        title="Platform Capabilities"
        description="Comprehensive intelligence capabilities built for modern security teams"
        features={[
          {
            icon: '🧠',
            title: 'Intelligence Graph',
            description:
              'Our proprietary Intelligence Graph connects billions of data points to provide context-rich intelligence.',
            href: '/platform/intelligence-graph',
          },
          {
            icon: '👥',
            title: 'Collective Insights',
            description:
              'Leverage anonymized insights from our global community of security professionals.',
            href: '/platform/collective-insights',
          },
          {
            icon: '🤖',
            title: 'Recorded Future AI',
            description:
              'AI-powered analysis to automate threat detection and prioritization at scale.',
            href: '/platform/recorded-future-ai',
          },
          {
            icon: '🔌',
            title: 'Integrations',
            description:
              'Seamlessly integrate with 1,000+ security tools in your existing tech stack.',
            href: '/platform/integrations',
          },
          {
            icon: '🌐',
            title: 'Browser Extension',
            description:
              'Access intelligence directly in your browser for real-time threat context.',
            href: '/platform/browser-extension',
          },
          {
            icon: '🎯',
            title: 'Demo Center',
            description:
              'Explore interactive demos of our platform capabilities and use cases.',
            href: '/platform/demo-center',
          },
        ]}
      />

      {/* Integration Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Seamless Integration with Your Security Stack
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Connect Recorded Future with your existing SIEM, SOAR, TIP, and other security tools
            </p>
            <Link href="/platform/integrations" className="btn btn-primary">
              Explore Integrations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
