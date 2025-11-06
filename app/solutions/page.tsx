import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions | Codin Technologies',
  description:
    'Industry-specific technology solutions, frameworks, and platforms to address your unique business challenges.',
};

const solutions = [
  {
    category: 'Industry Solutions',
    items: [
      {
        title: 'Banking & Finance',
        description:
          'Secure, compliant financial technology solutions for modern banking operations.',
        icon: '🏦',
      },
      {
        title: 'Telecommunications',
        description:
          'Scalable infrastructure and customer engagement solutions for telecom providers.',
        icon: '📱',
      },
      {
        title: 'Healthcare',
        description:
          'Patient management systems and health information systems that improve care delivery.',
        icon: '🏥',
      },
      {
        title: 'Government',
        description:
          'Digital government solutions for citizen services and administrative efficiency.',
        icon: '🏛️',
      },
    ],
  },
  {
    category: 'Technology Frameworks',
    items: [
      {
        title: 'Cloud Migration Framework',
        description:
          'Proven methodology for seamless cloud migration with minimal disruption.',
        icon: '☁️',
      },
      {
        title: 'Digital Transformation Playbook',
        description:
          'Step-by-step guide to modernizing operations and unlocking digital value.',
        icon: '📖',
      },
      {
        title: 'Agile Development Framework',
        description:
          'Custom agile methodology tailored for African SME environments.',
        icon: '🔄',
      },
      {
        title: 'Security Compliance Kit',
        description:
          'Comprehensive security frameworks ensuring regulatory compliance.',
        icon: '🛡️',
      },
    ],
  },
];

// Removed Proprietary Platforms section per request

export default function SolutionsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-linear-to-br from-gray-50 to-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold text-indigo-600 mb-4">
              Our Solutions
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Tailored Solutions for
              <span className="block bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Your Industry
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our proprietary platforms, frameworks, and industry-specific solutions 
              address unique business challenges while maintaining flexibility and scalability.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      {solutions.map((solution) => (
        <section key={solution.category} className="py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              {solution.category}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solution.items.map((item) => (
                <Card key={item.title}>
                  <div className="w-16 h-16 bg-linear-to-br from-indigo-600/30 to-purple-600/30 rounded-xl flex items-center justify-center text-3xl mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We specialize in creating tailored solutions for unique business challenges.
          </p>
          <Button href="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
            Discuss Your Needs
            <span>→</span>
          </Button>
        </div>
      </section>
    </div>
  );
}

