'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import Link from 'next/link';


export function Footer() {
  const currentYear = 2025;

  const footerSections = [
    {
      title: 'Services',
      links: [
        'Web Development',
        'Mobile Apps',
        'AI Solutions',
        'Cloud Services',
        'Consulting',
      ],
    },
    {
      title: 'Company',
      links: [
        'About Us',
        'Portfolio',
        'Team',
        'Blog',
        'Careers',
      ],
    },
    {
      title: 'Resources',
      links: [
        'Documentation',
        'Case Studies',
        'FAQ',
        'Support',
        'Contact',
      ],
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hello@invozee.com', label: 'Email' },
  ];

  return (
    <footer className="bg-[#0d2064] dark:bg-[#0a1118] text-white py-16 px-4 border-t border-white/5 dark:border-gray-800/60">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-white/10 dark:border-gray-800/60">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="text-2xl font-bold text-primary dark:text-white cursor-pointer"
              >
                <img className="w-32 md:w-36 dark:brightness-110 mb-6" src="/invozee_Light.png" alt="Logo" />
              </motion.div>
            </Link>
            <p className="text-blue-100/80 dark:text-gray-400 text-sm">
              Transforming ideas into digital solutions that drive business growth.
            </p>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
            >
              <h4 className="font-semibold mb-4 text-[#f9ab12] dark:text-white">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-blue-100/90 dark:text-gray-400 hover:text-[#f9ab12] dark:hover:text-[#f9ab12] transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          {/* Copyright */}
          <p className="text-blue-100/60 dark:text-gray-500 text-sm mb-4 md:mb-0" suppressHydrationWarning>
            © {currentYear} Invozee. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-white/10 dark:bg-gray-800/60 hover:bg-[#f9ab12] dark:hover:bg-[#f9ab12] flex items-center justify-center transition-colors group"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5 text-white group-hover:text-[#0d2064] transition-colors" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
