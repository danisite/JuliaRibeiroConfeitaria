import React, { useState, useEffect } from 'react';
import { X, Clock, Users, Check, Plus, Minus, ShoppingBag, Sparkles, Flame } from 'lucide-react';
import { Product, CartItem } from '../types';
import { formatCurrency } from '../utils/formatters';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (item: CartItem) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedPortionIdx, setSelectedPortionIdx] = useState(0);
  const [selectedFlavor, setSelectedFlavor] = useState<string>('');
  const [selectedSponge, setSelectedSponge] = useState<string>('');
  const [selectedFilling, setSelectedFilling] = useState<string>('');
  const [selectedCandle, setSelectedCandle] = useState<string>('');
  const [cakeInscription, setCakeInscription] = useState<string>('');
  const [customNotes, setCustomNotes] = useState('');
  const [addedAnimation, setAddedAnimation] = useState(false);

  useEffect(() => {
    if (product) {
      setQuantity(1);
      setSelectedPortionIdx(0);
      setSelectedFlavor(product.flavors && product.flavors.length > 0 ? product.flavors[0] : '');
      setSelectedSponge(product.spongeOptions && product.spongeOptions.length > 0 ? product.spongeOptions[0] : '');
      setSelectedFilling(product.fillingOptions && product.fillingOptions.length > 0 ? product.fillingOptions[0] : '');
      setSelectedCandle(product.candleOptions && product.candleOptions.length > 0 ? product.candleOptions[0] : '');
      setCakeInscription('');
      setCustomNotes('');
    }
  }, [product]);

  const selectedPortion = product.portionOptions
    ? product.portionOptions[selectedPortionIdx]
    : null;

  const unitPrice = selectedPortion
    ? Math.round(product.price * selectedPortion.priceMultiplier)
    : product.price;

  const totalPrice = unitPrice * quantity;

  const handleAdd = () => {
    onAddToCart({
      product,
      quantity,
      selectedPortion: selectedPortion ? selectedPortion.label : undefined,
      selectedFlavor: selectedFlavor || undefined,
      selectedSponge: selectedSponge || undefined,
      selectedFilling: selectedFilling || undefined,
      selectedCandle: selectedCandle || undefined,
      cakeInscription: cakeInscription.trim() || undefined,
      customNotes: customNotes.trim() || undefined,
      finalPrice: unitPrice,
    });

    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#F2E5DF] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-[#473634] hover:bg-white hover:text-black shadow-md transition cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        <div className="max-h-[85vh] overflow-y-auto">
          {/* Main Photo Banner */}
          <div className="relative h-64 sm:h-72 w-full bg-[#FAF0EC]">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
            
            <div className="absolute bottom-4 left-5 right-5 text-white">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-white/30 backdrop-blur-md text-white mb-1.5">
                {product.categoryName}
              </span>
              <h2 className="font-serif-display text-2xl sm:text-3xl text-white font-normal leading-tight">
                {product.name}
              </h2>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Description */}
            <div>
              <p className="text-sm sm:text-base text-[#594643] leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Quick Specs Badges */}
            <div className="grid grid-cols-2 gap-3 p-3.5 bg-[#FAF5F2] rounded-2xl border border-[#F5ECE7]">
              <div className="flex items-center gap-2.5">
                <Users className="w-4 h-4 text-[#A86454] shrink-0" />
                <div>
                  <span className="text-[10px] text-[#8C7671] block">Rendimento</span>
                  <span className="text-xs font-semibold text-[#42312F]">
                    {product.yieldInfo}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#A86454] shrink-0" />
                <div>
                  <span className="text-[10px] text-[#8C7671] block">Prazo de Antecedência</span>
                  <span className="text-xs font-semibold text-[#42312F]">
                    Mínimo de 5 dias de antecedência
                  </span>
                </div>
              </div>
            </div>

            {/* Natural and Fresh Ingredients */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A716C] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#B86855]" />
                Ingredientes Naturais e Frescos
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {product.ingredients.map((ing) => (
                  <span
                    key={ing}
                    className="px-3 py-1 rounded-full text-xs bg-[#F7EFEA] text-[#5C4744] border border-[#ECDCD5]"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Portion / Size Selector (Tamanho / Aro) */}
            {product.portionOptions && product.portionOptions.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#8A716C] block">
                    1. Escolha o Tamanho / Aro do Bolo
                  </label>
                  <span className="text-[10px] text-[#A8928E]">Deslize para ver os aros</span>
                </div>
                <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-none snap-x">
                  {product.portionOptions.map((opt, idx) => {
                    const isSelected = selectedPortionIdx === idx;
                    const optPrice = Math.round(product.price * opt.priceMultiplier);
                    return (
                      <button
                        key={opt.label}
                        type="button"
                        onClick={() => setSelectedPortionIdx(idx)}
                        className={`text-left p-3.5 rounded-2xl border transition-all cursor-pointer min-w-[210px] sm:min-w-[230px] shrink-0 snap-start flex flex-col justify-between ${
                          isSelected
                            ? 'bg-[#F9ECE7] border-[#D48B78] ring-2 ring-[#D48B78]/20'
                            : 'bg-white border-[#EDE0DA] hover:bg-[#FAF5F2]'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs font-bold text-[#3D2E2B]">
                              {opt.label}
                            </span>
                            <span className="text-xs font-bold text-[#9C5443]">
                              {formatCurrency(optPrice)}
                            </span>
                          </div>
                          <span className="text-[11px] text-[#7A6460] block mt-1 leading-snug">
                            {opt.description}
                          </span>
                        </div>
                        <div className="mt-2 pt-2 border-t border-[#F2E5DF] text-[10px] text-[#A86454] font-medium flex items-center justify-between">
                          <span>{isSelected ? '✓ Selecionado' : 'Selecionar'}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Sponge / Massa selector (if applicable for cakes) */}
            {product.spongeOptions && product.spongeOptions.length > 0 && (
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#8A716C] block">
                  2. Escolha o Tipo de Massa
                </label>
                <div className="space-y-1.5">
                  {product.spongeOptions.map((sponge) => {
                    const isSelected = selectedSponge === sponge;
                    return (
                      <button
                        key={sponge}
                        type="button"
                        onClick={() => setSelectedSponge(sponge)}
                        className={`w-full text-left px-3.5 py-2.5 rounded-xl border text-xs transition cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'bg-[#F9ECE7] border-[#D48B78] text-[#3D2E2B] font-semibold'
                            : 'bg-white border-[#EDE0DA] text-[#614E4A] hover:bg-[#FAF5F2]'
                        }`}
                      >
                        <span>{sponge}</span>
                        {isSelected && <Check className="w-4 h-4 text-[#A86454]" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Filling / Recheio selector (if applicable) */}
            {product.fillingOptions && product.fillingOptions.length > 0 && (
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#8A716C] block">
                  3. Escolha o Recheio
                </label>
                <div className="space-y-1.5">
                  {product.fillingOptions.map((filling) => {
                    const isSelected = selectedFilling === filling;
                    return (
                      <button
                        key={filling}
                        type="button"
                        onClick={() => setSelectedFilling(filling)}
                        className={`w-full text-left px-3.5 py-2.5 rounded-xl border text-xs transition cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'bg-[#F9ECE7] border-[#D48B78] text-[#3D2E2B] font-semibold'
                            : 'bg-white border-[#EDE0DA] text-[#614E4A] hover:bg-[#FAF5F2]'
                        }`}
                      >
                        <span>{filling}</span>
                        {isSelected && <Check className="w-4 h-4 text-[#A86454]" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Flavor / Mix Selector (for boxes or brigadeiros) */}
            {product.flavors && product.flavors.length > 0 && (
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#8A716C] block">
                  Opção de Sabor / Seleção
                </label>
                <div className="space-y-1.5">
                  {product.flavors.map((flavor) => {
                    const isSelected = selectedFlavor === flavor;
                    return (
                      <button
                        key={flavor}
                        type="button"
                        onClick={() => setSelectedFlavor(flavor)}
                        className={`w-full text-left px-3.5 py-2.5 rounded-xl border text-xs transition cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'bg-[#F9ECE7] border-[#D48B78] text-[#3D2E2B] font-semibold'
                            : 'bg-white border-[#EDE0DA] text-[#614E4A] hover:bg-[#FAF5F2]'
                        }`}
                      >
                        <span>{flavor}</span>
                        {isSelected && <Check className="w-4 h-4 text-[#A86454]" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Candle options (if cake) */}
            {product.candleOptions && product.candleOptions.length > 0 && (
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#8A716C] flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-[#C47764]" />
                  Vela Comemorativa
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.candleOptions.map((candle) => {
                    const isSelected = selectedCandle === candle;
                    return (
                      <button
                        key={candle}
                        type="button"
                        onClick={() => setSelectedCandle(candle)}
                        className={`text-left p-2.5 rounded-xl border text-xs transition cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'bg-[#F9ECE7] border-[#D48B78] text-[#3D2E2B] font-medium'
                            : 'bg-white border-[#EDE0DA] text-[#614E4A] hover:bg-[#FAF5F2]'
                        }`}
                      >
                        <span>{candle}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#A86454] shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Chocolate Plaque Inscription (for cakes) */}
            {product.category === 'bolos' && (
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#8A716C] flex items-center justify-between">
                  <span>Plaquinha de Chocolate Personalizada</span>
                  <span className="text-[10px] font-normal lowercase text-[#A8928E]">(cortesia no bolo)</span>
                </label>
                <input
                  type="text"
                  value={cakeInscription}
                  onChange={(e) => setCakeInscription(e.target.value)}
                  placeholder="Ex: 'Parabéns Sofia! • 30 anos' ou 'Com Amor'"
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-[#E5D7D1] focus:outline-none focus:ring-2 focus:ring-[#D48B78] bg-[#FAF8F6]"
                />
              </div>
            )}

            {/* Custom note (observação especial) */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#8A716C] flex items-center justify-between">
                <span>Observação ou Restrição Especial</span>
                <span className="text-[10px] font-normal lowercase text-[#A8928E]">(opcional)</span>
              </label>
              <input
                type="text"
                value={customNotes}
                onChange={(e) => setCustomNotes(e.target.value)}
                placeholder="Ex: sem castanhas, frutas vermelhas frescas no topo, etc."
                className="w-full px-4 py-2.5 text-xs rounded-xl border border-[#E5D7D1] focus:outline-none focus:ring-2 focus:ring-[#D48B78] bg-[#FAF8F6]"
              />
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-[#F5EDE8] flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Quantity Counter */}
              <div className="flex items-center gap-3">
                <span className="text-xs text-[#8A716C] font-medium">Quantidade:</span>
                <div className="flex items-center border border-[#E2D2CB] rounded-full p-1 bg-[#FAF5F2]">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                    className="p-1.5 rounded-full hover:bg-white text-[#523F3C] disabled:opacity-30 transition cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-8 text-center text-xs font-bold text-[#3D2E2B]">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1.5 rounded-full hover:bg-white text-[#523F3C] transition cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Add Button with Live Total */}
              <button
                type="button"
                onClick={handleAdd}
                className={`w-full sm:w-auto px-7 py-3 rounded-full text-white text-sm font-semibold flex items-center justify-center gap-2.5 shadow-md transition-all cursor-pointer ${
                  addedAnimation ? 'bg-[#2E6B4F]' : 'bg-[#3D2E2B] hover:bg-[#523F3C]'
                }`}
              >
                {addedAnimation ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>Adicionado à Encomenda!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-[#F4DDD5]" />
                    <span>Adicionar à Encomenda • {formatCurrency(totalPrice)}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
