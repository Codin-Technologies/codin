'use client';

import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';
import { useState } from 'react';

const solutions = [
  {
    category: 'Industry Solutions',
    subtitle: 'Specialized solutions designed to meet the unique demands of your industry',
    items: [
      {
        title: 'Agriculture',
        description:
          'Smart farming solutions and agricultural management systems for sustainable growth.',
        fullDescription:
          'Transform your agricultural operations with cutting-edge technology designed for modern farming and agribusiness. Our solutions leverage IoT, data analytics, and mobile technology to enhance productivity and sustainability.',
        features: [
          'Precision farming and crop monitoring systems',
          'IoT-enabled soil and weather analytics',
          'Supply chain management for agricultural products',
          'Farm management software with real-time insights',
          'Market price tracking and forecasting tools',
          'Mobile apps for farmer engagement and training',
        ],
      },
      {
        title: 'Transportation',
        description:
          'Intelligent logistics and fleet management solutions for efficient operations.',
        fullDescription:
          'Optimize your logistics and transportation operations with intelligent systems built for efficiency and reliability. From fleet tracking to route optimization, we help you reduce costs and improve service delivery.',
        features: [
          'Real-time fleet tracking and management',
          'Route optimization and fuel efficiency tools',
          'Driver behavior monitoring and safety systems',
          'Automated dispatch and scheduling',
          'Warehouse and inventory management integration',
          'Customer delivery tracking and notifications',
        ],
      },
      {
        title: 'Environment',
        description:
          'Environmental monitoring and sustainability solutions for a greener future.',
        fullDescription:
          'Monitor and protect our environment with advanced solutions for sustainability and compliance. Our platforms help organizations track, manage, and reduce their environmental impact while meeting regulatory requirements.',
        features: [
          'Air and water quality monitoring systems',
          'Carbon footprint tracking and reporting',
          'Waste management optimization tools',
          'Renewable energy management platforms',
          'Environmental compliance and reporting',
          'Climate impact assessment tools',
        ],
      },
      {
        title: 'Construction',
        description:
          'Project management and site monitoring solutions for construction excellence.',
        fullDescription:
          'Modernize your construction projects with digital tools that enhance productivity and ensure quality delivery. Our comprehensive solutions cover every aspect of construction management from planning to completion.',
        features: [
          'Project management and scheduling software',
          'Site monitoring with drone and IoT integration',
          'Building Information Modeling (BIM) integration',
          'Resource allocation and cost tracking',
          'Safety compliance and incident reporting',
          'Contractor and vendor management portals',
        ],
      },
      {
        title: 'Banking & Finance',
        description:
          'Secure, compliant financial technology solutions for modern banking operations.',
        fullDescription:
          'Secure, compliant financial technology solutions designed for modern banking operations and financial services. We help financial institutions modernize their infrastructure while maintaining the highest security standards.',
        features: [
          'Core banking system modernization',
          'Digital banking platforms and mobile apps',
          'Payment processing and gateway integration',
          'Fraud detection and prevention systems',
          'Regulatory compliance and reporting tools',
          'Customer relationship management for finance',
        ],
      },
      {
        title: 'Telecommunications',
        description:
          'Scalable infrastructure and customer engagement solutions for telecom providers.',
        fullDescription:
          'Scalable infrastructure and customer engagement solutions tailored for telecommunications providers. Our platforms help telecom companies enhance network performance and improve customer satisfaction.',
        features: [
          'Network management and optimization',
          'Customer service and billing platforms',
          'IoT connectivity management systems',
          '5G infrastructure readiness solutions',
          'Revenue assurance and analytics',
          'Self-service customer portals',
        ],
      },
      {
        title: 'Healthcare',
        description:
          'Patient management systems and health information systems that improve care delivery.',
        fullDescription:
          'Patient management systems and health information systems that improve care delivery and operational efficiency. We empower healthcare providers to deliver better patient outcomes through technology.',
        features: [
          'Electronic Health Records (EHR) systems',
          'Telemedicine and remote consultation platforms',
          'Hospital management and appointment systems',
          'Laboratory information management systems',
          'Patient portal and engagement tools',
          'Healthcare analytics and reporting',
        ],
      },
      {
        title: 'Government',
        description:
          'Digital government solutions for citizen services and administrative efficiency.',
        fullDescription:
          'Digital government solutions that enhance citizen services and improve administrative efficiency. Our platforms help government agencies modernize their operations and better serve their communities.',
        features: [
          'E-government service portals',
          'Citizen identity and document management',
          'Tax collection and revenue systems',
          'Public service delivery platforms',
          'Data analytics for policy making',
          'Inter-agency collaboration tools',
        ],
      },
    ],
  },
  {
    category: 'Technology Frameworks',
    subtitle: 'Proven methodologies and frameworks to accelerate your digital journey',
    items: [
      {
        title: 'Cloud Migration Framework',
        description:
          'Proven methodology for seamless cloud migration with minimal disruption.',
        fullDescription:
          'Our proven methodology ensures seamless cloud migration with minimal disruption to your business operations. We handle every aspect of your cloud journey from assessment to optimization.',
        features: [
          'Comprehensive cloud readiness assessment',
          'Multi-cloud and hybrid cloud strategies',
          'Data migration with zero data loss guarantee',
          'Application modernization and containerization',
          'Cost optimization and governance frameworks',
          '24/7 post-migration support and monitoring',
        ],
      },
      {
        title: 'Digital Transformation Playbook',
        description:
          'Step-by-step guide to modernizing operations and unlocking digital value.',
        fullDescription:
          'A step-by-step guide to modernizing your operations and unlocking digital value across your organization. Our playbook provides a clear roadmap for sustainable digital transformation.',
        features: [
          'Digital maturity assessment and roadmap',
          'Process automation and workflow optimization',
          'Data-driven decision making frameworks',
          'Customer experience transformation',
          'Employee digital skills development programs',
          'Change management and adoption strategies',
        ],
      },
      {
        title: 'Agile Development Framework',
        description:
          'Custom agile methodology tailored for African SME environments.',
        fullDescription:
          'Custom agile methodology specifically tailored for African SME environments and business realities. We help teams deliver value faster through proven agile practices.',
        features: [
          'Scrum and Kanban implementation guidance',
          'Sprint planning and backlog management tools',
          'Continuous integration and delivery pipelines',
          'Team collaboration and communication platforms',
          'Agile metrics and performance dashboards',
          'Training and coaching for agile teams',
        ],
      },
      {
        title: 'Security Compliance Kit',
        description:
          'Comprehensive security frameworks ensuring regulatory compliance.',
        fullDescription:
          'Comprehensive security frameworks that ensure regulatory compliance and protect your digital assets. Our security solutions provide peace of mind in an increasingly complex threat landscape.',
        features: [
          'ISO 27001 and industry compliance frameworks',
          'Security audit and vulnerability assessments',
          'Data protection and privacy compliance (GDPR, local regulations)',
          'Incident response and disaster recovery planning',
          'Security awareness training programs',
          'Continuous monitoring and threat detection',
        ],
      },
    ],
  },
];

function SolutionCard({ item }: { item: typeof solutions[0]['items'][0] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      className="cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-indigo-600 relative overflow-hidden group"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
        <span className="text-2xl text-indigo-600 transform transition-transform duration-300 group-hover:translate-x-1">
          {isExpanded ? '↓' : '→'}
        </span>
      </div>
      
      <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>

      {isExpanded && (
        <div className="mt-6 pt-6 border-t-2 border-gray-100 animate-slideDown">
          <p className="text-gray-700 leading-relaxed mb-6">
            {item.fullDescription}
          </p>
          
          <ul className="space-y-3 mb-6">
            {item.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-indigo-600 font-bold mr-3 mt-1">✓</span>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
            <Button
              href={`/solutions/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              Explore Solutions
            </Button>
            <Button
              href="/contact"
              variant="outline"
              className="flex-1"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
}

export default function SolutionsPage() {
  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-indigo-900">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
              Tailored Solutions for Your Industry
            </h1>
            <p className="text-xl text-indigo-100 leading-relaxed">
              At Codin Technologies, we understand that every industry has unique challenges and opportunities. Our proprietary platforms, frameworks, and industry-specific solutions are meticulously designed to address these distinct business needs while maintaining the flexibility and scalability required for sustainable growth. Whether you're looking to modernize legacy systems, optimize operations, or unlock new digital capabilities, our comprehensive suite of solutions provides the foundation for your digital transformation journey.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Sections */}
      {solutions.map((solution) => (
        <section key={solution.category} className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900">
              {solution.category}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              {solution.subtitle}
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {solution.items.map((item) => (
                <SolutionCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl border-2 border-gray-200 p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              We specialize in creating tailored solutions for unique business challenges. Let's discuss how we can help transform your business.
            </p>
            <Button
              href="/contact"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg px-12 py-4 hover:shadow-xl"
            >
              Discuss Your Needs
              <span className="ml-2">→</span>
            </Button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.4s ease;
        }
      `}</style>
    </div>
  );
}
