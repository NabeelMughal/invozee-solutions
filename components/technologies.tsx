'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Cloud,
  Zap,
  Smartphone,
  Brain,
  GitBranch,
  Shield,
} from 'lucide-react';
import { useState } from 'react';

export function Technologies() {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      title: 'Frontend',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      techs: [
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
      ],
    },
    {
      title: 'Backend',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      techs: [
        'Node.js',
        'Express.js',
        'NestJS',
        'Python',
      ],
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      color: 'from-green-500 to-emerald-500',
      techs: [
        'React Native',
        'Flutter',
      ],
    },
    {
      title: 'Database',
      icon: Database,
      color: 'from-orange-500 to-red-500',
      techs: [
        'PostgreSQL',
        'MongoDB',
        'MySQL',
      ],
    },
    {
      title: 'Cloud',
      icon: Cloud,
      color: 'from-indigo-500 to-blue-500',
      techs: [
        'AWS',
        'Azure',
        'Google Cloud',
      ],
    },
    {
      title: 'AI & ML',
      icon: Brain,
      color: 'from-yellow-500 to-orange-500',
      techs: [
        'OpenAI',
        'LangChain',
        'Vector Databases',
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Technology Stack
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We leverage cutting-edge technologies across all domains to deliver world-class solutions tailored to your needs
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all ${
                  index === activeCategory
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">{category.title}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Technologies Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {categories[activeCategory].techs.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative group p-4 md:p-6 rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-accent hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex flex-col items-center justify-center text-center">
                  <span className="font-semibold text-primary text-sm md:text-base">
                    {tech}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
