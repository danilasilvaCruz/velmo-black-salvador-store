import { useState } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import { Button } from "@/components/ui/button";
import Quiz from "@/components/Quiz";

export default function Home() {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const nextProduct = () => {
    setCurrentProductIndex((prev) => (prev + 1) % PRODUCTS.length);
  };

  const prevProduct = () => {
    setCurrentProductIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);
  };

  const goToProduct = (index: number) => {
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
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonialIndex(index);
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <div className="min-h-screen bg-background">
      {/* HERO SECTION - IMPACTANTE */}
      <section className="relative bg-gradient-to-b from-[#121212] via-[#1a1a2e] to-background pt-20 pb-12 px-4 overflow-hidden">
        {/* Fundo decorativo com gradiente teal */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D948] rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Badge de urgência */}
          <div className="inline-block bg-[#00D948] text-black px-4 py-2 rounded-full text-sm font-bold mb-6">
            ⏰ ESTOQUE LIMITADO
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            {/* Texto */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Emagrecimento Sem Milagres.
                <span className="text-[#00D948]"> Com Ciência.</span>
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                Fórmula clinicamente testada. Resultado real baseado em evidência científica.
              </p>

              {/* Trust badges */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-[#00D948]">✓</span>
                  <span className="text-white">+50.000 clientes satisfeitos</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00D948]">✓</span>
                  <span className="text-white">Garantia de 90 dias</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00D948]">✓</span>
                  <span className="text-white">Fórmula clinicamente testada</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-[#00D948] text-black hover:bg-[#00d948]/90 font-bold text-lg py-6 px-8"
                  onClick={() => {
                    const element = document.getElementById("kits");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  COMPRAR AGORA
                </Button>
                <Button
                  variant="outline"
                  className="border-[#00D948] text-[#00D948] hover:bg-[#00D948]/10 font-bold text-lg py-6 px-8"
                  onClick={() => {
                    const element = document.getElementById("quiz");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Fazer Quiz Rápido
                </Button>
              </div>
            </div>

            {/* Imagem - Múltiplos potes */}
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-sm h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center overflow-hidden border border-[#00D948]/20">
                <div className="text-6xl">🧪</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE DEPOIMENTOS - CARROSSEL */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Resultados Reais de Nossos Clientes
          </h2>

          <div className="bg-card border border-border rounded-lg p-8 mb-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 bg-[#00D948] rounded-full flex items-center justify-center text-2xl">
                    👤
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">{currentTestimonial.name}</p>
                    <p className="text-sm text-gray-400">{currentTestimonial.location}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-[#00D948]/20 text-[#00D948] px-4 py-2 rounded-full text-sm font-bold">
                    {currentTestimonial.result}
                  </span>
                </div>
                <p className="text-gray-300 mb-4 text-lg italic">"{currentTestimonial.quote}"</p>
                <div className="flex gap-1">
                  {Array(currentTestimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="text-[#00D948]">
                        ⭐
                      </span>
                    ))}
                </div>
              </div>
            </div>

            {/* Navegação do carrossel */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <button
                onClick={prevTestimonial}
                className="p-2 hover:bg-background rounded-lg transition-all"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-6 h-6 text-[#00D948]" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToTestimonial(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      idx === currentTestimonialIndex ? "bg-[#00D948] w-8" : "bg-gray-600"
                    }`}
                    aria-label={`Ir para depoimento ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 hover:bg-background rounded-lg transition-all"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-6 h-6 text-[#00D948]" />
              </button>
            </div>
          </div>

          {/* Link discreto para ver todos os depoimentos */}
          <div className="text-center">
            <a
              href="/depoimentos"
              className="text-gray-400 hover:text-[#00D948] text-sm transition-colors underline"
            >
              Ver todos os depoimentos →
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE INGREDIENTES COM IMAGENS */}
      <section className="py-16 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Ingredientes Naturais</h2>
          <p className="text-center text-gray-400 mb-12">
            Cada ingrediente trabalha em harmonia para resultados reais
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
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
            ].map((ingredient, idx) => (
              <div
                key={idx}
                className={`border rounded-lg p-6 ${ingredient.color} text-center hover:shadow-lg transition-all`}
              >
                <div className="text-4xl mb-3">{ingredient.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-white">{ingredient.name}</h3>
                <p className="text-sm text-gray-300 mb-4">{ingredient.benefit}</p>
                <button className="text-[#00D948] font-bold text-sm hover:underline">
                  ▶ Saiba Mais
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO DE CARROSSEL DE PRODUTOS */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Escolha Seu Produto</h2>
          <p className="text-center text-gray-400 mb-12">
            Deslize para explorar todos os {PRODUCTS.length} produtos disponíveis
          </p>

          <div className="bg-card border border-border rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Imagem */}
              <div className="flex justify-center">
                <div className="w-full max-w-xs h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg flex items-center justify-center overflow-hidden border border-[#00D948]/20">
                  <div className="text-6xl">💊</div>
                </div>
              </div>

              {/* Informações */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-[#00D948] font-bold">
                    Produto {currentProductIndex + 1} de {PRODUCTS.length}
                  </span>
                  {currentProductIndex === 0 && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      🔥 BEST SELLER
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white">{currentProduct.name}</h3>
                <p className="text-gray-300 mb-6">{currentProduct.description}</p>

                <div className="mb-6">
                  <p className="text-sm text-gray-400 mb-2">Principais Benefícios:</p>
                  <ul className="space-y-2">
                    {currentProduct.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                        <span className="text-[#00D948] mt-1">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#00D948]/10 border border-[#00D948] rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-400 mb-1">Preço</p>
                  <p className="text-2xl font-bold text-white">{currentProduct.price}</p>
                </div>

                <a
                  href={currentProduct.paymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#00D948] text-black font-bold py-3 px-6 rounded-lg hover:bg-[#00d948]/90 transition-all text-center mb-4"
                >
                  COMPRAR AGORA
                </a>

                <p className="text-xs text-gray-400 text-center">
                  ✓ Garantia de 90 dias ou seu dinheiro de volta
                </p>
              </div>
            </div>

            {/* Navegação */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevProduct}
                className="p-2 hover:bg-card rounded-lg transition-all"
                aria-label="Produto anterior"
              >
                <ChevronLeft className="w-6 h-6 text-[#00D948]" />
              </button>

              <div className="flex gap-2">
                {PRODUCTS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToProduct(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      idx === currentProductIndex ? "bg-[#00D948] w-8" : "bg-gray-600"
                    }`}
                    aria-label={`Ir para produto ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextProduct}
                className="p-2 hover:bg-card rounded-lg transition-all"
                aria-label="Próximo produto"
              >
                <ChevronRight className="w-6 h-6 text-[#00D948]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE KITS */}
      <section id="kits" className="py-16 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Escolha Seu Kit Ideal</h2>
          <p className="text-center text-gray-400 mb-12">
            Recomendamos 3 a 5 meses para melhores resultados
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                duration: "30 DIAS",
                products: "1 Pote",
                price: "R$ 98,50",
                originalPrice: "R$ 120,00",
                savings: "18%",
                popular: false,
              },
              {
                duration: "60 DIAS",
                products: "2 Potes",
                price: "R$ 180,00",
                originalPrice: "R$ 245,80",
                savings: "27%",
                popular: true,
              },
              {
                duration: "90 DIAS",
                products: "3 Potes",
                price: "R$ 245,80",
                originalPrice: "R$ 350,00",
                savings: "30%",
                popular: false,
              },
            ].map((kit, idx) => (
              <div
                key={idx}
                className={`rounded-lg p-6 border transition-all ${
                  kit.popular
                    ? "bg-[#00D948]/10 border-[#00D948] shadow-lg scale-105"
                    : "bg-card border-border"
                }`}
              >
                {kit.popular && (
                  <div className="mb-4 inline-block bg-[#00D948] text-black px-3 py-1 rounded-full text-xs font-bold">
                    ⭐ MAIS PEDIDO
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2 text-white">{kit.duration}</h3>
                <p className="text-gray-400 mb-4">{kit.products}</p>

                <div className="mb-6">
                  <p className="text-sm text-gray-400 line-through">{kit.originalPrice}</p>
                  <p className="text-3xl font-bold text-[#00D948]">{kit.price}</p>
                  <p className="text-xs text-green-400 mt-2">Economize {kit.savings}</p>
                </div>

                <button className="w-full bg-[#00D948] text-black font-bold py-3 px-6 rounded-lg hover:bg-[#00d948]/90 transition-all">
                  COMPRAR AGORA
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO ANVISA */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="bg-card border border-[#00D948]/30 rounded-lg p-8 text-center">
            <div className="text-4xl mb-4">✓</div>
            <h2 className="text-3xl font-bold mb-4 text-white">Liberado pela ANVISA</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Suplemento alimentar regularizado conforme RDC nº 27/2010 da ANVISA. Fórmula desenvolvida em laboratórios certificados com controle de qualidade rigoroso.
            </p>
            <a
              href="https://bvsms.saude.gov.br/bvs/saudelegis/anvisa/2010/res0027_06_08_2010.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#00D948] font-bold hover:underline"
            >
              🔗 Verificar Registro Oficial ANVISA
            </a>
            <p className="text-xs text-gray-400 mt-6">
              Este produto não é um medicamento. O uso deve estar associado a uma alimentação equilibrada e hábitos saudáveis.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE VÍDEO DE PRODUÇÃO */}
      <section className="py-16 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Como É Feito?</h2>
          <p className="text-center text-gray-400 mb-12">
            Transparência total - Veja como produzimos seu suplemento
          </p>

          <div className="relative w-full max-w-2xl mx-auto">
            <div
              className="relative w-full bg-black rounded-lg overflow-hidden cursor-pointer group"
              style={{ paddingBottom: "56.25%" }}
              onClick={() => setShowVideo(true)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00D948]/20 to-transparent flex items-center justify-center">
                <div className="w-16 h-16 bg-[#00D948] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-black fill-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO QUIZ */}
      <section id="quiz" className="py-16 px-4 bg-background">
        <Quiz />
      </section>

      {/* SEÇÃO FAQ */}
      <section className="py-16 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Dúvidas Frequentes</h2>

          <div className="space-y-4">
            {[
              {
                q: "O produto é aprovado pela Anvisa?",
                a: "Sim! O Velmo Black é um suplemento alimentar regularizado conforme RDC nº 27/2010 da ANVISA.",
              },
              {
                q: "Em quanto tempo verei resultados?",
                a: "Muitos clientes relatam mudanças perceptíveis a partir da 4ª semana de uso contínuo, principalmente quando aliado a uma boa alimentação e exercícios.",
              },
              {
                q: "Qual é a dosagem recomendada?",
                a: "A recomendação é ingerir 5g por dia (1-2 cápsulas), junto a um copo de água, de preferência antes das principais refeições.",
              },
              {
                q: "Possui efeitos colaterais?",
                a: "Quando usado corretamente, o Velmo Black costuma ser bem tolerado. Pessoas alérgicas, grávidas ou com condições médicas devem consultar um médico antes.",
              },
              {
                q: "Qual é a garantia?",
                a: "Oferecemos garantia de 90 dias. Se não estiver satisfeito, devolvemos 100% do seu dinheiro, sem perguntas.",
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="bg-card border border-border rounded-lg p-4 cursor-pointer hover:border-[#00D948]/50 transition-colors"
              >
                <summary className="font-bold text-white flex items-center justify-between">
                  {faq.q}
                  <span className="text-[#00D948]">+</span>
                </summary>
                <p className="text-gray-300 mt-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#121212] to-[#1a1a2e]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Pronto para Começar Sua Transformação?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Junte-se a mais de 50.000 clientes satisfeitos que já transformaram seus corpos com ciência e transparência.
          </p>
          <a
            href={PRODUCTS[0].paymentLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#00D948] text-black font-bold py-4 px-12 rounded-lg hover:bg-[#00d948]/90 transition-all text-lg"
          >
            COMPRAR AGORA COM DESCONTO
          </a>
        </div>
      </section>

      {/* Modal de Vídeo */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-0 text-white hover:text-[#00D948]"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative w-full bg-black rounded-lg overflow-hidden" style={{ paddingBottom: "56.25%" }}>
              <video
                className="absolute inset-0 w-full h-full"
                controls
                autoPlay
              >
                <source src="/manus-storage/video_production.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos HTML5.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
