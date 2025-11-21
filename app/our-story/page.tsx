import Hero from '@/components/Hero';

export default function OurStoryPage() {
  return (
    <div>
      <Hero
        variant="simple"
        badge="About Us"
        title="Our Story"
        description="We embed Forward-Deployed Security Engineers with your team to build detections, automate responses, and co-manage operations."
      />

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-600 mb-8">
                Covenda was founded with a simple mission: to help organizations build and operate effective AI-SOC capabilities by embedding Forward-Deployed Security Engineers directly with their teams.
              </p>
              <p className="text-lg text-neutral-600">
                We combine security engineering expertise with the Covenda AI platform to deliver measurable outcomes—faster detection, automated response, and co-managed operations with defined SLOs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
