import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-4">Velmo Black Salvador</h3>
            <p className="text-sm text-primary-foreground/70">
              Suplementação científica para máxima performance e saúde integral.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/beneficios" className="hover:text-accent transition-colors">
                  Benefícios
                </Link>
              </li>
              <li>
                <Link href="/como-usar" className="hover:text-accent transition-colors">
                  Como Usar
                </Link>
              </li>
              <li>
                <Link href="/resultados" className="hover:text-accent transition-colors">
                  Resultados
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://instagram.com/velmoblacksalvador" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>© 2024 VELMO BLACK SALVADOR. CLINICAL-LUXE WELLNESS</p>
            <p>Desenvolvido com precisão científica e excelência.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
