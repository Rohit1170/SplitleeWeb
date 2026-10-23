import '@fontsource-variable/inter';
import '@fontsource-variable/playwrite-it-trad';
import '@fontsource/jetbrains-mono/500.css';
import '@fontsource/jetbrains-mono/700.css';
import '@fontsource/jetbrains-mono/800.css';
import './globals.css';
import { SITE_URL } from '@/lib/config';

const TITLE = 'Splitlee — Your bank texts. Splitlee does the rest.';
const DESCRIPTION =
  'Splitlee is a free Android app that turns your bank SMS into expenses automatically — split, settle with UPI, and track trips. Fully offline. No account, no cloud.';
const OG_IMAGE = { url: '/og.png', width: 1200, height: 630, alt: 'Splitlee — Your bank texts. Splitlee does the math.' };

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Splitlee',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE.url],
  },
};

export const viewport = { themeColor: '#0b100e' };

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body className="bg-bg font-sans leading-normal text-[#eef2ef]">{children}</body>
    </html>
  );
}
