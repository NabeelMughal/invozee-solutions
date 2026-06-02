'use client';

import { motion } from 'framer-motion';
import { Globe, Smartphone, Sparkles, Zap, ShoppingCart, Cloud, BarChart3, Lock, Settings } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Custom Web Development',
      description: 'Responsive, scalable web applications built with modern technologies and best practices.',
      benefits: ['Responsive Design', 'SEO Optimized', 'Fast Performance'],
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile apps for iOS and Android that users love.',
      benefits: ['iOS & Android', 'User-Centric', 'High Performance'],
    },
    {
      icon: Sparkles,
      title: 'AI Solutions & Generative AI',
      description: 'Harness the power of AI to automate, enhance, and innovate your business processes.',
      benefits: ['AI Integration', 'ML Models', 'Automation'],
    },
    {
      icon: Zap,
      title: 'Business Process Automation',
      description: 'Streamline operations and reduce costs with intelligent automation solutions.',
      benefits: ['Workflow Optimization', 'Cost Reduction', 'Efficiency'],
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Full-featured e-commerce platforms that drive sales and engage customers.',
      benefits: ['Shopping Cart', 'Payment Integration', 'Inventory Management'],
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions & DevOps',
      description: 'Scalable cloud infrastructure and DevOps practices for reliable deployments.',
      benefits: ['Cloud Migration', 'CI/CD Pipeline', 'Infrastructure Scaling'],
    },
    {
      icon: BarChart3,
      title: 'Data Analytics & BI',
      description: 'Transform data into actionable insights with advanced analytics and dashboards.',
      benefits: ['Data Visualization', 'Real-time Analytics', 'Predictive Analytics'],
    },
    {
      icon: Lock,
      title: 'Cybersecurity Solutions',
      description: 'Protect your assets with comprehensive security solutions and compliance measures.',
      benefits: ['Security Audit', 'Penetration Testing', 'Compliance'],
    },
    {
      icon: Settings,
      title: 'Maintenance & Support',
      description: '24/7 support and maintenance to keep your systems running smoothly.',
      benefits: ['24/7 Support', 'Bug Fixes', 'Performance Monitoring'],
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to transform your business and accelerate digital growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 bg-gradient-to-br from-white to-blue-50/50 rounded-2xl border border-gray-200 hover:border-accent hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-5">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
