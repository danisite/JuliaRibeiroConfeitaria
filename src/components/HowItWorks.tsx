import React from 'react';
import { ShoppingBag, Calendar, Truck, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { CONFEITARIA_INFO } from '../data/sweets';

interface HowItWorksProps {
  onOpenOrder: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenOrder }) => {
  const steps = [
    {
      number: '01',
      icon: ShoppingBag,
      title: 'Explore o Catálogo',
      description: 'Navegue pelos bolos artesanais, brigadeiros gourmet e sobremesas. Veja os preços e rendimentos com total transparência.',
    },
    {
      number: '02',
      icon: Calendar,
      title: 'Defina a Data do Evento',
      description: 'Informe a data desejada (mínimo de 5 dias de antecedência) e seu endereço para entrega em Belo Horizonte.',
    },
    {
      number: '03',
      icon: WhatsAppIcon,
      title: 'Envio pelo WhatsApp',
      description: 'Após a escolha do seu pedido nos envie uma mensagem no WhatsApp.',
    },
    {
      number: '04',
      icon: Truck,
      title: 'Confirmação & Produção',
      description: 'Confirmamos a data, orientamos o sinal de 50% e iniciamos a produção fresca para que tudo chegue impecável no seu momento.',
    },
  ];

  return (
    <section id="como-funciona" className="py-16 sm:py-20 bg-white border-t border-[#F2E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#A86454] bg-[#FBF0EB] px-3.5 py-1 rounded-full border border-[#F2DDD5]">
            Passo a Passo Simples
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl text-[#332624] font-normal">
            Como Funciona Sua Encomenda
          </h2>
          <p className="text-xs sm:text-sm text-[#735E5A] leading-relaxed">
            Criamos uma experiência prática e acolhedora para você planejar a mesa de doces perfeita sem complicações.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative p-6 rounded-3xl bg-[#FCFAF8] border border-[#F0E4DE] hover:border-[#DFC5BC] hover:bg-white transition-all shadow-2xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif-display text-3xl font-light text-[#C49B90]">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-[#FAF0EC] flex items-center justify-center text-[#9C5443]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif-display text-xl text-[#382A27] font-normal mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#6E5A56] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F5ECE7] flex items-center text-[11px] text-[#A86454] font-medium">
                  <span>Passo {idx + 1} de 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA below steps */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#FAF1ED] to-[#F5ECE6] border border-[#ECD9D1] text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="font-serif-display text-2xl text-[#3D2E2B] font-normal">
              Pronto para adoçar seu evento?
            </h4>
            <p className="text-xs text-[#735E5A] mt-1">
              Atendimento pelo WhatsApp com Julia Ribeiro Confeitaria
            </p>
          </div>

          <button
            onClick={onOpenOrder}
            className="px-6 py-3 rounded-full bg-[#3D2E2B] text-white text-xs font-semibold hover:bg-[#523F3C] transition shadow-sm flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Iniciar Encomenda Agora</span>
            <ArrowRight className="w-4 h-4 text-[#F2D8D0]" />
          </button>
        </div>

      </div>
    </section>
  );
};
