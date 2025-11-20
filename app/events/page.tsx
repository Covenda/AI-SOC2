import Hero from '@/components/Hero';

export default function EventsPage() {
  return (
    <div>
      <Hero
        variant="simple"
        badge="Events"
        title="Events & Conferences"
        description="Join us at upcoming security conferences and events around the world."
      />

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-xl text-neutral-600">
              Check back soon for upcoming events and conferences.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
