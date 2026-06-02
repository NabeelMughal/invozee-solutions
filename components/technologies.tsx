'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Zap } from 'lucide-react';

export function Technologies() {
  const techs = {
    frontend: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Angular', 'Nuxt.js', 'Tailwind CSS', 'Wordpress', 'Shopify', 'HTML5', 'CSS3' ],
    backend: ['Node.js', 'Express.js', 'NestJS', 'Python', 'Django', 'Flask', 'PHP', 'Laravel'],
    mobile: ['React Native', 'Flutter', 'Kotlin', 'Swift', 'SwiftUI'],
    database: ['PostgreSQL', 'MongoDB', 'MySQL', 'MariaDB', 'SQL Server', 'Supabase', 'Firebase', 'Oracle Database'],
    cloud: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Cloudflare', 'Docker', 'Kubernetes', 'GitLab CI/CD', 'Terraform'],
    ai: ['OpenAI', 'LangChain', 'Deep Learning', 'Vector DB', 'Machine Learning', 'ChatGPT'],
  };

  const categories = [
    { title: 'Frontend', icon: Code2, techs: techs.frontend },
    { title: 'Backend', icon: Zap, techs: techs.backend },
    { title: 'Mobile', icon: Code2, techs: techs.mobile },
    { title: 'Database', icon: Database, techs: techs.database },
    { title: 'Cloud & DevOps', icon: Cloud, techs: techs.cloud },
    { title: 'AI/ML', icon: Code2, techs: techs.ai },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-blue-50/20 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Trusted Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build scalable, secure, and modern digital solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-white rounded-xl border border-gray-200 hover:border-accent hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                  <h3 className="text-xl font-bold text-primary">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-50 text-primary text-sm font-medium rounded-full border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
