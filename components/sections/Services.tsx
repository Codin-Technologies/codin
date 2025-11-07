import { Card } from '@/components/ui/Card';

const services = [
  {
    icon: '💼',
    title: 'IT Consulting',
    description:
      'Strategic consulting and expert guidance to align technology investments with business objectives. Helping you make informed decisions.',
    href: '/services',
  },
  {
    icon: '🚀',
    title: 'Software Development',
    description:
      'Custom software solutions built with modern frameworks and best practices. Tailored to your unique business needs.',
    href: '/services',
  },
  {
    icon: '⚙️',
    title: 'Digital Transformation',
    description:
      'End-to-end transformation services leveraging cloud, AI, and automation technologies to modernize your operations.',
    href: '/services',
  },
  {
    icon: '🔒',
    title: 'Cybersecurity',
    description:
      'Comprehensive security services to protect your critical assets and ensure compliance with industry standards.',
    href: '/services',
  },
  {
    icon: '☁️',
    title: 'Cloud Solutions',
    description:
      'Cloud migration, optimization, and managed services for scalable, secure, and cost-effective infrastructure.',
    href: '/services',
  },
  {
    icon: '📊',
    title: 'Data & Analytics',
    description:
      'Transform data into actionable insights with advanced analytics and AI-powered solutions for better decision-making.',
    href: '/services',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold text-indigo-600 mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Comprehensive technology solutions for modern challenges
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            From strategy to execution, we deliver end-to-end services that 
            accelerate digital transformation and drive sustainable growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="relative overflow-hidden group">
              {/* Gradient Top Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />
              
              {/* Icon */}
              <div className="w-16 h-16 bg-linear-to-br from-indigo-600/30 to-purple-600/30 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Link */}
              <a
                href={service.href}
                className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm group-hover:gap-4 transition-all"
              >
                Learn more
                <span>→</span>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

