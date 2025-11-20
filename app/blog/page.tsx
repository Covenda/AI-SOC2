import Hero from '@/components/Hero';

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'Understanding Modern Threat Intelligence',
      excerpt: 'How threat intelligence has evolved and why it matters for your security program.',
      date: '2025-01-15',
      category: 'Threat Intelligence',
    },
    {
      title: 'Ransomware Trends in 2025',
      excerpt: 'Latest ransomware tactics, techniques, and how to defend against them.',
      date: '2025-01-10',
      category: 'Ransomware',
    },
    {
      title: 'Attack Surface Management Best Practices',
      excerpt: 'How to discover and manage your organization\'s external attack surface.',
      date: '2025-01-05',
      category: 'Attack Surface',
    },
  ];

  return (
    <div>
      <Hero
        variant="simple"
        badge="Blog"
        title="Insights & Research"
        description="Stay informed with the latest threat intelligence insights, research, and industry trends."
      />

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {blogPosts.map((post, index) => (
                <div key={index} className="card hover:border-brand-blue cursor-pointer">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-semibold mb-2 md:mb-0 w-fit">
                      {post.category}
                    </span>
                    <span className="text-sm text-neutral-500">{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-3 hover:text-brand-blue transition-colors">
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
