"use client";

import Link from 'next/link';
import { useLanguage } from '../components/LanguageProvider';

export default function Contacto() {
  const { lang } = useLanguage();

  const t = {
    es: {
      title: 'Contacto',
      subtitle: '¿Tienes dudas o deseas cotizar? Completa el formulario y te contactamos.',
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'tu@email.com',
      messagePlaceholder: 'Escribe tu consulta aquí...',
      submit: 'Enviar por correo',
      backHome: 'Volver al Inicio',
    },
    en: {
      title: 'Contact',
      subtitle: 'Have questions or want a quote? Fill out the form and we will contact you.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'you@email.com',
      messagePlaceholder: 'Write your inquiry here...',
      submit: 'Send by email',
      backHome: 'Back to Home',
    }
  };

  const copy = t[lang] || t.es;

  return (
    <div className="w-full bg-[#1C1C1C] text-white min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-[family-name:var(--font-montserrat)]">
            {copy.title}
          </h1>
          <p className="text-[#7F8C8D] text-base sm:text-lg">
            {copy.subtitle}
          </p>
        </div>

        <div className="bg-[#242424] border border-[#7F8C8D]/30 p-6 sm:p-8 rounded-2xl shadow-xl space-y-6">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300">
                  {copy.name}
                </label>
                <input
                  type="text"
                  className="w-full bg-[#1C1C1C] border border-[#7F8C8D]/40 focus:border-[#F1C40F] focus:outline-none text-white rounded-lg p-3 text-sm transition"
                  placeholder={copy.namePlaceholder}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300">
                  {copy.email}
                </label>
                <input
                  type="email"
                  className="w-full bg-[#1C1C1C] border border-[#7F8C8D]/40 focus:border-[#F1C40F] focus:outline-none text-white rounded-lg p-3 text-sm transition"
                  placeholder={copy.emailPlaceholder}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-300">
                {copy.message}
              </label>
              <textarea
                rows={5}
                className="w-full bg-[#1C1C1C] border border-[#7F8C8D]/40 focus:border-[#F1C40F] focus:outline-none text-white rounded-lg p-3 text-sm transition resize-none"
                placeholder={copy.messagePlaceholder}
              />
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="submit"
                className="bg-[#2E86C1] hover:bg-[#21618C] text-white font-bold py-3 px-6 rounded-lg transition shadow-md text-sm text-center"
              >
                {copy.submit}
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

        <div>
          <Link
            href="/"
            className="inline-flex items-center text-[#2E86C1] text-sm hover:text-[#F1C40F] font-medium transition"
          >
            ← {copy.backHome}
          </Link>
        </div>
      </div>
    </div>
  );
}