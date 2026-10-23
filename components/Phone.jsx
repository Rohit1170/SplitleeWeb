import Widget from './Widget';

/* Splitlee app screens recreated in HTML/CSS (styles in app/globals.css → .phone / .scr). */

const Ic = {
  home: (s = 13) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M3 11 12 3l9 8v10h-6v-6H9v6H3z" /></svg>
  ),
  friends: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><circle cx="9" cy="8" r="3.5" /><circle cx="17" cy="9" r="2.8" /><path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6zM15 14.5c3.5 0 7 1.5 7 5.5h-5c0-2-.8-4-2-5.5" /></svg>
  ),
  map: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>
  ),
  ins: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="11" width="4" height="10" rx="1" /><rect x="10" y="4" width="4" height="17" rx="1" /><rect x="16" y="8" width="4" height="13" rx="1" /></svg>
  ),
  bell: (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="#dfe6e3"><path d="M12 22a2.5 2.5 0 0 0 2.4-2h-4.8a2.5 2.5 0 0 0 2.4 2zM19 17l-2-2v-5a5 5 0 0 0-4-4.9V4a1 1 0 0 0-2 0v1.1A5 5 0 0 0 7 10v5l-2 2v1h14z" /></svg>
  ),
  gear: (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="#dfe6e3"><path d="M19.4 13a7.6 7.6 0 0 0 0-2l2.1-1.6-2-3.4-2.5 1a7.4 7.4 0 0 0-1.7-1L15 3h-4l-.4 2.6a7.4 7.4 0 0 0-1.7 1l-2.4-1-2 3.4L6.6 11a7.6 7.6 0 0 0 0 2l-2.1 1.6 2 3.4 2.5-1a7.4 7.4 0 0 0 1.7 1L11 21h4l.4-2.6a7.4 7.4 0 0 0 1.7-1l2.4 1 2-3.4zM13 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z" /></svg>
  ),
  fork: (
    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M17 3c-2 0-3 3-3 6s1 4 3 4v8" /></svg>
  ),
};

const StatusBar = () => (
  <div className="sb">
    <span>9:41</span>
    <span className="ic">
      <svg width="12" height="9" viewBox="0 0 24 18" fill="#ddd"><rect x="0" y="12" width="4" height="6" rx="1" /><rect x="6" y="8" width="4" height="10" rx="1" /><rect x="12" y="4" width="4" height="14" rx="1" /><rect x="18" y="0" width="4" height="18" rx="1" /></svg>
      <span className="batt" />
    </span>
  </div>
);

const TopBar = () => (
  <div className="tb">
    <span className="pill">{Ic.home(9)} Main ▾</span>
    <span className="r"><span className="ib">{Ic.bell}</span><span className="ib">{Ic.gear}</span></span>
  </div>
);

const Nav = ({ active }) => (
  <>
    <div className="pnav">
      {[['Home', Ic.home()], ['Friends', Ic.friends], ['Map', Ic.map], ['Insights', Ic.ins]].map(([n, icon], i) => (
        <span key={n} className={i === active ? 'on' : ''}>{icon}{n}</span>
      ))}
    </div>
    <div className="home-ind" />
  </>
);

const Fab = () => <div className="fab">+</div>;

const HomeBody = () => (
  <div className="pbody">
    <div className="hcard">
      <div className="lbl">THIS MONTH</div>
      <span className="month">Oct ▾</span>
      <div className="amt">₹48,230<sup>+₹237</sup></div>
      <span className="chipz">₹2,190/day <em>▼ 12%</em></span>
      <span style={{ fontSize: 7, opacity: 0.6, marginLeft: 4 }}>excl. trips</span>
    </div>
    <div className="row2">
      <div className="owe"><span className="o" style={{ background: '#1d3a30', color: '#2fce96' }}>↓</span><div><small>Owed to you</small><b>₹6,400</b></div></div>
      <div className="owe"><span className="o" style={{ background: '#3a3220', color: '#f0b445' }}>↑</span><div><small>You owe</small><b style={{ color: '#f0b445' }}>₹0</b></div></div>
    </div>
    <div className="sect">Accounts</div>
    <div className="accs">
      <div className="acc a1"><small>ICICI Bank · ****4821</small><b>₹21,400</b><i /></div>
      <div className="acc a2"><small>****3307 · HDFC Bank</small><b>₹14,830</b><i /></div>
      <div className="acc a3"><small>SBI · A/c</small><b>₹12,000</b><i /></div>
    </div>
    <div className="pcard" style={{ marginTop: 8 }}>
      <div style={{ fontSize: 9.5, fontWeight: 700, marginBottom: 8 }}>Today by category</div>
      <div className="donutrow">
        <div className="donut"><div><span><b>₹237</b>Total spent<br />Today</span></div></div>
        <div className="cat"><span className="cdot">{Ic.fork}</span><span>Food</span><span>100%</span></div>
      </div>
    </div>
  </div>
);

const Home = () => (<><StatusBar /><TopBar /><HomeBody /><Fab /><Nav active={0} /></>);

const FriendRow = ({ i, name, amt }) => (
  <div className="fr">
    <div className="h">
      <span className="av">{i}</span>
      <div><b style={{ fontSize: 9.5 }}>{name}</b><small>Owes you {amt}</small></div>
      <span className="amt">{amt}</span>
    </div>
    <div className="acts"><span className="settle">✓ Settle up</span><span>➤ Remind</span></div>
  </div>
);

const Friends = () => (
  <>
    <StatusBar /><TopBar />
    <div className="pbody">
      <div className="ptitle">Friends</div>
      <div className="sum">
        <div className="top"><div>Friends owe you<b>₹6,400</b></div><div>You owe<b>You owe ₹0</b></div></div>
        <div className="bot"><span>Your part (after splitting)</span><b style={{ fontSize: 9 }}>₹41,830</b></div>
      </div>
      <div className="sect">Groups</div>
      <div className="grp">
        <div className="pcard"><b style={{ fontSize: 9 }}>Flat</b><small>3 members</small><div style={{ color: '#2fce96', fontSize: 7.5, fontWeight: 700, marginTop: 14 }}>Owed ₹2,200</div></div>
        <div className="pcard ng"><div><div style={{ color: '#2fce96', fontSize: 14 }}>⊕</div>New group</div></div>
      </div>
      <div className="fil"><span className="on">All</span><span>Owes you</span><span>You owe</span><span>Settled</span></div>
      <FriendRow i="A" name="Aarav" amt="₹4,200" />
      <FriendRow i="P" name="Priya" amt="₹2,200" />
    </div>
    <Fab /><Nav active={1} />
  </>
);

const TXS = [
  ['Zomato', '22-Oct · 4:11 PM · Me', '₹237', 'food', false],
  ['Burger Club', '21-Oct · 10:53 PM · Me + Aarav + Kabir', '₹1,050', 'oth', true],
  ['Tea Stall', '21-Oct · 9:48 PM · Me', '₹75', 'oth', false],
  ['Fresh Mart', '21-Oct · 9:42 PM · Kabir', '₹100', 'oth', true],
  ['HungerBo', '21-Oct · 5:10 PM · Me', '₹122', 'food', false],
  ['Corner Store', '21-Oct · 2:11 PM · Me', '₹20', 'oth', false],
  ['Cinema', '21-Oct · 11:09 AM · Aarav', '₹1,000', 'oth', true],
];

const History = () => (
  <>
    <StatusBar /><TopBar />
    <div className="pbody">
      <div className="hist-h"><span>Recent Expenses</span><span style={{ color: '#8c9a95', letterSpacing: 6 }}>⌕ ⇅ ≡</span></div>
      <div className="mbar"><span>October</span><span>₹48,230 spent</span></div>
      {TXS.map(([n, sub, v, kind, split]) => (
        <div className="tx" key={n}>
          <span className={`ti ${kind}`}>{kind === 'food' ? Ic.fork : '•••'}</span>
          <div><b>{n}{split && <span className="split">SPLIT</span>}</b><small>{sub}</small></div>
          <span className="v">{v}</span>
        </div>
      ))}
    </div>
    <Fab /><Nav active={0} />
  </>
);

const PTS = [60, 38, 52, 46, 70, 64, 72, 58, 74, 70, 66, 72, 40, 68, 74, 72, 70, 62, 30, 68, 74];
const CW = 236, CH = 80;
const LINE = PTS.map((y, i) => `${i ? 'L' : 'M'}${((i * CW) / (PTS.length - 1)).toFixed(1)} ${y}`).join(' ');
const BARS = [
  ['Other', '₹18,400', 38, '#f0b445', '•'],
  ['Travel', '₹9,800', 20, '#5b7cf6', '✈'],
  ['Bills', '₹8,700', 18, '#2fce96', '▤'],
  ['Shopping', '₹4,900', 10, '#7b6cf6', '◆'],
];

const Insights = () => (
  <>
    <StatusBar /><TopBar />
    <div className="pbody">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '4px 2px 10px' }}>
        <div className="ptitle" style={{ margin: 0 }}>Insights</div><span className="pill">Oct ▾</span>
      </div>
      <div className="pcard">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 8, color: '#8c9a95' }}>Spent so far</span><span className="up">+18% vs last month</span>
        </div>
        <div className="bigamt">₹48,230</div>
        <div style={{ fontSize: 6, color: '#8c9a95' }}>Tap or drag on the chart to see a day</div>
        <svg viewBox={`0 0 ${CW} ${CH + 4}`} width="100%" style={{ margin: '8px 0 6px' }}>
          <defs><linearGradient id="ig" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#2fce96" stopOpacity=".35" /><stop offset="1" stopColor="#2fce96" stopOpacity="0" /></linearGradient></defs>
          <path d={`${LINE} L${CW} ${CH} L0 ${CH}Z`} fill="url(#ig)" />
          <path d={LINE} fill="none" stroke="#2fce96" strokeWidth="1.6" strokeLinejoin="round" />
          <circle cx={CW} cy={PTS[PTS.length - 1]} r="2.5" fill="#2fce96" />
        </svg>
        <div style={{ fontSize: 7 }}>On pace for ~₹65,900 by month end</div>
        <div style={{ fontSize: 6, color: '#8c9a95' }}>Regular ₹2,190/day + ₹9,800 Goa trip</div>
        <div className="stats3">
          <div><b>₹2,190</b><small>Daily avg (excl. trip)</small></div>
          <div><b>₹6,750</b><small>Biggest day</small></div>
          <div style={{ textAlign: 'right' }}><b>64</b><small>Txns</small></div>
        </div>
      </div>
      <div className="pcard" style={{ marginTop: 7 }}>
        <div style={{ fontSize: 8.5, fontWeight: 700, color: '#8c9a95' }}>Where it went</div>
        {BARS.map(([n, v, pct, c, ico]) => (
          <div className="pbar" key={n}>
            <span className="bi" style={{ color: c }}>{ico}</span>
            <div className="bb">
              <div className="bh"><span>{n}</span><span>{v}</span></div>
              <div className="tr"><i style={{ width: `${pct * 1.6}%`, background: c }} /></div>
              <small>{pct}% of this period</small>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Nav active={3} />
  </>
);

/* ---- Map: drawn to match the app's dark Google map (Hinjawadi area) ---- */
// seeded random so the street grid is identical on every render
const rand = (() => { let x = 7; return () => ((x = (x * 16807) % 2147483647) / 2147483647); })();
const MINOR = Array.from({ length: 150 }, () => {
  const x = rand() * 280 - 10, y = rand() * 600 - 20, a = rand() * Math.PI, l = 10 + rand() * 34;
  return `M${x.toFixed(1)} ${y.toFixed(1)} l${(Math.cos(a) * l).toFixed(1)} ${(Math.sin(a) * l).toFixed(1)}`;
}).join(' ');
const MEDIUM = [
  'M-5 120 C 40 112, 90 122, 140 118 S 230 110, 270 116',
  'M20 230 C 60 236, 95 246, 120 262 S 150 300, 175 296',
  'M150 250 C 190 248, 230 255, 270 252',
  'M60 400 C 90 420, 120 430, 160 428 S 200 440, 220 470',
  'M175 300 C 200 330, 210 380, 240 420',
  'M100 470 C 130 480, 170 470, 210 490',
  'M200 120 C 205 160, 215 200, 230 240',
  'M40 330 C 45 360, 55 380, 70 400',
];
const MAJOR = [
  'M-5 152 C 40 160, 70 174, 98 184 S 150 196, 200 199 S 245 203, 270 205', // Hinjawadi Rd
  'M136 70 C 124 110, 108 150, 98 188', // Dange Chowk Rd
  'M120 196 C 128 215, 134 236, 138 262 S 150 320, 158 352 S 166 400, 170 430', // Sakhare Vasti Rd
  'M22 280 C 50 300, 78 318, 98 330 S 128 340, 140 342', // I2it College Rd
  'M8 150 C 14 190, 22 230, 28 270 S 40 360, 48 430 S 60 520, 70 580', // Rajiv Gandhi MIDC Rd
  'M190 70 C 205 100, 222 135, 236 165 S 255 200, 262 215', // New Wakad–Hinjawadi Rd
  'M98 330 C 90 380, 84 420, 80 470', // to Blue Ridge
];
const RIVER = 'M-10 470 C 40 455, 90 470, 140 462 S 220 440, 275 452 L 275 470 C 220 460, 150 482, 100 484 S 30 476, -10 488 Z';
const CLUSTERS = [[116, 192, 2], [135, 228, 3], [132, 253, 2], [66, 391, 2]];
const PINS = [[142, 197], [228, 201], [57, 368]];
const label = { fill: '#9aa4a0', fontFamily: 'Inter, sans-serif' };

const MapScreen = () => (
  <>
    <svg className="mapsv" viewBox="0 0 262 566" preserveAspectRatio="xMidYMid slice">
      <rect width="262" height="566" fill="#1c2421" />
      <path d={RIVER} fill="#18272a" />
      <path d={MINOR} stroke="#262f2c" strokeWidth=".8" strokeLinecap="round" fill="none" />
      <path d={MEDIUM.join(' ')} stroke="#2c3633" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d={MAJOR.join(' ')} stroke="#344039" strokeWidth="3.4" strokeLinecap="round" fill="none" />

      {/* area + road labels */}
      <text x="1" y="270" fontSize="11.5" {...label} fill="#aeb8b4">Hinjawadi</text>
      <text x="9" y="285" fontSize="10" {...label} fill="#aeb8b4">हिंजवडी</text>
      <text x="163" y="119" fontSize="5.5" letterSpacing=".6" textAnchor="middle" {...label}>BHATEWARA</text>
      <text x="163" y="126" fontSize="5.5" letterSpacing=".6" textAnchor="middle" {...label}>NAGAR</text>
      <text x="60" y="211" fontSize="5" textAnchor="middle" {...label} fill="#7f8a86">Hinjewadi</text>
      <text x="60" y="218" fontSize="5" textAnchor="middle" {...label} fill="#7f8a86">Grampanchayat</text>
      <text x="60" y="225" fontSize="5" textAnchor="middle" {...label} fill="#7f8a86">Water Tank</text>
      <text x="74" y="384" fontSize="6.5" letterSpacing=".6" textAnchor="middle" {...label} fill="#b8c1bd">BLUE RIDGE</text>
      <text fontSize="5.8" {...label} transform="translate(48 164) rotate(24)">Hinjawadi Rd</text>
      <text fontSize="5.8" {...label} transform="translate(196 196) rotate(4)">Hinjawadi Rd</text>
      <text fontSize="5.8" {...label} transform="translate(106 160) rotate(-68)">Dange Chowk Rd</text>
      <text fontSize="5.8" {...label} transform="translate(154 312) rotate(80)">Sakhare Vasti Rd</text>
      <text fontSize="5.8" {...label} transform="translate(48 306) rotate(30)">I2it College Rd</text>
      <text fontSize="5.8" {...label} transform="translate(14 176) rotate(76)">Rajiv Gandhi MIDC Rd</text>
      <text fontSize="5.8" {...label} transform="translate(206 96) rotate(62)">New Wakad - Hinjawadi Rd</text>

      {/* expense clusters */}
      {CLUSTERS.map(([x, y, n]) => (
        <g key={`${x}${y}`}>
          <circle cx={x} cy={y} r="13" fill="#2fce96" fillOpacity=".22" />
          <circle cx={x} cy={y} r="9.5" fill="#33d69c" stroke="#1f8c66" strokeWidth=".8" />
          <text x={x} y={y + 3} textAnchor="middle" fontSize="8" fontWeight="700" fill="#0c1f17" fontFamily="Inter, sans-serif">{n}</text>
        </g>
      ))}
      {/* cluster with your location */}
      <circle cx="131" cy="285" r="13" fill="#2fce96" fillOpacity=".22" />
      <circle cx="129" cy="282" r="9.5" fill="#33d69c" stroke="#1f8c66" strokeWidth=".8" />
      <circle cx="131" cy="286" r="9.5" fill="#33d69c" stroke="#1f8c66" strokeWidth=".8" />
      <circle cx="131" cy="286" r="4.2" fill="#fff" />
      <circle cx="131" cy="286" r="3.1" fill="#4285f4" />
      {/* single expenses (money pins) */}
      {PINS.map(([x, y]) => (
        <g key={`p${x}${y}`}>
          <circle cx={x} cy={y} r="7.5" fill="#f2a43a" />
          <text x={x} y={y + 2.6} textAnchor="middle" fontSize="7.5">💸</text>
        </g>
      ))}
      <text x="4" y="444" fontSize="9.5" fontWeight="700" fill="#e8ecea" fontFamily="Arial, sans-serif">Google</text>
    </svg>
    <div style={{ position: 'relative', zIndex: 1 }}><StatusBar /><TopBar /></div>
    <div className="msearch"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#c9d1ce" strokeWidth="2.6" strokeLinecap="round"><circle cx="11" cy="11" r="6" /><path d="m20 20-4-4" /></svg>Search your expenses by merchant</div>
    <div className="mfab" style={{ top: 126 }}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#e8ecea" strokeWidth="2.2"><circle cx="12" cy="12" r="5" /><path d="M12 2v4M12 18v4M2 12h4M18 12h4" /></svg></div>
    <div className="mfab" style={{ top: 157 }}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#e8ecea" strokeWidth="2.2" strokeLinecap="round"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" /></svg></div>
    <div className="msheet"><div><small>This month · 41 in view</small><b>₹22,600</b></div><span className="chev">⌃</span></div>
    <Nav active={2} />
  </>
);

const Trips = () => (
  <>
    <StatusBar /><TopBar />
    <div style={{ filter: 'brightness(.55)' }}><HomeBody /></div>
    <div className="dd">
      <div className="it on">⌂ Main</div>
      <div className="lab">PAST TRIPS</div>
      <div className="it">⌖ Goa <small>1 – 5 Oct · Closed</small></div>
      <div className="it" style={{ color: '#2fce96' }}>⌕ All trips</div>
      <div className="it" style={{ color: '#2fce96' }}>＋ New trip</div>
    </div>
    <Nav active={0} />
  </>
);

const CATS = [
  ['Food', '#4a2420', '#ff8a7a', '🍴'], ['Groceries', '#1a3640', '#4fc3e8', '🛒'], ['Transport', '#3a3220', '#f0b445', '🚕'],
  ['Travel', '#1f2a4a', '#7f9cff', '✈'], ['Shopping', '#2e2450', '#a58cff', '◆'], ['Bills', '#173a2c', '#2fce96', '▤'],
  ['Fuel', '#4a2420', '#ff8a7a', '⛽'], ['Health', '#4a2024', '#ff6b7a', '✚'], ['Subscriptions', '#24294a', '#8a9cff', '↻'],
];

const AddBill = () => (
  <>
    <StatusBar />
    <div className="pbody" style={{ paddingTop: 10 }}>
      <div className="hcard" style={{ padding: 14 }}>
        <div className="lbl">NEW EXPENSE</div>
        <div style={{ fontSize: 17, fontWeight: 800, margin: '4px 0' }}>Add a bill</div>
        <div style={{ fontSize: 7.5, opacity: 0.75 }}>Enter the bill details, then choose who shared it.</div>
      </div>
      <div className="pcard" style={{ marginTop: 8 }}>
        <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 8 }}>Expense details</div>
        <div className="fld" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div><small>Bill amount</small><span style={{ color: '#2fce96', fontSize: 12 }}>₹</span></div>
          <span style={{ fontSize: 18, color: '#6b7773' }}>0</span>
        </div>
        <div className="fld">Description</div>
        <div className="row2" style={{ margin: '0 0 6px' }}>
          <div className="fld" style={{ margin: 0 }}><small>Date</small><b style={{ color: '#eef2ef' }}>22-Oct-26</b></div>
          <div className="fld" style={{ margin: 0 }}><small>Time</small><b style={{ color: '#eef2ef' }}>8:07 PM</b></div>
        </div>
        <div style={{ fontSize: 8.5, fontWeight: 700, margin: '8px 0 6px' }}>Category</div>
        <div className="cats">
          {CATS.map(([n, bg, c, ico], i) => (
            <div key={n} className={i === 0 ? 'on' : ''}><i style={{ background: bg, color: c }}>{ico}</i>{n}</div>
          ))}
        </div>
      </div>
    </div>
    <div className="home-ind" />
  </>
);

const Scan = () => (
  <>
    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 50% at 50% 45%,#3a2a22,#0b0a09 70%)' }} />
    <div style={{ position: 'relative' }}><StatusBar /></div>
    <div className="tb" style={{ position: 'relative', zIndex: 2 }}>
      <span style={{ fontSize: 14 }}>✕</span><b style={{ fontSize: 10 }}>Scan &amp; Pay</b><span style={{ fontSize: 10 }}>ϟ</span>
    </div>
    <div className="scanbox"><i /><i /><i /><i /><div className="scanline" /></div>
    <div style={{ position: 'absolute', top: 356, left: 0, right: 0, textAlign: 'center', fontSize: 9, fontWeight: 600 }}>Point at a UPI QR code</div>
    <div style={{ position: 'absolute', bottom: 60, left: '50%', transform: 'translateX(-50%)', border: '1px solid #444', borderRadius: 999, padding: '7px 12px', fontSize: 8, whiteSpace: 'nowrap' }}>▣ Pick from gallery</div>
    <div className="home-ind" />
  </>
);

const APPS = [
  ['#2fce96', '₹'], ['#4285f4', 'M'], ['#ea4335', '▶'], ['#25d366', '✆'],
  ['#ffffff', '◐'], ['#3a4642', '⚙'], ['#f0b445', '★'], ['#7b6cf6', '♪'],
];

const Lock = () => (
  <>
    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(120% 70% at 30% 10%,#2f6b52,#123226 45%,#08130e 85%)' }} />
    <div style={{ position: 'relative' }}><StatusBar /></div>
    <div style={{ position: 'relative', textAlign: 'center', marginTop: 18 }}>
      <div style={{ fontSize: 9, opacity: 0.8 }}>Thu, 22 Oct</div>
      <div style={{ fontSize: 54, fontWeight: 300, letterSpacing: '-.04em', lineHeight: 1.05 }}>9:41</div>
    </div>
    <div style={{ position: 'relative', margin: '14px 10px 0' }}><Widget size={5.6} /></div>
    <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12, padding: '18px 22px 0' }}>
      {APPS.map(([c, g], i) => (
        <div key={i} style={{ aspectRatio: '1', borderRadius: 12, background: c, color: c === '#ffffff' ? '#0d1411' : '#fff', display: 'grid', placeItems: 'center', fontSize: 13, fontWeight: 700 }}>{g}</div>
      ))}
    </div>
    <div style={{ position: 'absolute', left: 14, right: 14, bottom: 16, height: 46, borderRadius: 18, background: 'rgba(255,255,255,.08)' }} />
    <div className="home-ind" />
  </>
);

const SCREENS = { lock: Lock, home: Home, friends: Friends, history: History, insights: Insights, map: MapScreen, trips: Trips, addbill: AddBill, scan: Scan };

export default function Phone({ screen = 'home', className = '', style }) {
  const Screen = SCREENS[screen];
  return (
    <div className={`phone ${className}`} style={style} aria-hidden="true">
      <div className="scr"><Screen /></div>
    </div>
  );
}
