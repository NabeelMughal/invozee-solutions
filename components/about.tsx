'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export function About() {
  const values = [
    {
      title: 'Expert Team',
      description: 'Highly skilled engineers, designers, and architects with years of industry experience.',
    },
    {
      title: 'Scalable Solutions',
      description: 'Building solutions that grow with your business and handle increasing demands.',
    },
    {
      title: 'Agile Development',
      description: 'Flexible, iterative approach ensuring rapid delivery and continuous improvement.',
    },
    {
      title: 'Secure Architecture',
      description: 'Enterprise-grade security practices and compliance with industry standards.',
    },
    {
      title: 'Modern Technologies',
      description: 'Leveraging the latest tools and frameworks to build cutting-edge products.',
    },
    {
      title: 'Long-Term Support',
      description: '24/7 support and maintenance to ensure your systems run smoothly.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-blue-50/20 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About Invozee
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mb-6 leading-relaxed">
            At Invozee, we believe in transforming ideas into digital solutions that make a real impact. With over 5 years of experience in software development, we&apos;ve helped 50+ clients across industries achieve their digital transformation goals.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            Our mission is to empower businesses through innovative technology solutions. We combine strategic thinking, creative design, and technical excellence to deliver products that users love and businesses depend on.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-accent hover:shadow-lg transition-all"
            >
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-primary mb-1">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 p-8 bg-gradient-to-r from-primary to-blue-800 text-white rounded-2xl"
        >
          <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
          <p className="text-lg leading-relaxed">
            To be the trusted partner for businesses seeking digital innovation. We envision a future where technology enables organizations to operate more efficiently, serve their customers better, and achieve sustainable growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
