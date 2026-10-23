'use client';
import { useEffect } from 'react';

/*
  Stacking cards: from section 01 on, each card stays pinned while the
  next one slides over it; the covered card shrinks and dims (--p 0→1).
  Desktop only (≥1024px). Styles live in globals.css under .stacking.
*/
export default function StackScroll() {
  useEffect(() => {
    const root = document.documentElement;
    const mq = window.matchMedia('(min-width: 1024px)');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    let panels = [];
    let raf = 0;

    const layout = () => {
      panels = [...document.querySelectorAll('main > section.panel')];
      if (!mq.matches) {
        root.classList.remove('stacking');
        panels.forEach((p) => { p.style.top = ''; p.style.removeProperty('--p'); });
        return;
      }
      root.classList.add('stacking');
      const vh = window.innerHeight;
      // a card taller than the screen pins only once its bottom is visible
      panels.forEach((p) => { p.style.top = `${Math.min(16, vh - p.offsetHeight - 16)}px`; });
      update();
    };

    const update = () => {
      raf = 0;
      if (!mq.matches || reduce.matches) return;
      const vh = window.innerHeight;
      const footer = document.querySelector('footer');
      panels.forEach((p, i) => {
        const next = panels[i + 1] || footer;
        if (!next) return;
        const top = next.getBoundingClientRect().top;
        const prog = Math.min(1, Math.max(0, (vh - top) / (vh - 16)));
        p.style.setProperty('--p', prog.toFixed(3));
      });
    };

    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };

    layout();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', layout);
    mq.addEventListener?.('change', layout);
    document.fonts?.ready?.then(layout);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', layout);
      mq.removeEventListener?.('change', layout);
      cancelAnimationFrame(raf);
      root.classList.remove('stacking');
    };
  }, []);
  return null;
}
