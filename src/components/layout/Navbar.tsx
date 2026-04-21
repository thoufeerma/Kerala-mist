'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getWhatsAppLink } from '@/lib/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Packages', href: '/packages' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'bg-slate-900/90 backdrop-blur-xl py-3 shadow-xl border-b border-white/5'
          : 'bg-transparent py-5'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <Leaf className="w-8 h-8 text-brand-500 transition-transform group-hover:scale-110" />
          <span className="font-bold text-xl tracking-tight text-white">
            Kerala Mist
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors relative',
                isActive(link.href)
                  ? 'text-brand-400'
                  : 'text-slate-200 hover:text-brand-400'
              )}
            >
              {link.name}
              {isActive(link.href) && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-400 rounded-full"
                />
              )}
            </Link>
          ))}
          <motion.a
            href={getWhatsAppLink("Hi! I'd like to plan a Kerala trip.")}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-whatsapp text-white hover:bg-whatsapp-dark transition-all shadow-md hover:shadow-xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4">
              <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.31 22.594c-.39 1.1-1.932 2.014-3.168 2.282-.846.18-1.95.324-5.67-1.218-4.762-1.972-7.828-6.804-8.066-7.118-.228-.314-1.918-2.554-1.918-4.872s1.214-3.456 1.646-3.928c.39-.428.91-.604 1.214-.604.15 0 .284.008.406.014.432.018.648.044.934.724.358.85 1.228 2.998 1.336 3.216.108.216.216.504.072.804-.134.306-.252.442-.468.696-.216.252-.422.446-.638.72-.198.234-.42.486-.178.934.242.448 1.078 1.778 2.314 2.88 1.588 1.416 2.928 1.856 3.342 2.058.414.204.654.172.896-.1.248-.282 1.058-1.228 1.342-1.648.276-.42.56-.35.942-.21.386.136 2.444 1.152 2.862 1.362.42.21.698.314.8.49.1.172.1 1.01-.29 2.118z" />
            </svg>
            WhatsApp
          </motion.a>
        </nav>

        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6 text-white" />
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-50 bg-slate-950 flex flex-col pt-24 px-8 pb-8"
          >
            <button
              className="absolute top-6 right-6 p-2 text-white"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'text-2xl font-semibold transition-colors py-1',
                    isActive(link.href) ? 'text-brand-400' : 'text-white'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={getWhatsAppLink("Hi! I'd like to plan a Kerala trip.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-3 bg-whatsapp text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5">
                  <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.31 22.594c-.39 1.1-1.932 2.014-3.168 2.282-.846.18-1.95.324-5.67-1.218-4.762-1.972-7.828-6.804-8.066-7.118-.228-.314-1.918-2.554-1.918-4.872s1.214-3.456 1.646-3.928c.39-.428.91-.604 1.214-.604.15 0 .284.008.406.014.432.018.648.044.934.724.358.85 1.228 2.998 1.336 3.216.108.216.216.504.072.804-.134.306-.252.442-.468.696-.216.252-.422.446-.638.72-.198.234-.42.486-.178.934.242.448 1.078 1.778 2.314 2.88 1.588 1.416 2.928 1.856 3.342 2.058.414.204.654.172.896-.1.248-.282 1.058-1.228 1.342-1.648.276-.42.56-.35.942-.21.386.136 2.444 1.152 2.862 1.362.42.21.698.314.8.49.1.172.1 1.01-.29 2.118z" />
                </svg>
                WhatsApp Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
