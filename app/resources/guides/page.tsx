import Hero from '@/components/Hero';

export default function GuidesPage() {
  return (
    <div>
      <Hero
        variant="simple"
        badge="Resources"
        title="Guides & eBooks"
        description="Comprehensive guides on AI-SOC operations, the Covenda AI, threat intelligence, and security best practices."
      />

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">
                  Understanding AI-SOC Operations
                </h3>
                <p className="text-neutral-600">
                  Everything you need to know about how Covenda AI-SOC works,  and Forward-Deployed Engineers.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">
                  Preemptive Threat Intelligence Guide
                </h3>
                <p className="text-neutral-600">
                  Step-by-step guide to understanding event-agnostic, spec-driven threat intelligence and risk-based vulnerability management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
