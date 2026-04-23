import { useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import { PRODUCTS } from '@/lib/products';

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? PRODUCTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === PRODUCTS.length - 1 ? 0 : prev + 1));
  };

  const currentProduct = PRODUCTS[currentIndex];
  const bestSellerIndex = 0; // Produto 1 é best-seller
  const topIndex = 1; // Produto 2 é top

  const isBestSeller = currentIndex === bestSellerIndex;
  const isTop = currentIndex === topIndex;

  return (
    <div className="w-full bg-background py-8 md:py-12">
      <div className="container">
        {/* Título */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Escolha Seu Produto
          </h2>
          <p className="text-muted-foreground">
            Deslize para explorar todos os {PRODUCTS.length} produtos disponíveis
          </p>
        </div>

        {/* Carrossel */}
        <div className="relative bg-card rounded-xl p-6 md:p-8 border border-border">
          {/* Produto Principal */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* Imagem */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-sm">
                {/* Badge de Destaque */}
                {(isBestSeller || isTop) && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className={`px-3 py-1 rounded-lg text-xs font-bold text-white ${
                      isBestSeller ? 'bg-red-500' : 'bg-blue-500'
                    }`}>
                      {isBestSeller ? '🔥 BEST SELLER' : '⭐ TOP 2'}
                    </div>
                  </div>
                )}

                {/* Imagem do Produto */}
                <div className="aspect-square rounded-lg overflow-hidden bg-background border-2 border-border flex items-center justify-center">
                  {currentProduct.image && currentProduct.image.startsWith('http') ? (
                    <img
                      src={currentProduct.image}
                      alt={currentProduct.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-6xl">{currentProduct.image || '💊'}</div>
                  )}
                </div>

                {/* Indicador de Posição */}
                <div className="text-center mt-4 text-sm text-muted-foreground">
                  Produto {currentIndex + 1} de {PRODUCTS.length}
                </div>
              </div>
            </div>

            {/* Informações do Produto */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              {/* Nome */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {currentProduct.name}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  {currentProduct.description}
                </p>
              </div>

              {/* Benefícios */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                  Principais Benefícios
                </p>
                <ul className="space-y-2">
                  {currentProduct.benefits.slice(0, 3).map((benefit: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-accent flex-shrink-0 mt-1">✓</span>
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Preço */}
              <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                <p className="text-xs text-muted-foreground mb-1">Preço</p>
                <p className="text-2xl font-bold text-accent">{currentProduct.price}</p>
              </div>

              {/* CTA */}
              <a
                href={currentProduct.paymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary text-primary-foreground px-6 py-4 rounded-lg font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 text-lg"
              >
                <ShoppingCart size={20} />
                COMPRAR AGORA
              </a>

              {/* Garantia */}
              <div className="text-center text-xs text-muted-foreground">
                ✓ Garantia de 90 dias ou seu dinheiro de volta
              </div>
            </div>
          </div>

          {/* Controles de Navegação */}
          <div className="flex items-center justify-between mt-8 gap-4">
            <button
              onClick={handlePrev}
              className="p-2 md:p-3 rounded-lg bg-background border border-border hover:bg-accent hover:text-background transition-all"
              aria-label="Produto anterior"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Indicador de Progresso */}
            <div className="flex-1 flex justify-center gap-1">
              {PRODUCTS.map((_: any, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex
                      ? 'bg-accent w-8'
                      : 'bg-border w-2 hover:bg-muted-foreground'
                  }`}
                  aria-label={`Ir para produto ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2 md:p-3 rounded-lg bg-background border border-border hover:bg-accent hover:text-background transition-all"
              aria-label="Próximo produto"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* CTA Secundário */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4">
            Não tem certeza? Faça nosso quiz rápido para uma recomendação personalizada
          </p>
          <a
            href="/#quiz"
            className="inline-block px-6 py-3 rounded-lg border-2 border-accent text-accent font-semibold hover:bg-accent hover:text-background transition-all"
          >
            Fazer Quiz Rápido
          </a>
        </div>
      </div>
    </div>
  );
}
