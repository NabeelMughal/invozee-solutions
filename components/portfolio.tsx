'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ExternalLink, Search, X, Code, Briefcase, Eye } from 'lucide-react';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  category: string;
  industry: string;
  description: string;
  image: string;
  technologies: string[];
  languages: string[];
  frameworks: string[];
  liveUrl: string;
}

export function Portfolio({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  const projects: Project[] = [
    {
      id: 1,
      title: 'GrayVally - AI-Driven Software Solutions',
      category: 'ai',
      industry: 'AI & SaaS Platforms',
      description: 'AI-powered business growth platform combining scalable cloud backends with precision-engineered frontends. Features intelligent process automation, real-time analytics dashboards, and seamless API integrations for enterprise clients.',
      image: '/portfolio/GrayVally.png',
      technologies: ['React', 'Node.js', 'OpenAI API', 'PostgreSQL', 'AWS'],
      languages: ['TypeScript', 'JavaScript', 'SQL'],
      frameworks: ['Next.js', 'Express.js', 'Tailwind CSS'],
      liveUrl: 'https://www.grayvally.tech/',
    },
    {
      id: 2,
      title: 'Buildertrend - Construction Management SaaS',
      category: 'enterprise',
      industry: 'Enterprise & ERP Systems',
      description: 'Comprehensive cloud-based construction management platform serving over 1 million users. Features project scheduling, budget management, client communication tools, subcontractor portals, and mobile-first field reporting.',
      image: '/portfolio/Buildertrend.png',
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Stripe', 'AWS S3'],
      languages: ['TypeScript', 'JavaScript', 'C#'],
      frameworks: ['Next.js', 'Tailwind CSS', 'React Native'],
      liveUrl: 'https://buildertrend.com/',
    },
    {
      id: 3,
      title: 'Lewis Hadden - Developer Portfolio',
      category: 'web',
      industry: 'Professional Portfolios & Branding',
      description: 'Sleek, interactive developer portfolio built with modern web technologies. Showcases expertise through animated project displays, skill visualizations, live GitHub integration, and a seamless contact experience.',
      image: '/portfolio/LewisHadden.png',
      technologies: ['React', 'Three.js', 'GSAP', 'Framer Motion'],
      languages: ['JavaScript', 'HTML5', 'CSS3'],
      frameworks: ['Gatsby', 'Styled Components'],
      liveUrl: 'https://portfolio.lewishadden.com/',
    },
    {
      id: 4,
      title: 'SugarMD - HealthCare eCommerce Platform',
      category: 'web',
      industry: 'Healthcare & E-commerce',
      description: 'Doctor-formulated healthcare product platform featuring seamless Shopify integration, subscription management, telehealth appointment booking, and a personalized wellness dashboard backed by clinical expertise.',
      image: '/portfolio/SugarMD.png',
      technologies: ['Next.js', 'Prisma', 'Stripe', 'Tailwind CSS', 'Shopify'],
      languages: ['TypeScript', 'GraphQL', 'SQL'],
      frameworks: ['Next.js', 'Shopify Storefront API', 'React Query'],
      liveUrl: 'https://www.sugarmds.com/',
    },
    {
      id: 5,
      title: 'Onfleet - Fleet & Delivery Management',
      category: 'mobile',
      industry: 'Logistics & Fleet Tech',
      description: 'AI-powered last-mile delivery management platform with real-time driver tracking, automated route optimization, proof-of-delivery capture, and powerful analytics for delivery businesses of all sizes.',
      image: '/portfolio/Onfleet.png',
      technologies: ['React Native', 'Firebase', 'Node.js', 'Google Maps API'],
      languages: ['JavaScript', 'TypeScript', 'Swift', 'Kotlin'],
      frameworks: ['React Native', 'Firebase Cloud Functions', 'Expo'],
      liveUrl: 'https://onfleet.com/',
    },
    {
      id: 6,
      title: 'Gulshan Badda - Fine Dining Restaurant',
      category: 'web',
      industry: 'Hospitality & Restaurants',
      description: 'Premium fine dining restaurant website with online reservation system, digital menu management, event booking, loyalty program integration, and a POS-connected kitchen order display system.',
      image: '/portfolio/GulshanBadda.png',
      technologies: ['Next.js', 'Python', 'PostgreSQL', 'Stripe API', 'Vercel'],
      languages: ['TypeScript', 'Python', 'SQL'],
      frameworks: ['Next.js', 'Django REST Framework', 'Tailwind CSS'],
      liveUrl: 'https://restaurant-gulshan.vercel.app/',
    },
    {
      id: 7,
      title: 'Transistor - Podcast Hosting & Analytics',
      category: 'web',
      industry: 'SaaS & Media Platforms',
      description: 'Full-featured podcast hosting platform supporting unlimited shows, AI-powered episode transcription, multi-platform RSS distribution, embedded player widgets, advanced download analytics, and team collaboration tools.',
      image: '/portfolio/Transistor.png',
      technologies: ['Ruby on Rails', 'React', 'PostgreSQL', 'AWS S3', 'Redis'],
      languages: ['JavaScript', 'Ruby', 'TypeScript'],
      frameworks: ['Ruby on Rails', 'React', 'Stimulus.js'],
      liveUrl: 'https://transistor.fm/',
    },
    {
      id: 8,
      title: 'Teachable - Online Course Platform',
      category: 'web',
      industry: 'Educational Platforms',
      description: 'Creator-focused e-learning platform enabling coaches and educators to build, market, and sell online courses. Features video hosting, drip content scheduling, student progress tracking, affiliate marketing tools, and integrated payment processing.',
      image: '/portfolio/Teachable-thumb.png',
      technologies: ['React', 'Ruby on Rails', 'PostgreSQL', 'Stripe', 'Cloudflare'],
      languages: ['Ruby', 'JavaScript', 'TypeScript', 'SQL'],
      frameworks: ['Ruby on Rails', 'React', 'Tailwind CSS'],
      liveUrl: 'https://teachable.com/',
    },
    {
      id: 9,
      title: 'Robinhood - FinTech Trading Platform',
      category: 'mobile',
      industry: 'FinTech Applications',
      description: 'Commission-free investment and trading platform offering stocks, options, ETFs, and cryptocurrency trading. Built with real-time market data feeds, fractional shares, instant deposit capabilities, and a clean mobile-first interface designed for retail investors.',
      image: '/portfolio/RobinHood.png',
      technologies: ['React Native', 'Python', 'Django', 'PostgreSQL', 'Redis'],
      languages: ['Python', 'TypeScript', 'Swift', 'Kotlin', 'SQL'],
      frameworks: ['Django REST Framework', 'React Native', 'Celery'],
      liveUrl: 'https://robinhood.com/',
    },
    {
      id: 10,
      title: 'Homie - Real Estate Marketplace',
      category: 'enterprise',
      industry: 'Real Estate Platforms',
      description: 'Tech-forward real estate marketplace connecting buyers, sellers, and agents with zero commission model. Includes MLS listing integration, AI-powered property valuations, mortgage calculators, virtual tour scheduling, and document e-signing workflows.',
      image: '/portfolio/Homie.png',
      technologies: ['Next.js', 'GraphQL', 'MongoDB', 'AWS S3', 'Mapbox'],
      languages: ['TypeScript', 'GraphQL', 'JavaScript', 'SQL'],
      frameworks: ['Next.js', 'Apollo Client', 'Tailwind CSS'],
      liveUrl: 'https://homie.com/',
    },
    {
      id: 11,
      title: 'Tebra - Healthcare Management Platform',
      category: 'ai',
      industry: 'Healthcare Systems',
      description: 'Cloud-based clinical and billing management platform for independent medical practices. Features electronic health records (EHR), AI-powered medical coding suggestions, insurance eligibility verification, appointment scheduling, and patient engagement portals.',
      image: '/portfolio/Tebra.png',
      technologies: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'AWS'],
      languages: ['Python', 'TypeScript', 'SQL', 'HL7 FHIR'],
      frameworks: ['FastAPI', 'React', 'SQLAlchemy'],
      liveUrl: 'https://www.tebra.com/',
    },
    {
      id: 12,
      title: 'Faire - B2B Wholesale Marketplace',
      category: 'web',
      industry: 'E-commerce Solutions',
      description: 'AI-powered B2B wholesale platform connecting independent retailers with global brands. Features smart product recommendations, net 60-day payment terms, automated return policies, integrated inventory sync, and a built-in brand discovery engine.',
      image: '/portfolio/Faire.png',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Redis', 'Stripe Connect'],
      languages: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
      frameworks: ['Next.js', 'Express.js', 'Tailwind CSS'],
      liveUrl: 'https://www.faire.com/',
    },
    {
      id: 13,
      title: 'HubSpot CRM - Sales & Marketing Hub',
      category: 'enterprise',
      industry: 'CRM Systems',
      description: 'Enterprise-grade CRM platform with integrated marketing automation, sales pipeline management, customer service ticketing, and AI-powered lead scoring. Supports custom workflows, deep third-party integrations, and comprehensive reporting dashboards.',
      image: '/portfolio/Hubspot.png',
      technologies: ['React', 'Java', 'PostgreSQL', 'Elasticsearch', 'Kafka'],
      languages: ['Java', 'TypeScript', 'JavaScript', 'SQL'],
      frameworks: ['Spring Boot', 'React', 'GraphQL'],
      liveUrl: 'https://www.hubspot.com/',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ai', label: 'AI & Data' },
    { id: 'enterprise', label: 'Enterprise Systems' },
  ];

  const filtered = projects.filter((project) => {
    const matchesCategory = filter === 'all' || project.category === filter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.industry.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedProjects = featuredOnly ? projects.slice(0, 4) : filtered;

  return (
    <section
      id="portfolio"
      className="py-24 px-4 bg-white dark:bg-[#0d1929]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-[#f9ab12] uppercase tracking-widest bg-[#f9ab12]/10 px-4 py-1.5 rounded-full border border-[#f9ab12]/20">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0d2064] dark:text-white mt-4 mb-4">
            {featuredOnly ? 'Featured Projects' : 'Explore Our Portfolio'}
          </h2>
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            A hand-picked selection of premium digital products built for scalability, robustness, and visual elegance.
          </p>
        </div>

        {/* Search and Filter — only on full portfolio page */}
        {!featuredOnly && (
          <div className="mb-10 flex flex-col md:flex-row gap-5 justify-between items-center bg-gray-50 dark:bg-[#1a2a3a]/40 p-5 rounded-2xl border border-gray-100 dark:border-gray-800">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${filter === cat.id
                    ? 'bg-[#0d2064] text-white shadow-md shadow-[#0d2064]/10'
                    : 'bg-white dark:bg-[#0d1929] text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-72">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects or technologies..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full text-xs bg-white dark:bg-[#0d1929] border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f9ab12]/30 focus:border-[#f9ab12] transition-all"
              />
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-white dark:bg-[#1a2a3a] border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/placeholder.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-[#0d2064]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white text-[#0d2064] flex items-center justify-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <span className="text-[10px] font-bold text-[#f9ab12] uppercase tracking-wider mb-1.5">
                  {project.industry}
                </span>
                <h3 className="text-sm font-bold text-[#0d2064] dark:text-white mb-2 line-clamp-1 group-hover:text-[#f9ab12] transition-colors duration-200">
                  {project.title.split(' - ')[0]}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 line-clamp-2 leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] font-semibold bg-gray-50 dark:bg-[#0d1929] text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded border border-gray-100 dark:border-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-[9px] font-semibold bg-[#f9ab12]/10 text-[#f9ab12] px-1.5 py-0.5 rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {!featuredOnly && displayedProjects.length === 0 && (
          <div className="text-center py-20 bg-gray-50 dark:bg-[#1a2a3a]/20 border border-dashed border-gray-200 dark:border-gray-800 rounded-2xl mt-6">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              No projects found matching &quot;{searchQuery}&quot;. Try a different search term.
            </p>
          </div>
        )}

        {/* Homepage CTA */}
        {featuredOnly && (
          <div className="mt-14 text-center">
            <Link href="/portfolio">
              <button className="px-8 py-4 bg-[#0d2064] text-white rounded-full font-bold hover:shadow-lg transition-all hover:-translate-y-0.5 duration-300">
                View All Projects
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal */}
            <div className="relative w-full max-w-2xl bg-white dark:bg-[#1a2a3a] border border-gray-100 dark:border-gray-800 rounded-3xl overflow-hidden shadow-2xl z-10 h-[90vh] flex flex-col">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Cover Image */}
              <div className="relative aspect-video w-full bg-gray-100 dark:bg-gray-950 flex-shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-[300px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/placeholder.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1929] via-[#0d1929]/30 to-transparent" />
                <div className="absolute bottom-5 left-6 right-10 text-white">
                  <span className="text-[10px] font-bold text-[#f9ab12] uppercase tracking-wider bg-[#f9ab12]/15 px-3 py-1 rounded-full border border-[#f9ab12]/20 backdrop-blur-sm">
                    {selectedProject.industry}
                  </span>
                  <h3 className="text-xl md:text-2xl font-extrabold mt-2 drop-shadow-md">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Scrollable Content */}
              <div
                className="flex-1 min-h-0 overflow-y-auto p-6 md:p-8 space-y-6 overscroll-contain"
                onWheel={(e) => e.stopPropagation()}
              >
                {/* Description */}
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" /> Project Overview
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Tech Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      <Code className="w-3.5 h-3.5 text-[#f9ab12]" /> Languages
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.languages.map((lang) => (
                        <span key={lang} className="text-xs bg-gray-50 dark:bg-[#0d1929] border border-gray-100 dark:border-gray-800 px-2.5 py-1 rounded-md font-medium text-gray-700 dark:text-gray-300">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      <Code className="w-3.5 h-3.5 text-[#f9ab12]" /> Frameworks
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.frameworks.map((fw) => (
                        <span key={fw} className="text-xs bg-gray-50 dark:bg-[#0d1929] border border-gray-100 dark:border-gray-800 px-2.5 py-1 rounded-md font-medium text-gray-700 dark:text-gray-300">
                          {fw}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      <Code className="w-3.5 h-3.5 text-[#f9ab12]" /> Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.technologies.map((tech) => (
                        <span key={tech} className="text-xs bg-gray-50 dark:bg-[#0d1929] border border-gray-100 dark:border-gray-800 px-2.5 py-1 rounded-md font-medium text-gray-700 dark:text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA — Live Website Only */}
                <div className="pt-5 border-t border-gray-100 dark:border-gray-800">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-6 py-4 bg-[#0d2064] text-white text-center font-bold text-sm rounded-xl hover:shadow-lg hover:bg-[#0d2064]/90 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit Live Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
