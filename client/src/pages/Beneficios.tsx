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

      {/* Scientific Backing - Psyllium */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">RESPALDO CIENTÍFICO</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Velmo Black Chá: Ciência Comprovada</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nossos ingredientes não são promessas vazias. Cada componente tem respaldo em estudos científicos rigorosos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Study Details */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full mb-6">
                <span className="text-xs font-semibold uppercase">📄 Artigo Científico</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Psyllium: Fibra Solúvel com Evidência Clínica</h3>
              
              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-sm text-muted-foreground font-semibold mb-1">TÍTULO DO ESTUDO</p>
                  <p className="font-semibold text-lg">Soluble fibers from psyllium improve glycemic response and body weight among diabetes type 2 patients</p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground font-semibold mb-1">AUTORES</p>
                  <p>AS Abutair, IA Naser, AT Hamed</p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground font-semibold mb-1">PUBLICAÇÃO</p>
                  <p>Nutrition Journal, 2016</p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground font-semibold mb-1">TIPO DE ESTUDO</p>
                  <p className="flex items-center gap-2">
                    <span className="text-accent font-bold">✓</span>
                    Randomizado Controlado (Alto nível de evidência científica)
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground font-semibold mb-1">CITAÇÕES</p>
                  <p className="font-bold text-accent">160+ citações até o momento</p>
                </div>
              </div>

              <a 
                href="https://link.springer.com/article/10.1186/s12937-016-0207-4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
              >
                Acessar Estudo Completo →
              </a>
            </div>

            {/* Right - Conclusions */}
            <div className="space-y-6">
              <div className="bg-accent/10 rounded-lg p-6 border border-accent/30">
                <h4 className="font-bold text-lg mb-4 text-accent">O que o Estudo Concluiu:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">✓</span>
                    <span>As fibras solúveis do psyllium melhoram a resposta glicêmica (controlam o açúcar no sangue)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">✓</span>
                    <span>Houve redução do peso corporal nos pacientes com diabetes tipo 2</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">✓</span>
                    <span>Estudo randomizado controlado com alto nível de evidência científica</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <h4 className="font-bold text-lg mb-4">Como Isso se Aplica ao Velmo Black Chá:</h4>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="text-2xl">🍽️</div>
                    <div>
                      <p className="font-semibold mb-1">Aumenta a Saciedade</p>
                      <p className="text-sm text-muted-foreground">A fibra age no estômago prolongando a sensação de cheio</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-2xl">📈</div>
                    <div>
                      <p className="font-semibold mb-1">Estabiliza a Glicemia</p>
                      <p className="text-sm text-muted-foreground">Melhora a resposta glicêmica, evitando picos de açúcar</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-2xl">⚖️</div>
                    <div>
                      <p className="font-semibold mb-1">Auxilia no Emagrecimento</p>
                      <p className="text-sm text-muted-foreground">Redução de peso corporal confirmada em estudo clínico</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black text-primary-foreground rounded-lg p-6 border border-accent/30">
                <p className="text-sm mb-3 font-semibold uppercase text-accent">O Resumo</p>
                <p className="leading-relaxed">
                  "O psyllium presente no Velmo Black Chá tem respaldo científico: um estudo publicado no Nutrition Journal mostrou que essa fibra melhora o controle do açúcar no sangue e reduz o peso corporal em pacientes com diabetes tipo 2. Ou seja, não é só promessa – a ciência confirma: menos fome, menos pico de glicose e mais resultado na balança."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Backing - Inulin */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">RESPALDO CIENTÍFICO - INULINA</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Inulina: Meta-Análise de 32 Estudos Clínicos</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A ciência mais recente (2024) comprova: inulina reduz peso, gordura e medidas. Dados de 1.184 adultos com sobrepeso/obesidade.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Study Details */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full mb-6">
                <span className="text-xs font-semibold uppercase">📄 Meta-Análise 2024</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Inulina do Tipo Frutano: Controle de Peso Comprovado</h3>
              
              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-sm text-muted-foreground font-semibold mb-1">TÍTULO DO ESTUDO</p>
                  <p className="font-semibold text-lg">The effects of chicory inulin-type fructans supplementation on weight management outcomes: systematic review, meta-analysis, and meta-regression of randomized controlled trials</p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground font-semibold mb-1">PUBLICAÇÃO</p>
                  <p>The American Journal of Clinical Nutrition, Volume 120, Issue 5, Novembro 2024</p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground font-semibold mb-1">TIPO DE ESTUDO</p>
                  <p className="flex items-center gap-2">
                    <span className="text-accent font-bold">✓</span>
                    Meta-Análise + Revisão Sistemática (Máximo nível de evidência)
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground font-semibold mb-1">ESTUDOS ANALISADOS</p>
                  <p className="font-bold text-accent">32 ensaios clínicos randomizados</p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground font-semibold mb-1">PARTICIPANTES</p>
                  <p className="font-bold text-accent">1.184 adultos com sobrepeso/obesidade</p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground font-semibold mb-1">DURAÇÃO DOS ESTUDOS</p>
                  <p>De 4 a 36 semanas</p>
                </div>
              </div>

              <a 
                href="https://www.sciencedirect.com/science/article/pii/S0002916524007512?via%3Dihub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
              >
                Acessar Meta-Análise Completa →
              </a>
            </div>

            {/* Right - Results Table */}
            <div className="space-y-6">
              <div className="bg-accent/10 rounded-lg p-6 border border-accent/30">
                <h4 className="font-bold text-lg mb-4 text-accent">Benefícios Comprovados:</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 pb-3 border-b border-accent/20">
                    <span className="text-accent font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold">Perda de Peso Corporal</p>
                      <p className="text-sm text-muted-foreground">-0,97 kg em média (p &lt; 0,05)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 pb-3 border-b border-accent/20">
                    <span className="text-accent font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold">Redução do IMC</p>
                      <p className="text-sm text-muted-foreground">-0,39 kg/m² em média (p &lt; 0,05)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 pb-3 border-b border-accent/20">
                    <span className="text-accent font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold">Perda de Massa Gorda</p>
                      <p className="text-sm text-muted-foreground">-0,37 kg em média (p &lt; 0,05)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 pb-3 border-b border-accent/20">
                    <span className="text-accent font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold">Redução da Circunferência da Cintura</p>
                      <p className="text-sm text-muted-foreground">-1,03 cm em média (p &lt; 0,05)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold">Redução do Percentual de Gordura</p>
                      <p className="text-sm text-muted-foreground">-0,78% com mais de 8 semanas (p &lt; 0,05)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black text-primary-foreground rounded-lg p-6 border border-accent/30">
                <p className="text-sm mb-3 font-semibold uppercase text-accent">Conclusão dos Autores</p>
                <p className="leading-relaxed mb-4">
                  "A suplementação com inulina pode beneficiar o controle de peso, reduzindo peso corporal, IMC, massa gorda, circunferência da cintura e percentual de gordura."
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <p className="text-sm mb-3 font-semibold uppercase text-accent">Por que isso importa para o Velmo Black Drink</p>
                <p className="leading-relaxed text-sm">
                  Uma meta-análise publicada no American Journal of Clinical Nutrition – uma das revistas científicas mais respeitadas do mundo – analisou 32 estudos com mais de 1.100 adultos e comprovou: a inulina reduz peso (-0,97 kg), reduz gordura corporal (-0,37 kg), reduz medidas da cintura (-1,03 cm) e ainda reduz o percentual de gordura (-0,78% com mais de 8 semanas de uso). O Velmo Black Drink tem inulina na fórmula. Resultado não é promessa – é ciência aplicada para o seu corpo.
                </p>
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
