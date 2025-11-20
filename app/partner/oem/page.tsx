import Hero from '@/components/Hero';

export default function OEMPartnerPage() {
  return (
    <div>
      <Hero
        variant="simple"
        badge="Partner Program"
        title="OEM Partner Program"
        description="Embed Recorded Future intelligence directly into your products and solutions."
        primaryCTA={{ text: 'Apply Now', href: '/contact' }}
      />
    </div>
  );
}
