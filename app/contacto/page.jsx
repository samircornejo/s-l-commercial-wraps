"use client";

import Link from 'next/link';

export default function Contacto() {
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