import Hero from '@/components/Hero';

export default function RecordedFutureAIPage() {
  return (
    <div>
      <Hero
        badge="Covenda AI"
        title="Covenda AI & Lucid AI"
        description="The deep dive: how the Covenda AI models threats, maps specifications to systems, and drives the AI-SOC through preemptive intelligence and risk-based vulnerability management."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-8">
              The Platform That Powers Covenda AI-SOC
            </h2>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              The <strong>Covenda AI</strong> is our AI-native security fabric. It includes <strong>Lucid AI</strong>, our engine for spec-driven, preemptive, event-agnostic threat intelligence and risk-based vulnerability management.
            </p>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              The core insight: the real vulnerability is the <strong>gap between your security specifications and your actual systems</strong>. Covenda AI continuously maps and closes that gap by modeling threats before incidents happen, prioritizing based on business risk (not just CVSS scores), and delivering intelligence that's especially suited for AI/AGI systems and highly regulated industries.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Autonomous Threat Modelling</h3>
                <p className="text-neutral-600">
                  Models threats before incidents occur. Event-agnostic intelligence that maps how systems can be attacked, including AI-/AGI-specific threat scenarios.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Spec-to-System Mapping</h3>
                <p className="text-neutral-600">
                  Continuously maps the gap between your security specifications and actual systems. Identifies where reality diverges from intended security posture.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Risk-Based Vulnerability Management</h3>
                <p className="text-neutral-600">
                  Lucid AI prioritizes vulnerabilities based on business risk, not just CVSS scores. Focuses on what actually matters to your organization.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">AI-SOC Operations Engine</h3>
                <p className="text-neutral-600">
                  Powers threat modeling, hunting, intelligence, monitoring, and assessment. The brain of the AI-SOC that drives continuous security operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
