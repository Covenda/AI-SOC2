import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

export default function HealthcarePage() {
  return (
    <div>
      <Hero
        badge="Industry"
        title="Intelligence for Healthcare"
        description="Protect patient data, medical devices, and healthcare infrastructure from cyber threats and ransomware."
        primaryCTA={{ text: 'Book a Demo', href: '/get-started#book-demo' }}
      />

      <FeatureGrid
        title="Healthcare Security Solutions"
        features={[
          {
            icon: '🏥',
            title: 'Ransomware Defense',
            description: 'Protect against ransomware targeting healthcare organizations.',
          },
          {
            icon: '🔒',
            title: 'Patient Data Protection',
            description: 'Monitor for PHI exposure and data breaches.',
          },
          {
            icon: '⚕️',
            title: 'Medical Device Security',
            description: 'Identify vulnerabilities in medical devices and IoT.',
          },
          {
            icon: '📋',
            title: 'HIPAA Compliance',
            description: 'Support compliance with HIPAA and healthcare regulations.',
          },
        ]}
      />
    </div>
  );
}
