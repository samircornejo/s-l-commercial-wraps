"use client";

import Link from 'next/link';
import { useLanguage } from './LanguageProvider';

export default function Navbar() {
  const { lang, setLang } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full font-sans">
      {/* BARRA SUPERIOR DE UBICACIÓN */}
      <div className="bg-[#F1C40F] text-[#1C1C1C] text-xs font-black py-1.5 text-center uppercase tracking-wider font-[family-name:var(--font-montserrat)] shadow-sm">
        📍 {lang === 'es' ? 'Servicios disponibles en New Jersey' : 'Services available in New Jersey'}
      </div>

      {/* NAVEGACIÓN PRINCIPAL */}
      <nav className="bg-[#1C1C1C] border-b border-[#7F8C8D]/30 px-6 py-3.5 flex items-center justify-between shadow-xl">
        
        {/* LOGO Y NOMBRE DE MARCA */}
        <Link href="/" className="flex items-center gap-3 group">
          <img 
            src="/logo.jpg" 
            alt="S&L Commercial Wraps" 
            className="w-10 h-10 rounded-lg object-contain bg-[#1C1C1C] border border-[#F1C40F] group-hover:scale-105 transition"
          />
          <span className="font-[family-name:var(--font-montserrat)] text-lg font-black tracking-tight text-white">
            S&L <span className="text-[#F1C40F]">COMMERCIAL</span> WRAPS
          </span>
        </Link>

        {/* ENLACES Y ACCIONES */}
        <div className="flex items-center gap-6">
          <Link href="/servicios" className="text-sm font-semibold text-[#7F8C8D] hover:text-[#F1C40F] transition">
            {lang === 'es' ? 'Servicios' : 'Services'}
          </Link>
          
          <Link href="/contacto" className="text-sm font-semibold text-[#7F8C8D] hover:text-[#F1C40F] transition">
            {lang === 'es' ? 'Contacto' : 'Contact'}
          </Link>

          {/* SELECTOR DE IDIOMA */}
          <button 
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="text-xs font-black text-white bg-[#1C1C1C] border border-[#7F8C8D]/60 hover:border-[#F1C40F] px-2.5 py-1 rounded-md transition uppercase"
          >
            {lang === 'es' ? 'ES' : 'EN'}
          </button>

          {/* BOTÓN COTIZAR */}
          <Link 
            href="/contacto" 
            className="bg-[#2E86C1] hover:bg-[#21618C] text-white text-xs font-bold px-4 py-2 rounded-lg transition shadow-md font-[family-name:var(--font-montserrat)] uppercase tracking-wider"
          >
            {lang === 'es' ? 'Cotizar Ahora' : 'Get Quote'}
          </Link>
        </div>

      </nav>
    </header>
  );
}