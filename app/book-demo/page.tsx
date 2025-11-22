import Hero from '@/components/Hero';
import Link from 'next/link';

export default function BookDemoPage() {
  return (
    <div>
      <Hero
        variant="gradient"
        badge="Schedule a Demo"
        title="Book a Live Demo"
        description="See how Covenda can be your AI-SOC, powered by the Covenda Technology System and Forward-Deployed Engineers. Turn on security operations as a product instead of building from scratch."
        primaryCTA={{ text: 'Schedule Now', href: '#demo-form' }}
      />

      {/* Benefits Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                Why Book a Demo?
              </h2>
              <p className="text-xl text-neutral-600 mb-8">
                Experience the Covenda Technology System and learn how Forward-Deployed Engineers wire it into your environment to run AI-SOC operations
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="card text-center">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-brand-orange"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">
                  Personalized Demonstration
                </h3>
                <p className="text-neutral-600">
                  Tailored to your organization's specific security challenges and use cases
                </p>
              </div>
              <div className="card text-center">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-brand-orange"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">Expert Guidance</h3>
                <p className="text-neutral-600">
                  Learn from our Forward-Deployed Engineers and get answers about how Covenda's AI-SOC works
                </p>
              </div>
              <div className="card text-center">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-brand-orange"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">No Obligation</h3>
                <p className="text-neutral-600">
                  Free consultation with no strings attached. See the value before you commit
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Form Section */}
      <section id="demo-form" className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                Schedule Your Demo
              </h2>
              <p className="text-xl text-neutral-600">
                Fill out the form below and our team will contact you to schedule a personalized
                demonstration
              </p>
            </div>
            <div className="card">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-brand-navy mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-brand-navy mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-brand-navy mb-2">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    placeholder="john.doe@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-brand-navy mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-brand-navy mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="useCase" className="block text-sm font-semibold text-brand-navy mb-2">
                    Primary Use Case
                  </label>
                  <select
                    id="useCase"
                    name="useCase"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  >
                    <option value="">Select a use case</option>
                    <option value="soc-modernization">SOC Modernization</option>
                    <option value="detection-engineering">Detection Engineering</option>
                    <option value="automation">Security Automation</option>
                    <option value="co-managed">Co-Managed Operations</option>
                    <option value="threat-modeling">Threat Modeling</option>
                    <option value="incident-response">Incident Response</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-brand-navy mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    placeholder="Tell us about your security challenges or specific areas you'd like to explore..."
                  />
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  Schedule My Demo
                </button>
                <p className="text-sm text-neutral-600 text-center">
                  By submitting this form, you agree to our{' '}
                  <Link href="/legal/privacy-policy/4-0" className="text-brand-orange hover:underline">
                    Privacy Policy
                  </Link>
                  . We'll never share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Options */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                Other Ways to Get Started
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Interactive Demos</h3>
                <p className="text-neutral-600 mb-4">
                  Explore self-guided demos of our platform capabilities at your own pace.
                </p>
                <Link href="/platform/demo-center" className="text-brand-orange font-semibold">
                  View Demo Center →
                </Link>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Contact Sales</h3>
                <p className="text-neutral-600 mb-4">
                  Speak directly with our sales team about your specific requirements.
                </p>
                <Link href="/contact" className="text-brand-orange font-semibold">
                  Contact Us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

