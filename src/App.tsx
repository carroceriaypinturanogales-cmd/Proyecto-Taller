import { useState } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { Language } from './types';
import Header from './components/Header';
import MainPortalHero from './components/MainPortalHero';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import RealGallery from './components/RealGallery';
import QuoteEstimator from './components/QuoteEstimator';
import LocationContact from './components/LocationContact';
import Footer from './components/Footer';
import { BUSINESS_INFO } from './data/content';

export default function App() {
  const [lang, setLang] = useState<Language>('es');

  const toggleLang = () => {
    setLang((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#12141c] text-neutral-100 flex flex-col selection:bg-amber-500 selection:text-neutral-950 scroll-smooth font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. Header with Brand Identity and Quick Actions */}
      <Header />

      <main className="flex-1">
        {/* 2. Main Portal / Portada Principal with real workshop background image & smooth scroll tools */}
        <MainPortalHero lang={lang} onToggleLang={toggleLang} />

        {/* 3. Facilities and Craftsmanship Showcase */}
        <Hero lang={lang} />

        {/* 4. Core Services (Destination for "Nuestros Servicios") */}
        <ServicesGrid lang={lang} />

        {/* 5. Real Photos Gallery (Destination for "Galería de Trabajos") */}
        <RealGallery lang={lang} />

        {/* 6. Quick Online Quote Calculator (Destination for "Calculador de Cotización") */}
        <QuoteEstimator lang={lang} />

        {/* 7. Location, Embedded Google Maps & Contact (Destination for "Ubicación & Horarios") */}
        <LocationContact lang={lang} />
      </main>

      {/* 8. Quiet Modern Footer */}
      <Footer lang={lang} />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5">
        <button
          onClick={scrollToTop}
          aria-label="Volver arriba"
          className="w-11 h-11 rounded-full bg-[#1a1d26] border border-white/10 text-neutral-300 hover:text-white hover:bg-[#202430] flex items-center justify-center shadow-md transition-all hover:scale-105 cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
            lang === 'es'
              ? 'Hola Carrocería y Pintura Nogales, me gustaría cotizar una reparación.'
              : 'Hello Carroceria y Pintura Nogales, I would like to get an estimate.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105 cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 fill-neutral-950" />
          <span>(631) 132-2616</span>
        </a>
      </div>
    </div>
  );
}
