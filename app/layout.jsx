import Navbar from './components/navbar';
import Footer from './components/foorters';
import LanguageProvider from './components/LanguageProvider';
import { Montserrat, Inter } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['700', '800', '900'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className="bg-[#1C1C1C] text-slate-100 antialiased min-h-screen flex flex-col font-sans">
        <LanguageProvider>
          <Navbar />

          <main className="flex-grow bg-[#1C1C1C]">
            {children}
          </main>

          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}