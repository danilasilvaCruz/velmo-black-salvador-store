import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container text-center">
        <div className="mb-8">
          <div className="text-8xl font-bold text-primary mb-4">404</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Página não encontrada</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Desculpe, a página que você está procurando não existe ou foi movida.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all">
            Voltar para Home
          </Link>
          <Link href="/beneficios" className="bg-transparent border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all">
            Ver Benefícios
          </Link>
        </div>
      </div>
    </div>
  );
}
