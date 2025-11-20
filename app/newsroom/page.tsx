import Hero from '@/components/Hero';
import Link from 'next/link';

export default function NewsroomPage() {
  return (
    <div>
      <Hero
        variant="simple"
        badge="Newsroom"
        title="Latest News"
        description="The latest news, press releases, and company announcements from Recorded Future."
      />

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card mb-6">
              <h3 className="text-xl font-bold text-brand-navy mb-4">Press Releases</h3>
              <Link href="/newsroom/press-releases" className="text-brand-blue font-semibold">
                View All Press Releases →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
