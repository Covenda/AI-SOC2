import Hero from '@/components/Hero';

export default function InsiktGroupPage() {
  return (
    <div>
      <Hero
        badge="Research"
        title="Covenda Threat Research"
        description="Covenda's threat research team providing strategic intelligence and in-depth analysis on threat engineering, AI-SOC operations, and global cyber threats."
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-6">
              Covenda's Threat Research Team
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Covenda's threat research team analyzes global cyber threats, nation-state activity, threat actor campaigns, and emerging attack trends to provide actionable intelligence that feeds the Covenda Technology System and AI-SOC operations.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Nation-State Analysis</h3>
                <p className="text-neutral-600">
                  Track and analyze nation-state threat actor activity and geopolitical cyber risks.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Threat Actor Profiling</h3>
                <p className="text-neutral-600">
                  Deep-dive analysis of threat actor groups, their TTPs, and infrastructure.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Campaign Tracking</h3>
                <p className="text-neutral-600">
                  Monitor and report on active threat campaigns targeting organizations globally.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Strategic Intelligence</h3>
                <p className="text-neutral-600">
                  Strategic intelligence reports to inform executive security decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
