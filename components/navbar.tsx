'use client';

import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Moon,
  Sun,
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
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { MegaMenu } from './mega-menu';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  // Mega Menu State
  const [activeMenu, setActiveMenu] = useState<'services' | 'industries' | null>(null);
  const [menuTimer, setMenuTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseEnter = (menu: 'services' | 'industries') => {
    if (menuTimer) clearTimeout(menuTimer);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    const timer = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
    setMenuTimer(timer);
  };

  const handleDropdownMouseEnter = () => {
    if (menuTimer) clearTimeout(menuTimer);
  };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const servicesSections = [
    {
      title: 'Web Development',
      items: [
        { label: 'Custom Website Development', href: '/services/web-development' },
        { label: 'Corporate Websites', href: '/services/web-development' },
        { label: 'E-commerce Solutions', href: '/services/web-development' },
        { label: 'Web Applications', href: '/services/web-development' },
      ],
    },
    {
      title: 'Mobile App Development',
      items: [
        { label: 'Android Development', href: '/services/mobile-app-development' },
        { label: 'iOS Development', href: '/services/mobile-app-development' },
        { label: 'Cross-Platform Apps', href: '/services/mobile-app-development' },
        { label: 'App Modernization', href: '/services/mobile-app-development' },
      ],
    },
    {
      title: 'UI/UX Design',
      items: [
        { label: 'UI Design', href: '/services/ui-ux-design' },
        { label: 'UX Research', href: '/services/ui-ux-design' },
        { label: 'Wireframing', href: '/services/ui-ux-design' },
        { label: 'Prototyping', href: '/services/ui-ux-design' },
      ],
    },
    {
      title: 'Digital Marketing',
      items: [
        { label: 'SEO Optimization', href: '/services/digital-marketing' },
        { label: 'Social Media Marketing', href: '/services/digital-marketing' },
        { label: 'PPC Advertising', href: '/services/digital-marketing' },
        { label: 'Content Marketing', href: '/services/digital-marketing' },
      ],
    },
    {
      title: 'Cloud & DevOps',
      items: [
        { label: 'Cloud Migration', href: '/services/cloud-devops' },
        { label: 'Infrastructure Management', href: '/services/cloud-devops' },
        { label: 'CI/CD Solutions', href: '/services/cloud-devops' },
        { label: 'Security Management', href: '/services/cloud-devops' },
      ],
    },
    {
      title: 'AI & Automation',
      items: [
        { label: 'AI Chatbots', href: '/services/ai-automation' },
        { label: 'Business Automation', href: '/services/ai-automation' },
        { label: 'AI Integrations', href: '/services/ai-automation' },
        { label: 'Machine Learning Solutions', href: '/services/ai-automation' },
      ],
    },
  ];

  const industriesItems = [
    { label: 'Healthcare', href: '/industries/healthcare' },
    { label: 'Finance & Banking', href: '/industries/finance-banking' },
    { label: 'Education', href: '/industries/education' },
    { label: 'E-commerce', href: '/industries/ecommerce' },
    { label: 'Real Estate', href: '/industries/real-estate' },
    { label: 'Manufacturing', href: '/industries/manufacturing' },
    { label: 'Logistics', href: '/industries/logistics' },
    { label: 'Travel & Hospitality', href: '/industries/travel-hospitality' },
    { label: 'Retail', href: '/industries/retail' },
    { label: 'Technology & SaaS', href: '/industries/technology-saas' },
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

            {/* Services Mega Menu Trigger */}
            <div
              className="relative py-1"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1 text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                  activeMenu === 'services' || pathname.startsWith('/services')
                    ? 'text-[#f9ab12]'
                    : 'text-gray-700 dark:text-gray-300 hover:text-[#f9ab12] dark:hover:text-[#f9ab12]'
                }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMenu === 'services' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Industries Mega Menu Trigger */}
            <div
              className="relative py-1"
              onMouseEnter={() => handleMouseEnter('industries')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1 text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                  activeMenu === 'industries' || pathname.startsWith('/industries')
                    ? 'text-[#f9ab12]'
                    : 'text-gray-700 dark:text-gray-300 hover:text-[#f9ab12] dark:hover:text-[#f9ab12]'
                }`}
              >
                Industries
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMenu === 'industries' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-[#f9ab12] dark:hover:text-[#f9ab12] transition-colors cursor-pointer"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}
            <Link href="/contact">
              <button className="px-6 py-2.5 bg-[#0d2064] text-white dark:bg-[#f9ab12] dark:text-[#0d2064] rounded-full font-bold text-sm hover:shadow-md hover:shadow-[#0d2064]/20 dark:hover:shadow-[#f9ab12]/20 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                Get a Quote
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary dark:text-white cursor-pointer"
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
            <MegaMenu trigger="Services" sections={servicesSections} isMobile={true} />
            <MegaMenu trigger="Industries" sections={industriesItems} isMobile={true} />
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="flex items-center justify-center gap-2 w-full px-6 py-2.5 text-gray-700 dark:text-gray-300 hover:text-[#f9ab12] dark:hover:text-[#f9ab12] transition-colors border border-gray-200 dark:border-gray-800 rounded-lg cursor-pointer"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-4 h-4" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            )}
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <button className="w-full px-6 py-3 bg-[#0d2064] text-white dark:bg-[#f9ab12] dark:text-[#0d2064] rounded-full font-bold text-sm cursor-pointer">
                Get a Quote
              </button>
            </Link>
          </motion.div>
        )}
      </div>

      {/* Background Overlay */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 bottom-0 top-[73px] bg-black/40 backdrop-blur-sm z-30 pointer-events-auto"
            onMouseEnter={handleMouseLeave}
          />
        )}
      </AnimatePresence>

      {/* Full-width Mega Menu Dropdown */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="absolute top-full left-0 right-0 w-full bg-white dark:bg-[#1a2a3a] border-b border-gray-100 dark:border-gray-800/80 shadow-2xl z-40 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-10">
              {activeMenu === 'services' ? (
                <div className="grid grid-cols-3 gap-8">
                  {servicesSections.map((section, idx) => {
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
                                onClick={() => setActiveMenu(null)}
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
                    {industriesItems.map((item, idx) => {
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
                          onClick={() => setActiveMenu(null)}
                          className="flex flex-col p-4 bg-gray-50 dark:bg-gray-800/40 hover:bg-[#f9ab12]/10 dark:hover:bg-[#f9ab12]/10 border border-gray-100 dark:border-gray-800/60 hover:border-[#f9ab12]/30 dark:hover:border-[#f9ab12]/30 rounded-2xl transition-all duration-300 group/ind hover:-translate-y-0.5"
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
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
