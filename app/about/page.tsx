import Hero from '@/components/Hero';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div>
      <Hero
        variant="simple"
        badge="About"
        title="About Covenda"
        description="We embed Forward-Deployed Security Engineers with your team to build detections, automate responses, and co-manage operations."
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                Covenda was founded with a simple mission: to help organizations build and operate effective AI-SOC capabilities by embedding Forward-Deployed Security Engineers directly with their teams.
              </p>
              <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                We combine security engineering expertise with the Covenda AI platform to deliver measurable outcomes—faster detection, automated response, and co-managed operations with defined SLOs.
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6 mt-12">
                Our Approach
              </h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                Unlike traditional security consultancies, we don't just provide recommendations and leave. Our Forward-Deployed Security Engineers embed directly with your team, working alongside you to:
              </p>
              <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-neutral-700">
                <li>Understand your environment, threat landscape, and business context</li>
                <li>Build custom detections tailored to your specific needs</li>
                <li>Automate security workflows and response playbooks</li>
                <li>Co-manage operations with defined SLOs and continuous improvement</li>
                <li>Transfer knowledge and build your team's capabilities</li>
              </ul>

              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6 mt-12">
                Measurable Outcomes
              </h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                Organizations using Covenda achieve:
              </p>
              <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-neutral-700">
                <li>70% faster mean time to detect (MTTD)</li>
                <li>24/7 security coverage</li>
                <li>Production-ready detections in 2-4 weeks</li>
                <li>50+ security tool integrations</li>
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

