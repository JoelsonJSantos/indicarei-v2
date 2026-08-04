import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";
import { ProfessionalCard } from "@/components/professional-card";
import { PublicPageShell } from "@/components/public-page-shell";
import { mockProfessionals } from "@/lib/mock-data";

const steps = [
  ["1", "Diga o que precisa", "Busque pelo serviço, profissional ou cidade."],
  ["2", "Compare os perfis", "Veja serviços, avaliações e disponibilidade."],
  ["3", "Fale diretamente", "Entre em contato e combine o atendimento."],
] as const;

const featuredCategories = [
  [Wrench, "Assistência técnica", "Computadores, celulares e equipamentos"],
  [BriefcaseBusiness, "Serviços profissionais", "Soluções para empresas e pessoas"],
  [ShieldCheck, "Segurança eletrônica", "Câmeras, alarmes e controle de acesso"],
] as const;

export default function Home() {
  return (
    <PublicPageShell>
      <main>
        <section className="relative overflow-hidden px-5 py-16 lg:px-10 lg:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(37,185,168,.14),transparent_27%),radial-gradient(circle_at_82%_68%,rgba(242,239,228,.9),transparent_25%)] dark:bg-[radial-gradient(circle_at_18%_22%,rgba(37,185,168,.10),transparent_27%),radial-gradient(circle_at_82%_68%,rgba(37,185,168,.05),transparent_25%)]" />

          <div className="relative mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-[1.05fr_.95fr] xl:gap-24">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--success-bg)] px-3.5 py-1.5 text-xs font-bold text-[var(--success-text)]">
                <BadgeCheck size={15} />
                Profissionais e serviços perto de você
              </span>

              <h1 className="mt-7 text-5xl font-black leading-[1.02] tracking-[-0.055em] sm:text-6xl xl:text-7xl">
                Encontre quem resolve.
                <span className="block text-[var(--primary)]">Sem perder tempo.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--text-muted)] sm:text-lg">
                Pesquise por serviço, profissional ou cidade. Compare perfis e fale diretamente com quem pode ajudar.
              </p>

              <form action="/buscar" className="mt-9 flex max-w-2xl flex-col gap-3 rounded-[1.4rem] border border-[var(--border)] bg-[var(--surface)] p-3 shadow-[var(--shadow)] sm:flex-row">
                <label className="flex min-h-14 flex-1 items-center gap-3 rounded-2xl px-4 focus-within:bg-[var(--surface-hover)]">
                  <Search size={21} className="shrink-0 text-[var(--primary)]" />
                  <input name="q" type="search" placeholder="Ex.: eletricista em Penedo" className="w-full bg-transparent text-sm font-semibold outline-none placeholder:font-medium placeholder:text-[var(--text-muted)]" />
                </label>
                <button type="submit" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-[var(--primary)] px-7 font-bold text-white transition hover:bg-[var(--primary-hover)]">
                  Buscar <ArrowRight size={18} />
                </button>
              </form>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-[var(--text-muted)]">
                {["Gratuito para buscar", "Contato direto", "Atendimento local ou remoto"].map((item) => (
                  <span key={item} className="flex items-center gap-2"><Check size={15} className="text-[var(--primary)]" /> {item}</span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-2xl">
              <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-[var(--accent)]/10 blur-3xl" />
              <ProfessionalCard professional={mockProfessionals[0]} />
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--border)] bg-[var(--surface)] px-5 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="text-center">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[var(--primary)]">Como funciona</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] sm:text-4xl">Três passos. Zero complicação.</h2>
              <p className="mt-3 text-[var(--text-muted)]">Encontre e contrate sem perder tempo.</p>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {steps.map(([number, title, description]) => (
                <article key={number} className="rounded-[1.4rem] border border-[var(--border)] bg-[var(--background)] p-7 transition hover:-translate-y-1 hover:shadow-[var(--shadow)]">
                  <span className="grid size-11 place-items-center rounded-full bg-[var(--primary)] text-sm font-black text-white">{number}</span>
                  <h3 className="mt-5 text-lg font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[var(--primary)]">Categorias em destaque</p>
                <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] sm:text-4xl">Encontre quem faz o serviço que você precisa.</h2>
              </div>
              <Link href="/categorias" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)]">Ver todas <ArrowRight size={17} /></Link>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {featuredCategories.map(([Icon, title, description]) => (
                <Link key={title} href="/categorias" className="rounded-[1.4rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow)]">
                  <span className="grid size-12 place-items-center rounded-2xl bg-[var(--success-bg)] text-[var(--primary)]"><Icon size={22} /></span>
                  <h3 className="mt-5 text-lg font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--border)] bg-[var(--surface)] px-5 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-[1440px] items-center gap-10 rounded-[2rem] border border-[var(--border)] bg-[var(--background-soft)] p-8 lg:grid-cols-[1fr_.75fr] lg:p-12">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[var(--primary)]">Para profissionais</p>
              <h2 className="mt-3 max-w-xl text-3xl font-black tracking-[-0.035em] sm:text-4xl">Mostre seu trabalho para novos clientes.</h2>
              <p className="mt-4 max-w-xl leading-7 text-[var(--text-muted)]">Crie seu perfil, apresente seus serviços e receba contatos de pessoas que procuram exatamente o que você faz.</p>
              <Link href="/cadastrar/profissional" className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-[var(--primary)] px-6 py-3.5 font-bold text-white transition hover:bg-[var(--primary-hover)]">
                Criar perfil profissional <ArrowRight size={18} />
              </Link>
            </div>

            <div className="rounded-[1.5rem] bg-[var(--surface)] p-6">
              <Sparkles className="text-[var(--primary)]" />
              <h3 className="mt-4 text-xl font-black">Estrutura pronta para crescer</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">Primeiro criamos todas as páginas. Depois conectamos Supabase, Cloudinary, Resend e Asaas.</p>
              <p className="mt-4 flex items-center gap-2 text-sm font-bold"><MapPin size={16} className="text-[var(--primary)]" /> Responsivo para desktop e mobile</p>
              <p className="mt-2 flex items-center gap-2 text-sm font-bold"><Star size={16} className="text-[var(--primary)]" /> Conteúdo fictício separado dos dados reais</p>
            </div>
          </div>
        </section>
      </main>
    </PublicPageShell>
  );
}
