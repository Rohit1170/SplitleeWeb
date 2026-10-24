'use client';
import { useEffect } from 'react';

/* Sets --mx / --my (-1…1) on #hero; blocks drift by their own depth (see Tile/Chip).
   Desktop: follows the mouse.
   Phones: tilt (gyroscope) where the browser allows it without a prompt (Android);
   otherwise (iPhone) a gentle idle float that also follows your finger and scrolling.
   No permission popups are ever shown. */
export default function HeroParallax() {
  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const set = (x, y) => {
      hero.style.setProperty('--mx', x.toFixed(3));
      hero.style.setProperty('--my', y.toFixed(3));
    };
    const clamp = (v) => Math.max(-1, Math.min(1, v));

    // ---------- desktop: mouse ----------
    if (window.matchMedia('(pointer: fine)').matches) {
      let raf = 0, mx = 0, my = 0;
      const apply = () => { raf = 0; set(mx, my); };
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
    }

    // ---------- touch devices ----------
    let tx = 0, ty = 0;          // target from tilt / touch
    let cx = 0, cy = 0;          // current (smoothed)
    let tilt = false;            // real gyro data arriving?
    let touching = false;
    let base = null;             // resting phone angle when the page opened
    let visible = true;
    let raf = 0;

    // Gyro — only where no permission prompt is needed (iOS needs one, so it's skipped there)
    const needsPrompt = typeof window.DeviceOrientationEvent?.requestPermission === 'function';
    const onTilt = (e) => {
      if (e.gamma == null || e.beta == null) return;
      if (!base) base = { b: e.beta, g: e.gamma };
      tilt = true;
      tx = clamp((e.gamma - base.g) / 20);
      ty = clamp((e.beta - base.b) / 20);
    };
    if (!needsPrompt && 'DeviceOrientationEvent' in window) window.addEventListener('deviceorientation', onTilt);

    // Touch: blocks lean toward your finger
    const onTouch = (e) => {
      const t = e.touches[0];
      if (!t) return;
      const r = hero.getBoundingClientRect();
      touching = true;
      tx = clamp(((t.clientX - r.left) / r.width - 0.5) * 2);
      ty = clamp(((t.clientY - r.top) / r.height - 0.5) * 2);
    };
    const onTouchEnd = () => { touching = false; };
    hero.addEventListener('touchstart', onTouch, { passive: true });
    hero.addEventListener('touchmove', onTouch, { passive: true });
    hero.addEventListener('touchend', onTouchEnd, { passive: true });

    const io = new IntersectionObserver(([en]) => {
      visible = en.isIntersecting;
      if (visible && !raf) raf = requestAnimationFrame(loop);
    });
    io.observe(hero);

    const t0 = performance.now();
    const loop = (now) => {
      raf = 0;
      if (!visible) return;
      let x = tx, y = ty;
      if (!tilt && !touching) {
        // idle float + a little lift from scrolling
        const t = (now - t0) / 1000;
        const sc = Math.min(1, window.scrollY / Math.max(1, hero.offsetHeight));
        x = Math.sin(t * 0.6) * 0.55;
        y = Math.cos(t * 0.45) * 0.45 - sc * 0.9;
      }
      cx += (x - cx) * 0.08;
      cy += (y - cy) * 0.08;
      set(cx, cy);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('deviceorientation', onTilt);
      hero.removeEventListener('touchstart', onTouch);
      hero.removeEventListener('touchmove', onTouch);
      hero.removeEventListener('touchend', onTouchEnd);
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);
  return null;
}
