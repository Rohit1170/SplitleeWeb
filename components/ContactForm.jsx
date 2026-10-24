'use client';
import { useState } from 'react';
import { CONTACT_SHEET_URL, CONTACT_EMAIL } from '@/lib/config';

const field = 'w-full rounded-xl border border-white/10 bg-[#16241e] px-4 py-3 text-sm text-[#eef2ef] placeholder:text-[#5f6e69] outline-none transition focus:border-mint focus:ring-4 focus:ring-mint/15 select-text';

/* Sends name / contact / message to a Google Sheet through an Apps Script web app. */
export default function ContactForm() {
  const [state, setState] = useState('idle'); // idle | sending | done | error

  const onSubmit = async (e) => {
    e.preventDefault();
    const f = e.currentTarget;
    const data = Object.fromEntries(new FormData(f));
    if (data.website) return; // hidden spam trap
    if (!CONTACT_SHEET_URL) { setState('error'); return; }
    setState('sending');
    try {
      // text/plain + no-cors keeps it a "simple" request Apps Script accepts
      await fetch(CONTACT_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ name: data.name, contact: data.contact, message: data.message, page: location.href }),
      });
      setState('done');
      f.reset();
    } catch {
      setState('error');
    }
  };

  if (state === 'done') {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-white/[.06] bg-[#0f1c16] p-8 text-center">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-lime text-xl text-ink">✓</span>
        <b className="mt-4 text-lg">Thanks — message received.</b>
        <p className="mt-1 text-sm text-muted">We read every message and reply if you left a contact.</p>
        <button type="button" onClick={() => setState('idle')} className="mt-6 text-sm text-mint underline-offset-4 hover:underline">Send another</button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 rounded-2xl border border-white/[.06] bg-[#0f1c16] p-5 sm:p-7">
      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold">Your name <span className="text-coral">*</span></span>
        <input name="name" required maxLength={80} autoComplete="name" placeholder="Akhil Sharma" className={field} />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold">Email or phone <span className="font-normal text-muted">(optional, so we can reply)</span></span>
        <input name="contact" maxLength={120} autoComplete="email" placeholder="you@example.com or 98xxxxxx10" className={field} />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold">Your query <span className="text-coral">*</span></span>
        <textarea name="message" required maxLength={2000} rows={5} placeholder="Found a bug, have an idea, or need help?" className={`${field} resize-y`} />
      </label>
      {/* spam trap: hidden from people, bots fill it */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={state === 'sending'} className="rounded-full bg-lime px-6 py-3 text-sm font-bold text-ink transition hover:bg-[#d6f78c] disabled:opacity-60">
          {state === 'sending' ? 'Sending…' : 'Send message'}
        </button>
        {state === 'error' && (
          <p role="alert" className="text-xs text-coral">
            Couldn&apos;t send right now. Please email <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        )}
      </div>
    </form>
  );
}
