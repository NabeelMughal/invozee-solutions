'use client';

import { useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export function About({ featuredOnly = false }: { featuredOnly?: boolean }) {
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

  const values = [
    { title: 'Expert Team',         description: 'Highly skilled engineers, designers, and architects with years of industry experience.' },
    { title: 'Scalable Solutions',  description: 'Building solutions that grow with your business and handle increasing demands.' },
    { title: 'Agile Development',   description: 'Flexible, iterative approach ensuring rapid delivery and continuous improvement.' },
    { title: 'Secure Architecture', description: 'Enterprise-grade security practices and compliance with industry standards.' },
    { title: 'Modern Technologies', description: 'Leveraging the latest tools and frameworks to build cutting-edge products.' },
    { title: 'Long-Term Support',   description: '24/7 support and maintenance to ensure your systems run smoothly.' },
  ];

  const displayedValues = featuredOnly ? values.slice(0, 3) : values;

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 bg-gradient-to-b from-blue-50/10 to-white dark:from-[#0d1929] dark:to-[#0f223d]/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 reveal-item opacity-0 translate-y-5 transition-all duration-700">
          <span className="text-xs font-semibold text-[#f9ab12] uppercase tracking-widest bg-[#f9ab12]/10 px-4 py-1.5 rounded-full border border-[#f9ab12]/20">
            About Our Company
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0d2064] dark:text-white mt-4 mb-4">
            About Invozee
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300 max-w-3xl mb-5 leading-relaxed">
            At Invozee, we believe in transforming ideas into digital solutions that make a real impact. With over 5 years of experience in software development, we&apos;ve helped 50+ clients across industries achieve their digital transformation goals.
          </p>
          {!featuredOnly && (
            <p className="text-base text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
              Our mission is to empower businesses through innovative technology solutions. We combine strategic thinking, creative design, and technical excellence to deliver products that users love and businesses depend on.
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedValues.map((value, index) => (
            <div
              key={index}
              className="reveal-item opacity-0 translate-y-5 transition-all duration-700 flex gap-4 p-6 bg-white dark:bg-[#1a2a3a] rounded-xl border border-gray-100 dark:border-gray-800 hover:border-[#f9ab12] dark:hover:border-[#f9ab12] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <CheckCircle2 className="w-5 h-5 text-[#f9ab12] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-base font-bold text-[#0d2064] dark:text-white mb-1.5">
                  {value.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {featuredOnly ? (
          <div className="mt-14 text-center reveal-item opacity-0 translate-y-5 transition-all duration-700">
            <Link href="/about">
              <button className="px-8 py-4 bg-[#0d2064] text-white rounded-full font-bold hover:shadow-lg transition-all hover:-translate-y-0.5 duration-300">
                Learn More About Us
              </button>
            </Link>
          </div>
        ) : (
          <div className="mt-14 p-8 md:p-12 bg-gradient-to-r from-[#0d2064] to-blue-800 text-white rounded-2xl shadow-xl reveal-item opacity-0 translate-y-5 transition-all duration-700">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4">Our Vision</h3>
            <p className="text-sm md:text-base leading-relaxed text-blue-100">
              To be the trusted partner for businesses seeking digital innovation. We envision a future where technology enables organizations to operate more efficiently, serve their customers better, and achieve sustainable growth.
            </p>
          </div>
        )}
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
