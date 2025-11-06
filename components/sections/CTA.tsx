'use client';

import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/Button';

export function CTA() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your interest! We\'ll be in touch soon.');
    setEmail('');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Ready to transform your business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Join hundreds of organizations across Tanzania who trust Codin 
            Technologies to deliver innovative solutions.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 transition-all"
                required
              />
              <Button type="submit" variant="primary" className="w-full sm:w-auto">
                Get Started
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

