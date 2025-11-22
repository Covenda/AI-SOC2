import Hero from '@/components/Hero';

export default function TechPartnerPage() {
  return (
    <div>
      <Hero
        variant="simple"
        badge="Partner Program"
        title="Technology Partner Program"
        description="Integrate the Covenda Technology System capabilities into your security products and platforms."
        primaryCTA={{ text: 'Apply Now', href: '/contact' }}
      />
    </div>
  );
}
