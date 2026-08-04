import Link from "next/link";
import { Sparkles } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

type PublicPageShellProps = {
  children: React.ReactNode;
};

export function PublicPageShell({ children }: PublicPageShellProps) {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 lg:px-10">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid size-10 place-items-center rounded-2xl bg-[var(--primary)] text-white shadow-[0_8px_24px_rgba(22,140,126,.22)]">
              <Sparkles size={20} strokeWidth={2.4} />
            </span>
            <span className="text-lg font-black tracking-[-0.035em]">Indicarei</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-[var(--text-muted)] lg:flex">
            <Link href="/" className="transition hover:text-[var(--text)]">Início</Link>
            <Link href="/buscar" className="transition hover:text-[var(--text)]">Buscar</Link>
            <Link href="/categorias" className="transition hover:text-[var(--text)]">Categorias</Link>
            <Link href="/cadastrar/profissional" className="transition hover:text-[var(--text)]">Para profissionais</Link>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="/entrar"
              className="hidden rounded-xl px-4 py-2.5 text-sm font-bold text-[var(--text-muted)] transition hover:bg-[var(--surface-hover)] sm:inline-flex"
            >
              Entrar
            </Link>
            <Link
              href="/cadastrar/profissional"
              className="hidden rounded-xl bg-[var(--primary)] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[var(--primary-hover)] md:inline-flex"
            >
              Divulgar meu trabalho
            </Link>
          </div>
        </div>
      </header>

      {children}

      <footer className="border-t border-[var(--border)] bg-[var(--surface)] px-5 py-10 lg:px-10">
        <div className="mx-auto grid max-w-[1440px] gap-8 text-sm sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-black text-[var(--text)]">
              <Sparkles size={17} className="text-[var(--primary)]" />
              Indicarei
            </div>
            <p className="mt-3 max-w-xs leading-6 text-[var(--text-muted)]">
              Profissionais e serviços perto de você.
            </p>
          </div>

          <div>
            <p className="font-black">Explorar</p>
            <div className="mt-3 grid gap-2 text-[var(--text-muted)]">
              <Link href="/buscar">Buscar profissionais</Link>
              <Link href="/categorias">Categorias</Link>
              <Link href="/cadastrar/profissional">Criar perfil profissional</Link>
            </div>
          </div>

          <div>
            <p className="font-black">Institucional</p>
            <div className="mt-3 grid gap-2 text-[var(--text-muted)]">
              <Link href="/sobre">Sobre</Link>
              <Link href="/contato">Contato</Link>
            </div>
          </div>

          <div>
            <p className="font-black">Legal</p>
            <div className="mt-3 grid gap-2 text-[var(--text-muted)]">
              <Link href="/termos">Termos de uso</Link>
              <Link href="/privacidade">Privacidade</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
