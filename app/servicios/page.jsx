"use client";

import Link from 'next/link';
import { useLanguage } from '../components/LanguageProvider';

export default function ServiciosPage() {
  const { lang } = useLanguage();

  const listaServicios = [
    { id: '1', img: '/wrap-1.jpg', nombre: { es: 'Publicidad para Compañías', en: 'Commercial Vehicle Branding' }, desc: { es: 'Diseño e instalación de rotulado comercial para tu negocio.', en: 'Design and installation of commercial vehicle graphics.' } },
    { id: '2', img: '/polarizado-1.jpg', nombre: { es: 'Polarizados a Domicilio', en: 'Mobile Window Tinting' }, desc: { es: 'Instalación profesional directamente en tu ubicación.', en: 'Professional installation at your location.' } },
    { id: '3', img: '/wrap-5.jpg', nombre: { es: 'Cambio de Color (Wrap)', en: 'Full Vehicle Wraps' }, desc: { es: 'Transformación total con vinil automotriz de alta calidad.', en: 'Complete transformation with high-quality automotive vinyl.' } },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8 max-w-5xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">{lang === 'es' ? 'Nuestros Servicios' : 'Our Services'}</h1>
        <p className="text-slate-400">{lang === 'es' ? 'Haz clic en cualquiera de los servicios para ver el proceso detallado.' : 'Click any service to see the detailed process.'}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {listaServicios.map((s, idx) => (
          <div key={s.id} className="relative bg-slate-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition">
            {s.img && (
              <div className="relative h-64 md:h-72 lg:h-80 w-full overflow-hidden">
                <img src={s.img} alt={s.nombre[lang]} loading="lazy" className="w-full h-full object-cover brightness-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute left-6 bottom-6 text-white">
                  <div className="text-sm md:text-base font-semibold bg-blue-900/40 px-3 py-1 rounded inline-block">{lang === 'es' ? `Servicio #${s.id}` : `Service #${s.id}`}</div>
                  <h3 className="text-2xl md:text-3xl font-extrabold mt-2">{s.nombre[lang]}</h3>
                </div>
              </div>
            )}

            <div className="p-6 md:p-8 border-t border-slate-800 bg-gradient-to-t from-slate-900/60">
              <p className="text-slate-300 text-base md:text-lg leading-relaxed">{s.desc[lang]}</p>

              <div className="mt-6 flex items-center justify-between gap-3">
                <Link href={`/servicios/${s.id}`} className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-lg text-base md:text-lg transition">
                  {lang === 'es' ? 'Ver proceso' : 'View process'}
                </Link>

                <div className="text-sm md:text-base text-slate-400">{idx === 0 ? (lang === 'es' ? 'Más popular' : 'Popular') : ''}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}