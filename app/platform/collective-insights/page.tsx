import Hero from '@/components/Hero';

export default function CollectiveInsightsPage() {
  return (
    <div>
      <Hero
        badge="Collective Insights"
        title="Collective Insights"
        description="Leverage the power of our global security community. Access anonymized insights from thousands of organizations worldwide."
        primaryCTA={{ text: 'Learn More', href: '/get-started#book-demo' }}
      />

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Powered by Global Intelligence
            </h2>
            <p className="text-xl text-neutral-600">
              Our community-driven insights help you understand threats from a global perspective
              and make better security decisions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
