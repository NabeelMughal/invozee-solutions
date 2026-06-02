'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  // Animation variants for floating elements
  const floatingVariants = {
    animate: {
      y: [0, -40, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const floatingVariantsX = {
    animate: {
      x: [0, 40, 0],
      y: [0, -30, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const waveVariants = {
    animate: {
      backgroundPosition: ['0% 0%', '100% 0%'],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-4 overflow-hidden bg-gradient-to-b from-background via-white to-blue-50/5">
      {/* Animated Background Container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mesh Gradient Background - Premium effect */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.10]" preserveAspectRatio="none" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0d2064" />
              <stop offset="50%" stopColor="#f9ab12" />
              <stop offset="100%" stopColor="#0d2064" />
            </linearGradient>
            <filter id="blur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
            </filter>
          </defs>
          {/* Flowing curves and lines */}
          <path d="M 0 200 Q 250 150, 500 200 T 1000 200" stroke="url(#grad1)" strokeWidth="2" fill="none" filter="url(#blur)" />
          <path d="M 0 400 Q 250 350, 500 400 T 1000 400" stroke="url(#grad1)" strokeWidth="2" fill="none" filter="url(#blur)" opacity="0.6" />
          <path d="M 0 600 Q 250 550, 500 600 T 1000 600" stroke="url(#grad1)" strokeWidth="1.5" fill="none" filter="url(#blur)" opacity="0.4" />
          <path d="M 0 800 Q 250 750, 500 800 T 1000 800" stroke="url(#grad1)" strokeWidth="1" fill="none" filter="url(#blur)" opacity="0.2" />
        </svg>

        {/* Animated Gradient Wave - flowing effect */}
        <motion.div
          variants={waveVariants}
          animate="animate"
          className="absolute inset-0 opacity-[0.50]"
          style={{
            background: `linear-gradient(90deg, 
              transparent 0%, 
              rgba(249, 171, 18, 0.1) 25%, 
              rgba(13, 32, 100, 0.1) 50%, 
              rgba(249, 171, 18, 0.1) 75%, 
              transparent 100%)`,
            backgroundSize: '200% 100%',
          }}
        ></motion.div>

        {/* Floating Particles - subtle dots */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 2 === 0 ? 'rgba(13, 32, 100, 0.3)' : 'rgba(249, 171, 18, 0.2)',
              left: `${15 + i * 12}%`,
              top: `${20 + i * 8}%`,
            }}
            animate={{
              y: [0, -80, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.2,
            }}
          />
        ))}

        {/* Large Floating Blur Orbs with subtle animation */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl opacity-[0.07]"
          style={{
            background: 'linear-gradient(135deg, rgba(249, 171, 18, 0.3), rgba(13, 32, 100, 0.2))',
          }}
        ></motion.div>

        <motion.div
          variants={floatingVariantsX}
          animate="animate"
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full blur-3xl opacity-[0.06]"
          style={{
            background: 'linear-gradient(135deg, rgba(13, 32, 100, 0.3), rgba(249, 171, 18, 0.1))',
          }}
        ></motion.div>

        {/* Subtle Center Glow */}
        <motion.div
          animate={{
            opacity: [0.05, 0.12, 0.05],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-[0.08]"
          style={{
            background: 'radial-gradient(circle, rgba(249, 171, 18, 0.2), transparent)',
          }}
        ></motion.div>

        {/* Animated flowing lines - diagonal */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            opacity: [0.05, 0.12, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 opacity-[0.04]"
          style={{
            background: `linear-gradient(45deg, 
              transparent 0%, 
              rgba(13, 32, 100, 0.1) 25%, 
              transparent 50%)`,
            backgroundSize: '200px 200px',
          }}
        ></motion.div>

        {/* Tech Grid Pattern - extremely subtle */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(13, 32, 100, 0.1) 25%, rgba(13, 32, 100, 0.1) 26%, transparent 27%, transparent 74%, rgba(13, 32, 100, 0.1) 75%, rgba(13, 32, 100, 0.1) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(13, 32, 100, 0.1) 25%, rgba(13, 32, 100, 0.1) 26%, transparent 27%, transparent 74%, rgba(13, 32, 100, 0.1) 75%, rgba(13, 32, 100, 0.1) 76%, transparent 77%, transparent)`,
            backgroundSize: '60px 60px',
          }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-6 inline-block">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Welcome to Innovation
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-balance mb-6 text-primary">
            Transforming Ideas Into Digital Solutions
          </h1>

          <p className="text-lg md:text-xl text-gray-600 text-balance mb-8 max-w-2xl mx-auto leading-relaxed">
            Premium IT solutions and enterprise-level software development services. We transform your vision into robust, scalable digital products.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2 group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition-colors">
              View Portfolio
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '100+', label: 'Projects Delivered' },
            { number: '50+', label: 'Happy Clients' },
            { number: '10+', label: 'Technologies' },
            { number: '5+', label: 'Years Experience' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <p className="text-sm md:text-base text-gray-600">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
