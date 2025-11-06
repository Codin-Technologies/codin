"use client";
import { useState } from 'react';
import { Card } from '@/components/ui/Card';

const testimonials = [
  {
    name: 'Sarah Newman',
    role: 'Envato market',
    quote:
      'This creative agency stands out with their exceptional talent and expertise. Their ability to think outside the box and bring unique ideas to life is truly impressive. With meticulous attention to detail, they consistently deliver visually stunning and impactful work.',
  },
  {
    name: 'Emma Trueman',
    role: 'Envato market',
    quote:
      "I had the pleasure of working with this creative agency, and I must say, they truly impressed me. They consistently think outside the box, resulting in impressive and impactful work. I highly recommend this agency for their consistent delivery of exceptional creative solutions.",
  },
  {
    name: 'Sarah Newman',
    role: 'Envato market',
    quote:
      'This creative agency stands out with their exceptional talent and expertise. Their ability to think outside the box and bring unique ideas to life is truly impressive. With meticulous attention to detail, they consistently deliver visually stunning and impactful work.',
  },
  {
    name: 'Emma Trueman',
    role: 'Envato market',
    quote:
      "I had the pleasure of working with this creative agency, and I must say, they truly impressed me. They consistently think outside the box, resulting in impressive and impactful work. I highly recommend this agency for their consistent delivery of exceptional creative solutions.",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Customer Voices:
            <span className="block bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Hear What They Say!</span>
          </h2>
        </div>

        {/* Avatars row (initials as placeholders) */}
        <div className="flex items-center justify-center gap-6 mb-10">
          {testimonials.map((item, idx) => {
            const active = idx === current;
            return (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-16 h-16 rounded-full flex items-center justify-center text-lg font-semibold bg-gray-100 text-gray-700 transition-all ${
                  active ? 'ring-4 ring-amber-400' : 'opacity-70 hover:opacity-100'
                }`}
                aria-label={`Show testimonial from ${item.name}`}
              >
                {item.name.split(' ').map(p => p[0]).join('').slice(0,2)}
              </button>
            );
          })}
        </div>

        {/* Quote card */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-amber-500 text-3xl mb-4">“”</div>
          <div className="text-xl font-semibold mb-1">{t.name}</div>
          <div className="text-xs tracking-widest text-gray-500 mb-6">{t.role.toUpperCase()}</div>
          <p className="text-gray-700 leading-relaxed text-lg">{t.quote}</p>

          <div className="flex items-center justify-between mt-8">
            <button onClick={prev} className="px-3 py-2 rounded-full bg-gray-100 hover:bg-gray-200" aria-label="Previous">←</button>
            <button onClick={next} className="px-3 py-2 rounded-full bg-gray-100 hover:bg-gray-200" aria-label="Next">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
