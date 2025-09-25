'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const toggleSidebar = () => setOpen(prev => !prev);
  const closeSidebar = () => setOpen(false);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeSidebar();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  // Lock body scroll and compensate scrollbar width to avoid layout shift
  useEffect(() => {
    if (!open) return;
    const { body, documentElement } = document;
    const prevOverflow = body.style.overflow;
    const prevPaddingRight = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth;
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;
    body.style.overflow = 'hidden';
    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPaddingRight;
    };
  }, [open]);

  // Click outside handler (when clicking overlay we close; stop propagation inside panel)
  const onOverlayClick = () => closeSidebar();
  const onPanelClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="relative p-2 rounded-lg border border-gray-300 text-gray-900 md:hidden w-10 h-10 flex items-center justify-center"
        aria-label="Apri sidebar"
      >
        <span
          className={`absolute block w-6 h-0.5 bg-current transition-transform duration-200 ease-out ${
            open ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
          }`}
        />
        <span
          className={`absolute block w-6 h-0.5 bg-current transition-all duration-150 ease-out ${
            open ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`absolute block w-6 h-0.5 bg-current transition-transform duration-200 ease-out ${
            open ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
          }`}
        />
      </button>

      {/* Overlay (always mounted for smooth fade) */}
      <div
        className={`fixed inset-0 z-[98] bg-black/50 transition-opacity duration-200 ease-out ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onOverlayClick}
        aria-hidden="true"
      />

      {/* Sidebar panel (right) */}
      <div
        ref={panelRef}
        aria-label="Sidebar"
        className={`fixed right-0 top-0 bottom-0 z-[99] h-screen w-80 max-w-[85%] bg-white border-l border-gray-200 shadow-xl rounded-l-2xl ring-1 ring-black/5 transform-gpu will-change-transform
        transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? 'translate-x-0' : 'translate-x-full'}`}
        onClick={onPanelClick}
        style={{ contain: 'layout style size', backfaceVisibility: 'hidden' }}
      >
        <div
          className={`px-6 pt-20 pb-8 h-full overflow-y-auto transition-opacity duration-200 ease-out ${open ? 'opacity-100' : 'opacity-0'}`}
          style={{ scrollbarGutter: 'stable both-edges', overscrollBehavior: 'contain' }}
        >
          <div className="flex items-center justify-between pb-6 border-b border-gray-200">
            <span className="text-xl font-bold text-gray-900">HraTech</span>
            <button
              onClick={closeSidebar}
              className="p-2 rounded-lg border border-gray-300 text-gray-700"
              aria-label="Chiudi sidebar"
            >
              ✕
            </button>
          </div>

          <nav className="space-y-1 pt-6">
            <Link href="/" onClick={closeSidebar} className="block px-1 py-3 text-lg font-medium text-gray-900 hover:text-blue-600">
              Home
            </Link>
            <Link href="/servizi" onClick={closeSidebar} className="block px-1 py-3 text-lg font-medium text-gray-900 hover:text-blue-600">
              Servizi
            </Link>
            <Link href="/portfolio" onClick={closeSidebar} className="block px-1 py-3 text-lg font-medium text-gray-900 hover:text-blue-600">
              Portfolio
            </Link>
            <Link href="/chi-siamo" onClick={closeSidebar} className="block px-1 py-3 text-lg font-medium text-gray-900 hover:text-blue-600">
              Chi Siamo
            </Link>
            <Link href="/contatti" onClick={closeSidebar} className="block px-1 py-3 text-lg font-medium text-gray-900 hover:text-blue-600">
              Contatti
            </Link>
          </nav>

          <div className="pt-6 mt-6 border-t border-gray-200">
            <Link
              href="/contatti"
              onClick={closeSidebar}
              className="block text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors"
            >
              Inizia Progetto
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;


