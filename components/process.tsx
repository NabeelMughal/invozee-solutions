'use client';

import { useEffect, useRef } from 'react';
import { Search, Lightbulb, Palette, Code2, TestTube, Rocket, MessageSquare } from 'lucide-react';

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal-item');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const steps = [
    { icon: Search, title: 'Discovery', description: 'Understanding your business, goals, and requirements through detailed analysis.' },
    { icon: Lightbulb, title: 'Planning', description: 'Strategic planning and roadmap creation for successful execution.' },
    { icon: Palette, title: 'Design', description: 'Creating beautiful, intuitive user interfaces and experiences.' },
    { icon: Code2, title: 'Development', description: 'Building robust, scalable code with industry best practices.' },
    { icon: TestTube, title: 'Testing', description: 'Comprehensive testing to ensure quality and reliability.' },
    { icon: Rocket, title: 'Deployment', description: 'Smooth deployment and launch of your application.' },
    { icon: MessageSquare, title: 'Support', description: '24/7 ongoing support and maintenance for optimal performance.' },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 bg-gradient-to-b from-blue-50/20 to-white dark:from-[#0d1929] dark:to-[#0d1929]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 reveal-item opacity-0 translate-y-5 transition-all duration-700">
          <span className="text-xs font-semibold text-[#f9ab12] uppercase tracking-widest bg-[#f9ab12]/10 px-4 py-1.5 rounded-full border border-[#f9ab12]/20">
            How We Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0d2064] dark:text-white mt-4 mb-4">
            Our Development Process
          </h2>
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            A structured approach to delivering exceptional results on time and on budget.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="reveal-item opacity-0 translate-y-6 transition-all duration-700 group relative"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {/* Step number badge */}
                {/* <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-[#f9ab12] text-[#0d2064] font-extrabold text-xs flex items-center justify-center shadow-md z-10">
                  {index + 1}
                </div> */}

                <div className="h-full p-6 bg-white dark:bg-[#1a2a3a] rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-[#f9ab12] dark:hover:border-[#f9ab12] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#f9ab12] to-orange-500 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-[#0d2064] dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
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
