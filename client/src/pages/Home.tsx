import { Button } from "@/components/ui/button";
import { PRODUCTS, BENEFITS } from "@/lib/products";
import ProductCarousel from "@/components/ProductCarousel";
import Quiz from "@/components/Quiz";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* SEÇÃO 1: HERO COMPACTO */}
      <section className="w-full bg-gradient-to-b from-card to-background py-8 md:py-12 border-b border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Texto */}
            <div className="flex flex-col gap-4">
              <div className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-lg w-fit">
                <span className="text-xs font-bold uppercase tracking-widest">⏰ Estoque Limitado</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Emagrecimento Sem Milagres. Com Ciência.
              </h1>
              
              <p className="text-lg text-muted-foreground">
                Fórmula clinicamente testada. Resultado real baseado em evidência científica.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a
                  href="#carrossel"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:opacity-90 transition-all text-center"
                >
                  Ver Produtos
                </a>
                <a
                  href="#quiz"
                  className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary hover:text-primary-foreground transition-all text-center"
                >
                  Fazer Quiz Rápido
                </a>
              </div>

              {/* Trust Badges */}
              <div className="space-y-2 pt-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-accent">✓</span>
                  <span className="text-foreground">+50.000 clientes satisfeitos</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-accent">✓</span>
                  <span className="text-foreground">Garantia de 90 dias</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-accent">✓</span>
                  <span className="text-foreground">Fórmula clinicamente testada</span>
                </div>
              </div>
            </div>

            {/* Imagem */}
            <div className="hidden md:flex justify-center">
              <div className="w-full max-w-sm aspect-square rounded-lg overflow-hidden bg-card border-2 border-border flex items-center justify-center">
                {PRODUCTS[0]?.image && PRODUCTS[0].image.startsWith('http') ? (
                  <img
                    src={PRODUCTS[0].image}
                    alt="Velmo Black"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-6xl">💊</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: CARROSSEL DE PRODUTOS */}
      <section id="carrossel" className="w-full py-12 md:py-16">
        <ProductCarousel />
      </section>

      {/* SEÇÃO 3: BENEFÍCIOS */}
      <section className="w-full bg-card py-12 md:py-16 border-y border-border">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Por Que Velmo Black?
            </h2>
            <p className="text-muted-foreground">
              Ciência pura, transparência total, resultados reais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BENEFITS.map((benefit, idx) => (
              <div key={idx} className="bg-background rounded-lg p-6 border border-border text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: QUIZ RÁPIDO */}
      <section id="quiz" className="w-full py-12 md:py-16">
        <div className="container">
          <Quiz />
        </div>
      </section>

      {/* SEÇÃO 5: CTA FINAL */}
      <section className="w-full bg-gradient-to-r from-primary/10 to-accent/10 py-12 md:py-16 border-t border-border">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pronto para Começar?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Escolha seu produto ideal agora e comece sua jornada com ciência e transparência
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#carrossel"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold hover:opacity-90 transition-all"
            >
              Ver Todos os Produtos
            </a>
            <a
              href="#quiz"
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Fazer Quiz Rápido
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
