"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext();

export function useLanguage() {
  return useContext(LanguageContext);
}

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es');

  useEffect(() => {
    try {
      const stored = localStorage.getItem('lang');
      if (stored) setLang(stored);
    } catch (e) {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('lang', lang);
      document.documentElement.lang = lang;
    } catch (e) {}
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
