import Hero from '@/components/Hero';
import Link from 'next/link';

export default function ResearchPage() {
  return (
    <div>
      <Hero
        variant="simple"
        badge="Research"
        title="Threat Research"
        description="In-depth threat research and analysis from our Insikt Group intelligence team."
      />

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card mb-8">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Insikt Group</h2>
              <p className="text-lg text-neutral-600 mb-4">
                Insikt Group is Covenda AI's threat research division, providing strategic
                and tactical intelligence to inform security decisions.
              </p>
              <Link href="/research/insikt-group" className="text-brand-orange font-semibold">
                Learn More About Insikt Group →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
