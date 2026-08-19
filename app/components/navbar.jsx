"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageProvider';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();

  return (
    <header className="w-full sticky top-0 z-50 bg-[#1C1C1C] border-b border-[#7F8C8D]/20 shadow-lg">
      {/* Banner Superior Promocional */}
      <div className="bg-[#F1C40F] text-[#1C1C1C] text-[#1C1C1C] text-xs font-bold py-1.5 px-4 text-center tracking-wide uppercase">
        📍 Servicios disponibles en New Jersey
      </div>

      {/* Navegación Principal */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo y Nombre */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <img 
              src="/logo.jpg" 
              alt="S&L Commercial Wraps" 
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-contain bg-[#1C1C1C] border border-[#F1C40F]/40" 
            />
            <span className="font-extrabold text-white text-sm sm:text-base leading-tight tracking-tight uppercase max-w-[140px] sm:max-w-none">
              S&L <span className="text-[#F1C40F]">Commercial</span> Wraps
            </span>
          </Link>

          {/* Menú de Escritorio (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/servicios" className="text-sm font-semibold text-slate-200 hover:text-[#F1C40F] transition">
              {lang === 'es' ? 'Servicios' : 'Services'}
            </Link>
            <Link href="/contacto" className="text-sm font-semibold text-slate-200 hover:text-[#F1C40F] transition">
              {lang === 'es' ? 'Contacto' : 'Contact'}
            </Link>

            {/* Selector de Idioma */}
            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="bg-[#242424] hover:bg-[#2e2e2e] border border-[#7F8C8D]/40 text-xs font-bold px-3 py-1.5 rounded-md text-white transition uppercase"
            >
              {lang === 'es' ? 'ES' : 'EN'}
            </button>

            {/* Botón Cotizar */}
            <Link
              href="/contacto"
              className="bg-[#2E86C1] hover:bg-[#21618C] text-white text-xs font-bold px-4 py-2.5 rounded-lg transition shadow-md uppercase tracking-wide"
            >
              {lang === 'es' ? 'Cotizar Ahora' : 'Get Quote'}
            </Link>
          </div>

          {/* Botón Menú Hamburguesa (Mobile) */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Selector de Idioma en Móvil */}
            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="bg-[#242424] border border-[#7F8C8D]/40 text-xs font-bold px-2.5 py-1 rounded text-white uppercase"
            >
              {lang === 'es' ? 'ES' : 'EN'}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-slate-200 hover:text-white focus:outline-none p-2"
              aria-label="Abrir Menú"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
                )}
              </svg>
            </button>
          </div>

        </div>

        {/* Menú Desplegable en Móviles */}
        {menuOpen && (
          <div className="md:hidden border-t border-[#7F8C8D]/20 py-4 space-y-3 bg-[#1C1C1C]">
            <Link
              href="/servicios"
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-[#F1C40F] hover:bg-[#242424]"
            >
              {lang === 'es' ? 'Servicios' : 'Services'}
            </Link>
            <Link
              href="/contacto"
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-[#F1C40F] hover:bg-[#242424]"
            >
              {lang === 'es' ? 'Contacto' : 'Contact'}
            </Link>
            <Link
              href="/contacto"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center bg-[#2E86C1] hover:bg-[#21618C] text-white font-bold py-2.5 rounded-lg text-sm uppercase tracking-wide mt-2"
            >
              {lang === 'es' ? 'Cotizar Ahora' : 'Get Quote'}
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}