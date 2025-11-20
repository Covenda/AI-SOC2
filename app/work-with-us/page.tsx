import Hero from '@/components/Hero';

export default function WorkWithUsPage() {
  return (
    <div>
      <Hero
        variant="simple"
        badge="Careers"
        title="Open Positions"
        description="Explore career opportunities at Recorded Future."
      />

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-neutral-600">
              Visit our careers portal to view current openings.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
