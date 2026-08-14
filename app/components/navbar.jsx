"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageProvider';

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  const t = {
    es: {
      servicios: 'Servicios',
      contacto: 'Contacto',
      cotizar: 'Cotizar Ahora',
      banner: '📍 Servicios disponibles en New Jersey',
    },
    en: {
      servicios: 'Services',
      contacto: 'Contact',
      cotizar: 'Quote Now',
      banner: '📍 Service area: New Jersey',
    }
  };

  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="bg-amber-500 text-black text-xs md:text-sm font-bold text-center py-1.5 px-4">
        {t[lang].banner}
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white tracking-wide">
          S&L <span className="text-amber-400">COMMERCIAL</span> WRAPS
        </Link>

          <div className="hidden md:flex space-x-6 text-sm font-medium text-slate-300">
            <Link href="/servicios" className="hover:text-white transition">{t[lang].servicios}</Link>
            <Link href="/contacto" className="hover:text-white transition">{t[lang].contacto}</Link>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="text-sm px-3 py-1 rounded-md bg-slate-800/50 border border-slate-700 text-slate-200"
              aria-label="Cambiar idioma"
            >
              {lang === 'es' ? 'ES' : 'EN'}
            </button>

            <Link
              href="/cotizacion"
              className="hidden md:inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-4 py-2 rounded-lg transition"
            >
              {t[lang].cotizar}
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md bg-slate-800/40 border border-slate-700 text-slate-200"
              onClick={() => setOpen(!open)}
              aria-label="Abrir menú"
            >
              {open ? '✕' : '☰'}
            </button>
          </div>
      </nav>

        {/* Mobile menu panel */}
        {open && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            <div className="px-4 pt-4 pb-6 space-y-3">
              <Link href="/servicios" className="block text-white font-medium py-2">{t[lang].servicios}</Link>
              <Link href="/contacto" className="block text-white font-medium py-2">{t[lang].contacto}</Link>
              <Link href="/cotizacion" className="block bg-blue-600 text-white font-semibold py-2 px-3 rounded">{t[lang].cotizar}</Link>
              <button onClick={() => { setLang(lang === 'es' ? 'en' : 'es'); setOpen(false); }} className="w-full text-left text-sm px-1 py-2 text-slate-200">{lang === 'es' ? 'ES' : 'EN'}</button>
            </div>
          </div>
        )}
    </header>
  );
}