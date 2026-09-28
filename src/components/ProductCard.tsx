import React from 'react';
import { Plus, Clock, Users, Sparkles, Eye } from 'lucide-react';
import { Product } from '../types';
import { formatCurrency } from '../utils/formatters';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
  onQuickAdd,
}) => {
  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#F2E5E0] hover:border-[#E2C3BA] shadow-xs hover:shadow-md transition-all duration-300">
      {/* Image container */}
      <div 
        className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF1ED] cursor-pointer"
        onClick={() => onSelectProduct(product)}
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {product.isHighlight && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide bg-[#FAF0EC]/95 text-[#8F5244] border border-[#ECD3CA] backdrop-blur-xs shadow-xs">
              <Sparkles className="w-3 h-3 text-[#B86855]" />
              Destaque
            </span>
          )}
          {product.tags.slice(0, 1).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-white/90 text-[#6B5550] backdrop-blur-xs border border-white/60 shadow-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Lead time badge */}
        <div className="absolute bottom-3 right-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#382B29]/80 text-[#FAF0EC] backdrop-blur-xs">
          <Clock className="w-3 h-3 text-[#F2C4B7]" />
          <span>5 dias antecedência</span>
        </div>

        {/* View Details Hover Overlay Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 text-[#42312F] text-xs font-semibold shadow-md">
            <Eye className="w-3.5 h-3.5 text-[#A86454]" />
            Ver Detalhes
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Category info */}
          <span className="text-[11px] uppercase tracking-wider text-[#9E837D] font-medium block mb-1">
            {product.categoryName}
          </span>

          {/* Product Name */}
          <h3 
            onClick={() => onSelectProduct(product)}
            className="font-serif-display text-xl text-[#382B29] font-normal leading-snug cursor-pointer hover:text-[#A86454] transition-colors"
          >
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-[#735F5B] leading-relaxed line-clamp-2 mt-2">
            {product.description}
          </p>

          {/* Yield / Serving note */}
          <div className="mt-3 flex items-center gap-1.5 text-[11px] text-[#8C7671] bg-[#FAF5F2] px-2.5 py-1 rounded-lg">
            <Users className="w-3 h-3 text-[#B86855] shrink-0" />
            <span className="truncate">{product.yieldInfo}</span>
          </div>
        </div>

        {/* Price & Action Row */}
        <div className="pt-3 border-t border-[#F5EDE8] flex items-center justify-between gap-2">
          <div>
            <span className="text-[10px] text-[#9E837D] block">A partir de</span>
            <span className="text-lg font-bold text-[#382B29]">
              {formatCurrency(product.price)}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onSelectProduct(product)}
              className="px-3 py-2 rounded-xl text-xs font-medium text-[#63504C] bg-[#F7EFEA] hover:bg-[#EFE3DC] transition cursor-pointer"
            >
              Personalizar
            </button>
            <button
              onClick={() => onQuickAdd(product)}
              title="Adicionar à Encomenda"
              className="p-2 rounded-xl bg-[#3D2E2B] text-white hover:bg-[#523F3C] transition shadow-xs cursor-pointer flex items-center justify-center"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
