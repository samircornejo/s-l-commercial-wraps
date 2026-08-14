"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '../components/LanguageProvider';

export default function ContactoPage() {
  const { lang } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Open mail client with prefilled subject/body
    const subject = encodeURIComponent(lang === 'es' ? 'Contacto desde sitio - Solicitud' : 'Website contact - Inquiry');
    const body = encodeURIComponent(`${form.name}\n\n${form.message}\n\nEmail: ${form.email}`);
    window.location.href = `mailto:slcommercialwraps@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 py-8 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">{lang === 'es' ? 'Contacto' : 'Contact'}</h1>
      <p className="text-slate-400">{lang === 'es' ? '¿Tienes dudas o deseas cotizar? Completa el formulario y te contactamos.' : 'Have questions or want a quote? Fill the form and we will reach out.'}</p>

      <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-slate-400">{lang === 'es' ? 'Nombre' : 'Name'}</label>
            <input name="name" value={form.name} onChange={handleChange} className="w-full mt-2 p-2 rounded bg-slate-800 border border-slate-700" />
          </div>

          <div>
            <label className="text-sm text-slate-400">Email</label>
            <input name="email" value={form.email} onChange={handleChange} className="w-full mt-2 p-2 rounded bg-slate-800 border border-slate-700" />
          </div>
        </div>

        <div>
          <label className="text-sm text-slate-400">{lang === 'es' ? 'Mensaje' : 'Message'}</label>
          <textarea name="message" value={form.message} onChange={handleChange} rows={6} className="w-full mt-2 p-2 rounded bg-slate-800 border border-slate-700" />
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
          <button type="submit" className="bg-blue-600 px-4 py-2 rounded font-semibold w-full sm:w-auto">{lang === 'es' ? 'Enviar por correo' : 'Send via email'}</button>
          <a href="tel:9733326605" className="text-amber-400">📞 973-332-6605</a>
        </div>
      </form>

      <Link href="/" className="text-blue-400 text-sm hover:underline inline-block">{lang === 'es' ? '← Volver al Inicio' : '← Back to Home'}</Link>
    </main>
  );
}