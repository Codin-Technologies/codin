'use client';

import { useState, FormEvent } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const contactInfo = [
  {
    icon: '📍',
    label: 'Location',
    value: 'Dar es Salaam, Tanzania',
    href: null,
  },
  {
    icon: '📧',
    label: 'Email',
    value: 'info@codintech.co.tz',
    href: 'mailto:info@codintech.co.tz',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+255 XX XXX XXXX',
    href: 'tel:+255XXXXXXXXX',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', company: '', message: '' });

    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-linear-to-br from-gray-50 to-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold text-indigo-600 mb-4">
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Let's Build Something
              <span className="block bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Extraordinary
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Connect with our team to explore how we can help accelerate your digital 
              transformation journey. We're ready to partner with you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you're looking to start a new project or have questions about our 
                services, we're here to help.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <Card key={info.label} hover={false} className="hover:translate-x-2 transition-transform">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                          {info.label}
                        </div>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-lg text-black hover:text-indigo-600 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-lg text-black">{info.value}</div>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Business Hours */}
              <Card hover={false} className="mt-6">
                <h3 className="font-bold mb-3">Business Hours</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>Monday - Friday: 8:00 AM - 6:00 PM EAT</div>
                  <div>Saturday: 9:00 AM - 2:00 PM EAT</div>
                  <div>Sunday: Closed</div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    Thank you for your message! Our team will get back to you within 24 hours.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 transition-all"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 transition-all resize-vertical"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    onClick={() => {}}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <span>→</span>}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

