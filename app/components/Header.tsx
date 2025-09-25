'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from './Sidebar';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // niente stato menu: usiamo il componente Sidebar

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className={`flex-shrink-0`}>
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/logo-hra.png"
                  alt="Hratech logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-lg object-contain"
                  priority
                />
                                 <span className="text-xl font-bold text-blue-900 transition-colors duration-300">
                   HraTech
                 </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
                             <Link 
                 href="/" 
                 className="px-3 py-2 text-sm font-medium text-blue-900 hover:text-blue-600 transition-colors duration-300"
               >
                 Home
               </Link>
               <Link 
                 href="/servizi" 
                 className="px-3 py-2 text-sm font-medium text-blue-900 hover:text-blue-600 transition-colors duration-300"
               >
                 Servizi
               </Link>
               <Link 
                 href="/portfolio" 
                 className="px-3 py-2 text-sm font-medium text-blue-900 hover:text-blue-600 transition-colors duration-300"
               >
                 Portfolio
               </Link>
               <Link 
                 href="/chi-siamo" 
                 className="px-3 py-2 text-sm font-medium text-blue-900 hover:text-blue-600 transition-colors duration-300"
               >
                 Chi Siamo
               </Link>
               <Link 
                 href="/contatti" 
                 className="px-3 py-2 text-sm font-medium text-blue-900 hover:text-blue-600 transition-colors duration-300"
               >
                 Contatti
               </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                href="/contatti"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Inizia Progetto
              </Link>
            </div>

            {/* Mobile Sidebar trigger */}
            <div className="md:hidden">
              <Sidebar />
            </div>
          </div>
        </div>
      </header>

    </>
  );
}
