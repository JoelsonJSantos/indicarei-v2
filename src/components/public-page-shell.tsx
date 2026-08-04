import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";

type PublicPageShellProps = {
  children: React.ReactNode;
};

export function PublicPageShell({ children }: PublicPageShellProps) {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/92 backdrop-blur-xl">
        <div className="mx-auto flex min-h-16 max-w-[1200px] items-center justify-between gap-5 px-5 py-3 lg:px-8">
          <Link
            href="/"
            aria-label="Indicarei — página inicial"
            className="inline-flex items-center gap-2.5"
          >
            <span className="relative grid size-9 place-items-center rounded-xl bg-[var(--primary)] text-white shadow-sm">
              <span className="absolute -right-1 -top-1 size-3 rounded-full border-2 border-[var(--background)] bg-[var(--accent)]" />
              <span className="text-xl font-black leading-none">i</span>
            </span>
            <span className="text-xl font-black tracking-[-0.04em]">
              Indicarei
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            <Link
              href="/"
              className="rounded-full px-3 py-2 text-sm font-semibold text-[var(--text-muted)] hover:bg-[var(--surface-hover)] hover:text-[var(--text)]"
            >
              Início
            </Link>
            <Link
              href="/categorias"
              className="rounded-full px-3 py-2 text-sm font-semibold text-[var(--text-muted)] hover:bg-[var(--surface-hover)] hover:text-[var(--text)]"
            >
              Categorias
            </Link>
            <Link
              href="/buscar"
              className="rounded-full px-3 py-2 text-sm font-semibold text-[var(--text-muted)] hover:bg-[var(--surface-hover)] hover:text-[var(--text)]"
            >
              Buscar
            </Link>
            <Link
              href="/#como-funciona"
              className="rounded-full px-3 py-2 text-sm font-semibold text-[var(--text-muted)] hover:bg-[var(--surface-hover)] hover:text-[var(--text)]"
            >
              Como funciona
            </Link>
            <Link
              href="/#planos"
              className="rounded-full px-3 py-2 text-sm font-semibold text-[var(--text-muted)] hover:bg-[var(--surface-hover)] hover:text-[var(--text)]"
            >
              Planos
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="/entrar"
              className="hidden rounded-full px-4 py-2.5 text-sm font-bold text-[var(--text-muted)] hover:bg-[var(--surface-hover)] hover:text-[var(--text)] sm:inline-flex"
            >
              Entrar
            </Link>
            <Link
              href="/cadastrar/profissional"
              className="hidden rounded-full bg-[var(--primary)] px-4 py-2.5 text-sm font-bold text-white hover:bg-[var(--primary-hover)] md:inline-flex"
            >
              Criar perfil
            </Link>
          </div>
        </div>
      </header>

      {children}

      <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-5 py-10 sm:grid-cols-[1.2fr_1fr_1fr] lg:px-8 lg:py-14">
          <div className="max-w-sm">
            <Link
              href="/"
              aria-label="Indicarei — página inicial"
              className="inline-flex items-center gap-2.5"
            >
              <span className="relative grid size-9 place-items-center rounded-xl bg-[var(--primary)] text-white shadow-sm">
                <span className="absolute -right-1 -top-1 size-3 rounded-full border-2 border-[var(--surface)] bg-[var(--accent)]" />
                <span className="text-xl font-black leading-none">i</span>
              </span>
              <span className="text-xl font-black tracking-[-0.04em]">
                Indicarei
              </span>
            </Link>

            <p className="mt-5 text-sm leading-7 text-[var(--text-muted)]">
              Um ponto de encontro para descobrir profissionais, comparar
              informações e iniciar uma conversa direta.
            </p>

            <p className="mt-5 rounded-xl bg-[var(--accent-soft)] px-4 py-3 text-xs leading-5">
              O Indicarei não executa nem intermedeia os serviços anunciados
              pelos profissionais.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-extrabold">Indicarei</h2>
            <ul className="mt-4 grid gap-3 text-sm text-[var(--text-muted)]">
              <li>
                <Link href="/sobre" className="hover:text-[var(--text)]">
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="/#como-funciona"
                  className="hover:text-[var(--text)]"
                >
                  Como funciona
                </Link>
              </li>
              <li>
                <Link href="/#planos" className="hover:text-[var(--text)]">
                  Planos
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-[var(--text)]">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-extrabold">Informações</h2>
            <ul className="mt-4 grid gap-3 text-sm text-[var(--text-muted)]">
              <li>
                <Link href="/termos" className="hover:text-[var(--text)]">
                  Termos de uso
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidade"
                  className="hover:text-[var(--text)]"
                >
                  Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/cadastrar/profissional"
                  className="hover:text-[var(--text)]"
                >
                  Criar perfil profissional
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--border)]">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-1 px-5 py-4 text-xs text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <p>© 2026 Indicarei. Todos os direitos reservados.</p>
            <p>Feito para aproximar o Brasil de quem sabe fazer.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
