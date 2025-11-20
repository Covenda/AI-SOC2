import Hero from '@/components/Hero';

export default function WhyRecordedFuturePage() {
  return (
    <div>
      <Hero
        badge="Why Choose Us"
        title="Why Recorded Future"
        description="The world's most trusted provider of intelligence for enterprise security, serving 1,900+ organizations globally."
        primaryCTA={{ text: 'Book a Demo', href: '/get-started#book-demo' }}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-4">Unmatched Intelligence Coverage</h2>
              <p className="text-lg text-neutral-600">
                Our Intelligence Graph analyzes data from over 1 million sources in 45+ languages,
                providing the most comprehensive threat intelligence available.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-4">Proven Results</h2>
              <p className="text-lg text-neutral-600">
                Organizations using Recorded Future reduce their mean time to detect by 63% and
                increase analyst productivity by 10x.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-4">Trusted by Industry Leaders</h2>
              <p className="text-lg text-neutral-600">
                From Fortune 500 companies to government agencies, leading organizations rely on
                Recorded Future to protect what matters most.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
