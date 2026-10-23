'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

/*
  Labels on both sides of the widget, each with a line that ends on
  the exact part of the widget it describes (matched by data-anchor).
  mode 'edge'  → line runs straight to the box's near edge
  mode 'under' → line runs along the gap under the box, then up into it
*/
const CALLOUTS = [
  { side: 'l', anchor: 'date', pad: 10, title: 'Today at a glance', sub: 'Updates with every SMS' },
  { side: 'l', anchor: 'total', pad: 10, title: 'Total expenses', sub: 'Plus change vs yesterday' },
  { side: 'l', anchor: 'owed', title: 'Owed to you', sub: 'Across all friends' },
  { side: 'r', anchor: 'actions', title: 'Scan & add', sub: 'Pay a QR or log cash' },
  { side: 'r', anchor: 'avg', title: 'Daily average', sub: 'Trips kept out' },
  { side: 'r', anchor: 'spent', title: 'Spent today', sub: 'Every expense, live', mode: 'under' },
  { side: 'r', anchor: 'owe', title: 'You owe', sub: 'Settle in one tap' },
];

const LABEL_W = 160;
const GAP = 36; // space between label and widget edge
const MIN_SPACING = 46;

const useIso = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function WidgetCallouts({ children }) {
  const wrap = useRef(null);
  const [geo, setGeo] = useState(null);

  useIso(() => {
    const el = wrap.current;
    if (!el) return;
    const measure = () => {
      if (window.innerWidth < 1280) return setGeo(null);
      const box = el.getBoundingClientRect();
      const widget = el.querySelector('[data-widget]')?.getBoundingClientRect();
      if (!widget) return;
      const rel = (r) => ({ l: r.left - box.left, r: r.right - box.left, t: r.top - box.top, b: r.bottom - box.top, cx: r.left - box.left + r.width / 2, cy: r.top - box.top + r.height / 2 });
      const w = rel(widget);
      const items = CALLOUTS.map((c) => {
        const node = el.querySelector(`[data-widget] [data-anchor="${c.anchor}"]`);
        if (!node) return null;
        const a = rel(node.getBoundingClientRect());
        let target, routeY;
        if (c.mode === 'under') {
          routeY = a.b + 9; // run in the gap under the box
          target = { x: a.cx, y: a.b };
        } else {
          const pad = c.pad || 0;
          target = { x: c.side === 'l' ? a.l - pad : a.r + pad, y: a.cy };
          routeY = a.cy;
        }
        return { ...c, target, routeY, ly: routeY };
      }).filter(Boolean);

      // keep labels from overlapping on each side
      for (const side of ['l', 'r']) {
        const list = items.filter((i) => i.side === side).sort((a, b) => a.ly - b.ly);
        for (let i = 1; i < list.length; i++) {
          if (list[i].ly - list[i - 1].ly < MIN_SPACING) list[i].ly = list[i - 1].ly + MIN_SPACING;
        }
      }
      setGeo({ w, items, width: box.width, height: box.height });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener('resize', measure);
    document.fonts?.ready?.then(measure);
    return () => { ro.disconnect(); window.removeEventListener('resize', measure); };
  }, []);

  const path = (it, w) => {
    const startX = it.side === 'l' ? w.l - GAP : w.r + GAP;
    const edgeX = it.side === 'l' ? w.l - 12 : w.r + 12;
    const { x, y } = it.target;
    const pts = [`M${startX} ${it.ly}`];
    if (it.ly !== it.routeY) pts.push(`L${edgeX} ${it.ly}`, `L${edgeX} ${it.routeY}`);
    if (it.mode === 'under') pts.push(`L${x} ${it.routeY}`, `L${x} ${y}`);
    else pts.push(`L${x} ${y}`);
    return pts.join(' ');
  };

  return (
    <div ref={wrap} className="relative mx-auto flex justify-center">
      {children}
      {geo && (
        <>
          <svg className="pointer-events-none absolute inset-0 z-10 overflow-visible" width={geo.width} height={geo.height}>
            {geo.items.map((it) => (
              <g key={it.anchor}>
                <path d={path(it, geo.w)} fill="none" stroke="rgba(47,206,150,.55)" strokeWidth="1.2" strokeLinejoin="round" />
                <circle cx={it.target.x} cy={it.target.y} r="7" fill="rgba(47,206,150,.2)" />
                <circle cx={it.target.x} cy={it.target.y} r="3.5" fill="#2fce96" />
              </g>
            ))}
          </svg>
          {geo.items.map((it) => (
            <div
              key={`l-${it.anchor}`}
              className={`absolute z-10 -translate-y-1/2 ${it.side === 'l' ? 'text-right' : 'text-left'}`}
              style={{ top: it.ly, width: LABEL_W, left: it.side === 'l' ? geo.w.l - GAP - 10 - LABEL_W : geo.w.r + GAP + 10 }}
            >
              <b className="block text-xs">{it.title}</b>
              <span className="text-[11px] text-muted">{it.sub}</span>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
