import Hero from '@/components/Hero';

export default function MDRPartnerPage() {
  return (
    <div>
      <Hero
        variant="simple"
        badge="Partner Program"
        title="MDR Partner Program"
        description="Power your managed detection and response services with actionable threat intelligence."
        primaryCTA={{ text: 'Apply Now', href: '/contact' }}
      />
    </div>
  );
}
