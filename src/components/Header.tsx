import React, { useState } from 'react';
import { ShoppingBag, Menu, X, MapPin, Heart, Instagram } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { TikTokIcon } from './TikTokIcon';
import { CONFEITARIA_INFO } from '../data/sweets';
import { formatCurrency } from '../utils/formatters';

interface HeaderProps {
  cartCount: number;
  cartTotal: number;
  onOpenCart: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  cartTotal,
  onOpenCart,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#F0E6E1] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            id="nav-brand-logo"
            onClick={() => handleNavClick('inicio')}
            className="text-left group transition cursor-pointer"
          >
            <span className="block font-serif-display text-2xl sm:text-3xl text-[#3A2E2C] tracking-wide font-normal group-hover:text-[#A86454] transition-colors">
              Julia Ribeiro
            </span>
            <span className="block text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#967C75] font-medium -mt-1">
              Confeitaria • BH
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7">
            <button
              onClick={() => handleNavClick('catalogo')}
              className="text-sm font-medium text-[#594744] hover:text-[#A86454] transition-colors cursor-pointer"
            >
              Catálogo de Doces
            </button>
            <button
              onClick={() => handleNavClick('sobre')}
              className="text-sm font-medium text-[#594744] hover:text-[#A86454] transition-colors cursor-pointer"
            >
              Sobre a Julia
            </button>
            <button
              onClick={() => handleNavClick('como-funciona')}
              className="text-sm font-medium text-[#594744] hover:text-[#A86454] transition-colors cursor-pointer"
            >
              Como Encomendar
            </button>
            <button
              onClick={() => handleNavClick('depoimentos')}
              className="text-sm font-medium text-[#594744] hover:text-[#A86454] transition-colors cursor-pointer"
            >
              Depoimentos
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Instagram link */}
            <a
              id="header-instagram-link"
              href={CONFEITARIA_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium text-[#7D4538] hover:text-[#522920] bg-[#FAF0EC] hover:bg-[#F5E4DC] transition border border-[#ECDCD5]"
              title="Instagram Oficial"
            >
              <Instagram className="w-3.5 h-3.5 text-[#A86454]" />
              <span>{CONFEITARIA_INFO.instagram}</span>
            </a>

            {/* TikTok link */}
            <a
              id="header-tiktok-link"
              href={CONFEITARIA_INFO.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden 2xl:flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium text-[#2E2827] hover:text-[#000000] bg-[#F4EFEA] hover:bg-[#ECE5DE] transition border border-[#E0D7D0]"
              title="TikTok Oficial"
            >
              <TikTokIcon className="w-3.5 h-3.5 text-[#2E2827]" />
              <span>TikTok</span>
            </a>

            {/* Direct WhatsApp link */}
            <a
              id="header-direct-whatsapp-btn"
              href={`https://wa.me/${CONFEITARIA_INFO.whatsappNumber}?text=${encodeURIComponent('Olá, Julia! Gostaria de tirar dúvidas sobre encomendas de doces em Belo Horizonte.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-medium text-[#2E6B4F] bg-[#EAF5EF] hover:bg-[#DDF0E4] transition border border-[#C6E6D4]"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>WhatsApp Direct</span>
            </a>

            {/* Cart / Order Drawer Button */}
            <button
              id="header-cart-toggle-btn"
              onClick={onOpenCart}
              className="relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#3D2F2D] text-white hover:bg-[#523F3C] transition shadow-sm cursor-pointer"
              aria-label="Abrir resumo de encomenda"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 text-[#F4DDD5]" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#D48B78] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-xs">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="text-xs font-medium tracking-wide">
                {cartCount === 0 ? 'Sua Encomenda' : formatCurrency(cartTotal)}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#594744] hover:bg-[#FAF3F0] transition cursor-pointer"
              aria-label="Alternar menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#F0E6E1] px-4 pt-3 pb-5 space-y-3 shadow-lg animate-in fade-in">
          <button
            onClick={() => handleNavClick('catalogo')}
            className="block w-full text-left py-2 px-3 text-sm font-medium text-[#4A3B39] hover:bg-[#FAF3F0] rounded-lg"
          >
            Catálogo de Doces & Preços
          </button>
          <button
            onClick={() => handleNavClick('sobre')}
            className="block w-full text-left py-2 px-3 text-sm font-medium text-[#4A3B39] hover:bg-[#FAF3F0] rounded-lg"
          >
            Sobre a Julia Ribeiro
          </button>
          <button
            onClick={() => handleNavClick('como-funciona')}
            className="block w-full text-left py-2 px-3 text-sm font-medium text-[#4A3B39] hover:bg-[#FAF3F0] rounded-lg"
          >
            Como Fazer sua Encomenda
          </button>
          <button
            onClick={() => handleNavClick('depoimentos')}
            className="block w-full text-left py-2 px-3 text-sm font-medium text-[#4A3B39] hover:bg-[#FAF3F0] rounded-lg"
          >
            Depoimentos de Clientes
          </button>
          <button
            onClick={() => handleNavClick('faq')}
            className="block w-full text-left py-2 px-3 text-sm font-medium text-[#4A3B39] hover:bg-[#FAF3F0] rounded-lg"
          >
            Dúvidas Frequentes
          </button>
          <div className="pt-2 border-t border-[#F5ECE8] space-y-2">
            <a
              href={`https://wa.me/${CONFEITARIA_INFO.whatsappNumber}?text=${encodeURIComponent('Olá, Julia! Gostaria de fazer uma encomenda.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#2E6B4F] text-white text-xs font-semibold"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              Falar no WhatsApp • Julia Ribeiro Confeitaria
            </a>

            <a
              href={CONFEITARIA_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#FAF0EC] text-[#7D4538] text-xs font-semibold border border-[#ECDCD5]"
            >
              <Instagram className="w-4 h-4 text-[#A86454]" />
              Seguir {CONFEITARIA_INFO.instagram} no Instagram
            </a>

            <a
              href={CONFEITARIA_INFO.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#F4EFEA] text-[#2E2827] text-xs font-semibold border border-[#E0D7D0]"
            >
              <TikTokIcon className="w-4 h-4 text-[#2E2827]" />
              Seguir {CONFEITARIA_INFO.tiktok} no TikTok
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
