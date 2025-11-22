import Hero from '@/components/Hero';

export default function OurStoryPage() {
  return (
    <div>
      <Hero
        variant="simple"
        badge="About Us"
        title="Our Story"
        description="From product-first to AI-SOC provider: how Covenda built the Covenda Technology System and flipped the model to run security operations as a product."
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 mb-8 leading-relaxed">
                Covenda started by building a real product—the <strong>Covenda Technology System</strong>, including <strong>Lucid AI</strong>—that security teams could use for threat modeling, risk-based vulnerability management, and preemptive intelligence.
              </p>
              <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                But instead of just selling another security tool and waiting for customers to configure it correctly, we flipped the model: <strong>Covenda became the AI-SOC provider</strong>. The product is used internally to run security operations for customers. Forward-Deployed Engineers embed with customers to bridge the gap between the platform and real-world environments.
              </p>
              <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                This product-first → FDEs in the field → we become the AI-SOC approach means customers don't have to build and operate a SOC from scratch. They turn on Covenda as their AI-SOC, powered by the Covenda Technology System and Forward-Deployed Engineers.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Today, Covenda's AI-SOC continuously performs threat modeling, threat hunting, threat intelligence, threat monitoring, and threat assessment—all through the Covenda Technology System, integrated with customer tools, and tuned by FDEs who ensure the platform works in complex, regulated environments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
