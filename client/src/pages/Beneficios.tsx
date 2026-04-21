import { DATA_TRANSPARENCY } from "@/lib/products";
import { Link } from "wouter";

export default function Beneficios() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">CIÊNCIA & PERFORMANCE</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Ciência Pura aplicada ao seu Metabolismo.
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Nossa fórmula Velmo Black não é apenas um suplemento: é um protocolo de otimização celular desenhado para quem busca máxima eficiência em química de gordura e preservação muscular.
              </p>
              <div className="flex gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold">✓</span>
                  </div>
                  <span className="font-semibold">Fórmula Clinicamente Testada</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold">✓</span>
                  </div>
                  <span className="font-semibold">Alta Biodisponibilidade</span>
                </div>
              </div>
            </div>

            {/* Right - Image Placeholder */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg aspect-square flex items-center justify-center border border-border">
              <div className="text-center">
                <div className="text-6xl mb-4">🧬</div>
                <p className="text-muted-foreground">Imagem Científica</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left - Main Product Benefit */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full mb-6">
                <span className="text-xs font-semibold uppercase">CREATINA GUMMES</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Muito além do ganho de força</h3>
              <p className="text-muted-foreground mb-6">
                A Creatina monohidratada em formato gummy acelera a ressintetização de ATP garantindo energia cognitiva e física sustentada sem picos de insulina.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Aumento da síntese proteica</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Neuroproteção e foco mental</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Hidratação intracelular profunda</span>
                </li>
              </ul>
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">DOSE RECOMENDADA</p>
                <p className="text-3xl font-bold text-accent">5g / Dia</p>
              </div>
            </div>

            {/* Right - Additional Benefits */}
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border border-border hover:border-accent/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">⚡</div>
                  <div>
                    <h4 className="font-bold mb-2">Fat Loss Sustentável</h4>
                    <p className="text-sm text-muted-foreground">
                      Estimula a peroxidação preservando o tecido magro, evitando o efeito rebote comum em termogênicos agressivos.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border hover:border-accent/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">💪</div>
                  <div>
                    <h4 className="font-bold mb-2">Preservação Muscular</h4>
                    <p className="text-sm text-muted-foreground">
                      Otimiza a retenção de nitrogênio, crucial para manter o tônus muscular mesmo em períodos de déficit calórico.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-black text-primary-foreground rounded-lg p-6 border border-accent/30">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🔋</div>
                  <div>
                    <h4 className="font-bold mb-2">Energia Prolongada</h4>
                    <p className="text-sm text-primary-foreground/80">
                      Nossa tecnologia de liberação gradual impede o "crash" energético, mantendo sua performance estável do treino ao trabalho.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Transparency */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Stats */}
            <div>
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">DATA TRANSPARENCY</p>
              <h2 className="text-4xl font-bold mb-8">Ciência Aplicada no seu Corpo</h2>
              <p className="text-primary-foreground/80 mb-8">
                Cada métrica abaixo representa estudos clínicos rigorosos e comprovação científica por trás de cada miligrama.
              </p>

              <div className="space-y-6">
                {DATA_TRANSPARENCY.stats.map((stat, idx) => (
                  <div key={idx} className="border-l-4 border-accent pl-6">
                    <p className="text-accent text-sm font-semibold uppercase mb-2">{stat.label}</p>
                    <p className="text-4xl font-bold mb-2">{stat.value}</p>
                    <p className="text-primary-foreground/70 text-sm">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Image Placeholder */}
            <div className="bg-primary-foreground/10 rounded-lg aspect-square flex items-center justify-center border border-primary-foreground/20">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-primary-foreground/70">Gráficos Científicos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para elevar seu padrão?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Junte-se à elite que não aceita nada menos que a precisão clínica em sua jornada de saúde.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all">
              COMPRAR AGORA
            </a>
            <Link href="/como-usar" className="bg-transparent border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all">
              VER PROTOCOLO DE USO
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
