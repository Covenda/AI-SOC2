import Hero from '@/components/Hero';
import Link from 'next/link';

export default function CaseStudyPage() {
  const caseStudies = [
    {
      title: 'Citizens Financial Group Banks on Threat Intelligence',
      industry: 'Financial Services',
      href: '/case-study/citizens-financial-group-banks-on-threat-intelligence',
    },
    {
      title: 'Allied Bank Limited Adopts a Proactive Security Strategy',
      industry: 'Financial Services',
      href: '/case-study/allied-bank-limited-adopts-a-proactive-security-strategy-with-recorded-future-intelligence',
    },
    {
      title: 'InvestBank Enhances Security Posture',
      industry: 'Financial Services',
      href: '/case-study/investbank',
    },
    {
      title: 'Recorded Future Doubles the Power of Credit Union Security Team',
      industry: 'Financial Services',
      href: '/case-study/recorded-future-more-than-doubles-the-power-of-credit-union-security-team',
    },
    {
      title: 'NOV Uses Intelligence Cloud to Defend Against Nation-States',
      industry: 'Energy',
      href: '/case-study/nov-uses-the-recorded-future-intelligence-cloud-to-defend-against-nation-states-and-adopt-zero-trust',
    },
    {
      title: 'Kyriba Relies on Threat Intelligence to Grow and Protect',
      industry: 'Technology',
      href: '/case-study/kyriba-relies-on-threat-intelligence-to-grow-and-protect',
    },
  ];

  return (
    <div>
      <Hero
        variant="simple"
        badge="Case Studies"
        title="Customer Success Stories"
        description="See how organizations use Recorded Future to protect against cyber threats."
      />

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudies.map((study, index) => (
                <Link
                  key={index}
                  href={study.href}
                  className="card group hover:border-brand-blue"
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-semibold mb-3">
                    {study.industry}
                  </span>
                  <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-blue transition-colors">
                    {study.title}
                  </h3>
                  <div className="flex items-center text-brand-blue font-semibold">
                    Read Case Study
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
