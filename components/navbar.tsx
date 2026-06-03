'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-primary"
          >
            <img className='w-40' src="../transparent_logo.png" alt="Logo"/>
            
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-accent font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button className="px-6 py-2 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pb-4 flex flex-col gap-4"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-accent font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full px-6 py-2 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors">
              Contact Us
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
