'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

interface MenuItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

interface MegaMenuProps {
  trigger: string;
  sections: MenuSection[] | MenuItem[];
  isMobile?: boolean;
}

export function MegaMenu({ trigger, sections, isMobile = false }: MegaMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Determine if sections is an array of MenuSection or MenuItem
  const isMultiColumn = Array.isArray(sections) && 'items' in (sections[0] || {});

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isMobile) {
    return null;
  }

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-[#f9ab12] dark:hover:text-[#f9ab12] py-2"
      >
        {trigger}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="pl-4 border-l border-gray-200 dark:border-gray-700 mt-2"
          >
            {isMultiColumn
              ? (sections as MenuSection[]).map((section, idx) => (
                  <div key={idx} className="mb-4">
                    <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                      {section.title}
                    </h4>
                    <div className="space-y-2">
                      {section.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={handleClose}
                          className="block text-sm text-gray-700 dark:text-gray-400 hover:text-[#f9ab12] dark:hover:text-[#f9ab12] transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))
              : (sections as MenuItem[]).map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={handleClose}
                    className="block text-sm text-gray-700 dark:text-gray-400 hover:text-[#f9ab12] dark:hover:text-[#f9ab12] transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
