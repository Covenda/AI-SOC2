import Hero from '@/components/Hero';
import Link from 'next/link';

export default function GetStartedPage() {
  return (
    <div>
      <Hero
        variant="gradient"
        title="Get Started with Recorded Future"
        description="Choose how you want to experience the Intelligence Cloud Platform"
      />

      {/* Book a Demo Section */}
      <section id="book-demo" className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                Book a Live Demo
              </h2>
              <p className="text-xl text-neutral-600 mb-8">
                See how Recorded Future can transform your security operations with a personalized
                demo from our experts.
              </p>
              <div className="bg-neutral-50 rounded-2xl p-8 md:p-12">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-brand-cyan mr-4 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div className="text-left">
                      <h3 className="font-semibold text-brand-navy mb-2">
                        Personalized Demonstration
                      </h3>
                      <p className="text-neutral-600">
                        Tailored to your organization's specific security challenges
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-brand-cyan mr-4 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div className="text-left">
                      <h3 className="font-semibold text-brand-navy mb-2">Expert Guidance</h3>
                      <p className="text-neutral-600">
                        Learn from our threat intelligence experts
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-brand-cyan mr-4 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div className="text-left">
                      <h3 className="font-semibold text-brand-navy mb-2">No Obligation</h3>
                      <p className="text-neutral-600">
                        Free consultation with no strings attached
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link href="/contact" className="btn btn-primary btn-lg">
                    Schedule Your Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Tools Section */}
      <section id="free-tools" className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                Try Our Free Tools
              </h2>
              <p className="text-xl text-neutral-600 mb-8">
                Experience Recorded Future intelligence with our free tools and resources
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Browser Extension</h3>
                <p className="text-neutral-600 mb-4">
                  Get instant threat intelligence context for IPs, domains, and URLs directly in
                  your browser.
                </p>
                <Link href="/platform/browser-extension" className="text-brand-blue font-semibold">
                  Download Extension →
                </Link>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Threat Intelligence Feeds</h3>
                <p className="text-neutral-600 mb-4">
                  Access free threat intelligence feeds to enhance your security tools.
                </p>
                <Link href="/resources" className="text-brand-blue font-semibold">
                  Explore Feeds →
                </Link>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Interactive Demos</h3>
                <p className="text-neutral-600 mb-4">
                  Explore self-guided demos of our platform capabilities at your own pace.
                </p>
                <Link href="/platform/demo-center" className="text-brand-blue font-semibold">
                  View Demos →
                </Link>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Vulnerability Database</h3>
                <p className="text-neutral-600 mb-4">
                  Search our comprehensive vulnerability database with exploitation context.
                </p>
                <Link href="/vulnerability-database" className="text-brand-blue font-semibold">
                  Search Database →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
