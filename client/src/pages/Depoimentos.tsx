import { Star, Instagram } from "lucide-react";

export default function Depoimentos() {
  // Array de depoimentos com espaços para preenchimento
  const testimonials = [
    {
      id: 1,
      name: "Adicione aqui",
      profile: "@instagram",
      image: "/placeholder-testimonial-1.jpg",
      quote: "Adicione o depoimento aqui",
      rating: 5,
      transformation: "Resultado esperado"
    },
    {
      id: 2,
      name: "Adicione aqui",
      profile: "@instagram",
      image: "/placeholder-testimonial-2.jpg",
      quote: "Adicione o depoimento aqui",
      rating: 5,
      transformation: "Resultado esperado"
    },
    {
      id: 3,
      name: "Adicione aqui",
      profile: "@instagram",
      image: "/placeholder-testimonial-3.jpg",
      quote: "Adicione o depoimento aqui",
      rating: 5,
      transformation: "Resultado esperado"
    },
    {
      id: 4,
      name: "Adicione aqui",
      profile: "@instagram",
      image: "/placeholder-testimonial-4.jpg",
      quote: "Adicione o depoimento aqui",
      rating: 5,
      transformation: "Resultado esperado"
    },
    {
      id: 5,
      name: "Adicione aqui",
      profile: "@instagram",
      image: "/placeholder-testimonial-5.jpg",
      quote: "Adicione o depoimento aqui",
      rating: 5,
      transformation: "Resultado esperado"
    },
    {
      id: 6,
      name: "Adicione aqui",
      profile: "@instagram",
      image: "/placeholder-testimonial-6.jpg",
      quote: "Adicione o depoimento aqui",
      rating: 5,
      transformation: "Resultado esperado"
    },
    {
      id: 7,
      name: "Adicione aqui",
      profile: "@instagram",
      image: "/placeholder-testimonial-7.jpg",
      quote: "Adicione o depoimento aqui",
      rating: 5,
      transformation: "Resultado esperado"
    },
    {
      id: 8,
      name: "Adicione aqui",
      profile: "@instagram",
      image: "/placeholder-testimonial-8.jpg",
      quote: "Adicione o depoimento aqui",
      rating: 5,
      transformation: "Resultado esperado"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-accent/10 to-background">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-4">
              RESULTADOS REAIS
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Histórias de <span className="text-accent">Transformação</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Veja os resultados reais de pessoas que confiaram no Velmo Black Salvador e transformaram suas vidas.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">+1000</div>
              <p className="text-sm md:text-base text-muted-foreground">Clientes satisfeitos</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">4.9★</div>
              <p className="text-sm md:text-base text-muted-foreground">Avaliação média</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">90 dias</div>
              <p className="text-sm md:text-base text-muted-foreground">Tempo médio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-card rounded-xl overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-lg"
              >
                {/* Image Container */}
                <div className="aspect-square bg-muted flex items-center justify-center overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Rating */}
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-accent text-accent"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm text-foreground mb-3 line-clamp-3 italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Transformation */}
                  <div className="bg-accent/10 rounded-lg p-2 mb-3">
                    <p className="text-xs font-semibold text-accent">
                      {testimonial.transformation}
                    </p>
                  </div>

                  {/* Profile */}
                  <div className="border-t border-border pt-3">
                    <p className="font-semibold text-sm text-foreground">
                      {testimonial.name}
                    </p>
                    <a
                      href={`https://instagram.com/${testimonial.profile.replace("@", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-accent hover:text-accent/80 transition-colors mt-1"
                    >
                      <Instagram className="w-3 h-3" />
                      {testimonial.profile}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vídeos de <span className="text-accent">Clientes Reais</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Confira os depoimentos em vídeo do nosso Instagram @velmoblacksalvador
            </p>
          </div>

          {/* Video Placeholder */}
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-muted rounded-xl flex items-center justify-center border-2 border-dashed border-border">
              <div className="text-center">
                <div className="text-6xl mb-4">📹</div>
                <p className="text-lg font-semibold text-foreground mb-2">
                  Vídeos em breve
                </p>
                <p className="text-muted-foreground mb-4">
                  Adicione links de vídeos do Instagram aqui
                </p>
                <a
                  href="https://instagram.com/velmoblacksalvador"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  <Instagram className="w-5 h-5" />
                  Ver no Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transformações <span className="text-accent">Antes & Depois</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Resultados documentados de clientes que seguiram o protocolo completo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Before & After Slots */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-card rounded-xl overflow-hidden border border-border">
                <div className="grid grid-cols-2 gap-0">
                  {/* Before */}
                  <div className="aspect-square bg-muted flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-2xl mb-2">📸</p>
                      <p className="text-xs font-semibold text-muted-foreground">ANTES</p>
                    </div>
                  </div>
                  {/* After */}
                  <div className="aspect-square bg-muted flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-2xl mb-2">📸</p>
                      <p className="text-xs font-semibold text-muted-foreground">DEPOIS</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t border-border">
                  <p className="font-semibold text-foreground mb-1">Cliente {i}</p>
                  <p className="text-sm text-accent font-semibold">Resultado: Adicione aqui</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para sua <span className="text-accent">transformação?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se a mais de 1000 clientes que já transformaram suas vidas com o Velmo Black Salvador.
          </p>
          <a
            href="/"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
          >
            Começar Agora
          </a>
        </div>
      </section>
    </div>
  );
}
