import Hero from '@/components/Hero';

export default function CareersPage() {
  return (
    <div>
      <Hero
        badge="Careers"
        title="Join Our Team"
        description="Help us build the future of threat intelligence. Work with the best in cybersecurity."
        primaryCTA={{ text: 'View Open Positions', href: '/work-with-us' }}
      />

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">
              Why Work at Recorded Future
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Innovative Work</h3>
                <p className="text-neutral-600">
                  Work on cutting-edge threat intelligence technology that protects organizations worldwide.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Global Impact</h3>
                <p className="text-neutral-600">
                  Your work directly impacts the security of critical infrastructure and enterprises globally.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Collaborative Culture</h3>
                <p className="text-neutral-600">
                  Join a team of passionate security professionals committed to excellence.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Growth Opportunities</h3>
                <p className="text-neutral-600">
                  Continuous learning and development opportunities to advance your career.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
