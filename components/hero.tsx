'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  // 1. Rebuild Interactive Background Canvas using vanilla high-performance particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000, radius: 150 };

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      density: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        // Float velocity
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        // Harmony palette (Primary: blue, Secondary: gold/amber)
        this.color = Math.random() > 0.4 ? 'rgba(13, 32, 100, 0.45)' : 'rgba(249, 171, 18, 0.6)';
        this.density = (Math.random() * 30) + 15;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        // Continuous slow float around base
        this.baseX += this.vx;
        this.baseY += this.vy;

        // Keep bounds
        if (this.baseX < 0 || this.baseX > canvas.width) this.vx *= -1;
        if (this.baseY < 0 || this.baseY > canvas.height) this.vy *= -1;

        // Proximity calculation with cursor
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;

        // Max push distance
        const maxDistance = mouse.radius;
        const force = (maxDistance - distance) / maxDistance;

        if (distance < maxDistance) {
          // Push particles away
          const directionX = forceDirectionX * force * this.density;
          const directionY = forceDirectionY * force * this.density;
          this.x -= directionX;
          this.y -= directionY;
        } else {
          // Soft return to base
          if (this.x !== this.baseX) {
            const dxBase = this.x - this.baseX;
            this.x -= dxBase / 20;
          }
          if (this.y !== this.baseY) {
            const dyBase = this.y - this.baseY;
            this.y -= dyBase / 20;
          }
        }
      }
    }

    const init = () => {
      particles = [];
      const numberOfParticles = Math.min(Math.floor((canvas.width * canvas.height) / 8000), 150);
      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    };

    const handleResize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    handleResize();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw digital mesh/waves connecting nearby particles
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.15;
            ctx.strokeStyle = `rgba(13, 32, 100, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // 2. Rebuild Hero Animations using GSAP
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 }
      );

      if (headingRef.current) {
        const originalText = 'Transforming Ideas Into Digital Solutions';

        headingRef.current.innerHTML = `
        <span class="hero-heading-wrap">
          ${originalText
            .split(' ')
            .map(
              (word) => `
                <span class="overflow-hidden inline-flex">
                  <span class="hero-word inline-block">${word}</span>
                </span>
              `
            )
            .join('<span class="w-3 inline-block"></span>')}
        </span>
      `;

        gsap.set('.hero-word', {
          y: '100%',
        });

        tl.to(
          '.hero-word',
          {
            y: '0%',
            duration: 1,
            stagger: 0.08,
          },
          '-=0.7'
        );
      }

      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        '-=0.5'
      );

      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        '-=0.7'
      );

      if (statsRef.current) {
        tl.fromTo(
          statsRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
          },
          '-=0.6'
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-20 px-4 overflow-hidden bg-gradient-to-b from-background via-white to-blue-50/10 dark:from-[#0d1929] dark:via-[#0f223d] dark:to-[#0d1929] transition-colors duration-500"
    >
      {/* Interactive Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-75 dark:opacity-40"
      />

      {/* Decorative Orbs with continuous slow motion */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Amber Glow Orb */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.08] bg-gradient-to-br from-[#f9ab12] to-[#0d2064] animate-pulse duration-[8000ms]" />
        {/* Navy Glow Orb */}
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.06] bg-gradient-to-tr from-[#0d2064] to-[#f9ab12] animate-pulse duration-[12000ms]" />

        {/* Tech Grid Pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(13, 32, 100, 0.15) 25%, rgba(13, 32, 100, 0.15) 26%, transparent 27%, transparent 74%, rgba(13, 32, 100, 0.15) 75%, rgba(13, 32, 100, 0.15) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(13, 32, 100, 0.15) 25%, rgba(13, 32, 100, 0.15) 26%, transparent 27%, transparent 74%, rgba(13, 32, 100, 0.15) 75%, rgba(13, 32, 100, 0.15) 76%, transparent 77%, transparent)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div
        className="max-w-5xl mx-auto relative z-10 text-center">
        <div ref={badgeRef} className="mb-6 inline-block">
          <span className="text-xs md:text-sm font-semibold text-[#f9ab12] uppercase tracking-widest bg-[#f9ab12]/10 dark:bg-[#f9ab12]/20 px-4 py-1.5 rounded-full border border-[#f9ab12]/30">
            Welcome to Innovation
          </span>
        </div>

        <h1
          ref={headingRef}
          className="text-4xl md:text-7xl font-extrabold text-balance mb-6 text-primary dark:text-white leading-[1.15]"
        >
          Transforming Ideas Into Digital Solutions
        </h1>

        <p
          ref={subtitleRef}
          className="text-base md:text-xl text-gray-600 dark:text-gray-300 text-balance mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Premium IT solutions and enterprise-level software development services. We transform your vision into robust, scalable digital products.
        </p>

        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-[#0d2064] text-white dark:bg-[#f9ab12] dark:text-[#0d2064] rounded-full font-bold hover:shadow-lg hover:shadow-[#0d2064]/20 dark:hover:shadow-[#f9ab12]/20 transition-all duration-300 flex items-center gap-2 group transform hover:-translate-y-0.5"
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="#portfolio"
            className="px-8 py-4 border-2 border-[#0d2064] text-[#0d2064] dark:border-white/20 dark:text-white rounded-full font-bold hover:bg-[#0d2064]/5 dark:hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            View Portfolio
          </a>
        </div>

        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-200/50 dark:border-white/10 pt-12"
        >
          {[
            { number: '99+', label: 'Projects Delivered' },
            { number: '99+', label: 'Happy Clients' },
            { number: '30+', label: 'Technologies' },
            { number: '5+', label: 'Years Experience' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="text-3xl md:text-5xl font-extrabold text-[#0d2064] dark:text-white mb-2 transition-transform duration-300 group-hover:scale-105">
                {stat.number}
              </div>
              <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
