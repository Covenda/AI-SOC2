import Hero from '@/components/Hero';

export default function OurStoryPage() {
  return (
    <div>
      <Hero
        variant="simple"
        badge="About Us"
        title="Our Story"
        description="Founded to help organizations make better security decisions through real-time threat intelligence."
      />

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-600 mb-8">
                Recorded Future was founded with a simple mission: to empower organizations to
                proactively defend against cyber threats through real-time intelligence.
              </p>
              <p className="text-lg text-neutral-600">
                Today, we serve over 1,900 organizations across 75 countries, providing the
                intelligence they need to protect their people, assets, and operations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
