import Hero from '@/components/Hero';

export default function IntelligenceGraphPage() {
  return (
    <div>
      <Hero
        badge="Intelligence Graph"
        title="The Intelligence Graph"
        description="The Intelligence Graph connects threat intelligence, controls, evidence, and automated response in the Covenda Technology System. It powers threat modeling, hunting, and assessment across your AI-SOC operations."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
        secondaryCTA={{ text: 'Learn More', href: '/platform' }}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-8">
              How the Intelligence Graph Powers Your AI-SOC
            </h2>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              The Intelligence Graph is the connective fabric in the Covenda Technology System. It links threat intelligence, controls, evidence, and automated response into a unified model that powers threat operations.
            </p>
            <div className="space-y-8">
              <div className="border-l-4 border-brand-orange pl-6">
                <h3 className="text-2xl font-bold text-brand-navy mb-3">Threat Intelligence Integration</h3>
                <p className="text-lg text-neutral-600">
                  Connects preemptive, event-agnostic threat intelligence with your environment. Maps threats to systems, actors to techniques, and campaigns to vulnerabilities.
                </p>
              </div>
              <div className="border-l-4 border-brand-cyan pl-6">
                <h3 className="text-2xl font-bold text-brand-navy mb-3">Threat Modeling & Hunting</h3>
                <p className="text-lg text-neutral-600">
                  Powers threat modeling by connecting how systems can be attacked with actual telemetry. Feeds threat hunting operations with modeled threat scenarios.
                </p>
              </div>
              <div className="border-l-4 border-brand-orange pl-6">
                <h3 className="text-2xl font-bold text-brand-navy mb-3">Risk-Based Assessment</h3>
                <p className="text-lg text-neutral-600">
                  Connects vulnerabilities, threats, and business context to enable risk-based prioritization. Helps the AI-SOC focus on what actually matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
