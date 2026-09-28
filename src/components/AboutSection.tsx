import React from 'react';
import { Heart, Sparkles, Award, Utensils, MapPin, Instagram } from 'lucide-react';
import { TikTokIcon } from './TikTokIcon';
import { CONFEITARIA_INFO } from '../data/sweets';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-16 sm:py-24 bg-gradient-to-b from-[#FAF5F2] to-[#FCFAF8] border-t border-[#F2E6E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Photos side */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              {/* Primary photo (maior) */}
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[3/4] bg-[#F7ECE7]">
                <img
                  src="https://cdn.phototourl.com/free/2026-09-20-7c612f79-24e6-470a-adf8-ab14803c8dcc.jpg"
                  alt="Julia Ribeiro Confeitaria Artesanal"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating detail photo (menor) */}
              <div className="absolute -bottom-6 -right-6 w-44 sm:w-52 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-[#F7ECE7]">
                <img
                  src="https://cdn.phototourl.com/free/2026-09-20-50f784f8-0cd8-4f10-a06d-a27ddb918c82.jpg"
                  alt="Doces e detalhes artesanais Julia Ribeiro"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating quote card */}
              <div className="absolute top-6 -left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-[#F0DDD5] max-w-[200px]">
                <Heart className="w-4 h-4 text-[#D48B78] fill-[#D48B78] mb-1" />
                <p className="text-[11px] font-serif-display italic text-[#4A3936] leading-snug">
                  "O afeto é o ingrediente secreto que transforma o simples em memorável."
                </p>
              </div>
            </div>
          </div>

          {/* Story Content side */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EAE5] text-[#8C584B] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#B86855]" />
              <span>Conheça Nossa História</span>
            </div>

            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#332624] font-normal leading-tight">
              A paixão por criar doces que abraçam a alma.
            </h2>

            {/* Sub-quote from prompt */}
            <div className="border-l-2 border-[#D48B78] pl-4 py-1">
              <p className="font-serif-display text-lg text-[#614742] italic">
                "{CONFEITARIA_INFO.tagline}"
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#614E4A] leading-relaxed">
              A <strong>Julia Ribeiro Confeitaria</strong> nasceu do desejo de resgatar o verdadeiro sentido da confeitaria artesanal em Belo Horizonte: doces que não apenas encantam os olhos com uma estética delicada e romântica, mas que provocam suspiros e sorrisos no primeiro pedaço.
            </p>

            <p className="text-sm sm:text-base text-[#614E4A] leading-relaxed">
              Aqui, rejeitamos misturas prontas, gorduras hidrogenadas e excesso de açúcar. Cada recheio é apurado pacientemente na panela com leite condensado de qualidade, ingredientes naturais e frescos, cacau puro e frutas da estação. É o equilíbrio perfeito entre a delicadeza da confeitaria artesanal e o aconchego acolhedor da mesa mineira.
            </p>

            {/* Three key pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
              <div className="p-4 rounded-2xl bg-white border border-[#EDE0DA] shadow-2xs">
                <Award className="w-5 h-5 text-[#A86454] mb-2" />
                <h4 className="font-bold text-xs text-[#3D2E2B] mb-1">
                  Ingredientes Naturais e Frescos
                </h4>
                <p className="text-[11px] text-[#7A6460] leading-snug">
                  Manteiga pura, ovos frescos, favas de baunilha, cacau puro e frutas frescas da estação.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#EDE0DA] shadow-2xs">
                <Utensils className="w-5 h-5 text-[#A86454] mb-2" />
                <h4 className="font-bold text-xs text-[#3D2E2B] mb-1">
                  Sob Demanda & Fresco
                </h4>
                <p className="text-[11px] text-[#7A6460] leading-snug">
                  Nada fica congelado. Sua encomenda é preparada nas horas que antecedem o evento.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#EDE0DA] shadow-2xs">
                <MapPin className="w-5 h-5 text-[#A86454] mb-2" />
                <h4 className="font-bold text-xs text-[#3D2E2B] mb-1">
                  Atendimento em BH
                </h4>
                <p className="text-[11px] text-[#7A6460] leading-snug">
                  Entregas programadas e cuidadosas para Belo Horizonte e região metropolitana.
                </p>
              </div>
            </div>

            {/* Social CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                id="about-instagram-btn"
                href={CONFEITARIA_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF0EC] text-[#7D4538] hover:bg-[#F5E4DC] border border-[#ECDCD5] text-xs font-semibold transition shadow-2xs"
              >
                <Instagram className="w-4 h-4 text-[#A86454]" />
                <span>Instagram: {CONFEITARIA_INFO.instagram}</span>
              </a>

              <a
                id="about-tiktok-btn"
                href={CONFEITARIA_INFO.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F4EFEA] text-[#2E2827] hover:bg-[#ECE5DE] border border-[#E0D7D0] text-xs font-semibold transition shadow-2xs"
              >
                <TikTokIcon className="w-4 h-4 text-[#2E2827]" />
                <span>TikTok: {CONFEITARIA_INFO.tiktok}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
