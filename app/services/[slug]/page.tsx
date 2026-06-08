import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Code2, Zap } from 'lucide-react';

const servicesData = {
  'web-development': {
    title: 'Web Development Services',
    subtitle: 'Custom Websites, E-Commerce, and Web Applications',
    description: 'Build powerful, scalable web solutions tailored to your business needs.',
    hero: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop',
    benefits: [
      { title: 'Responsive Design', description: 'Works flawlessly across all devices and screen sizes' },
      { title: 'High Performance', description: 'Optimized for speed, SEO, and user engagement' },
      { title: 'Scalability', description: 'Built to grow with your business requirements' },
      { title: 'Security First', description: 'Enterprise-grade security and data protection' },
    ],
    subcategories: [
      { name: 'Custom Website Development', description: 'Bespoke websites designed for your unique brand' },
      { name: 'Corporate Websites', description: 'Professional presence for established enterprises' },
      { name: 'E-Commerce Solutions', description: 'Complete online stores with payment integration' },
      { name: 'Web Applications', description: 'Feature-rich applications for complex business needs' },
    ],
    technologies: ['React', 'Next.js', 'Vue.js', 'Node.js', 'PostgreSQL', 'AWS', 'Vercel', 'Docker'],
    process: [
      { step: 'Discovery', description: 'Understanding your goals and requirements' },
      { step: 'Design', description: 'Creating mockups and user experience flows' },
      { step: 'Development', description: 'Building your solution with best practices' },
      { step: 'Testing', description: 'Comprehensive QA and security testing' },
      { step: 'Deployment', description: 'Smooth launch with ongoing support' },
    ],
  },
  'mobile-app-development': {
    title: 'Mobile App Development',
    subtitle: 'iOS, Android, and Cross-Platform Solutions',
    description: 'Create engaging mobile experiences that drive user engagement and loyalty.',
    hero: 'https://images.unsplash.com/photo-1512941691920-25e94c68af70?w=1200&h=600&fit=crop',
    benefits: [
      { title: 'Native Performance', description: 'Optimized for each platform' },
      { title: 'Cross-Platform Reach', description: 'Deploy to iOS and Android simultaneously' },
      { title: 'User-Centric Design', description: 'Intuitive interfaces that users love' },
      { title: 'Continuous Updates', description: 'Regular maintenance and feature additions' },
    ],
    subcategories: [
      { name: 'iOS Development', description: 'Apps for Apple devices with Swift' },
      { name: 'Android Development', description: 'Native Android apps with Kotlin' },
      { name: 'Cross-Platform Apps', description: 'Single codebase for multiple platforms' },
      { name: 'App Modernization', description: 'Upgrade legacy applications' },
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS Amplify'],
    process: [
      { step: 'Market Research', description: 'Analyzing market and competitor apps' },
      { step: 'Wireframing', description: 'Creating app structure and flows' },
      { step: 'Development', description: 'Building with native or cross-platform tools' },
      { step: 'Testing', description: 'Rigorous device and scenario testing' },
      { step: 'Launch & Support', description: 'App store deployment and updates' },
    ],
  },
  'ui-ux-design': {
    title: 'UI/UX Design Services',
    subtitle: 'Beautiful, Intuitive User Experiences',
    description: 'Design solutions that are not only beautiful but also highly functional.',
    hero: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop',
    benefits: [
      { title: 'User-Centered Design', description: 'Every decision backed by research' },
      { title: 'Brand Consistency', description: 'Cohesive design across all touchpoints' },
      { title: 'Accessibility', description: 'Inclusive design for all users' },
      { title: 'Conversion Focused', description: 'Designs that drive business results' },
    ],
    subcategories: [
      { name: 'UI Design', description: 'Visual design and component systems' },
      { name: 'UX Research', description: 'User interviews and behavioral analysis' },
      { name: 'Wireframing', description: 'Low-fidelity layouts and flows' },
      { name: 'Prototyping', description: 'Interactive prototypes for testing' },
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Framer', 'Webflow'],
    process: [
      { step: 'Research', description: 'Understanding users and their needs' },
      { step: 'Ideation', description: 'Brainstorming design solutions' },
      { step: 'Wireframing', description: 'Creating structural layouts' },
      { step: 'Design', description: 'High-fidelity visual design' },
      { step: 'Handoff', description: 'Design system and developer handoff' },
    ],
  },
  'digital-marketing': {
    title: 'Digital Marketing Services',
    subtitle: 'SEO, SEM, and Content Marketing',
    description: 'Grow your online presence and reach your target audience effectively.',
    hero: 'https://images.unsplash.com/photo-1460925895917-adf4e7484daa?w=1200&h=600&fit=crop',
    benefits: [
      { title: 'Increased Visibility', description: 'Higher search rankings and traffic' },
      { title: 'Targeted Reach', description: 'Connect with your ideal customers' },
      { title: 'ROI Focused', description: 'Measurable results and transparent reporting' },
      { title: 'Data-Driven', description: 'Decisions based on analytics and insights' },
    ],
    subcategories: [
      { name: 'SEO Optimization', description: 'Organic search visibility' },
      { name: 'Social Media Marketing', description: 'Engage on platforms your audience uses' },
      { name: 'PPC Advertising', description: 'High-converting paid campaigns' },
      { name: 'Content Marketing', description: 'Valuable content that attracts customers' },
    ],
    technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Google Ads', 'Facebook Ads'],
    process: [
      { step: 'Audit', description: 'Analyzing current performance' },
      { step: 'Strategy', description: 'Creating comprehensive marketing plan' },
      { step: 'Implementation', description: 'Executing campaigns and optimizations' },
      { step: 'Monitoring', description: 'Tracking metrics and ROI' },
      { step: 'Optimization', description: 'Continuous improvement based on data' },
    ],
  },
  'cloud-devops': {
    title: 'Cloud & DevOps Services',
    subtitle: 'Infrastructure, Migration, and Automation',
    description: 'Build robust, scalable cloud infrastructure for your applications.',
    hero: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop',
    benefits: [
      { title: 'High Availability', description: 'Reliable systems with minimal downtime' },
      { title: 'Cost Optimization', description: 'Efficient resource utilization' },
      { title: 'Security', description: 'Enterprise-grade security and compliance' },
      { title: 'Scalability', description: 'Auto-scaling based on demand' },
    ],
    subcategories: [
      { name: 'Cloud Migration', description: 'Seamless move to cloud platforms' },
      { name: 'Infrastructure Management', description: 'Managed cloud infrastructure' },
      { name: 'CI/CD Solutions', description: 'Automated deployment pipelines' },
      { name: 'Security Management', description: 'Cloud security best practices' },
    ],
    technologies: ['AWS', 'Google Cloud', 'Azure', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins'],
    process: [
      { step: 'Assessment', description: 'Current infrastructure analysis' },
      { step: 'Planning', description: 'Migration or optimization strategy' },
      { step: 'Setup', description: 'Infrastructure provisioning' },
      { step: 'Automation', description: 'CI/CD pipeline creation' },
      { step: 'Operations', description: 'Monitoring and maintenance' },
    ],
  },
  'ai-automation': {
    title: 'AI & Automation Services',
    subtitle: 'ChatBots, Machine Learning, and Process Automation',
    description: 'Leverage AI to automate processes and create intelligent solutions.',
    hero: 'https://images.unsplash.com/photo-1677442d019cecf8571637a7eea93b5cff435cb13?w=1200&h=600&fit=crop',
    benefits: [
      { title: 'Efficiency', description: 'Reduce manual tasks and operational costs' },
      { title: 'Scalability', description: 'Automate without increasing headcount' },
      { title: 'Intelligence', description: 'Data-driven decision making' },
      { title: 'Innovation', description: 'Stay ahead with cutting-edge AI' },
    ],
    subcategories: [
      { name: 'AI Chatbots', description: '24/7 customer support automation' },
      { name: 'Business Automation', description: 'Streamline business processes' },
      { name: 'AI Integrations', description: 'Connect AI to existing systems' },
      { name: 'Machine Learning Solutions', description: 'Custom ML models and algorithms' },
    ],
    technologies: ['OpenAI', 'TensorFlow', 'PyTorch', 'Python', 'LangChain', 'Hugging Face'],
    process: [
      { step: 'Problem Definition', description: 'Identifying automation opportunities' },
      { step: 'Data Preparation', description: 'Collecting and preparing training data' },
      { step: 'Model Development', description: 'Building and training AI models' },
      { step: 'Integration', description: 'Connecting to business systems' },
      { step: 'Optimization', description: 'Continuous model improvement' },
    ],
  },
};

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.slug as keyof typeof servicesData];

  if (!service) {
    return {
      title: 'Service Not Found | Invozee',
    };
  }

  return {
    title: `${service.title} | Invozee Solutions`,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      images: [service.hero],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.slug as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-b from-slate-50 dark:from-slate-900/50 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">{service.title}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">{service.subtitle}</p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">{service.description}</p>
              <Link href="/contact">
                <button className="px-8 py-3 bg-[#0d2064] text-white dark:bg-[#f9ab12] dark:text-[#0d2064] rounded-full font-bold hover:shadow-lg transition-all">
                  Get Started <ArrowRight className="inline ml-2 w-5 h-5" />
                </button>
              </Link>
            </div>
            <div className="flex-1">
              <img src={service.hero} alt={service.title} className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our {service.title}?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-[#f9ab12] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subcategories Section */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our {service.title.split(' ')[0]} Solutions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {service.subcategories.map((sub, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg mb-2">{sub.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{sub.description}</p>
                <Link href="/contact" className="text-[#f9ab12] font-semibold hover:underline inline-flex items-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech, idx) => (
              <span key={idx} className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-300 rounded-full font-semibold">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Development Process</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {service.process.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#f9ab12] text-[#0d2064] font-bold flex items-center justify-center mx-auto mb-4 text-lg">
                  {idx + 1}
                </div>
                <h3 className="font-bold mb-2">{item.step}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600 to-blue-900 dark:from-blue-900 dark:to-blue-700 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 opacity-90">Let&apos;s discuss how our {service.title.toLowerCase()} can help you achieve your goals.</p>
          <Link href="/contact">
            <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-all">
              Schedule a Consultation
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
