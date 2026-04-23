import { PRODUCTS, BENEFITS } from "@/lib/products";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
                <span className="text-xs font-semibold uppercase tracking-widest">Bem-vindo ao Emagrecimento Ético</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Transforme seu Metabolismo com <span className="text-accent">Ciência Pura</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Suplementação clinicamente testada e cientificamente comprovada. Sem promessas falsas, apenas resultados reais baseados em evidência.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#produtos" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all text-center">
                  VER CATÁLOGO
                </a>
                <Link href="/beneficios" className="bg-transparent border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all text-center">
                  NOSSOS BENEFÍCIOS
                </Link>
              </div>
            </div>

            {/* Right - Placeholder for Hero Image */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg aspect-square flex items-center justify-center border border-border">
              <div className="text-center">
                <div className="text-6xl mb-4">🧪</div>
                <p className="text-muted-foreground">Imagem do Produto Principal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BENEFITS.map((benefit, idx) => (
              <div key={idx} className="bg-card rounded-lg p-8 border border-border hover:border-accent/30 transition-all">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">NOSSO CATÁLOGO</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Produtos Velmo Black Salvador</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada produto é formulado com precisão científica para otimizar seu metabolismo e performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="bg-card rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-all group">
                {/* Product Image */}
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 aspect-square flex items-center justify-center border-b border-border group-hover:from-primary/10 group-hover:to-accent/10 transition-all overflow-hidden">
                  {product.image && !product.image.includes('placeholder') ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="text-5xl mb-2">💊</div>
                      <p className="text-sm text-muted-foreground">{product.name}</p>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{product.description}</p>

                  {/* Benefits */}
                  <div className="mb-6 space-y-2">
                    {product.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-accent text-sm font-bold">•</span>
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-6 border-t border-border">
                    <span className="text-2xl font-bold text-accent">{product.price}</span>
                    <a
                      href={product.paymentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-all text-sm"
                    >
                      COMPRAR
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para elevar seu padrão?</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Junte-se à elite que não aceita nada menos que a precisão clínica em sua jornada de saúde.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#produtos" className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all">
              COMPRAR AGORA
            </a>
            <Link href="/resultados" className="bg-transparent border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-all">
              VER ESTUDOS CLÍNICOS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
