import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { CONTACT_EMAIL } from '@/lib/config';

export const metadata = {
  title: 'Privacy Policy — Splitlee',
  description: 'How Splitlee handles your data: everything stays on your phone. No account, no cloud, no internet permission.',
  alternates: { canonical: '/privacy-policy' },
};

// TODO: set the real effective date before publishing.
const EFFECTIVE_DATE = '[Effective date — to be added]';

const SECTIONS = [
  ['The short version', [
    'Your financial data never leaves your phone.',
    'There is no account, no sign-in and no backend server. Splitlee works entirely on your device.',
  ]],
  ['SMS access', [
    'Splitlee monitors incoming SMS only to detect bank and UPI transaction messages, identified by their sender ID.',
    'From those messages it extracts the amount, merchant and timestamp to create an expense.',
    'The raw SMS is never stored or transmitted. Non-financial messages — including OTPs, offers and personal messages — are ignored.',
  ]],
  ['Notification access', [
    'Splitlee reads notifications from bank and UPI apps for the same purpose: to detect transactions and create expenses.',
    'Other notifications are ignored, and nothing is stored or transmitted beyond the expense details on your device.',
  ]],
  ['Location', [
    'Your location is attached to expenses so they appear on your map.',
    'It is stored only on your device.',
  ]],
  ['Camera', [
    'The camera is used only when you scan a QR code (Scan & Pay).',
    'Nothing is recorded or uploaded.',
  ]],
  ['What Splitlee does not collect', [
    'Splitlee has no internet permission.',
    'No analytics, no ads and no advertising ID.',
  ]],
  ['Storage', [
    'All data is kept in a local database on your device.',
    'Uninstalling Splitlee deletes it.',
  ]],
];

export default function PrivacyPolicy() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-[1440px] px-4">
        <article className="my-4 rounded-[24px] bg-glass px-5 py-12 text-ink sm:rounded-[28px] sm:px-8 sm:py-16 lg:px-14">
          <div className="mx-auto max-w-[720px]">
            <div className="eyebrow">Legal</div>
            <h1 className="h2">Privacy Policy — Splitlee</h1>
            <p className="mt-4 text-sm text-ink/60">Effective date: {EFFECTIVE_DATE}</p>

            {SECTIONS.map(([h, paras]) => (
              <section key={h} className="mt-10">
                <h2 className="text-lg font-bold tracking-[-.01em]">{h}</h2>
                {paras.map((p) => <p key={p} className="mt-3 text-[15px] leading-relaxed text-ink/75">{p}</p>)}
              </section>
            ))}

            <section className="mt-10">
              <h2 className="text-lg font-bold tracking-[-.01em]">Contact</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/75">
                Questions about this policy? Email{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-mint-deep underline underline-offset-4">{CONTACT_EMAIL}</a>.
              </p>
            </section>

            <a href="/" className="mt-12 inline-block text-sm font-semibold text-ink underline underline-offset-4">← Back to Splitlee</a>
          </div>
        </article>
      </main>
      <footer className="mx-auto max-w-[1440px] px-4 pt-4"><SiteFooter /></footer>
    </>
  );
}
