'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ChevronDown,
  Activity,
  Landmark,
  GraduationCap,
  ShoppingCart,
  Home,
  Factory,
  Truck,
  Plane,
  ShoppingBag,
  Cpu,
  Code2,
  Smartphone,
  Palette,
  Megaphone,
  Cloud,
  Brain
} from 'lucide-react';

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
  const [menuTimer, setMenuTimer] = useState<NodeJS.Timeout | null>(null);

  // Determine if sections is an array of MenuSection or MenuItem
  const isMultiColumn = Array.isArray(sections) && 'items' in (sections[0] || {});

  const handleMouseEnter = () => {
    if (menuTimer) clearTimeout(menuTimer);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 150);
    setMenuTimer(timer);
  };

  const handleDropdownMouseEnter = () => {
    if (menuTimer) clearTimeout(menuTimer);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <div className="w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-[#f9ab12] dark:hover:text-[#f9ab12] py-2 cursor-pointer"
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

  // Desktop mega menu
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center gap-1 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-[#f9ab12] dark:hover:text-[#f9ab12] transition-colors py-1 cursor-pointer">
        {trigger}
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-0 bottom-0 top-[73px] bg-black/40 backdrop-blur-sm z-30 pointer-events-auto"
              onMouseEnter={handleMouseLeave}
            />

            {/* Dropdown panel */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="absolute top-full left-0 right-0 w-full bg-white dark:bg-[#1a2a3a] border-b border-gray-100 dark:border-gray-800/80 shadow-2xl z-40 overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-6 py-10 text-left">
                {isMultiColumn ? (
                  <div className="grid grid-cols-3 gap-8">
                    {(sections as MenuSection[]).map((section, idx) => {
                      let Icon = Code2;
                      if (section.title.includes('Mobile')) Icon = Smartphone;
                      else if (section.title.includes('UI/UX')) Icon = Palette;
                      else if (section.title.includes('Marketing')) Icon = Megaphone;
                      else if (section.title.includes('Cloud')) Icon = Cloud;
                      else if (section.title.includes('AI')) Icon = Brain;

                      return (
                        <div key={idx} className="group/sec">
                          <div className="flex items-center gap-2.5 mb-3 border-b border-gray-100 dark:border-gray-800 pb-2">
                            <div className="w-8 h-8 rounded-lg bg-[#f9ab12]/10 flex items-center justify-center text-[#f9ab12] group-hover/sec:bg-[#f9ab12]/20 transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                              {section.title}
                            </h4>
                          </div>
                          <ul className="space-y-2">
                            {section.items.map((item) => (
                              <li key={item.label}>
                                <Link
                                  href={item.href}
                                  onClick={handleClose}
                                  className="text-sm font-medium text-[#0d2064] dark:text-gray-300 hover:text-[#f9ab12] dark:hover:text-[#f9ab12] transition-colors flex items-center gap-1 group/item"
                                >
                                  <span className="group-hover/item:translate-x-1 transition-transform duration-200">
                                    {item.label}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6 pb-2 border-b border-gray-100 dark:border-gray-800">
                      Industries We Serve
                    </h4>
                    <div className="grid grid-cols-5 gap-4">
                      {(sections as MenuItem[]).map((item, idx) => {
                        let Icon = Activity;
                        if (item.label.includes('Finance')) Icon = Landmark;
                        else if (item.label.includes('Education')) Icon = GraduationCap;
                        else if (item.label.includes('E-commerce')) Icon = ShoppingCart;
                        else if (item.label.includes('Real Estate')) Icon = Home;
                        else if (item.label.includes('Manufacturing')) Icon = Factory;
                        else if (item.label.includes('Logistics')) Icon = Truck;
                        else if (item.label.includes('Travel')) Icon = Plane;
                        else if (item.label.includes('Retail')) Icon = ShoppingBag;
                        else if (item.label.includes('Technology')) Icon = Cpu;

                        return (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={handleClose}
                            className="flex flex-col p-4 bg-gray-50 dark:bg-gray-800/40 hover:bg-[#f9ab12]/10 dark:hover:bg-[#f9ab12]/10 border border-gray-100 dark:border-white/15 hover:border-[#f9ab12]/30 dark:hover:border-[#f9ab12]/30 rounded-2xl transition-all duration-300 group/ind hover:-translate-y-0.5"
                          >
                            <div className="w-10 h-10 rounded-xl bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center text-[#0d2064] dark:text-white mb-3 group-hover/ind:scale-105 transition-transform duration-300">
                              <Icon className="w-5 h-5 group-hover/ind:text-[#f9ab12] transition-colors" />
                            </div>
                            <span className="text-sm font-bold text-[#0d2064] dark:text-white group-hover/ind:text-[#f9ab12] transition-colors">
                              {item.label}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
