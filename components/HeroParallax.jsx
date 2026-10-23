'use client';
import { useEffect } from 'react';

/* Sets --mx / --my (-1…1) on #hero from the mouse position.
   Blocks read them via their own depth to drift (see Tile in page.jsx). */
export default function HeroParallax() {
  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let raf = 0, mx = 0, my = 0;
    const apply = () => {
      raf = 0;
      hero.style.setProperty('--mx', mx.toFixed(3));
      hero.style.setProperty('--my', my.toFixed(3));
    };
    const onMove = (e) => {
      const r = hero.getBoundingClientRect();
      mx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      my = ((e.clientY - r.top) / r.height - 0.5) * 2;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const onLeave = () => { mx = 0; my = 0; if (!raf) raf = requestAnimationFrame(apply); };

    hero.addEventListener('pointermove', onMove);
    hero.addEventListener('pointerleave', onLeave);
    return () => {
      hero.removeEventListener('pointermove', onMove);
      hero.removeEventListener('pointerleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);
  return null;
}
