import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { ScrollAnimate, ScrollAnimateStagger } from '@/components/scroll-animate';

const servicesData = {
  'web-development': {
    title: 'Web Development Services',
    subtitle: 'Custom Websites, E-Commerce, and Web Applications',
    description: 'Build powerful, scalable web solutions tailored to your business needs.',
    hero: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop',
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
    hero: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop',
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
    hero: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop',
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
    hero: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=1200&h=600&fit=crop',
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
      <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-gradient-to-b from-white to-blue-50/20 dark:from-[#0d1929] dark:to-[#0f223d]/30 transition-colors duration-500">
        {/* Decorative Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.08] bg-gradient-to-br from-[#f9ab12] to-[#0d2064] animate-pulse duration-[8000ms]" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.06] bg-gradient-to-tr from-[#0d2064] to-[#f9ab12] animate-pulse duration-[12000ms]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="text-xs font-semibold text-[#f9ab12] uppercase tracking-widest bg-[#f9ab12]/10 px-4 py-1.5 rounded-full border border-[#f9ab12]/20">
                Services
              </span>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-[#0d2064] dark:text-white mt-4 mb-4 leading-tight">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-[#f9ab12] font-semibold mb-6">{service.subtitle}</p>
              <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-8 leading-relaxed max-w-2xl">
                {service.description}
              </p>
              <Link href="/contact">
                <button className="px-8 py-4 bg-[#0d2064] text-white dark:bg-[#f9ab12] dark:text-[#0d2064] rounded-full font-bold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer">
                  Get Started <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
            <div className="flex-1">
              <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800">
                <img
                  src={service.hero}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-white dark:bg-[#0d1929]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-[#f9ab12] uppercase tracking-widest bg-[#f9ab12]/10 px-4 py-1.5 rounded-full border border-[#f9ab12]/20">
              Benefits
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0d2064] dark:text-white mt-4 mb-4">
              Why Choose Our {service.title.split(' ')[0]}
            </h2>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              We deliver enterprise-grade performance and results customized for your business needs.
            </p>
          </div>
          <ScrollAnimateStagger className="grid md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="group flex gap-4 p-8 bg-gradient-to-br from-white to-blue-50/20 dark:from-[#1a2a3a] dark:to-[#1a2a3a]/80 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-[#f9ab12] dark:hover:border-[#f9ab12] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f9ab12]/10 flex items-center justify-center flex-shrink-0 text-[#f9ab12] group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#0d2064] dark:text-white mb-2 group-hover:text-[#f9ab12] transition-colors duration-200">{benefit.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </ScrollAnimateStagger>
        </div>
      </section>

      {/* Subcategories Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-blue-50/20 to-white dark:from-[#0f223d]/30 dark:to-[#0d1929]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-[#f9ab12] uppercase tracking-widest bg-[#f9ab12]/10 px-4 py-1.5 rounded-full border border-[#f9ab12]/20">
              Solutions
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0d2064] dark:text-white mt-4 mb-4">
              Our {service.title.split(' ')[0]} Solutions
            </h2>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Tailored software solutions engineered for maximum impact and seamless integration.
            </p>
          </div>
          <ScrollAnimateStagger className="grid md:grid-cols-2 gap-6">
            {service.subcategories.map((sub, idx) => (
              <div
                key={idx}
                className="group p-8 bg-white dark:bg-[#1a2a3a] rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-[#f9ab12] dark:hover:border-[#f9ab12] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="font-bold text-xl text-[#0d2064] dark:text-white mb-3 group-hover:text-[#f9ab12] transition-colors duration-200">{sub.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">{sub.description}</p>
                <Link
                  href="/contact"
                  className="text-[#f9ab12] font-semibold hover:underline inline-flex items-center gap-2 group"
                >
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </ScrollAnimateStagger>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 px-4 bg-white dark:bg-[#0d1929]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-[#f9ab12] uppercase tracking-widest bg-[#f9ab12]/10 px-4 py-1.5 rounded-full border border-[#f9ab12]/20">
              Our Stack
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0d2064] dark:text-white mt-4 mb-4">
              Technologies We Use
            </h2>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              We leverage cutting-edge technologies to build scalable, secure, and modern digital solutions.
            </p>
          </div>
          <ScrollAnimate className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {service.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-5 py-2.5 bg-blue-50/80 dark:bg-[#1a2a3a] text-[#0d2064] dark:text-gray-300 text-sm font-semibold rounded-full border border-blue-100 dark:border-gray-800 hover:bg-[#f9ab12]/20 hover:border-[#f9ab12] hover:text-[#0d2064] dark:hover:text-white transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </ScrollAnimate>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-blue-50/20 dark:from-[#0d1929] dark:to-[#0f223d]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
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
          <ScrollAnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {service.process.map((item, idx) => (
              <div
                key={idx}
                className="group h-full p-6 bg-white dark:bg-[#1a2a3a] rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-[#f9ab12] dark:hover:border-[#f9ab12] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f9ab12] to-orange-500 flex items-center justify-center mx-auto mb-5 text-white font-extrabold text-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                  {idx + 1}
                </div>
                <h3 className="text-base font-bold text-[#0d2064] dark:text-white mb-2 group-hover:text-[#f9ab12] transition-colors duration-200">{item.step}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </ScrollAnimateStagger>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-white dark:bg-[#0d1929]">
        <div className="max-w-5xl mx-auto">
          <ScrollAnimate className="text-center bg-gradient-to-br from-[#0d2064] to-[#0a1435] dark:from-[#1a2a3a] dark:to-[#0f223d]/40 rounded-3xl p-12 md:p-16 text-white border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#f9ab12]/10 rounded-full blur-3xl pointer-events-none" />
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 relative z-10">
              Ready to Transform Your Business?
            </h2>
            <p className="text-base md:text-lg mb-8 opacity-90 max-w-2xl mx-auto relative z-10">
              Let&apos;s discuss how our {service.title.toLowerCase()} can help you achieve your goals.
            </p>
            <Link href="/contact" className="relative z-10 inline-block">
              <button className="px-8 py-4 bg-[#f9ab12] text-[#0d2064] font-bold rounded-full hover:shadow-xl hover:bg-white hover:text-[#0d2064] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer">
                Schedule a Consultation
              </button>
            </Link>
          </ScrollAnimate>
        </div>
      </section>

      <Footer />
    </main>
  );
}
