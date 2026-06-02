'use client';

import { motion } from 'framer-motion';
import { Search, Lightbulb, Palette, Code2, TestTube, Rocket, MessageSquare } from 'lucide-react';

export function Process() {
  const steps = [
    {
      icon: Search,
      title: 'Discovery',
      description: 'Understanding your business, goals, and requirements through detailed analysis.',
    },
    {
      icon: Lightbulb,
      title: 'Planning',
      description: 'Strategic planning and roadmap creation for successful execution.',
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Creating beautiful, intuitive user interfaces and experiences.',
    },
    {
      icon: Code2,
      title: 'Development',
      description: 'Building robust, scalable code with industry best practices.',
    },
    {
      icon: TestTube,
      title: 'Testing',
      description: 'Comprehensive testing to ensure quality and reliability.',
    },
    {
      icon: Rocket,
      title: 'Deployment',
      description: 'Smooth deployment and launch of your application.',
    },
    {
      icon: MessageSquare,
      title: 'Support',
      description: '24/7 ongoing support and maintenance for optimal performance.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-blue-50/20 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Development Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A structured approach to delivering exceptional results
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent"></div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: isEven ? 20 : -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative ${isEven ? 'lg:mt-0' : 'lg:mt-20'}`}
                >
                  <div className="relative z-10 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-orange-500 flex items-center justify-center mx-auto"
                    >
                      <Icon className="w-8 h-8 text-primary" />
                    </motion.div>
                  </div>

                  <div className="text-center bg-white p-6 rounded-xl border border-gray-200 hover:border-accent transition-all hover:shadow-lg">
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {step.description}
                    </p>
                  </div>

                  {/* Step Number */}
                  <div className="absolute top-0 right-4 -translate-y-2 w-8 h-8 rounded-full bg-accent text-primary font-bold flex items-center justify-center text-sm">
                    {index + 1}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
