'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.0, // Snappy, premium scroll response
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: true, // Sync touch for responsive trackpad and mobile feel
    });

    // Synchronize Lenis scroll positions with GSAP ScrollTrigger calculations
    lenis.on('scroll', ScrollTrigger.update);

    // Run Lenis tick within GSAP's optimized ticker thread
    const updatePhysics = (time: number) => {
      lenis.raf(time * 1000); // convert to milliseconds
    };
    
    gsap.ticker.add(updatePhysics);
    gsap.ticker.lagSmoothing(0); // Prevents jumps when tab goes out of focus

    return () => {
      gsap.ticker.remove(updatePhysics);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
