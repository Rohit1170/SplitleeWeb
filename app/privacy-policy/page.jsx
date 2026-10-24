import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { CONTACT_EMAIL } from '@/lib/config';

export const metadata = {
  title: 'Privacy Policy — Splitlee',
  description: 'How Splitlee handles your data: no account, no server, no ads. Optional backup goes only to your own Google Drive.',
  alternates: { canonical: '/privacy-policy' },
};

const EFFECTIVE_DATE = '24-10-2026';

const SECTIONS = [
  ['The short version', [
    'Your financial data stays on your phone, unless you turn on backup to your own Google Drive.',
    'There is no account, no sign-in and no backend server. Splitlee does all of its work on your device.',
    'Splitlee uses the internet only for map tiles and, if you turn it on, backup to your own Google Drive. Your SMS text is never sent anywhere, and Splitlee has no server of its own.',
  ]],
  ['SMS access', [
    'Splitlee monitors incoming SMS only to detect bank and UPI transaction messages, identified by their sender ID.',
    'From those messages it extracts the amount, merchant and timestamp to create an expense.',
    'The raw SMS is never stored or transmitted. Non-financial messages — including OTPs, offers and personal messages — are ignored.',
  ]],
  ['Notification access', [
    'Splitlee reads notifications from bank and UPI apps for the same purpose: to detect transactions and create expenses.',
    'Other notifications are ignored, and nothing is stored or transmitted beyond the expense details saved on your device.',
  ]],
  ['Contacts', [
    'If you allow it, Splitlee reads your contacts only so you can pick the friends you split with.',
    'The names and numbers you pick are stored on your device (and in your backup, if you turn it on). Your contact list is never uploaded.',
  ]],
  ['Location', [
    'Your location is attached to expenses so they appear on your map.',
    'It is stored only on your device.',
    'With your permission, location can also be recorded in the background so expenses captured from SMS get a location. You can turn this off in Android settings at any time.',
    "Map tiles are loaded from Google Maps, which receives the map area being viewed under Google's own privacy policy (https://policies.google.com/privacy). Your expenses and their locations are drawn on your phone and are not sent to Google or to us.",
  ]],
  ['Phone', [
    "Splitlee asks for call permission only to dial *99#, the offline UPI service, when you choose 'Pay via *99#'. It doesn't make or read any other calls.",
  ]],
  ['Camera and photos', [
    'The camera is used only when you scan a UPI QR code with Scan & Pay. You can also pick a QR image from your gallery; it is read only to decode the QR.',
    'Nothing is recorded or uploaded.',
  ]],
  ['Payments and reminders', [
    'Scan & Pay hands the payment to your own UPI app. Splitlee never sees or stores your UPI PIN or bank login.',
    'Reminders are prepared by Splitlee and sent by you through WhatsApp or your SMS app. Those apps’ own privacy policies apply to messages you send with them.',
  ]],
  ['What Splitlee does not collect', [
    'No account details, no analytics, no ads and no advertising ID.',
    'We do not sell, share or receive your app data — it is never sent to us.',
  ]],
  ['This website', [
    'The contact form on this website collects only what you type into it — your name, your message and, if you choose, an email or phone number. It is stored in a private Google Sheet that only we can see, and used only to reply to you.',
  ]],
  ['Backup (optional)', [
    "Backup is off by default. If you turn it on, Splitlee saves a copy of its database (expenses, friends, groups and settings, not SMS text or location history) to a hidden app folder in your own Google Drive. Splitlee can only see that folder, not your other files. Only the last few backups are kept. You can delete them all from Settings > Backup or revoke access in your Google account. Google's privacy policy applies to data stored in Drive.",
  ]],
  ['Storage and deletion', [
    'All data is kept in a local database on your device.',
    'Uninstalling Splitlee deletes the data on your phone. Backups in your Google Drive stay until you delete them from Settings > Backup or from your Google account.',
  ]],
  ['Your choices', [
    'You can turn off any permission — SMS, notifications, contacts, location, phone or camera — at any time in your phone’s settings. Features that rely on a permission won’t work while it is off.',
  ]],
  ['Children', [
    'Splitlee is not directed at children under 13 and does not knowingly collect their data.',
  ]],
  ['Changes to this policy', [
    'If this policy changes, the new version will be posted on this page with a new effective date.',
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
