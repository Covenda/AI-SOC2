import Hero from '@/components/Hero';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  content: string;
}

const blogPosts: Record<string, BlogPost> = {
  'detection-engineering-best-practices': {
    slug: 'detection-engineering-best-practices',
    title: 'Detection Engineering Best Practices',
    excerpt: 'How Forward-Deployed Security Engineers build and tune custom detections for your environment.',
    date: '2025-01-15',
    category: 'Detection Engineering',
    content: `
      <p class="text-lg text-neutral-700 mb-6">
        Building effective detections is at the core of modern security operations. Our Forward-Deployed Security Engineers work directly with your team to understand your environment, threat landscape, and business context to build detections that matter.
      </p>
      
      <h2 class="text-3xl font-bold text-brand-navy mb-4 mt-8">Understanding Your Environment</h2>
      <p class="text-lg text-neutral-700 mb-6">
        Before writing a single detection rule, our engineers spend time understanding your infrastructure, data flows, and normal user behavior. This context is critical for building detections that reduce false positives while catching real threats.
      </p>
      
      <h2 class="text-3xl font-bold text-brand-navy mb-4 mt-8">Threat Modeling and Detection Design</h2>
      <p class="text-lg text-neutral-700 mb-6">
        We use threat modeling techniques to identify the most relevant threats to your organization. This helps prioritize which detections to build first and ensures we're focusing on threats that could actually impact your business.
      </p>
      
      <h2 class="text-3xl font-bold text-brand-navy mb-4 mt-8">Continuous Tuning and Improvement</h2>
      <p class="text-lg text-neutral-700 mb-6">
        Detections aren't set-and-forget. Our engineers continuously tune detections based on alert volume, false positive rates, and emerging threats. This iterative approach ensures your detections stay effective as your environment and threat landscape evolve.
      </p>
      
      <h2 class="text-3xl font-bold text-brand-navy mb-4 mt-8">Measurable Outcomes</h2>
      <p class="text-lg text-neutral-700 mb-6">
        We track key metrics for every detection we build: mean time to detect, false positive rate, and alert volume. This data-driven approach helps us continuously improve and demonstrate the value of our work.
      </p>
    `,
  },
  'building-effective-ai-soc-operations': {
    slug: 'building-effective-ai-soc-operations',
    title: 'Building Effective AI-SOC Operations',
    excerpt: 'Key strategies for building and operating effective AI-SOC capabilities with measurable outcomes.',
    date: '2025-01-10',
    category: 'AI-SOC',
    content: `
      <p class="text-lg text-neutral-700 mb-6">
        Building an effective AI-SOC requires more than just tools and technology. It requires the right people, processes, and continuous improvement. Here's how we help organizations build AI-SOC capabilities that deliver measurable results.
      </p>
      
      <h2 class="text-3xl font-bold text-brand-navy mb-4 mt-8">Start with Assessment</h2>
      <p class="text-lg text-neutral-700 mb-6">
        We begin every engagement with a comprehensive 2-4 week assessment. This helps us understand your current security posture, identify gaps, and build a prioritized roadmap. No long-term commitment required—just a clear understanding of where you are and where you want to go.
      </p>
      
      <h2 class="text-3xl font-bold text-brand-navy mb-4 mt-8">Forward-Deployed Security Engineers</h2>
      <p class="text-lg text-neutral-700 mb-6">
        Our Forward-Deployed Security Engineers embed directly with your team. They understand your environment, build custom detections, automate workflows, and co-manage operations. This embedded approach ensures knowledge transfer and builds your team's capabilities over time.
      </p>
      
      <h2 class="text-3xl font-bold text-brand-navy mb-4 mt-8">Co-Managed Operations with SLOs</h2>
      <p class="text-lg text-neutral-700 mb-6">
        We co-manage your AI-SOC operations with defined Service Level Objectives (SLOs). This ensures clear expectations, measurable outcomes, and continuous improvement. Typical SLOs include mean time to detect, mean time to respond, and detection coverage.
      </p>
      
      <h2 class="text-3xl font-bold text-brand-navy mb-4 mt-8">Measurable Results</h2>
      <p class="text-lg text-neutral-700 mb-6">
        Organizations using Covenda achieve 70% faster mean time to detect, 24/7 coverage, and production-ready detections in 2-4 weeks. These aren't just numbers—they represent real improvements in your security posture and ability to respond to threats.
      </p>
    `,
  },
  'security-automation-workflow-orchestration': {
    slug: 'security-automation-workflow-orchestration',
    title: 'Security Automation and Workflow Orchestration',
    excerpt: 'How to automate security workflows and response playbooks to reduce mean time to respond.',
    date: '2025-01-05',
    category: 'Automation',
    content: `
      <p class="text-lg text-neutral-700 mb-6">
        Automation is key to scaling security operations. By automating repetitive tasks and orchestrating complex workflows, we help organizations reduce mean time to respond while freeing up analysts to focus on higher-value work.
      </p>
      
      <h2 class="text-3xl font-bold text-brand-navy mb-4 mt-8">Identifying Automation Opportunities</h2>
      <p class="text-lg text-neutral-700 mb-6">
        Our Forward-Deployed Security Engineers work with your team to identify repetitive tasks and manual processes that can be automated. We prioritize high-volume, low-complexity tasks that consume significant analyst time.
      </p>
      
      <h2 class="text-3xl font-bold text-brand-navy mb-4 mt-8">Building Automated Playbooks</h2>
      <p class="text-lg text-neutral-700 mb-6">
        We build automated response playbooks that handle common security scenarios. These playbooks integrate with your SIEM, SOAR, ticketing systems, and other security tools to create end-to-end automated workflows.
      </p>
      
      <h2 class="text-3xl font-bold text-brand-navy mb-4 mt-8">Orchestrating Complex Workflows</h2>
      <p class="text-lg text-neutral-700 mb-6">
        Complex security workflows often span multiple tools and systems. We orchestrate these workflows using the Covenda AI platform, ensuring consistent execution and proper error handling.
      </p>
      
      <h2 class="text-3xl font-bold text-brand-navy mb-4 mt-8">Continuous Improvement</h2>
      <p class="text-lg text-neutral-700 mb-6">
        Automation isn't a one-time effort. We continuously monitor automated workflows, measure their effectiveness, and refine them based on real-world performance. This ensures your automation stays effective as your environment evolves.
      </p>
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <div>
      <Hero
        variant="simple"
        badge={post.category}
        title={post.title}
        description={post.excerpt}
      />

      <article className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 flex items-center gap-4 text-sm text-neutral-500">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>•</span>
              <span>{post.category}</span>
            </div>

            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-16 pt-8 border-t border-neutral-200">
              <Link
                href="/blog"
                className="inline-flex items-center text-brand-orange font-semibold hover:text-brand-navy transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

