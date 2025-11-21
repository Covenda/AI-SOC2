import Hero from '@/components/Hero';

export default function CareersPage() {
  return (
    <div>
      <Hero
        badge="Careers"
        title="Join Our Team"
        description="Join our team of Forward-Deployed Security Engineers helping organizations build and operate effective AI-SOC capabilities."
        primaryCTA={{ text: 'View Open Positions', href: '/work-with-us' }}
      />

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">
              Why Work at Covenda
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Forward-Deployed Engineering</h3>
                <p className="text-neutral-600">
                  Work directly with customer teams to build detections, automate responses, and co-manage AI-SOC operations.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Measurable Impact</h3>
                <p className="text-neutral-600">
                  See the direct impact of your work: 70% faster MTTD, 24/7 coverage, and production-ready detections in 2-4 weeks.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Collaborative Culture</h3>
                <p className="text-neutral-600">
                  Join a team of passionate security engineers committed to helping organizations build effective AI-SOC capabilities.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Continuous Learning</h3>
                <p className="text-neutral-600">
                  Work across diverse environments and technologies, continuously learning and advancing your security engineering skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
