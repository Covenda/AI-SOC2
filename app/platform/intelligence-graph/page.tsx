import Hero from '@/components/Hero';

export default function IntelligenceGraphPage() {
  return (
    <div>
      <Hero
        badge="Intelligence Graph"
        title="The Intelligence Graph"
        description="Covenda AI connects threat intelligence, controls, evidence, and automated response in a single ecosystem."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
        secondaryCTA={{ text: 'Learn More', href: '/platform' }}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-8">
              How Covenda AI Works
            </h2>
            <div className="space-y-8">
              <div className="border-l-4 border-brand-orange pl-6">
                <h3 className="text-2xl font-bold text-brand-navy mb-3">Threat Intelligence</h3>
                <p className="text-lg text-neutral-600">
                  Real-time threat intelligence to identify and prioritize threats before they impact your organization.
                </p>
              </div>
              <div className="border-l-4 border-brand-cyan pl-6">
                <h3 className="text-2xl font-bold text-brand-navy mb-3">Detection Engineering</h3>
                <p className="text-lg text-neutral-600">
                  Forward-Deployed Security Engineers build and tune custom detections tailored to your environment.
                </p>
              </div>
              <div className="border-l-4 border-brand-orange pl-6">
                <h3 className="text-2xl font-bold text-brand-navy mb-3">Automated Response</h3>
                <p className="text-lg text-neutral-600">
                  Automate security workflows and response playbooks to reduce mean time to respond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
