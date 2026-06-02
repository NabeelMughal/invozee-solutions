'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openId, setOpenId] = useState(0);

  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity and scope. Most projects take 2-6 months from discovery to deployment. We&apos;ll provide a detailed timeline during the planning phase.',
    },
    {
      question: 'Do you offer post-launch support?',
      answer: 'Yes! We provide comprehensive 24/7 support and maintenance packages. This includes bug fixes, performance monitoring, feature updates, and security patches.',
    },
    {
      question: 'Can you work with existing codebases?',
      answer: 'Absolutely. We can integrate with, refactor, or extend existing projects. We follow industry best practices to ensure seamless collaboration.',
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in modern web and mobile technologies including React, Next.js, Node.js, Python, and cloud platforms. We choose the best tech stack for your specific needs.',
    },
    {
      question: 'How do you ensure project security?',
      answer: 'Security is paramount. We follow OWASP guidelines, conduct regular security audits, implement encryption, and follow compliance standards like GDPR, HIPAA, and PCI-DSS.',
    },
    {
      question: 'What is your communication process?',
      answer: 'We believe in transparency and regular updates. You&apos;ll have a dedicated project manager, weekly status meetings, and full visibility into progress through our project management tools.',
    },
    {
      question: 'Do you offer training and documentation?',
      answer: 'Yes, we provide comprehensive documentation and training sessions for your team to ensure you can maintain and scale your application effectively.',
    },
    {
      question: 'How do you handle project changes?',
      answer: 'We use an agile approach allowing flexibility. Change requests are evaluated, discussed with you regarding timeline and cost impact, and integrated into sprints as agreed.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-blue-50/20 to-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our services and process
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-accent transition-colors"
            >
              <button
                onClick={() => setOpenId(openId === index ? -1 : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-blue-50/50 transition-colors text-left"
              >
                <h3 className="font-semibold text-primary text-lg">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openId === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-accent flex-shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openId === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 py-4 text-gray-600 border-t border-gray-200 bg-gradient-to-b from-white to-blue-50/30">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
