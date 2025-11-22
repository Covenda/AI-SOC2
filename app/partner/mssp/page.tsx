import Hero from '@/components/Hero';

export default function MSSPPartnerPage() {
  return (
    <div>
      <Hero
        variant="simple"
        badge="Partner Program"
        title="MSSP Partner Program"
        description="Enhance your managed security services with Covenda's AI-SOC, powered by the Covenda Technology System and Forward-Deployed Engineers."
        primaryCTA={{ text: 'Apply Now', href: '/contact' }}
      />
    </div>
  );
}
