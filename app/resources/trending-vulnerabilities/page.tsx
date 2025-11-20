import Hero from '@/components/Hero';
import Link from 'next/link';

export default function TrendingVulnerabilitiesPage() {
  return (
    <div>
      <Hero
        variant="simple"
        badge="Resources"
        title="Trending Vulnerabilities"
        description="Track the most exploited and trending vulnerabilities based on real-world intelligence."
      />

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-bold text-brand-navy mb-4">
                Stay Ahead of Emerging Threats
              </h3>
              <p className="text-neutral-600 mb-6">
                Monitor vulnerabilities that are actively being exploited in the wild and trending
                across threat actor communities.
              </p>
              <Link href="/vulnerability-database" className="btn btn-primary">
                Search Vulnerability Database
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
