import Hero from '@/components/Hero';
import Link from 'next/link';

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'For early teams validating security workflows',
      features: [
        'Security posture assessment',
        'Basic threat intelligence',
        'Community support',
        'Limited integrations',
      ],
      cta: 'Get Started',
      ctaLink: '/get-started',
      popular: false,
    },
    {
      name: 'Plus',
      price: '$320',
      period: '/month',
      description: 'Advanced threat modeling and team collaboration',
      features: [
        'Everything in Starter',
        'Forward-Deployed Security Engineers',
        'Custom detection engineering',
        'Workflow automation',
        'Priority support',
        'Advanced integrations',
      ],
      cta: 'Contact Sales',
      ctaLink: '/contact',
      popular: true,
    },
    {
      name: 'Premium',
      price: '$1,300',
      period: '/month',
      description: 'End-to-end automation, compliance, and support',
      features: [
        'Everything in Plus',
        'AI-SOC Co-Management',
        '24/7 coverage',
        'Dedicated support team',
        'Compliance support',
        'Custom integrations',
        'SLA guarantees',
      ],
      cta: 'Contact Sales',
      ctaLink: '/contact',
      popular: false,
    },
  ];

  return (
    <div>
      <Hero
        variant="simple"
        badge="Pricing"
        title="Simple, Transparent Pricing"
        description="Choose the plan that fits your organization's security needs. All plans include our core AI-SOC services."
        primaryCTA={{ text: 'Contact Sales', href: '/contact' }}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`card relative ${plan.popular ? 'border-brand-orange border-2' : ''}`}
                >
                  {plan.popular && (
                    <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-brand-orange text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-brand-navy mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-brand-navy">{plan.price}</span>
                      {plan.period && (
                        <span className="text-lg text-neutral-600">{plan.period}</span>
                      )}
                    </div>
                    <p className="text-neutral-600">{plan.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-6 h-6 text-brand-cyan mr-3 flex-shrink-0 mt-0.5"
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
                        <span className="text-lg text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={plan.ctaLink}
                    className={`btn w-full text-center ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-lg text-neutral-700 mb-4">
                Need a custom solution? We offer enterprise plans tailored to your specific needs.
              </p>
              <Link href="/contact" className="btn btn-secondary">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

