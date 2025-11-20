import Hero from '@/components/Hero';

export default function MaturityAssessmentPage() {
  return (
    <div>
      <Hero
        variant="simple"
        badge="Resources"
        title="Threat Intelligence Maturity Assessment"
        description="Assess your organization's threat intelligence program maturity and identify areas for improvement."
      />

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-bold text-brand-navy mb-4">
                Evaluate Your TI Program
              </h3>
              <p className="text-neutral-600">
                Use our maturity model to benchmark your threat intelligence capabilities and
                develop a roadmap for improvement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
