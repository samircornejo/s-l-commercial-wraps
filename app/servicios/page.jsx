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
      popular: lang === 'es' ? 'MÁS POPULAR' : 'MOST POPULAR'
    },
    {
      id: '2',
      badge: lang === 'es' ? 'Servicio #2' : 'Service #2',
      title: lang === 'es' ? 'Polarizados a Domicilio' : 'Mobile Window Tinting',
      desc: lang === 'es' 
        ? 'Instalación profesional directamente en tu ubicación.' 
        : 'Professional installation directly at your location.',
      img: '/polarizado-1.jpg'
    },
    {
      id: '3',
      badge: lang === 'es' ? 'Servicio #3' : 'Service #3',
      title: lang === 'es' ? 'Cambio de Color (Wrap)' : 'Color Change Wrap',
      desc: lang === 'es' 
        ? 'Transformación total con vinil automotriz de alta calidad.' 
        : 'Total transformation with high quality automotive vinyl.',
      img: '/wrap-2.jpg'
    },
    {
      id: '4',
      badge: lang === 'es' ? 'Servicio #4' : 'Service #4',
      title: lang === 'es' ? 'Luces y Detalles' : 'Lights & Details',
      desc: lang === 'es' 
        ? 'Instalación de luces, detalles estéticos y acabados que marcan la diferencia.' 
        : 'Installation of lights, aesthetic details, and finishes that make a difference.',
      img: '/wrap-5.jpg'
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

        {/* Reemplazamos grid-cols-3 por grid-cols-2 en pantallas medianas o lg:grid-cols-4 para mostrar los 4 servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((s) => (
            <div key={s.id} className="bg-[#1C1C1C] rounded-2xl overflow-hidden border border-[#7F8C8D]/40 flex flex-col justify-between shadow-xl group hover:border-[#F1C40F] transition duration-300">
              
              <div className="relative h-52 w-full overflow-hidden bg-black">
                <img 
                  src={s.img} 
                  alt={s.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-black/20 to-transparent" />
                
                <div className="absolute top-3 left-3 bg-[#1C1C1C]/90 text-[#F1C40F] text-[10px] font-black px-2.5 py-1 rounded border border-[#F1C40F]/40 uppercase">
                  {s.badge}
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-black text-white leading-tight uppercase">
                    {s.title}
                  </h3>
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
                <p className="text-slate-300 text-xs leading-relaxed">{s.desc}</p>
                <div className="flex items-center gap-3 pt-2">
                  <Link href={`/servicios/${s.id}`} className="bg-[#2E86C1] hover:bg-[#21618C] text-white font-bold text-xs px-4 py-2 rounded-lg transition shadow-md">
                    {lang === 'es' ? 'Ver proceso' : 'View process'}
                  </Link>
                  {s.popular && <span className="text-[#F1C40F] text-[10px] font-extrabold uppercase">{s.popular}</span>}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </main>
  );
}