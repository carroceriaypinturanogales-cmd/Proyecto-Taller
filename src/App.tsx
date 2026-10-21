import { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { Language } from './types';
import Header from './components/Header';
import MainPortalHero from './components/MainPortalHero';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import RealGallery from './components/RealGallery';
import SocialShowcase from './components/SocialShowcase';
import QuoteEstimator from './components/QuoteEstimator';
import LocationContact from './components/LocationContact';
import Footer from './components/Footer';
import { BUSINESS_INFO } from './data/content';
import wallpaperTitanium from './assets/images/wallpaper-titanium.jpg';

export default function App() {
  const [lang, setLang] = useState<Language>('es');
  const [quotaExceeded, setQuotaExceeded] = useState(false);

  useEffect(() => {
    const handleQuota = () => setQuotaExceeded(true);
    window.addEventListener('gmp-quota-exceeded', handleQuota);
    return () => window.removeEventListener('gmp-quota-exceeded', handleQuota);
  }, []);

  const toggleLang = () => {
    setLang((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#12141c] text-neutral-100 flex flex-col selection:bg-amber-500 selection:text-neutral-950 scroll-smooth font-['Plus_Jakarta_Sans',sans-serif] relative">
      {/* Fixed Ambient Dark Titanium Wallpaper Background (matching user reference) */}
      <div className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <img
          src={wallpaperTitanium}
          alt=""
          className="w-full h-full object-cover object-center opacity-20 filter brightness-90"
        />
        <div className="absolute inset-0 bg-[#0e1017]/80 backdrop-blur-[1px]" />
      </div>

      {quotaExceeded && (
        <div className="bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-2.5 text-xs md:text-sm text-center sticky top-0 z-50 shadow-sm">
          <span>
            Google Maps Platform quota reached. If you are the app owner, visit{' '}
            <a
              href="https://developers.google.com/maps/ai/ai-studio?utm_campaign=gmp_mcp_codeassist_v1_aistudio#quota_exceeded_errors"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold text-amber-950 hover:text-amber-800"
            >
              maps developer site
            </a>{' '}
            for instructions to update your account.
          </span>
        </div>
      )}

      {/* 1. Header with Brand Identity and Quick Actions */}
      <div className="relative z-10">
        <Header />
      </div>

      <main className="flex-1 relative z-10">
        {/* 2. Main Portal / Portada Principal with real workshop background image & smooth scroll tools */}
        <MainPortalHero lang={lang} onToggleLang={toggleLang} />

        {/* 3. Facilities and Craftsmanship Showcase */}
        <Hero lang={lang} />

        {/* 4. Core Services (Destination for "Nuestros Servicios") */}
        <ServicesGrid lang={lang} />

        {/* 5. Real Photos Gallery (Destination for "Galería de Trabajos") */}
        <RealGallery lang={lang} />

        {/* 5.1 Official Facebook Post & Social Proof */}
        <SocialShowcase lang={lang} />

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
