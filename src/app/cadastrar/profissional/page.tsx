import Link from "next/link";
import { BriefcaseBusiness, Mail, MapPin, Phone, UserRound } from "lucide-react";
import { PublicPageShell } from "@/components/public-page-shell";

export default function ProfessionalRegisterPage() {
  return (
    <PublicPageShell>
      <main className="px-5 py-12 lg:px-10 lg:py-20">
        <section className="mx-auto max-w-3xl rounded-[1.8rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)] sm:p-10">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[var(--primary)]">Cadastro profissional</p>
          <h1 className="mt-3 text-3xl font-black tracking-[-0.035em] sm:text-4xl">Comece a montar seu perfil profissional.</h1>
          <p className="mt-3 leading-7 text-[var(--text-muted)]">
            Nesta primeira etapa usamos apenas campos de demonstração. O onboarding completo será dividido em etapas depois.
          </p>

          <form className="mt-8 grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label>
                <span className="text-sm font-bold">Nome completo</span>
                <span className="mt-2 flex min-h-13 items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--background)] px-4">
                  <UserRound size={18} className="text-[var(--primary)]" />
                  <input className="w-full bg-transparent text-sm outline-none" placeholder="Seu nome" />
                </span>
              </label>
              <label>
                <span className="text-sm font-bold">Nome profissional</span>
                <span className="mt-2 flex min-h-13 items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--background)] px-4">
                  <BriefcaseBusiness size={18} className="text-[var(--primary)]" />
                  <input className="w-full bg-transparent text-sm outline-none" placeholder="Como será exibido" />
                </span>
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label>
                <span className="text-sm font-bold">E-mail</span>
                <span className="mt-2 flex min-h-13 items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--background)] px-4">
                  <Mail size={18} className="text-[var(--primary)]" />
                  <input type="email" className="w-full bg-transparent text-sm outline-none" placeholder="voce@exemplo.com" />
                </span>
              </label>
              <label>
                <span className="text-sm font-bold">WhatsApp</span>
                <span className="mt-2 flex min-h-13 items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--background)] px-4">
                  <Phone size={18} className="text-[var(--primary)]" />
                  <input className="w-full bg-transparent text-sm outline-none" placeholder="(00) 00000-0000" />
                </span>
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label>
                <span className="text-sm font-bold">Categoria principal</span>
                <select className="mt-2 min-h-13 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 text-sm outline-none">
                  <option>Selecione uma categoria</option>
                  <option>Assistência técnica</option>
                  <option>Eletricista</option>
                  <option>Desenvolvimento web</option>
                </select>
              </label>
              <label>
                <span className="text-sm font-bold">Cidade</span>
                <span className="mt-2 flex min-h-13 items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--background)] px-4">
                  <MapPin size={18} className="text-[var(--primary)]" />
                  <input className="w-full bg-transparent text-sm outline-none" placeholder="Cidade e estado" />
                </span>
              </label>
            </div>

            <label className="flex items-start gap-3 text-sm leading-6 text-[var(--text-muted)]">
              <input type="checkbox" className="mt-1 size-4 accent-[var(--primary)]" />
              Concordo com os termos de uso, política de privacidade e regras para profissionais.
            </label>

            <button className="min-h-13 rounded-xl bg-[var(--primary)] px-5 font-bold text-white hover:bg-[var(--primary-hover)]">
              Continuar cadastro
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-[var(--text-muted)]">
            Já possui conta? <Link href="/entrar" className="font-bold text-[var(--primary)]">Entrar</Link>
          </p>
        </section>
      </main>
    </PublicPageShell>
  );
}
