import Hero from '@/components/Hero';
import Link from 'next/link';

export default function BlogPage() {
  const blogPosts = [
    {
      slug: 'detection-engineering-best-practices',
      title: 'Detection Engineering in the Covenda AI',
      excerpt: 'How Forward-Deployed Engineers build and tune detections in the Covenda AI, feeding threat hunting and monitoring operations.',
      date: '2025-01-15',
      category: 'Detection Engineering',
    },
    {
      slug: 'building-effective-ai-soc-operations',
      title: 'Running Security Operations as a Product',
      excerpt: 'How Covenda runs security operations as a product through the Covenda AI and Forward-Deployed Engineers.',
      date: '2025-01-10',
      category: 'AI-SOC',
    },
    {
      slug: 'security-automation-workflow-orchestration',
      title: 'Preemptive Threat Intelligence and Risk-Based Vulnerability Management',
      excerpt: 'How the Covenda AI and Lucid AI deliver preemptive, event-agnostic intelligence and risk-based vulnerability management.',
      date: '2025-01-05',
      category: 'Automation',
    },
  ];

  return (
    <div>
      <Hero
        variant="simple"
        badge="Blog"
        title="Insights & Research"
        description="Stay informed with the latest insights on Covenda AI-SOC, the Covenda AI, Forward-Deployed Engineering, and threat operations."
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block group"
                >
                  <article className="card hover:border-brand-orange hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                      <span className="inline-block px-3 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-semibold w-fit">
                        {post.category}
                      </span>
                      <time className="text-sm text-neutral-500">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4 group-hover:text-brand-orange transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-lg text-neutral-600 mb-4 leading-relaxed">
                      {post.excerpt}
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
          </div>
        </div>
      </section>
    </div>
  );
}
