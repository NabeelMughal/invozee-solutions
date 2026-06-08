import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Target, Zap } from 'lucide-react';

const industriesData = {
  'healthcare': {
    title: 'Healthcare Software Solutions',
    subtitle: 'Transforming Patient Care with Technology',
    description: 'Advanced software solutions designed for modern healthcare providers, improving patient outcomes and operational efficiency.',
    hero: 'https://images.unsplash.com/photo-1576091160550-112173f7f869?w=1200&h=600&fit=crop',
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
    hero: 'https://images.unsplash.com/photo-1563986768711-b3bcc596a3f7?w=1200&h=600&fit=crop',
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
    hero: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&h=600&fit=crop',
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
    hero: 'https://images.unsplash.com/photo-1563062407-c3a5c742e553?w=1200&h=600&fit=crop',
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
    hero: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop',
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
    hero: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1200&h=600&fit=crop',
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
    hero: 'https://images.unsplash.com/photo-1586420560841-e0caf5d03842?w=1200&h=600&fit=crop',
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
    hero: 'https://images.unsplash.com/photo-1551632786-de41ec4a305b?w=1200&h=600&fit=crop',
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
    hero: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200&h=600&fit=crop',
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
    hero: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop',
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
      <section className="relative pt-24 pb-16 bg-gradient-to-b from-slate-50 dark:from-slate-900/50 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">{industry.title}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">{industry.subtitle}</p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">{industry.description}</p>
              <Link href="/contact">
                <button className="px-8 py-3 bg-[#0d2064] text-white dark:bg-[#f9ab12] dark:text-[#0d2064] rounded-full font-bold hover:shadow-lg transition-all">
                  Schedule Consultation <ArrowRight className="inline ml-2 w-5 h-5" />
                </button>
              </Link>
            </div>
            <div className="flex-1">
              <img src={industry.hero} alt={industry.title} className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 px-4 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {industry.metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-[#f9ab12] mb-2">{metric.value}</div>
                <p className="text-gray-600 dark:text-gray-400">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Industry Challenges We Address</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {industry.challenges.map((challenge, idx) => (
              <div key={idx} className="flex gap-4 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-gray-200 dark:border-slate-700">
                <Target className="w-6 h-6 text-[#f9ab12] flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Tailored Solutions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {industry.solutions.map((solution, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-[#f9ab12] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">{solution.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{solution.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-900 dark:from-blue-900 dark:to-blue-700 rounded-2xl p-12 text-white">
          <TrendingUp className="w-12 h-12 mb-4" />
          <h2 className="text-3xl font-bold mb-4">Success Story</h2>
          <p className="text-lg mb-4 opacity-90">{industry.caseStudies}</p>
          <p className="mb-6 opacity-80">See how we helped similar businesses in this industry achieve their goals and overcome challenges.</p>
          <Link href="/portfolio">
            <button className="px-6 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-all">
              View Case Studies
            </button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Modernize Your {industry.title.split(' ')[0]} Solutions?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">Our team of experts is ready to discuss how we can help your business thrive in the digital age.</p>
          <Link href="/contact">
            <button className="px-8 py-3 bg-[#0d2064] text-white dark:bg-[#f9ab12] dark:text-[#0d2064] rounded-full font-bold hover:shadow-lg transition-all">
              Get In Touch Today
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
