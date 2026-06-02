'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Cloud,
  Zap,
  Smartphone,
  Brain,
  GitBranch,
  Shield,
} from 'lucide-react';
import { useState } from 'react';

export function Technologies() {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      title: 'Frontend',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      techs: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'Vue.js',
        'Nuxt.js',
        'Angular',
        'Svelte',
        'Tailwind CSS',
        'Bootstrap',
        'Material UI',
        'Chakra UI',
        'Redux',
        'Zustand',
        'Framer Motion',
      ],
    },
    {
      title: 'Backend',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      techs: [
        'Node.js',
        'Express.js',
        'NestJS',
        'Python',
        'Django',
        'Flask',
        'FastAPI',
        'PHP',
        'Laravel',
        'CodeIgniter',
        'Java',
        'Spring Boot',
        'C#',
        'ASP.NET Core',
        'Go',
        'Rust',
        'GraphQL',
        'REST APIs',
      ],
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      color: 'from-green-500 to-emerald-500',
      techs: [
        'React Native',
        'Flutter',
        'Swift',
        'SwiftUI',
        'Kotlin',
        'Jetpack Compose',
        'Xamarin',
        'Ionic',
        'Expo',
        'NativeScript',
      ],
    },
    {
      title: 'Database',
      icon: Database,
      color: 'from-orange-500 to-red-500',
      techs: [
        'PostgreSQL',
        'MySQL',
        'MariaDB',
        'MongoDB',
        'Redis',
        'Firebase',
        'Supabase',
        'SQLite',
        'SQL Server',
        'Oracle Database',
        'DynamoDB',
        'Elasticsearch',
        'Cassandra',
        'Neo4j',
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-indigo-500 to-blue-500',
      techs: [
        'AWS',
        'Microsoft Azure',
        'Google Cloud Platform',
        'DigitalOcean',
        'Cloudflare',
        'Vercel',
        'Netlify',
        'Docker',
        'Kubernetes',
        'Jenkins',
        'GitHub Actions',
        'GitLab CI/CD',
        'Terraform',
        'Nginx',
        'Apache',
        'Load Balancing',
      ],
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-yellow-500 to-orange-500',
      techs: [
        'OpenAI',
        'ChatGPT',
        'LangChain',
        'LangGraph',
        'CrewAI',
        'TensorFlow',
        'PyTorch',
        'Scikit-learn',
        'Hugging Face',
        'Llama Models',
        'Mistral AI',
        'RAG Systems',
        'Pinecone',
        'Weaviate',
        'ChromaDB',
        'Deep Learning',
        'NLP',
        'Computer Vision',
      ],
    },
    {
      title: 'Integration & APIs',
      icon: GitBranch,
      color: 'from-teal-500 to-cyan-500',
      techs: [
        'Zapier',
        'Make.com',
        'n8n',
        'Power Automate',
        'REST APIs',
        'GraphQL',
        'Webhooks',
        'Stripe',
        'PayPal',
        'Twilio',
        'SendGrid',
        'OAuth 2.0',
        'JWT',
      ],
    },
    {
      title: 'Security & Tools',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      techs: [
        'SSL/TLS',
        'Two-Factor Auth',
        'Encryption',
        'OWASP',
        'Penetration Testing',
        'Git',
        'GitHub',
        'GitLab',
        'Jira',
        'Figma',
        'Postman',
        'VS Code',
        'Testing Libraries',
        'Jest',
        'Cypress',
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Technology Stack
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We master 50+ cutting-edge technologies across all development domains to deliver world-class solutions
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all ${
                  index === activeCategory
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">{category.title}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Technologies Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {categories[activeCategory].techs.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className={`relative group p-4 rounded-xl bg-gradient-to-br ${categories[activeCategory].color} bg-opacity-5 border border-gray-200 hover:border-current hover:shadow-lg transition-all cursor-pointer overflow-hidden`}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${categories[activeCategory].color} opacity-0 group-hover:opacity-10 transition-opacity`}
                />

                <div className="relative z-10 flex flex-col items-center justify-center h-24 text-center">
                  <span className="font-bold text-primary text-sm md:text-base group-hover:text-transparent bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all">
                    {tech}
                  </span>
                </div>

                {/* Tech icon effect */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-accent/20 to-transparent rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform" />
              </motion.div>
            ))}
          </div>

          {/* Total tech count */}
          <div className="mt-8 text-center text-gray-600">
            <p>
              <span className="font-bold text-primary">
                {categories[activeCategory].techs.length}
              </span>
              {' '}
              technologies in
              {' '}
              <span className="font-bold text-primary">
                {categories[activeCategory].title}
              </span>
            </p>
          </div>
        </motion.div>

        {/* Tech count summary */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full font-bold">
            Master of 50+ Technologies
          </div>
        </motion.div>
      </div>
    </section>
  );
}
