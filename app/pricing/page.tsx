import Hero from '@/components/Hero';
import Link from 'next/link';

export default function PricingPage() {
  const plans = [
    {
      name: 'Examine',
      duration: '2-4 weeks',
      price: 'Starting at $25,000',
      description: 'Fixed-scope security posture evaluation',
      features: [
        'Current state documentation',
        'Gap analysis vs. frameworks (NIST, CIS, SOC 2)',
        'Threat model and risk prioritization',
        'Prioritized remediation roadmap',
        'Resource and timeline estimates',
        'Executive presentation',
      ],
      cta: 'Request Assessment',
      ctaLink: '/contact',
      popular: false,
    },
    {
      name: 'Deploy',
      duration: '6-12 weeks',
      price: 'Starting at $120,000',
      description: 'Outcome-driven FDE engagements',
      features: [
        'Forward-Deployed Security Engineers',
        'Sprint-based delivery (2-week cycles)',
        'Detection engineering & automation',
        'Custom runbooks and playbooks',
        'Integration with existing tools',
        'Knowledge transfer & documentation',
        'Defined SLOs and exit criteria',
      ],
      cta: 'Start Building',
      ctaLink: '/contact',
      popular: true,
    },
    {
      name: 'Operate',
      duration: 'Monthly retainer',
      price: 'Starting at $15,000/month',
      description: 'Ongoing co-managed SOC operations',
      features: [
        '24/7 alert monitoring and triage',
        'Defined response time SLOs',
        'False positive tuning',
        'Detection rule maintenance',
        'Monthly coverage reviews',
        'Quarterly strategy sessions',
        'Dedicated Slack channel',
      ],
      cta: 'Activate Experts',
      ctaLink: '/contact',
      popular: false,
    },
    {
      name: 'Co-Manage',
      duration: 'Add-on to Operate',
      price: 'Contact for quote',
      description: 'Enhanced on-call and incident support',
      features: [
        'Guaranteed SLOs with penalties',
        'On-call phone support',
        'Incident commander assistance',
        'Post-incident analysis',
        'Threat hunting sprints',
        'Red team exercise support',
      ],
      cta: 'Contact Sales',
      ctaLink: '/contact',
      popular: false,
    },
  ];

  const includedFeatures = [
    {
      title: 'Covenda AI Access',
      description: 'Full access to Covenda AI, including threat models, detection content, and automation runbooks.',
    },
    {
      title: 'Standard Integrations',
      description: 'Connectors for Sentinel, Splunk, Jira, ServiceNow, GitHub, Slack, and other common tools at no additional cost.',
    },
    {
      title: 'Knowledge Transfer',
      description: 'Documentation, runbooks, and training to ensure your team can independently operate what we build.',
    },
    {
      title: 'Ongoing Support',
      description: 'Email and Slack support during engagement. Operate tier includes 24/7 escalation channels.',
    },
  ];

  const faqs = [
    {
      question: 'How do I know which tier is right for me?',
      answer: 'Most engagements start with a 2-4 week assessment (Examine) to understand your current state and needs. Based on the findings, we\'ll recommend the appropriate tier for your organization.',
    },
    {
      question: 'What\'s included in the pricing?',
      answer: 'All pricing includes Covenda AI access, standard integrations, knowledge transfer, and ongoing support. Additional services or custom integrations may incur extra costs.',
    },
    {
      question: 'Can I scale up or down between tiers?',
      answer: 'Yes, you can adjust your engagement tier based on your evolving needs. Contact us to discuss scaling options.',
    },
    {
      question: 'Do you offer discounts for longer commitments?',
      answer: 'Yes, we offer discounts for annual commitments and multi-year agreements. Contact sales to discuss your specific needs.',
    },
    {
      question: 'What happens if I\'m not satisfied?',
      answer: 'We work closely with you to ensure satisfaction. If you\'re not happy with the engagement, we\'ll work to address concerns or adjust the scope as needed.',
    },
    {
      question: 'Do you support on-premise or cloud environments?',
      answer: 'Yes, we support both on-premise and cloud environments, including hybrid deployments. Our platform integrates with your existing infrastructure.',
    },
  ];

  return (
    <div>
      <Hero
        variant="simple"
        badge="Pricing"
        title="Transparent Service Pricing"
        description="No hidden fees. No per-user licensing. Just clear, outcome-driven pricing for security engineering and operations."
        primaryCTA={{ text: 'Talk to Sales', href: '/contact' }}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-brand-navy mb-2">{plan.name}</h3>
                    <p className="text-sm text-neutral-600 mb-3">{plan.duration}</p>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-brand-navy">{plan.price}</span>
                    </div>
                    <p className="text-sm text-neutral-700">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-brand-orange mr-2 flex-shrink-0 mt-0.5"
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
                        <span className="text-sm text-neutral-700">{feature}</span>
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

            <div className="text-center mb-4">
              <p className="text-sm text-neutral-600">
                All pricing is approximate and based on typical engagements. Contact us for a custom quote based on your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-12 text-center">
              What's included in every engagement
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {includedFeatures.map((feature, index) => (
                <div key={index} className="card">
                  <h3 className="text-xl font-bold text-brand-navy mb-3">{feature.title}</h3>
                  <p className="text-neutral-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-12 text-center">
              Frequently asked questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="card">
                  <h3 className="text-xl font-bold text-brand-navy mb-3">{faq.question}</h3>
                  <p className="text-neutral-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-brand-orange relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container-custom relative text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Talk to our team to discuss your needs and get a custom quote. Most engagements start with a 2-4 week assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-secondary bg-white text-brand-orange hover:bg-neutral-100">
              Contact Sales
            </Link>
            <Link href="/services" className="btn btn-secondary bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

