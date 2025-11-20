import Hero from '@/components/Hero';

export default function PressReleasesPage() {
  return (
    <div>
      <Hero
        variant="simple"
        badge="Newsroom"
        title="Press Releases"
        description="Official press releases and company announcements."
      />

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-neutral-600">
              Check back for the latest press releases and company announcements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
