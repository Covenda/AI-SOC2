import Hero from '@/components/Hero';
import Link from 'next/link';

export default function ThreatEngineeringInsightsPage() {
  const insights = [
    {
      title: 'Detection Engineering in the Covenda Technology System',
      category: 'Detection Engineering',
      excerpt: 'How Forward-Deployed Engineers build and tune detections in the Covenda Technology System, feeding threat hunting and monitoring operations.',
      href: '/blog/detection-engineering-best-practices',
    },
    {
      title: 'Running Security Operations as a Product',
      category: 'AI-SOC',
      excerpt: 'How Covenda runs security operations as a product through the Covenda Technology System and Forward-Deployed Engineers, not just a tool or consulting.',
      href: '/blog/building-effective-ai-soc-operations',
    },
    {
      title: 'Preemptive Threat Intelligence and Risk-Based Vulnerability Management',
      category: 'Platform',
      excerpt: 'How the Covenda Technology System and Lucid AI deliver preemptive, event-agnostic intelligence and risk-based vulnerability management.',
      href: '/blog/security-automation-workflow-orchestration',
    },
  ];

  return (
    <div>
      <Hero
        variant="simple"
        badge="Insights"
        title="Threat Engineering Insights"
        description="Covenda perspective on threat engineering, AI-SOC design, and the Covenda Technology System. Insights from Forward-Deployed Engineers and the core product team on how we run security operations as a product."
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {insights.map((insight, index) => (
                <Link
                  key={index}
                  href={insight.href}
                  className="block group"
                >
                  <article className="card hover:border-brand-orange hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                      <span className="inline-block px-3 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-semibold w-fit">
                        {insight.category}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4 group-hover:text-brand-orange transition-colors">
                      {insight.title}
                    </h3>
                    <p className="text-lg text-neutral-600 mb-4 leading-relaxed">
                      {insight.excerpt}
                    </p>
                    <div className="flex items-center text-brand-orange font-semibold group-hover:text-brand-navy transition-colors">
                      Read article
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
                  </article>
                </Link>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/blog" className="btn btn-primary">
                View All Insights
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

