'use client';

import { useEffect, useRef } from 'react';
import { Globe, Smartphone, Sparkles, Zap, ShoppingCart, Cloud, BarChart3, Lock, Settings } from 'lucide-react';
import Link from 'next/link';

export function Services({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal-item');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const services = [
    { icon: Globe,       title: 'Custom Web Development',      description: 'Responsive, scalable web applications built with modern technologies and best practices.',             benefits: ['Responsive Design', 'SEO Optimized', 'Fast Performance'] },
    { icon: Smartphone,  title: 'Mobile App Development',      description: 'Native and cross-platform mobile apps for iOS and Android that users love.',                         benefits: ['iOS & Android', 'User-Centric', 'High Performance'] },
    { icon: Sparkles,    title: 'AI Solutions & Generative AI', description: 'Harness the power of AI to automate, enhance, and innovate your business processes.',               benefits: ['AI Integration', 'ML Models', 'Automation'] },
    { icon: Zap,         title: 'Business Process Automation', description: 'Streamline operations and reduce costs with intelligent automation solutions.',                      benefits: ['Workflow Optimization', 'Cost Reduction', 'Efficiency'] },
    { icon: ShoppingCart,title: 'E-commerce Solutions',        description: 'Full-featured e-commerce platforms that drive sales and engage customers.',                          benefits: ['Shopping Cart', 'Payment Integration', 'Inventory Management'] },
    { icon: Cloud,       title: 'Cloud Solutions & DevOps',    description: 'Scalable cloud infrastructure and DevOps practices for reliable deployments.',                       benefits: ['Cloud Migration', 'CI/CD Pipeline', 'Infrastructure Scaling'] },
    { icon: BarChart3,   title: 'Data Analytics & BI',         description: 'Transform data into actionable insights with advanced analytics and dashboards.',                    benefits: ['Data Visualization', 'Real-time Analytics', 'Predictive Analytics'] },
    { icon: Lock,        title: 'Cybersecurity Solutions',     description: 'Protect your assets with comprehensive security solutions and compliance measures.',                 benefits: ['Security Audit', 'Penetration Testing', 'Compliance'] },
    { icon: Settings,    title: 'Maintenance & Support',       description: '24/7 support and maintenance to keep your systems running smoothly.',                               benefits: ['24/7 Support', 'Bug Fixes', 'Performance Monitoring'] },
  ];

  const displayedServices = featuredOnly ? services.slice(0, 3) : services;

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 bg-white dark:bg-[#0d1929]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal-item opacity-0 translate-y-5 transition-all duration-700">
          <span className="text-xs font-semibold text-[#f9ab12] uppercase tracking-widest bg-[#f9ab12]/10 px-4 py-1.5 rounded-full border border-[#f9ab12]/20">
            Our Offerings
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0d2064] dark:text-white mt-4 mb-4">
            Our Services
          </h2>
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions to transform your business and accelerate digital growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {displayedServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="reveal-item opacity-0 translate-y-6 transition-all duration-700 group p-8 bg-gradient-to-br from-white to-blue-50/20 dark:from-[#1a2a3a] dark:to-[#1a2a3a]/80 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-[#f9ab12] dark:hover:border-[#f9ab12] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="w-14 h-14 bg-[#f9ab12]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#f9ab12]/20 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-[#f9ab12]" />
                </div>
                <h3 className="text-xl font-bold text-[#0d2064] dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2.5">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2.5 text-xs font-medium text-gray-600 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#f9ab12] flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {featuredOnly && (
          <div className="mt-14 text-center reveal-item opacity-0 translate-y-5 transition-all duration-700">
            <Link href="/services">
              <button className="px-8 py-4 bg-[#0d2064] text-white rounded-full font-bold hover:shadow-lg transition-all hover:-translate-y-0.5 duration-300">
                Explore All Services
              </button>
            </Link>
          </div>
        )}
      </div>

      <style>{`
        .reveal-item.in-view {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
