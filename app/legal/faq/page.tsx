import Hero from '@/components/Hero';

export default function FAQPage() {
  return (
    <div>
      <Hero
        variant="simple"
        title="Frequently Asked Questions"
        description="Common questions about Covenda AI products, services, and policies."
      />

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">
                  What are Forward-Deployed Security Engineers?
                </h3>
                <p className="text-neutral-600">
                  Forward-Deployed Security Engineers are security engineers who embed directly with your team to build detections, automate responses, and co-manage AI-SOC operations.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">
                  How does the assessment process work?
                </h3>
                <p className="text-neutral-600">
                  We start with a 2-4 week assessment to understand your current security posture and build a prioritized roadmap. No long-term commitment required.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">
                  What integrations are available?
                </h3>
                <p className="text-neutral-600">
                  We integrate with 50+ security tools including SIEMs (Splunk, Microsoft Sentinel), SOAR platforms, ticketing systems (Jira, ServiceNow), and more.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-brand-navy mb-3">
                  What outcomes can I expect?
                </h3>
                <p className="text-neutral-600">
                  Organizations using Covenda achieve 70% faster mean time to detect, 24/7 coverage, and production-ready detections in 2-4 weeks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
