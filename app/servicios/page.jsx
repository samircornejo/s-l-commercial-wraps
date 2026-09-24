"use client";

import Link from 'next/link';
import { useLanguage } from '../components/LanguageProvider';

export default function ServiciosPage() {
  const { lang } = useLanguage();

  const servicesList = [
    {
      id: '1',
      badge: lang === 'es' ? 'Servicio #1' : 'Service #1',
      title: lang === 'es' ? 'Publicidad para Compañías' : 'Commercial Vehicle Branding',
      desc: lang === 'es' 
        ? 'Diseño e instalación de rotulado comercial para tu negocio.' 
        : 'Design and installation of commercial branding for your business.',
      img: '/wrap-6.jpg',
      popular: lang === 'es' ? 'MÁS POPULAR' : 'MOST POPULAR',
      iconSvg: (
        <svg className="w-5 h-5 text-[#1C1C1C]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 7h-3V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM7 16.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM18 10.5V8.5h2.5l1.5 2V10.5H18z"/>
        </svg>
      )
    },
    {
      id: '2',
      badge: lang === 'es' ? 'Servicio #2' : 'Service #2',
      title: lang === 'es' ? 'Polarizados a Domicilio' : 'Mobile Window Tinting',
      desc: lang === 'es' 
        ? 'Instalación profesional directamente en tu ubicación.' 
        : 'Professional installation directly at your location.',
      img: '/polarizado-1.jpg',
      iconSvg: (
        <svg className="w-5 h-5 text-[#1C1C1C]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1z"/>
        </svg>
      )
    },
    {
      id: '3',
      badge: lang === 'es' ? 'Servicio #3' : 'Service #3',
      title: lang === 'es' ? 'Cambio de Color (Wrap)' : 'Color Change Wrap',
      desc: lang === 'es' 
        ? 'Transformación total con vinil automotriz de alta calidad.' 
        : 'Total transformation with high quality automotive vinyl.',
      img: '/wrap-7.jpg',
      iconSvg: (
        <svg className="w-5 h-5 text-[#1C1C1C]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.21 19.57 10.56 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
        </svg>
      )
    },
    {
      id: '4',
      badge: lang === 'es' ? 'Servicio #4' : 'Service #4',
      title: lang === 'es' ? 'Luces y Detalles' : 'Lights & Details',
      desc: lang === 'es' 
        ? 'Instalación de luces, detalles estéticos y acabados que marcan la diferencia.' 
        : 'Installation of lights, aesthetic details, and finishes that make a difference.',
      img: '/wrap-5.jpg',
      iconSvg: (
        <svg className="w-5 h-5 text-[#1C1C1C]" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1c-6.08 0-11 4.92-11 11s4.92 11 11 11 11-4.92 11-11-4.92-11-11-11zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9z"/>
        </svg>
      )
    },
    {
      id: '5',
      badge: lang === 'es' ? 'Servicio #5' : 'Service #5',
      title: lang === 'es' ? 'Gráficos Comerciales y Letreros' : 'Commercial Graphics & Signs',
      desc: lang === 'es' 
        ? 'Banners, gráficos para paredes, letreros publicitarios y rotulación de ventanas para locales comerciales.' 
        : 'Banners, wall graphics, commercial signs, and storefront window vinyls.',
      img: '/wrap-11.jpg',
      iconSvg: (
        <svg className="w-5 h-5 text-[#1C1C1C]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 12h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2zm0-16h14v14H7V5z"/>
        </svg>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-[#1C1C1C] text-white py-12 px-6 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        
        <div className="space-y-2">
          <h1 className="font-[family-name:var(--font-montserrat)] text-4xl font-black text-white">
            {lang === 'es' ? 'Nuestros Servicios' : 'Our Services'}
          </h1>
          <p className="text-[#7F8C8D] text-sm">
            {lang === 'es' 
              ? 'Haz clic en cualquiera de los servicios para ver el proceso detallado.' 
              : 'Click on any service to view the detailed process.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((s) => (
            <div key={s.id} className="bg-[#1C1C1C] rounded-2xl overflow-hidden border border-[#7F8C8D]/40 flex flex-col justify-between shadow-xl group hover:border-[#F1C40F] transition duration-300">
              
              <div className="relative h-64 w-full overflow-hidden bg-black">
                <img 
                  src={s.img} 
                  alt={s.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-black/20 to-transparent" />
                
                <div className="absolute top-4 left-4 bg-[#1C1C1C]/90 backdrop-blur-md text-[#F1C40F] text-xs font-black px-3 py-1 rounded-md border border-[#F1C40F]/40 uppercase">
                  {s.badge}
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#F1C40F] rounded-md flex items-center justify-center shrink-0 shadow-md">
                    {s.iconSvg}
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight drop-shadow-md uppercase">
                    {s.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1 space-y-6">
                <p className="text-slate-200 text-sm leading-relaxed">{s.desc}</p>
                <div className="flex items-center gap-4 pt-2">
                  <Link href={`/servicios/${s.id}`} className="bg-[#2E86C1] hover:bg-[#21618C] text-white font-bold text-sm px-5 py-2.5 rounded-lg transition shadow-md">
                    {lang === 'es' ? 'Ver proceso' : 'View process'}
                  </Link>
                  {s.popular && <span className="text-[#F1C40F] text-xs font-bold uppercase tracking-wide">{s.popular}</span>}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </main>
  );
}