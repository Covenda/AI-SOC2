import Hero from '@/components/Hero';

export default function BrowserExtensionPage() {
  return (
    <div>
      <Hero
        variant="simple"
        badge="Browser Extension"
        title="Threat Intelligence at Your Fingertips"
        description="Access the Covenda AI's threat intelligence directly in your browser. Get instant context on IPs, domains, URLs, and indicators while you work."
        primaryCTA={{ text: 'Download Extension', href: '/get-started' }}
      />

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-8 text-center">
              Features
            </h2>
            <div className="space-y-6">
              {[
                'Real-time IOC lookup and enrichment from the Covenda AI',
                'One-click threat intelligence for IPs, domains, URLs, and indicators',
                'Instant risk scoring and context based on preemptive threat modeling',
                'Seamless integration with your workflow—get intelligence without leaving your browser',
              ].map((feature, index) => (
                <div key={index} className="flex items-start bg-white p-6 rounded-xl">
                  <svg
                    className="w-6 h-6 text-brand-cyan mr-4 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-lg text-neutral-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
