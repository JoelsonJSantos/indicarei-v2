import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  Search,
  ShieldCheck,
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

const platformBenefits = [
  "Perfil profissional organizado",
  "Serviços e área de atendimento claros",
  "Contato direto com o profissional",
];

export default function Home() {
  return (
    <PublicPageShell>
      <main>
        <section className="relative overflow-hidden px-5 py-16 lg:px-10 lg:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(37,185,168,0.08),transparent_42%,rgba(242,239,228,0.5))] dark:bg-[linear-gradient(135deg,rgba(37,185,168,0.06),transparent_42%)]" />

          <div className="relative mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] xl:gap-20">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--success-bg)] px-3.5 py-1.5 text-xs font-bold text-[var(--success-text)]">
                <BadgeCheck size={15} />
                Profissionais e serviços perto de você
              </span>

              <h1 className="mt-7 text-5xl font-black leading-[1.02] tracking-[-0.055em] sm:text-6xl xl:text-7xl">
                Encontre quem resolve.
                <span className="block text-[var(--primary)]">
                  Sem perder tempo.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--text-muted)] sm:text-lg">
                Pesquise por serviço, profissional ou cidade. Compare perfis e
                fale diretamente com quem pode ajudar.
              </p>

              <form
                action="/buscar"
                className="card-surface mt-9 flex max-w-2xl flex-col gap-3 rounded-[1.25rem] p-3 sm:flex-row"
              >
                <label className="flex min-h-14 flex-1 items-center gap-3 rounded-xl px-4 focus-within:bg-[var(--surface-hover)]">
                  <Search
                    size={21}
                    className="shrink-0 text-[var(--primary)]"
                  />
                  <input
                    name="q"
                    type="search"
                    placeholder="Ex.: eletricista em Penedo"
                    className="w-full bg-transparent text-sm font-semibold outline-none placeholder:font-medium placeholder:text-[var(--text-muted)]"
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-7 font-bold text-white hover:bg-[var(--primary-hover)]"
                >
                  Buscar
                  <ArrowRight size={18} />
                </button>
              </form>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-[var(--text-muted)]">
                {["Gratuito para buscar", "Contato direto", "Atendimento local ou remoto"].map(
                  (item) => (
                    <span key={item} className="flex items-center gap-2">
                      <Check size={15} className="text-[var(--primary)]" />
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="mx-auto w-full max-w-2xl">
              <ProfessionalCard professional={mockProfessionals[0]} />
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--border)] bg-[var(--surface)] px-5 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="text-center">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[var(--primary)]">
                Como funciona
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] sm:text-4xl">
                Três passos. Zero complicação.
              </h2>
              <p className="mt-3 text-[var(--text-muted)]">
                Encontre e contrate sem perder tempo.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {steps.map(([number, title, description]) => (
                <article
                  key={number}
                  className="card-surface rounded-[1.25rem] p-7"
                >
                  <span className="grid size-11 place-items-center rounded-full bg-[var(--primary)] text-sm font-black text-white">
                    {number}
                  </span>
                  <h3 className="mt-5 text-lg font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[var(--primary)]">
                  Categorias em destaque
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] sm:text-4xl">
                  Encontre quem faz o serviço que você precisa.
                </h2>
              </div>

              <Link
                href="/categorias"
                className="inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)] hover:text-[var(--primary-hover)]"
              >
                Ver todas
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {featuredCategories.map(([Icon, title, description]) => (
                <Link
                  key={title}
                  href="/categorias"
                  className="card-surface rounded-[1.25rem] p-6"
                >
                  <span className="grid size-12 place-items-center rounded-xl bg-[var(--success-bg)] text-[var(--primary)]">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 text-lg font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                    {description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--border)] bg-[var(--surface)] px-5 py-20 lg:px-10 lg:py-24">
          <div className="card-surface mx-auto grid max-w-[1440px] items-center gap-10 rounded-[1.5rem] p-8 lg:grid-cols-[1fr_0.72fr] lg:p-12">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[var(--primary)]">
                Para profissionais
              </p>
              <h2 className="mt-3 max-w-xl text-3xl font-black tracking-[-0.035em] sm:text-4xl">
                Mostre seu trabalho para novos clientes.
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-[var(--text-muted)]">
                Crie seu perfil, apresente seus serviços e receba contatos de
                pessoas que procuram exatamente o que você faz.
              </p>

              <Link
                href="/cadastrar/profissional"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-6 py-3.5 font-bold text-white hover:bg-[var(--primary-hover)]"
              >
                Criar perfil profissional
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="rounded-[1.25rem] bg-[var(--background-soft)] p-6">
              <h3 className="text-xl font-black">
                Uma apresentação profissional e objetiva
              </h3>
              <div className="mt-5 space-y-4">
                {platformBenefits.map((benefit) => (
                  <p
                    key={benefit}
                    className="flex items-start gap-3 text-sm font-semibold text-[var(--text-muted)]"
                  >
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[var(--success-bg)] text-[var(--primary)]">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {benefit}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </PublicPageShell>
  );
}
