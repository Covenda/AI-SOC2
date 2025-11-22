import Hero from '@/components/Hero';

export default function MaturityAssessmentPage() {
  return (
    <div>
      <Hero
        variant="simple"
        badge="Resources"
        title="Security Operations Maturity Assessment"
        description="Assess your organization's security operations maturity and understand how Covenda's AI-SOC can serve your organization."
      />

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-bold text-brand-navy mb-4">
                Evaluate Your Security Operations
              </h3>
              <p className="text-neutral-600">
                Use our maturity model to benchmark your security operations capabilities and understand how Covenda's AI-SOC, powered by the Covenda Technology System, can serve your organization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
