import Hero from '@/components/Hero';

export default function WhyRecordedFuturePage() {
  return (
    <div>
      <Hero
        badge="Why Choose Us"
        title="Why Covenda"
        description="Turn on your AI-SOC instead of building one from scratch. Covenda runs security operations as a product,  and Forward-Deployed Engineers."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">We Are Your AI-SOC</h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                Covenda doesn't help you build an AI-SOC. We are the AI-SOC you turn on. Our platform—the <strong>Covenda AI</strong>—delivers continuous threat operations: threat modeling, threat hunting, threat intelligence, threat monitoring, and threat assessment.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Instead of selling you a tool and hoping you configure it correctly, we run security operations as a product. Forward-Deployed Engineers embed with your team to wire the platform into your environment, accelerating time to value and ensuring the AI-SOC works in your specific context.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">Preemptive, Event-Agnostic Intelligence</h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                Covenda AI (including Lucid AI) models threats before incidents happen. It's event-agnostic and spec-driven, focusing on the gap between your security posture and actual systems.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                We prioritize based on business risk, not just CVSS scores or noisy alerts. This approach is especially powerful for AI/AGI systems and highly regulated industries where traditional reactive security falls short.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">Forward-Deployed Engineering Model</h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                Our Forward-Deployed Engineers are product engineers who embed with customers. They bridge the gap between the Covenda AI and your messy, real-world environment.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                FDEs accelerate value delivery by wiring detections, automations, and workflows that matter immediately. They build custom solutions as needed, then feed those patterns back into the core product so they become reusable. This YC-style approach means we "do things that don't scale" early to discover product–market fit, then scale what works.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Unlike traditional SaaS vendors who build generic products and force everyone into them, our FDE model ensures the AI-SOC adapts to your reality, not the other way around.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">Product-First Path</h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                Covenda started by building a serious product—the Covenda AI—that SOC teams could use. Rather than just selling another security tool and waiting for adoption, we flipped the model: we became the AI-SOC provider.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                The product is used internally to run security operations for customers. FDEs act as the nervous system between customer reality and the product. This product-first → FDEs in the field → we become the AI-SOC approach ensures you get outcomes, not just software.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
