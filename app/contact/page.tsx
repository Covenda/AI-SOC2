import Hero from '@/components/Hero';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div>
      <Hero
        variant="simple"
        badge="Contact"
        title="Get in Touch"
        description="Connect with our team to learn how Covenda can be your AI-SOC, powered by the Covenda Technology System and Forward-Deployed Engineers."
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-8">
                  Contact Information
                </h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-brand-navy mb-3 flex items-center">
                      <svg
                        className="w-6 h-6 text-brand-orange mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Offices
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <p className="font-semibold text-brand-navy mb-2">Fort Lauderdale, FL</p>
                        <p className="text-lg text-neutral-700 leading-relaxed">
                          United States
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-brand-navy mb-2">Dallas (Irving), TX</p>
                        <p className="text-lg text-neutral-700 leading-relaxed">
                          United States
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-brand-navy mb-2">Atlanta, GA</p>
                        <p className="text-lg text-neutral-700 leading-relaxed">
                          United States
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-brand-navy mb-2">London, UK</p>
                        <p className="text-lg text-neutral-700 leading-relaxed">
                          United Kingdom
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-navy mb-3 flex items-center">
                      <svg
                        className="w-6 h-6 text-brand-orange mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Email
                    </h3>
                    <p className="text-lg text-neutral-700 mb-2">
                      <a
                        href="mailto:support@covenda.ai"
                        className="text-brand-orange hover:text-brand-navy transition-colors"
                      >
                        support@covenda.ai
                      </a>
                    </p>
                    <p className="text-neutral-600 mb-2">
                      For general inquiries, support, and partnership opportunities
                    </p>
                    <p className="text-lg text-neutral-700 mb-2">
                      <a
                        href="mailto:hiring@covenda.ai"
                        className="text-brand-orange hover:text-brand-navy transition-colors"
                      >
                        hiring@covenda.ai
                      </a>
                    </p>
                    <p className="text-neutral-600">
                      For career and hiring inquiries
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-navy mb-3 flex items-center">
                      <svg
                        className="w-6 h-6 text-brand-orange mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      Schedule a Demo
                    </h3>
                    <p className="text-lg text-neutral-700 mb-4">
                      Book a personalized demo to see how Covenda can be your AI-SOC, powered by the Covenda Technology System.
                </p>
                <Link href="/book-demo" className="btn btn-primary">
                      Request Demo
                </Link>
              </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-navy mb-3 flex items-center">
                      <svg
                        className="w-6 h-6 text-brand-orange mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      Partnership Inquiries
                    </h3>
                    <p className="text-lg text-neutral-700 mb-4">
                  Explore technology, channel, and strategic partnership opportunities.
                </p>
                <Link href="/partner" className="btn btn-secondary">
                  Partner With Us
                </Link>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-8">
                  Send us a Message
                </h2>
                <div className="card">
                  <form className="space-y-6" action="mailto:support@covenda.ai" method="post" encType="text/plain">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-brand-navy mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-brand-navy mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
                        placeholder="your.email@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-brand-navy mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-brand-navy mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="demo">Request a Demo</option>
                        <option value="sales">Sales Inquiry</option>
                        <option value="support">Customer Support</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-brand-navy mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all resize-none"
                        placeholder="Tell us how we can help..."
                      />
                    </div>
                    <button type="submit" className="btn btn-primary w-full">
                      Send Message
                    </button>
                    <p className="text-sm text-neutral-600 text-center">
                      By submitting this form, you agree to our{' '}
                      <Link href="/legal/privacy-policy/4-0" className="text-brand-orange hover:underline">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
