import Hero from '@/components/Hero';

export default function PrivacyPolicyPage() {
  return (
    <div>
      <Hero
        variant="simple"
        title="Privacy Policy"
        description="How we collect, use, and protect your information."
      />

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-neutral-600">
                Last updated: January 2025
              </p>
              <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">Introduction</h2>
              <p className="text-neutral-600">
                This Privacy Policy describes how Recorded Future collects, uses, and protects your
                personal information.
              </p>
              <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">
                Information We Collect
              </h2>
              <p className="text-neutral-600">
                We collect information that you provide directly to us, information we obtain
                automatically when you use our services, and information from other sources.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
