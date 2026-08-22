import Navbar from './components/navbar';
import Footer from './components/foorters';
import WhatsAppButton from './components/WhatsAppButton';
import LanguageProvider from './components/LanguageProvider';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
});

export default function RootLayout({ children }) {
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

          <Footer />

          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}