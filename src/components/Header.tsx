import { BUSINESS_INFO } from '../data/content';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#12141c]/95 backdrop-blur-md border-b border-white/5 transition-all shadow-sm">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 h-16 sm:h-18 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Left: Brand Identity with 🛡️ Amber Shield */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 group shrink-0"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center font-bold text-amber-500 text-base sm:text-lg group-hover:scale-105 transition-transform">
            🛡️
          </div>
          <div>
            <div className="text-sm sm:text-base font-bold tracking-tight text-white group-hover:text-amber-500 transition-colors whitespace-nowrap leading-tight">
              Carrocería & Pintura
            </div>
            <div className="text-[10px] text-neutral-400 font-medium tracking-wider uppercase">
              Nogales • Detallado Genesis
            </div>
          </div>
        </a>

        {/* Center / Right: Live Status (clean subtle background, no pulsating lights) */}
        <div className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium text-[11px] whitespace-nowrap">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>Abierto hoy: 8:00 AM - 6:00 PM</span>
        </div>

        {/* Right: Quick Action Social & WhatsApp Buttons */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          
          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
              'Hola Taller de Carrocería y Pintura Nogales, quiero solicitar una cotización.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp Cotizaciones"
            className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-bold text-black bg-emerald-500 hover:bg-emerald-400 transition-all shadow-sm group hover:scale-105 cursor-pointer"
          >
            <i className="fa-brands fa-whatsapp text-sm text-black"></i>
            <span className="hidden sm:inline font-bold">WhatsApp</span>
          </a>

          {/* Facebook Button */}
          <a
            href={BUSINESS_INFO.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook Oficial"
            className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-bold text-white bg-blue-600/90 hover:bg-blue-600 transition-all shadow-sm group hover:scale-105"
          >
            <i className="fa-brands fa-facebook-f text-xs"></i>
            <span className="hidden sm:inline font-bold">Facebook</span>
          </a>

          {/* Instagram Button */}
          <a
            href={BUSINESS_INFO.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram Oficial"
            className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-tr from-amber-600 via-rose-600 to-purple-600 hover:opacity-95 transition-all shadow-sm group hover:scale-105"
          >
            <i className="fa-brands fa-instagram text-xs"></i>
            <span className="hidden sm:inline font-bold">Instagram</span>
          </a>

          {/* Twitter / X Button */}
          <a
            href={BUSINESS_INFO.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter / X"
            className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-bold text-neutral-300 bg-[#1a1d26] hover:bg-neutral-800 border border-white/10 transition-all shadow-sm group hover:scale-105"
          >
            <i className="fa-brands fa-x-twitter text-xs"></i>
            <span className="hidden sm:inline font-bold">Twitter</span>
          </a>

          {/* Google Maps Perfil de Negocio Button */}
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Google Maps Perfil de Negocio"
            className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-bold text-neutral-200 bg-[#1a1d26] hover:bg-neutral-800 border border-white/10 hover:border-amber-500/30 transition-all shadow-sm group hover:scale-105"
          >
            <i className="fa-solid fa-location-dot text-rose-500 text-xs"></i>
            <span className="hidden sm:inline font-bold">Maps</span>
          </a>

        </div>

      </div>
    </header>
  );
}
