import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import { Button } from "@/components/ui/button";
import Quiz from "@/components/Quiz";

export default function Home() {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [currentIngredientIndex, setCurrentIngredientIndex] = useState(0);
  const [expandedBenefits, setExpandedBenefits] = useState<number | null>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [autoScroll, setAutoScroll] = useState(true);

  // Auto-scroll para carrosséis
  useEffect(() => {
    if (!autoScroll) return;
    const interval = setInterval(() => {
      setCurrentProductIndex((prev) => (prev + 1) % PRODUCTS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoScroll]);

  useEffect(() => {
    if (!autoScroll) return;
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoScroll]);

  useEffect(() => {
    if (!autoScroll) return;
    const interval = setInterval(() => {
      setCurrentIngredientIndex((prev) => (prev + 1) % 4);
    }, 7000);
    return () => clearInterval(interval);
  }, [autoScroll]);

  const handleCarouselInteraction = () => {
    setAutoScroll(false);
    setTimeout(() => setAutoScroll(true), 10000);
  };

  const nextProduct = () => {
    handleCarouselInteraction();
    setCurrentProductIndex((prev) => (prev + 1) % PRODUCTS.length);
  };

  const prevProduct = () => {
    handleCarouselInteraction();
    setCurrentProductIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);
  };

  const goToProduct = (index: number) => {
    handleCarouselInteraction();
    setCurrentProductIndex(index);
  };

  const currentProduct = PRODUCTS[currentProductIndex];

  const testimonials = [
    {
      name: "Maria Silva",
      location: "São Paulo - SP",
      result: "-5kg em 30 dias",
      quote: "Melhor escolha da vida, perdi 5 kg em 35 dias. Estou impressionada com o resultado.",
      rating: 5,
    },
    {
      name: "Ana Costa",
      location: "Rio de Janeiro - RJ",
      result: "-8cm de cintura",
      quote: "Estou apaixonada! Em uma semana de uso já perdi 1 kg. Super satisfeita! 😍",
      rating: 5,
    },
    {
      name: "Juliana Oliveira",
      location: "Minas Gerais - MG",
      result: "-3kg em 20 dias",
      quote: "Comprei o meu kit e já estou vendo resultados. Recomendo muito!",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    handleCarouselInteraction();
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    handleCarouselInteraction();
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    handleCarouselInteraction();
    setCurrentTestimonialIndex(index);
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  const ingredients = [
    {
      name: "Morosil",
      benefit: "Controla o apetite e melhora o intestino",
      color: "bg-red-500/20 border-red-500",
      icon: "🔴",
    },
    {
      name: "Psyllium",
      benefit: "Aumenta saciedade e limpa o intestino",
      color: "bg-blue-500/20 border-blue-500",
      icon: "💙",
    },
    {
      name: "Inulina",
      benefit: "Prebiótico que alimenta bactérias boas",
      color: "bg-green-500/20 border-green-500",
      icon: "🌿",
    },
    {
      name: "Picolinato de Cromo",
      benefit: "Reduz desejo por doces e regula glicose",
      color: "bg-yellow-500/20 border-yellow-500",
      icon: "⚡",
    },
  ];

  const nextIngredient = () => {
    handleCarouselInteraction();
    setCurrentIngredientIndex((prev) => (prev + 1) % ingredients.length);
  };

  const prevIngredient = () => {
    handleCarouselInteraction();
    setCurrentIngredientIndex((prev) => (prev - 1 + ingredients.length) % ingredients.length);
  };

  const goToIngredient = (index: number) => {
    handleCarouselInteraction();
    setCurrentIngredientIndex(index);
  };

  const currentIngredient = ingredients[currentIngredientIndex];

  return (
    <div className="min-h-screen bg-black">
      {/* HERO SECTION */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left */}
            <div>
              <div className="inline-block bg-[#00D948] text-black px-4 py-2 rounded-full mb-6 font-bold text-xs md:text-sm">
                ⏰ ESTOQUE LIMITADO
              </div>

              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                Emagrecimento Sem Milagres. <span className="text-[#00D948]">Com Ciência.</span>
              </h1>

              <p className="text-sm md:text-base text-gray-300 mb-6">
                Fórmula clinicamente testada. Resultado real baseado em evidência científica.
              </p>

              <ul className="space-y-2 mb-8">
                <li className="text-sm md:text-base text-gray-200 flex items-center gap-2">
                  <span className="text-[#00D948]">✓</span>+50.000 clientes satisfeitos
                </li>
                <li className="text-sm md:text-base text-gray-200 flex items-center gap-2">
                  <span className="text-[#00D948]">✓</span>Garantia de 90 dias
                </li>
                <li className="text-sm md:text-base text-gray-200 flex items-center gap-2">
                  <span className="text-[#00D948]">✓</span>Fórmula clinicamente testada
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={PRODUCTS[0]?.paymentLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#00D948] text-black font-bold py-3 px-6 rounded-lg hover:bg-[#00d948]/90 transition-all text-center text-sm md:text-base"
                >
                  COMPRAR AGORA
                </a>
                <button className="border-2 border-[#00D948] text-[#00D948] font-bold py-3 px-6 rounded-lg hover:bg-[#00D948]/10 transition-all text-sm md:text-base">
                  Fazer Quiz Rápido
                </button>
              </div>
            </div>

            {/* Right */}
            <div className="flex justify-center">
              <div className="w-full max-w-sm h-64 md:h-80 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg flex items-center justify-center overflow-hidden border border-[#00D948]/20">
                <div className="text-6xl md:text-8xl">🧪</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS CAROUSEL */}
      <section className="py-12 md:py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Resultados Reais de Nossos Clientes</h2>

          <div className="bg-card border border-border rounded-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#00D948] rounded-full flex items-center justify-center text-2xl">
                  👤
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-bold text-white text-lg">{currentTestimonial.name}</h3>
                    <p className="text-sm text-gray-400">{currentTestimonial.location}</p>
                  </div>
                  <div className="bg-[#00D948]/20 text-[#00D948] px-3 py-1 rounded-full text-xs font-bold">
                    {currentTestimonial.result}
                  </div>
                </div>

                <p className="text-gray-300 mb-4 italic text-sm md:text-base">"{currentTestimonial.quote}"</p>

                <div className="flex gap-1">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6 md:mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 hover:bg-card rounded-lg transition-all"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-5 h-5 text-[#00D948]" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToTestimonial(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentTestimonialIndex ? "bg-[#00D948] w-6" : "bg-gray-600"
                    }`}
                    aria-label={`Ir para depoimento ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 hover:bg-card rounded-lg transition-all"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-5 h-5 text-[#00D948]" />
              </button>
            </div>
          </div>

          <div className="text-center mt-6">
            <a href="/depoimentos" className="text-[#00D948] font-bold hover:underline text-sm md:text-base">
              Ver todos os depoimentos →
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE INGREDIENTES - CAROUSEL HORIZONTAL */}
      <section className="py-12 md:py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Ingredientes Naturais</h2>
          <p className="text-center text-gray-200 mb-12 text-sm md:text-base">
            Cada ingrediente trabalha em harmonia para resultados reais
          </p>

          <div className="bg-card border border-border rounded-lg p-4 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
              {/* Ícone e Nome */}
              <div className="flex-shrink-0">
                <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center text-4xl md:text-5xl border-2 ${currentIngredient.color}`}>
                  {currentIngredient.icon}
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{currentIngredient.name}</h3>
                <p className="text-sm md:text-base text-gray-300 mb-4">{currentIngredient.benefit}</p>
                <a href="/resultados" className="text-[#00D948] font-bold text-sm md:text-base hover:underline">
                  📖 Saiba Mais sobre este Ingrediente →
                </a>
              </div>

              {/* Navigation */}
              <div className="flex gap-2 md:gap-4 flex-shrink-0">
                <button
                  onClick={prevIngredient}
                  className="p-2 hover:bg-background rounded-lg transition-all"
                  aria-label="Ingrediente anterior"
                >
                  <ChevronLeft className="w-5 h-5 text-[#00D948]" />
                </button>

                <div className="flex gap-2 items-center">
                  {ingredients.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToIngredient(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentIngredientIndex ? "bg-[#00D948] w-6" : "bg-gray-600"
                      }`}
                      aria-label={`Ir para ingrediente ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextIngredient}
                  className="p-2 hover:bg-background rounded-lg transition-all"
                  aria-label="Próximo ingrediente"
                >
                  <ChevronRight className="w-5 h-5 text-[#00D948]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE CARROSSEL DE PRODUTOS */}
      <section className="py-12 md:py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Escolha Seu Produto</h2>
          <p className="text-center text-gray-200 mb-8 md:mb-12 text-sm md:text-base">
            Deslize para explorar todos os {PRODUCTS.length} produtos disponíveis
          </p>

          <div className="bg-card border border-border rounded-lg p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-start">
              {/* Imagem */}
              <div className="flex justify-center order-2 md:order-1">
                <div className="w-full max-w-xs h-48 md:h-80 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg flex items-center justify-center overflow-hidden border border-[#00D948]/20">
                  <div className="text-4xl md:text-6xl">💊</div>
                </div>
              </div>

              {/* Informações */}
              <div className="order-1 md:order-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3 md:mb-4 flex-wrap gap-2">
                    <span className="text-xs md:text-sm text-[#00D948] font-bold">
                      Produto {currentProductIndex + 1} de {PRODUCTS.length}
                    </span>
                    {currentProductIndex === 0 && (
                      <span className="bg-red-500 text-white px-2 md:px-3 py-1 rounded-full text-xs font-bold">
                        🔥 BEST SELLER
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3 text-white">{currentProduct.name}</h3>
                  <p className="text-xs md:text-sm text-gray-200 mb-4 md:mb-6 line-clamp-2 md:line-clamp-none">{currentProduct.description}</p>

                  <div className="mb-4 md:mb-6">
                    <button
                      onClick={() => setExpandedBenefits(expandedBenefits === currentProductIndex ? null : currentProductIndex)}
                      className="text-[#00D948] font-bold text-xs md:text-sm hover:underline transition-colors flex items-center gap-2"
                    >
                      {expandedBenefits === currentProductIndex ? "▼" : "▶"} Saiba Mais
                    </button>
                    
                    {expandedBenefits === currentProductIndex && (
                      <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-border">
                        <p className="text-xs md:text-sm text-gray-300 mb-2 md:mb-3 font-semibold">Todos os Benefícios:</p>
                        <ul className="space-y-1 md:space-y-2">
                          {currentProduct.benefits.map((benefit, idx) => (
                            <li key={idx} className="text-xs md:text-sm text-gray-200 flex items-start gap-2">
                              <span className="text-[#00D948] mt-0.5 flex-shrink-0">✓</span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <div className="bg-[#00D948]/10 border border-[#00D948] rounded-lg p-3 md:p-4 mb-3 md:mb-4">
                    <p className="text-xs md:text-sm text-gray-300 mb-1 font-semibold">Preço</p>
                    <p className="text-lg md:text-2xl font-bold text-[#00D948]">{currentProduct.price}</p>
                  </div>

                  <a
                    href={currentProduct.paymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#00D948] text-black font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg hover:bg-[#00d948]/90 transition-all text-center mb-2 md:mb-3 text-xs md:text-base"
                  >
                    COMPRAR AGORA
                  </a>

                  <p className="text-xs text-gray-300 text-center">
                    ✓ Garantia de 90 dias ou seu dinheiro de volta
                  </p>
                </div>
              </div>
            </div>

            {/* Navegação */}
            <div className="flex items-center justify-between mt-4 md:mt-8">
              <button
                onClick={prevProduct}
                className="p-1 md:p-2 hover:bg-background rounded-lg transition-all hidden md:block"
                aria-label="Produto anterior"
              >
                <ChevronLeft className="w-5 md:w-6 h-5 md:h-6 text-[#00D948]" />
              </button>

              <div className="flex gap-1 md:gap-2 flex-wrap justify-center flex-1 md:flex-none">
                {PRODUCTS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToProduct(idx)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                      idx === currentProductIndex ? "bg-[#00D948] w-5 md:w-8" : "bg-gray-600"
                    }`}
                    aria-label={`Ir para produto ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextProduct}
                className="p-1 md:p-2 hover:bg-background rounded-lg transition-all hidden md:block"
                aria-label="Próximo produto"
              >
                <ChevronRight className="w-5 md:w-6 h-5 md:h-6 text-[#00D948]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE KITS */}
      <section id="kits" className="py-12 md:py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Escolha Seu Kit Ideal</h2>
          <p className="text-center text-gray-200 mb-8 md:mb-12 text-sm md:text-base">
            Recomendamos 3 a 5 meses para melhores resultados
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                duration: "30 DIAS",
                quantity: "1 Pote",
                originalPrice: "R$ 120,00",
                price: "R$ 98,50",
                discount: "18%",
                badge: "",
                icon: "💊",
              },
              {
                duration: "60 DIAS",
                quantity: "2 Potes",
                originalPrice: "R$ 245,80",
                price: "R$ 180,00",
                discount: "27%",
                badge: "⭐ MAIS PEDIDO",
                icon: "💊💊",
              },
              {
                duration: "90 DIAS",
                quantity: "3 Potes",
                originalPrice: "R$ 350,00",
                price: "R$ 245,80",
                discount: "30%",
                badge: "",
                icon: "💊💊💊",
              },
            ].map((kit, idx) => (
              <div
                key={idx}
                className={`rounded-lg p-4 md:p-6 border-2 transition-all flex flex-col overflow-hidden ${
                  kit.badge
                    ? "border-[#00D948] bg-[#00D948]/5"
                    : "border-border bg-card hover:border-[#00D948]/30"
                }`}
              >
                {/* Image Section */}
                <div className="w-full h-32 md:h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center mb-4 border border-[#00D948]/20">
                  <div className="text-4xl md:text-5xl">{kit.icon}</div>
                </div>

                {kit.badge && (
                  <div className="bg-[#00D948] text-black px-3 py-1 rounded-full text-xs font-bold mb-3 w-fit">
                    {kit.badge}
                  </div>
                )}

                <h3 className="text-lg md:text-xl font-bold mb-1 text-white">{kit.duration}</h3>
                <p className="text-xs md:text-sm text-gray-400 mb-4">{kit.quantity}</p>

                <div className="mb-4 md:mb-6">
                  <p className="text-xs text-gray-500 line-through">{kit.originalPrice}</p>
                  <p className="text-2xl md:text-3xl font-bold text-[#00D948]">{kit.price}</p>
                  <p className="text-xs text-[#00D948] font-bold">Economize {kit.discount}</p>
                </div>

                <a
                  href={PRODUCTS[0]?.paymentLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#00D948] text-black font-bold py-2 md:py-3 px-4 rounded-lg hover:bg-[#00d948]/90 transition-all text-center text-xs md:text-base mt-auto"
                >
                  COMPRAR AGORA
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANVISA SECTION */}
      <section className="py-12 md:py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-6 md:p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">✓ Liberado pela ANVISA</h2>
            <p className="text-sm md:text-base text-gray-300 mb-6">
              Suplemento alimentar regularizado conforme RDC nº 27/2010 da ANVISA. Fórmula desenvolvida em laboratórios certificados com controle de qualidade rigoroso.
            </p>
            <a href="#" className="text-[#00D948] font-bold text-sm md:text-base hover:underline">
              🔗 Verificar Registro Oficial ANVISA
            </a>
            <p className="text-xs text-gray-400 mt-6">
              Este produto não é um medicamento. O uso deve estar associado a uma alimentação equilibrada e hábitos saudáveis.
            </p>
          </div>
        </div>
      </section>

      {/* QUIZ SECTION */}
      <section className="py-12 md:py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Como É Feito?</h2>
          <p className="text-center text-gray-300 mb-8 text-sm md:text-base">
            Transparência total - Veja como produzimos seu suplemento
          </p>
          <Quiz />
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-12 md:py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Dúvidas Frequentes</h2>

          <div className="space-y-4">
            {[
              {
                question: "O produto é aprovado pela Anvisa?",
                answer: "Sim! O Velmo Black é um suplemento alimentar regularizado conforme RDC nº 27/2010 da ANVISA.",
              },
              {
                question: "Em quanto tempo verei resultados?",
                answer: "Muitos clientes relatam mudanças perceptíveis a partir da 4ª semana de uso contínuo, principalmente quando aliado a uma boa alimentação e exercícios.",
              },
              {
                question: "Qual é a dosagem recomendada?",
                answer: "A recomendação é ingerir 5g por dia (1-2 cápsulas), junto a um copo de água, de preferência antes das principais refeições.",
              },
              {
                question: "Possui efeitos colaterais?",
                answer: "Quando usado corretamente, o Velmo Black costuma ser bem tolerado. Pessoas alérgicas, grávidas ou com condições médicas devem consultar um médico antes.",
              },
              {
                question: "Qual é a garantia?",
                answer: "Oferecemos garantia de 90 dias. Se não estiver satisfeito, devolvemos 100% do seu dinheiro, sem perguntas.",
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="bg-card border border-border rounded-lg p-4 md:p-6 cursor-pointer hover:border-[#00D948]/30 transition-all"
              >
                <summary className="font-bold text-white text-sm md:text-base flex items-center justify-between">
                  {faq.question}
                  <span className="text-[#00D948] ml-2">+</span>
                </summary>
                <p className="text-gray-300 mt-4 text-xs md:text-sm">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
            Pronto para Começar Sua Transformação?
          </h2>
          <p className="text-sm md:text-base text-gray-300 mb-8">
            Junte-se a mais de 50.000 clientes satisfeitos que já transformaram seus corpos com ciência e transparência.
          </p>
          <a
            href={PRODUCTS[0]?.paymentLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#00D948] text-black font-bold py-3 md:py-4 px-8 md:px-12 rounded-lg hover:bg-[#00d948]/90 transition-all text-sm md:text-base"
          >
            COMPRAR AGORA COM DESCONTO
          </a>
        </div>
      </section>
    </div>
  );
}
