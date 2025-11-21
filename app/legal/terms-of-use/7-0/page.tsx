import Hero from '@/components/Hero';

export default function TermsOfUsePage() {
  return (
    <div>
      <Hero
        variant="simple"
        title="Terms of Use"
        description="Terms and conditions for using Covenda AI services."
      />

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-neutral-600">
                Last updated: January 2025
              </p>
              <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">
                Acceptance of Terms
              </h2>
              <p className="text-neutral-600">
                By accessing and using Covenda AI services, you accept and agree to be bound by
                the terms and conditions of this agreement.
              </p>
              <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">Use of Services</h2>
              <p className="text-neutral-600">
                You agree to use our services only for lawful purposes and in accordance with these
                Terms of Use.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
