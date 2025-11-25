'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyEmail: '',
    companyName: '',
    country: '',
    inquiryType: '',
    message: '',
    isMSSP: false,
    marketing: false,
    privacy: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const locations = [
    {
      city: 'Fort Lauderdale',
      country: 'United States',
    },
    {
      city: 'Dallas',
      country: 'United States',
    },
    {
      city: 'Atlanta',
      country: 'United States',
    },
    {
      city: 'London',
      country: 'United Kingdom',
    },
  ];

  return (
    <div className="bg-white">
      {/* Contact Information Section */}
      <section className="py-16 border-b border-neutral-200">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
              <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
                Contact information
              </h1>
                        <p className="text-lg text-neutral-700 leading-relaxed">
                With global offices around the world, we're here to support you where it matters most.
                        </p>
                      </div>
            <div className="hidden lg:block">
              {/* Decorative graphic placeholder */}
              <div className="w-full h-64 bg-neutral-100 rounded-lg flex items-center justify-center">
                <div className="text-neutral-400 text-sm">Illustration</div>
                      </div>
                      </div>
                    </div>
                  </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Get in touch */}
                  <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                Get in touch
              </h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                Questions about our products, intelligence, or research? Reach out to our team to schedule a meeting and we'll get back to you as soon as possible.
              </p>
              <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                Note that we don't accept job applications from this form. Please visit our{' '}
                <Link href="/careers" className="text-brand-orange hover:underline">
                  Careers page
                </Link>{' '}
                to learn about job opportunities with Covenda.
                    </p>
                  </div>

            {/* Right Side - Contact Form */}
                  <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-brand-navy mb-2">
                      * First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all"
                    />
                  </div>
              <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-brand-navy mb-2">
                      * Last Name
                      </label>
                      <input
                        type="text"
                      id="lastName"
                      name="lastName"
                        required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all"
                      />
                    </div>
                </div>

                    <div>
                  <label htmlFor="companyEmail" className="block text-sm font-medium text-brand-navy mb-2">
                    * Company Email
                      </label>
                      <input
                        type="email"
                    id="companyEmail"
                    name="companyEmail"
                        required
                    value={formData.companyEmail}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all"
                      />
                    </div>

                    <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-brand-navy mb-2">
                    * Company Name
                      </label>
                      <input
                        type="text"
                    id="companyName"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all"
                      />
                    </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-brand-navy mb-2">
                    * Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all bg-white"
                  >
                    <option value="">Select...</option>
                    <option value="US">United States</option>
                    <option value="GB">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="AU">Australia</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                    <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-brand-navy mb-2">
                    * Inquiry Type
                      </label>
                      <select
                    id="inquiryType"
                    name="inquiryType"
                        required
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all bg-white"
                      >
                    <option value="">Select...</option>
                        <option value="demo">Request a Demo</option>
                        <option value="sales">Sales Inquiry</option>
                    <option value="support">Product Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="research">Research Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-navy mb-2">
                    What can we help you with?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all resize-none"
                      />
                    </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="isMSSP"
                      name="isMSSP"
                      checked={formData.isMSSP}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 text-brand-orange border-neutral-300 rounded focus:ring-brand-orange"
                    />
                    <label htmlFor="isMSSP" className="ml-3 text-sm text-neutral-700">
                      Are you a managed security service provider?
                    </label>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="marketing"
                      name="marketing"
                      checked={formData.marketing}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 text-brand-orange border-neutral-300 rounded focus:ring-brand-orange"
                    />
                    <label htmlFor="marketing" className="ml-3 text-sm text-neutral-700">
                      I agree to receive other marketing communications from Covenda.
                    </label>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      required
                      checked={formData.privacy}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 text-brand-orange border-neutral-300 rounded focus:ring-brand-orange"
                    />
                    <label htmlFor="privacy" className="ml-3 text-sm text-neutral-700">
                      * I agree to allow Covenda to store and process my personal data.
                    </label>
                  </div>
                </div>

                <p className="text-sm text-neutral-600 leading-relaxed">
                  Covenda uses the information you provide in this form to contact you about our products and services. You may unsubscribe from these communications at any time. For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, please review our{' '}
                      <Link href="/legal/privacy-policy/4-0" className="text-brand-orange hover:underline">
                        Privacy Policy
                      </Link>
                      .
                    </p>

                <div>
                  <p className="text-sm text-neutral-700 mb-4">
                    Looking for product support? To get the fastest response, please log in to our support portal.
                  </p>
                  <button
                    type="submit"
                    className="btn btn-primary w-full"
                  >
                    Contact Us
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Our Locations Section */}
      <section className="py-16 bg-neutral-50 border-t border-neutral-200">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-12">
            Our locations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-brand-navy mb-2">
                    {location.city}
                  </h3>
                  <p className="text-sm text-neutral-700 mb-3 leading-relaxed">
                    {location.country}
                  </p>
                  <Link
                    href={`https://maps.google.com/?q=${encodeURIComponent(location.city + ', ' + location.country)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-brand-orange hover:underline inline-flex items-center"
                  >
                    Get directions →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
