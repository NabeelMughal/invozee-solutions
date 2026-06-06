'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openId, setOpenId] = useState<number>(-1);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal-item');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const faqs = [
    { question: 'What is your typical project timeline?',   answer: "Project timelines vary based on complexity and scope. Most projects take 2–6 months from discovery to deployment. We'll provide a detailed timeline during the planning phase." },
    { question: 'Do you offer post-launch support?',        answer: 'Yes! We provide comprehensive 24/7 support and maintenance packages including bug fixes, performance monitoring, feature updates, and security patches.' },
    { question: 'Can you work with existing codebases?',    answer: 'Absolutely. We can integrate with, refactor, or extend existing projects following industry best practices to ensure seamless collaboration.' },
    { question: 'What technologies do you specialize in?',  answer: 'We specialize in React, Next.js, Node.js, Python, and cloud platforms. We always choose the best tech stack for your specific project needs.' },
    { question: 'How do you ensure project security?',      answer: 'Security is paramount. We follow OWASP guidelines, conduct regular security audits, implement encryption, and maintain compliance with GDPR, HIPAA, and PCI-DSS.' },
    { question: 'What is your communication process?',      answer: "You'll have a dedicated project manager, weekly status meetings, and full visibility through our project management tools. Transparency is core to how we work." },
    { question: 'Do you offer training and documentation?', answer: 'Yes, we provide comprehensive documentation and training sessions so your team can maintain and scale your application effectively after launch.' },
    { question: 'How do you handle project changes?',       answer: 'We use an agile approach allowing flexibility. Change requests are evaluated, discussed regarding timeline and cost impact, then integrated into sprints as agreed.' },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 bg-gradient-to-b from-blue-50/10 to-white dark:from-[#0d1929] dark:to-[#0d1929]"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 reveal-item opacity-0 translate-y-5 transition-all duration-700">
          <span className="text-xs font-semibold text-[#f9ab12] uppercase tracking-widest bg-[#f9ab12]/10 px-4 py-1.5 rounded-full border border-[#f9ab12]/20">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0d2064] dark:text-white mt-4 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
            Find answers to common questions about our services and process.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="reveal-item opacity-0 translate-y-4 transition-all duration-600 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden hover:border-[#f9ab12]/50 dark:hover:border-[#f9ab12]/40 transition-colors duration-200"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => setOpenId(openId === index ? -1 : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white dark:bg-[#1a2a3a] hover:bg-gray-50/80 dark:hover:bg-[#1a2a3a]/80 text-left shadow-sm  transition-all duration-300"
                aria-expanded={openId === index}
              >
                <h3 className="font-semibold text-[#0d2064] dark:text-white text-sm md:text-base pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-[#f9ab12] flex-shrink-0 transition-transform duration-300 ${openId === index ? 'rotate-180' : ''}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openId === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300 border-t border-gray-100 dark:border-gray-800 bg-gradient-to-b from-white to-blue-50/20 dark:from-[#1a2a3a] dark:to-[#0d1929] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .reveal-item.in-view {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
