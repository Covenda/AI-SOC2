import Hero from '@/components/Hero';

export default function PrivacyPolicyPage() {
  return (
    <div>
      <Hero
        variant="simple"
        title="Privacy Policy"
        description="How we collect, use, and protect your information."
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-600 mb-8">
                <strong>Last updated:</strong> January 2025
              </p>

              <h2 className="text-3xl font-bold text-brand-navy mt-12 mb-6">1. Introduction</h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                Covenda AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-SOC services, including our website, platform, and related services (collectively, the "Services").
              </p>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                By using our Services, you agree to the collection and use of information in accordance with this Privacy Policy.
              </p>

              <h2 className="text-3xl font-bold text-brand-navy mt-12 mb-6">2. Information We Collect</h2>
              
              <h3 className="text-2xl font-bold text-brand-navy mt-8 mb-4">2.1 Information You Provide</h3>
              <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-neutral-700">
                <li>Name, email address, phone number, and company information</li>
                <li>Account credentials and profile information</li>
                <li>Payment and billing information</li>
                <li>Communications with us, including support requests and feedback</li>
                <li>Information you provide when requesting a demo or contacting us</li>
              </ul>

              <h3 className="text-2xl font-bold text-brand-navy mt-8 mb-4">2.2 Information We Collect Automatically</h3>
              <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                When you use our Services, we automatically collect certain information, including:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-neutral-700">
                <li>Device information, such as IP address, browser type, and operating system</li>
                <li>Usage data, including pages visited, features used, and time spent on our Services</li>
                <li>Log files and analytics data</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h3 className="text-2xl font-bold text-brand-navy mt-8 mb-4">2.3 Information from Third Parties</h3>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                We may receive information about you from third-party sources, such as business partners, service providers, and publicly available sources.
              </p>

              <h2 className="text-3xl font-bold text-brand-navy mt-12 mb-6">3. How We Use Your Information</h2>
              <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-neutral-700">
                <li>Provide, maintain, and improve our Services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, prevent, and address technical issues and security threats</li>
                <li>Comply with legal obligations and enforce our agreements</li>
              </ul>

              <h2 className="text-3xl font-bold text-brand-navy mt-12 mb-6">4. Information Sharing and Disclosure</h2>
              <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-neutral-700">
                <li><strong>Service Providers:</strong> With third-party service providers who perform services on our behalf</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition of assets</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li><strong>With Your Consent:</strong> When you have given us explicit consent to share your information</li>
              </ul>

              <h2 className="text-3xl font-bold text-brand-navy mt-12 mb-6">5. Data Security</h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>

              <h2 className="text-3xl font-bold text-brand-navy mt-12 mb-6">6. Your Rights and Choices</h2>
              <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-neutral-700">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your information</li>
                <li>Objection to processing of your information</li>
                <li>Data portability</li>
                <li>Withdrawal of consent</li>
              </ul>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                To exercise these rights, please contact us at <a href="mailto:support@covenda.ai" className="text-brand-orange hover:underline">support@covenda.ai</a>.
              </p>

              <h2 className="text-3xl font-bold text-brand-navy mt-12 mb-6">7. Cookies and Tracking Technologies</h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                We use cookies and similar tracking technologies to collect and use information about you. You can control cookies through your browser settings, but this may affect the functionality of our Services.
              </p>

              <h2 className="text-3xl font-bold text-brand-navy mt-12 mb-6">8. International Data Transfers</h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
              </p>

              <h2 className="text-3xl font-bold text-brand-navy mt-12 mb-6">9. Children's Privacy</h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                Our Services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
              </p>

              <h2 className="text-3xl font-bold text-brand-navy mt-12 mb-6">10. Changes to This Privacy Policy</h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-3xl font-bold text-brand-navy mt-12 mb-6">11. Contact Us</h2>
              <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-neutral-50 rounded-lg p-6 mb-6">
                <p className="text-lg text-neutral-700 mb-2">
                  <strong>Covenda AI</strong>
                </p>
                <p className="text-lg text-neutral-700 mb-2">
                  167-169 Great Portland Street, 5th Floor<br />
                  London, England, W1W 5PF
                </p>
                <p className="text-lg text-neutral-700 mb-2">
                  Email: <a href="mailto:support@covenda.ai" className="text-brand-orange hover:underline">support@covenda.ai</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
