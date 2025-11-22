import Hero from '@/components/Hero';

export default function CollectiveInsightsPage() {
  return (
    <div>
      <Hero
        badge="Collective Insights"
        title="Collective Insights"
        description="Anonymized insights from Covenda AI-SOC operations across customers. Understand threats, patterns, and risk trends from a broader perspective to improve your threat operations."
        primaryCTA={{ text: 'Learn More', href: '/book-demo' }}
      />

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Insights from Covenda AI-SOC Operations
            </h2>
            <p className="text-xl text-neutral-600">
              Collective Insights aggregates anonymized patterns from Covenda AI-SOC operations across customers. These insights help you understand threat trends, risk patterns, and security outcomes from a broader perspective, improving your own threat modeling, hunting, and assessment capabilities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
