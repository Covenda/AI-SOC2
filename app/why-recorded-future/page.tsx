import Hero from '@/components/Hero';

export default function WhyRecordedFuturePage() {
  return (
    <div>
      <Hero
        badge="Why Choose Us"
        title="Why Covenda"
        description="We embed Forward-Deployed Security Engineers with your team to build detections, automate responses, and co-manage operations on Covenda AI."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-4">Forward-Deployed Security Engineers</h2>
              <p className="text-lg text-neutral-600">
                Our security engineers embed directly with your team to understand your environment, build custom detections, and automate security workflows tailored to your needs.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-4">Measurable Outcomes</h2>
              <p className="text-lg text-neutral-600">
                Organizations using Covenda AI achieve 70% faster mean time to detect, 24/7 coverage, and production-ready detections in 2-4 weeks.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-4">Co-Managed AI-SOC Operations</h2>
              <p className="text-lg text-neutral-600">
                We co-manage your security operations with defined SLOs, ensuring continuous improvement and measurable security outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
