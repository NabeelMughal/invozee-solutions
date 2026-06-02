'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  // Floating shape animation variants
  const floatingVariants = {
    animate: {
      y: [0, -30, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const floatingVariants2 = {
    animate: {
      y: [0, 30, 0],
      x: [0, -20, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const rotatingVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-4 overflow-hidden">
      {/* Main Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-white to-blue-50/10"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating blur orbs */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-0 right-0 w-96 h-96 bg-accent/8 rounded-full blur-3xl opacity-60"
        ></motion.div>

        <motion.div
          variants={floatingVariants2}
          animate="animate"
          className="absolute bottom-0 left-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl opacity-50"
        ></motion.div>

        {/* Subtle accent glow */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
        ></motion.div>

        {/* Animated floating geometric shapes - Top Right */}
        <motion.div
          variants={rotatingVariants}
          animate="animate"
          className="absolute top-20 right-20 w-20 h-20 border border-accent/20 rounded-lg opacity-40"
        ></motion.div>

        {/* Animated floating geometric shapes - Middle Left */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-1/3 left-10 w-16 h-16 border border-primary/20 rounded-full opacity-30"
        ></motion.div>

        {/* Animated floating geometric shapes - Bottom Right */}
        <motion.div
          variants={floatingVariants2}
          animate="animate"
          className="absolute bottom-32 right-1/3 w-24 h-24 border-2 border-accent/15 rounded-lg opacity-25 transform rotate-45"
        ></motion.div>

        {/* Tech-inspired grid pattern overlay - subtle */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(13, 32, 100, 0.05) 25%, rgba(13, 32, 100, 0.05) 26%, transparent 27%, transparent 74%, rgba(13, 32, 100, 0.05) 75%, rgba(13, 32, 100, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(13, 32, 100, 0.05) 25%, rgba(13, 32, 100, 0.05) 26%, transparent 27%, transparent 74%, rgba(13, 32, 100, 0.05) 75%, rgba(13, 32, 100, 0.05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px',
        }}></div>

        {/* Subtle animated gradient shift */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity"
          style={{
            background: 'linear-gradient(45deg, #0d2064, #f9ab12, #0d2064)',
            backgroundSize: '200% 200%',
          }}
        ></motion.div>
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
