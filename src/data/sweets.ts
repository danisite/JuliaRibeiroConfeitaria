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
    id: 'bolo-ninho-morangos-silvestres',
    name: 'Bolo Ninho com Morangos Silvestres & Chantilly de Baunilha',
    category: 'bolos',
    categoryName: 'Bolos & Tortas Festivas',
    price: 195,
    priceUnit: 'a partir de 10 fatias',
    description: 'Nosso clássico mais celebrado em versão renovada: massa fofa umedecida com calda aromática de baunilha, recheio duplo de brigadeiro aerado de Ninho e morangos frescos picados na hora. Cobertura sedosa de chantininho aveludado e cascata de frutas silvestres no topo.',
    ingredients: ['Ingredientes naturais e frescos', 'Morangos selecionados frescos', 'Leite Ninho integral', 'Manteiga pura de primeira linha', 'Ovos frescos'],
    yieldInfo: 'A partir de 1,6 kg (serve 10 a 12 fatias fartas)',
    leadTimeHours: 120,
    imageUrl: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=900&q=80',
    tags: ['Mais Pedido', 'Frutas Frescas', 'Aniversário'],
    isHighlight: true,
    spongeOptions: [
      'Pão de Ló Amanteigado com Baunilha Natural',
      'Chiffon de Chocolate 50%',
      'Massa Mista (Camadas intercaladas de baunilha e cacau)'
    ],
    fillingOptions: [
      'Duplo Ninho com Morangos Frescos',
      'Ninho Cremoso + Brigadeiro Tradicional',
      'Ninho com Geleia Artesanal de Morango (sem sementes)'
    ],
    candleOptions: DEFAULT_CANDLE_OPTIONS,
    portionOptions: [
      { label: 'Bento Cake Afeto (10cm • 2 a 4 fatias • ~500g)', priceMultiplier: 0.55, description: 'Perfeito para celebrar a dois ou presentear' },
      { label: 'Aro 15cm (10 a 12 fatias • ~1.6kg)', priceMultiplier: 1, description: 'Ideal para almoços e pequenas reuniões' },
      { label: 'Aro 20cm (18 a 22 fatias • ~2.8kg)', priceMultiplier: 1.55, description: 'O tamanho clássico para festas de aniversário' },
      { label: 'Aro 25cm (28 a 32 fatias • ~4.0kg)', priceMultiplier: 2.1, description: 'Para comemorações com muitos convidados' },
      { label: 'Dois Andares Festivo (38 a 42 fatias • ~5.5kg)', priceMultiplier: 2.9, description: 'Bolo estruturado profissional para casamentos e formaturas' }
    ]
  },
  {
    id: 'bolo-trufado-praline',
    name: 'Bolo Trufado Intenso 70% com Praliné Crocante de Avelãs',
    category: 'bolos',
    categoryName: 'Bolos & Tortas Festivas',
    price: 220,
    priceUnit: 'a partir de 10 fatias',
    description: 'Para verdadeiros apaixonados por chocolate intenso: massa chiffon de cacau puro super úmida, recheio de trufa cremosa ao chocolate 70% amargo com toque sutil de cacau natural e crocante caseiro de avelãs tostadas com flor de sal.',
    ingredients: ['Ingredientes naturais e frescos', 'Cacau 100% puro', 'Avelãs tostadas', 'Creme de leite fresco', 'Chocolate meio amargo'],
    yieldInfo: 'A partir de 1,7 kg (serve 10 a 12 fatias)',
    leadTimeHours: 120,
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80',
    tags: ['Chocolate Intenso', 'Cacau Puro', 'Novo'],
    isHighlight: true,
    spongeOptions: [
      'Chiffon Intenso Cacau 100%',
      'Massa Aveludada de Nozes e Cacau'
    ],
    fillingOptions: [
      'Trufa Intensa 70% com Praliné de Avelãs Crocantes',
      'Duo de Chocolate (Brigadeiro Cremoso + Trufa Branca com Baunilha)'
    ],
    candleOptions: DEFAULT_CANDLE_OPTIONS,
    portionOptions: [
      { label: 'Bento Cake Afeto (10cm • 2 a 4 fatias)', priceMultiplier: 0.58, description: 'Versão charmosa individual' },
      { label: 'Aro 15cm (10 a 12 fatias)', priceMultiplier: 1, description: 'Tamanho padrão comemoração familiar' },
      { label: 'Aro 20cm (18 a 22 fatias)', priceMultiplier: 1.55, description: 'Tamanho festa' },
      { label: 'Aro 25cm (28 a 32 fatias)', priceMultiplier: 2.15, description: 'Para grandes celebrações' }
    ]
  },
  {
    id: 'bolo-pistache-framboesa',
    name: 'Bolo Sublime de Pistache Puro & Coulis de Framboesas',
    category: 'bolos',
    categoryName: 'Bolos & Tortas Festivas',
    price: 245,
    priceUnit: 'a partir de 10 fatias',
    description: 'Nossa criação artesanal mais refinada: massa enriquecida com farinha artesanal de pistache cru, recheio sedoso de brigadeiro de pistache 100% puro e redução caseira de framboesas frescas para equilibrar com elegância e acidez precisa.',
    ingredients: ['Ingredientes naturais e frescos', 'Pasta pura de pistache 100%', 'Framboesas frescas', 'Manteiga pura fresca'],
    yieldInfo: 'A partir de 1,7 kg (10 a 12 fatias)',
    leadTimeHours: 120,
    imageUrl: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=900&q=80',
    tags: ['Confeitaria Artesanal', 'Pistache Puro', 'Sofisticado'],
    isHighlight: true,
    spongeOptions: [
      'Massa Aveludada de Pistache Puro',
      'Pão de Ló Suave de Amêndoas e Baunilha'
    ],
    fillingOptions: [
      'Brigadeiro de Pistache 100% com Coulis de Framboesa',
      'Double Pistache (Sem fruta ácida)'
    ],
    candleOptions: DEFAULT_CANDLE_OPTIONS,
    portionOptions: [
      { label: 'Bento Cake Afeto (10cm • 2 a 4 fatias)', priceMultiplier: 0.6, description: 'Para ocasiões românticas e aniversários íntimos' },
      { label: 'Aro 15cm (10 a 12 fatias)', priceMultiplier: 1, description: 'Serve até 12 convidados com requinte' },
      { label: 'Aro 20cm (18 a 22 fatias)', priceMultiplier: 1.58, description: 'Mesa de bolo sofisticada' },
      { label: 'Dois Andares Noiva (35 fatias)', priceMultiplier: 2.7, description: 'Montagem especial decorada com flores e pistaches laminados' }
    ]
  },
  {
    id: 'bolo-cenoura-afetivo-vulcao',
    name: 'Bolo de Cenoura com Brigadeiro Vulcão Artesanal',
    category: 'bolos',
    categoryName: 'Bolos & Tortas Festivas',
    price: 165,
    priceUnit: 'aro 20cm • serve 14 a 16 fatias',
    description: 'O sabor da infância brasileira com toque artesanal e ingredientes naturais e frescos: massa ultraleve, dourada e úmida feita com cenouras frescas, coberta por farta camada de brigadeiro artesanal de panela que derrama suavemente ao cortar.',
    ingredients: ['Ingredientes naturais e frescos', 'Cenouras frescas de pequenos produtores', 'Leite condensado de qualidade', 'Cacau puro'],
    yieldInfo: 'Aproximadamente 2,1 kg (14 a 16 fatias fartas)',
    leadTimeHours: 120,
    imageUrl: 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?auto=format&fit=crop&w=900&q=80',
    tags: ['Sabor de Infância', 'Muito Chocolate', 'Favorito'],
    isHighlight: false,
    spongeOptions: ['Massa Tradicional de Cenoura Fresca'],
    fillingOptions: ['Brigadeiro Tradicional de Panela', 'Brigadeiro Meio Amargo'],
    candleOptions: DEFAULT_CANDLE_OPTIONS,
    portionOptions: [
      { label: 'Bolo Vulcão Aro 20cm (14 a 16 fatias)', priceMultiplier: 1, description: 'Tamanho padrão com fartura de brigadeiro no centro' },
      { label: 'Bolo Vulcão Aro 24cm (22 a 24 fatias)', priceMultiplier: 1.45, description: 'Tamanho família' }
    ]
  },
  {
    id: 'bolo-nozes-doce-de-leite-vicosa',
    name: 'Bolo Nozes Nobres com Doce de Leite Viçosa & Baba de Moça',
    category: 'bolos',
    categoryName: 'Bolos & Tortas Festivas',
    price: 215,
    priceUnit: 'a partir de 10 fatias',
    description: 'A tradição mineira em sua máxima elegância: massa fofíssima preparada com nozes mariposas finamente trituradas, recheada com o premiado Doce de Leite Viçosa artesanal e delicada baba de moça aveludada. Finalizado com crocante de nozes caramelizadas.',
    ingredients: ['Ingredientes naturais e frescos', 'Nozes selecionadas', 'Doce de Leite Viçosa original', 'Gemas caipiras peneiradas'],
    yieldInfo: 'A partir de 1,8 kg (10 a 12 fatias)',
    leadTimeHours: 120,
    imageUrl: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=80',
    tags: ['Tradição Mineira', 'Doce de Leite Viçosa', 'Casamentos'],
    isHighlight: false,
    spongeOptions: [
      'Pão de Ló Amanteigado com Farinha de Nozes',
      'Massa Tradicional Branca com Toque de Especiarias'
    ],
    fillingOptions: [
      'Doce de Leite Viçosa + Baba de Moça + Nozes Picadas',
      'Doce de Leite Viçosa Duplo com Nozes'
    ],
    candleOptions: DEFAULT_CANDLE_OPTIONS,
    portionOptions: [
      { label: 'Aro 15cm (10 a 12 fatias)', priceMultiplier: 1, description: 'Ideal para almoços festivos' },
      { label: 'Aro 20cm (18 a 22 fatias)', priceMultiplier: 1.5, description: 'Tamanho clássico' },
      { label: 'Aro 25cm (28 a 32 fatias)', priceMultiplier: 2.1, description: 'Tamanho grande' }
    ]
  },
  {
    id: 'bolo-red-velvet-imperial',
    name: 'Red Velvet com Frutas Vermelhas & Cream Cheese',
    category: 'bolos',
    categoryName: 'Bolos & Tortas Festivas',
    price: 210,
    priceUnit: 'a partir de 10 fatias',
    description: 'Massa aveludada com cor intensa e textura incrivelmente macia, umedecida e combinada com recheio cremoso e suave de cream cheese frosting e geleia caseira de frutas vermelhas.',
    ingredients: ['Ingredientes naturais e frescos', 'Manteiga pura', 'Frutas vermelhas frescas', 'Cream cheese'],
    yieldInfo: 'A partir de 1,7 kg (10 a 12 fatias)',
    leadTimeHours: 120,
    imageUrl: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&w=900&q=80',
    tags: ['Red Velvet', 'Frutas Vermelhas', 'Elegante'],
    isHighlight: false,
    spongeOptions: ['Massa Red Velvet Tradicional Aveludada'],
    fillingOptions: [
      'Cream Cheese Frosting + Geleia Artesanal de Frutas Vermelhas',
      'Cream Cheese Duplo Tradicional'
    ],
    candleOptions: DEFAULT_CANDLE_OPTIONS,
    portionOptions: [
      { label: 'Bento Cake Afeto (10cm • 2 a 4 fatias)', priceMultiplier: 0.58, description: 'Versão charmosa' },
      { label: 'Aro 15cm (10 a 12 fatias)', priceMultiplier: 1, description: 'Tamanho padrão' },
      { label: 'Aro 20cm (18 a 22 fatias)', priceMultiplier: 1.55, description: 'Tamanho festa' }
    ]
  },
  {
    id: 'bolo-churros-artesanal',
    name: 'Bolo de Canela & Farto Doce de Leite Viçosa',
    category: 'bolos',
    categoryName: 'Bolos & Tortas Festivas',
    price: 180,
    priceUnit: 'a partir de 10 fatias',
    description: 'Nossa releitura do churros brasileiro: massa aerada perfumada com canela em pó moída na hora, recheada e coberta generosamente com doce de leite Viçosa cremoso.',
    ingredients: ['Ingredientes naturais e frescos', 'Doce de Leite Viçosa autêntico', 'Canela em pó moída', 'Manteiga pura'],
    yieldInfo: 'A partir de 1,7 kg (serve 10 a 12 fatias)',
    leadTimeHours: 120,
    imageUrl: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=900&q=80',
    tags: ['Doce de Leite Viçosa', 'Aconchego Mineiro'],
    isHighlight: false,
    spongeOptions: ['Massa Amanteigada com Canela Pura'],
    fillingOptions: ['Doce de Leite Viçosa Artesanal Farto'],
    candleOptions: DEFAULT_CANDLE_OPTIONS,
    portionOptions: [
      { label: 'Aro 15cm (10 a 12 fatias)', priceMultiplier: 1, description: 'Tamanho padrão' },
      { label: 'Aro 20cm (18 a 22 fatias)', priceMultiplier: 1.5, description: 'Tamanho festa' }
    ]
  },
  {
    id: 'caixa-brigadeiros-artesanais-24',
    name: 'Caixa Coleção Brigadeiros Artesanais (24 un)',
    category: 'doces-finos',
    categoryName: 'Doces Finos & Brigadeiros',
    price: 110,
    priceUnit: 'caixa cartonada com 24 unidades',
    description: 'Caixa rígida em tom pastel com laço de gorgurão e 24 brigadeiros enrolados artesanalmente com ingredientes naturais e frescos. Equilíbrio perfeito entre o amargo, o doce e o crocante.',
    ingredients: ['Ingredientes naturais e frescos', 'Cacau puro selecionado', 'Pistache fresco', 'Leite Ninho'],
    yieldInfo: '24 unidades (20g cada)',
    leadTimeHours: 120,
    imageUrl: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=900&q=80',
    tags: ['Presente Delicado', 'Mais Vendido', 'Artesanal'],
    isHighlight: true,
    flavors: [
      'Mix Clássico (Ao Leite, Meio Amargo com Flor de Sal, Ninho e Pistache)',
      'Mix Chocolates Especiais (Ao Leite, Meio Amargo e Branco)',
      'Mix Castanhas & Nozes'
    ]
  },
  {
    id: 'cento-doces-finos-casamento',
    name: 'Cento de Doces Finos para Noivados, Casamentos & Festas',
    category: 'doces-finos',
    categoryName: 'Doces Finos & Brigadeiros',
    price: 360,
    priceUnit: 'cento (100 unidades em forminhas especiais 4 pétalas)',
    description: 'Mesa de doces espetacular para eventos em Belo Horizonte. Inclui forminhas em papel nas cores da sua paleta com 4 sabores artesanais à escolha do cliente.',
    ingredients: ['Ingredientes naturais e frescos', 'Damascos selecionados', 'Nozes frescas', 'Fava de baunilha natural'],
    yieldInfo: '100 unidades (ideal para 20 a 25 convidados)',
    leadTimeHours: 120,
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
    tags: ['Eventos & Casamentos', 'Forminhas Especiais', 'Produção Artesanal'],
    isHighlight: false,
    flavors: [
      'Mix Celebração (Camafeu de Nozes, Brigadeiro Tradicional, Ouriço de Pistache e Trufa de Damasco)',
      'Personalizado (definir sabores no WhatsApp)'
    ]
  },
  {
    id: 'cheesecake-frutas-vermelhas',
    name: 'New York Cheesecake com Compota de Frutas Vermelhas',
    category: 'tortas',
    categoryName: 'Tortas & Cheesecakes',
    price: 175,
    priceUnit: 'aro 20cm • serve 12 a 14 fatias',
    description: 'Base crocante feita na casa com biscoito amanteigado artesanal, recheio cremoso e aveludado assado lentamente em banho-maria. Coberto com compota de morangos, mirtilos e amoras frescas.',
    ingredients: ['Ingredientes naturais e frescos', 'Biscoito amanteigado caseiro', 'Frutas vermelhas frescas', 'Limão siciliano fresco'],
    yieldInfo: 'Aproximadamente 1,8 kg (12 a 14 fatias)',
    leadTimeHours: 120,
    imageUrl: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=80',
    tags: ['Sobremesa Gelada', 'Artesanal', 'Frutas Frescas'],
    isHighlight: true,
  },
  {
    id: 'banoffee-artesanal',
    name: 'Torta Banoffee Artesanal com Doce de Leite Viçosa',
    category: 'tortas',
    categoryName: 'Tortas & Cheesecakes',
    price: 155,
    priceUnit: 'aro 22cm • serve 12 fatias fartas',
    description: 'Casquinha amanteigada crocante, farto doce de leite mineiro em ponto de corte cremoso, bananas frescas selecionadas e chantilly fresco batido com baunilha natural, polvilhado com cacau puro.',
    ingredients: ['Ingredientes naturais e frescos', 'Doce de leite Viçosa', 'Bananas frescas selecionadas', 'Creme de leite fresco'],
    yieldInfo: 'Aproximadamente 1,7 kg (12 fatias fartas)',
    leadTimeHours: 120,
    imageUrl: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80',
    tags: ['Doce de Leite Mineiro', 'Crocante & Leve'],
    isHighlight: false,
  },
  {
    id: 'torta-limao-siciliano-merengue',
    name: 'Torta de Limão Siciliano com Merengue Suíço Maçaricado',
    category: 'tortas',
    categoryName: 'Tortas & Cheesecakes',
    price: 160,
    priceUnit: 'aro 22cm • serve 12 fatias',
    description: 'Pâte sablée finíssima que derrete na boca, recheio aveludado com curd aromático de limões sicilianos frescos e finalização com generoso merengue suíço sedoso maçaricado na hora da montagem.',
    ingredients: ['Ingredientes naturais e frescos', 'Limão siciliano fresco', 'Gemas selecionadas', 'Manteiga pura sem sal'],
    yieldInfo: 'Aproximadamente 1,6 kg (12 fatias)',
    leadTimeHours: 120,
    imageUrl: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=900&q=80',
    tags: ['Refrescante', 'Merengue Maçaricado'],
    isHighlight: false,
  },
  {
    id: 'taca-felicidade-ninho-morango',
    name: 'Taça Felicidade Ninho & Morangos (1,5 L)',
    category: 'sobremesas',
    categoryName: 'Sobremesas na Taça',
    price: 180,
    priceUnit: 'taça acrílica cristal de 1,5L reutilizável',
    description: 'A queridinha dos almoços de domingo em BH: camadas intercaladas de bolo fofinho umedecido, brigadeiro cremoso de Ninho, morangos frescos fatiados e brigadeiro artesanal.',
    ingredients: ['Ingredientes naturais e frescos', 'Morangos frescos higienizados', 'Leite Ninho', 'Brigadeiro artesanal de panela'],
    yieldInfo: '1,5 litro (serve 8 a 10 pessoas)',
    leadTimeHours: 120,
    imageUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80',
    tags: ['Pronto para Servir', 'Almoço em Família', 'Muito Recheio'],
    isHighlight: true,
  },
  {
    id: 'caixa-afeto-presente-luxo',
    name: 'Caixa Afeto Luxo: Mini Bento Cake + 8 Brigadeiros Artesanais',
    category: 'presentes',
    categoryName: 'Caixas de Afeto & Presentes',
    price: 125,
    priceUnit: 'caixa presente com laço e cartão caligrafado',
    description: 'O presente mais carinhoso para aniversários e agradecimentos. Inclui 1 Mini Bolo Afeto decorado com morangos ou flores comestíveis + 8 brigadeiros artesanais sortidos + cartão com mensagem personalizada escrita à mão.',
    ingredients: ['Ingredientes naturais e frescos', 'Mini bolo artesanal fresco', 'Brigadeiros artesanais', 'Embalagem presenteável com cartão'],
    yieldInfo: 'Mini bolo 600g + 8 doces artesanais + Cartão com sua mensagem',
    leadTimeHours: 120,
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80',
    tags: ['Presente Perfeito', 'Cartão Incluso', 'Produção Sob Encomenda'],
    isHighlight: true,
    flavors: [
      'Mini Bolo Ninho com Morangos + Doces Sortidos',
      'Mini Bolo Chocolate Trufado + Doces Sortidos',
      'Mini Bolo Red Velvet + Doces Sortidos'
    ]
  },
  {
    id: 'caixa-degustacao-noivas',
    name: 'Kit Degustação para Noivas & Eventos (12 sabores)',
    category: 'presentes',
    categoryName: 'Caixas de Afeto & Presentes',
    price: 85,
    priceUnit: 'kit com 12 mini fatias e doces selecionados',
    description: 'Projetado para noivas, noivos e anfitriões escolherem o cardápio do seu casamento em Belo Horizonte. Inclui 4 mini fatias de massas e recheios mais pedidos + 8 doces finos diferentes com ficha técnica explicativa.',
    ingredients: ['Ingredientes naturais e frescos', 'Amostras de massas e recheios artesanais'],
    yieldInfo: 'Kit degustação para o casal ou anfitriões',
    leadTimeHours: 120,
    imageUrl: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=900&q=80',
    tags: ['Para Noivas', 'Degustação BH', 'Consultoria'],
    isHighlight: false,
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
