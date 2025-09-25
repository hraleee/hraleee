'use client';

import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [consent, setConsent] = useState<null | boolean>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // 1) Primary source of truth: cookie (if present)
    const cookieMatch = document.cookie.match(/(?:^|; )cookie_consent=([^;]+)/);
    if (cookieMatch) {
      const v = decodeURIComponent(cookieMatch[1]);
      if (v === 'true') setConsent(true);
      else if (v === 'false') setConsent(false);
      else setConsent(null);
      setIsReady(true);
      return;
    }

    // 2) If cookie is missing, force re-consent flow regardless of localStorage
    try {
      window.localStorage.removeItem('cookie_consent');
    } catch {}
    setConsent(null);
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (consent === null || typeof window === 'undefined') return;
    window.localStorage.setItem('cookie_consent', String(consent));
    // Also mirror to cookie for consistency with other code
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    document.cookie = `cookie_consent=${encodeURIComponent(String(consent))}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
  }, [consent]);

  if (!isReady || consent !== null) return null;

  return (
    <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 max-w-xl w-[95vw]">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl ring-1 ring-black/5 border border-gray-200 px-5 py-4">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <p className="text-gray-800 text-sm md:text-base leading-relaxed">
              Utilizziamo cookie per migliorare l'esperienza e analizzare il traffico. Leggi la nostra{' '}
              <a href="/cookie" className="underline text-blue-700 hover:text-blue-900">Cookie Policy</a>.
            </p>
          </div>
          <div className="flex gap-2 md:justify-end">
            <button
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition font-medium"
              onClick={() => setConsent(false)}
            >
              Rifiuta
            </button>
            <button
              className="px-5 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              onClick={() => setConsent(true)}
            >
              Accetta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


