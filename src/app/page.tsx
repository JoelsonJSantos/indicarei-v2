import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Camera,
  Check,
  Hammer,
  Laptop,
  MessageCircle,
  Paintbrush,
  Search,
  Sparkles,
  Stethoscope,
  UsersRound,
} from "lucide-react";

import { ProfessionalCard } from "@/components/professional-card";
import { PublicPageShell } from "@/components/public-page-shell";
import { mockProfessionals } from "@/lib/mock-data";

const categories = [
  {
    title: "Reformas e reparos",
    description: "Casa e manutenção",
    icon: Hammer,
    query: "Reformas e reparos",
  },
  {
    title: "Saúde e bem-estar",
    description: "Cuidado próximo",
    icon: Stethoscope,
    query: "Saúde e bem-estar",
  },
  {
    title: "Tecnologia",
    description: "Soluções digitais",
    icon: Laptop,
    query: "Tecnologia",
  },
  {
    title: "Eventos",
    description: "Momentos especiais",
    icon: Camera,
    query: "Eventos",
  },
  {
    title: "Design e criação",
    description: "Ideias com identidade",
    icon: Paintbrush,
    query: "Design e criação",
  },
  {
    title: "Serviços empresariais",
    description: "Apoio ao negócio",
    icon: Building2,
    query: "Serviços empresariais",
  },
] as const;

const steps = [
  {
    number: "01",
    title: "Pesquise o serviço",
    description:
      "Use nome, profissão, especialidade, cidade, estado ou atendimento remoto.",
    icon: Search,
  },
  {
    number: "02",
    title: "Compare os profissionais",
    description:
      "Confira serviços, localização, informações do perfil e avaliações.",
    icon: UsersRound,
  },
  {
    number: "03",
    title: "Entre em contato diretamente",
    description: "Converse pelo canal informado no perfil profissional.",
    icon: MessageCircle,
  },
] as const;

const freePlanFeatures = [
  "Perfil profissional público",
  "Informações de contato",
  "Categoria e localização",
  "Descrição dos serviços",
  "Aparição nas buscas",
];

const featuredPlanFeatures = [
  "Todos os recursos do plano Gratuito",
  "Galeria de fotos e vídeos",
  "Links para redes sociais",
  "Maior destaque nas buscas",
  "Selo de perfil em destaque",
];

export default function Home() {
  return (
    <PublicPageShell>
      <main>
        <section className="relative overflow-hidden border-b border-[var(--border)]">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(37,185,168,0.10),transparent_42%,rgba(242,239,228,0.62))] dark:bg-[linear-gradient(135deg,rgba(37,185,168,0.07),transparent_44%)]" />

          <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[var(--primary)] shadow-sm">
                <span className="size-2 rounded-full bg-[var(--accent)]" />
                Encontre. Compare. Converse.
              </div>

              <h1 className="mt-6 text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                O profissional certo pode estar{" "}
                <span className="text-[var(--primary)]">mais perto</span> do que
                você imagina.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--text-muted)] sm:text-lg">
                Pesquise profissionais em qualquer cidade do Brasil e entre em
                contato diretamente.
              </p>

              <form
                action="/buscar"
                role="search"
                className="card-surface mt-8 flex flex-col gap-2 rounded-2xl p-2 sm:flex-row"
              >
                <label className="flex min-h-14 flex-1 items-center gap-3 rounded-xl px-4 focus-within:bg-[var(--surface-hover)]">
                  <Search
                    size={20}
                    className="shrink-0 text-[var(--primary)]"
                  />
                  <span className="sr-only">
                    Nome, profissão, serviço, cidade ou estado
                  </span>
                  <input
                    name="q"
                    type="search"
                    autoComplete="off"
                    placeholder="Nome, profissão, serviço, cidade ou estado"
                    className="w-full bg-transparent text-sm font-semibold outline-none placeholder:text-[var(--text-muted)]"
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-7 text-sm font-bold text-white hover:bg-[var(--primary-hover)]"
                >
                  <Search size={17} />
                  Buscar
                </button>
              </form>

              <p className="mt-3 text-xs leading-5 text-[var(--text-muted)]">
                Busque por nome, profissão, serviço, categoria, cidade, estado
                ou atendimento remoto.
              </p>
            </div>

            <div className="mx-auto w-full max-w-xl">
              <ProfessionalCard professional={mockProfessionals[0]} />
            </div>
          </div>
        </section>

        <section
          id="categorias"
          className="mx-auto max-w-[1200px] px-5 py-16 lg:px-8 lg:py-20"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--primary)]">
                Comece por aqui
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl">
                O que você precisa resolver?
              </h2>
            </div>

            <Link
              href="/categorias"
              className="inline-flex w-fit items-center gap-2 text-sm font-bold text-[var(--primary)] hover:text-[var(--primary-hover)]"
            >
              Ver todas as categorias
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
            {categories.map(
              ({ title, description, icon: Icon, query }) => (
                <Link
                  key={title}
                  href={`/buscar?q=${encodeURIComponent(query)}`}
                  className="card-flat flex min-h-36 flex-col justify-between rounded-2xl p-4 sm:min-h-44 sm:p-6"
                >
                  <Icon size={25} className="text-[var(--primary)]" />
                  <div className="mt-8">
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--text-muted)] sm:text-xs">
                      {description}
                    </p>
                    <h3 className="mt-2 text-sm font-extrabold leading-tight sm:text-xl">
                      {title}
                    </h3>
                  </div>
                </Link>
              ),
            )}
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 pb-16 lg:px-8 lg:pb-20">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--primary)]">
                  Profissionais em destaque
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl">
                  Encontre profissionais preparados para ajudar.
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--text-muted)] sm:text-base">
                  Compare informações, serviços, localização e avaliações antes
                  de iniciar o contato.
                </p>
              </div>

              <Link
                href="/buscar"
                className="inline-flex w-fit items-center gap-2 text-sm font-bold text-[var(--primary)] hover:text-[var(--primary-hover)]"
              >
                Ver profissionais
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {mockProfessionals.map((professional) => (
                <ProfessionalCard
                  key={professional.slug}
                  professional={professional}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          id="como-funciona"
          className="border-y border-[var(--border)] bg-[var(--dark-section)] text-white"
        >
          <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-16 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-8 lg:py-20">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--accent)]">
                Como funciona
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.035em] sm:text-4xl">
                Menos indicação perdida. Mais contexto para escolher.
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-[var(--dark-text-muted)] sm:text-base">
                O Indicarei organiza as informações essenciais sem se colocar
                entre cliente e profissional.
              </p>
            </div>

            <ol className="grid gap-4">
              {steps.map(
                ({ number, title, description, icon: Icon }) => (
                  <li
                    key={number}
                    className="grid grid-cols-[auto_1fr_auto] items-start gap-4 rounded-2xl border border-white/12 bg-white/5 p-5 sm:items-center"
                  >
                    <span className="pt-0.5 text-xs font-black text-[var(--accent)]">
                      {number}
                    </span>
                    <div>
                      <h3 className="font-extrabold">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-[var(--dark-text-muted)]">
                        {description}
                      </p>
                    </div>
                    <Icon size={22} className="text-[var(--accent)]" />
                  </li>
                ),
              )}
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="card-flat rounded-2xl p-6 sm:p-9">
              <BadgeCheck size={30} className="text-[var(--primary)]" />
              <p className="mt-7 text-xs font-black uppercase tracking-[0.18em] text-[var(--primary)]">
                Informação clara
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em]">
                Escolha com mais segurança.
              </h2>
              <p className="mt-4 leading-7 text-[var(--text-muted)]">
                Descubra quem atende sua região, compare especialidades e fale
                diretamente com o profissional.
              </p>
            </article>

            <article className="rounded-2xl bg-[var(--accent-soft)] p-6 sm:p-9">
              <Sparkles size={30} className="text-[var(--primary)]" />
              <p className="mt-7 text-xs font-black uppercase tracking-[0.18em] text-[var(--primary)]">
                Para profissionais
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em]">
                Seu trabalho merece ser encontrado.
              </h2>
              <p className="mt-4 leading-7 text-[var(--text-muted)]">
                Reúna seus serviços, contatos e áreas de atendimento em um
                perfil profissional preparado para crescer.
              </p>
              <Link
                href="/cadastrar/profissional"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-5 py-3 text-sm font-bold text-white hover:bg-[var(--primary-hover)]"
              >
                Criar perfil
                <ArrowRight size={17} />
              </Link>
            </article>
          </div>
        </section>

        <section
          id="planos"
          className="border-y border-[var(--border)] bg-[var(--background-soft)]"
        >
          <div className="mx-auto max-w-[1200px] px-5 py-16 lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--primary)]">
                Planos
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl">
                Comece gratuitamente. Ganhe destaque quando fizer sentido.
              </h2>
              <p className="mt-4 leading-7 text-[var(--text-muted)]">
                Crie seu perfil gratuitamente e migre para o plano Destaque
                quando precisar de galeria, redes sociais e maior visibilidade.
              </p>
            </div>

            <div className="mt-9 grid gap-5 lg:grid-cols-2">
              <article className="card-flat rounded-2xl p-6 sm:p-9">
                <h3 className="text-3xl font-extrabold">Gratuito</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                  Para começar sua presença profissional e aparecer nas buscas.
                </p>
                <ul className="mt-7 grid gap-3">
                  {freePlanFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm font-semibold"
                    >
                      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[var(--accent-soft)] text-[var(--primary)]">
                        <Check size={14} strokeWidth={3} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-2xl bg-[var(--dark-section)] p-6 text-white sm:p-9">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-3xl font-extrabold">Destaque</h3>
                  <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-black text-[#08211d]">
                    Mais recursos
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-[var(--dark-text-muted)]">
                  Para apresentar melhor seu trabalho e conquistar maior
                  visibilidade.
                </p>
                <ul className="mt-7 grid gap-3">
                  {featuredPlanFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm font-semibold"
                    >
                      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-white/10 text-[var(--accent)]">
                        <Check size={14} strokeWidth={3} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>
      </main>
    </PublicPageShell>
  );
}
