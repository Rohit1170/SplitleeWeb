/**
 * Splitlee contact form → Google Sheet
 *
 * Setup (5 minutes):
 * 1. Create a Google Sheet (e.g. "Splitlee contact").
 * 2. Extensions → Apps Script. Delete what's there and paste this whole file. Save.
 * 3. Deploy → New deployment → type "Web app".
 *      Execute as: Me      Who has access: Anyone
 *    Click Deploy, allow the permissions.
 * 4. Copy the Web app URL (ends with /exec).
 * 5. Paste it into CONTACT_SHEET_URL in lib/config.js, rebuild, push.
 *
 * If you edit this script later: Deploy → Manage deployments → edit → New version
 * (the URL stays the same).
 */
const SHEET_NAME = 'Messages';

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Time', 'Name', 'Email / phone', 'Query', 'Page']);
      sheet.setFrozenRows(1);
    }
    const d = JSON.parse(e.postData.contents || '{}');
    const clean = (v, n) => String(v || '').replace(/^[=+\-@]/, "'$&").slice(0, n);
    if (!clean(d.name, 80) || !clean(d.message, 2000)) return out({ ok: false });
    sheet.appendRow([new Date(), clean(d.name, 80), clean(d.contact, 120), clean(d.message, 2000), clean(d.page, 200)]);
    return out({ ok: true });
  } catch (err) {
    return out({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function out(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
