'use client';
import { useEffect } from 'react';

/* Accordion: opening one <details name={name}> closes the others.
   Modern browsers do this natively via the name attribute; this covers older ones. */
export default function OneOpen({ name }) {
  useEffect(() => {
    const onToggle = (e) => {
      const d = e.target;
      if (!(d instanceof HTMLDetailsElement) || d.getAttribute('name') !== name || !d.open) return;
      document.querySelectorAll(`details[name="${name}"]`).forEach((o) => { if (o !== d) o.open = false; });
    };
    document.addEventListener('toggle', onToggle, true);
    return () => document.removeEventListener('toggle', onToggle, true);
  }, [name]);
  return null;
}
