import Hero from '@/components/Hero';

export default function CookiePolicyPage() {
  return (
    <div>
      <Hero
        variant="simple"
        title="Cookie Policy"
        description="How we use cookies and similar technologies."
      />

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-neutral-600">
                Last updated: January 2025
              </p>
              <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">What Are Cookies</h2>
              <p className="text-neutral-600">
                Cookies are small text files that are placed on your device to help websites function
                properly and provide usage information.
              </p>
              <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">How We Use Cookies</h2>
              <p className="text-neutral-600">
                We use cookies to improve our services, understand how our website is used, and
                personalize your experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
