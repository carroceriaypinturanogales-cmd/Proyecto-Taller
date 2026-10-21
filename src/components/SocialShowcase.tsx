import { useState } from 'react';
import {
  MessageCircle,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Share2,
  Play,
  Image as ImageIcon,
} from 'lucide-react';
import { Language } from '../types';
import { BUSINESS_INFO } from '../data/content';

interface SocialShowcaseProps {
  lang: Language;
}

const FB_REEL_URL = 'https://www.facebook.com/reel/1083577567886919/';
const FB_REEL_IFRAME_SRC =
  'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1083577567886919%2F&show_text=true&width=267&t=0';

const FB_POST_URL =
  'https://www.facebook.com/AutoDetalladoGenesis/posts/pfbid0faUof5oWSX15UuwhQvLkod2td7CvTjhsekY4ss3geFg4YrZEjiQFxshchbS8KBBYl';
const FB_POST_IFRAME_SRC =
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FAutoDetalladoGenesis%2Fposts%2Fpfbid0faUof5oWSX15UuwhQvLkod2td7CvTjhsekY4ss3geFg4YrZEjiQFxshchbS8KBBYl&show_text=true&width=500';

type MediaType = 'reel' | 'post';

export default function SocialShowcase({ lang }: SocialShowcaseProps) {
  const [activeMedia, setActiveMedia] = useState<MediaType>('reel');

  const content = {
    es: {
      badge: 'Redes Sociales Oficiales',
      title: 'Directo de Nuestro Taller en Facebook',
      subtitle:
        'Evidencia real en video y fotografía de los trabajos entregados por Auto Detallado Genesis y Carrocería y Pintura Nogales.',
      tabReel: 'Video Reel del Proceso',
      tabPost: 'Publicación de Trabajo',
      reelTitle: 'Reel en Video: Proceso de Detallado en Acción',
      reelDesc:
        'Aprecia en video cómo nuestro equipo técnico trabaja la corrección de pintura, pulido y detallado cerámico para lograr acabados espejo de alta gama.',
      postTitle: 'Publicación Oficial: Resultados y Acabados',
      postDesc:
        'Inspecciona las fotos detalladas, acabados al horno e igualación precisa de color automotriz entregados a clientes en Nogales.',
      pointsReel: [
        'Grabado directamente en nuestras instalaciones en Los Encinos',
        'Técnicas avanzadas de corrección de laca y abrillantado',
        'Resultados reales sin filtros ni alteraciones',
      ],
      pointsPost: [
        'Hojalatería milimétrica y pintura automotriz al horno',
        'Satisfacción garantizada por escrito en cada vehículo',
        'Transparencia total para clientes de Nogales y Sonora',
      ],
      openFbBtn:
        activeMedia === 'reel' ? 'Ver Reel en Facebook' : 'Ver Publicación en Facebook',
      quoteBtn:
        activeMedia === 'reel'
          ? 'Cotizar Trabajo Visto en el Reel'
          : 'Cotizar Trabajo Visto en la Publicación',
      pageLabel: 'Página oficial de Facebook: Auto Detallado Genesis',
      whatsappReelText:
        'Hola Carrocería y Pintura Nogales, vi su Reel en Facebook del proceso de detallado y me gustaría cotizar un trabajo similar para mi vehículo.',
      whatsappPostText:
        'Hola Carrocería y Pintura Nogales, vi su publicación en Facebook de trabajos recientes y me gustaría solicitar una cotización.',
    },
    en: {
      badge: 'Official Social Media Hub',
      title: 'Direct From Our Workshop on Facebook',
      subtitle:
        'Authentic video and photo proof of repairs completed by Auto Detallado Genesis and Carrocería y Pintura Nogales.',
      tabReel: 'Process Video Reel',
      tabPost: 'Completed Work Post',
      reelTitle: 'Video Reel: Workshop Detailing in Action',
      reelDesc:
        'Watch our skilled technicians execute paint correction, multi-stage polishing, and ceramic coating for mirror finishes.',
      postTitle: 'Official Post: Recent Results & Delivery',
      postDesc:
        'Inspect high-resolution photos of oven-baked spray booth repainting and precision body repair delivered in Nogales.',
      pointsReel: [
        'Filmed directly at our workshop on José Zazueta #16',
        'Advanced clear coat restoration & ceramic polish',
        'Real unfiltered results on actual client vehicles',
      ],
      pointsPost: [
        'Factory computerized color matching & baked paint',
        'Written warranty on workmanship and gloss longevity',
        'Trusted by private drivers and fleet owners in Nogales',
      ],
      openFbBtn:
        activeMedia === 'reel' ? 'Open Reel on Facebook' : 'Open Post on Facebook',
      quoteBtn:
        activeMedia === 'reel'
          ? 'Quote Work Seen on the Reel'
          : 'Quote Work Seen on the Post',
      pageLabel: 'Official Facebook Page: Auto Detallado Genesis',
      whatsappReelText:
        'Hello Carroceria y Pintura Nogales, I saw your Facebook Reel detailing process and would like an estimate for my car.',
      whatsappPostText:
        'Hello Carroceria y Pintura Nogales, I saw your Facebook post and would like to get a quote for repair work.',
    },
  }[lang];

  const currentFbUrl = activeMedia === 'reel' ? FB_REEL_URL : FB_POST_URL;
  const currentWhatsAppText =
    activeMedia === 'reel' ? content.whatsappReelText : content.whatsappPostText;

  return (
    <section className="py-16 sm:py-24 bg-[#12141c] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-3">
            <Share2 className="w-3.5 h-3.5 text-blue-400" />
            <span>{content.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-3">
            {content.title}
          </h2>
          <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
            {content.subtitle}
          </p>

          {/* Media Switcher Tabs */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              type="button"
              onClick={() => setActiveMedia('reel')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeMedia === 'reel'
                  ? 'bg-amber-500 text-neutral-950 shadow-md scale-105'
                  : 'bg-[#1a1d26] text-neutral-300 hover:text-white hover:bg-[#202430] border border-white/10'
              }`}
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{content.tabReel}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMedia('post')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeMedia === 'post'
                  ? 'bg-amber-500 text-neutral-950 shadow-md scale-105'
                  : 'bg-[#1a1d26] text-neutral-300 hover:text-white hover:bg-[#202430] border border-white/10'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>{content.tabPost}</span>
            </button>
          </div>
        </div>

        {/* 2-Column Responsive Layout: Active Facebook Embed + Rich Context Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Facebook Iframe Container (6 cols) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[500px] bg-[#1a1d26] border border-white/10 rounded-2xl p-2 sm:p-3 shadow-xl relative overflow-hidden flex flex-col items-center">
              
              {/* Active Embed: Reel vs Post */}
              {activeMedia === 'reel' ? (
                <div className="w-full max-w-[280px] overflow-hidden rounded-xl bg-black flex justify-center shadow-inner">
                  <iframe
                    src={FB_REEL_IFRAME_SRC}
                    width="267"
                    height="591"
                    style={{ border: 'none', overflow: 'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title="Auto Detallado Genesis Facebook Reel Video"
                    className="rounded-lg"
                  />
                </div>
              ) : (
                <div className="w-full overflow-hidden rounded-xl bg-white flex justify-center shadow-inner">
                  <iframe
                    src={FB_POST_IFRAME_SRC}
                    width="500"
                    height="660"
                    style={{ border: 'none', overflow: 'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title="Auto Detallado Genesis Facebook Post"
                    className="w-full max-w-full rounded-lg"
                  />
                </div>
              )}

              {/* Direct Link Footnote */}
              <div className="w-full pt-3 px-1 flex items-center justify-between text-[11px] text-neutral-400">
                <span className="truncate pr-2">{content.pageLabel}</span>
                <a
                  href={currentFbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 font-semibold shrink-0"
                >
                  <span>{activeMedia === 'reel' ? 'Ver Reel' : 'Ver Post'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Social Proof Context & Fast CTA (6 cols) */}
          <div className="lg:col-span-6 space-y-5">
            <div className="bg-[#1a1d26] border border-white/5 rounded-2xl p-6 sm:p-7 space-y-4 shadow-sm">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-400 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>
                  {activeMedia === 'reel' ? 'Video en Vivo' : 'Publicación Oficial'} • Auto Detallado Genesis
                </span>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight">
                {activeMedia === 'reel' ? content.reelTitle : content.postTitle}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {activeMedia === 'reel' ? content.reelDesc : content.postDesc}
              </p>

              <div className="space-y-2.5 pt-1">
                {(activeMedia === 'reel' ? content.pointsReel : content.pointsPost).map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 space-y-2.5 border-t border-white/5">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                    currentWhatsAppText
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-neutral-950" />
                  <span>{content.quoteBtn}</span>
                </a>

                <a
                  href={currentFbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#12141c] hover:bg-[#202430] text-neutral-300 hover:text-white font-medium text-xs border border-white/10 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{content.openFbBtn}</span>
                </a>
              </div>
            </div>

            {/* Official Guarantee Badge Card */}
            <div className="bg-[#1a1d26] border border-white/5 rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="text-xs">
                <div className="text-white font-bold">
                  {lang === 'es' ? 'Garantía de Calidad en Nogales' : 'Quality Guarantee in Nogales'}
                </div>
                <div className="text-neutral-400">
                  {lang === 'es'
                    ? 'Atendemos particulares, flotillas y autos asegurados.'
                    : 'Serving private owners, fleet vehicles, and insured cars.'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
