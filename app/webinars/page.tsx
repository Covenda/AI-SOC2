import Hero from '@/components/Hero';

export default function WebinarsPage() {
  return (
    <div>
      <Hero
        variant="simple"
        badge="Webinars"
        title="Webinars & Training"
        description="Learn from Covenda experts about AI-SOC operations, the Covenda Technology System, Forward-Deployed Engineering, and threat operations through live webinars and on-demand training."
      />

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-xl text-neutral-600">
              Check back soon for upcoming webinars and training sessions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
