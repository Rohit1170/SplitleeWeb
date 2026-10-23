/* ------------------------------------------------------------------
   Site-wide settings. Edit these, not the components.
------------------------------------------------------------------- */

// Pre-launch switch. While false, every download button shows a
// "Coming soon to Android" badge and the How-to-install section is hidden.
// At launch: set to true and put the APK link in DOWNLOAD_URL.
export const LAUNCHED = false;

// TODO: replace "#" with the signed APK's hosted URL (GitHub Releases).
// Every download button on the site reads this one value.
export const DOWNLOAD_URL = '#';

export const SITE_URL = 'https://splitlee-weld.vercel.app';

// Public contact address (already shown on the live site).
export const CONTACT_EMAIL = 'rohitraj776407@gmail.com';

// "Works with your bank and your UPI apps" strip — add/remove freely.
export const BANKS = [
  'HDFC Bank',
  'SBI',
  'ICICI Bank',
  'Axis Bank',
  'Kotak',
  'Punjab National Bank',
  'Google Pay',
  'PhonePe',
  'Paytm',
  'BHIM',
];

export const HEADER_H = 56; // sticky header height in px (keep in sync with globals.css)
