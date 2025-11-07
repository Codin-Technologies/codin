"use client";

import { Lightbulb, Zap, Users, Briefcase, Heart, Globe } from 'lucide-react';

export default function OurValues() {
  const values = [
    {
      Icon: Lightbulb,
      title: 'Innovation',
      description:
        "We combine creativity and technical expertise to build new solutions that solve real problems. (Creativity merged into Innovation)",
    },
    {
      Icon: Users,
      title: 'TeamWork',
      description:
        'We collaborate across disciplines and support one another to deliver greater results than we could alone.',
    },
    {
      Icon: Briefcase,
      title: 'Professionalism',
      description:
        'We act with integrity, deliver on our promises, and maintain high standards in everything we do.',
    },
    {
      Icon: Heart,
      title: 'Commitment',
      description:
        "We're dedicated to our clients' success and to long-term partnerships that drive impact.",
    },
    {
      Icon: Globe,
      title: 'Sustainability',
      description:
        'We design and deliver solutions that are environmentally and socially responsible for long-term value.',
    },
    {
      Icon: Zap,
      title: 'Success',
      description:
        'We measure success by the tangible outcomes and growth we help our clients achieve.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Our Values</h2>
          <p className="text-gray-600 leading-relaxed">
            The principles that guide our decisions and shape the way we work. These
            values reflect what we stand for and how we deliver value to our clients
            and communities.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map(({ Icon, title, description }) => (
            <div key={title} className="flex items-start gap-4 p-4 rounded-lg border border-gray-100">
              <div className="shrink-0 w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-gray-600 mt-1">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
