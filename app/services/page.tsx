import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Codin Technologies',
  description:
    'Comprehensive IT consulting, software development, digital transformation, and cloud solutions for organizations of all sizes.',
};

const services = [
  {
    icon: '💼',
    title: 'IT Consulting',
    description:
      'Strategic technology consulting to help you make informed decisions and align IT investments with business goals.',
    features: [
      'Technology strategy & planning',
      'Digital readiness assessment',
      'IT infrastructure optimization',
      'Vendor evaluation & selection',
    ],
  },
  {
    icon: '🚀',
    title: 'Software Development',
    description:
      'Custom software solutions built with modern technologies and best practices, tailored to your unique requirements.',
    features: [
      'Custom web applications',
      'Mobile app development',
      'API development & integration',
      'Legacy system modernization',
    ],
  },
  {
    icon: '⚙️',
    title: 'Digital Transformation',
    description:
      'End-to-end transformation services to modernize your operations and unlock new digital capabilities.',
    features: [
      'Process automation',
      'Workflow digitization',
      'AI & machine learning integration',
      'Change management',
    ],
  },
  {
    icon: '🔒',
    title: 'Cybersecurity',
    description:
      'Comprehensive security services to protect your critical assets and ensure regulatory compliance.',
    features: [
      'Security assessments',
      'Penetration testing',
      'Compliance consulting',
      'Incident response planning',
    ],
  },
  {
    icon: '☁️',
    title: 'Cloud Solutions',
    description:
      'Cloud migration, optimization, and managed services for scalable, secure, and cost-effective infrastructure.',
    features: [
      'Cloud migration & strategy',
      'Infrastructure as a Service',
      'Platform optimization',
      '24/7 managed services',
    ],
  },
  {
    icon: '📊',
    title: 'Data & Analytics',
    description:
      'Transform data into actionable insights with advanced analytics and AI-powered business intelligence.',
    features: [
      'Data warehouse design',
      'Business intelligence dashboards',
      'Predictive analytics',
      'AI-powered insights',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-linear-to-br from-gray-50 to-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold text-indigo-600 mb-4">
              Our Services
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Comprehensive Technology
              <span className="block bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              From strategy to execution, we deliver end-to-end services that accelerate 
              digital transformation and drive sustainable growth for your organization.
            </p>
            <Button href="/contact" variant="primary">
              Get Started
              <span>→</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="group">
                <div className="w-16 h-16 bg-linear-to-br from-indigo-600/30 to-purple-600/30 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-sm text-gray-900">Key Features:</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="text-indigo-600 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our services can help transform your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary">
              Contact Us
            </Button>
            <Button href="/solutions" variant="secondary">
              View Solutions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

