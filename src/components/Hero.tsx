import React from 'react';
import { ArrowDown, Sparkles, Clock, Heart, Award, Instagram } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { TikTokIcon } from './TikTokIcon';
import { CONFEITARIA_INFO } from '../data/sweets';

interface HeroProps {
  onExploreCatalog: () => void;
  onOpenOrder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCatalog, onOpenOrder }) => {
  return (
    <section id="inicio" className="relative overflow-hidden pt-8 pb-14 lg:pt-14 lg:pb-20 bg-gradient-to-b from-[#FCFAF8] via-[#FAF3F0]/60 to-[#FCFAF8]">
      {/* Delicate background decorative glow orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#F9ECE7]/70 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 right-0 w-[400px] h-[300px] bg-[#EBF2EC]/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Delicate Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0EC] border border-[#F2DDD5] text-[#8C5D52] text-xs font-medium tracking-wide mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#C47764]" />
          <span>Confeitaria Artesanal em Belo Horizonte</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#332624] font-normal leading-[1.14] tracking-tight mb-4 max-w-4xl mx-auto">
          A doçura de celebrar com <br className="hidden sm:inline" />
          <span className="italic text-[#995546] font-normal">afeto, beleza</span> e sabor inesquecível.
        </h1>

        {/* Tagline Quote */}
        <div className="max-w-2xl mx-auto py-1 mb-8">
          <p className="font-serif-display text-xl sm:text-2xl text-[#4A3936] italic leading-relaxed">
            "{CONFEITARIA_INFO.tagline}"
          </p>
          <p className="text-xs text-[#8A736E] mt-2 flex items-center justify-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-[#D48B78] fill-[#D48B78]" />
            <span>Doces artesanais sob encomenda em Belo Horizonte</span>
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
          <button
            id="hero-explore-catalog-btn"
            onClick={onExploreCatalog}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#3D2E2B] text-white text-sm font-semibold hover:bg-[#523F3C] transition shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <span>Ver Cardápio Completo</span>
            <ArrowDown className="w-4 h-4 text-[#F4DDD5]" />
          </button>

          <button
            id="hero-whatsapp-order-btn"
            onClick={onOpenOrder}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#EBF5EF] text-[#245C42] border border-[#C6E6D4] text-sm font-semibold hover:bg-[#DEF0E5] transition flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current text-[#2E6B4F]" />
            <span>Montar Encomenda no WhatsApp</span>
          </button>

          <a
            id="hero-instagram-link-btn"
            href={CONFEITARIA_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-3.5 rounded-full bg-[#FAF0EC] text-[#7D4538] border border-[#ECDCD5] text-sm font-semibold hover:bg-[#F5E4DC] transition flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <Instagram className="w-4 h-4 text-[#A86454]" />
            <span>{CONFEITARIA_INFO.instagram}</span>
          </a>

          <a
            id="hero-tiktok-link-btn"
            href={CONFEITARIA_INFO.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-3.5 rounded-full bg-[#F4EFEA] text-[#2E2827] border border-[#E0D7D0] text-sm font-semibold hover:bg-[#ECE5DE] transition flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <TikTokIcon className="w-4 h-4 text-[#2E2827]" />
            <span>{CONFEITARIA_INFO.tiktok}</span>
          </a>
        </div>

        {/* Value Badges */}
        <div className="grid grid-cols-3 gap-3 pt-6 max-w-xl mx-auto border-t border-[#F2E6E1]">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#4F3C39]">
              <Clock className="w-3.5 h-3.5 text-[#A86454]" />
              <span>Antecedência</span>
            </div>
            <span className="text-[11px] text-[#85706B] mt-0.5">Mínimo de 5 dias</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#4F3C39]">
              <Award className="w-3.5 h-3.5 text-[#A86454]" />
              <span>Ingredientes</span>
            </div>
            <span className="text-[11px] text-[#85706B] mt-0.5">Naturais e frescos</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#4F3C39]">
              <Heart className="w-3.5 h-3.5 text-[#A86454]" />
              <span>Belo Horizonte</span>
            </div>
            <span className="text-[11px] text-[#85706B] mt-0.5">Produção artesanal</span>
          </div>
        </div>

      </div>
    </section>
  );
};
