import React, { useRef, useState, useEffect } from 'react';
import { 
  Star, 
  Heart, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  MousePointerClick 
} from 'lucide-react';
import { TESTIMONIALS } from '../data/sweets';

export const Testimonials: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollState = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);

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
  }, []);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const cardWidth = 380;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section id="depoimentos" className="py-16 sm:py-20 bg-white border-t border-[#F2E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF0EC] text-[#8F5649] text-xs font-semibold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 text-[#B86855] fill-[#B86855]" />
              <span>Afeto Compartilhado</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#332624] font-normal">
              O Que Dizem Quem Já Celebrou Conosco
            </h2>
            <p className="text-xs sm:text-sm text-[#735E5A] leading-relaxed">
              Momentos especiais em Belo Horizonte adoçados com carinho, técnica e pontualidade.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 self-end md:self-auto">
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#8C7671] mr-2">
              <MousePointerClick className="w-3.5 h-3.5 text-[#B86855]" />
              <span>Deslize para ler</span>
            </div>

            <button
              id="testimonials-carousel-prev"
              onClick={() => scrollCarousel('left')}
              disabled={!canScrollLeft}
              className={`p-3 rounded-full border transition cursor-pointer flex items-center justify-center ${
                canScrollLeft
                  ? 'bg-white border-[#E2D2CB] text-[#3D2E2B] hover:bg-[#FAF0EC] hover:border-[#D48B78] shadow-sm'
                  : 'bg-[#F7F2EF] border-[#EAE0DC] text-[#C4B3AF] cursor-not-allowed opacity-50'
              }`}
              title="Depoimento anterior"
              aria-label="Ver depoimento anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              id="testimonials-carousel-next"
              onClick={() => scrollCarousel('right')}
              disabled={!canScrollRight}
              className={`p-3 rounded-full border transition cursor-pointer flex items-center justify-center ${
                canScrollRight
                  ? 'bg-white border-[#E2D2CB] text-[#3D2E2B] hover:bg-[#FAF0EC] hover:border-[#D48B78] shadow-sm'
                  : 'bg-[#F7F2EF] border-[#EAE0DC] text-[#C4B3AF] cursor-not-allowed opacity-50'
              }`}
              title="Próximo depoimento"
              aria-label="Ver próximo depoimento"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Display */}
        <div className="relative">
          {/* Subtle edge fades for desktop */}
          {canScrollLeft && (
            <div className="hidden md:block absolute left-0 top-0 bottom-6 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          )}
          {canScrollRight && (
            <div className="hidden md:block absolute right-0 top-0 bottom-6 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          )}

          {/* Horizontal Scroll Carousel */}
          <div 
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-3 px-1 pb-6 scrollbar-none"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              touchAction: 'auto',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="w-[290px] sm:w-[350px] md:w-[390px] shrink-0 snap-start p-6 sm:p-7 rounded-3xl bg-[#FAF6F4] border border-[#EDE0DA] flex flex-col justify-between hover:shadow-sm transition"
              >
                <div>
                  {/* Stars and Event tag */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-[#D48B78] fill-[#D48B78]"
                        />
                      ))}
                    </div>
                    <span className="text-[11px] font-medium text-[#8F5244] bg-[#F7EAE5] px-2.5 py-0.5 rounded-full">
                      {t.event}
                    </span>
                  </div>

                  <Quote className="w-6 h-6 text-[#DFC8C2] mb-2" />

                  <p className="text-xs sm:text-sm text-[#594643] leading-relaxed italic">
                    "{t.text}"
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-[#EDE0DA] flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-[#3D2E2B]">
                      {t.name}
                    </h4>
                    <span className="text-[11px] text-[#8C7671]">
                      {t.neighborhood}
                    </span>
                  </div>
                  <span className="text-[10px] text-[#A8928E]">
                    {t.date}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Progress track */}
          <div className="w-full max-w-xs mx-auto h-1.5 bg-[#F2E8E4] rounded-full overflow-hidden mt-3">
            <div 
              className="h-full bg-[#A86454] rounded-full transition-all duration-300"
              style={{ width: `${Math.max(25, scrollProgress)}%` }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};
