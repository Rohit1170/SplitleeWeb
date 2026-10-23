import Phone from '@/components/Phone';
import Reveal from '@/components/Reveal';

const DOWNLOAD_URL = '#'; // TODO: put the APK / Play Store link here

const sm = { zoom: 0.86 };
const xs = { zoom: 0.76 };

const Svg = ({ children, size = 18, sw = 2.2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">{children}</svg>
);

const Logo = ({ big }) => (
  <a href="#" className={`flex items-center gap-2 font-mono font-extrabold text-lime ${big ? 'text-lg' : 'text-[15px]'}`}>splitlee</a>
);

const Checks = ({ items, dark }) => (
  <ul className="mt-6 grid gap-3.5">
    {items.map(([t, d]) => (
      <li key={t} className="flex items-start gap-3">
        <span className={`mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-md text-[11px] ${dark ? 'bg-mint text-ink' : 'bg-ink text-lime'}`}>✓</span>
        <div><b className="block text-sm">{t}</b><span className="text-[13px] opacity-60">{d}</span></div>
      </li>
    ))}
  </ul>
);

const MonoStat = ({ v, l }) => (
  <div>
    <b className="block font-mono text-[34px] font-bold leading-none tracking-[-.03em]">{v}</b>
    <span className="mt-1.5 block text-xs opacity-60">{l}</span>
  </div>
);

const Split = ({ children, rev, light }) => (
  <div className={`grid items-center gap-10 lg:gap-14 ${rev ? 'lg:grid-cols-[1fr_1.1fr]' : 'lg:grid-cols-[1.1fr_1fr]'} ${light ? 'on-light' : ''}`}>{children}</div>
);

const PhoneCol = ({ screen, className = '', style = sm }) => (
  <div className={`rv flex justify-center ${className}`}><Phone screen={screen} style={style} /></div>
);

/* floating tile used around the hero wordmark */
const Tile = ({ className, children }) => (
  <span className={`absolute grid place-items-center rounded-2xl font-sans text-sm font-extrabold tracking-normal shadow-[0_20px_40px_-12px_rgba(0,0,0,.6)] ${className}`}>{children}</span>
);

/* widget callout label */
const Callout = ({ side, title, sub, className }) => (
  <div className={`absolute hidden items-center gap-2 lg:flex ${side === 'l' ? 'flex-row-reverse text-right' : ''} ${className}`}>
    <span className="h-2.5 w-2.5 flex-none rounded-full bg-mint shadow-[0_0_0_4px_rgba(47,206,150,.18)]" />
    <span className="h-px w-10 bg-mint/40" />
    <div className="w-[140px]"><b className="block text-xs">{title}</b><span className="text-[11px] text-muted">{sub}</span></div>
  </div>
);

const FEATURES = [
  ['Scan & Pay', 'Point at any UPI QR and pay — logged instantly.', 'mint', <path key="a" d="M3 7V4h3M21 7V4h-3M3 17v3h3M21 17v3h-3M7 12h10" />],
  ['Cards spotted', 'Accounts picked up straight from bank SMS.', 'dark', <><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 10h18" /></>],
  ['Groups', 'Roommates, office lunch, the trip gang.', 'white', <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 19c0-3 3-5 6-5s6 2 6 5M15 15c3 0 6 1 6 4" /></>],
  ['Search anything', 'By merchant, friend or amount.', 'lime', <><circle cx="11" cy="11" r="6" /><path d="m20 20-4-4" /></>],
  ['Smart reminders', 'Nudge friends with your pay QR attached.', 'dark', <path d="M4 5h16v10H8l-4 4z" />],
  ['11 categories', 'Food, travel, bills, fuel and more.', 'white', <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />],
  ['Share insights', "Export your month's summary in a tap.", 'mint', <path d="M12 3v12M7 8l5-5 5 5M5 21h14" />],
  ['Works offline', 'No internet needed. Ever.', 'dark', <path d="M2 2l20 20M8.5 16.5a5 5 0 0 1 7 0M5 13a10 10 0 0 1 5-2.8M19 13a10 10 0 0 0-2-1.5M12 20h.01" />],
];
const TILE = {
  mint: 'bg-mint text-ink',
  lime: 'bg-lime text-ink',
  white: 'bg-[#eef2ef] text-ink',
  dark: 'bg-[#16241e] border border-white/[.06] text-white',
};
const TILE_ICON = { mint: 'text-ink', lime: 'text-ink', white: 'text-mint-deep', dark: 'text-amber' };

export default function Page() {
  return (
    <>
      <Reveal />

      <main className="mx-auto max-w-[1120px] px-4">
        {/* ============ HERO ============ */}
        <section className="relative mt-4 overflow-hidden rounded-[28px] bg-[radial-gradient(90%_70%_at_50%_30%,#1a3a2b_0%,#10241b_45%,#0b1712_100%)] px-5 pb-10 pt-5 sm:px-8">
          <nav className="flex items-center justify-between">
            <Logo />
            <div className="hidden gap-6 text-xs text-muted md:flex">
              {[['Product', '#features'], ['Features', '#how'], ['Splitting', '#friends'], ['Privacy', '#'], ['FAQ', '#']].map(([l, h]) => (
                <a key={l} href={h} className="hover:text-white">{l}</a>
              ))}
            </div>
            <a href="#download" className="rounded-full bg-mint px-3.5 py-2 text-[11px] font-bold text-ink">Download for Android</a>
          </nav>

          <div className="relative mx-auto mt-16 max-w-[860px] sm:mt-20">
            <Tile className="-top-6 left-[8%] h-11 w-11 -rotate-12 bg-lime text-ink sm:-top-10 sm:h-14 sm:w-14"><Svg size={22}><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M7 12h4" /></Svg></Tile>
            <Tile className="-top-8 right-[10%] h-10 w-10 rotate-12 border border-white/10 bg-[#1d3a2d] text-mint sm:-top-12 sm:h-12 sm:w-12"><Svg size={18}><path d="M3 12h4l3-8 4 16 3-8h4" /></Svg></Tile>
            <Tile className="left-0 top-[46%] -rotate-[8deg] rounded-xl bg-mint px-2.5 py-1.5 text-[11px] text-ink sm:-left-6 sm:px-3 sm:text-sm">split</Tile>
            <Tile className="right-0 top-[52%] rotate-[6deg] rounded-xl border border-white/10 bg-[#1a2d24] px-2.5 py-1.5 font-mono text-[11px] text-lime sm:-right-6 sm:text-xs">₹0 ▮</Tile>

            <h1 className="text-center font-mono text-[clamp(52px,14vw,150px)] font-extrabold leading-none tracking-[-.05em] text-lime drop-shadow-[0_10px_40px_rgba(200,242,109,.18)]">splitlee</h1>
          </div>

          <p className="mx-auto mt-6 max-w-[520px] text-center text-sm text-[#c5d0cb]">
            Your bank texts. Splitlee does the math. Split, settle and track — all on your phone.
          </p>
          <div className="mt-5 flex justify-center gap-2.5">
            <a href="#download" className="rounded-full bg-mint px-4 py-2 text-xs font-bold text-ink">Get the app</a>
            <a href="#how" className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold">See how it works</a>
          </div>

          <div className="relative mt-12 flex flex-wrap items-end justify-between gap-4">
            <div className="rv rounded-2xl border border-white/[.07] bg-[#0f1f18]/80 px-4 py-3 backdrop-blur">
              <b className="block text-lg">+₹1,371</b>
              <span className="text-[11px] text-muted">settled this week · Saikat</span>
            </div>
            <div className="rv flex items-center gap-2 rounded-full border border-white/[.07] bg-[#0f1f18]/80 px-3 py-2 text-[11px] text-[#c5d0cb]">
              <span className="grid h-5 w-5 place-items-center rounded-md bg-mint text-[10px] font-bold text-ink">₹</span>
              ₹426 spent at Abuz · <span className="text-mint">Split?</span>
            </div>
            <Tile className="!static h-11 w-11 rotate-6 bg-lime text-ink"><Svg size={20}><path d="M5 12l4 4 10-10" /></Svg></Tile>
          </div>
        </section>

        {/* ============ 01 EVERY RUPEE ============ */}
        <section id="features" className="panel bg-glass text-ink">
          <Split light>
            <div className="rv">
              <div className="eyebrow">01 — SMS tracking</div>
              <h2 className="h2">Every rupee,<br />sorted the moment<br />you spend it.</h2>
              <p className="lead">Splitlee reads your bank SMS, picks out the amount and merchant, and files it under the right category. No typing, no bank login.</p>
              <Checks items={[
                ['Reads bank texts', 'UPI, cards, wallets and pay-later.'],
                ['Spots your accounts', 'Cards show up on Home with what they spent.'],
                ['Cash in seconds', 'Tap + to add anything paid in cash.'],
              ]} />
            </div>
            <PhoneCol screen="home" />
          </Split>
        </section>

        {/* ============ 02 WIDGET ============ */}
        <section className="panel gpanel">
          <div className="rv text-center">
            <div className="eyebrow justify-center">02 — The widget</div>
            <h2 className="h2">Your month,<br />on your home screen.</h2>
            <p className="lead mx-auto">No need to open the app. The Splitlee widget shows what you spent, what you&apos;re owed, and how your month is going.</p>
          </div>

          <div className="rv relative mx-auto mt-10 max-w-[760px]">
            <Callout side="l" title="Today at a glance" sub="Spent today, live" className="-left-6 top-6" />
            <Callout side="l" title="Daily average" sub="Trips kept out" className="-left-6 top-[44%]" />
            <Callout side="l" title="Today's category" sub="Food, travel…" className="-left-6 bottom-6" />
            <Callout title="Quick add" sub="One tap to log cash" className="-right-6 top-6" />
            <Callout title="Owed to you" sub="Across all friends" className="-right-6 top-[44%]" />
            <Callout title="Who owes you" sub="Tap to remind" className="-right-6 bottom-6" />

            <div className="mx-auto max-w-[400px] rounded-3xl border border-white/[.07] bg-[#0f1c16] p-5 shadow-[0_30px_60px_-20px_rgba(0,0,0,.7)]">
              <div className="flex items-center justify-between text-[11px] text-muted">
                <span>Today · Oct 22</span>
                <span className="grid h-6 w-6 place-items-center rounded-full bg-mint text-sm text-ink">+</span>
              </div>
              <small className="mt-1 block text-[10px] tracking-[.12em] text-muted">TOTAL EXPENSES</small>
              <div className="text-[34px] font-extrabold tracking-[-.03em]">₹1,01,694</div>
              <small className="text-[11px] text-mint">▼ ₹2,136 vs yesterday</small>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {[['Spent today', '₹237', ''], ['Daily average', '₹2,854', ''], ['Owed to you', '₹43,887', 'text-mint'], ['You owe', '₹0', 'text-amber']].map(([l, v, c]) => (
                  <div key={l} className="rounded-xl bg-white/[.05] px-3 py-2"><small className="block text-[10px] text-muted">{l}</small><b className={`text-[15px] ${c}`}>{v}</b></div>
                ))}
              </div>
            </div>
          </div>

          <div className="rv mt-10 grid gap-4 md:grid-cols-[1fr_1.3fr_1fr]">
            <div className="flex flex-col justify-end rounded-2xl p-4">
              <span className="mb-3 text-amber"><Svg size={20}><path d="M13 2 4 14h7l-1 8 9-12h-7z" /></Svg></span>
              <b className="text-sm">Updates itself</b>
              <p className="mt-1 text-xs text-muted">Every new bank SMS refreshes the widget — nothing to sync.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 rounded-2xl bg-[linear-gradient(135deg,#1c3a2d,#132820)] p-3">
              <div className="rounded-xl bg-[#0f1c16] p-3"><small className="text-[10px] text-muted">Today</small><b className="block text-xl">₹237</b><small className="text-[10px] text-muted">1 expense</small></div>
              <div className="rounded-xl bg-[#0f1c16] p-3"><small className="text-[10px] text-muted">Owed</small><b className="block text-xl text-mint">₹43,887</b><small className="text-[10px] text-muted">2 friends</small></div>
            </div>
            <div className="rounded-2xl bg-lime p-4 text-ink">
              <span className="mb-3 block"><Svg size={20}><rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></Svg></span>
              <b className="text-sm">Stays private</b>
              <p className="mt-1 text-xs opacity-70">Read on-device. Nothing leaves your phone.</p>
            </div>
          </div>
          <p className="mt-6 text-center text-[11px] text-muted">Widget sizes: 4×2 and 2×2. Long-press your home screen → Widgets → Splitlee.</p>
        </section>

        {/* ============ 03 GLANCE ============ */}
        <section className="panel bg-glass text-ink">
          <Split rev light>
            <PhoneCol screen="lock" className="order-2 lg:order-none" />
            <div className="rv">
              <div className="eyebrow">03 — At a glance</div>
              <h2 className="h2">Check your spend<br />the way you check<br />the time.</h2>
              <p className="lead">Unlock, look, done. The widget sits next to your apps, so your month is always one glance away.</p>
              <div className="mt-8 flex gap-12"><MonoStat v="1 tap" l="To split any expense" /><MonoStat v="0 s" l="Spent typing amounts" /></div>
            </div>
          </Split>
        </section>

        {/* ============ 04 TYPE ============ */}
        <section className="panel bg-lime text-ink">
          <div className="eyebrow">04 — Type</div>
          <div className="rv grid items-end gap-8 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <div className="text-[clamp(130px,17vw,210px)] font-black leading-[.8] tracking-[-.07em]">Aa</div>
              <p className="mt-4 text-xs opacity-70"><b>Inter</b> — clean numbers for money that moves fast.</p>
            </div>
            <div>
              <div className="font-mono text-[clamp(34px,4vw,48px)] font-bold leading-tight">₹123<br />!@%&amp;</div>
              <div className="mt-4">
                {[['Black', '₹1,01,694', 'font-black'], ['Semibold', 'Owed to you', 'font-semibold'], ['Regular', 'Groceries · Food', 'font-normal'], ['Light', '8:41', 'font-light']].map(([w, s, c]) => (
                  <div key={w} className="flex justify-between border-b border-ink/15 py-2 text-[13px]"><span className="opacity-60">{w}</span><span className={c}>{s}</span></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ 05 SMS → SPLIT ============ */}
        <section id="how" className="panel gpanel">
          <div className="rv"><div className="eyebrow">05 — From SMS to split</div><h2 className="h2">From bank SMS to split in one<br />tap.</h2></div>
          <div className="rv mt-10 grid items-center gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
            <div>
              <div className="notif !max-w-none">
                <div className="nh"><span className="ap bg-[#1e4f8a]">✉</span>AX-HDFCBK<span>now</span></div>
                <b className="!text-sm">HDFC Bank</b><p className="!text-xs">Rs.789.00 debited from A/c XX0508 to DOMINOS.</p>
              </div>
              <p className="mt-2.5 text-[11px] text-muted">1. Your bank texts you</p>
            </div>
            <span className="hidden text-muted lg:block">→</span>
            <div>
              <div className="notif !max-w-none">
                <div className="nh"><span className="ap bg-mint text-[#06120d]">₹</span>Splitlee<span>now</span></div>
                <b className="!text-sm">₹789 spent at Dominos</b><p className="!text-xs">Who was this for?</p>
                <div className="nact"><span className="p !p-1.5 !text-xs">Split</span><span className="!p-1.5 !text-xs">Just me</span></div>
              </div>
              <p className="mt-2.5 text-[11px] text-muted">2. Splitlee asks once</p>
            </div>
            <span className="hidden text-muted lg:block">→</span>
            <div>
              <div className="notif !max-w-none">
                <div className="nh"><span className="ap bg-coral text-white">D</span>Dominos · split 3 ways<span className="font-bold text-white">₹789</span></div>
                <div className="mt-2 flex items-center gap-3">
                  <div className="grid h-12 w-12 flex-none grid-cols-4 gap-px rounded-md bg-white p-1">
                    {'1011010110010111'.split('').map((b, i) => <i key={i} className={b === '1' ? 'bg-ink' : 'bg-white'} />)}
                  </div>
                  <p className="!mt-0 !text-xs">Akhil and Saikat owe ₹263 each. Your pay QR goes with the reminder.</p>
                </div>
              </div>
              <p className="mt-2.5 text-[11px] text-muted">3. Friends pay you back</p>
            </div>
          </div>
        </section>

        {/* ============ 06 HOME HISTORY FRIENDS ============ */}
        <section className="panel gpanel">
          <div className="grid items-end gap-4 lg:grid-cols-[1fr_1fr]">
            <div className="rv"><div className="eyebrow">06 — The app</div><h2 className="h2">Home, history, friends.</h2></div>
            <p className="rv text-[13px] text-muted">Everything you open the app for — this month, every expense, who owes what — exactly where your thumb expects it.</p>
          </div>
          <div className="mt-10 grid justify-items-center gap-10 md:grid-cols-3 md:gap-4">
            {[['home', 'Home', 'month, accounts, today'], ['history', 'History', 'every expense, searchable'], ['friends', 'Friends', 'who owes you, settle up']].map(([s, t, d]) => (
              <figure key={s} className="rv flex flex-col items-center gap-3">
                <Phone screen={s} style={xs} />
                <figcaption className="text-[11px] text-muted"><b className="text-white">{t}</b> — {d}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ============ 07 GET PAID BACK ============ */}
        <section id="friends" className="panel bg-glass text-ink">
          <Split light>
            <div className="rv">
              <div className="eyebrow">07 — Splitting</div>
              <h2 className="h2">Get paid back<br />without chasing.</h2>
              <p className="lead">Split a bill with anyone. Splitlee keeps the running balance and sends a reminder with your UPI QR, so paying you back takes them one tap.</p>
              <div className="mt-6 flex max-w-[340px] items-center gap-3 rounded-2xl bg-ink px-3.5 py-3 text-white shadow-[0_20px_40px_-20px_rgba(13,20,17,.6)]">
                <span className="av !h-8 !w-8 !text-xs">A</span>
                <div className="min-w-0"><b className="block text-xs">Reminder sent to Akhil</b><small className="block truncate text-[11px] text-muted">₹16,755.82 · pay via UPI QR</small></div>
                <span className="ml-auto text-mint">✓</span>
              </div>
            </div>
            <PhoneCol screen="friends" />
          </Split>
        </section>

        {/* ============ 08 MAP ============ */}
        <section className="panel gpanel">
          <Split rev>
            <PhoneCol screen="map" className="order-2 lg:order-none" />
            <div className="rv">
              <div className="eyebrow">08 — Map</div>
              <h2 className="h2">See where your<br />money went.</h2>
              <p className="lead">Every expense pinned where it happened. Zoom into your neighbourhood and see which street is eating your month.</p>
              <Checks dark items={[
                ['Clusters by place', 'Busy spots group together.'],
                ['Search by merchant', 'Every Zomato order, one search.'],
                ['Totals in view', 'What you spent in the area on screen.'],
              ]} />
            </div>
          </Split>
        </section>

        {/* ============ 09 INSIGHTS ============ */}
        <section className="panel bg-lime text-ink">
          <Split light>
            <div className="rv">
              <div className="eyebrow">09 — Insights</div>
              <h2 className="h2">Know your pace<br />before the month<br />ends.</h2>
              <p className="lead">Splitlee projects where your month will land, shows your biggest day, and breaks spending into categories.</p>
              <div className="mt-8 flex gap-12"><MonoStat v="~₹1.27L" l="On pace by month end" /><MonoStat v="98" l="Transactions this month" /></div>
            </div>
            <PhoneCol screen="insights" />
          </Split>
        </section>

        {/* ============ 10 TRIPS ============ */}
        <section className="panel gpanel">
          <Split rev>
            <PhoneCol screen="trips" className="order-2 lg:order-none" />
            <div className="rv">
              <div className="eyebrow">10 — Trips</div>
              <h2 className="h2">Goa doesn&apos;t<br />wreck your<br />monthly average.</h2>
              <p className="lead">Start a trip and its expenses go into their own book. Your everyday average stays honest.</p>
              <div className="mt-6 grid max-w-[340px] grid-cols-2 gap-3">
                <div className="rounded-2xl bg-lime p-3.5 text-ink">
                  <Svg size={16}><path d="M2 16l20-8-8 14-2-6z" /></Svg>
                  <b className="mt-3 block text-sm">Goa · ₹38,901</b><small className="text-[11px] opacity-70">1–5 Oct · closed</small>
                </div>
                <div className="rounded-2xl border border-white/[.08] bg-[#16241e] p-3.5">
                  <span className="text-mint"><Svg size={16}><path d="M12 5v14M5 12h14" /></Svg></span>
                  <b className="mt-3 block text-sm">New trip</b><small className="text-[11px] text-muted">Separate from Main</small>
                </div>
              </div>
            </div>
          </Split>
        </section>

        {/* ============ 11 SMALL THINGS ============ */}
        <section className="panel gpanel">
          <div className="rv"><div className="eyebrow">11 — Details</div><h2 className="h2">Small things that add up.</h2></div>
          <div className="rv mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {FEATURES.map(([t, d, tone, icon]) => (
              <div key={t} className={`flex min-h-[150px] flex-col rounded-2xl p-4 ${TILE[tone]}`}>
                <span className={TILE_ICON[tone]}><Svg size={18}>{icon}</Svg></span>
                <b className="mt-auto pt-6 text-sm">{t}</b>
                <p className="mt-1 text-[11px] opacity-70">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============ 12 COLOUR ============ */}
        <section className="panel bg-glass text-ink">
          <div className="rv"><div className="eyebrow">12 — Colour</div><h2 className="h2">Mint for money. Forest for calm.</h2></div>
          <div className="rv mt-8 grid h-[200px] grid-cols-[2fr_1fr_1fr_1fr_1fr] overflow-hidden rounded-2xl">
            {[['Forest', '#123226', 'text-white'], ['Mint', '#2FCE96', ''], ['Lime', '#C8F26D', ''], ['Glass', '#9FEBC8', ''], ['Night', '#050706', 'text-white']].map(([n, hex, c]) => (
              <div key={n} className={`flex flex-col justify-between p-3 ${c}`} style={{ background: hex }}>
                <span className="text-xs font-bold">{n}</span>
                <small className="font-mono text-[10px] opacity-70">{hex}</small>
              </div>
            ))}
          </div>
        </section>

        {/* ============ 13 PHONE FAN ============ */}
        <section className="panel gpanel !py-14">
          <div className="rv flex items-center justify-center">
            <Phone screen="history" style={xs} className="-mr-6 hidden -rotate-[14deg] translate-y-6 lg:block" />
            <Phone screen="lock" style={sm} className="z-[1] -mr-6 hidden -rotate-[7deg] sm:block" />
            <Phone screen="home" style={sm} className="z-[2] rotate-[2deg]" />
            <Phone screen="map" style={xs} className="-ml-6 hidden rotate-[12deg] translate-y-8 sm:block" />
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section id="download" className="panel bg-lime !py-10 text-ink">
          <div className="rv flex flex-wrap items-center justify-between gap-6">
            <div>
              <div className="eyebrow">Get Splitlee</div>
              <h2 className="h2">Add the widget.<br />Stop doing math.</h2>
            </div>
            <div className="flex flex-col items-end gap-2">
              <a href={DOWNLOAD_URL} className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-xs font-bold text-lime">
                <Svg size={14} sw={2.6}><path d="M12 3v12M7 10l5 5 5-5M5 21h14" /></Svg>Get it for Android
              </a>
              <small className="text-[11px] opacity-60">Free · works offline</small>
            </div>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="mx-auto max-w-[1120px] px-4 pt-10">
        <div className="grid gap-8 px-2 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-2 max-w-[280px] text-xs text-muted">Track every rupee from your bank SMS, split with friends, settle up — all on your phone.</p>
          </div>
          {[
            ['Product', [['Features', '#features'], ['Widget', '#features'], ['Splitting', '#friends'], ['Download', '#download']]],
            ['Help', [['Privacy policy', '#'], ['Terms', '#']]],
            ['Contact', [['Email us', 'mailto:rohitraj776407@gmail.com']]],
          ].map(([h, links]) => (
            <div key={h}>
              <h4 className="mb-2 text-[11px] font-medium text-muted">{h}</h4>
              {links.map(([l, href]) => <a key={l} href={href} className="block py-0.5 text-xs text-[#c7d1cc] hover:text-lime">{l}</a>)}
            </div>
          ))}
        </div>
        <div className="select-none overflow-hidden text-center font-mono text-[clamp(70px,19vw,230px)] font-extrabold leading-[.85] tracking-[-.05em] text-[#14231c]">splitlee</div>
      </footer>
    </>
  );
}
