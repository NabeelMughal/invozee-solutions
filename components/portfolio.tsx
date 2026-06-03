'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
// import grayValley from '../public/portfolio/GrayVally.png';

export function Portfolio() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'GrayVally - AI-Driven Software Solutions',
      category: 'ai',
      link: 'https://www.grayvally.tech/',
      image: '/portfolio/GrayVally.png',
      technologies: ['React', 'Node.js', 'OpenAI API', 'PostgreSQL'],
      description: 'AI-powered business growth platform with scalable backends and precision-engineered frontends',
    },
    {
      id: 2,
      title: 'Buildertrend - Construction Management SaaS',
      category: 'enterprise',
      link: 'https://buildertrend.com/',
      image: '/portfolio/Buildertrend.png',
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Stripe'],
      description: 'Enterprise construction management platform with mobile app and AI-powered workflows',
    },
    {
      id: 3,
      title: 'Lewis Hadden - Developer Portfolio',
      category: 'enterprise',
      link: 'https://portfolio.lewishadden.com/',
      image: '/portfolio/LewisHadden.png',
      technologies: ['React', 'Express', 'PostgreSQL', 'Chart.js'],
      description: 'Modern developer portfolio showcasing React, Next.js, and advanced web technologies',
    },
    {
      id: 4,
      title: 'SugarMD - HealthCare eCommerce Platform',
      category: 'web',
      link: 'https://www.sugarmds.com/',
      image: '/portfolio/SugarMD.png',
      technologies: ['Next.js', 'Prisma', 'Stripe', 'Tailwind CSS'],
      description: 'Doctor-formulated healthcare product platform with Shopify integration and customer testimonials',
    },
    {
      id: 5,
      title: 'Onfleet - Fleet & Delivery Management',
      category: 'mobile',
      link: 'https://onfleet.com/',
      image: '/portfolio/Onfleet.png',
      technologies: ['React Native', 'Firebase', 'Node.js', 'HIPAA'],
      description: 'AI-powered mobile delivery platform with real-time tracking and route optimization',
    },
    {
      id: 6,
      title: 'Gulshan Badda - Fine Dining Restaurant',
      category: 'enterprise',
      link: 'https://restaurant-gulshan.vercel.app/',
      image: '/portfolio/GulshanBadda.png',
      technologies: ['Next.js', 'Python', 'PostgreSQL', 'Stripe API'],
      description: 'Elegant restaurant platform with reservation system and menu management',
    },
    {
      id: 7,
      title: 'Transistor - Podcast Hosting & AI Processing',
      category: 'web',
      link: 'https://transistor.fm/',
      image: '/portfolio/Transistor.png',
      technologies: ['React', 'Node.js', 'Google Maps API', 'WebSocket'],
      description: 'Podcast platform with AI transcription, multi-platform distribution, and analytics',
    },
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'ai', label: 'AI' },
    { id: 'enterprise', label: 'Enterprise' },
  ];

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Showcase of our recent work across various industries and technologies
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${filter === cat.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filtered.map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group cursor-pointer block"
            >
              <div className="relative overflow-hidden rounded-xl h-64 mb-4">
                <div
                  className="w-full h-full transition-transform duration-500 group-hover:scale-110 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-blue-50 text-primary px-2 py-1 rounded border border-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
