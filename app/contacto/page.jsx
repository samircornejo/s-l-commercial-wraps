"use client";

import React, { useState } from 'react';
import { useLanguage } from '../components/LanguageProvider';

export default function ContactoPage() {
  const { lang } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const dataToSend = new FormData();

    // Configuración obligatoria de Web3Forms
    dataToSend.append("access_key", "ea3adf6a-7f85-4a77-803b-81267023894a");
    dataToSend.append("subject", `Nueva Cotización Web de: ${formData.name}`);
    dataToSend.append("botcheck", ""); // Campo oculto anti-spam

    // Campos estructurados estándar para que Web3Forms los ordene bien en el panel
    dataToSend.append("name", formData.name);
    dataToSend.append("email", formData.email);
    dataToSend.append("phone", `+1 ${formData.phone}`);
    dataToSend.append("service", formData.service);
    dataToSend.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: dataToSend
      });

      const result = await response.json();

      if (result.success) {
        alert(
          lang === 'es'
            ? "¡Gracias por tu solicitud! Nos pondremos en contacto contigo pronto."
            : "Thank you for your request! We will get back to you shortly."
        );
        
        // Limpiar formulario
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        alert(result.message || (lang === 'es' ? "Hubo un error al enviar el mensaje." : "There was an error sending the message."));
      }
    } catch (error) {
      alert(lang === 'es' ? "Error de conexión. Inténtalo de nuevo." : "Connection error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#1C1C1C] text-white py-12 px-4 sm:px-6 font-sans flex justify-center items-center">
      <div className="w-full max-w-xl bg-[#111111] border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        
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
              name="name"
              required
              value={formData.name}
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
                name="phone"
                required
                value={formData.phone}
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
              name="service"
              required
              value={formData.service}
              onChange={handleInputChange}
              className="w-full bg-[#1C1C1C] border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F1C40F] transition cursor-pointer"
            >
              <option value="" disabled>
                {lang === 'es' ? 'Seleccionar un servicio' : 'Select a service'}
              </option>
              <option value="Rotulación de Flotas">
                {lang === 'es' ? '1. Rotulación de Flotas' : '1. Fleet Wrapping'}
              </option>
              <option value="Envoltura Comercial Completa">
                {lang === 'es' ? '2. Envoltura Comercial Completa' : '2. Full Commercial Wrap'}
              </option>
              <option value="Envoltura Comercial Parcial">
                {lang === 'es' ? '3. Envoltura Comercial Parcial' : '3. Partial Commercial Wrap'}
              </option>
              <option value="Polarizado de Ventanas">
                {lang === 'es' ? '4. Polarizado de Ventanas' : '4. Window Tinting'}
              </option>
              <option value="Cambio de Color">
                {lang === 'es' ? '5. Cambio de Color' : '5. Color Change Wrap'}
              </option>
              <option value="Tintado de Faros y Detalles">
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
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleInputChange}
              placeholder={
                lang === 'es'
                  ? "Cuéntanos sobre tu vehículo y el trabajo que necesitas..."
                  : "Tell us about your vehicle and the work you need..."
              }
              className="w-full bg-[#1C1C1C] border border-zinc-700 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[#F1C40F] transition resize-none"
            />
          </div>

          {/* Botón de Enviar */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#F1C40F] hover:bg-[#d4ac0d] text-[#111111] font-black text-sm uppercase tracking-wider py-3.5 rounded-xl transition shadow-lg mt-4 cursor-pointer disabled:opacity-50"
          >
            {isSubmitting 
              ? (lang === 'es' ? 'Enviando...' : 'Sending...') 
              : (lang === 'es' ? 'Enviar' : 'Submit')}
  w          </button>
        </form>
      </div>
    </main>
  );
}