"use client";

import Link from 'next/link';
import { useLanguage } from '../components/LanguageProvider';

export default function Contacto() {
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
    },
    {
      id: '4',
      badge: lang === 'es' ? 'Servicio #4' : 'Service #4',
      title: lang === 'es' ? 'LUCES Y DETALLES' : 'Lights & Detailing',
      desc: lang === 'es' ? 'Mejoras en iluminación, detalles estéticos y personalizaciones finas para tu vehículo.' : 'Lighting upgrades, aesthetic details and fine customizations for your vehicle.',
      img: '/wrap-5.jpg',
    }
  ];

  return (
    <div className="w-full bg-[#1C1C1C] text-white min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Encabezado */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-[family-name:var(--font-montserrat)]">
            Contacto
          </h1>
          <p className="text-[#7F8C8D] text-base sm:text-lg">
            ¿Tienes dudas o deseas cotizar? Completa el formulario y te contactamos.
          </p>
        </div>

        {/* GRILLA DE SERVICIOS (misma tarjeta que en /servicios) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesList.map((s) => (
            <div key={s.id} className="bg-[#1C1C1C] rounded-2xl overflow-hidden border border-[#7F8C8D]/40 flex flex-col justify-between shadow-xl group hover:border-[#F1C40F] transition duration-300">
              <div className="relative h-44 w-full overflow-hidden bg-black">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-black/30 to-transparent" />
                <div className="absolute top-4 left-4 bg-[#1C1C1C]/90 backdrop-blur-md text-[#F1C40F] text-xs font-black px-3 py-1 rounded-md border border-[#F1C40F]/40 font-[family-name:var(--font-montserrat)] uppercase">
                  {s.badge}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-black text-white leading-tight drop-shadow-md">{s.title}</h3>
                </div>
              </div>
              <div className="p-4 flex flex-col justify-between flex-1 space-y-4">
                <p className="text-slate-200 text-sm leading-relaxed">{s.desc}</p>
                <div className="flex items-center gap-3 pt-2">
                  <Link href={`/servicios/${s.id}`} className="bg-[#2E86C1] hover:bg-[#21618C] text-white font-bold text-sm px-4 py-2 rounded-lg transition shadow-md font-[family-name:var(--font-montserrat)]">{lang === 'es' ? 'Ver proceso' : 'View process'}</Link>
                  {s.popular && (<span className="text-[#F1C40F] text-xs font-bold uppercase tracking-wide">{s.popular}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tarjeta del Formulario */}
        <div className="bg-[#242424] border border-[#7F8C8D]/30 p-6 sm:p-8 rounded-2xl shadow-xl space-y-6">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Campo Nombre */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300">
                  Nombre
                </label>
                <input
                  type="text"
                  className="w-full bg-[#1C1C1C] border border-[#7F8C8D]/40 focus:border-[#F1C40F] focus:outline-none text-white rounded-lg p-3 text-sm transition"
                  placeholder="Tu nombre"
                />
              </div>

              {/* Campo Email */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-[#1C1C1C] border border-[#7F8C8D]/40 focus:border-[#F1C40F] focus:outline-none text-white rounded-lg p-3 text-sm transition"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            {/* Campo Mensaje */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-300">
                Mensaje
              </label>
              <textarea
                rows={5}
                className="w-full bg-[#1C1C1C] border border-[#7F8C8D]/40 focus:border-[#F1C40F] focus:outline-none text-white rounded-lg p-3 text-sm transition resize-none"
                placeholder="Escribe tu consulta aquí..."
              />
            </div>

            {/* Botón y Teléfono */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="submit"
                className="bg-[#2E86C1] hover:bg-[#21618C] text-white font-bold py-3 px-6 rounded-lg transition shadow-md text-sm text-center"
              >
                Enviar por correo
              </button>

              <a
                href="tel:9733326605"
                className="flex items-center justify-center gap-2 text-[#F1C40F] font-bold text-sm hover:underline py-2"
              >
                📞 973-332-6605
              </a>
            </div>
          </form>
        </div>

        {/* Volver al inicio */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center text-[#2E86C1] text-sm hover:text-[#F1C40F] font-medium transition"
          >
            ← Volver al Inicio
          </Link>
        </div>

      </div>
    </div>
  );
}