'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/contact', label: 'Contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium transition-colors relative ${
              pathname === link.href
                ? 'text-black'
                : 'text-gray-600 hover:text-black'
            }`}
          >
            {link.label}
            {pathname === link.href && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-600" />
            )}
          </Link>
        ))}
        <Link
          href="/contact"
          className="px-6 py-2.5 bg-black text-white rounded-lg text-sm font-semibold hover:bg-indigo-600 transition-all hover:-translate-y-0.5 hover:shadow-lg"
        >
          Get Started
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-gray-700 hover:text-black transition-colors"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white border-b border-gray-200 md:hidden">
          <nav className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  pathname === link.href
                    ? 'bg-gray-100 text-black'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-black text-white rounded-lg text-center font-semibold hover:bg-indigo-600 transition-colors"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}

