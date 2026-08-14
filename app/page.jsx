"use client";

import Link from 'next/link';
import { useLanguage } from './components/LanguageProvider';

export default function Home() {
  const { lang } = useLanguage();

  const t = {
    es: {
      title: 'Pantalla Principal',
      intro: 'Bienvenido a S&L Commercial Wraps. Explora nuestros servicios de personalización y rotulado vehicular.',
      heroTag: 'Rotulados, wraps y polarizados profesionales en New Jersey',
      explore: 'Explorar servicios',
      quote: 'Pedir Cotización',
      featuresTitle: 'Qué Hacemos',
      featuresTitle: 'Qué Hacemos',
      features: [
        'Rotulado comercial y branding vehicular',
        'Cambio de color (vinil wrap) y acabados especiales',
        'Polarizados profesional a domicilio'
      ],
      howTitle: 'Cómo Funciona (Rápido)',
      steps: [
        '1. Consulta y medición',
        '2. Diseño e impresión',
        '3. Instalación profesional'
      ],
      testimonialsTitle: 'Testimonios',
      ctaTitle: '¿Listo para comenzar?',
      servicios: 'Ver Servicios',
      contacto: 'Contacto'
    },
    en: {
      title: 'Home',
      intro: 'Welcome to S&L Commercial Wraps. Explore our vehicle customization and branding services.',
      heroTag: 'Professional wraps, graphics and tinting in New Jersey',
      explore: 'Explore services',
      quote: 'Request Quote',
      featuresTitle: 'What We Do',
      featuresTitle: 'What We Do',
      features: [
        'Commercial vehicle branding and graphics',
        'Full vehicle wraps and special finishes',
        'Mobile professional window tinting'
      ],
      howTitle: 'How It Works (Quick)',
      steps: [
        '1. Consultation & measurement',
        '2. Design & print',
        '3. Professional installation'
      ],
      testimonialsTitle: 'Testimonials',
      ctaTitle: 'Ready to get started?',
      servicios: 'View Services',
      contacto: 'Contact'
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8 max-w-4xl mx-auto space-y-6">
      <div className="bg-amber-500 text-black text-center font-bold py-2 px-4 rounded-lg shadow">
        📍 {lang === 'es' ? 'Servicios en New Jersey' : 'Services in New Jersey'}
      </div>

      {/* HERO */}
      <section className="text-center space-y-4 py-8">
        <img src="/logo.jpg" alt="S&L Commercial Wraps" className="mx-auto w-28 h-28 rounded-md object-contain bg-black border border-amber-500/40" />
        <h1 className="text-4xl md:text-5xl font-extrabold">S&L COMMERCIAL WRAPS</h1>
        <p className="text-amber-300 font-medium">{t[lang].heroTag}</p>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">{t[lang].intro}</p>

        <div className="flex justify-center gap-4 pt-4">
          <Link href="/servicios" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
            {t[lang].explore}
          </Link>
          <Link href="/contacto" className="border border-slate-700 hover:bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold transition">
            {t[lang].quote}
          </Link>
        </div>
      </section>

      {/* Service preview cards */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">{t[lang].featuresTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[{
            id: '1',
            title: lang === 'es' ? 'Publicidad / Rotulado' : 'Branding / Graphics',
            desc: lang === 'es' ? 'Rotulado para flotas y vehículos comerciales.' : 'Vehicle graphics and commercial fleet branding.',
            emoji: '🚚'
          },{
            id: '3',
            title: lang === 'es' ? 'Cambio de Color (Wrap)' : 'Full Vehicle Wraps',
            desc: lang === 'es' ? 'Transforma el color sin pintar.' : 'Change color without repainting.',
            emoji: '🎨'
          },{
            id: '2',
            title: lang === 'es' ? 'Polarizados a Domicilio' : 'Mobile Window Tinting',
            desc: lang === 'es' ? 'Tintado profesional en tu ubicación.' : 'Professional tinting at your location.',
            emoji: '🕶️'
          }].map(s => (
            <Link key={s.id} href={`/servicios/${s.id}`} className="block bg-slate-900 border border-slate-800 p-5 rounded-lg hover:border-amber-400 transition">
              <div className="text-3xl">{s.emoji}</div>
              <h3 className="font-bold pt-2">{s.title}</h3>
              <p className="text-slate-400 text-sm pt-1">{s.desc}</p>
              <div className="pt-3 text-sm text-blue-400">{lang === 'es' ? 'Ver servicio →' : 'View service →'}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick contact small form */}
      <section className="space-y-4 bg-slate-900 border border-slate-800 p-6 rounded-lg">
        <h2 className="text-2xl font-bold">{lang === 'es' ? 'Contacto rápido' : 'Quick contact'}</h2>
        <form onSubmit={(e)=>{e.preventDefault(); const f=new FormData(e.currentTarget); const name=f.get('name')||''; const email=f.get('email')||''; const msg=f.get('message')||''; window.location.href=`mailto:slcommercialwraps@gmail.com?subject=${encodeURIComponent(name)}&body=${encodeURIComponent(msg+'\n\n'+email)}`}} className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <input name="name" placeholder={lang==='es'?'Nombre':'Name'} className="p-2 bg-slate-800 border border-slate-700 rounded" />
          <input name="email" placeholder="Email" className="p-2 bg-slate-800 border border-slate-700 rounded" />
          <button className="bg-amber-500 text-black font-semibold px-4 py-2 rounded">{lang==='es'?'Enviar':'Send'}</button>
          <textarea name="message" placeholder={lang==='es'?'Mensaje':'Message'} className="md:col-span-3 p-2 bg-slate-800 border border-slate-700 rounded h-24" />
        </form>
      </section>

      {/* Features / What we do */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">{t[lang].featuresTitle}</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-slate-300">
          {t[lang].features.map((f, i) => (
            <li key={i} className="bg-slate-900 border border-slate-800 p-4 rounded-lg">{f}</li>
          ))}
        </ul>
      </section>

      {/* Quick steps */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">{t[lang].howTitle}</h2>
        <div className="flex flex-col md:flex-row gap-4">
          {t[lang].steps.map((s, i) => (
            <div key={i} className="flex-1 bg-slate-900 border border-slate-800 p-6 rounded-lg text-slate-300">{s}</div>
          ))}
        </div>
      </section>

      {/* Testimonials (placeholder) */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">{t[lang].testimonialsTitle}</h2>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg text-slate-300">
          <p className="italic">"{lang === 'es' ? 'Excelente servicio y atención.' : 'Excellent service and attention.'}"</p>
          <p className="text-sm pt-2">— {lang === 'es' ? 'Cliente satisfecho' : 'Happy customer'}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center space-y-4 bg-gradient-to-r from-blue-900/20 to-slate-900 p-8 rounded-lg border border-slate-800">
        <h3 className="text-xl font-bold">{t[lang].ctaTitle}</h3>
        <div className="flex justify-center gap-4">
          <Link href="/servicios" className="bg-blue-600 px-6 py-3 rounded-lg">{t[lang].servicios}</Link>
          <Link href="/contacto" className="border border-slate-700 px-6 py-3 rounded-lg">{t[lang].contacto}</Link>
        </div>
      </section>
    </main>
  );
}