export type CategoryId = 
  | 'todos'
  | 'pudins'
  | 'bolos'
  | 'doces-finos'
  | 'tortas'
  | 'sobremesas'
  | 'presentes';

export interface Product {
  id: string;
  name: string;
  category: CategoryId;
  categoryName: string;
  price: number;
  priceUnit: string;
  description: string;
  ingredients: string[];
  yieldInfo: string;
  leadTimeHours: number;
  imageUrl: string;
  tags: string[];
  isHighlight?: boolean;
  flavors?: string[];
  spongeOptions?: string[];
  fillingOptions?: string[];
  candleOptions?: string[];
  portionOptions?: { label: string; priceMultiplier: number; description: string }[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedFlavor?: string;
  selectedSponge?: string;
  selectedFilling?: string;
  selectedCandle?: string;
  cakeInscription?: string;
  customNotes?: string;
  selectedPortion?: string;
  finalPrice: number;
}

export interface OrderDetails {
  customerName: string;
  customerPhone: string;
  occasionType: string;
  eventDate: string;
  eventTime: string;
  deliveryMethod: 'retirada' | 'entrega';
  neighborhood: string;
  address: string;
  giftCardType?: string;
  giftCardMessage: string;
  paymentPreference?: string;
  generalNotes: string;
}

export interface Testimonial {
  id: string;
  name: string;
  neighborhood: string;
  text: string;
  event: string;
  rating: number;
  date: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

