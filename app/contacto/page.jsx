"use client";

import React, { useState } from 'react';
import { useLanguage } from '../components/LanguageProvider';

export default function ContactoPage() {
  const { lang } = useLanguage();

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    detalles: '',
    archivos: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFormData((prev) => ({
        ...prev,
        archivos: Array.from(e.target.files)
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    alert(
      lang === 'es'
        ? "¡Gracias por tu solicitud! Nos pondremos en contacto contigo pronto."
        : "Thank you for your request! We will get back to you shortly."
    );
  };

  return (
    <main className="min-h-screen bg-[#1C1C1C] text-white py-12 px-4 sm:px-6 font-sans flex justify-center items-center">
      <div className="w-full max-w-xl bg-[#111111] border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        
        {/* Encabezado */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-black tracking-wide text-white font-[family-name:var(--font-montserrat)] uppercase">
            {lang === 'es' ? 'Obtén una ' : 'Get a '}
            <span className="text-[#F1C40F]">
              {lang === 'es' ? 'Cotización' : 'Quote'}
            </span>
          </h1>
          <p className="text-zinc-400 text-xs sm:text-sm">
            {lang === 'es'
              ? 'Completa el formulario para recibir una propuesta personalizada.'
              : 'Complete the form to receive a personalized proposal.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Nombre Completo */}
          <div className="space-y-1">
            <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider">
              {lang === 'es' ? 'Nombre Completo' : 'Full Name'} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="nombre"
              required
              value={formData.nombre}
              onChange={handleInputChange}
              placeholder={lang === 'es' ? "Ej. Juan Pérez" : "Ex. John Doe"}
              className="w-full bg-[#1C1C1C] border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F1C40F] transition"
            />
          </div>

          {/* Correo Electrónico */}
          <div className="space-y-1">
            <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider">
              {lang === 'es' ? 'Correo Electrónico' : 'Email Address'} <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder={lang === 'es' ? "ejemplo@correo.com" : "example@mail.com"}
              className="w-full bg-[#1C1C1C] border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F1C40F] transition"
            />
          </div>

          {/* Teléfono */}
          <div className="space-y-1">
            <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider">
              {lang === 'es' ? 'Teléfono' : 'Phone Number'} <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center bg-[#1C1C1C] border border-zinc-700 rounded-xl px-3 py-1 focus-within:border-[#F1C40F] transition">
              <span className="text-sm mr-2">🇺🇸 +1</span>
              <input
                type="tel"
                name="telefono"
                required
                value={formData.telefono}
                onChange={handleInputChange}
                placeholder="201-555-0123"
                className="w-full bg-transparent py-2 text-sm text-white focus:outline-none"
              />
            </div>
          </div>

          {/* Servicio de Interés */}
          <div className="space-y-1">
            <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider">
              {lang === 'es' ? 'Servicio de Interés' : 'Service of Interest'} <span className="text-red-500">*</span>
            </label>
            <select
              name="servicio"
              required
              value={formData.servicio}
              onChange={handleInputChange}
              className="w-full bg-[#1C1C1C] border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F1C40F] transition cursor-pointer"
            >
              <option value="" disabled>
                {lang === 'es' ? 'Seleccionar un servicio' : 'Select a service'}
              </option>
              <option value="rotulacion-flotas">
                {lang === 'es' ? '1. Rotulación de Flotas' : '1. Fleet Wrapping'}
              </option>
              <option value="envoltura-comercial-completa">
                {lang === 'es' ? '2. Envoltura Comercial Completa' : '2. Full Commercial Wrap'}
              </option>
              <option value="envoltura-comercial-parcial">
                {lang === 'es' ? '3. Envoltura Comercial Parcial' : '3. Partial Commercial Wrap'}
              </option>
              <option value="polarizado-ventanas">
                {lang === 'es' ? '4. Polarizado de Ventanas' : '4. Window Tinting'}
              </option>
              <option value="cambio-color">
                {lang === 'es' ? '5. Cambio de Color' : '5. Color Change Wrap'}
              </option>
              <option value="tintado-faros-detalles">
                {lang === 'es' ? '6. Tintado de Faros y Detalles' : '6. Light Tinting & Details'}
              </option>
            </select>
          </div>

          {/* Detalles del proyecto */}
          <div className="space-y-1">
            <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider">
              {lang === 'es' ? 'Detalles del Proyecto' : 'Project Details'} <span className="text-red-500">*</span>
            </label>
            <textarea
              name="detalles"
              rows={4}
              required
              value={formData.detalles}
              onChange={handleInputChange}
              placeholder={
                lang === 'es'
                  ? "Cuéntanos sobre tu vehículo y el trabajo que necesitas..."
                  : "Tell us about your vehicle and the work you need..."
              }
              className="w-full bg-[#1C1C1C] border border-zinc-700 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[#F1C40F] transition resize-none"
            />
          </div>

          {/* Fotos del Vehículo */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider">
              {lang === 'es' ? 'Fotos de tu Vehículo' : 'Vehicle Photos'}
            </label>
            <p className="text-xs text-zinc-400">
              {lang === 'es' 
                ? 'Puedes seleccionar varias fotos de tu vehículo.' 
                : 'You can select multiple photos of your vehicle.'}
            </p>
            
            <div className="relative border-2 border-dashed border-zinc-700 hover:border-[#F1C40F] rounded-2xl p-6 text-center bg-[#1C1C1C]/50 transition cursor-pointer group">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex flex-col items-center space-y-2">
                <svg className="w-8 h-8 text-zinc-400 group-hover:text-[#F1C40F] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-xs text-zinc-300">
                  {lang === 'es' ? (
                    <>Arrastrar y soltar (o) <span className="text-[#2E86C1] underline font-semibold">cambiar archivos</span></>
                  ) : (
                    <>Drag and drop (or) <span className="text-[#2E86C1] underline font-semibold">browse files</span></>
                  )}
                </p>
                {formData.archivos.length > 0 && (
                  <p className="text-xs text-[#F1C40F] font-bold pt-1">
                    {formData.archivos.length} {lang === 'es' ? 'archivo(s) seleccionado(s)' : 'file(s) selected'}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Botón de Enviar */}
          <button
            type="submit"
            className="w-full bg-[#F1C40F] hover:bg-[#d4ac0d] text-[#111111] font-black text-sm uppercase tracking-wider py-3.5 rounded-xl transition shadow-lg mt-4"
          >
            {lang === 'es' ? 'Enviar' : 'Submit'}
          </button>
        </form>
      </div>
    </main>
  );
}