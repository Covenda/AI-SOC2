import Hero from '@/components/Hero';
import Link from 'next/link';

export default function ResearchPage() {
  return (
    <div>
      <Hero
        variant="simple"
        badge="Research"
        title="Threat Research"
        description="In-depth threat research and analysis from Covenda threat research team on threat engineering, AI-SOC operations, and the Covenda Technology System."
      />

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card mb-8">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Covenda Threat Research</h2>
              <p className="text-lg text-neutral-600 mb-4">
                Covenda threat research team provides strategic and tactical intelligence on threat engineering, AI-SOC operations, and how the Covenda Technology System powers security operations.
              </p>
              <Link href="/research/insikt-group" className="text-brand-orange font-semibold">
                Learn More About Covenda Threat Research →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
