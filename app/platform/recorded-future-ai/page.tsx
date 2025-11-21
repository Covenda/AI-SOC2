import Hero from '@/components/Hero';

export default function RecordedFutureAIPage() {
  return (
    <div>
      <Hero
        badge="Artificial Intelligence"
        title="Covenda AI"
        description="AI-powered platform that connects threat intelligence, controls, evidence, and automated response in a single ecosystem."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-8">
              AI-Powered AI-SOC Platform
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Threat Intelligence</h3>
                <p className="text-neutral-600">
                  Real-time threat intelligence to identify and prioritize threats before they impact your organization.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Detection Engineering</h3>
                <p className="text-neutral-600">
                  Build and tune custom detections tailored to your environment and threat landscape.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Automated Response</h3>
                <p className="text-neutral-600">
                  Automate security workflows and response playbooks to reduce mean time to respond.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Co-Managed Operations</h3>
                <p className="text-neutral-600">
                  Co-manage your AI-SOC operations with defined SLOs and continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
