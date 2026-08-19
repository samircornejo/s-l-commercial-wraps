"use client";

import Link from 'next/link';
import { useLanguage } from '../components/LanguageProvider';

export default function ServiciosPage() {
  const { lang } = useLanguage();

  const servicesList = [
    {
      id: '1',
      badge: lang === 'es' ? 'Servicio #1' : 'Service #1',
      title: lang === 'es' ? 'ROTULACIÓN DE FLOTAS' : 'Fleet Branding & Wraps',
      desc: lang === 'es' ? 'Diseño e instalación de rotulado para flotas y vehículos comerciales.' : 'Design and installation of branding for fleets and commercial vehicles.',
      img: '/wrap-1.jpg',
      popular: lang === 'es' ? 'Más popular' : 'Most popular'
    },
    {
      id: '2',
      badge: lang === 'es' ? 'Servicio #2' : 'Service #2',
      title: lang === 'es' ? 'POLARIZADO DE VENTANAS' : 'Window Tinting',
      desc: lang === 'es' ? 'Polarizado profesional que reduce calor, protege de UV y da privacidad.' : 'Professional tinting that reduces heat, protects from UV and adds privacy.',
      img: '/polarizado-1.jpg',
    },
    {
      id: '3',
      badge: lang === 'es' ? 'Servicio #3' : 'Service #3',
      title: lang === 'es' ? 'CAMBIO DE COLOR' : 'Full Vehicle Wraps',
      desc: lang === 'es' ? 'Transformación total con vinil automotriz de alta calidad y acabados especiales.' : 'Complete vehicle transformation with high-quality vinyl and special finishes.',
      img: '/wrap-2.jpg',
    }
    ,
    {
      id: '4',
      badge: lang === 'es' ? 'Servicio #4' : 'Service #4',
      title: lang === 'es' ? 'LUCES Y DETALLES' : 'Lights & Detailing',
      desc: lang === 'es' ? 'Mejoras en iluminación, detalles estéticos y personalizaciones finas para tu vehículo.' : 'Lighting upgrades, aesthetic details and fine customizations for your vehicle.',
      img: '/detalles-1.jpg',
    }
  ];

  return (
    <main className="min-h-screen bg-[#1C1C1C] text-white py-12 px-6 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* ENCABEZADO */}
        <div className="space-y-2">
          <h1 className="font-[family-name:var(--font-montserrat)] text-4xl font-black text-white">
            {lang === 'es' ? 'Nuestros Servicios' : 'Our Services'}
          </h1>
          <p className="text-[#7F8C8D] text-sm">
            {lang === 'es' ? 'Haz clic en cualquiera de los servicios para ver el proceso detallado.' : 'Click on any service to view the detailed process.'}
          </p>
        </div>

        {/* GRILLA DE SERVICIOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesList.map((s) => (
            <div key={s.id} className="bg-[#1C1C1C] rounded-2xl overflow-hidden border border-[#7F8C8D]/40 flex flex-col justify-between shadow-xl group hover:border-[#F1C40F] transition duration-300">
              
              {/* IMAGEN */}
              <div className="relative h-64 w-full overflow-hidden bg-black">
                <img 
                  src={s.img} 
                  alt={s.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-black/30 to-transparent" />
                
                {/* BADGE */}
                <div className="absolute top-4 left-4 bg-[#1C1C1C]/90 backdrop-blur-md text-[#F1C40F] text-xs font-black px-3 py-1 rounded-md border border-[#F1C40F]/40 font-[family-name:var(--font-montserrat)] uppercase">
                  {s.badge}
                </div>

                {/* TÍTULO */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-[family-name:var(--font-montserrat)] text-2xl font-black text-white leading-tight drop-shadow-md">
                    {s.title}
                  </h3>
                </div>
              </div>

              {/* CONTENIDO Y BOTÓN */}
              <div className="p-6 flex flex-col justify-between flex-1 space-y-6">
                <p className="text-slate-200 text-sm leading-relaxed">{s.desc}</p>
                <div className="flex items-center gap-4 pt-2">
                  <Link 
                    href={`/servicios/${s.id}`} 
                    className="bg-[#2E86C1] hover:bg-[#21618C] text-white font-bold text-sm px-5 py-2.5 rounded-lg transition shadow-md font-[family-name:var(--font-montserrat)]"
                  >
                    {lang === 'es' ? 'Ver proceso' : 'View process'}
                  </Link>
                  {s.popular && (
                    <span className="text-[#F1C40F] text-xs font-bold uppercase tracking-wide">
                      {s.popular}
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </main>
  );
}