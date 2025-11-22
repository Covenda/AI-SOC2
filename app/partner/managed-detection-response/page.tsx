import Hero from '@/components/Hero';

export default function MDRPartnerPage() {
  return (
    <div>
      <Hero
        variant="simple"
        badge="Partner Program"
        title="MDR Partner Program"
        description="Power your managed detection and response services with Covenda AI-SOC, powered by the Covenda Technology System and Forward-Deployed Engineers."
        primaryCTA={{ text: 'Apply Now', href: '/contact' }}
      />
    </div>
  );
}
