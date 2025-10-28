import { Card } from '@/components/ui/Card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Codin Technologies',
  description:
    'Learn about Codin Technologies - our mission, vision, values, and commitment to making technology accessible for organizations of all sizes in Africa.',
};

const milestones = [
  {
    year: '2010',
    title: 'Founded',
    description:
      'Codin Technologies was born with a vision to democratize access to advanced technology solutions.',
  },
  {
    year: '2015',
    title: 'Expansion',
    description:
      'Expanded our services across Tanzania, helping SMEs embrace digital transformation.',
  },
  {
    year: '2020',
    title: 'Growth',
    description:
      'Reached 500+ successful projects, establishing ourselves as a trusted technology partner.',
  },
  {
    year: '2025',
    title: 'Today',
    description:
      'Leading innovation in East Africa, empowering businesses to thrive in the digital economy.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold text-indigo-600 mb-4">
              Our Story
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Born from Vision,{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Raised by Purpose
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Codin Technologies, we believe that every organization, regardless of size, 
              deserves access to world-class technology solutions. Based in Dar es Salaam, 
              Tanzania, we're bridging the technology gap across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-3xl mb-6">
                🎯
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                Making advanced technology accessible, adoptable, and implementable for 
                organizations of all sizes. We ensure no organization is left behind in 
                the digital transformation journey.
              </p>
            </Card>

            <Card>
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center text-3xl mb-6">
                👁️
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be the technology partner of choice across Africa and beyond, creating 
                new ways of working and realizing value within our communities. Building 
                a future where technology empowers everyone.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Journey</h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative pl-12 pb-12 border-l-2 border-gray-300 last:border-l-0">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-lg" />
                  <div className="text-sm font-bold text-indigo-600 mb-1">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center text-3xl mb-6 mx-auto">
              📍
            </div>
            <h2 className="text-2xl font-bold mb-4">Located in Dar es Salaam, Tanzania</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We're proud to call Tanzania home. Our local expertise combined with global 
              standards allows us to serve organizations across East Africa and beyond with 
              deep understanding of regional business needs.
            </p>
            <p className="text-sm text-gray-500">
              Contact us to learn more about how we can help transform your business.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}

