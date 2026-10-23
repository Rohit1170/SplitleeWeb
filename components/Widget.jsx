/* Splitlee home-screen widget — matches the real Android widget.
   All sizes are in em, so pass `size` (base font px) to scale it. */

const I = {
  qr: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M3 8V3h5M16 3h5v5M3 16v5h5M21 16v5h-5" /><rect x="7" y="7" width="4" height="4" /><rect x="13" y="7" width="4" height="4" /><rect x="7" y="13" width="4" height="4" /><path d="M14 14h1M17 14v1M14 17h3" /></svg>
  ),
  plus: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
  ),
  receipt: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M5 2h14v20l-2.3-1.5L14.3 22 12 20.5 9.7 22l-2.4-1.5L5 22zM8 7v2h8V7zm0 4v2h8v-2zm0 4v2h6v-2z" /></svg>
  ),
  trend: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m3 17 6-6 4 4 8-8M15 7h6v6" /></svg>
  ),
  down: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v16M5 13l7 7 7-7" /></svg>
  ),
  up: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V4M5 11l7-7 7 7" /></svg>
  ),
};

const Circle = ({ bg, color, size = 3.4, icon = 1.5, children, anchor }) => (
  <span data-anchor={anchor} style={{ width: `${size}em`, height: `${size}em`, borderRadius: '50%', background: bg, color, display: 'grid', placeItems: 'center', flex: 'none', fontSize: '1em' }}>
    <span style={{ fontSize: `${icon}em`, display: 'grid' }}>{children}</span>
  </span>
);

const Pill = ({ icon, iconBg, iconColor, value, label, anchor }) => (
  <div data-anchor={anchor} style={{ display: 'flex', alignItems: 'center', gap: '0.7em', padding: '0 0.9em', minHeight: '7.8em', borderRadius: '2.4em', background: 'linear-gradient(160deg,rgba(255,255,255,.09),rgba(255,255,255,.03))', border: '1px solid rgba(255,255,255,.13)', minWidth: 0 }}>
    <Circle bg={iconBg} color={iconColor} size={3.1} icon={1.3}>{icon}</Circle>
    <div style={{ minWidth: 0 }}>
      <div style={{ fontSize: '1.55em', fontWeight: 600, lineHeight: 1.1, color: '#f3f5f4', whiteSpace: 'nowrap' }}>{value}</div>
      <div style={{ fontSize: '1em', color: '#a9b2af', marginTop: '0.25em', whiteSpace: 'nowrap' }}>{label}</div>
    </div>
  </div>
);

const Balance = ({ tone, icon, label, value, anchor }) => {
  const t = tone === 'green'
    ? { bg: 'linear-gradient(160deg,#1d3a2e,#16271f)', border: 'rgba(47,206,150,.22)', circle: '#1f4d3a', color: '#2fce96' }
    : { bg: 'linear-gradient(160deg,#3d3420,#2a2418)', border: 'rgba(240,180,69,.28)', circle: '#6b4f20', color: '#f0b445' };
  return (
    <div data-anchor={anchor} style={{ display: 'flex', alignItems: 'center', gap: '1.1em', padding: '0 1.3em', minHeight: '7.6em', borderRadius: '2.4em', background: t.bg, border: `1px solid ${t.border}`, minWidth: 0 }}>
      <Circle bg={t.circle} color={t.color} size={4} icon={1.6}>{icon}</Circle>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: '1.2em', color: '#b7c0bc' }}>{label}</div>
        <div style={{ fontSize: '1.95em', fontWeight: 600, color: t.color, lineHeight: 1.15, whiteSpace: 'nowrap' }}>{value}</div>
      </div>
    </div>
  );
};

export default function Widget({ size = 14, className = '', style }) {
  return (
    <div
      data-widget
      className={className}
      style={{
        fontSize: typeof size === 'number' ? `${size}px` : size,
        width: '45em',
        maxWidth: '100%',
        padding: '1.9em 2em 2em',
        borderRadius: '3.6em',
        color: '#f3f5f4',
        background: 'linear-gradient(165deg,rgba(62,68,66,.92),rgba(30,34,33,.94) 55%,rgba(22,25,24,.96))',
        border: '1px solid rgba(255,255,255,.16)',
        boxShadow: '0 40px 80px -30px rgba(0,0,0,.7), inset 0 1px 0 rgba(255,255,255,.06)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        ...style,
      }}
    >
      {/* header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span data-anchor="date" style={{ fontSize: '1.45em', color: '#c3cac7' }}>Today · Oct 22</span>
        <span data-anchor="actions" style={{ display: 'flex', gap: '0.9em' }}>
          <Circle bg="#1f4d3a" color="#2fce96" size={3.8} icon={1.6}>{I.qr}</Circle>
          <Circle bg="#1f4d3a" color="#2fce96" size={3.8} icon={1.6}>{I.plus}</Circle>
        </span>
      </div>

      {/* total + pills */}
      <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr 1fr', gap: '1.1em', alignItems: 'center', marginTop: '0.4em' }}>
        <div data-anchor="total">
          <div style={{ fontSize: '1.2em', letterSpacing: '.08em', color: '#b7c0bc', fontWeight: 500 }}>TOTAL EXPENSES</div>
          <div style={{ fontSize: '3.05em', fontWeight: 700, letterSpacing: '-.02em', lineHeight: 1.15, whiteSpace: 'nowrap' }}>₹1,01,694</div>
          <div style={{ fontSize: '1.2em', color: '#2fce96', fontWeight: 500, whiteSpace: 'nowrap' }}>▼ ₹2,136 vs yesterday</div>
        </div>
        <Pill icon={I.receipt} iconBg="#1f4d3a" iconColor="#2fce96" value="₹237" label="Spent today" anchor="spent" />
        <Pill icon={I.trend} iconBg="#34405a" iconColor="#6f9cff" value="₹2,854" label="Daily average" anchor="avg" />
      </div>

      {/* balances */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.1em', marginTop: '1.3em' }}>
        <Balance tone="green" icon={I.down} label="Owed to you" value="₹43,887" anchor="owed" />
        <Balance tone="amber" icon={I.up} label="You owe" value="₹0" anchor="owe" />
      </div>
    </div>
  );
}
