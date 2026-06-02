'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Anonymous Client #01',
      text: 'Invozee transformed our business processes with a custom automation solution. Their team delivered beyond expectations and showed exceptional attention to detail.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Anonymous Client #02',
      text: 'The AI-powered platform developed by Invozee helped us increase efficiency by 40% and reduce operational costs significantly. Outstanding technical expertise.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Anonymous Client #03',
      text: 'Professional communication, excellent code quality, and timely delivery. The team went above and beyond to ensure our satisfaction. Highly recommended.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Anonymous Client #04',
      text: 'Invozee\'s e-commerce solution exceeded our expectations. The platform is fast, user-friendly, and has significantly improved our sales conversion rates.',
      rating: 5,
    },
    {
      id: 5,
      name: 'Anonymous Client #05',
      text: 'Their mobile app development service is world-class. The app they built for us has been downloaded over 100K times with exceptional ratings.',
      rating: 5,
    },
    {
      id: 6,
      name: 'Anonymous Client #06',
      text: 'The cloud infrastructure they set up for us is robust, scalable, and cost-effective. Their DevOps expertise is truly impressive.',
      rating: 5,
    },
    {
      id: 7,
      name: 'Anonymous Client #07',
      text: 'Invozee\'s data analytics solution provided us with actionable insights that drove strategic business decisions. Exceptional consulting alongside development.',
      rating: 5,
    },
    {
      id: 8,
      name: 'Anonymous Client #08',
      text: 'Their cybersecurity solutions gave us complete peace of mind. The team was thorough, professional, and proactive in identifying vulnerabilities.',
      rating: 5,
    },
    {
      id: 9,
      name: 'Anonymous Client #09',
      text: 'Invozee\'s API development and integration services seamlessly connected our legacy systems with modern platforms. Excellent technical documentation provided.',
      rating: 5,
    },
    {
      id: 10,
      name: 'Anonymous Client #10',
      text: 'Working with Invozee was transformative for our startup. They understood our vision, delivered on time, and continue to provide outstanding support.',
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by over 50+ clients worldwide for delivering exceptional digital solutions
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative bg-gradient-to-br from-blue-50/50 to-white rounded-2xl border border-gray-200 p-8 md:p-12"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="min-h-64 flex flex-col justify-between"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-xl md:text-2xl text-gray-800 font-light mb-8 leading-relaxed italic">
                &quot;{testimonials[currentIndex].text}&quot;
              </p>

              {/* Client Name */}
              <p className="text-lg font-bold text-primary">
                {testimonials[currentIndex].name}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-all hover:scale-110 md:left-8"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-all hover:scale-110 md:right-8"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8 flex-wrap">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all ${
                index === currentIndex
                  ? 'bg-primary w-8 h-3'
                  : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
              } rounded-full`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-6 text-gray-600 text-sm">
          {currentIndex + 1} / {testimonials.length}
        </div>
      </div>
    </section>
  );
}
