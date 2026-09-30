import { Product, Testimonial, FaqItem } from '../types';

export const CONFEITARIA_INFO = {
  name: 'Julia Ribeiro Confeitaria',
  shortName: 'Julia Ribeiro',
  tagline: 'Doces feitos com amor e ingredientes selecionados para adoçar seus momentos especiais.',
  location: 'Belo Horizonte - MG',
  neighborhoodsServiced: [
    'Savassi',
    'Lourdes',
    'Sion',
    'Funcionários',
    'Santo Agostinho',
    'Belvedere',
    'Mangabeiras',
    'Anchieta',
    'Cruzeiro',
    'Buritis',
    'Gutierrez',
    'Prado',
    'Pampulha',
    'Castelo',
    'Cidade Nova',
    'Vila da Serra (Nova Lima)'
  ],
  whatsappNumber: '553185735740',
  whatsappDisplay: '+55 31 8573-5740',
  instagram: '@juliiaribeiroconfeitaria',
  instagramUrl: 'https://www.instagram.com/juliiaribeiroconfeitaria?stkn=ajl5cHRodG1mMTFq',
  tiktok: '@juliaribeiroconfeitariaa',
  tiktokUrl: 'https://www.tiktok.com/@juliaribeiroconfeitariaa?lang=pt-BR&is_from_webapp=1&sender_device=mobile&sender_web_id=7687612204434884097',
  openingHours: 'Terça a Sábado: 09h às 18h | Domingo: 09h às 13h (atendimento e entregas agendadas)',
  minimumNoticeHours: 120, // 5 dias de antecedência
  minimumNoticeDays: 5,
};

export const CATEGORIES = [
  { id: 'todos', label: 'Todos os Doces', countDesc: 'Cardápio renovado' },
  { id: 'pudins', label: 'Pudins Artesanais', countDesc: 'Cremosos e aveludados' },
  { id: 'bolos', label: 'Bolos & Tortas Festivas', countDesc: 'Novas opções renovadas' },
  { id: 'doces-finos', label: 'Doces Finos & Brigadeiros', countDesc: 'Naturais e artesanais' },
  { id: 'tortas', label: 'Tortas & Cheesecakes', countDesc: 'Sobremesas geladas' },
  { id: 'sobremesas', label: 'Sobremesas na Taça', countDesc: 'Prontas para servir' },
  { id: 'presentes', label: 'Caixas de Afeto & Presentes', countDesc: 'Lembranças inesquecíveis' },
] as const;

export const DEFAULT_CANDLE_OPTIONS = [
  'Vela palito dourada clássica (cortesia)',
  'Vela palito rose gold metalizada',
  'Vela faiscante sparkler comemorativa (+R$ 15)',
  'Sem vela comemorativa'
];

export const ALL_PRODUCTS_LIBRARY: Product[] = [
  {
    id: 'pudim-tradicional',
    name: 'Pudim Tradicional',
    category: 'pudins',
    categoryName: 'Pudins Artesanais',
    price: 66,
    priceUnit: 'unidade aprox. 2kg',
    description: 'Pudim tradicional de leite condensado extremamente cremoso, lisinho e aveludado, com calda caramelizada dourada e brilhante na medida certa. Feito artesanalmente com ingredientes de alta qualidade.',
    ingredients: ['Leite condensado de primeira linha', 'Leite integral', 'Ovos frescos selecionados', 'Açúcar caramelizado artesanal'],
    yieldInfo: 'Aprox. 2 kg • Rende de 8 a 12 fatias generosas',
    leadTimeHours: 120,
    imageUrl: 'https://i.postimg.cc/Wz9mmRwB/Whats-App-Image-2026-09-30-at-16-41-16.jpg',
    tags: ['Mais Pedido', 'Cremoso', 'Aprox. 2kg'],
    isHighlight: true,
  },
  {
    id: 'pudim-de-ninho',
    name: 'Pudim de Ninho',
    category: 'pudins',
    categoryName: 'Pudins Artesanais',
    price: 73,
    priceUnit: 'unidade aprox. 2kg',
    description: 'Pudim especial de Leite Ninho ultra cremoso e macio, com calda de caramelo dourado artesanal que equilibra perfeitamente o sabor e a delicadeza do autêntico Ninho.',
    ingredients: ['Autêntico Leite Ninho', 'Leite condensado de primeira linha', 'Leite integral', 'Ovos frescos', 'Calda de caramelo artesanal'],
    yieldInfo: 'Aprox. 2 kg • Rende de 8 a 12 fatias generosas',
    leadTimeHours: 120,
    imageUrl: 'https://i.postimg.cc/NfMksMgm/Whats-App-Image-2026-09-30-at-16-41-16-(1).jpg',
    tags: ['Especial', 'Leite Ninho', 'Aprox. 2kg'],
    isHighlight: true,
  },
  {
    id: 'pudim-de-chocolate',
    name: 'Pudim de Chocolate',
    category: 'pudins',
    categoryName: 'Pudins Artesanais',
    price: 70,
    priceUnit: 'unidade aprox. 2kg',
    description: 'Pudim de chocolate aveludado e irresistível, feito com cacau nobre selecionado, textura cremosa e calda de caramelo brilhante.',
    ingredients: ['Cacau nobre selecionado', 'Leite condensado de primeira linha', 'Leite integral', 'Ovos frescos', 'Calda de caramelo artesanal'],
    yieldInfo: 'Aprox. 2 kg • Rende de 8 a 12 fatias generosas',
    leadTimeHours: 120,
    imageUrl: 'https://i.postimg.cc/05ZC1m14/Whats-App-Image-2026-09-30-at-16-41-16-(2).jpg',
    tags: ['Chocolate', 'Cremoso', 'Aprox. 2kg'],
    isHighlight: true,
  },
  {
    id: 'pudim-de-coco',
    name: 'Pudim de Coco',
    category: 'pudins',
    categoryName: 'Pudins Artesanais',
    price: 68,
    priceUnit: 'unidade aprox. 2kg',
    description: 'Receita caseira e delicada com leite de coco e coco ralado selecionado, textura aveludada e calda dourada de caramelo artesanal.',
    ingredients: ['Leite de coco', 'Coco ralado selecionado', 'Leite condensado de primeira linha', 'Leite integral', 'Ovos frescos', 'Calda caramelizada'],
    yieldInfo: 'Aprox. 2 kg • Rende de 8 a 12 fatias generosas',
    leadTimeHours: 120,
    imageUrl: 'https://i.postimg.cc/QMLQJJcC/Whats-App-Image-2026-09-30-at-16-41-15.jpg',
    tags: ['Coco', 'Sabor Suave', 'Aprox. 2kg'],
    isHighlight: true,
  }
];

// Active cardápio products
export const PRODUCTS: Product[] = ALL_PRODUCTS_LIBRARY;

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Camila Guimarães',
    neighborhood: 'Savassi, BH',
    event: 'Aniversário de 30 anos',
    text: 'O bolo de pistache com framboesas foi a grande estrela da minha comemoração! Não é aquele doce enjoativo, você sente o sabor real de cada ingrediente, a textura aveludada... e a entrega foi pontualíssima. Todo mundo pediu o contato da Julia!',
    rating: 5,
    date: 'Setembro/2026'
  },
  {
    id: '2',
    name: 'Mariana & Lucas Duarte',
    neighborhood: 'Lourdes, BH',
    event: 'Mesa de Doces de Casamento',
    text: 'Encomendamos 300 doces finos e o bolo para o nosso mini wedding em BH. As forminhas vieram impecáveis nas cores que pedimos e os convidados comeram rezando, principalmente o camafeu e o brigadeiro com flor de sal. Atendimento impecável pelo WhatsApp!',
    rating: 5,
    date: 'Agosto/2026'
  },
  {
    id: '3',
    name: 'Rodrigo Alvarenga',
    neighborhood: 'Buritis, BH',
    event: 'Almoço de Família & Dia das Mães',
    text: 'A taça da felicidade de Ninho e morangos salvou o almoço de família. Chegou geladinha, com morangos frescos e crocantes, sem soltar água. A facilidade de montar o pedido e receber pelo WhatsApp com tudo discriminado passa muita segurança.',
    rating: 5,
    date: 'Julho/2026'
  },
  {
    id: '4',
    name: 'Beatriz Vasconcelos',
    neighborhood: 'Pampulha, BH',
    event: 'Presente Surpresa de Aniversário',
    text: 'Pedi a Caixa Afeto com mini bolo e os brigadeiros para entregar no trabalho da minha melhor amiga. A Julia teve o carinho de escrever à mão a mensagem que mandei. Um capricho e sensibilidade que raramente se vê!',
    rating: 5,
    date: 'Agosto/2026'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'Qual é a antecedência mínima necessária para fazer uma encomenda?',
    answer: 'Nosso prazo de antecedência mínima para qualquer encomenda é de 5 dias. Esse intervalo é indispensável para planejarmos a produção artesanal sob demanda, selecionar os ingredientes naturais e frescos e preparar cada bolo e doce com o mais alto padrão de qualidade e carinho. Para casamentos e grandes eventos em Belo Horizonte, sugerimos reservar a data com ainda mais antecedência.'
  },
  {
    question: 'Como funciona a entrega em Belo Horizonte e Região Metropolitana?',
    answer: 'Atendemos Belo Horizonte e região com transporte climatizado e suportes nivelados para garantir que seu bolo e doces cheguem perfeitos até você. A taxa de entrega é combinada via WhatsApp conforme sua localização.'
  },
  {
    question: 'Como finalizo o pedido após montar os itens no site?',
    answer: 'Ao clicar no botão "Enviar Pedido via WhatsApp" no carrinho, o site organiza automaticamente todos os itens escolhidos, quantidades, valores, sua data e dados de entrega em uma mensagem bonita e estruturada. Ao abrir o WhatsApp, a mensagem já estará pronta — basta enviar para nossa equipe de atendimento, que confirmará a disponibilidade e dados de pagamento.'
  },
  {
    question: 'Quais são as formas de pagamento aceitas?',
    answer: 'Trabalhamos com sinal de 50% no momento da confirmação da encomenda (via Pix ou transferência) para reserva da data e compra dos ingredientes frescos, e o restante (50%) antes do despacho da entrega. Aceitamos também cartão de crédito com link de pagamento seguro.'
  },
  {
    question: 'Vocês personalizam frases e temas no bolo?',
    answer: 'Sim! Nossos bolos podem receber plaquinha de chocolate personalizada com o nome ou frase do aniversariante, velas artesanais e topo com flores naturais higienizadas. Basta preencher as observações no carrinho ou alinhar conosco no WhatsApp.'
  },
  {
    question: 'Como devo transportar e conservar o bolo no clima de BH?',
    answer: 'O bolo deve ser transportado sempre no chão do carro do lado do passageiro (nunca no colo ou no banco, que são inclinados) com o ar-condicionado ligado. Ao chegar no local do evento, mantenha refrigerado na geladeira até 30 a 40 minutos antes de servir, garantindo a temperatura perfeita de degustação.'
  }
];
