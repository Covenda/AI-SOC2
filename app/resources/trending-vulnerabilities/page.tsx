import Hero from '@/components/Hero';
import Link from 'next/link';

export default function TrendingVulnerabilitiesPage() {
  return (
    <div>
      <Hero
        variant="simple"
        badge="Resources"
        title="Trending Vulnerabilities"
        description="Track the most exploited and trending vulnerabilities, prioritized by risk-based vulnerability management powered by Lucid AI."
      />

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-bold text-brand-navy mb-4">
                Risk-Based Vulnerability Prioritization
              </h3>
              <p className="text-neutral-600 mb-6">
                Monitor vulnerabilities prioritized by Lucid AI based on business risk and the gap between your security specifications and actual systems, not just CVSS scores.
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
