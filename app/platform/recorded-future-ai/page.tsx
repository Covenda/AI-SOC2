import Hero from '@/components/Hero';

export default function RecordedFutureAIPage() {
  return (
    <div>
      <Hero
        badge="Artificial Intelligence"
        title="Recorded Future AI"
        description="Advanced AI and machine learning to automate threat detection, analysis, and response at scale."
        primaryCTA={{ text: 'Book a Demo', href: '/get-started#book-demo' }}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-8">
              AI-Powered Intelligence
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Natural Language Processing</h3>
                <p className="text-neutral-600">
                  Analyze unstructured data from millions of sources in 45+ languages.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Machine Learning</h3>
                <p className="text-neutral-600">
                  Identify patterns and anomalies to detect emerging threats faster.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Automated Analysis</h3>
                <p className="text-neutral-600">
                  Reduce analyst workload with automated threat scoring and prioritization.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Predictive Intelligence</h3>
                <p className="text-neutral-600">
                  Anticipate threats before they impact your organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
