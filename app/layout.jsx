import Navbar from './components/navbar';
import WhatsAppButton from './components/WhatsAppButton';
import LanguageProvider from './components/LanguageProvider';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'S&L Commercial Wraps',
  description: 'Vehicle customization, commercial wraps, and window tinting services in New Jersey.',
};

export default function RootLayout({ children }) {
  // Enlace directo a la interfaz web de Gmail con el destinatario precargado
  const gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=slcommercialwraps@gmail.com&su=Consulta%20desde%20la%20web";

  return (
    <html lang="es" className={montserrat.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className="bg-[#1C1C1C] text-slate-100 antialiased min-h-screen flex flex-col font-[family-name:var(--font-montserrat)] relative">
        <LanguageProvider>
          <Navbar />

          <main className="flex-grow bg-[#1C1C1C]">
            {children}
          </main>

          {/* FOOTER GLOBAL CON REDES Y CORREO */}
          <footer className="w-full bg-[#1C1C1C] text-white py-8 border-t border-[#7F8C8D]/30 flex flex-col items-center justify-center space-y-4">
            <p className="font-bold text-lg tracking-wide uppercase font-[family-name:var(--font-montserrat)]">
              S&L Commercial Wraps
            </p>

            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400 px-4">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/slcommercialwraps/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-[#F1C40F] transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>

              {/* Facebook */}
              <a 
                href="https://www.facebook.com/slcommercialwraps/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-[#2E86C1] transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
                <span>Facebook</span>
              </a>

              {/* Correo - Abre Gmail directamente en la Web */}
              <a 
                href={gmailLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-[#F1C40F] transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                </svg>
                <span>slcommercialwraps@gmail.com</span>
              </a>
            </div>

            <p className="text-xs text-gray-500 pt-2">
              © 2026 S&L Commercial Wraps
            </p>
          </footer>

          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}