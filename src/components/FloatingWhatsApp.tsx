import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { CONFEITARIA_INFO } from '../data/sweets';
import { formatCurrency } from '../utils/formatters';

interface FloatingWhatsAppProps {
  cartCount: number;
  cartTotal: number;
  onOpenCart: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  cartCount,
  cartTotal,
  onOpenCart,
}) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Floating cart pill if there are items in the cart */}
      {cartCount > 0 && (
        <button
          onClick={onOpenCart}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#3D2E2B] text-white shadow-xl hover:bg-[#523F3C] transition-all transform hover:scale-105 border border-[#F2DDD5] cursor-pointer"
        >
          <ShoppingBag className="w-4 h-4 text-[#F2C4B7]" />
          <span className="text-xs font-semibold">
            Ver Encomenda ({cartCount}) • {formatCurrency(cartTotal)}
          </span>
        </button>
      )}

      {/* Floating direct WhatsApp button */}
      <a
        id="floating-whatsapp-action"
        href={`https://wa.me/${CONFEITARIA_INFO.whatsappNumber}?text=${encodeURIComponent('Olá, Julia! Estou no site da Confeitaria e gostaria de tirar uma dúvida sobre encomendas em Belo Horizonte.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20BE5B] text-white shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 border border-[#4ADE80] cursor-pointer group"
        aria-label="Falar com Julia Ribeiro Confeitaria no WhatsApp"
      >
        <WhatsAppIcon className="w-5 h-5 fill-current group-hover:rotate-12 transition-transform" />
        <span className="text-xs font-semibold hidden sm:inline tracking-wide">
          Julia Ribeiro Confeitaria
        </span>
      </a>
    </div>
  );
};
