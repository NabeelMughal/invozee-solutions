'use client';

import { useEffect, useState } from 'react';

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // Only start on client after hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 20); // ~60 FPS cadence

    return () => clearInterval(timer);
  }, [isMounted, target]);

  // Render static target during SSR to avoid hydration mismatch
  if (!isMounted) {
    return <span suppressHydrationWarning>{target}{suffix}</span>;
  }

  return <span>{count}{suffix}</span>;
}

export function Statistics() {
  const stats = [
    { number: 100, suffix: '+', label: 'Projects Completed' },
    { number: 50, suffix: '+', label: 'Satisfied Clients' },
    { number: 80, suffix: '+', label: 'Team Members' },
    { number: 5, suffix: '+', label: 'Years Experience' },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-r from-[#0d2064] to-blue-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Impact</h2>
          <p className="text-base text-blue-100 max-w-xl mx-auto">
            Delivering excellence across the globe for businesses of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl md:text-6xl font-extrabold mb-2 tabular-nums">
                <Counter target={stat.number} suffix={stat.suffix} />
              </div>
              <p className="text-blue-100 text-xs md:text-sm font-medium tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
