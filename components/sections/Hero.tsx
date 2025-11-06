import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-linear-to-br from-gray-50 to-white relative overflow-hidden pt-20">
      {/* Animated Background Gradient */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-linear-to-br from-indigo-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full mb-8 shadow-sm">
            <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-indigo-600">
              Leading Innovation in Tanzania
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
            Transform your business with{' '}
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              intelligent technology
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
            Making advanced technology accessible, adoptable, and implementable for 
            organizations of all sizes. We empower SMEs across Africa to thrive in the 
            digital economy.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button href="/services" variant="primary">
              Explore Services
              <span>→</span>
            </Button>
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

