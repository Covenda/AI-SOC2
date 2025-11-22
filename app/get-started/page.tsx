import Hero from '@/components/Hero';
import Link from 'next/link';

export default function GetStartedPage() {
  return (
    <div>
      <Hero
        variant="gradient"
        title="Get Started with Covenda"
        description="Turn on Covenda AI-SOC. Forward-Deployed Engineers embed with your team to wire the Covenda Technology System into your environment. Get started with a demo or assessment."
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
                See how Covenda can be your AI-SOC, powered by the Covenda Technology System and Forward-Deployed Engineers.
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
                        Learn from our Forward-Deployed Engineers about Covenda AI-SOC
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
                Start with an Assessment
              </h2>
              <p className="text-xl text-neutral-600 mb-8">
                Begin with a comprehensive security posture evaluation to understand your current state
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">AI-SOC Assessment</h3>
                <p className="text-neutral-600 mb-4">
                  Understand how Covenda AI-SOC can work in your environment. Forward-Deployed Engineers assess your current state and wire the Covenda Technology System.
                </p>
                <Link href="/book-demo" className="text-brand-orange font-semibold">
                  Request Assessment →
                </Link>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Forward-Deployed Engineers</h3>
                <p className="text-neutral-600 mb-4">
                  Product engineers embed with your team to wire the Covenda Technology System into your environment, accelerating time to value.
                </p>
                <Link href="/work-with-us" className="text-brand-orange font-semibold">
                  Learn More →
                </Link>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">AI-SOC Operations</h3>
                <p className="text-neutral-600 mb-4">
                  Covenda runs security operations as a product. Co-manage with your team through the Covenda Technology System and Forward-Deployed Engineers.
                </p>
                <Link href="/platform" className="text-brand-orange font-semibold">
                  Explore Platform →
                </Link>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Interactive Demos</h3>
                <p className="text-neutral-600 mb-4">
                  Explore self-guided demos of our platform capabilities at your own pace.
                </p>
                <Link href="/platform/demo-center" className="text-brand-orange font-semibold">
                  View Demos →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
