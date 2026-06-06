'use client';

import { useEffect, useRef } from 'react';
import { Code2, Database, Cloud, Zap, Smartphone, Sparkles } from 'lucide-react';

export function Technologies() {
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
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal-item');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const categories = [
    {
      title: 'Frontend',
      icon: Code2,
      color: 'from-blue-500 to-indigo-600',
      techs: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Angular', 'Nuxt.js', 'Tailwind CSS', 'WordPress', 'Shopify', 'HTML5', 'CSS3'],
    },
    {
      title: 'Backend',
      icon: Zap,
      color: 'from-green-500 to-emerald-600',
      techs: ['Node.js', 'Express.js', 'NestJS', 'Python', 'Django', 'Flask', 'PHP', 'Laravel', 'FastAPI', 'ASP.NET Core'],
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      color: 'from-purple-500 to-violet-600',
      techs: ['React Native', 'Flutter', 'Kotlin', 'Swift', 'SwiftUI', 'Xamarin', 'Ionic'],
    },
    {
      title: 'Database',
      icon: Database,
      color: 'from-orange-500 to-amber-600',
      techs: ['PostgreSQL', 'MongoDB', 'MySQL', 'MariaDB', 'SQL Server', 'Supabase', 'Firebase', 'Oracle'],
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-sky-500 to-cyan-600',
      techs: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Cloudflare', 'Docker', 'Kubernetes', 'GitLab CI/CD', 'Terraform'],
    },
    {
      title: 'AI / ML',
      icon: Sparkles,
      color: 'from-pink-500 to-rose-600',
      techs: ['OpenAI', 'LangChain', 'Deep Learning', 'AI Agents', 'Vector DB', 'Machine Learning', 'ChatGPT', 'LangGraph'],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 bg-gradient-to-b from-white to-blue-50/20 dark:from-[#0d1929] dark:to-[#0f223d]/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal-item opacity-0 translate-y-5 transition-all duration-700">
          <span className="text-xs font-semibold text-[#f9ab12] uppercase tracking-widest bg-[#f9ab12]/10 px-4 py-1.5 rounded-full border border-[#f9ab12]/20">
            Our Stack
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0d2064] dark:text-white mt-4 mb-4">
            Trusted Technologies
          </h2>
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build scalable, secure, and modern digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="reveal-item opacity-0 translate-y-6 transition-all duration-700 group p-6 bg-white dark:bg-[#1a2a3a] rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-[#f9ab12] dark:hover:border-[#f9ab12] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0d2064] dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-blue-50/80 dark:bg-[#0d1929] text-[#0d2064] dark:text-gray-300 text-xs font-semibold rounded-full border border-blue-100 dark:border-gray-800 hover:bg-[#f9ab12]/10 hover:border-[#f9ab12]/30 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
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
