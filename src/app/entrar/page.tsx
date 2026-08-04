import Link from "next/link";
import { LockKeyhole, LogIn, Mail, Sparkles } from "lucide-react";
import { PublicPageShell } from "@/components/public-page-shell";

export default function LoginPage() {
  return (
    <PublicPageShell>
      <main className="px-5 py-12 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-5xl overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] lg:grid-cols-[.9fr_1.1fr]">
          <section className="hidden bg-[var(--background-soft)] p-10 lg:flex lg:flex-col lg:justify-between">
            <div>
              <span className="grid size-12 place-items-center rounded-2xl bg-[var(--primary)] text-white">
                <Sparkles size={22} />
              </span>
              <h1 className="mt-8 text-4xl font-black tracking-[-0.045em]">Bem-vindo de volta.</h1>
              <p className="mt-4 max-w-sm leading-7 text-[var(--text-muted)]">
                Entre para acessar seu perfil profissional ou o painel administrativo.
              </p>
            </div>
            <p className="text-sm text-[var(--text-muted)]">Autenticação real será conectada ao Supabase.</p>
          </section>

          <section className="p-6 sm:p-10 lg:p-12">
            <div className="mx-auto max-w-md">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[var(--primary)]">Acessar conta</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.035em]">Entrar no Indicarei</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                Esta tela já está pronta visualmente. A sessão será implementada depois.
              </p>

              <form className="mt-8 space-y-5">
                <label className="block">
                  <span className="text-sm font-bold">E-mail</span>
                  <span className="mt-2 flex min-h-13 items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 focus-within:border-[var(--primary)]">
                    <Mail size={18} className="text-[var(--primary)]" />
                    <input type="email" placeholder="voce@exemplo.com" className="w-full bg-transparent text-sm outline-none" />
                  </span>
                </label>

                <label className="block">
                  <span className="flex items-center justify-between text-sm font-bold">
                    Senha
                    <Link href="/recuperar-senha" className="text-xs text-[var(--primary)]">Esqueci minha senha</Link>
                  </span>
                  <span className="mt-2 flex min-h-13 items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 focus-within:border-[var(--primary)]">
                    <LockKeyhole size={18} className="text-[var(--primary)]" />
                    <input type="password" placeholder="Sua senha" className="w-full bg-transparent text-sm outline-none" />
                  </span>
                </label>

                <button className="inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-5 font-bold text-white transition hover:bg-[var(--primary-hover)]">
                  <LogIn size={18} /> Entrar
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-[var(--text-muted)]">
                Quer divulgar seu trabalho?{" "}
                <Link href="/cadastrar/profissional" className="font-bold text-[var(--primary)]">
                  Criar perfil profissional
                </Link>
              </p>
            </div>
          </section>
        </div>
      </main>
    </PublicPageShell>
  );
}
