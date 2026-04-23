// Produtos Velmo Black Salvador
// Links de pagamento fornecidos pelo usuario

export const PRODUCTS = [
  {
    id: 1,
    name: "Velmo Black 60 Capsulas 30g",
    description: "Velmo Black 1 Mes - 50% de Desconto. Morosil + Picolinato de Cromo e Taurina.",
    price: "12x de R$ 13,29 Ou R$ 98,50 a vista",
    image: "/manus-storage/blackcapsula_fc4f7d02.jpeg",
    paymentLink: "https://pay.hest.com.br/e5dbc6d5-79de-48d5-a823-366677ae411f",
    benefits: [
      "Velmo Black e o suplemento ideal para quem busca controlar a fome, ter mais energia e acelerar resultados no emagrecimento com praticidade no dia a dia.",
      "O Morosil e fibras podem auxiliar na sensacao de saciedade.",
      "A taurina e vitaminas costumam contribuir para mais disposicao e energia no dia a dia.",
      "O picolinato de cromo e conhecido por ajudar no metabolismo de carboidratos e no equilibrio do acucar no sangue."
    ],
    dosage: "5g / Dia"
  },
  {
    id: 2,
    name: "Velmo Black Drink Com 150g rende ate 30 porcoes.",
    description: "Velmo Black Drink - Morango 1 Mes - 50% de Desconto - nao e remedio – e natural e age como aliado da dieta",
    price: "12x de R$ 13,95 Ou R$ 104,95 a vista",
    image: "/manus-storage/vemlodrinkmorango_47307fca.jpeg",
    paymentLink: "https://pay.hest.com.br/7d11924f-5a3f-49e3-b23a-5214cc1a0590",
    benefits: [
      "Mais disposicao, menos fome e sem inchaço? Velmo Black Drink – tudo em um unico cha. Resultado real, sem milagre. Comece hoje!",
      "O psyllium + inulina limpam o intestino de verdade.",
      "A curcuma e um poderoso anti-inflamatorio natural.",
      "O hibisco age como um diuretico natural.",
      "O cha preto e cafeina natural, ativa seu metabolismo."
    ]
  },
  {
    id: 3,
    name: "Velmo Black Drink - Tangerina",
    description: "Cha premium para saude integral. Formula exclusiva com ingredientes naturais.",
    price: "12x de R$ 13,95 Ou R$ 104,95 a vista",
    image: "/manus-storage/20260415193820393_2b0bc204.jpeg",
    paymentLink: "https://pay.hest.com.br/8d4f42a1-71b7-4109-addf-c7b89102626b",
    benefits: [
      "Menos fome + menos inchaço + mais calorias queimadas, Velmo Black Drink – emagrecimento mais consistente. Comece hoje!",
      "O psyllium + inulina regula o intestino = barriga chapada e mais saude.",
      "A curcuma reduz a inflamacao, seu corpo responde muito melhor a dieta.",
      "O hibisco eliminando o excesso de liquidos.",
      "O cha preto e cafeina natural, ajuda seu corpo a queimar mais calorias."
    ]
  },
  {
    id: 4,
    name: "Sleep Matrix",
    description: "Formula avancada para sono restaurador e recuperacao celular.",
    price: "R$ 72,90",
    image: "/placeholder-sleep.jpg",
    paymentLink: "https://pay.hest.com.br/23b092bb-206d-4ef4-b689-b6c66d3b38e7",
    benefits: [
      "Sono de qualidade",
      "Recuperacao muscular",
      "Reparacao celular"
    ]
  },
  {
    id: 5,
    name: "Metabolismo Black",
    description: "Suplemento especializado para otimizar o metabolismo e queima de gordura.",
    price: "R$ 89,90",
    image: "/placeholder-metabolismo.jpg",
    paymentLink: "https://pay.hest.com.br/cc3ccd7d-2f65-4f60-9b28-6f0d09a2faf7",
    benefits: [
      "Aceleracao metabolica",
      "Queima de gordura",
      "Energia sustentada"
    ]
  },
  {
    id: 6,
    name: "Performance Elite",
    description: "Formula premium para atletas e praticantes de atividade fisica intensiva.",
    price: "R$ 99,90",
    image: "/placeholder-performance.jpg",
    paymentLink: "https://pay.hest.com.br/e7c7b7d4-e27c-4e9d-a7b6-4dff4611db24",
    benefits: [
      "Desempenho maximo",
      "Resistencia prolongada",
      "Recuperacao acelerada"
    ]
  }
];

export const BENEFITS = [
  {
    icon: "💪",
    title: "Formula Clinicamente Testada",
    description: "Comprovacao cientifica atraves de estudos clinicos rigorosos"
  },
  {
    icon: "🧬",
    title: "Alta Biodisponibilidade",
    description: "Absorcao otimizada para maxima eficacia e performance"
  },
  {
    icon: "✓",
    title: "Transparencia Total",
    description: "Todos os ingredientes e dosagens claramente especificados"
  }
];

export const USAGE_PROTOCOL = {
  title: "Protocolo de Dosagem",
  subtitle: "Duas capsulas, uma jornada diaria.",
  description: "Para manter os niveis sericos otimizados, a consistencia e o seu maior aliado. A dose recomendada foi cientificamente formulada para fornecer suporte continuo ao seu metabolismo.",
  steps: [
    {
      number: "01",
      label: "CAPSULA MATINAL",
      description: "Tome 30 minutos antes das principais refeicoes"
    },
    {
      number: "02",
      label: "CAPSULA NOTURNA",
      description: "Tome 30 minutos antes das principais refeicoes"
    }
  ],
  ritual: [
    {
      number: "01",
      title: "Hidrate-se",
      description: "Inicie o dia com 300ml de agua mineral para despertar o sistema digestivo e preparar a absorcao."
    },
    {
      number: "02",
      title: "A Ingestao",
      description: "Ingira a capsula inteira, preferencialmente 30 minutos antes do cafe da manha e do jantar."
    },
    {
      number: "03",
      title: "Consistencia",
      description: "Mantenha o uso ininterrupto por minimo 90 dias para consolidacao dos beneficios metabolicos."
    }
  ]
};

export const DATA_TRANSPARENCY = {
  title: "Modulo de Transparencia de Dados",
  subtitle: "Evidencia cientifica por tras de cada miligrama.",
  stats: [
    {
      value: "98.4%",
      label: "Taxa de Absorcao Gastrointestinal",
      description: "Superior a pos convencionais"
    },
    {
      value: "+22%",
      label: "Taxa de ATP Muscular",
      description: "Melhora documentada em expiracao e forca contratil"
    },
    {
      value: "100%",
      label: "Pureza do Ativo",
      description: "Isento de fillers, corantes artificiais ou aditivos sinteticos"
    }
  ]
};

export const TESTIMONIALS = [
  {
    name: "Dr. Helder Mendes",
    title: "Especialista em Performance",
    quote: "O Velmo Black Salvador mudou minha percepcao sobre suplementacao clinica. E sobre nitidez mental e potencia fisica consistente.",
    image: "/placeholder-testimonial-1.jpg"
  },
  {
    name: "Marina L. - Personal Trainer",
    title: "Metodologia Black",
    quote: "Cada resultado-chave corresponde a uma aplicacao de suplementacao estrategica. Meus clientes veem transformacoes reais.",
    image: "/placeholder-testimonial-2.jpg"
  }
];

export const RESULTS_SHOWCASE = [
  {
    type: "before-after",
    title: "Transformacao 90 Dias",
    description: "Protocolo completo com consistencia",
    metrics: [
      { label: "Massa Gorda", value: "-4.2kg" },
      { label: "Circunferencia Visceral", value: "-12%" },
      { label: "Peso Corporal", value: "+3.5%" }
    ]
  },
  {
    type: "video-testimonial",
    title: "Performance de Elite",
    description: "Depoimento de usuario com metodologia Black"
  },
  {
    type: "scientific-backing",
    title: "Constancia de Treino",
    description: "Suporte nutricional para performance exponencial"
  }
];
