import { useEffect } from 'react';

/**
 * Attaches an IntersectionObserver to all `.reveal` elements and adds the
 * `.in` class when they enter the viewport, triggering the CSS fade-up animation.
 * Re-runs whenever the active page changes (pass `dep` from your router state).
 */
export default function useScrollReveal(dep) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [dep]);
}
