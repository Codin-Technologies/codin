import Link from 'next/link';
import { Navigation } from './Navigation';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-transparent transition-all duration-300 hover:border-gray-200 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-black tracking-tight hover:scale-105 transition-transform">
            Codin
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  );
}

