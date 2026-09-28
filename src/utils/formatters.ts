import { CartItem, OrderDetails } from '../types';
import { CONFEITARIA_INFO } from '../data/sweets';

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

export function getMinEventDate(leadHours = 120): string {
  const date = new Date();
  const daysToAdd = leadHours >= 24 ? Math.max(5, Math.ceil(leadHours / 24)) : 5;
  date.setDate(date.getDate() + daysToAdd);
  return date.toISOString().split('T')[0];
}

export function generateWhatsAppMessage(
  items: CartItem[],
  orderDetails: OrderDetails,
  totalAmount: number
): string {
  const dateFormatted = orderDetails.eventDate
    ? orderDetails.eventDate.split('-').reverse().join('/')
    : 'A combinar';

  let msg = `✨ *Olá, Julia! Gostaria de fazer uma encomenda na Confeitaria.* ✨\n\n`;
  msg += `*DADOS DO CLIENTE:*\n`;
  msg += `👤 *Nome:* ${orderDetails.customerName || 'Não informado'}\n`;
  msg += `📱 *Telefone:* ${orderDetails.customerPhone || 'Não informado'}\n`;
  if (orderDetails.occasionType) {
    msg += `🎉 *Ocasião:* ${orderDetails.occasionType}\n`;
  }
  msg += `📅 *Data do Evento:* ${dateFormatted}\n`;
  if (orderDetails.eventTime) {
    msg += `⏰ *Horário Preferido:* ${orderDetails.eventTime}\n`;
  }
  msg += `📍 *Endereço de Entrega (BH):* ${orderDetails.address || 'A combinar via WhatsApp'}\n`;

  msg += `\n🍰 *ITENS DA ENCOMENDA:*\n`;
  items.forEach((item, index) => {
    msg += `\n${index + 1}. *${item.product.name}* (x${item.quantity})\n`;
    if (item.selectedPortion) {
      msg += `   • Tamanho/Aro: ${item.selectedPortion}\n`;
    }
    if (item.selectedSponge) {
      msg += `   • Massa: ${item.selectedSponge}\n`;
    }
    if (item.selectedFilling) {
      msg += `   • Recheio: ${item.selectedFilling}\n`;
    }
    if (item.selectedFlavor) {
      msg += `   • Seleção/Sabores: ${item.selectedFlavor}\n`;
    }
    if (item.cakeInscription) {
      msg += `   • Frase na Plaquinha: "${item.cakeInscription}"\n`;
    }
    if (item.selectedCandle && item.selectedCandle !== 'Sem vela comemorativa') {
      msg += `   • Vela: ${item.selectedCandle}\n`;
    }
    if (item.customNotes) {
      msg += `   • Detalhes Especiais: ${item.customNotes}\n`;
    }
    msg += `   • Subtotal: ${formatCurrency(item.finalPrice * item.quantity)}\n`;
  });

  msg += `\n💰 *VALOR TOTAL DOS PRODUTOS:* ${formatCurrency(totalAmount)}\n`;
  msg += `_(Taxa de entrega para Belo Horizonte a ser confirmada via WhatsApp)_\n`;

  if (orderDetails.paymentPreference) {
    msg += `💳 *Previsão de Pagamento:* ${orderDetails.paymentPreference}\n`;
  }

  if (orderDetails.giftCardMessage) {
    msg += `\n💌 *Cartão de Afeto Caligrafado (${orderDetails.giftCardType || 'Cartão Padrão'}):*\n"${orderDetails.giftCardMessage}"\n`;
  }

  if (orderDetails.generalNotes) {
    msg += `\n📝 *Observações Adicionais:*\n${orderDetails.generalNotes}\n`;
  }

  msg += `\n🧁 _"Doces artesanais, feitos com amor e ingredientes selecionados."_\n`;
  msg += `Aguardo a confirmação da disponibilidade na agenda. Muito obrigada!`;

  return msg;
}

export function getWhatsAppUrl(
  items: CartItem[],
  orderDetails: OrderDetails,
  totalAmount: number
): string {
  const message = generateWhatsAppMessage(items, orderDetails, totalAmount);
  return `https://wa.me/${CONFEITARIA_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
