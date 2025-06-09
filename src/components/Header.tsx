'use client';

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Forside', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Om os', href: '/om-os' },
    { name: 'Referencer', href: '/referencer' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-slate-900/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-none mx-auto px-2 sm:px-4 lg:px-6 xl:px-2 2xl:px-4">
        <div className="flex justify-end items-center h-12 md:h-14 lg:h-16 xl:h-18 relative">

          {/* Desktop Navigation - Positioned absolutely to the right */}
          <nav className="hidden md:flex space-x-8 lg:space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-cyan-200 px-3 py-2 text-sm lg:text-base font-light transition-colors drop-shadow-md tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button - Only visible on mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-blue-300 p-2 drop-shadow-lg"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/60 backdrop-blur-sm border-t border-white/10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-cyan-200 block px-3 py-2 text-base font-light transition-colors drop-shadow-md tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;