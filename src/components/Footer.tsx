import React from 'react';
import { Heart, Instagram, MapPin, Clock } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { TikTokIcon } from './TikTokIcon';
import { CONFEITARIA_INFO } from '../data/sweets';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#2B201F] text-[#EDE4E1] pt-16 pb-12 border-t border-[#3D2F2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#3D2E2B]">
          
          {/* Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif-display text-3xl text-[#FAF2EF] tracking-wide block font-normal">
              Julia Ribeiro
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-[#C4A59D] font-medium block -mt-2">
              Confeitaria • Belo Horizonte
            </span>
            <p className="text-xs sm:text-sm text-[#BFAFA9] leading-relaxed italic max-w-sm pt-1">
              "{CONFEITARIA_INFO.tagline}"
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={CONFEITARIA_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 px-3 rounded-full bg-[#3D2E2B] text-[#E8D4CE] hover:text-white hover:bg-[#523F3C] transition flex items-center gap-2 text-xs"
                title="Instagram Oficial"
              >
                <Instagram className="w-4 h-4" />
                <span>{CONFEITARIA_INFO.instagram}</span>
              </a>

              <a
                href={CONFEITARIA_INFO.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 px-3 rounded-full bg-[#3D2E2B] text-[#E8D4CE] hover:text-white hover:bg-[#523F3C] transition flex items-center gap-2 text-xs"
                title="TikTok Oficial"
              >
                <TikTokIcon className="w-4 h-4" />
                <span>TikTok: {CONFEITARIA_INFO.tiktok}</span>
              </a>

              <a
                href={`https://wa.me/${CONFEITARIA_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 px-3.5 rounded-full bg-[#1F4A35] text-[#D8EFE2] hover:text-white hover:bg-[#285F44] transition flex items-center gap-2 text-xs"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Julia Ribeiro Confeitaria</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4B5AD]">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-[#B5A5A0]">
              <li>
                <button
                  onClick={() => onNavigate('catalogo')}
                  className="hover:text-white transition cursor-pointer"
                >
                  Catálogo de Bolos & Doces
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sobre')}
                  className="hover:text-white transition cursor-pointer"
                >
                  Sobre a Julia & Confeitaria
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('como-funciona')}
                  className="hover:text-white transition cursor-pointer"
                >
                  Como Funciona a Encomenda
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('depoimentos')}
                  className="hover:text-white transition cursor-pointer"
                >
                  Depoimentos de Clientes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-white transition cursor-pointer"
                >
                  Perguntas Frequentes
                </button>
              </li>
            </ul>
          </div>

          {/* Service & Order Hours in BH */}
          <div className="md:col-span-4 space-y-3 text-xs text-[#B5A5A0]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4B5AD]">
              Atendimento em Belo Horizonte
            </h4>
            
            <div className="flex items-start gap-2.5 pt-1">
              <MapPin className="w-4 h-4 text-[#D48B78] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#EDE4E1] block">Belo Horizonte - MG</span>
                <span>Produção artesanal sob demanda com entrega climatizada em BH</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 pt-1">
              <Clock className="w-4 h-4 text-[#D48B78] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#EDE4E1] block">Horários de Atendimento</span>
                <span>{CONFEITARIA_INFO.openingHours}</span>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-[#A8948F]">
              <span>Encomendas com antecedência mínima de 5 dias.</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A7974]">
          <p>© {new Date().getFullYear()} Julia Ribeiro Confeitaria. Todos os direitos reservados. Belo Horizonte - MG.</p>
          <div className="flex items-center gap-1">
            <span>Feito com</span>
            <Heart className="w-3.5 h-3.5 text-[#D48B78] fill-[#D48B78]" />
            <span>e afeto para celebrar seus momentos especiais.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
