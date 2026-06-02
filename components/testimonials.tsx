'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'John Smith',
      company: 'Tech Innovations Inc',
      role: 'CEO',
      text: 'Invozee transformed our vision into reality. Their team&apos;s expertise and dedication were exceptional. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      company: 'Digital Solutions Ltd',
      role: 'Product Manager',
      text: 'Working with Invozee was a game-changer. They delivered our e-commerce platform on time and exceeded all expectations.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      company: 'Global Enterprises',
      role: 'CTO',
      text: 'The AI solutions they built for us have significantly improved our operational efficiency. Outstanding technical execution.',
      rating: 5,
    },
    {
      name: 'Emma Williams',
      company: 'StartUp Accelerator',
      role: 'Founder',
      text: 'Invozee&apos;s team showed great understanding of our needs and delivered a scalable platform that helped us grow 10x.',
      rating: 5,
    },
    {
      name: 'David Martinez',
      company: 'Financial Services Co',
      role: 'VP Engineering',
      text: 'Their commitment to quality and security standards is unmatched. They are true partners in our digital transformation journey.',
      rating: 5,
    },
    {
      name: 'Lisa Anderson',
      company: 'E-commerce Retail',
      role: 'Director',
      text: 'The mobile app Invozee developed increased our customer engagement by 200%. Exceptional work and support throughout.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            What our satisfied clients say about working with us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 bg-gradient-to-br from-white to-blue-50/50 rounded-xl border border-gray-200 hover:border-accent hover:shadow-lg transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>

              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-primary">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
