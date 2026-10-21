// Source: Google Maps Platform Code Assist
import { useState } from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from '@vis.gl/react-google-maps';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  ExternalLink,
  Navigation,
  AlertCircle,
} from 'lucide-react';
import { Language } from '../types';
import { BUSINESS_INFO } from '../data/content';

interface LocationContactProps {
  lang: Language;
}

const GOOGLE_MAPS_API_KEY =
  (import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined) ||
  'AIzaSyC3a0dCY7h91FIUJwUtKQDqAJBzYzoXOeo';

const WORKSHOP_LOCATION = {
  lat: 31.2988874,
  lng: -110.9549794,
};

export default function LocationContact({ lang }: LocationContactProps) {
  const [infoOpen, setInfoOpen] = useState(true);
  const [mapError, setMapError] = useState(false);

  return (
    <section id="ubicacion" className="py-16 sm:py-24 bg-[#12141c] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5 text-rose-500" />
            <span>{lang === 'es' ? 'Ubicación Oficial & Horarios' : 'Official Location & Hours'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-2.5">
            {lang === 'es' ? 'Visítanos en Los Encinos, Nogales' : 'Visit Our Workshop in Nogales'}
          </h2>
          <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
            {lang === 'es'
              ? 'Taller de Carrocería y Pintura en José Zazueta #16. Consulta nuestra ubicación interactiva en Google Maps o abre el GPS directo.'
              : 'Auto body and paint shop located at José Zazueta #16, Los Encinos. Check our interactive Google Maps locator or tap for GPS navigation.'}
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Map Column (7 cols) - Solid Slate #1a1d26, rounded-2xl, soft shadow */}
          <div className="lg:col-span-7 bg-[#1a1d26] border border-white/5 rounded-2xl p-3 sm:p-4 shadow-md">
            <div className="w-full h-[460px] sm:h-[520px] rounded-xl overflow-hidden bg-[#12141c] border border-white/5 relative">
              
              {!mapError ? (
                <APIProvider
                  apiKey={GOOGLE_MAPS_API_KEY}
                  onError={() => setMapError(true)}
                >
                  <Map
                    style={{ width: '100%', height: '100%' }}
                    defaultCenter={WORKSHOP_LOCATION}
                    defaultZoom={16}
                    mapId="DEMO_MAP_ID"
                    gestureHandling="greedy"
                    disableDefaultUI={false}
                    fullscreenControl={true}
                    mapTypeControl={false}
                    streetViewControl={true}
                    internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
                  >
                    <AdvancedMarker
                      position={WORKSHOP_LOCATION}
                      title="Taller de Carrocería y Pintura Nogales"
                      onClick={() => setInfoOpen(true)}
                    >
                      <Pin
                        background="#f59e0b"
                        borderColor="#78350f"
                        glyphColor="#18181b"
                      />
                    </AdvancedMarker>

                    {infoOpen && (
                      <InfoWindow
                        position={WORKSHOP_LOCATION}
                        onCloseClick={() => setInfoOpen(false)}
                      >
                        <div className="p-1 text-neutral-900 max-w-[220px]">
                          <div className="font-bold text-sm text-neutral-950 mb-1">
                            Carrocería y Pintura Nogales
                          </div>
                          <div className="text-xs text-neutral-600 mb-2">
                            José Zazueta #16, Col. Los Encinos
                          </div>
                          <a
                            href={BUSINESS_INFO.googleMapsCoordinatesUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold rounded-lg text-xs transition-colors"
                          >
                            <Navigation className="w-3 h-3" />
                            <span>{lang === 'es' ? 'Cómo llegar' : 'Directions'}</span>
                          </a>
                        </div>
                      </InfoWindow>
                    )}
                  </Map>
                </APIProvider>
              ) : (
                /* Fallback if map fails or network is blocked */
                <div className="absolute inset-0 z-20 bg-[#12141c] flex flex-col items-center justify-center p-6 text-center">
                  <AlertCircle className="w-10 h-10 text-amber-500 mb-3" />
                  <p className="text-white font-medium text-sm mb-2">
                    {lang === 'es' ? 'Ver ubicación en Google Maps' : 'View location on Google Maps'}
                  </p>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold rounded-full text-xs"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>{lang === 'es' ? 'Abrir en Google Maps' : 'Open in Google Maps'}</span>
                  </a>
                </div>
              )}
            </div>
            
            {/* Quick Action Navigation Bar */}
            <div className="p-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-neutral-300">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                <span>{BUSINESS_INFO.address}, {BUSINESS_INFO.city}</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={BUSINESS_INFO.googleMapsCoordinatesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-amber-500 text-neutral-950 font-bold hover:bg-amber-400 transition-all inline-flex items-center gap-1.5 shrink-0 shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{lang === 'es' ? 'Cómo llegar (GPS)' : 'Get Directions'}</span>
                </a>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white font-medium inline-flex items-center gap-1 shrink-0 transition-colors"
                >
                  <span>{lang === 'es' ? 'Ver Perfil' : 'View Profile'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Details Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone & WhatsApp Card */}
            <div className="bg-[#1a1d26] border border-white/5 rounded-2xl p-6 sm:p-7 space-y-4 shadow-sm">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                {lang === 'es' ? 'Teléfono y WhatsApp Directo' : 'Direct Phone & WhatsApp'}
              </div>

              {/* Clean non-monospace font */}
              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {BUSINESS_INFO.phoneDisplay}
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href={`tel:${BUSINESS_INFO.phoneCall}`}
                  className="py-3 px-4 rounded-xl bg-[#12141c] hover:bg-[#202430] text-white text-xs font-bold text-center transition-all flex items-center justify-center gap-2 border border-white/5"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-500" />
                  <span>{lang === 'es' ? 'Llamar' : 'Call'}</span>
                </a>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                    lang === 'es'
                      ? 'Hola Taller de Carrocería y Pintura Nogales, quiero solicitar información.'
                      : 'Hello, I want to ask about repair services.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-black text-xs font-bold text-center transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-black" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-[#1a1d26] border border-white/5 rounded-2xl p-6 sm:p-7 space-y-2 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-neutral-300 uppercase tracking-wider">
                <Clock className="w-4 h-4 text-amber-500" />
                <span>{lang === 'es' ? 'Horario de Atención' : 'Operating Hours'}</span>
              </div>
              <div className="text-sm font-bold text-white">
                {BUSINESS_INFO.hoursWeekday}
              </div>
              <div className="text-xs text-neutral-400">
                {BUSINESS_INFO.hoursDetailing}
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-[#1a1d26] border border-white/5 rounded-2xl p-6 sm:p-7 space-y-3.5 shadow-sm">
              <div className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                {lang === 'es' ? 'Redes y Perfiles Oficiales' : 'Official Channels'}
              </div>

              <div className="space-y-2 pt-1 text-xs">
                <a
                  href={BUSINESS_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#12141c] hover:bg-[#202430] text-neutral-300 hover:text-white transition-all border border-white/5 group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">f</span>
                    <span>Facebook: Auto Detallado Genesis</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-blue-400" />
                </a>

                <a
                  href={BUSINESS_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#12141c] hover:bg-[#202430] text-neutral-300 hover:text-white transition-all border border-white/5 group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-gradient-to-tr from-amber-600 via-rose-600 to-purple-600 text-white flex items-center justify-center font-bold text-[10px]">IG</span>
                    <span>Instagram: @carroceria_pintura_genecis</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-rose-400" />
                </a>

                <a
                  href={BUSINESS_INFO.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#12141c] hover:bg-[#202430] text-neutral-300 hover:text-white transition-all border border-white/5 group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-neutral-800 border border-neutral-700 text-white flex items-center justify-center font-bold text-xs">𝕏</span>
                    <span>Twitter / X: @Carroceria_Nog</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
