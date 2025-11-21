import Hero from '@/components/Hero';
import Link from 'next/link';

export default function CaseStudyPage() {
  const caseStudies = [
    {
      title: 'Financial Services: SOC Modernization',
      industry: 'Financial Services',
      href: '/case-study',
    },
    {
      title: 'Technology: SaaS Platform Supply Chain Security',
      industry: 'Technology',
      href: '/case-study',
    },
    {
      title: 'Healthcare: Compliance & Detection',
      industry: 'Healthcare',
      href: '/case-study',
    },
  ];

  return (
    <div>
      <Hero
        variant="simple"
        badge="Case Studies"
        title="Customer Success Stories"
        description="See how organizations use Covenda to build and operate effective AI-SOC capabilities with Forward-Deployed Security Engineers."
      />

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudies.map((study, index) => (
                <Link
                  key={index}
                  href={study.href}
                  className="card group hover:border-brand-orange"
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-semibold mb-3">
                    {study.industry}
                  </span>
                  <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">
                    {study.title}
                  </h3>
                  <div className="flex items-center text-brand-orange font-semibold">
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
