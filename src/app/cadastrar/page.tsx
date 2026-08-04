import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, UserRound } from "lucide-react";
import { PublicPageShell } from "@/components/public-page-shell";

const accountTypes = [
  {
    title: "Quero contratar serviços",
    description: "Crie uma conta de cliente para salvar favoritos, avaliar profissionais e acompanhar contatos.",
    icon: UserRound,
    href: "/cadastrar/cliente",
    action: "Cadastrar como cliente",
  },
  {
    title: "Quero divulgar meu trabalho",
    description: "Crie seu perfil profissional, apresente seus serviços e receba contatos de novos clientes.",
    icon: BriefcaseBusiness,
    href: "/cadastrar/profissional",
    action: "Cadastrar como profissional",
  },
];

export default function RegisterPage() {
  return (
    <PublicPageShell>
      <main className="px-5 py-12 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[var(--primary)]">Criar conta</p>
            <h1 className="mt-3 text-4xl font-black tracking-[-0.045em] sm:text-5xl">Como você quer usar o Indicarei?</h1>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-[var(--text-muted)]">
              Escolha o tipo de cadastro. As regras reais de autenticação serão conectadas ao Supabase posteriormente.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {accountTypes.map(({ title, description, icon: Icon, href, action }) => (
              <article key={title} className="rounded-[1.7rem] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-sm sm:p-8">
                <span className="grid size-14 place-items-center rounded-2xl bg-[var(--success-bg)] text-[var(--primary)]">
                  <Icon size={26} />
                </span>
                <h2 className="mt-6 text-2xl font-black tracking-tight">{title}</h2>
                <p className="mt-3 leading-7 text-[var(--text-muted)]">{description}</p>
                <Link href={href} className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-5 font-bold text-white transition hover:bg-[var(--primary-hover)]">
                  {action} <ArrowRight size={18} />
                </Link>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-[var(--text-muted)]">
            Já possui uma conta? <Link href="/entrar" className="font-bold text-[var(--primary)]">Entrar</Link>
          </p>
        </div>
      </main>
    </PublicPageShell>
  );
}
