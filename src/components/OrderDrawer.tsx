import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  Phone, 
  Heart, 
  Copy, 
  Check, 
  AlertCircle,
  Sparkles,
  ShoppingBag,
  CreditCard,
  Flame,
  Truck
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { CartItem, OrderDetails } from '../types';
import { CONFEITARIA_INFO } from '../data/sweets';
import { formatCurrency, generateWhatsAppMessage, getMinEventDate } from '../utils/formatters';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const minDate = getMinEventDate(CONFEITARIA_INFO.minimumNoticeHours);

  const [orderDetails, setOrderDetails] = useState<OrderDetails>({
    customerName: '',
    customerPhone: '',
    occasionType: 'Aniversário',
    eventDate: minDate,
    eventTime: '14h às 16h (Tarde)',
    deliveryMethod: 'entrega',
    neighborhood: '',
    address: '',
    giftCardType: 'Cartão Parabéns & Felicidades',
    giftCardMessage: '',
    paymentPreference: 'Pix (50% de sinal para reserva da data)',
    generalNotes: '',
  });

  const [showPreview, setShowPreview] = useState(false);
  const [copied, setCopied] = useState(false);
  const [validationError, setValidationError] = useState('');

  const totalAmount = items.reduce(
    (sum, item) => sum + item.finalPrice * item.quantity,
    0
  );

  const handleInputChange = (
    field: keyof OrderDetails,
    value: string
  ) => {
    setOrderDetails((prev) => ({ ...prev, [field]: value }));
    if (validationError) setValidationError('');
  };

  const validateForm = () => {
    if (!orderDetails.customerName.trim()) {
      setValidationError('Por favor, informe seu nome para o atendimento.');
      return false;
    }
    if (!orderDetails.customerPhone.trim()) {
      setValidationError('Por favor, informe seu número de WhatsApp / telefone.');
      return false;
    }
    if (!orderDetails.eventDate) {
      setValidationError('Por favor, selecione a data desejada para o evento ou entrega.');
      return false;
    }
    if (!orderDetails.address.trim()) {
      setValidationError('Por favor, informe seu endereço ou bairro para entrega em Belo Horizonte.');
      return false;
    }
    return true;
  };

  const handleSendWhatsApp = () => {
    if (items.length === 0) return;
    if (!validateForm()) return;

    const message = generateWhatsAppMessage(items, orderDetails, totalAmount);
    const url = `https://wa.me/${CONFEITARIA_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopyMessage = () => {
    if (items.length === 0) return;
    const message = generateWhatsAppMessage(items, orderDetails, totalAmount);
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in">
      <div 
        className="w-full max-w-xl bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-5 border-b border-[#F2E5E0] bg-[#FAF5F2] flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FAF0EC] flex items-center justify-center text-[#A86454] border border-[#ECDCD5]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-display text-lg text-[#332624] font-semibold leading-tight">
                Sua Encomenda de Afeto
              </h3>
              <span className="text-xs text-[#8C7671]">
                {items.length} {items.length === 1 ? 'item selecionado' : 'itens selecionados'}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white text-[#5C4744] transition cursor-pointer"
            aria-label="Fechar carrinho"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-5 sm:p-6 space-y-6 flex-1 overflow-y-auto">
          
          {/* Empty State */}
          {items.length === 0 ? (
            <div className="text-center py-16 px-4 space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#FAF0EC] flex items-center justify-center mx-auto text-[#B86855]">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <h4 className="font-serif-display text-xl text-[#3D2E2B]">
                Sua encomenda está vazia
              </h4>
              <p className="text-xs text-[#7A6460] max-w-xs mx-auto leading-relaxed">
                Navegue pelo nosso catálogo de doces e adicione seus bolos, brigadeiros ou sobremesas favoritas para montar seu pedido.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-5 py-2.5 rounded-full bg-[#3D2E2B] text-white text-xs font-semibold hover:bg-[#523F3C] transition cursor-pointer"
              >
                Explorar Catálogo de Doces
              </button>
            </div>
          ) : (
            <>
              {/* Selected Items List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A716C]">
                    Doces Selecionados
                  </h4>
                  <button
                    onClick={onClearCart}
                    className="text-[11px] text-[#A86454] hover:underline cursor-pointer"
                  >
                    Esvaziar
                  </button>
                </div>

                <div className="divide-y divide-[#F5ECE8] border border-[#F2E5DF] rounded-2xl overflow-hidden bg-white">
                  {items.map((item, index) => (
                    <div key={`${item.product.id}-${index}`} className="p-3.5 sm:p-4 flex gap-3 sm:gap-4 items-start">
                      <img
                        src={item.product.imageUrl}
                        alt={item.product.name}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover shrink-0 bg-[#FAF1ED] border border-[#F2E5DF]"
                      />
                      
                      <div className="flex-1 min-w-0 space-y-1">
                        <h5 className="text-xs sm:text-sm font-semibold text-[#3D2E2B]">
                          {item.product.name}
                        </h5>
                        
                        {item.selectedPortion && (
                          <span className="text-[11px] text-[#8C7671] block">
                            • Tamanho: <strong className="text-[#5C4744] font-medium">{item.selectedPortion}</strong>
                          </span>
                        )}
                        {item.selectedSponge && (
                          <span className="text-[11px] text-[#8C7671] block">
                            • Massa: <span className="text-[#5C4744]">{item.selectedSponge}</span>
                          </span>
                        )}
                        {item.selectedFilling && (
                          <span className="text-[11px] text-[#8C7671] block">
                            • Recheio: <span className="text-[#5C4744]">{item.selectedFilling}</span>
                          </span>
                        )}
                        {item.selectedFlavor && (
                          <span className="text-[11px] text-[#8C7671] block">
                            • Seleção: <span className="text-[#5C4744]">{item.selectedFlavor}</span>
                          </span>
                        )}
                        {item.cakeInscription && (
                          <span className="text-[11px] text-[#A86454] block">
                            • Plaquinha: "{item.cakeInscription}"
                          </span>
                        )}
                        {item.selectedCandle && item.selectedCandle !== 'Sem vela comemorativa' && (
                          <span className="text-[10px] text-[#A86454] block">
                            • Vela: {item.selectedCandle}
                          </span>
                        )}
                        {item.customNotes && (
                          <span className="text-[10px] text-[#7A6460] italic block">
                            Obs: "{item.customNotes}"
                          </span>
                        )}

                        <div className="flex items-center justify-between mt-2 pt-1 border-t border-[#F8EFEA]">
                          <span className="text-xs font-bold text-[#3D2E2B]">
                            {formatCurrency(item.finalPrice * item.quantity)}
                          </span>

                          <div className="flex items-center border border-[#E2D2CB] rounded-lg p-0.5 bg-[#FAF5F2]">
                            <button
                              onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                              className="p-1 rounded hover:bg-white text-[#523F3C] transition cursor-pointer"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-6 text-center text-xs font-semibold text-[#3D2E2B]">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                              className="p-1 rounded hover:bg-white text-[#523F3C] transition cursor-pointer"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => onRemoveItem(index)}
                        className="p-1.5 text-[#A8928E] hover:text-[#B84535] transition cursor-pointer"
                        title="Remover item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Antecedence reminder alert */}
              <div className="p-3.5 rounded-2xl bg-[#FFF7F2] border border-[#F5DFD5] flex items-start gap-2.5 text-xs text-[#8A5B4F]">
                <Clock className="w-4 h-4 text-[#C47764] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block">Produção Artesanal sob Encomenda em BH:</span>
                  Nossos bolos e doces são preparados com ingredientes nobres frescos para o seu evento. Pedidos com no mínimo 5 dias de antecedência garantem vaga na nossa agenda.
                </div>
              </div>

              {/* Customer & Event Details Form */}
              <div className="space-y-4 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A716C] flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#B86855]" />
                  Seus Dados para o Atendimento
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-medium text-[#6B5550] block mb-1">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      value={orderDetails.customerName}
                      onChange={(e) => handleInputChange('customerName', e.target.value)}
                      placeholder="Ex: Mariana Silva"
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#E5D7D1] focus:ring-2 focus:ring-[#D48B78] focus:outline-none bg-[#FAF8F6]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-medium text-[#6B5550] block mb-1">
                      Seu WhatsApp / Telefone *
                    </label>
                    <input
                      type="tel"
                      value={orderDetails.customerPhone}
                      onChange={(e) => handleInputChange('customerPhone', e.target.value)}
                      placeholder="(31) 98765-4321"
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#E5D7D1] focus:ring-2 focus:ring-[#D48B78] focus:outline-none bg-[#FAF8F6]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-medium text-[#6B5550] block mb-1">
                      Data do Evento / Entrega *
                    </label>
                    <input
                      type="date"
                      min={minDate}
                      value={orderDetails.eventDate}
                      onChange={(e) => handleInputChange('eventDate', e.target.value)}
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#E5D7D1] focus:ring-2 focus:ring-[#D48B78] focus:outline-none bg-[#FAF8F6]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-medium text-[#6B5550] block mb-1">
                      Horário Preferido
                    </label>
                    <select
                      value={orderDetails.eventTime}
                      onChange={(e) => handleInputChange('eventTime', e.target.value)}
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#E5D7D1] focus:ring-2 focus:ring-[#D48B78] focus:outline-none bg-[#FAF8F6]"
                    >
                      <option value="10h às 12h (Manhã)">10h às 12h (Manhã)</option>
                      <option value="12h às 14h (Almoço)">12h às 14h (Almoço)</option>
                      <option value="14h às 16h (Tarde)">14h às 16h (Tarde)</option>
                      <option value="16h às 18h (Fim de tarde)">16h às 18h (Fim de tarde)</option>
                      <option value="A combinar no WhatsApp">A combinar no WhatsApp</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-medium text-[#6B5550] block mb-1">
                      Tipo de Celebração
                    </label>
                    <select
                      value={orderDetails.occasionType}
                      onChange={(e) => handleInputChange('occasionType', e.target.value)}
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#E5D7D1] focus:ring-2 focus:ring-[#D48B78] focus:outline-none bg-[#FAF8F6]"
                    >
                      <option value="Aniversário">Aniversário</option>
                      <option value="Aniversário Infantil">Aniversário Infantil</option>
                      <option value="Casamento / Mini Wedding">Casamento / Mini Wedding</option>
                      <option value="Noivado / Bodas">Noivado / Bodas</option>
                      <option value="Chá de Bebê / Revelação">Chá de Bebê / Revelação</option>
                      <option value="Mêsversário">Mêsversário</option>
                      <option value="Almoço de Família / Domingo">Almoço de Família / Domingo</option>
                      <option value="Formatura / Conquista">Formatura / Conquista</option>
                      <option value="Presente Especial com Afeto">Presente Especial com Afeto</option>
                      <option value="Outro Motivo">Outro Motivo</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-medium text-[#6B5550] block mb-1">
                      Preferência de Pagamento
                    </label>
                    <select
                      value={orderDetails.paymentPreference}
                      onChange={(e) => handleInputChange('paymentPreference', e.target.value)}
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#E5D7D1] focus:ring-2 focus:ring-[#D48B78] focus:outline-none bg-[#FAF8F6]"
                    >
                      <option value="Pix (50% de sinal para reserva da data)">Pix (50% de sinal para reserva)</option>
                      <option value="Cartão de Crédito (Link de pagamento)">Cartão de Crédito (Link online)</option>
                      <option value="Alinhar detalhes no WhatsApp">Alinhar detalhes no WhatsApp</option>
                    </select>
                  </div>
                </div>

                {/* Delivery Information in BH */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between">
                    <label className="text-[11px] font-medium text-[#6B5550] block">
                      Endereço de Entrega em Belo Horizonte *
                    </label>
                    <span className="text-[10px] text-[#A86454] font-medium flex items-center gap-1">
                      <Truck className="w-3.5 h-3.5" />
                      Entrega Climatizada
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={orderDetails.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="Bairro, rua, número e complemento em BH"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E5D7D1] focus:ring-2 focus:ring-[#D48B78] focus:outline-none bg-[#FAF8F6]"
                    />
                    <p className="text-[10px] text-[#8C7671] leading-relaxed">
                      Entregas pontuais e climatizadas em Belo Horizonte e região. A taxa de entrega é combinada via WhatsApp conforme sua localização.
                    </p>
                  </div>
                </div>

                {/* Hand-written Gift Card */}
                <div className="pt-2 space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-[11px] font-medium text-[#6B5550] flex items-center gap-1">
                      <Heart className="w-3 h-3 text-[#D48B78]" />
                      Cartão de Afeto Escrito à Mão (Cortesia)
                    </label>
                    <span className="text-[10px] text-[#A8928E]">(opcional)</span>
                  </div>

                  <div className="flex gap-2 overflow-x-auto pb-1.5 scrollbar-none snap-x">
                    {[
                      'Cartão Parabéns & Felicidades',
                      'Cartão Com Afeto & Amor',
                      'Cartão de Gratidão',
                      'Cartão Delicado Neutro'
                    ].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => handleInputChange('giftCardType', type)}
                        className={`px-3 py-2 rounded-xl border text-left text-[11px] whitespace-nowrap shrink-0 snap-start transition cursor-pointer ${
                          orderDetails.giftCardType === type
                            ? 'bg-[#F9ECE7] border-[#D48B78] text-[#3D2E2B] font-medium'
                            : 'bg-[#FAF8F6] border-[#E8DDD8] text-[#7A6460]'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>

                  <textarea
                    rows={2}
                    value={orderDetails.giftCardMessage}
                    onChange={(e) => handleInputChange('giftCardMessage', e.target.value)}
                    placeholder="Escreva aqui a dedicatória que escreveremos à mão no cartão..."
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#E5D7D1] focus:ring-2 focus:ring-[#D48B78] focus:outline-none bg-[#FAF8F6]"
                  />
                </div>

                {/* General notes */}
                <div>
                  <label className="text-[11px] font-medium text-[#6B5550] block mb-1">
                    Observações Adicionais ou Alergias
                  </label>
                  <input
                    type="text"
                    value={orderDetails.generalNotes}
                    onChange={(e) => handleInputChange('generalNotes', e.target.value)}
                    placeholder="Ex: sem castanhas, preferência por entrega até 15h, etc."
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#E5D7D1] focus:ring-2 focus:ring-[#D48B78] focus:outline-none bg-[#FAF8F6]"
                  />
                </div>
              </div>

              {/* Validation error display */}
              {validationError && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{validationError}</span>
                </div>
              )}

              {/* WhatsApp Message Preview Toggle */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setShowPreview(!showPreview)}
                  className="text-xs text-[#8A716C] hover:text-[#3D2E2B] underline flex items-center gap-1 cursor-pointer"
                >
                  <span>{showPreview ? 'Ocultar mensagem formatada' : 'Pré-visualizar texto que será enviado no WhatsApp'}</span>
                </button>

                {showPreview && (
                  <div className="mt-3 p-3.5 rounded-xl bg-[#FAF5F2] border border-[#ECDCD5] text-[11px] text-[#4A3936] font-mono whitespace-pre-wrap leading-relaxed relative">
                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="absolute top-2 right-2 p-1.5 rounded-lg bg-white shadow-xs border border-[#E2D2CB] text-[#5C4744] hover:bg-[#F9ECE7] transition cursor-pointer"
                      title="Copiar texto"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                    {generateWhatsAppMessage(items, orderDetails, totalAmount)}
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Footer Actions */}
        {items.length > 0 && (
          <div className="p-5 border-t border-[#F2E5E0] bg-[#FAF8F6] space-y-3 sticky bottom-0">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs text-[#8C7671] block">Total dos Produtos:</span>
                <span className="font-serif-display text-2xl text-[#3D2E2B] font-semibold">
                  {formatCurrency(totalAmount)}
                </span>
              </div>
              <span className="text-[11px] text-[#8C7671] text-right">
                Taxa de entrega sob consulta
              </span>
            </div>

            <button
              id="send-whatsapp-order-drawer-btn"
              type="button"
              onClick={handleSendWhatsApp}
              className="w-full py-3.5 rounded-full bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20BE5B] transition shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
              <span>Enviar Encomenda para Julia Ribeiro Confeitaria</span>
            </button>

            <p className="text-[10px] text-center text-[#8C7671]">
              Ao clicar, o WhatsApp abrirá com sua mensagem preenchida para confirmação direta com a confeitaria.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
