'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white/85 dark:bg-[#0d1929]/85 backdrop-blur-md border-b border-gray-100 dark:border-gray-800/60"
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="text-2xl font-bold text-primary dark:text-white cursor-pointer"
            >
              <img className="w-32 md:w-36 dark:brightness-110" src="/transparent_logo.png" alt="Logo" />
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-semibold tracking-wide transition-all duration-300 relative py-1 ${
                    isActive
                      ? 'text-[#f9ab12]'
                      : 'text-gray-700 dark:text-gray-300 hover:text-[#f9ab12] dark:hover:text-[#f9ab12]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f9ab12] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            <Link href="/contact">
              <button className="px-6 py-2.5 bg-[#0d2064] text-white dark:bg-[#f9ab12] dark:text-[#0d2064] rounded-full font-bold text-sm hover:shadow-md hover:shadow-[#0d2064]/20 dark:hover:shadow-[#f9ab12]/20 hover:-translate-y-0.5 transition-all duration-300">
                Get a Quote
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-gray-100 dark:border-gray-800 pt-4"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-semibold tracking-wide transition-colors py-1 ${
                    isActive
                      ? 'text-[#f9ab12]'
                      : 'text-gray-700 dark:text-gray-300 hover:text-[#f9ab12] dark:hover:text-[#f9ab12]'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <button className="w-full px-6 py-3 bg-[#0d2064] text-white dark:bg-[#f9ab12] dark:text-[#0d2064] rounded-full font-bold text-sm">
                Get a Quote
              </button>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
