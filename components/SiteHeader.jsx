import DownloadButton from './DownloadButton';

const LINKS = [
  ['Features', '/#features'],
  ['How it works', '/#how'],
  ['Privacy', '/#privacy'],
  ['FAQ', '/#faq'],
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[.05] bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6">
        <a href="/" className="flex items-center gap-2 font-brand text-[19px] leading-none text-lime">
          <img src="/logo.png" alt="" width="28" height="28" className="h-7 w-7" />
          splitlee
        </a>
        <nav className="hidden gap-6 text-xs text-muted md:flex">
          {LINKS.map(([l, h]) => <a key={l} href={h} className="hover:text-white">{l}</a>)}
        </nav>
        <DownloadButton size="sm" />
      </div>
    </header>
  );
}
