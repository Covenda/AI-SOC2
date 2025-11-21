import Hero from '@/components/Hero';

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'Detection Engineering Best Practices',
      excerpt: 'How Forward-Deployed Security Engineers build and tune custom detections for your environment.',
      date: '2025-01-15',
      category: 'Detection Engineering',
    },
    {
      title: 'Building Effective AI-SOC Operations',
      excerpt: 'Key strategies for building and operating effective AI-SOC capabilities with measurable outcomes.',
      date: '2025-01-10',
      category: 'AI-SOC',
    },
    {
      title: 'Security Automation and Workflow Orchestration',
      excerpt: 'How to automate security workflows and response playbooks to reduce mean time to respond.',
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
        description="Stay informed with the latest insights on AI-SOC operations, detection engineering, and security automation."
      />

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {blogPosts.map((post, index) => (
                <div key={index} className="card hover:border-brand-orange cursor-pointer">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-semibold mb-2 md:mb-0 w-fit">
                      {post.category}
                    </span>
                    <span className="text-sm text-neutral-500">{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-3 hover:text-brand-orange transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-neutral-600">{post.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
