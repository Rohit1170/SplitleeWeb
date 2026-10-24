import { DOWNLOAD_URL, COMING_SOON_URL, LAUNCHED } from '@/lib/config';

/* The one download button used everywhere. tone: 'mint' (default) | 'ink'
   Before launch (LAUNCHED = false) it shows "Coming soon to Android" and links to COMING_SOON_URL. */
export default function DownloadButton({ tone = 'mint', size = 'md', label = 'Download for Android', className = '' }) {
  const tones = {
    mint: 'bg-mint text-ink',
    ink: 'bg-ink text-lime',
  };
  const sizes = { sm: 'px-3.5 py-2 text-[11px] sm:text-xs', md: 'px-5 py-3 text-sm' };
  const icon = size === 'sm' ? 13 : 16;
  const base = `inline-flex items-center gap-2 whitespace-nowrap rounded-full font-bold ${tones[tone]} ${sizes[size]} ${className}`;

  if (!LAUNCHED) {
    return (
      <a href={COMING_SOON_URL} className={`${base} transition-opacity hover:opacity-90`}>
        <svg width={icon} height={icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
        Coming soon to Android
      </a>
    );
  }

  return (
    <a href={DOWNLOAD_URL} className={`${base} transition-opacity hover:opacity-90`}>
      <svg width={icon} height={icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12M7 10l5 5 5-5M5 21h14" /></svg>
      {label}
    </a>
  );
}

export const CTA_CAPTION = LAUNCHED ? 'Free · Android APK · No sign-up' : 'Free · Android · No sign-up · Launching soon';
