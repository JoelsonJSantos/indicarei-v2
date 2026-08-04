import Link from "next/link";
import { Mail, UserRound } from "lucide-react";
import { PublicPageShell } from "@/components/public-page-shell";

export default function CustomerRegisterPage() {
  return (
    <PublicPageShell>
      <main className="px-5 py-12 lg:px-10 lg:py-20">
        <section className="mx-auto max-w-2xl rounded-[1.8rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)] sm:p-10">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[var(--primary)]">Cadastro de cliente</p>
          <h1 className="mt-3 text-3xl font-black tracking-[-0.035em] sm:text-4xl">Crie sua conta no Indicarei.</h1>
          <p className="mt-3 leading-7 text-[var(--text-muted)]">Formulário visual de demonstração. O cadastro real será integrado ao Supabase Auth.</p>

          <form className="mt-8 grid gap-5">
            <label>
              <span className="text-sm font-bold">Nome completo</span>
              <span className="mt-2 flex min-h-13 items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--background)] px-4">
                <UserRound size={18} className="text-[var(--primary)]" />
                <input className="w-full bg-transparent text-sm outline-none" placeholder="Seu nome" />
              </span>
            </label>
            <label>
              <span className="text-sm font-bold">E-mail</span>
              <span className="mt-2 flex min-h-13 items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--background)] px-4">
                <Mail size={18} className="text-[var(--primary)]" />
                <input type="email" className="w-full bg-transparent text-sm outline-none" placeholder="voce@exemplo.com" />
              </span>
            </label>
            <div className="grid gap-5 sm:grid-cols-2">
              <label>
                <span className="text-sm font-bold">Senha</span>
                <input type="password" className="mt-2 min-h-13 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 text-sm outline-none" placeholder="Crie uma senha" />
              </label>
              <label>
                <span className="text-sm font-bold">Confirmar senha</span>
                <input type="password" className="mt-2 min-h-13 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 text-sm outline-none" placeholder="Repita a senha" />
              </label>
            </div>
            <label className="flex items-start gap-3 text-sm leading-6 text-[var(--text-muted)]">
              <input type="checkbox" className="mt-1 size-4 accent-[var(--primary)]" />
              Concordo com os termos de uso e a política de privacidade.
            </label>
            <button className="min-h-13 rounded-xl bg-[var(--primary)] px-5 font-bold text-white hover:bg-[var(--primary-hover)]">Criar conta</button>
          </form>

          <p className="mt-6 text-center text-sm text-[var(--text-muted)]">Já possui conta? <Link href="/entrar" className="font-bold text-[var(--primary)]">Entrar</Link></p>
        </section>
      </main>
    </PublicPageShell>
  );
}
