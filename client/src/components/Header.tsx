import { ShoppingCart, Menu, X } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
          <div className="text-xl font-bold text-primary">
            Velmo Black<br className="hidden sm:block" />
            <span className="text-accent">Salvador</span>
          </div>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-accent transition-colors">
            HOME
          </Link>
          <Link href="/como-usar" className="text-sm font-medium hover:text-accent transition-colors">
            COMO USAR
          </Link>
          <Link href="/beneficios" className="text-sm font-medium hover:text-accent transition-colors">
            BENEFICIOS
          </Link>
          <Link href="/depoimentos" className="text-sm font-medium hover:text-accent transition-colors">
            DEPOIMENTOS
          </Link>
          <Link href="/resultados" className="text-sm font-medium hover:text-accent transition-colors">
            RESULTADOS
          </Link>
        </nav>

        {/* CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-muted rounded-lg transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </button>
          <Link href="/" className="hidden sm:inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-all text-sm">
            COMPRAR AGORA
          </Link>
          
          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <nav className="container flex flex-col gap-2 py-3">
            <Link
              href="/"
              className="text-sm font-medium py-2 hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/como-usar"
              className="text-sm font-medium py-2 hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              COMO USAR
            </Link>
            <Link
              href="/beneficios"
              className="text-sm font-medium py-2 hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              BENEFICIOS
            </Link>
            <Link
              href="/depoimentos"
              className="text-sm font-medium py-2 hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              DEPOIMENTOS
            </Link>
            <Link
              href="/resultados"
              className="text-sm font-medium py-2 hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              RESULTADOS
            </Link>
            <Link
              href="/"
              className="block md:hidden bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-all text-sm text-center mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              COMPRAR AGORA
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
