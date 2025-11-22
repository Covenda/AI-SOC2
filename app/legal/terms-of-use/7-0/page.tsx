import Hero from '@/components/Hero';

export default function TermsOfUsePage() {
  return (
    <div>
      <Hero
        variant="simple"
        title="Terms of Use"
        description="Terms and conditions for using Covenda AI services."
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-600 mb-8">
                <strong>Last updated:</strong> January 2025
              </p>

              <h2 className="text-3xl font-bold text-brand-navy mt-12 mb-6">1. Acceptance of Terms</h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                By accessing and using Covenda AI's services, website, platform, and related services (collectively, the "Services"), you accept and agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, you may not use our Services.
              </p>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                These Terms constitute a legally binding agreement between you ("we," "our," or "us"). If you are using the Services on behalf of an organization, you represent that you have authority to bind that organization to these Terms.
              </p>

              <h2 className="text-3xl font-bold text-brand-navy mt-12 mb-6">2. Description of Services</h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                Covenda AI provides AI-SOC (Security Operations Center) services, including Forward-Deployed Security Engineers, threat intelligence, detection engineering, automated response, and co-managed security operations. Our Services are designed to help organizations build and operate effective security capabilities.
              </p>

              <h2 className="text-3xl font-bold text-brand-navy mt-12 mb-6">3. Use of Services</h2>
              
              <h3 className="text-2xl font-bold text-brand-navy mt-8 mb-4">3.1 Permitted Use</h3>
              <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                You agree to use our Services only for lawful purposes and in accordance with these Terms. You may use the Services to:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-neutral-700">
                <li>Build and operate your organization's security operations</li>
                <li>Access threat intelligence and security insights</li>
                <li>Collaborate with our Forward-Deployed Security Engineers</li>
                <li>Automate security workflows and responses</li>
              </ul>

              <h3 className="text-2xl font-bold text-brand-navy mt-8 mb-4">3.2 Prohibited Uses</h3>
              <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-neutral-700">
                <li>Use the Services for any illegal or unauthorized purpose</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Interfere with or disrupt the Services or servers</li>
                <li>Reverse engineer, decompile, or disassemble any part of the Services</li>
                <li>Use the Services to transmit malware, viruses, or harmful code</li>
                <li>Resell or redistribute the Services without our written consent</li>
              </ul>

              <h2 className="text-3xl font-bold text-brand-navy mt-12 mb-6">4. Account Registration</h2>
              <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                To access certain features of our Services, you may be required to register for an account. You agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-neutral-700">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your account information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized access</li>
              </ul>

              <h2 className="text-3xl font-bold text-brand-navy mt-12 mb-6">5. Intellectual Property Rights</h2>
              <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                The Services, including all content, features, functionality, and technology, are owned by Covenda AI and are protected by copyright, trademark, patent, and other intellectual property laws.
              </p>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                You are granted a limited, non-exclusive, non-transferable license to access and use the Services for your internal business purposes in accordance with these Terms. This license does not include any right to resell or commercially exploit the Services.
              </p>

              <h2 className="text-3xl font-bold text-brand-navy mt-12 mb-6">6. Payment Terms</h2>
              <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                If you purchase Services from us, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-neutral-700">
                <li>Pay all fees as specified in your service agreement</li>
                <li>Provide accurate billing and payment information</li>
                <li>Authorize us to charge your payment method for all fees</li>
                <li>Pay all applicable taxes</li>
              </ul>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                Fees are non-refundable except as required by law or as specified in your service agreement.
              </p>

              <h2 className="text-3xl font-bold text-brand-navy mt-12 mb-6">7. Confidentiality</h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                Both parties agree to maintain the confidentiality of any proprietary or confidential information disclosed during the course of using the Services. This obligation survives termination of these Terms.
              </p>

              <h2 className="text-3xl font-bold text-brand-navy mt-12 mb-6">8. Warranties and Disclaimers</h2>
              <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                We do not warrant that the Services will be uninterrupted, error-free, or completely secure. You acknowledge that security threats are constantly evolving and that no security solution can guarantee complete protection.
              </p>

              <h2 className="text-3xl font-bold text-brand-navy mt-12 mb-6">9. Limitation of Liability</h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, COVENDA AI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM YOUR USE OF THE SERVICES.
              </p>

              <h2 className="text-3xl font-bold text-brand-navy mt-12 mb-6">10. Indemnification</h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Covenda AI and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or relating to your use of the Services, violation of these Terms, or infringement of any rights of another.
              </p>

              <h2 className="text-3xl font-bold text-brand-navy mt-12 mb-6">11. Termination</h2>
              <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                We may terminate or suspend your access to the Services at any time, with or without cause or notice, for any reason, including if you breach these Terms.
              </p>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                Upon termination, your right to use the Services will immediately cease. All provisions of these Terms that by their nature should survive termination shall survive termination.
              </p>

              <h2 className="text-3xl font-bold text-brand-navy mt-12 mb-6">12. Governing Law and Dispute Resolution</h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions. Any disputes arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>

              <h2 className="text-3xl font-bold text-brand-navy mt-12 mb-6">13. Changes to Terms</h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the updated Terms on our website and updating the "Last updated" date. Your continued use of the Services after such changes constitutes acceptance of the modified Terms.
              </p>

              <h2 className="text-3xl font-bold text-brand-navy mt-12 mb-6">14. Contact Information</h2>
              <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                If you have any questions about these Terms, please contact us at:
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
