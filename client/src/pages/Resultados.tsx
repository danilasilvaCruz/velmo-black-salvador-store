import { Link } from "wouter";

export default function Resultados() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">EXPERIÊNCIA CLÍNICA & PERFORMANCE</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Resultados Reais
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Não acreditamos em fórmulas mágicas. Acreditamos na interação entre biologia exigida e composição individual com excelência.
            </p>
          </div>
        </div>
      </section>

      {/* Video Testimonial */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Video Placeholder */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg aspect-video flex items-center justify-center border border-border">
              <div className="text-center">
                <div className="text-6xl mb-4">▶️</div>
                <p className="text-muted-foreground">Depoimento em Vídeo</p>
              </div>
            </div>

            {/* Testimonial */}
            <div>
              <div className="mb-6">
                <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">PERFORMANCE DE ELITE</p>
                <h2 className="text-3xl font-bold mb-4">Depoimento de Usuário</h2>
              </div>

              <blockquote className="text-2xl font-bold mb-6 leading-tight">
                "O Velmo Black Salvador mudou minha percepção sobre suplementação clínica. É sobre nítidez mental e potência física consistente."
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-2xl">👤</div>
                <div>
                  <p className="font-bold">Dr. Helder Mendes</p>
                  <p className="text-sm text-muted-foreground">Especialista em Performance</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-card rounded-lg p-4 border border-border">
                  <p className="text-3xl font-bold text-accent">+22%</p>
                  <p className="text-sm text-muted-foreground">ATP Muscular</p>
                </div>
                <div className="bg-card rounded-lg p-4 border border-border">
                  <p className="text-3xl font-bold text-accent">98.2%</p>
                  <p className="text-sm text-muted-foreground">Absorção</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Protocolo 90 Dias</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Resultados reais de usuários que seguiram o protocolo Velmo Black Salvador com consistência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Before */}
            <div className="bg-card rounded-lg overflow-hidden border border-border">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">📸</div>
                  <p className="text-muted-foreground">Dia 01</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Antes</h3>
                <p className="text-muted-foreground text-sm">Estado inicial do protocolo</p>
              </div>
            </div>

            {/* After */}
            <div className="bg-card rounded-lg overflow-hidden border border-accent/50">
              <div className="bg-gradient-to-br from-accent/10 to-primary/10 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">✨</div>
                  <p className="text-muted-foreground">Dia 90</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Depois</h3>
                <p className="text-muted-foreground text-sm">Transformação completa</p>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="bg-primary text-primary-foreground rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-accent mb-2">-4.2kg</p>
                <p className="text-sm text-primary-foreground/80">Massa Gorda Reduzida</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-accent mb-2">-12%</p>
                <p className="text-sm text-primary-foreground/80">Circunferência Visceral</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-accent mb-2">+3.5%</p>
                <p className="text-sm text-primary-foreground/80">Peso Corporal (Massa Magra)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Image Placeholder */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg aspect-square flex items-center justify-center border border-border">
              <div className="text-center">
                <div className="text-6xl mb-4">🔬</div>
                <p className="text-muted-foreground">Metodologia Black</p>
              </div>
            </div>

            {/* Right - Methodology */}
            <div>
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">METODOLOGIA BLACK</p>
              <h2 className="text-3xl font-bold mb-6">Cada Resultado é Estratégico</h2>
              <p className="text-muted-foreground mb-6">
                Cada resultado-chave corresponde a uma aplicação de suplementação estratégica. Meus clientes veem transformações reais porque seguem o protocolo com precisão.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📊</div>
                  <div>
                    <h4 className="font-bold mb-1">Rastreamento Contínuo</h4>
                    <p className="text-sm text-muted-foreground">Monitoramento de métricas bioquímicas a cada 30 dias</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🎯</div>
                  <div>
                    <h4 className="font-bold mb-1">Ajustes Precisos</h4>
                    <p className="text-sm text-muted-foreground">Otimização contínua baseada em dados pessoais</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">✅</div>
                  <div>
                    <h4 className="font-bold mb-1">Consistência Garantida</h4>
                    <p className="text-sm text-muted-foreground">Suporte científico para manutenção dos resultados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Results */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Mais Transformações</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Result 1 */}
            <div className="bg-card rounded-lg overflow-hidden border border-border">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 aspect-video flex items-center justify-center">
                <div className="text-6xl">🎥</div>
              </div>
              <div className="p-6">
                <h3 className="font-bold mb-2">Constância de Treino</h3>
                <p className="text-sm text-muted-foreground">Suporte nutricional para performance exponencial</p>
              </div>
            </div>

            {/* Result 2 */}
            <div className="bg-card rounded-lg overflow-hidden border border-border">
              <div className="bg-gradient-to-br from-accent/10 to-primary/10 aspect-video flex items-center justify-center">
                <div className="text-6xl">📈</div>
              </div>
              <div className="p-6">
                <h3 className="font-bold mb-2">Evolução Contínua</h3>
                <p className="text-sm text-muted-foreground">Dados científicos comprovam eficácia prolongada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">INICIE SUA EVOLUÇÃO HOJE</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Junte-se à comunidade que não aceita nada menos que a precisão clínica em sua jornada de saúde.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/" className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all">
              COMPRAR AGORA
            </a>
            <Link href="/como-usar" className="bg-transparent border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-all">
              FALAR COM ESPECIALISTA
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
