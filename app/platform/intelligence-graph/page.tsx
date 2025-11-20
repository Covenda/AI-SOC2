import Hero from '@/components/Hero';

export default function IntelligenceGraphPage() {
  return (
    <div>
      <Hero
        badge="Intelligence Graph"
        title="The Intelligence Graph"
        description="Our proprietary Intelligence Graph analyzes billions of data points from millions of sources to deliver actionable threat intelligence."
        primaryCTA={{ text: 'Book a Demo', href: '/get-started#book-demo' }}
        secondaryCTA={{ text: 'Learn More', href: '/platform' }}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-8">
              How the Intelligence Graph Works
            </h2>
            <div className="space-y-8">
              <div className="border-l-4 border-brand-blue pl-6">
                <h3 className="text-2xl font-bold text-brand-navy mb-3">Data Collection</h3>
                <p className="text-lg text-neutral-600">
                  Automated collection from 1M+ sources including open web, dark web, technical
                  sources, and more.
                </p>
              </div>
              <div className="border-l-4 border-brand-cyan pl-6">
                <h3 className="text-2xl font-bold text-brand-navy mb-3">AI Analysis</h3>
                <p className="text-lg text-neutral-600">
                  Machine learning and natural language processing to identify patterns,
                  relationships, and threats.
                </p>
              </div>
              <div className="border-l-4 border-brand-purple pl-6">
                <h3 className="text-2xl font-bold text-brand-navy mb-3">Actionable Intelligence</h3>
                <p className="text-lg text-neutral-600">
                  Context-rich intelligence delivered to your security tools for immediate action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
