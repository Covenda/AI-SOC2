import Hero from '@/components/Hero';

export default function WorkWithUsPage() {
  return (
    <div>
      <Hero
        variant="simple"
        badge="Work With Us"
        title="Forward-Deployed Security Engineers"
        description="Forward-Deployed Engineers embed with your team to wire it into your environment. They accelerate value by doing things that don't scale, then feed patterns back into the platform."
      />

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-600 mb-8">
                Forward-Deployed Engineers are product engineers who embed with your team to bridge the Covenda AI and your environment. They wire detections, automations, and workflows that matter immediately, accelerating time from first meeting to first meaningful win.
              </p>
              <p className="text-lg text-neutral-600 mb-8">
                FDEs work closely with customers (virtually or on-site) to understand unique, complex security challenges. They build custom or unscalable solutions as needed, then feed those patterns back into the Covenda AI so they become reusable. This YC-style approach means we "do things that don't scale" early to discover product–market fit, then scale what works.
              </p>
              <p className="text-lg text-neutral-600">
                Ready to turn on your AI-SOC? Forward-Deployed Engineers embed with your team to wire it into your environment. Get started with a demo or assessment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
