import RedirectTo from '@/components/RedirectTo';

export const metadata = { title: 'Privacy Policy — Splitlee', robots: { index: false } };

/* /privacy → /privacy-policy (static-export friendly; vercel.json also redirects) */
export default function PrivacyRedirect() {
  return <RedirectTo href="/privacy-policy" />;
}
