import Hero from '@/components/Hero';

export default function GuidesPage() {
  return (
    <div>
      <Hero
        variant="simple"
        badge="Resources"
        title="Guides & eBooks"
        description="Comprehensive guides to help you build and optimize your security program."
      />

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">
                  The Intelligence Buyer's Guide
                </h3>
                <p className="text-neutral-600">
                  Everything you need to know when evaluating threat intelligence solutions.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">
                  Building a Threat Intelligence Program
                </h3>
                <p className="text-neutral-600">
                  Step-by-step guide to establishing an effective threat intelligence capability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
