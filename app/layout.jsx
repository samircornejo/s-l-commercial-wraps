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
  metadataBase: new URL('https://slcommercialwraps.vercel.app'),
  title: {
    default: 'Commercial Wraps, Window Tinting & Vehicle Graphics in New Jersey | S&L Commercial Wraps',
    template: '%s | S&L Commercial Wraps',
  },
  category: 'business',
  classification: 'Business Services',
  description:
    'S&L Commercial Wraps specializes in commercial vehicle wraps, fleet graphics, storefront signs, and window tinting in New Jersey. Services in English and Spanish for local businesses.',
  keywords: [
    'commercial wraps New Jersey',
    'vehicle wraps New Jersey',
    'fleet graphics New Jersey',
    'window tinting New Jersey',
    'car wrap New Jersey',
    'vinyl graphics New Jersey',
    'rotulación comercial New Jersey',
    'wrap automotriz New Jersey',
    'polarizado de ventanas New Jersey',
    'gráficos para negocios New Jersey',
    'S&L Commercial Wraps',
    'car wraps New Jersey',
    'commercial vehicle branding New Jersey',
    'storefront signs New Jersey',
  ],
  alternates: {
    canonical: '/',
    languages: {
      'en-US': 'https://slcommercialwraps.vercel.app',
      'es-US': 'https://slcommercialwraps.vercel.app',
    },
  },
  applicationName: 'S&L Commercial Wraps',
  authors: [{ name: 'S&L Commercial Wraps' }],
  creator: 'S&L Commercial Wraps',
  publisher: 'S&L Commercial Wraps',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'SaQwE3csDP3rOlciZXXXIIqnGhfXggYfY35f7AfGUe8',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://slcommercialwraps.vercel.app',
    title: 'S&L Commercial Wraps | New Jersey Vehicle Wraps and Window Tinting',
    description:
      'Commercial wraps, vinyl graphics, fleet branding, and window tinting services in New Jersey. Bilingual service for businesses and vehicle owners.',
    siteName: 'S&L Commercial Wraps',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'S&L Commercial Wraps logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'S&L Commercial Wraps | New Jersey Wraps & Tinting',
    description:
      'Commercial vehicle wraps, window tinting, fleet graphics, and storefront branding in New Jersey.',
    images: ['/logo.jpg'],
  },
  icons: {
    icon: '/logo.jpg',
    shortcut: '/logo.jpg',
    apple: '/logo.jpg',
  },
};

export default function RootLayout({ children }) {
  // Enlace directo a la interfaz web de Gmail con el destinatario precargado
  const gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=slcommercialwraps@gmail.com&su=Consulta%20desde%20la%20web";

  return (
    <html lang="es" className={montserrat.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1C1C1C" />
        <meta name="format-detection" content="telephone=yes" />
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
                href="https://www.instagram.com/slcommercialwraps?stkn=ZzdwMGhpeTVlNXlp" 
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
                href="https://www.facebook.com/share/19XpFCoNv2/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-[#2E86C1] transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
                <span>Facebook</span>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@sl.commercial.wraps"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.41V2h-3.97v13.67a2.896 2.896 0 0 1-2.9 2.9 2.9 2.9 0 1 1 2.9-2.9c0-.25-.03-.5-.09-.74V10.9a6.87 6.87 0 1 0 4.06 6.27V10.2a8.73 8.73 0 0 0 5.1 1.64V7.88a4.83 4.83 0 0 1-1.33-.194z" />
                </svg>
                <span>TikTok</span>
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