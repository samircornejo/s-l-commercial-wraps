import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1C1C1C] border-t border-[#7F8C8D]/20 text-slate-300 py-8 px-4 font-sans">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center space-y-6">
        
        {/* Título de la marca */}
        <h3 className="text-white font-extrabold text-lg tracking-wider font-[family-name:var(--font-montserrat)]">
          S&L COMMERCIAL WRAPS
        </h3>

        {/* Redes Sociales y Contacto con Iconos SVG */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          
          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#E1306C] transition-colors group text-sm font-medium"
          >
            <svg
              className="w-5 h-5 fill-current text-slate-400 group-hover:text-[#E1306C] transition-colors"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span>Instagram</span>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#1877F2] transition-colors group text-sm font-medium"
          >
            <svg
              className="w-5 h-5 fill-current text-slate-400 group-hover:text-[#1877F2] transition-colors"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span>Facebook</span>
          </a>

          {/* Correo Electrónico */}
          <a
            href="mailto:slcommercialwraps@gmail.com"
            className="flex items-center gap-2 hover:text-[#F1C40F] transition-colors group text-sm font-medium"
          >
            <svg
              className="w-5 h-5 fill-current text-slate-400 group-hover:text-[#F1C40F] transition-colors"
              viewBox="0 0 24 24"
            >
              <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 6.013-9.518-6.013h19.036zm-19.518 14v-11.765l10 6.321 10-6.321v11.765h-20z" />
            </svg>
            <span>slcommercialwraps@gmail.com</span>
          </a>

        </div>

        {/* Derechos Reservados */}
        <p className="text-xs text-[#7F8C8D]">
          © 2026 S&L Commercial Wraps
        </p>

      </div>
    </footer>
  );
}