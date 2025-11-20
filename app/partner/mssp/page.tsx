import Hero from '@/components/Hero';

export default function MSSPPartnerPage() {
  return (
    <div>
      <Hero
        variant="simple"
        badge="Partner Program"
        title="MSSP Partner Program"
        description="Enhance your managed security services with world-class threat intelligence."
        primaryCTA={{ text: 'Apply Now', href: '/contact' }}
      />
    </div>
  );
}
