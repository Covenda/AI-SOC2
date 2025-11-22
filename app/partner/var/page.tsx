import Hero from '@/components/Hero';

export default function VARPartnerPage() {
  return (
    <div>
      <Hero
        variant="simple"
        badge="Partner Program"
        title="Channel Partner (VAR) Program"
        description="Become a Covenda reseller and help organizations turn on AI-SOC operations ."
        primaryCTA={{ text: 'Apply Now', href: '/contact' }}
      />
    </div>
  );
}
