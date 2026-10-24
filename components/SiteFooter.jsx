import { DOWNLOAD_URL, CONTACT_EMAIL, LAUNCHED } from '@/lib/config';

export default function SiteFooter() {
  const links = [
    ...(LAUNCHED ? [['Download', DOWNLOAD_URL]] : []),
    ['Privacy Policy', '/privacy-policy'],
    ['FAQ', '/#faq'],
    ['Contact', `mailto:${CONTACT_EMAIL}`],
  ];
  return (
    <div className="px-2">
      <div className="flex flex-col gap-6 border-t border-white/[.06] pt-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <a href="/" className="flex items-center gap-2.5 font-brand text-2xl leading-none text-lime">
            <img src="/logo.png" alt="" width="36" height="36" className="h-9 w-9" />
            splitlee
          </a>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#c7d1cc]">
          {links.map(([l, h]) => <a key={l} href={h} className="hover:text-lime">{l}</a>)}
        </nav>
      </div>
      <p className="mt-6 text-xs text-muted">© 2026 Splitlee</p>
      <div aria-hidden="true" className="select-none overflow-hidden pb-[.25em] pt-[.1em] text-center font-brand text-[clamp(56px,15vw,190px)] font-normal leading-[1.3] text-[#14231c]">splitlee</div>
    </div>
  );
}
