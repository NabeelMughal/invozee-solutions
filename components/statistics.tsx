'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Statistics() {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { number: 100, suffix: '+', label: 'Projects Completed' },
    { number: 50, suffix: '+', label: 'Satisfied Clients' },
    { number: 80, suffix: '+', label: 'Team Members' },
    { number: 5, suffix: '+', label: 'Years Experience' },
  ];

  const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 30);

      return () => clearInterval(timer);
    }, [isVisible, target]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <motion.section
      onViewportEnter={() => setIsVisible(true)}
      className="py-20 px-4 bg-gradient-to-r from-primary to-blue-800 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Impact
          </h2>
          <p className="text-lg text-blue-100">
            Delivering excellence across the globe
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 transition-all"
            >
              <div className="text-5xl md:text-6xl font-bold mb-2">
                <Counter target={stat.number} suffix={stat.suffix} />
              </div>
              <p className="text-blue-100 text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
