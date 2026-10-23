import Phone from '@/components/Phone';
import Reveal from '@/components/Reveal';
import Widget from '@/components/Widget';
import WidgetCallouts from '@/components/WidgetCallouts';
import StackScroll from '@/components/StackScroll';
import HeroParallax from '@/components/HeroParallax';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import DownloadButton, { CTA_CAPTION } from '@/components/DownloadButton';
import { BANKS, CONTACT_EMAIL, LAUNCHED } from '@/lib/config';

const sm = { zoom: 'var(--pz-sm)' };
const xs = { zoom: 'var(--pz-xs)' };
const fanSm = { zoom: 0.86 };
const fanXs = { zoom: 0.76 };

const Svg = ({ children, size = 18, sw = 2.2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
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
    <b className="block font-mono text-[30px] font-bold leading-none tracking-[-.03em] sm:text-[34px]">{v}</b>
    <span className="mt-1.5 block text-xs opacity-60">{l}</span>
  </div>
);

const Split = ({ children, rev, light }) => (
  <div className={`grid items-center gap-10 lg:gap-14 ${rev ? 'lg:grid-cols-[1fr_1.1fr]' : 'lg:grid-cols-[1.1fr_1fr]'} ${light ? 'on-light' : ''}`}>{children}</div>
);

const PhoneCol = ({ screen, className = '', style = sm }) => (
  <div className={`rv flex justify-center ${className}`}><Phone screen={screen} style={style} /></div>
);

/* inline CTA used at the end of sections */
const SectionCTA = ({ tone = 'mint' }) => (
  <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
    <DownloadButton tone={tone} />
    <small className="text-[11px] opacity-60">{CTA_CAPTION}</small>
  </div>
);

/* d = how far it drifts with the mouse (px); negative moves the other way */
const drift = (d) => ({ '--tw-translate-x': `calc(var(--mx, 0) * ${d}px)`, '--tw-translate-y': `calc(var(--my, 0) * ${d}px)` });
const MOVE = 'transform transition-transform duration-500 ease-out';

const Tile = ({ className, children, d = 16 }) => (
  <span style={drift(d)} className={`absolute grid place-items-center rounded-2xl font-sans text-sm font-extrabold tracking-normal shadow-[0_20px_40px_-12px_rgba(0,0,0,.6)] ${MOVE} ${className}`}>{children}</span>
);

const Chip = ({ className, children, d = 20 }) => (
  <span style={drift(d)} className={`absolute hidden items-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-1.5 font-sans text-xs font-bold tracking-normal shadow-[0_16px_32px_-12px_rgba(0,0,0,.6)] lg:inline-flex ${MOVE} ${className}`}>{children}</span>
);

/* 10 — small things (every tile is a shipped feature) */
const FEATURES = [
  ['Scan & Pay', 'Scan a UPI QR and pay through your UPI app. Splitlee warns you before paying if a QR is likely to be declined, and the bank SMS confirms it.', 'mint', <path d="M3 7V4h3M21 7V4h-3M3 17v3h3M21 17v3h-3M7 12h10" />, true],
  ['Card or account', 'Each expense knows which bank it came from, and whether it was a card or an account.', 'dark', <><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 10h18" /></>],
  ['Groups', 'Flatmates, office lunch, the trip gang.', 'white', <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 19c0-3 3-5 6-5s6 2 6 5M15 15c3 0 6 1 6 4" /></>],
  ['Foreign spends', 'Card spends abroad show the original currency, with the ₹ cost worked out.', 'lime', <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>],
  ['WhatsApp reminders', 'Reminders go out on WhatsApp or SMS with your UPI QR for the exact amount.', 'dark', <path d="M4 5h16v10H8l-4 4z" />],
  ['Hide amounts', 'One switch hides the numbers when someone is looking.', 'white', <><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" /><path d="M3 3l18 18" /></>],
  ['Works offline', 'No account, no cloud, no internet permission.', 'dark', <path d="M2 2l20 20M8.5 16.5a5 5 0 0 1 7 0M5 13a10 10 0 0 1 5-2.8M19 13a10 10 0 0 0-2-1.5M12 20h.01" />],
];
const TILE = {
  mint: 'bg-mint text-ink',
  lime: 'bg-lime text-ink',
  white: 'bg-white text-ink ring-1 ring-inset ring-ink/[.06]',
  dark: 'bg-[#16241e] border border-white/[.06] text-white',
};
const TILE_ICON = { mint: 'text-ink', lime: 'text-ink', white: 'text-mint-deep', dark: 'text-amber' };

const PRIVACY = [
  ['Read on-device', 'Parsing happens on your phone. Splitlee has no server to send it to.', <><rect x="6" y="2" width="12" height="20" rx="3" /><path d="M11 18h2" /></>],
  ['No account, no cloud', 'Nothing to sign up for, nothing to leak.', <><path d="M7 18a5 5 0 0 1-.6-9.96A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9z" /><path d="M4 4l16 16" /></>],
  ['OTPs are never touched', 'OTP, offer and personal messages are rejected; only bank transaction alerts are read.', <><rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>],
  ['No bank login. Ever.', 'Splitlee never asks for your bank credentials.', <><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z" /><path d="m9 12 2 2 4-4" /></>],
];

const COMPARE = [
  ['Entering expenses', 'Automatic from bank SMS', 'Manual, every time'],
  ['Free plan limits', 'Unlimited', 'Capped at a few expenses a day, with ads'],
  ['Account needed', 'None — fully offline', 'Email sign-up required'],
  ['Settling up in India', 'WhatsApp reminder with your UPI QR', 'No UPI integration'],
  ['Your data', 'Stays on your phone', 'Stored on their servers'],
];

const FAQ = [
  ['Is Splitlee free?', 'Yes. Free to download and use.'],
  ['Is it safe to give SMS access?', 'Splitlee reads bank transaction alerts on your phone only. It has no internet permission, no account and no server — your data physically cannot be uploaded. OTPs and personal messages are ignored.'],
  ['Which banks and UPI apps work?', 'Most Indian banks and UPI apps that send debit SMS or notifications — HDFC, SBI, ICICI, Axis, Kotak, GPay, PhonePe, Paytm and more.'],
  ['Is there an iPhone version?', 'Not yet. Splitlee is Android-first because bank-SMS capture works best there.'],
  ['Do my friends need the app to pay me back?', 'No. They get a WhatsApp reminder with your UPI QR and pay from any UPI app.'],
  ['Does it work offline?', 'Completely. No internet is needed, ever.'],
];

const INSTALL = [
  ['Download the APK', "Tap download. It's a direct, signed build from us — no store account needed."],
  ['Allow the install', "Android will ask once if your browser can install apps. That's normal for direct downloads — tap Allow."],
  ['Grant two permissions', "SMS and notifications. That's how Splitlee sees your bank's debit alerts — everything is read on your phone, nothing is uploaded."],
];

export default function Page() {
  return (
    <>
      <Reveal />
      <StackScroll />
      <HeroParallax />
      <SiteHeader />

      <main className="mx-auto max-w-[1440px] px-4">
        {/* ============ HERO ============ */}
        <section id="hero" className="relative mt-4 flex snap-start scroll-mt-[108px] flex-col overflow-hidden rounded-[28px] bg-[radial-gradient(90%_70%_at_50%_30%,#1a3a2b_0%,#10241b_45%,#0b1712_100%)] px-5 pb-8 pt-10 sm:px-8 lg:min-h-[calc(100svh-124px)]">
          <div className="relative mx-auto mt-6 w-full max-w-[860px] sm:mt-12 lg:mt-auto">
            <Tile d={-20} className="hidden sm:grid -top-6 left-[8%] h-11 w-11 -rotate-12 bg-lime text-ink sm:-top-10 sm:h-14 sm:w-14 lg:-top-16 lg:left-[4%]"><Svg size={22}><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M7 12h4" /></Svg></Tile>
            <Tile d={-22} className="-top-8 right-[10%] h-10 w-10 rotate-12 border border-white/10 bg-[#1d3a2d] text-mint sm:-top-12 sm:h-12 sm:w-12"><Svg size={18}><path d="M3 12h4l3-8 4 16 3-8h4" /></Svg></Tile>
            <Tile d={34} className="hidden sm:grid left-0 top-[46%] -rotate-[8deg] rounded-xl bg-mint px-2.5 py-1.5 text-[11px] text-ink sm:-left-6 sm:px-3 sm:text-sm">split</Tile>
            <Tile d={-30} className="hidden sm:grid right-0 top-[52%] rotate-[6deg] rounded-xl border border-white/10 bg-[#1a2d24] px-2.5 py-1.5 font-mono text-[11px] text-lime sm:-right-6 sm:text-xs">₹1,050</Tile>

            <Chip d={18} className="-top-[64px] left-[34%] -rotate-3 border-white/10 bg-[#16241e] text-white"><span className="h-2 w-2 rounded-full bg-coral" />Zomato ₹237</Chip>
            <Chip d={-26} className="-left-[15%] -top-[34px] rotate-[-6deg] border-transparent bg-white text-ink">UPI</Chip>
            <Chip d={24} className="-right-[13%] top-[14%] rotate-[5deg] border-white/10 bg-[#16241e] text-white">✈ Goa trip</Chip>
            <Chip d={-18} className="-top-[60px] right-[30%] rotate-[4deg] border-mint/40 bg-transparent text-mint">÷ 3 ways</Chip>
            <Chip d={30} className="-bottom-[34px] -left-[7%] rotate-[3deg] border-white/10 bg-[#16241e] text-mint">+₹263 owed</Chip>
            <Chip d={-24} className="-bottom-[44px] -right-[5%] -rotate-[4deg] border-transparent bg-lime text-ink">settled ✓</Chip>

            <h1 style={drift(-6)} className="transform transition-transform duration-700 ease-out pb-[.3em] pt-[.1em] text-center font-brand text-[clamp(44px,11vw,128px)] font-normal leading-[1.25] text-lime drop-shadow-[0_10px_40px_rgba(200,242,109,.18)]">splitlee</h1>
          </div>

          <p className="mx-auto mt-6 max-w-[520px] text-center text-sm text-[#c5d0cb] sm:text-[15px]">
            Your bank texts. Splitlee does the math. Split, settle and track — all on your phone.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            <DownloadButton />
            <a href="#how" className="inline-flex items-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold hover:border-white/30">See how it works</a>
          </div>
          <p className="mt-3 text-center text-[11px] text-muted">{CTA_CAPTION}</p>

          <div className="relative mt-10 flex flex-wrap items-end justify-between gap-4 lg:mt-auto">
            <div style={drift(12)} className={`rounded-2xl border border-white/[.07] bg-[#0f1f18]/80 px-4 py-3 backdrop-blur ${MOVE}`}>
              <b className="block text-lg">+₹1,400</b>
              <span className="text-[11px] text-muted">settled this week · Priya</span>
            </div>
            <div style={drift(-10)} className={`flex items-center gap-2 rounded-full border border-white/[.07] bg-[#0f1f18]/80 px-3 py-2 text-[11px] text-[#c5d0cb] ${MOVE}`}>
              <span className="grid h-5 w-5 place-items-center rounded-md bg-mint text-[10px] font-bold text-ink">₹</span>
              ₹426 spent at Cafe Mocha · <span className="text-mint">Split?</span>
            </div>
            <Tile d={-16} className="!static hidden h-11 w-11 rotate-6 bg-lime text-ink sm:grid"><Svg size={20}><path d="M5 12l4 4 10-10" /></Svg></Tile>
          </div>
        </section>

        {/* ============ SUPPORTED BANKS ============ */}
        <section aria-labelledby="banks-h" className="my-4 rounded-[24px] border border-white/[.06] bg-[#0f1a16] px-5 py-6 sm:rounded-[28px] sm:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
            <h2 id="banks-h" className="flex-none text-sm font-semibold text-white">Works with your bank and your UPI apps</h2>
            <ul className="flex flex-wrap gap-2">
              {BANKS.map((b) => (
                <li key={b} className="rounded-full border border-white/10 bg-white/[.04] px-3 py-1.5 text-xs text-[#c5d0cb]">{b}</li>
              ))}
            </ul>
          </div>
          <p className="mt-3 text-[11px] text-muted">…and most other Indian banks and UPI apps.</p>
        </section>

        {/* ============ 01 SMS TRACKING ============ */}
        <span aria-hidden="true" className="snap-mark" />
        <section id="features" className="panel gpanel">
          <Split>
            <div className="rv">
              <div className="eyebrow">01 — SMS tracking</div>
              <h2 className="h2">Every rupee,<br />sorted the moment<br />you spend it.</h2>
              <p className="lead">Splitlee reads your bank SMS and bank app notifications, picks out the merchant, category and bank, and tells a card from an account. No typing, no bank login.</p>
              <Checks dark items={[
                ['Bank SMS and app notifications', 'Most Indian banks and UPI apps.'],
                ['Learns your categories', 'Pick a category for a merchant once; Splitlee remembers it.'],
                ['Foreign-currency card spends', 'Shown in the original currency, with the ₹ cost worked out.'],
                ['Skips the noise', 'OTPs, offers, credits and duplicates are ignored.'],
              ]} />
            </div>
            <PhoneCol screen="home" />
          </Split>
        </section>

        {/* ============ 02 WIDGET ============ */}
        <span aria-hidden="true" className="snap-mark" />
        <section className="panel on-light bg-glass text-ink">
          <div className="rv text-center">
            <div className="eyebrow justify-center">02 — The widget</div>
            <h2 className="h2">Your month,<br />on your home screen.</h2>
            <p className="lead mx-auto">No need to open the app. The Splitlee widget shows what you spent, what you&apos;re owed, and how your month is going.</p>
          </div>

          <div className="rv mt-8">
            <WidgetCallouts>
              <Widget size="clamp(7px,min(1.9vw,1.2vh),16px)" />
            </WidgetCallouts>
          </div>

          <div className="rv mt-8 grid gap-4 md:grid-cols-[1fr_1.3fr_1fr]">
            <div className="flex flex-col justify-end rounded-2xl p-4">
              <span className="mb-3 text-[#b7791f]"><Svg size={20}><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" /><path d="M3 3l18 18" /></Svg></span>
              <b className="text-sm">Hide amounts</b>
              <p className="mt-1 text-xs opacity-60">One switch hides the numbers when someone is looking.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 rounded-2xl bg-[linear-gradient(135deg,#1c3a2d,#132820)] p-3 text-white">
              <div className="rounded-xl bg-[#0f1c16] p-3"><small className="text-[10px] text-muted">Today</small><b className="block text-xl">₹237</b><small className="text-[10px] text-muted">1 expense</small></div>
              <div className="rounded-xl bg-[#0f1c16] p-3"><small className="text-[10px] text-muted">Owed</small><b className="block text-xl text-mint">₹6,400</b><small className="text-[10px] text-muted">2 friends</small></div>
            </div>
            <div className="rounded-2xl bg-ink p-4 text-white">
              <span className="mb-3 block text-lime"><Svg size={20}><rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></Svg></span>
              <b className="text-sm">Stays private</b>
              <p className="mt-1 text-xs text-muted">Read on-device. Nothing leaves your phone.</p>
            </div>
          </div>
        </section>

        {/* ============ 03 GLANCE ============ */}
        <span aria-hidden="true" className="snap-mark" />
        <section className="panel gpanel">
          <Split rev>
            <PhoneCol screen="lock" className="order-2 lg:order-none" />
            <div className="rv">
              <div className="eyebrow">03 — At a glance</div>
              <h2 className="h2">Check your spend<br />the way you check<br />the time.</h2>
              <p className="lead">Unlock, look, done. The widget sits next to your apps, so your month is always one glance away.</p>
              <div className="mt-8 flex gap-12"><MonoStat v="1 tap" l="To split any expense" /><MonoStat v="0 s" l="Spent typing amounts" /></div>
            </div>
          </Split>
        </section>

        {/* ============ 04 SMS → SPLIT ============ */}
        <span aria-hidden="true" className="snap-mark" />
        <section id="how" className="panel on-light bg-glass text-ink">
          <div className="rv"><div className="eyebrow">04 — From SMS to split</div><h2 className="h2">From bank SMS to split in one<br className="hidden lg:block" /> tap.</h2></div>
          <div className="rv mt-10 grid items-center gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
            <div>
              <div className="notif !max-w-none">
                <div className="nh"><span className="ap bg-[#1e4f8a]">✉</span>AX-HDFCBK<span>now</span></div>
                <b className="!text-sm">HDFC Bank</b><p className="!text-xs">Rs.789.00 debited from A/c XX0508 to DOMINOS.</p>
              </div>
              <p className="mt-2.5 text-[11px] opacity-60">1. Your bank texts you</p>
            </div>
            <span className="hidden opacity-40 lg:block">→</span>
            <div>
              <div className="notif !max-w-none">
                <div className="nh"><span className="ap bg-mint text-[#06120d]">₹</span>Splitlee<span>now</span></div>
                <b className="!text-sm">₹789 spent at Dominos</b><p className="!text-xs">Who was this for?</p>
                <div className="nact"><span className="p !p-1.5 !text-xs">Split</span><span className="!p-1.5 !text-xs">Just me</span><span className="!p-1.5 !text-xs">Ignore</span></div>
              </div>
              <p className="mt-2.5 text-[11px] opacity-60">2. Splitlee asks on every debit</p>
            </div>
            <span className="hidden opacity-40 lg:block">→</span>
            <div>
              <div className="notif !max-w-none">
                <div className="nh"><span className="ap bg-coral text-white">D</span>Dominos · split 3 ways<span className="font-bold text-white">₹789</span></div>
                <div className="mt-2 flex items-center gap-3">
                  <div className="grid h-12 w-12 flex-none grid-cols-4 gap-px rounded-md bg-white p-1" aria-hidden="true">
                    {'1011010110010111'.split('').map((b, i) => <i key={i} className={b === '1' ? 'bg-ink' : 'bg-white'} />)}
                  </div>
                  <p className="!mt-0 !text-xs">Aarav and Priya owe ₹263 each. Your UPI QR goes with the reminder.</p>
                </div>
              </div>
              <p className="mt-2.5 text-[11px] opacity-60">3. Friends pay you back</p>
            </div>
          </div>
          <div className="rv mt-8 flex flex-wrap items-center gap-3 rounded-2xl border border-ink/10 bg-white px-4 py-3 text-xs text-ink/70">
            <span className="rounded-full bg-mint/20 px-2.5 py-1 font-bold text-mint-deep">To split · 3</span>
            Busy? Skip the notification — it waits in your <b className="text-ink">To split</b> list until you get to it.
          </div>
        </section>

        {/* ============ 05 HOME HISTORY FRIENDS ============ */}
        <span aria-hidden="true" className="snap-mark" />
        <section className="panel on-light bg-lime text-ink">
          <div className="grid items-end gap-4 lg:grid-cols-[1fr_1fr]">
            <div className="rv"><div className="eyebrow">05 — The app</div><h2 className="h2">Home, history, friends.</h2></div>
            <p className="rv text-[13px] opacity-70">Everything you open the app for — this month, every expense, who owes what — exactly where your thumb expects it.</p>
          </div>
          <div className="mt-10 grid justify-items-center gap-10 md:grid-cols-3 md:gap-4">
            {[['home', 'Home', 'month, accounts, today'], ['history', 'History', 'every expense, in order'], ['friends', 'Friends', 'balances, groups, settle up']].map(([s, t, d]) => (
              <figure key={s} className="rv flex flex-col items-center gap-3">
                <Phone screen={s} style={xs} />
                <figcaption className="text-[11px] opacity-70"><b className="opacity-100">{t}</b> — {d}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ============ 06 SPLITTING ============ */}
        <span aria-hidden="true" className="snap-mark" />
        <section id="friends" className="panel gpanel">
          <Split>
            <div className="rv">
              <div className="eyebrow">06 — Splitting</div>
              <h2 className="h2">Get paid back<br />without chasing.</h2>
              <p className="lead">Equal or custom splits, groups, friend balances and partial settle-ups. Reminders go out on WhatsApp or SMS with your UPI QR for the exact amount owed.</p>
              <div className="mt-6 grid max-w-[460px] gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-2xl border border-white/[.08] bg-[#16241e] px-3.5 py-3 text-white">
                  <span className="av !h-8 !w-8 !text-xs">A</span>
                  <div className="min-w-0"><b className="block text-xs">Reminder sent to Aarav</b><small className="block truncate text-[11px] text-muted">₹4,200 · pay via UPI QR</small></div>
                  <span className="ml-auto text-mint">✓</span>
                </div>
                <div className="rounded-2xl bg-mint px-3.5 py-3 text-ink">
                  <b className="block text-xs">Paid back? Detected.</b>
                  <small className="mt-0.5 block text-[11px] leading-snug opacity-75">When a friend pays you back, Splitlee spots the credit SMS and asks before recording it. No manual settle-up.</small>
                </div>
              </div>
            </div>
            <PhoneCol screen="friends" />
          </Split>
        </section>

        {/* ============ 07 MAP ============ */}
        <span aria-hidden="true" className="snap-mark" />
        <section className="panel bg-glass text-ink">
          <Split rev light>
            <PhoneCol screen="map" className="order-2 lg:order-none" />
            <div className="rv">
              <div className="eyebrow">07 — Map</div>
              <h2 className="h2">See where your<br />money went.</h2>
              <p className="lead">Every expense is saved with its location and pinned on the map by category. Zoom into your neighbourhood and see which street is eating your month.</p>
              <Checks items={[
                ['Pinned by category', 'Food, travel, bills — each with its own pin.'],
                ['Heatmap', 'See at a glance where most of your money goes.'],
                ['Trip route line', 'Trips draw the route between your expenses.'],
              ]} />
            </div>
          </Split>
        </section>

        {/* ============ 08 INSIGHTS ============ */}
        <span aria-hidden="true" className="snap-mark" />
        <section className="panel bg-lime text-ink">
          <Split light>
            <div className="rv">
              <div className="eyebrow">08 — Insights</div>
              <h2 className="h2">Know your pace<br />before the month<br />ends.</h2>
              <p className="lead">Monthly trends, your daily average and a month-end projection — so there are no surprises on the 30th.</p>
              <div className="mt-8 flex gap-12"><MonoStat v="~₹65,900" l="On pace by month end" /><MonoStat v="₹2,190" l="Daily average" /></div>
              <SectionCTA tone="ink" />
            </div>
            <PhoneCol screen="insights" />
          </Split>
        </section>

        {/* ============ 09 TRIPS ============ */}
        <span aria-hidden="true" className="snap-mark" />
        <section className="panel gpanel">
          <Split rev>
            <PhoneCol screen="trips" className="order-2 lg:order-none" />
            <div className="rv">
              <div className="eyebrow">09 — Trips</div>
              <h2 className="h2">Goa doesn&apos;t<br />wreck your<br />monthly average.</h2>
              <p className="lead">Turn on trip mode and its expenses get their own totals, balances and map. Trips close themselves after 14 idle days.</p>
              <div className="mt-6 grid max-w-[340px] grid-cols-2 gap-3">
                <div className="rounded-2xl bg-lime p-3.5 text-ink">
                  <Svg size={16}><path d="M2 16l20-8-8 14-2-6z" /></Svg>
                  <b className="mt-3 block text-sm">Goa · ₹9,800</b><small className="text-[11px] opacity-70">1–5 Oct · closed</small>
                </div>
                <div className="rounded-2xl border border-white/[.08] bg-[#16241e] p-3.5">
                  <span className="text-mint"><Svg size={16}><path d="M12 5v14M5 12h14" /></Svg></span>
                  <b className="mt-3 block text-sm">New trip</b><small className="text-[11px] text-muted">Separate from Main</small>
                </div>
              </div>
              <SectionCTA />
            </div>
          </Split>
        </section>

        {/* ============ 10 SMALL THINGS ============ */}
        <span aria-hidden="true" className="snap-mark" />
        <section className="panel bg-glass text-ink">
          <div className="rv"><div className="eyebrow">10 — Details</div><h2 className="h2">Small things that add up.</h2></div>
          <div className="rv mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {FEATURES.map(([t, d, tone, icon, wide]) => (
              <div key={t} className={`flex min-h-[140px] flex-col rounded-2xl p-4 ${TILE[tone]} ${wide ? 'col-span-2' : ''}`}>
                <span className={TILE_ICON[tone]}><Svg size={18}>{icon}</Svg></span>
                <b className="mt-auto pt-5 text-sm">{t}</b>
                <p className="mt-1 text-[11px] opacity-70">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============ 11 PRIVACY ============ */}
        <span aria-hidden="true" className="snap-mark" />
        <section id="privacy" className="panel bg-[linear-gradient(180deg,#10201a,#0d1713)]">
          <div className="pointer-events-none absolute -right-20 -top-20 !w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(47,206,150,.16),transparent_65%)]" aria-hidden="true" />
          <div className="relative grid items-end gap-4 lg:grid-cols-[1.1fr_1fr]">
            <div className="rv">
              <div className="eyebrow">11 — Privacy</div>
              <h2 className="h2">Your money data never<br className="hidden lg:block" /> leaves your phone.</h2>
            </div>
            <p className="rv text-[13px] text-muted">Splitlee has no account, no cloud and no internet permission. Everything it reads stays on your phone.</p>
          </div>
          <div className="relative mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {PRIVACY.map(([t, d, icon]) => (
              <div key={t} className="rv rounded-2xl border border-white/[.07] bg-white/[.03] p-5">
                <div className="mb-6 grid h-10 w-10 place-items-center rounded-xl bg-lime text-ink"><Svg size={20}>{icon}</Svg></div>
                <b className="block text-sm">{t}</b>
                <p className="mt-1.5 text-xs text-muted">{d}</p>
              </div>
            ))}
          </div>
          <div className="relative mt-6 flex flex-wrap items-center gap-2.5 font-mono text-[12px] text-mint">
            {['✓ No internet permission', '✓ No analytics', '✓ No ads'].map((t) => (
              <span key={t} className="rounded-full border border-[#23493b] bg-[#13261f] px-3 py-1.5">{t}</span>
            ))}
            <a href="/privacy-policy" className="ml-auto font-sans text-sm text-white underline decoration-mint/50 underline-offset-4 hover:text-lime">Read the full privacy policy →</a>
          </div>
        </section>

        {/* ============ 12 COMPARISON ============ */}
        <span aria-hidden="true" className="snap-mark" />
        <section id="compare" className="panel bg-glass text-ink">
          <div className="rv">
            <div className="eyebrow">12 — Splitlee vs Splitwise</div>
            <h2 className="h2">Built because splitting apps<br className="hidden lg:block" /> made you do the typing.</h2>
          </div>
          <div className="rv mt-8 overflow-hidden rounded-2xl border border-ink/10 bg-white">
            <div className="grid grid-cols-[1fr_1fr] border-b border-ink/10 bg-ink text-xs font-bold text-white sm:grid-cols-[1fr_1.2fr_1.2fr]">
              <span className="hidden px-4 py-3 text-muted sm:block" />
              <span className="px-4 py-3 text-lime">Splitlee</span>
              <span className="px-4 py-3 text-[#c5d0cb]">Splitwise</span>
            </div>
            {COMPARE.map(([row, a, b]) => (
              <div key={row} className="grid grid-cols-[1fr_1fr] border-b border-ink/[.07] text-[13px] last:border-0 sm:grid-cols-[1fr_1.2fr_1.2fr]">
                <span className="col-span-2 px-4 pt-3 text-[11px] font-semibold uppercase tracking-[.08em] text-ink/50 sm:col-span-1 sm:py-3.5 sm:text-xs sm:normal-case sm:tracking-normal sm:text-ink/70">{row}</span>
                <span className="flex items-start gap-2 px-4 py-3 font-semibold sm:py-3.5"><span className="text-mint-deep">✓</span>{a}</span>
                <span className="px-4 py-3 text-ink/60 sm:py-3.5">{b}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[11px] text-ink/50">Splitwise is a trademark of its owner; comparison based on its public free plan.</p>
        </section>

        {/* ============ 13 FAQ ============ */}
        <span aria-hidden="true" className="snap-mark" />
        <section id="faq" className="panel gpanel">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:gap-14">
            <div className="rv">
              <div className="eyebrow">13 — FAQ</div>
              <h2 className="h2">Questions,<br />answered.</h2>
              <p className="lead">Something else? Write to <a className="text-mint underline-offset-4 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
            </div>
            <div className="rv divide-y divide-white/[.07] rounded-2xl border border-white/[.07] bg-white/[.02]">
              {FAQ.map(([q, a], i) => (
                <details key={q} className="group px-5" open={i === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-semibold [&::-webkit-details-marker]:hidden">
                    {q}
                    <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-white/[.06] text-mint transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="-mt-1 pb-4 text-[13px] leading-relaxed text-muted">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 14 INSTALL (shown after launch) ============ */}
        {LAUNCHED && (<>
        <span aria-hidden="true" className="snap-mark" />
        <section id="install" className="panel bg-glass text-ink">
          <div className="rv">
            <div className="eyebrow">14 — How to install</div>
            <h2 className="h2">Installed in a minute.</h2>
          </div>
          <ol className="mt-8 grid gap-3 md:grid-cols-3">
            {INSTALL.map(([t, d], i) => (
              <li key={t} className="rv flex flex-col rounded-2xl border border-ink/10 bg-white p-5">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-ink font-mono text-sm font-bold text-lime">{i + 1}</span>
                <b className="mt-8 block text-base">{t}</b>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ink/65">{d}</p>
              </li>
            ))}
          </ol>
          <SectionCTA tone="ink" />
        </section>
        </>)}

        {/* ============ FINAL CTA ============ */}
        <span aria-hidden="true" className="snap-mark" />
        <section id="download" className="panel on-light bg-lime text-ink">
          <div className="rv flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="eyebrow">Get Splitlee</div>
              <h2 className="h2">Add the widget.<br />Stop doing math.</h2>
            </div>
            <div className="flex flex-col items-start gap-2 sm:items-end">
              <DownloadButton tone="ink" />
              <small className="text-[11px] opacity-60">{CTA_CAPTION}</small>
            </div>
          </div>
          <div className="rv mt-10 flex items-center justify-center [@media(max-height:820px)]:[zoom:.85]">
            <Phone screen="history" style={fanXs} className="-mr-6 hidden -rotate-[14deg] translate-y-6 lg:block" />
            <Phone screen="lock" style={fanSm} className="z-[1] -mr-6 hidden -rotate-[7deg] sm:block" />
            <Phone screen="home" style={fanSm} className="z-[2] rotate-[2deg]" />
            <Phone screen="map" style={fanXs} className="-ml-6 hidden rotate-[12deg] translate-y-8 sm:block" />
          </div>
        </section>
      </main>

      {/* ============ CONTACT + FOOTER ============ */}
      <footer className="relative z-10 mx-auto max-w-[1440px] snap-end bg-bg px-4 pt-4">
        <section id="contact" className="mb-12 grid snap-start scroll-mt-[108px] gap-8 rounded-[28px] border border-white/[.06] bg-[linear-gradient(180deg,#11261d,#0e1c16)] p-5 sm:p-8 lg:min-h-[calc(100svh-124px)] lg:grid-cols-[1fr_1.4fr] lg:content-center lg:p-12">
          <div>
            <div className="eyebrow">Contact us</div>
            <h2 className="h2">Questions, bugs<br />or ideas?</h2>
            <p className="lead">Found a bug, have an idea, or need help? Send us a message.</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-6 inline-flex items-center gap-2 text-sm text-mint hover:text-lime">
              <Svg size={16}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Svg>
              {CONTACT_EMAIL}
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl bg-white">
            <iframe
              src="https://app.ovoform.com/f/sKtGaog9"
              title="Contact Splitlee"
              width="100%"
              height="600"
              loading="lazy"
              allow="fullscreen"
              className="block h-[600px] w-full max-w-full border-0"
            />
          </div>
        </section>
        <SiteFooter />
      </footer>
    </>
  );
}
