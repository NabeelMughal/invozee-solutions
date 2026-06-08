import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Target, Zap } from 'lucide-react';
import { ScrollAnimate, ScrollAnimateStagger } from '@/components/scroll-animate';

const industriesData = {
  'healthcare': {
    title: 'Healthcare Software Solutions',
    subtitle: 'Transforming Patient Care with Technology',
    description: 'Advanced software solutions designed for modern healthcare providers, improving patient outcomes and operational efficiency.',
    hero: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop',
    challenges: [
      'Patient data security and HIPAA compliance',
      'Interoperability between healthcare systems',
      'Appointment scheduling and patient management',
      'Electronic health records (EHR) integration',
      'Telemedicine platform requirements',
    ],
    solutions: [
      { title: 'EHR Systems', description: 'Secure, compliant electronic health records' },
      { title: 'Telemedicine Platforms', description: 'Remote patient consultation solutions' },
      { title: 'Patient Portals', description: 'Patient-facing health management tools' },
      { title: 'Healthcare Analytics', description: 'Data-driven insights for providers' },
    ],
    caseStudies: 'SugarMD - HealthCare eCommerce Platform',
    metrics: [
      { value: '99.9%', label: 'System Uptime' },
      { value: '100%', label: 'HIPAA Compliant' },
      { value: '500K+', label: 'Patient Records' },
    ],
  },
  'finance-banking': {
    title: 'FinTech & Banking Solutions',
    subtitle: 'Secure Financial Technology for Modern Banking',
    description: 'Robust financial software solutions with enterprise-grade security and compliance for banks and financial institutions.',
    hero: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=600&fit=crop',
    challenges: [
      'Regulatory compliance (PCI-DSS, SOX)',
      'Fraud detection and prevention',
      'Payment processing integration',
      'Legacy system modernization',
      'Real-time transaction processing',
    ],
    solutions: [
      { title: 'Payment Gateways', description: 'Secure payment processing solutions' },
      { title: 'Digital Wallets', description: 'Mobile-first payment platforms' },
      { title: 'Risk Management', description: 'Advanced fraud detection systems' },
      { title: 'Core Banking Systems', description: 'Scalable banking infrastructure' },
    ],
    caseStudies: 'Multiple fintech clients with millions in transactions',
    metrics: [
      { value: '$10B+', label: 'Transaction Volume' },
      { value: '99.99%', label: 'Uptime' },
      { value: '100%', label: 'Security Certified' },
    ],
  },
  'education': {
    title: 'EdTech Solutions',
    subtitle: 'Empowering Education Through Technology',
    description: 'Learning management systems and educational platforms that enhance student engagement and learning outcomes.',
    hero: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=600&fit=crop',
    challenges: [
      'Hybrid learning environment management',
      'Student engagement and retention',
      'Content delivery and assessment tools',
      'Parent-teacher communication',
      'Scalability for institutions',
    ],
    solutions: [
      { title: 'Learning Management Systems', description: 'Complete course and student management' },
      { title: 'Virtual Classrooms', description: 'Interactive online learning platforms' },
      { title: 'Assessment Tools', description: 'Automated testing and grading' },
      { title: 'Student Analytics', description: 'Performance tracking and insights' },
    ],
    caseStudies: 'Educational institutions with thousands of users',
    metrics: [
      { value: '10K+', label: 'Students' },
      { value: '95%', label: 'User Engagement' },
      { value: '98%', label: 'System Availability' },
    ],
  },
  'ecommerce': {
    title: 'E-Commerce & Retail Solutions',
    subtitle: 'Digital Storefronts That Drive Sales',
    description: 'Feature-rich e-commerce platforms designed to maximize conversions and streamline online retail operations.',
    hero: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=600&fit=crop',
    challenges: [
      'Cart abandonment and conversion optimization',
      'Inventory management across channels',
      'Payment and shipping integration',
      'Personalization at scale',
      'Mobile shopping experience',
    ],
    solutions: [
      { title: 'Storefront Development', description: 'Beautiful, conversion-focused stores' },
      { title: 'Inventory Systems', description: 'Real-time stock management' },
      { title: 'Personalization Engine', description: 'AI-driven product recommendations' },
      { title: 'Order Management', description: 'End-to-end order processing' },
    ],
    caseStudies: 'Multiple e-commerce platforms with millions in annual revenue',
    metrics: [
      { value: '$50M+', label: 'Annual Revenue' },
      { value: '25%', label: 'Conversion Rate Improvement' },
      { value: '99.95%', label: 'Uptime' },
    ],
  },
  'real-estate': {
    title: 'Real Estate Technology',
    subtitle: 'Digital Solutions for Property Management',
    description: 'Comprehensive real estate platforms from property listings to tenant management and analytics.',
    hero: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop',
    challenges: [
      'Property listing management',
      'Virtual tours and 3D visualization',
      'Tenant screening and onboarding',
      'Lease management and renewals',
      'Maintenance request handling',
    ],
    solutions: [
      { title: 'Listing Platforms', description: 'Advanced property management' },
      { title: 'Virtual Tours', description: '3D and VR property tours' },
      { title: 'Tenant Portals', description: 'Lease and maintenance management' },
      { title: 'Analytics & Reporting', description: 'Property performance insights' },
    ],
    caseStudies: 'Real estate firms managing thousands of properties',
    metrics: [
      { value: '5000+', label: 'Properties Managed' },
      { value: '90%', label: 'Faster Leasing' },
      { value: '99.9%', label: 'System Uptime' },
    ],
  },
  'manufacturing': {
    title: 'Manufacturing & IoT Solutions',
    subtitle: 'Smart Manufacturing for Industry 4.0',
    description: 'IoT sensors, real-time monitoring, and analytics solutions for modern manufacturing facilities.',
    hero: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop',
    challenges: [
      'Production line monitoring',
      'Equipment predictive maintenance',
      'Supply chain visibility',
      'Quality control and compliance',
      'Data integration from multiple sources',
    ],
    solutions: [
      { title: 'IoT Monitoring', description: 'Real-time equipment tracking' },
      { title: 'Predictive Maintenance', description: 'AI-powered maintenance scheduling' },
      { title: 'Supply Chain Management', description: 'End-to-end visibility' },
      { title: 'Quality Management', description: 'Compliance and quality tracking' },
    ],
    caseStudies: 'Manufacturing plants improving efficiency by 30%+',
    metrics: [
      { value: '30%', label: 'Efficiency Gain' },
      { value: '99.5%', label: 'Uptime' },
      { value: '50%', label: 'Maintenance Cost Reduction' },
    ],
  },
  'logistics': {
    title: 'Logistics & Supply Chain Solutions',
    subtitle: 'Optimize Every Step of Your Supply Chain',
    description: 'Real-time tracking, route optimization, and supply chain visibility solutions for logistics companies.',
    hero: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=600&fit=crop',
    challenges: [
      'Real-time shipment tracking',
      'Route optimization and fuel efficiency',
      'Warehouse management',
      'Last-mile delivery optimization',
      'Driver management and safety',
    ],
    solutions: [
      { title: 'Fleet Management', description: 'GPS tracking and vehicle management' },
      { title: 'Route Optimization', description: 'AI-powered route planning' },
      { title: 'Warehouse Systems', description: 'Inventory and fulfillment management' },
      { title: 'Driver Portal', description: 'Mobile app for drivers' },
    ],
    caseStudies: 'Onfleet - Fleet & Delivery Management',
    metrics: [
      { value: '20%', label: 'Cost Reduction' },
      { value: '99.8%', label: 'Delivery Success' },
      { value: '1000+', label: 'Vehicles Tracked' },
    ],
  },
  'travel-hospitality': {
    title: 'Travel & Hospitality Software',
    subtitle: 'Guest Experience Excellence',
    description: 'Booking systems, property management, and guest engagement platforms for travel and hospitality businesses.',
    hero: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=600&fit=crop',
    challenges: [
      'Multi-channel booking management',
      'Guest experience personalization',
      'Revenue management optimization',
      'Property management integration',
      'Staff scheduling and management',
    ],
    solutions: [
      { title: 'Booking Platforms', description: 'Multi-channel reservation systems' },
      { title: 'PMS Systems', description: 'Property management solutions' },
      { title: 'Guest Experience', description: 'Personalized guest journeys' },
      { title: 'Analytics', description: 'Revenue and occupancy insights' },
    ],
    caseStudies: 'Hospitality businesses with global operations',
    metrics: [
      { value: '95%', label: 'Occupancy Rate' },
      { value: '4.8/5', label: 'Guest Rating' },
      { value: '1M+', label: 'Annual Bookings' },
    ],
  },
  'retail': {
    title: 'Retail & Point of Sale Solutions',
    subtitle: 'Modern POS and Retail Management',
    description: 'Complete retail solutions from POS systems to inventory and customer relationship management.',
    hero: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop',
    challenges: [
      'Inventory across multiple locations',
      'Omnichannel retail experience',
      'Customer loyalty programs',
      'Sales analytics and reporting',
      'Staff management and training',
    ],
    solutions: [
      { title: 'POS Systems', description: 'Modern point of sale software' },
      { title: 'Inventory Management', description: 'Real-time stock tracking' },
      { title: 'Customer Management', description: 'Loyalty and engagement tools' },
      { title: 'Analytics', description: 'Sales insights and reporting' },
    ],
    caseStudies: 'Multi-location retail chains',
    metrics: [
      { value: '40%', label: 'Sales Increase' },
      { value: '50%', label: 'Faster Checkout' },
      { value: '100+', label: 'Store Locations' },
    ],
  },
  'technology-saas': {
    title: 'Technology & SaaS Solutions',
    subtitle: 'Building Scalable SaaS Platforms',
    description: 'Custom software development for technology companies and SaaS businesses requiring specialized solutions.',
    hero: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=600&fit=crop',
    challenges: [
      'Scalability and performance',
      'Multi-tenancy architecture',
      'API development and integrations',
      'Security and compliance',
      'Developer tools and SDKs',
    ],
    solutions: [
      { title: 'SaaS Platforms', description: 'Scalable cloud applications' },
      { title: 'API Development', description: 'RESTful and GraphQL APIs' },
      { title: 'Integrations', description: 'Third-party platform connections' },
      { title: 'Developer Tools', description: 'SDKs and documentation' },
    ],
    caseStudies: 'Buildertrend - Construction Management SaaS',
    metrics: [
      { value: '100K+', label: 'Active Users' },
      { value: '$10M+', label: 'ARR' },
      { value: '99.99%', label: 'Uptime SLA' },
    ],
  },
};

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const resolvedParams = await params;
  const industry = industriesData[resolvedParams.slug as keyof typeof industriesData];

  if (!industry) {
    return {
      title: 'Industry Not Found | Invozee',
    };
  }

  return {
    title: `${industry.title} | Invozee Solutions`,
    description: industry.description,
    openGraph: {
      title: industry.title,
      description: industry.description,
      images: [industry.hero],
    },
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const industry = industriesData[resolvedParams.slug as keyof typeof industriesData];

  if (!industry) {
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
                Industries We Serve
              </span>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-[#0d2064] dark:text-white mt-4 mb-4 leading-tight">
                {industry.title}
              </h1>
              <p className="text-lg md:text-xl text-[#f9ab12] font-semibold mb-6">{industry.subtitle}</p>
              <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-8 leading-relaxed max-w-2xl">
                {industry.description}
              </p>
              <Link href="/contact">
                <button className="px-8 py-4 bg-[#0d2064] text-white dark:bg-[#f9ab12] dark:text-[#0d2064] rounded-full font-bold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer">
                  Schedule Consultation <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
            <div className="flex-1">
              <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800">
                <img
                  src={industry.hero}
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-50/20 to-white dark:from-[#0f223d]/10 dark:to-[#0d1929] border-y border-gray-100 dark:border-gray-800/60">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {industry.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="group text-center p-6 bg-white dark:bg-[#1a2a3a] border border-gray-100 dark:border-gray-800/80 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl font-extrabold text-[#f9ab12] mb-2 group-hover:scale-105 transition-transform duration-300">{metric.value}</div>
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-24 px-4 bg-white dark:bg-[#0d1929]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-[#f9ab12] uppercase tracking-widest bg-[#f9ab12]/10 px-4 py-1.5 rounded-full border border-[#f9ab12]/20">
              Challenges
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0d2064] dark:text-white mt-4 mb-4">
              Industry Challenges We Address
            </h2>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Overcoming core complexities with tailored digital strategy and enterprise engineering.
            </p>
          </div>
          <ScrollAnimateStagger className="grid md:grid-cols-2 gap-6">
            {industry.challenges.map((challenge, idx) => (
              <div
                key={idx}
                className="group flex gap-4 p-8 bg-gradient-to-br from-white to-blue-50/20 dark:from-[#1a2a3a] dark:to-[#1a2a3a]/80 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-[#f9ab12] dark:hover:border-[#f9ab12] shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#f9ab12]/10 flex items-center justify-center flex-shrink-0 text-[#f9ab12] group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-5 h-5" />
                </div>
                <p className="text-base font-semibold text-[#0d2064] dark:text-gray-300 leading-relaxed group-hover:text-[#f9ab12] transition-colors duration-200">
                  {challenge}
                </p>
              </div>
            ))}
          </ScrollAnimateStagger>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-blue-50/20 dark:from-[#0d1929] dark:to-[#0f223d]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-[#f9ab12] uppercase tracking-widest bg-[#f9ab12]/10 px-4 py-1.5 rounded-full border border-[#f9ab12]/20">
              Solutions
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0d2064] dark:text-white mt-4 mb-4">
              Our Tailored Solutions
            </h2>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Innovative digital assets designed specifically for the complexities of your industry.
            </p>
          </div>
          <ScrollAnimateStagger className="grid md:grid-cols-2 gap-6">
            {industry.solutions.map((solution, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-white dark:bg-[#1a2a3a] border border-gray-100 dark:border-gray-800 hover:border-[#f9ab12] dark:hover:border-[#f9ab12] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f9ab12]/10 flex items-center justify-center flex-shrink-0 text-[#f9ab12] group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#0d2064] dark:text-white mb-2 group-hover:text-[#f9ab12] transition-colors duration-200">{solution.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{solution.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </ScrollAnimateStagger>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 px-4 bg-white dark:bg-[#0d1929]">
        <div className="max-w-5xl mx-auto">
          <ScrollAnimate className="bg-gradient-to-br from-[#0d2064] to-[#0a1435] dark:from-[#1a2a3a] dark:to-[#0f223d]/40 rounded-3xl p-12 md:p-16 text-white border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#f9ab12]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <TrendingUp className="w-12 h-12 text-[#f9ab12] mb-6" />
              <span className="text-xs font-bold text-[#f9ab12] uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full border border-white/10">
                Success Story
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold mt-6 mb-4">{industry.caseStudies}</h2>
              <p className="text-base md:text-lg mb-8 opacity-90 max-w-3xl leading-relaxed">
                Discover how we partnered to design, build, and deploy high-performance tech to drive real impact.
              </p>
              <Link href="/portfolio">
                <button className="px-8 py-4 bg-[#f9ab12] text-[#0d2064] font-bold rounded-full hover:shadow-xl hover:bg-white hover:text-[#0d2064] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer">
                  View Case Studies
                </button>
              </Link>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-blue-50/20 dark:from-[#0d1929] dark:to-[#0f223d]/30">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimate>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0d2064] dark:text-white mb-4">
              Ready to Modernize Your Solutions?
            </h2>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Our team of experts is ready to discuss how we can help your business thrive in the digital age.
            </p>
            <Link href="/contact">
              <button className="px-8 py-4 bg-[#0d2064] text-white dark:bg-[#f9ab12] dark:text-[#0d2064] rounded-full font-bold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer">
                Get In Touch Today
              </button>
            </Link>
          </ScrollAnimate>
        </div>
      </section>

      <Footer />
    </main>
  );
}
