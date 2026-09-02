"use client";

import Link from 'next/link';
import { useLanguage } from './components/LanguageProvider';

export default function Home() {
  const { lang } = useLanguage();

  const t = {
    es: {
      intro: 'Bienvenido a S&L Commercial Wraps. Explora nuestros servicios de personalización y rotulado vehicular.',
      heroTag: 'Gráficos para vehículos, letreros, pancartas, gráficos para paredes, publicidad exterior y polarizado de ventanas.',
      explore: 'Explorar servicios',
      quote: 'Pedir Cotización',
      featuresTitle: 'Nuestros Servicios Principales',
      subtitle: 'Haz clic en cualquiera de los servicios para ver el proceso detallado.',
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
      intro: 'Welcome to S&L Commercial Wraps. Explore our vehicle customization and branding services.',
      heroTag: 'vehicle graphics, signs, banners, wall graphics, outdoor advertising and windows tinting.',
      explore: 'Explore services',
      quote: 'Request Quote',
      featuresTitle: 'Our Main Services',
      subtitle: 'Click on any service to view the detailed process.',
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

  const servicesList = [
    {
      id: '1',
      badge: lang === 'es' ? 'Servicio #1' : 'Service #1',
      title: lang === 'es' ? 'ROTULACIÓN DE FLOTAS' : 'FLEET WRAPPING',
      desc: lang === 'es' 
        ? 'Convierte tu flota en publicidad móvil. Diseños personalizados, materiales de alta calidad e instalación profesional.' 
        : 'Turn your fleet into mobile advertising. Custom designs, high-quality materials, and professional installation.',
      img: '/wrap-6.jpg',
      popular: lang === 'es' ? 'Más popular' : 'Most popular',
      iconSvg: (
        <svg className="w-5 h-5 text-[#1C1C1C]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 7h-3V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM7 16.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM18 10.5V8.5h2.5l1.5 2V10.5H18z"/>
        </svg>
      )
    },
    {
      id: '2',
      badge: lang === 'es' ? 'Servicio #2' : 'Service #2',
      title: lang === 'es' ? 'POLARIZADO DE VENTANAS' : 'WINDOW TINTING',
      desc: lang === 'es' 
        ? 'Película cerámica de máxima calidad que reduce el calor, protege tu piel y da privacidad. Apariencia elegante y durabilidad garantizada.' 
        : 'Top quality ceramic film that reduces heat, protects your skin and provides privacy. Elegant appearance and guaranteed durability.',
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
      title: lang === 'es' ? 'CAMBIO DE COLOR' : 'COLOR CHANGE WRAP',
      desc: lang === 'es' 
        ? 'Renueva el look de tu auto con vinilos premium. Variedad de colores y acabados con protección superior.' 
        : 'Refresh your car look with premium vinyls. Variety of colors and finishes with superior protection.',
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
      title: lang === 'es' ? 'TINTADO DE FAROS Y DETALLES' : 'HEADLIGHT TINTING AND DETAILING',
      desc: lang === 'es' 
        ? 'Instalación de luces, detalles estéticos y acabados que marcan la diferencia. Estilo y funcionalidad en cada proyecto.' 
        : 'Installation of lights, aesthetic details, and finishes that make a difference. Style and functionality in every project.',
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
      title: lang === 'es' ? 'PUBLICIDAD PARA NEGOCIOS' : 'PARTIAL COMMERCIAL WRAP',
      desc: lang === 'es' 
        ? 'Destaca logos, teléfonos y gráficos en áreas clave de tu vehículo. Opción económica y de alto impacto visual.' 
        : 'Highlight logos, phone numbers, and graphics on key areas of your vehicle. Cost-effective with high visual impact.',
      img: '/wrap-11.jpg',
      iconSvg: (
        <svg className="w-5 h-5 text-[#1C1C1C]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 12h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2zm0-16h14v14H7V5z"/>
        </svg>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-[#1C1C1C] text-white space-y-12 pb-12 font-sans">
      
      {/* HERO SECTION CON VIDEO DE FONDO */}
      <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden border-b border-[#7F8C8D]/30">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/75 to-black/60 z-10" />

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto space-y-5">
          <div className="inline-block bg-[#F1C40F] text-[#1C1C1C] text-xs md:text-sm font-black py-1 px-4 rounded-full shadow-lg font-[family-name:var(--font-montserrat)] uppercase tracking-wider">
            📍 {lang === 'es' ? 'Servicios en New Jersey' : 'Services in New Jersey'}
          </div>

          <img 
            src="/logo.jpg" 
            alt="S&L Commercial Wraps" 
            className="mx-auto w-24 h-24 md:w-32 md:h-32 rounded-xl object-contain bg-[#1C1C1C] border-2 border-[#F1C40F] shadow-2xl" 
          />

          <h1 className="font-[family-name:var(--font-montserrat)] text-4xl md:text-6xl font-black tracking-tight drop-shadow-md text-white">
            S&L <span className="text-[#F1C40F]">COMMERCIAL</span> WRAPS
          </h1>

          <p className="text-[#F1C40F] font-semibold text-lg md:text-xl drop-shadow">
            {t[lang].heroTag}
          </p>

          <p className="text-[#7F8C8D] text-base md:text-lg max-w-2xl mx-auto">
            {t[lang].intro}
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <Link
              href="/servicios"
              className="bg-[#F1C40F] hover:bg-[#d4ac0d] text-[#1C1C1C] font-black px-8 py-3.5 rounded-xl transition shadow-lg hover:scale-105 text-sm tracking-wide normal-case"
            >
              {t[lang].explore}
            </Link>

            <Link
              href="/contacto"
              className="bg-[#2E86C1] hover:bg-[#21618C] text-white border border-[#2E86C1] px-8 py-3.5 rounded-xl font-bold transition backdrop-blur-sm hover:scale-105"
            >
              {t[lang].quote}
            </Link>
          </div>

        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <div className="max-w-6xl mx-auto px-6 space-y-16">

        {/* TARJETAS DE SERVICIOS */}
        <section className="space-y-3">
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-black text-white">{t[lang].featuresTitle}</h2>
          <p className="text-[#7F8C8D] text-sm pb-4">{t[lang].subtitle}</p>

          {/* Cambio a lg:grid-cols-3 para acomodar visualmente los 5 servicios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((s) => (
              <div key={s.id} className="bg-[#1C1C1C] rounded-2xl overflow-hidden border border-[#7F8C8D]/40 flex flex-col justify-between shadow-xl group hover:border-[#F1C40F] transition duration-300">
                
                {/* CONTENEDOR DE LA IMAGEN */}
                <div className="relative h-64 w-full overflow-hidden bg-black">
                  <img 
                    src={s.img} 
                    alt={s.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-black/30 to-transparent" />
                  
                  {/* BADGE DEL SERVICIO */}
                  <div className="absolute top-4 left-4 bg-[#1C1C1C]/90 backdrop-blur-md text-[#F1C40F] text-xs font-black px-3 py-1 rounded-md border border-[#F1C40F]/40 font-[family-name:var(--font-montserrat)] uppercase">
                    {s.badge}
                  </div>

                  {/* TÍTULO Y CAJA AMARILLA SOBRE LA IMAGEN */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#F1C40F] rounded-md flex items-center justify-center shrink-0 shadow-md">
                      {s.iconSvg}
                    </div>
                    <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-black text-white leading-tight drop-shadow-md uppercase">
                      {s.title}
                    </h3>
                  </div>
                </div>

                {/* DETALLES Y BOTÓN */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-6">
                  <p className="text-slate-200 text-sm leading-relaxed">{s.desc}</p>
                  <div className="flex items-center gap-4 pt-2">
                    <Link href={`/servicios/${s.id}`} className="bg-[#2E86C1] hover:bg-[#21618C] text-white font-bold text-sm px-5 py-2.5 rounded-lg transition shadow-md font-[family-name:var(--font-montserrat)]">
                      {lang === 'es' ? 'Ver proceso' : 'View process'}
                    </Link>
                    {s.popular && <span className="text-[#F1C40F] text-xs font-bold uppercase tracking-wide">{s.popular}</span>}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* FORMULARIO */}
        <section className="space-y-4 bg-[#1C1C1C] border border-[#7F8C8D]/40 p-6 rounded-2xl shadow-xl">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-white">{lang === 'es' ? 'Contacto rápido' : 'Quick contact'}</h2>
          <form onSubmit={(e)=>{e.preventDefault(); const f=new FormData(e.currentTarget); const name=f.get('name')||''; const email=f.get('email')||''; const msg=f.get('message')||''; window.location.href=`mailto:slcommercialwraps@gmail.com?subject=${encodeURIComponent(name)}&body=${encodeURIComponent(msg+'\n\n'+email)}`}} className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <input name="name" placeholder={lang==='es'?'Nombre':'Name'} className="p-3 bg-black/50 border border-[#7F8C8D]/40 rounded-xl text-sm focus:outline-none focus:border-[#F1C40F] text-white placeholder-[#7F8C8D]" />
            <input name="email" placeholder="Email" className="p-3 bg-black/50 border border-[#7F8C8D]/40 rounded-xl text-sm focus:outline-none focus:border-[#F1C40F] text-white placeholder-[#7F8C8D]" />
            <button className="bg-[#F1C40F] hover:bg-[#d4ac0d] text-[#1C1C1C] font-black px-4 py-3 rounded-xl transition font-[family-name:var(--font-montserrat)] uppercase text-sm">{lang==='es'?'Enviar':'Send'}</button>
            <textarea name="message" placeholder={lang==='es'?'Mensaje':'Message'} className="md:col-span-3 p-3 bg-black/50 border border-[#7F8C8D]/40 rounded-xl h-24 text-sm focus:outline-none focus:border-[#F1C40F] text-white placeholder-[#7F8C8D]" />
          </form>
        </section>

        {/* CTA FINAL */}
        <section className="text-center space-y-6 bg-gradient-to-r from-[#2E86C1]/20 to-[#1C1C1C] p-8 rounded-2xl border border-[#7F8C8D]/40 shadow-2xl">
          <h3 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-white">{t[lang].ctaTitle}</h3>
          <div className="flex justify-center gap-4">
            <Link href="/servicios" className="bg-[#2E86C1] hover:bg-[#21618C] text-white px-6 py-3 rounded-xl font-bold transition font-[family-name:var(--font-montserrat)]">{t[lang].servicios}</Link>
            <Link href="/contacto" className="border border-[#7F8C8D] hover:bg-[#7F8C8D]/20 px-6 py-3 rounded-xl font-bold transition">{t[lang].contacto}</Link>
          </div>
        </section>

      </div>
    </main>
  );
}