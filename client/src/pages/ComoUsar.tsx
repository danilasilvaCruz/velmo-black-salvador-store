import { USAGE_PROTOCOL } from "@/lib/products";
import { Link } from "wouter";

export default function ComoUsar() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">GUIA DE EXCELÊNCIA</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Como Potencializar Seus Resultados
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A precisão clínica encontra o seu ritual diário. Siga o protocolo Velmo Black Salvador para garantir máxima absorção e performance.
            </p>
          </div>
        </div>
      </section>

      {/* Dosage Protocol */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left - Protocol */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full mb-6">
                <span className="text-xs font-semibold uppercase">PROTOCOLO DE DOSAGEM</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">{USAGE_PROTOCOL.title}</h2>
              <p className="text-accent font-semibold text-lg mb-2">{USAGE_PROTOCOL.subtitle}</p>
              <p className="text-muted-foreground mb-8">{USAGE_PROTOCOL.description}</p>

              {/* Dosage Steps */}
              <div className="space-y-4">
                {USAGE_PROTOCOL.steps.map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20 text-accent font-bold">
                        {step.number}
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-accent uppercase">{step.label}</p>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Image Placeholder */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg aspect-square flex items-center justify-center border border-border">
              <div className="text-center">
                <div className="text-6xl mb-4">⏰</div>
                <p className="text-muted-foreground">Timing Ideal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Ritual */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Seu Ritual de 3 Passos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Integre o Velmo Black Salvador ao seu dia com precisão. Cada passo é estratégico para máxima absorção.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {USAGE_PROTOCOL.ritual.map((step, idx) => (
              <div key={idx} className="bg-card rounded-lg p-8 border border-border hover:border-accent/30 transition-all text-center">
                <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full mb-6">
                  <span className="text-sm font-bold">{step.number}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left - Tips */}
            <div>
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">DATA TRANSPARENCY</p>
              <h2 className="text-4xl font-bold mb-8">Dicas para Resultados Exponenciais</h2>
              <p className="text-primary-foreground/80 mb-8">
                O Velmo Black funciona em sinergia com o seu estilo de vida. Otimize seus marcadores biológicos com estas práticas:
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-accent pl-6">
                  <h4 className="font-bold mb-2">Sono Restaurador</h4>
                  <p className="text-primary-foreground/70 text-sm">
                    Mantenha 7-8 horas de sono de qualidade. A reparação celular ocorre principalmente durante o descanso profundo.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h4 className="font-bold mb-2">Nutrição Consciente</h4>
                  <p className="text-primary-foreground/70 text-sm">
                    Priorize alimentos densos em nutrientes e reduza processados para evitar picos inflamatórios.
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Image Placeholder */}
            <div className="bg-primary-foreground/10 rounded-lg aspect-square flex items-center justify-center border border-primary-foreground/20">
              <div className="text-center">
                <div className="text-6xl mb-4">💡</div>
                <p className="text-primary-foreground/70">Dicas Científicas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para começar?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Siga o protocolo Velmo Black Salvador e comece sua transformação hoje mesmo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all">
              COMPRAR AGORA
            </a>
            <Link href="/resultados" className="bg-transparent border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all">
              VER RESULTADOS REAIS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
