"use client";

import Link from 'next/link';
import { useLanguage } from './LanguageProvider';

export default function ServiceTemplate({
  title,
  description,
  benefits,
  requirements,
  processSteps,
  gallery,
  faqs,
  serviceSlug,
}) {
  const { lang } = useLanguage();

  const t = {
    es: {
      request: 'Solicitar cotización',
      benefits: 'Beneficios del Servicio',
      requirements: 'Requisitos Previos',
      process: 'Proceso de Trabajo',
      step: 'Paso',
      gallery: 'Galería de Trabajos',
      faqs: 'Preguntas Frecuentes',
      startQuote: 'Iniciar Formulario de Cotización'
    },
    en: {
      request: 'Request a quote',
      benefits: 'Service Benefits',
      requirements: 'Prerequisites',
      process: 'Work Process',
      step: 'Step',
      gallery: 'Work Gallery',
      faqs: 'Frequently Asked Questions',
      startQuote: 'Start Quote Form'
    }
  };
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-10 px-4 md:px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Presentación / Hero */}
        <section className="text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">{title}</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">{description}</p>
          <div className="pt-4">
            <Link
              href={`/cotizacion?servicio=${serviceSlug}`}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition inline-block"
            >
              {t[lang].request}
            </Link>
          </div>
        </section>

        {/* Beneficios */}
        {benefits && (
          <section className="bg-slate-900 border border-slate-800 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">{t[lang].benefits}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-disc list-inside text-slate-300">
              {benefits.map((benefit, idx) => (
                <li key={idx}>{benefit}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Requisitos */}
        <section className="bg-slate-900 border border-slate-800 rounded-xl p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-4 text-amber-400">{t[lang].requirements}</h2>
          <ul className="space-y-2 list-disc list-inside text-slate-300">
            {requirements.map((req, idx) => (
              <li key={idx}>{req}</li>
            ))}
          </ul>
        </section>

        {/* Proceso Paso a Paso */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-center text-white">{t[lang].process}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-2">
                <span className="text-blue-500 text-sm font-bold">{t[lang].step} {idx + 1}</span>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Galería */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">{t[lang].gallery}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {gallery.map((imgUrl, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 h-48 rounded-lg flex items-center justify-center text-slate-500">
                <span>[ Muestra de trabajo / Antes y Después ]</span>
              </div>
            ))}
          </div>
        </section>

        {/* Preguntas Frecuentes */}
        <section className="bg-slate-900 border border-slate-800 rounded-xl p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-bold text-white">{t[lang].faqs}</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-slate-800 pb-3">
                <h3 className="font-semibold text-blue-300">{faq.q}</h3>
                <p className="text-slate-400 text-sm mt-1">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Botón Final de Cotización */}
        <section className="text-center pt-6">
          <Link
            href={`/cotizacion?servicio=${serviceSlug}`}
            className="bg-amber-500 hover:bg-amber-600 text-black font-extrabold py-4 px-10 rounded-xl text-xl transition inline-block"
          >
            {t[lang].startQuote}
          </Link>
        </section>

      </div>
    </div>
  );
}