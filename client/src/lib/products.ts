// Produtos Velmo Black Salvador
// Links de pagamento fornecidos pelo usuário

export const PRODUCTS = [
  {
    id: 1,
    name: "Velmo Black 60 Capsulas 30g",
    description: "Velmo Black 1 Mês - 50% de Desconto.",
    price: "12x de R$ 13,29 Ou R$ 98,50 à vista",
    image: "/blackcapsula.jpg",
    paymentLink: "https://pay.hest.com.br/e5dbc6d5-79de-48d5-a823-366677ae411f",
    benefits: [
      "Velmo Black é o suplemento ideal para quem busca controlar a fome, ter mais energia e acelerar resultados no emagrecimento com praticidade no dia a dia."
      "O Morosil e fibras podem auxiliar na sensação de saciedade.",
      "A taurina e vitaminas costumam contribuir para mais disposição e energia no dia a dia.",
      "O picolinato de cromo é conhecido por ajudar no metabolismo de carboidratos e no equilíbrio do açúcar no sangue."
    ],
    dosage: "5g / Dia"
  },
  {
    id: 2,
    name: "Energy Boost",
    description: "Suplemento energético para aumentar o desempenho físico e mental.",
    price: "R$ 65,90",
    image: "/placeholder-energy.jpg",
    paymentLink: "https://pay.hest.com.br/7d11924f-5a3f-49e3-b23a-5214cc1a0590",
    benefits: [
      "Energia prolongada",
      "Desempenho potencializado",
      "Foco e concentração"
    ]
  },
  {
    id: 3,
    name: "Wellness Chá",
    description: "Chá premium para saúde integral. Fórmula exclusiva com ingredientes naturais.",
    price: "R$ 45,90",
    image: "/placeholder-cha.jpg",
    paymentLink: "https://pay.hest.com.br/8d4f42a1-71b7-4109-addf-c7b89102626b",
    benefits: [
      "Saúde digestiva",
      "Bem-estar geral",
      "Propriedades antioxidantes"
    ]
  },
  {
    id: 4,
    name: "Sleep Matrix",
    description: "Fórmula avançada para sono restaurador e recuperação celular.",
    price: "R$ 72,90",
    image: "/placeholder-sleep.jpg",
    paymentLink: "https://pay.hest.com.br/23b092bb-206d-4ef4-b689-b6c66d3b38e7",
    benefits: [
      "Sono de qualidade",
      "Recuperação muscular",
      "Reparação celular"
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
      "Aceleração metabólica",
      "Queima de gordura",
      "Energia sustentada"
    ]
  },
  {
    id: 6,
    name: "Performance Elite",
    description: "Fórmula premium para atletas e praticantes de atividade física intensiva.",
    price: "R$ 99,90",
    image: "/placeholder-performance.jpg",
    paymentLink: "https://pay.hest.com.br/e7c7b7d4-e27c-4e9d-a7b6-4dff4611db24",
    benefits: [
      "Desempenho máximo",
      "Resistência prolongada",
      "Recuperação acelerada"
    ]
  }
];

export const BENEFITS = [
  {
    icon: "💪",
    title: "Fórmula Clinicamente Testada",
    description: "Comprovação científica através de estudos clínicos rigorosos"
  },
  {
    icon: "🧬",
    title: "Alta Biodisponibilidade",
    description: "Absorção otimizada para máxima eficácia e performance"
  },
  {
    icon: "✓",
    title: "Transparência Total",
    description: "Todos os ingredientes e dosagens claramente especificados"
  }
];

export const USAGE_PROTOCOL = {
  title: "Protocolo de Dosagem",
  subtitle: "Duas cápsulas, uma jornada diária.",
  description: "Para manter os níveis séricos otimizados, a consistência é o seu maior aliado. A dose recomendada foi cientificamente formulada para fornecer suporte contínuo ao seu metabolismo.",
  steps: [
    {
      number: "01",
      label: "CÁPSULA MATINAL",
      description: "Tome 30 minutos antes das principais refeições"
    },
    {
      number: "02",
      label: "CÁPSULA NOTURNA",
      description: "Tome 30 minutos antes das principais refeições"
    }
  ],
  ritual: [
    {
      number: "01",
      title: "Hidrate-se",
      description: "Inicie o dia com 300ml de água mineral para despertar o sistema digestivo e preparar a absorção."
    },
    {
      number: "02",
      title: "A Ingestão",
      description: "Ingira a cápsula inteira, preferencialmente 30 minutos antes do café da manhã e do jantar."
    },
    {
      number: "03",
      title: "Consistência",
      description: "Mantenha o uso ininterrupto por mínimo 90 dias para consolidação dos benefícios metabólicos."
    }
  ]
};

export const DATA_TRANSPARENCY = {
  title: "Módulo de Transparência de Dados",
  subtitle: "Evidência científica por trás de cada miligrama.",
  stats: [
    {
      value: "98.4%",
      label: "Taxa de Absorção Gastrointestinal",
      description: "Superior a pós convencionais"
    },
    {
      value: "+22%",
      label: "Taxa de ATP Muscular",
      description: "Melhora documentada em expiração e força contratil"
    },
    {
      value: "100%",
      label: "Pureza do Ativo",
      description: "Isento de fillers, corantes artificiais ou aditivos sintéticos"
    }
  ]
};

export const TESTIMONIALS = [
  {
    name: "Dr. Helder Mendes",
    title: "Especialista em Performance",
    quote: "O Velmo Black Salvador mudou minha percepção sobre suplementação clínica. É sobre nítidez mental e potência física consistente.",
    image: "/placeholder-testimonial-1.jpg"
  },
  {
    name: "Marina L. - Personal Trainer",
    title: "Metodologia Black",
    quote: "Cada resultado-chave corresponde a uma aplicação de suplementação estratégica. Meus clientes veem transformações reais.",
    image: "/placeholder-testimonial-2.jpg"
  }
];

export const RESULTS_SHOWCASE = [
  {
    type: "before-after",
    title: "Transformação 90 Dias",
    description: "Protocolo completo com consistência",
    metrics: [
      { label: "Massa Gorda", value: "-4.2kg" },
      { label: "Circunferência Visceral", value: "-12%" },
      { label: "Peso Corporal", value: "+3.5%" }
    ]
  },
  {
    type: "video-testimonial",
    title: "Performance de Elite",
    description: "Depoimento de usuário com metodologia Black"
  },
  {
    type: "scientific-backing",
    title: "Constância de Treino",
    description: "Suporte nutricional para performance exponencial"
  }
];
