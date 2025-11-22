import Hero from '@/components/Hero';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div>
      <Hero
        variant="simple"
        badge="About"
        title="About Covenda"
        description="Covenda is your AI-SOC, powered by the Covenda Technology System and Forward-Deployed Engineers. We run security operations as a product."
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                Covenda is an AI-SOC. We run security operations as a product, not just a tool and not generic consulting. Instead of helping you build an AI-SOC from scratch, we are the AI-SOC you turn on.
              </p>
              <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                Our AI-SOC is powered by the <strong>Covenda Technology System</strong>—our AI-native security platform that includes <strong>Lucid AI</strong>—and a <strong>Forward-Deployed Engineering (FDE)</strong> model where product engineers embed with customers to make the platform work in real, complex environments.
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6 mt-12">
                What Our AI-SOC Does
              </h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                The Covenda AI-SOC continuously performs five core threat operations:
              </p>
              <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-neutral-700">
                <li><strong>Threat modeling</strong> – mapping how systems can be attacked, including AI-/AGI-specific threat scenarios</li>
                <li><strong>Threat hunting</strong> – proactively looking for signs of those modeled threats inside real environments</li>
                <li><strong>Threat intelligence</strong> – understanding the broader threat landscape (actors, techniques, campaigns) in an event-agnostic way</li>
                <li><strong>Threat monitoring</strong> – continuously watching telemetry, logs, configs, and signals</li>
                <li><strong>Threat assessment</strong> – prioritizing and scoring risk, deciding what actually matters to the business</li>
              </ul>
              <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                All of this runs through the Covenda Technology System, integrated with your existing tools (SIEM, EDR, cloud, identity, ticketing, CI/CD), and tuned by Forward-Deployed Engineers so you don't have to build and operate a SOC from scratch.
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6 mt-12">
                The Covenda Technology System
              </h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                The Covenda Technology System is our AI-native security fabric. It includes Lucid AI, our engine for spec-driven, preemptive, event-agnostic threat intelligence and risk-based vulnerability management.
              </p>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                The core insight: the real vulnerability is the <strong>gap between your security specifications and your actual systems</strong>. Our platform continuously maps and closes that gap by modeling threats before incidents happen, prioritizing based on business risk (not just CVSS scores), and delivering intelligence that's especially suited for AI/AGI systems and highly regulated industries.
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6 mt-12">
                Global Presence
              </h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                Covenda operates globally with teams in:
              </p>
              <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-neutral-700">
                <li>Fort Lauderdale, FL</li>
                <li>Dallas (Irving), TX</li>
                <li>Atlanta, GA</li>
                <li>London, UK</li>
              </ul>

              <div className="mt-12">
                <Link href="/contact" className="btn btn-primary">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

