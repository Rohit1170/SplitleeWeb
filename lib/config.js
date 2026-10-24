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

// Where the "Coming soon to Android" buttons go while LAUNCHED is false.
// Switch this to the Play Store link when the listing is live.
export const COMING_SOON_URL = '/#contact';

// Contact form → Google Sheet. Paste your Apps Script web-app URL here
// (see google-sheet-script.gs). While empty, the form shows a setup notice.
export const CONTACT_SHEET_URL = 'https://script.google.com/macros/s/AKfycbxZkzDtbnhvQ1-2WvtHCL2RXAFICaypM1KqpupfN6xUQwLc3P5nkCSxKIZojYBCCzE7/exec';

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
