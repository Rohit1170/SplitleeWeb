import '@fontsource-variable/inter';
import '@fontsource-variable/playwrite-it-trad';
import '@fontsource/jetbrains-mono/500.css';
import '@fontsource/jetbrains-mono/700.css';
import '@fontsource/jetbrains-mono/800.css';
import './globals.css';

export const metadata = {
  title: 'Splitlee — Your bank texts. Splitlee does the rest.',
  description:
    'Splitlee reads your bank SMS on your phone, sorts every rupee, and lets you split with friends in one tap. Offline, private, made for India.',
  openGraph: {
    title: 'Splitlee — track, split, settle',
    description: 'Your bank texts. Splitlee does the rest — all on your phone.',
  },
  icons: { icon: '/icon.svg' },
};

export const viewport = { themeColor: '#0b100e' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-bg font-sans leading-normal text-[#eef2ef]">{children}</body>
    </html>
  );
}
