'use client';
import { useEffect } from 'react';

export default function RedirectTo({ href }) {
  useEffect(() => { window.location.replace(href); }, [href]);
  return (
    <>
      <meta httpEquiv="refresh" content={`0;url=${href}`} />
      <p className="p-8 text-sm">Redirecting… <a className="text-mint underline" href={href}>Continue</a></p>
    </>
  );
}
