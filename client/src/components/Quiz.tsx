import { useState } from 'react';
import { ChevronRight, RotateCcw, CheckCircle2 } from 'lucide-react';

interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    value: string;
  }[];
}

interface ProductRecommendation {
  productId: number;
  name: string;
  description: string;
  price: string;
  paymentLink: string;
  reason: string;
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Qual é seu principal desafio com o emagrecimento?',
    options: [
      { text: 'Controlar a fome', value: 'fome' },
      { text: 'Falta de energia', value: 'energia' },
      { text: 'Inchaço e retenção de líquidos', value: 'inchaço' },
      { text: 'Metabolismo lento', value: 'metabolismo' },
    ],
  },
  {
    id: 2,
    question: 'Quanto tempo você tem para ver resultados?',
    options: [
      { text: '30 dias', value: '30' },
      { text: '60 dias', value: '60' },
      { text: '90 dias ou mais', value: '90' },
      { text: 'Não tenho pressa', value: 'flex' },
    ],
  },
  {
    id: 3,
    question: 'Qual é sua preferência de formato?',
    options: [
      { text: 'Cápsulas (mais prático)', value: 'capsulas' },
      { text: 'Chá/Pó (mais natural)', value: 'cha' },
      { text: 'Sem preferência', value: 'qualquer' },
      { text: 'Gummies (mais gostoso)', value: 'gummies' },
    ],
  },
  {
    id: 4,
    question: 'Você já usou suplementos para emagrecimento antes?',
    options: [
      { text: 'Sim, e funcionou bem', value: 'sim-funciona' },
      { text: 'Sim, mas não funcionou', value: 'sim-nao' },
      { text: 'Não, é minha primeira vez', value: 'nao' },
      { text: 'Prefiro não responder', value: 'skip' },
    ],
  },
  {
    id: 5,
    question: 'Qual é seu orçamento mensal para suplementação?',
    options: [
      { text: 'Até R$ 100', value: 'ate100' },
      { text: 'R$ 100 - R$ 200', value: '100-200' },
      { text: 'R$ 200 - R$ 300', value: '200-300' },
      { text: 'Acima de R$ 300', value: 'acima300' },
    ],
  },
];

const PRODUCT_RECOMMENDATIONS: Record<string, ProductRecommendation> = {
  'fome-capsulas': {
    productId: 1,
    name: 'Velmo Black 60 Cápsulas',
    description: 'Controle de fome + Energia sustentada',
    price: '12x de R$ 13,29 Ou R$ 98,50 à vista',
    paymentLink: 'https://pay.hest.com.br/e5dbc6d5-79de-48d5-a823-366677ae411f',
    reason: 'Morosil + Picolinato de Cromo para controlar a fome e acelerar o metabolismo',
  },
  'inchaço-cha': {
    productId: 2,
    name: 'Velmo Black Drink Morango',
    description: 'Desinchação + Limpeza intestinal',
    price: '12x de R$ 13,95 Ou R$ 104,95 à vista',
    paymentLink: 'https://pay.hest.com.br/7d11924f-5a3f-49e3-b23a-5214cc1a0590',
    reason: 'Psyllium + Inulina + Hibisco para eliminar inchaço e regular o intestino',
  },
  'energia-capsulas': {
    productId: 1,
    name: 'Velmo Black 60 Cápsulas',
    description: 'Energia prolongada + Performance',
    price: '12x de R$ 13,29 Ou R$ 98,50 à vista',
    paymentLink: 'https://pay.hest.com.br/e5dbc6d5-79de-48d5-a823-366677ae411f',
    reason: 'Taurina + Vitaminas + Cafeína natural para energia sem crash',
  },
  'metabolismo-cha': {
    productId: 3,
    name: 'Velmo Black Drink Tangerina',
    description: 'Metabolismo acelerado + Queima de gordura',
    price: '12x de R$ 13,95 Ou R$ 104,95 à vista',
    paymentLink: 'https://pay.hest.com.br/8d4f42a1-71b7-4109-addf-c7b89102626b',
    reason: 'Chá preto + Cafeína natural + Cúrcuma para acelerar metabolismo',
  },
  'default': {
    productId: 1,
    name: 'Velmo Black 60 Cápsulas',
    description: 'Fórmula completa para emagrecimento',
    price: '12x de R$ 13,29 Ou R$ 98,50 à vista',
    paymentLink: 'https://pay.hest.com.br/e5dbc6d5-79de-48d5-a823-366677ae411f',
    reason: 'Morosil + Picolinato de Cromo + Taurina para resultado completo',
  },
};

interface QuizProps {
  onClose?: () => void;
}

export default function Quiz({ onClose }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [recommendation, setRecommendation] = useState<ProductRecommendation | null>(null);

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [QUIZ_QUESTIONS[currentQuestion].id]: value };
    setAnswers(newAnswers);

    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      generateRecommendation(newAnswers);
    }
  };

  const generateRecommendation = (finalAnswers: Record<number, string>) => {
    const challenge = finalAnswers[1] || 'fome';
    const format = finalAnswers[3] || 'capsulas';

    const key = `${challenge}-${format}`;
    const rec = PRODUCT_RECOMMENDATIONS[key] || PRODUCT_RECOMMENDATIONS['default'];

    setRecommendation(rec);
    setShowResult(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setRecommendation(null);
  };

  if (showResult && recommendation) {
    return (
      <div className="w-full bg-black rounded-lg p-6 md:p-8 border border-border">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-block bg-[#00D948]/20 text-[#00D948] px-3 py-1 rounded-lg mb-3">
            <span className="text-xs font-bold uppercase tracking-widest">✓ Resultado Personalizado</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Produto Ideal Para Você</h3>
          <p className="text-gray-300 text-sm">
            Com base em suas respostas, recomendamos:
          </p>
        </div>

        {/* Product Card */}
        <div className="bg-gray-900 rounded-lg p-4 md:p-6 border border-gray-700 mb-4">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h4 className="text-lg md:text-xl font-bold text-[#00D948] mb-1">{recommendation.name}</h4>
              <p className="text-xs md:text-sm text-gray-300">{recommendation.description}</p>
            </div>
            <CheckCircle2 size={28} className="text-[#00D948] flex-shrink-0" />
          </div>

          <p className="text-xs md:text-sm text-gray-300 mb-4 p-3 bg-[#00D948]/5 rounded-lg border border-[#00D948]/20 italic">
            "{recommendation.reason}"
          </p>

          <p className="text-base md:text-lg font-bold text-white mb-4">{recommendation.price}</p>

          <a
            href={recommendation.paymentLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full bg-[#00D948] text-black px-6 py-3 rounded-lg font-bold hover:bg-[#00d948]/90 transition-all text-center mb-3 text-sm md:text-base"
          >
            COMPRAR AGORA COM DESCONTO
          </a>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <button
              onClick={resetQuiz}
              className="flex items-center justify-center gap-2 bg-gray-900 border-2 border-[#00D948] text-[#00D948] px-4 py-2 rounded-lg font-semibold hover:bg-[#00D948] hover:text-black transition-all text-xs md:text-sm"
            >
              <RotateCcw size={16} />
              Fazer Quiz Novamente
            </button>
            <a
              href="#produtos"
              className="flex items-center justify-center gap-2 bg-[#00D948]/10 border-2 border-[#00D948] text-[#00D948] px-4 py-2 rounded-lg font-semibold hover:bg-[#00D948] hover:text-black transition-all text-xs md:text-sm"
            >
              Ver Outras Recomendações
            </a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="bg-[#00D948]/5 rounded-lg p-4 border border-[#00D948]/20 space-y-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-[#00D948] flex-shrink-0" />
            <span className="text-xs md:text-sm text-gray-200">
              <strong>Garantia de 90 dias</strong> - Ou seu dinheiro de volta
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-[#00D948] flex-shrink-0" />
            <span className="text-xs md:text-sm text-gray-200">
              <strong>+50.000 clientes satisfeitos</strong> - Resultado comprovado
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-[#00D948] flex-shrink-0" />
            <span className="text-xs md:text-sm text-gray-200">
              <strong>Fórmula clinicamente testada</strong> - Sem promessas falsas
            </span>
          </div>
        </div>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100;
  const question = QUIZ_QUESTIONS[currentQuestion];

  return (
    <div className="w-full bg-black rounded-lg p-6 md:p-8 border border-border">
      {/* Progress Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs md:text-sm font-bold text-gray-300">
            Pergunta {currentQuestion + 1} de {QUIZ_QUESTIONS.length}
          </span>
          <span className="text-xs md:text-sm font-bold text-[#00D948]">{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
          <div
            className="bg-[#00D948] h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">
          {question.question}
        </h3>

        {/* Options */}
        <div className="space-y-2">
          {question.options.map((option, idx) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option.value)}
              className="w-full text-left p-3 md:p-4 rounded-lg border-2 border-gray-700 bg-gray-900 hover:border-[#00D948] hover:bg-[#00D948]/5 transition-all duration-200 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full border-2 border-gray-700 group-hover:border-[#00D948] transition-colors flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#00D948] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="font-semibold text-gray-200 group-hover:text-[#00D948] transition-colors text-sm md:text-base">
                    {option.text}
                  </span>
                </div>
                <ChevronRight size={18} className="text-gray-500 group-hover:text-[#00D948] transition-colors flex-shrink-0" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Info */}
      <p className="text-center text-xs md:text-sm text-gray-400 mt-4">
        ⛱️ Leva menos de 1 minuto para completar
      </p>
    </div>
  );
}
