import Hero from '@/components/Hero';

export default function CareersPage() {
  return (
    <div>
      <Hero
        badge="Careers"
        title="Join Our Team"
        description="Join Covenda as a Forward-Deployed Engineer or core product team member. Help run security operations as a product, ."
        primaryCTA={{ text: 'View Open Positions', href: '/work-with-us' }}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-16 text-center">
              Why Work at Covenda
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-4">Forward-Deployed Engineering</h3>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Embed with customers as a product engineer. Bridge the Covenda AI and customer environments, doing things that don't scale to accelerate value, then feed patterns back into the platform.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-4">Product-First Culture</h3>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Work on the Covenda AI (including Lucid AI) that powers AI-SOC operations. Build preemptive threat intelligence, risk-based vulnerability management, and the platform that runs security operations as a product.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-4">YC-Style Approach</h3>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Join a team that "does things that don't scale" early to discover product–market fit, then abstracts and scales what works. Tight loop between FDEs and core product team.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-4">Continuous Learning</h3>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Work across diverse customer environments, threat landscapes, and technologies. Learn from real-world security operations and feed that learning back into the product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
