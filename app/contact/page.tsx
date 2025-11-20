import Hero from '@/components/Hero';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div>
      <Hero
        variant="simple"
        badge="Contact"
        title="Get in Touch"
        description="Connect with our team to learn how Recorded Future can help protect your organization."
      />

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Book a Demo</h3>
                <p className="text-neutral-600 mb-6">
                  Schedule a personalized demo to see how Recorded Future can address your specific
                  security challenges.
                </p>
                <Link href="/get-started#book-demo" className="btn btn-primary">
                  Schedule Demo
                </Link>
              </div>
              <div className="card">
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Sales Inquiry</h3>
                <p className="text-neutral-600 mb-6">
                  Contact our sales team to discuss pricing, licensing, and custom solutions for
                  your organization.
                </p>
                <Link href="/get-started" className="btn btn-secondary">
                  Contact Sales
                </Link>
              </div>
              <div className="card">
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Customer Support</h3>
                <p className="text-neutral-600 mb-6">
                  Existing customers can access our support portal for technical assistance.
                </p>
                <a
                  href="https://support.recordedfuture.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Support Portal
                </a>
              </div>
              <div className="card">
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Partnership Opportunities</h3>
                <p className="text-neutral-600 mb-6">
                  Explore technology, channel, and strategic partnership opportunities.
                </p>
                <Link href="/partner" className="btn btn-secondary">
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
