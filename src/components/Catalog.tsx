import React, { useRef, useState, useEffect } from 'react';
import { 
  LayoutGrid, 
  Cake, 
  Cookie, 
  IceCream, 
  ChevronLeft, 
  ChevronRight,
  Sparkles 
} from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/sweets';
import { ProductCard } from './ProductCard';

export type CatalogCategoryFilter = 'todos' | 'bolos' | 'doces' | 'sobremesas';

interface CatalogProps {
  onSelectProduct: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
}

const FILTER_TABS: {
  id: CatalogCategoryFilter;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  { id: 'todos', label: 'Todos', icon: LayoutGrid },
  { id: 'bolos', label: 'Bolos', icon: Cake },
  { id: 'doces', label: 'Doces', icon: Cookie },
  { id: 'sobremesas', label: 'Sobremesas', icon: IceCream },
];

export const Catalog: React.FC<CatalogProps> = ({
  onSelectProduct,
  onQuickAdd,
}) => {
  const [activeFilter, setActiveFilter] = useState<CatalogCategoryFilter>('todos');
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Mouse drag state for desktop
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasMovedRef = useRef(false);

  // Filter products according to selected category
  const filteredProducts = PRODUCTS.filter((product) => {
    if (activeFilter === 'todos') return true;
    if (activeFilter === 'bolos') return product.category === 'bolos';
    if (activeFilter === 'doces') return product.category === 'doces-finos';
    if (activeFilter === 'sobremesas') return product.category === 'sobremesas' || product.category === 'tortas';
    return true;
  });

  const getFilterCount = (filterId: CatalogCategoryFilter) => {
    if (filterId === 'todos') return PRODUCTS.length;
    if (filterId === 'bolos') return PRODUCTS.filter((p) => p.category === 'bolos').length;
    if (filterId === 'doces') return PRODUCTS.filter((p) => p.category === 'doces-finos').length;
    if (filterId === 'sobremesas') return PRODUCTS.filter((p) => p.category === 'sobremesas' || p.category === 'tortas').length;
    return 0;
  };

  const updateScrollState = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress(Math.min(100, Math.max(0, (scrollLeft / maxScroll) * 100)));
    } else {
      setScrollProgress(100);
    }
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (el) {
      updateScrollState();
      el.addEventListener('scroll', updateScrollState, { passive: true });
      return () => el.removeEventListener('scroll', updateScrollState);
    }
  }, [filteredProducts.length]);

  // Reset carousel position when changing filters
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
    setScrollProgress(0);
  }, [activeFilter]);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const scrollAmount = carouselRef.current.clientWidth * 0.75;
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    if (e.button !== 0) return;
    isDraggingRef.current = true;
    hasMovedRef.current = false;
    startXRef.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeftRef.current = carouselRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !carouselRef.current) return;
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = x - startXRef.current;
    if (Math.abs(walk) > 4) {
      hasMovedRef.current = true;
      carouselRef.current.scrollLeft = scrollLeftRef.current - walk;
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleClickCapture = (e: React.MouseEvent) => {
    if (hasMovedRef.current) {
      e.stopPropagation();
      e.preventDefault();
      hasMovedRef.current = false;
    }
  };

  return (
    <section id="catalogo" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl space-y-2">
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#332624] font-normal">
              Cardápio de Bolos & Doces
            </h2>
            <p className="text-sm sm:text-base text-[#6E5955] leading-relaxed">
              {activeFilter === 'bolos' && 'Bolos artesanais festivos decorados com frutas frescas, chantilly aveludado e massas fofinhas feitas com 5 dias de antecedência.'}
              {activeFilter === 'doces' && 'Doces finos, brigadeiros gourmet enrolados à mão e caixas para presentear com afeto em Belo Horizonte.'}
              {activeFilter === 'sobremesas' && 'Cheesecakes clássicos, tortas artesanais e taças da felicidade geladinhas prontas para comemorações.'}
              {activeFilter === 'todos' && 'Cada doce é elaborado artesanalmente com ingredientes naturais e frescos e 5 dias de antecedência. Filtre pelas abas ou deslize para explorar.'}
            </p>
          </div>

          {/* Carousel Next/Prev Controls for Desktop */}
          {filteredProducts.length > 1 && (
            <div className="hidden sm:flex items-center gap-2 self-start md:self-end shrink-0">
              <button
                type="button"
                onClick={() => scrollCarousel('left')}
                className="p-2.5 rounded-full border border-[#EADBCE] bg-[#FAF5F2] hover:bg-[#F2E8E2] text-[#6E5955] hover:text-[#332624] transition cursor-pointer shadow-2xs"
                title="Voltar itens"
                aria-label="Ver itens anteriores"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel('right')}
                className="p-2.5 rounded-full border border-[#EADBCE] bg-[#FAF5F2] hover:bg-[#F2E8E2] text-[#6E5955] hover:text-[#332624] transition cursor-pointer shadow-2xs"
                title="Avançar itens"
                aria-label="Ver próximos itens"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Filter Tabs / Buttons */}
        <div 
          className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-3 mb-8 scrollbar-none"
          role="tablist"
          aria-label="Filtros do cardápio"
        >
          {FILTER_TABS.map((tab) => {
            const Icon = tab.icon;
            const count = getFilterCount(tab.id);
            const isActive = activeFilter === tab.id;

            return (
              <button
                key={tab.id}
                id={`catalog-tab-${tab.id}`}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(tab.id)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap border shrink-0 ${
                  isActive
                    ? 'bg-[#3D2E2B] text-white border-[#3D2E2B] shadow-md shadow-[#3D2E2B]/15 scale-[1.02]'
                    : 'bg-[#FAF5F2] text-[#6E5955] border-[#EADBCE] hover:bg-[#F2EAE4] hover:text-[#3D2E2B]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#F2D8D0]' : 'text-[#A86454]'}`} />
                <span>{tab.label}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-semibold transition-colors ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-[#EBDDD5] text-[#7A625D]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Products Display */}
        {filteredProducts.length > 0 ? (
          filteredProducts.length > 1 ? (
            <div className="relative">
              {/* Horizontal Scroll Carousel */}
              <div 
                ref={carouselRef}
                tabIndex={0}
                aria-label={`Carrossel de ${activeFilter}`}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onClickCapture={handleClickCapture}
                className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 px-1 pb-6 scrollbar-none focus:outline-none cursor-grab active:cursor-grabbing"
                style={{ 
                  scrollbarWidth: 'none', 
                  msOverflowStyle: 'none',
                  touchAction: 'auto',
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                {filteredProducts.map((product) => (
                  <div 
                    key={product.id} 
                    className="w-[280px] sm:w-[320px] md:w-[350px] shrink-0 snap-start flex flex-col"
                  >
                    <ProductCard
                      product={product}
                      onSelectProduct={onSelectProduct}
                      onQuickAdd={onQuickAdd}
                    />
                  </div>
                ))}
              </div>

              {/* Progress track indicator */}
              <div className="w-full max-w-xs mx-auto h-1.5 bg-[#F2E8E4] rounded-full overflow-hidden mt-3">
                <div 
                  className="h-full bg-[#A86454] rounded-full transition-all duration-300"
                  style={{ width: `${Math.max(15, scrollProgress)}%` }}
                />
              </div>
            </div>
          ) : (
            <div className="w-full max-w-sm sm:max-w-md mx-auto sm:mx-0">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelectProduct={onSelectProduct}
                  onQuickAdd={onQuickAdd}
                />
              ))}
            </div>
          )
        ) : (
          <div className="text-center py-16 px-4 bg-[#FCFAF8] rounded-3xl border border-[#F2E6E1] max-w-lg mx-auto">
            <Sparkles className="w-8 h-8 text-[#C4A59D] mx-auto mb-3" />
            <h3 className="font-serif-display text-xl text-[#3D2E2B] mb-2 font-normal">
              Nenhum item encontrado nesta categoria
            </h3>
            <p className="text-xs sm:text-sm text-[#78615C] mb-5">
              Experimente selecionar outra aba ou ver todos os nossos doces artesanais.
            </p>
            <button
              onClick={() => setActiveFilter('todos')}
              className="px-5 py-2.5 rounded-full bg-[#3D2E2B] text-white text-xs font-semibold hover:bg-[#523F3C] transition cursor-pointer"
            >
              Ver Todos os Doces
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
