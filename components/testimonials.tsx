'use client';

import { Star } from 'lucide-react';
import { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  text: string;
  rating: number;
  color: string;
}

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Marcus Chen',
      position: 'Chief Technology Officer',
      company: 'HealthSync Solutions',
      text: 'Invozee transformed our business processes with a custom healthcare automation solution. Their team delivered beyond expectations and showed exceptional compliance and attention to detail.',
      rating: 5,
      color: 'bg-blue-600',
    },
    {
      id: 2,
      name: 'Sarah Jenkins',
      position: 'VP of Product',
      company: 'FinFlow Tech',
      text: 'The AI-powered platform developed by Invozee helped us increase transactional efficiency by 40% and reduce operational costs significantly. Outstanding engineering and security focus.',
      rating: 5,
      color: 'bg-emerald-600',
    },
    {
      id: 3,
      name: 'David Ross',
      position: 'Founder',
      company: 'EstateFlow',
      text: 'Professional communication, excellent code quality, and timely delivery. The real estate CRM they built integrated perfectly with our existing legacy systems. Highly recommended!',
      rating: 5,
      color: 'bg-amber-600',
    },
    {
      id: 4,
      name: 'Elena Rostova',
      position: 'Director of Operations',
      company: 'EduLearn Global',
      text: 'Invozee\'s custom LMS platform exceeded our expectations. The platform is blazingly fast, user-friendly, and has significantly improved student completion rates across 15 countries.',
      rating: 5,
      color: 'bg-indigo-600',
    },
    {
      id: 5,
      name: 'Johnathan Miller',
      position: 'CEO',
      company: 'RetailBoost',
      text: 'Their mobile commerce solutions are world-class. The storefront they built for us has seen a 65% increase in conversion rate and stands up perfectly to peak Black Friday traffic.',
      rating: 5,
      color: 'bg-rose-600',
    },
    {
      id: 6,
      name: 'Samantha Vance',
      position: 'IT Infrastructure Lead',
      company: 'Apex ERP Solutions',
      text: 'The cloud migration and ERP integration services they provided were flawless. Zero downtime, robust architecture, and exceptional technical documentation.',
      rating: 5,
      color: 'bg-purple-600',
    },
    {
      id: 7,
      name: 'Dr. Amit Patel',
      position: 'Chief Medical Officer',
      company: 'CardioCare Inc',
      text: 'The HIPAA-compliant telehealth app developed by Invozee has become the core of our patient communication. Patient satisfaction ratings have skyrocketed.',
      rating: 5,
      color: 'bg-sky-600',
    },
    {
      id: 8,
      name: 'Lisa Wong',
      position: 'Product Manager',
      company: 'SaaSify',
      text: 'Working with Invozee has been a transformative experience for our engineering team. Their developer talent is top-tier and their workflow is highly agile.',
      rating: 5,
      color: 'bg-teal-600',
    },
    {
      id: 9,
      name: 'Carlos Mendez',
      position: 'Head of Engineering',
      company: 'PayPulse FinTech',
      text: 'Invozee helped us refactor our payment processing gateway. The response time dropped from 3s to 200ms, and code reliability improved ten-fold.',
      rating: 5,
      color: 'bg-orange-600',
    },
    {
      id: 10,
      name: 'Rachel Green',
      position: 'Marketing Director',
      company: 'HomeQuest',
      text: 'Their web analytics and dashboard integrations gave us complete clarity on user journeys. Incredible analytical insight alongside stellar development work.',
      rating: 5,
      color: 'bg-violet-600',
    },
    {
      id: 11,
      name: 'Liam O\'Connor',
      position: 'Director of IT',
      company: 'LearnSphere',
      text: 'An exceptional development partner. They understood our strict cybersecurity guidelines and implemented a highly secure single sign-on architecture.',
      rating: 5,
      color: 'bg-pink-600',
    },
    {
      id: 12,
      name: 'Sophia Martinez',
      position: 'COO',
      company: 'ShopVibe E-commerce',
      text: 'Invozee launched our multi-vendor marketplace in record time. Their post-launch support and optimization recommendations have been invaluable.',
      rating: 5,
      color: 'bg-cyan-600',
    },
    {
      id: 13,
      name: 'Thomas Wright',
      position: 'Founder',
      company: 'BuildSmart SaaS',
      text: 'They build software with scalability in mind. The architecture handles thousands of concurrent socket connections without breaking a sweat.',
      rating: 5,
      color: 'bg-fuchsia-600',
    },
    {
      id: 14,
      name: 'Nina Al-Jamil',
      position: 'Operations Director',
      company: 'CareNet',
      text: 'Invozee built our scheduling portal. It has reduced patient booking errors to virtually zero and automated thousands of hours of manual entry.',
      rating: 5,
      color: 'bg-lime-600',
    },
    {
      id: 15,
      name: 'Alex Mercer',
      position: 'CTO',
      company: 'CapitalVentures',
      text: 'Outstanding team execution. Their developers are proactive, communicative, and write exceptionally clean, maintainable code.',
      rating: 5,
      color: 'bg-yellow-600',
    },
    {
      id: 16,
      name: 'James Cole',
      position: 'Lead Architect',
      company: 'DevFlow Systems',
      text: 'The microservices architecture Invozee implemented resolved our scaling issues. Their knowledge of Docker and Kubernetes is truly stellar.',
      rating: 5,
      color: 'bg-red-600',
    },
    {
      id: 17,
      name: 'Chloe Dupont',
      position: 'Digital Experience Manager',
      company: 'LuxeRetail Group',
      text: 'We now have a modern, head-turning online presence. The custom animations and sleek transitions have made our brand stand out from competitors.',
      rating: 5,
      color: 'bg-emerald-700',
    },
    {
      id: 18,
      name: 'Aaron Vance',
      position: 'Director of Systems',
      company: 'Intellect LMS',
      text: 'Invozee integrated our learning platform with multiple third-party API providers seamlessly. Their attention to detail was exceptional.',
      rating: 5,
      color: 'bg-purple-700',
    },
    {
      id: 19,
      name: 'Robert Hastings',
      position: 'Operations Lead',
      company: 'PrimeLogistics',
      text: 'The dispatch routing software developed by Invozee optimized our shipping times by 18%. Outstanding ROI for our business operations.',
      rating: 5,
      color: 'bg-indigo-700',
    },
    {
      id: 20,
      name: 'Isabella Ricci',
      position: 'Executive Director',
      company: 'MedTech Labs',
      text: 'Stellar work on our data visualization dashboard. Complex clinical datasets are now accessible and easy to interpret in real-time.',
      rating: 5,
      color: 'bg-blue-700',
    },
    {
      id: 21,
      name: 'William Chen',
      position: 'Co-Founder',
      company: 'StockTrade AI',
      text: 'High-performance algorithms, secure encryption, and smooth user flow. Invozee is our go-to partner for financial web applications.',
      rating: 5,
      color: 'bg-amber-700',
    },
    {
      id: 22,
      name: 'Katherine Howard',
      position: 'VP of Engineering',
      company: 'CloudScale',
      text: 'We hired them for database migration and optimization. Query response time improved by 70%, which improved our overall system efficiency.',
      rating: 5,
      color: 'bg-rose-700',
    },
    {
      id: 23,
      name: 'Nathan Brooks',
      position: 'Product Owner',
      company: 'PropertyHub',
      text: 'The custom search algorithm they engineered for our listings allows users to find matching homes in milliseconds. Brilliant UX design.',
      rating: 5,
      color: 'bg-sky-700',
    },
    {
      id: 24,
      name: 'Olivia Sterling',
      position: 'Head of Logistics',
      company: 'FastShip Inc',
      text: 'From initial design wireframes to production deployment, Invozee proved to be an invaluable, organized, and reliable software agency.',
      rating: 5,
      color: 'bg-teal-700',
    },
    {
      id: 25,
      name: 'Daniel Kim',
      position: 'Managing Director',
      company: 'EduMatch',
      text: 'Their team built a matching engine for tutors and students that works incredibly well. Our user acquisition doubled in three months.',
      rating: 5,
      color: 'bg-violet-700',
    },
  ];

  // Distribute testimonials across 3 rows for a premium multi-row marquee effect
  const row1 = testimonials.slice(0, 12);
  const row2 = testimonials.slice(12, 25);
  // const row3 = testimonials.slice(16, 25);

  const [isPaused, setIsPaused] = useState(false);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const TestimonialCard = ({ item }: { item: Testimonial }) => (
    <div className="w-[380px] flex-shrink-0 bg-white dark:bg-[#1a2a3a] border border-gray-100 dark:border-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-lg dark:hover:shadow-black/20 hover:-translate-y-1 transition-all duration-300 mx-3 select-none">
      <div className="flex gap-1 mb-3">
        {[...Array(item.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#f9ab12] text-[#f9ab12]" />
        ))}
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-5 leading-relaxed line-clamp-3 italic">
        &quot;{item.text}&quot;
      </p>
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${item.color}`}>
          {getInitials(item.name)}
        </div>
        <div>
          <h4 className="text-sm font-bold text-[#0d2064] dark:text-white">
            {item.name}
          </h4>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {item.position}, <span className="font-semibold text-[#f9ab12]">{item.company}</span>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="testimonials"
      className="py-24 px-4 bg-gray-50/50 dark:bg-[#0d1929]/40 border-y border-gray-100 dark:border-gray-800/50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <span className="text-xs font-semibold text-[#f9ab12] uppercase tracking-widest bg-[#f9ab12]/10 px-4 py-1.5 rounded-full border border-[#f9ab12]/20">
          Client Feedback
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-[#0d2064] dark:text-white mt-4 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
          Trusted by over 50+ clients worldwide for delivering premium enterprise and startup solutions.
        </p>
      </div>

      {/* Premium Infinite Scroll Ticker Container */}
      <div
        className="flex flex-col gap-6 w-full cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Row 1 - Left to Right */}
        <div className="flex overflow-hidden w-full relative">
          <div
            className={`flex w-max animate-marquee-left ${isPaused ? '[animation-play-state:paused]' : ''}`}
            style={{ animationDuration: '40s' }}
          >
            {row1.map((item) => (
              <TestimonialCard key={`row1-${item.id}`} item={item} />
            ))}
            {/* Duplicate for infinite loop */}
            {row1.map((item) => (
              <TestimonialCard key={`row1-dup-${item.id}`} item={item} />
            ))}
          </div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="flex overflow-hidden w-full relative">
          <div
            className={`flex w-max animate-marquee-right ${isPaused ? '[animation-play-state:paused]' : ''}`}
            style={{ animationDuration: '45s' }}
          >
            {row2.map((item) => (
              <TestimonialCard key={`row2-${item.id}`} item={item} />
            ))}
            {/* Duplicate for infinite loop */}
            {row2.map((item) => (
              <TestimonialCard key={`row2-dup-${item.id}`} item={item} />
            ))}
          </div>
        </div>

        {/* Row 3 - Left to Right */}
        {/* <div className="flex overflow-hidden w-full relative">
          <div
            className={`flex w-max animate-marquee-left ${isPaused ? '[animation-play-state:paused]' : ''}`}
            style={{ animationDuration: '42s' }}
          >
            {row3.map((item) => (
              <TestimonialCard key={`row3-${item.id}`} item={item} />
            ))}
            {row3.map((item) => (
              <TestimonialCard key={`row3-dup-${item.id}`} item={item} />
            ))}
          </div>
        </div> */}
      </div>

      {/* Global CSS for CSS Marquee Animations (tailored tailwind implementation or pure CSS styles) */}
      <style jsx global>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right linear infinite;
        }
      `}</style>
    </section>
  );
}
