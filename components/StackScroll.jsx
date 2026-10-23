'use client';
import { useEffect } from 'react';

/*
  Stacking cards: from section 01 on, each card stays pinned while the
  next one slides over it; covered cards shrink, dim and step up (--d),
  leaving their top edges visible as a deck.
  Desktop only (≥1024px). Styles live in globals.css under .stacking.
*/
const DECK = 36; // room above each card for the edges of up to 3 cards behind it

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
        panels.forEach((p) => { p.style.top = ''; p.style.removeProperty('--d'); });
        return;
      }
      root.classList.add('stacking');
      const vh = window.innerHeight;
      // a card taller than the screen pins only once its bottom is visible
      const head = (document.querySelector('header')?.offsetHeight || 0) + 16 + DECK;
      panels.forEach((p) => { p.style.top = `${Math.min(head, vh - p.offsetHeight - 16)}px`; });
      update();
    };

    const update = () => {
      raf = 0;
      if (!mq.matches || reduce.matches) return;
      const vh = window.innerHeight;
      const footer = document.querySelector('footer');
      const stick = (panels[0] ? parseFloat(panels[0].style.top) : 108) || 108;
      // how far each card (and the footer) has slid in over the one before it
      const arrive = [...panels, footer].map((el) => {
        if (!el) return 0;
        const top = el.getBoundingClientRect().top;
        return Math.min(1, Math.max(0, (vh - top) / (vh - stick)));
      });
      panels.forEach((p, i) => {
        let d = 0;
        for (let j = i + 1; j < arrive.length; j++) d += arrive[j];
        p.style.setProperty('--d', Math.min(d, 3.5).toFixed(3));
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
