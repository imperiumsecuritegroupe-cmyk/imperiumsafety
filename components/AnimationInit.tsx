'use client';

import { useEffect } from 'react';

export default function AnimationInit() {
  useEffect(() => {
    // IntersectionObserver for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    const animatedEls = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
    animatedEls.forEach((el) => observer.observe(el));

    // Animated counters
    const counters = document.querySelectorAll<HTMLElement>('.stat__number[data-target]');
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-target') || '0', 10);
      const duration = 1800;
      const start = performance.now();
      const animate = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = Math.floor(eased * target).toString();
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          counter.textContent = target.toString();
        }
      };

      const counterObserver = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            requestAnimationFrame(animate);
            counterObserver.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      counterObserver.observe(counter);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
