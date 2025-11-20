import Hero from '@/components/Hero';

export default function FAQPage() {
  return (
    <div>
      <Hero
        variant="simple"
        title="Frequently Asked Questions"
        description="Common questions about Recorded Future products, services, and policies."
      />

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">
                  What is threat intelligence?
                </h3>
                <p className="text-neutral-600">
                  Threat intelligence is evidence-based knowledge about existing or emerging threats
                  that can help organizations make informed security decisions.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">
                  How does Recorded Future collect data?
                </h3>
                <p className="text-neutral-600">
                  We collect data from over 1 million sources including open web, dark web, technical
                  sources, and our global partner network, using automated collection and AI analysis.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">
                  What integrations are available?
                </h3>
                <p className="text-neutral-600">
                  We offer 1,000+ integrations with leading security tools including SIEMs, SOARs,
                  firewalls, EDR platforms, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
