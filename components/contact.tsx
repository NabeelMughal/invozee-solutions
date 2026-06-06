'use client';

import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal-item');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 4000);
  };

  const contactInfo = [
    { icon: Mail,   label: 'Email',   value: 'hello@invozee.com',                   href: 'mailto:hello@invozee.com' },
    { icon: Phone,  label: 'Phone',   value: '+1 (555) 123-4567',                   href: 'tel:+15551234567' },
    { icon: MapPin, label: 'Address', value: '123 Tech Street, Silicon Valley, CA', href: '#' },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 px-4 bg-white dark:bg-[#0d1929]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal-item opacity-0 translate-y-5 transition-all duration-700">
          <span className="text-xs font-semibold text-[#f9ab12] uppercase tracking-widest bg-[#f9ab12]/10 px-4 py-1.5 rounded-full border border-[#f9ab12]/20">
            Let&apos;s Talk
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0d2064] dark:text-white mt-4 mb-4">
            Get In Touch
          </h2>
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to start your digital transformation journey? Let&apos;s discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-5 reveal-item opacity-0 translate-y-6 transition-all duration-700">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.href}
                  className="flex gap-4 p-5 bg-gradient-to-br from-white to-blue-50/30 dark:from-[#1a2a3a] dark:to-[#1a2a3a] rounded-xl border border-gray-100 dark:border-gray-800 hover:border-[#f9ab12] dark:hover:border-[#f9ab12] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#f9ab12]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#f9ab12]/20 transition-colors duration-200">
                    <Icon className="w-5 h-5 text-[#f9ab12]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-0.5">
                      {info.label}
                    </p>
                    <p className="text-base font-bold text-[#0d2064] dark:text-white">
                      {info.value}
                    </p>
                  </div>
                </a>
              );
            })}

            {/* Map */}
            <div className="h-56 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                title="Invozee Location"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.7659041549543!2d-122.0163!3d37.3382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbad6b0a29c0d%3A0x1a7a3b5a5b5a5b5a!2sSilicon%20Valley%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890"
              />
            </div>
          </div>

          {/* Right: Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 p-8 bg-gradient-to-br from-blue-50/30 to-white dark:from-[#1a2a3a] dark:to-[#1a2a3a] rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm reveal-item opacity-0 translate-y-6 transition-all duration-700"
            style={{ transitionDelay: '100ms' }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                <CheckCircle className="w-16 h-16 text-green-500" />
                <h3 className="text-xl font-bold text-[#0d2064] dark:text-white">Message Sent!</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#0d2064] dark:text-white mb-2">Your Name</label>
                    <input
                      type="text" name="name" value={formData.name} onChange={handleChange} required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0d1929] text-sm text-gray-700 dark:text-gray-200 focus:border-[#f9ab12] focus:outline-none focus:ring-2 focus:ring-[#f9ab12]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0d2064] dark:text-white mb-2">Company</label>
                    <input
                      type="text" name="company" value={formData.company} onChange={handleChange}
                      placeholder="Acme Corp"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0d1929] text-sm text-gray-700 dark:text-gray-200 focus:border-[#f9ab12] focus:outline-none focus:ring-2 focus:ring-[#f9ab12]/20 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#0d2064] dark:text-white mb-2">Email Address</label>
                  <input
                    type="email" name="email" value={formData.email} onChange={handleChange} required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0d1929] text-sm text-gray-700 dark:text-gray-200 focus:border-[#f9ab12] focus:outline-none focus:ring-2 focus:ring-[#f9ab12]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#0d2064] dark:text-white mb-2">Message</label>
                  <textarea
                    name="message" value={formData.message} onChange={handleChange} required
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0d1929] text-sm text-gray-700 dark:text-gray-200 focus:border-[#f9ab12] focus:outline-none focus:ring-2 focus:ring-[#f9ab12]/20 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-[#0d2064] text-white rounded-xl font-bold hover:shadow-lg hover:bg-[#0d2064]/90 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </button>
                <p className="text-center text-xs text-gray-400 dark:text-gray-500">
                  We typically respond within 24 hours
                </p>
              </>
            )}
          </form>
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
