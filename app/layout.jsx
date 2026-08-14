import Navbar from './components/navbar';
import Footer from './components/foorters';
import LanguageProvider from './components/LanguageProvider';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className="bg-slate-950 text-slate-100 antialiased min-h-screen flex flex-col">
        <LanguageProvider>
          <Navbar />

          <main className="flex-grow">
            {children}
          </main>

          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}