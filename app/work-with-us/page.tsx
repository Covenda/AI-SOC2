import Hero from '@/components/Hero';

export default function WorkWithUsPage() {
  return (
    <div>
      <Hero
        variant="simple"
        badge="Work With Us"
        title="Forward-Deployed Security Engineers"
        description="We embed Forward-Deployed Security Engineers with your team to build detections, automate responses, and co-manage operations."
      />

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-600 mb-8">
                Our Forward-Deployed Security Engineers work directly with your team to understand your environment, build custom detections, and automate security workflows.
              </p>
              <p className="text-lg text-neutral-600 mb-8">
                We start with a 2-4 week assessment to understand your current state and build a prioritized roadmap. Then we embed engineers with your team to implement detections, automate responses, and co-manage operations with defined SLOs.
              </p>
              <p className="text-lg text-neutral-600">
                Ready to build your AI-SOC? Start with a free assessment—no long-term commitment required.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
