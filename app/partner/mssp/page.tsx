import Hero from '@/components/Hero';

export default function MSSPPartnerPage() {
  return (
    <div>
      <Hero
        variant="simple"
        badge="Partner Program"
        title="MSSP Partner Program"
        description="Enhance your managed security services with Covenda AI-SOC,  and Forward-Deployed Engineers."
        primaryCTA={{ text: 'Apply Now', href: '/contact' }}
      />
    </div>
  );
}
