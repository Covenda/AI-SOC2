import Hero from '@/components/Hero';

export default function VARPartnerPage() {
  return (
    <div>
      <Hero
        variant="simple"
        badge="Partner Program"
        title="Channel Partner (VAR) Program"
        description="Become a Recorded Future reseller and help organizations protect against cyber threats."
        primaryCTA={{ text: 'Apply Now', href: '/contact' }}
      />
    </div>
  );
}
