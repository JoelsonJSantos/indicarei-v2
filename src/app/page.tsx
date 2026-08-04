import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Heart,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const steps = [
  {
    number: "1",
    title: "Diga o que precisa",
    description: "Busque pelo serviço, profissional ou cidade.",
  },
  {
    number: "2",
    title: "Compare os perfis",
    description: "Veja serviços, avaliações, fotos e disponibilidade.",
  },
  {
    number: "3",
    title: "Fale diretamente",
    description: "Entre em contato pelo WhatsApp e combine o atendimento.",
  },
];

const categories = [
  [Wrench, "Assistência técnica", "Computadores, celulares e equipamentos"],
  [BriefcaseBusiness, "Serviços profissionais", "Soluções para empresas e pessoas"],
  [ShieldCheck, "Segurança eletrônica", "Câmeras, alarmes e controle de acesso"],
] as const;

const services = ["Formatação", "Redes Wi-Fi", "Backup", "Manutenção"];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--background)]">
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#inicio" className="flex items-center gap-2.5">
            <span className="grid size-10 place-items-center rounded-2xl bg-[var(--primary)] text-white shadow-[0_8px_24px_rgba(22,140,126,.22)]">
              <Sparkles size={20} strokeWidth={2.4} />
            </span>
            <span className="text-lg font-black tracking-[-0.035em]">Indicarei</span>
          </a>

          <div className="flex items-center gap-1.5">
            <ThemeToggle />
            <a
              href="#buscar"
              className="rounded-xl bg-[var(--primary)] px-4 py-2.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(22,140,126,.18)] transition hover:-translate-y-0.5 hover:bg-[var(--primary-hover)]"
            >
              Começar
            </a>
          </div>
        </div>
      </header>

      <section id="inicio" className="relative px-5 pb-24 pt-16 text-center sm:px-8 sm:pb-28 sm:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(37,185,168,.13),transparent_32%),radial-gradient(circle_at_10%_70%,rgba(242,239,228,.85),transparent_28%)] dark:bg-[radial-gradient(circle_at_50%_12%,rgba(37,185,168,.10),transparent_32%)]" />

        <div className="relative mx-auto max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--success-bg)] px-3.5 py-1.5 text-xs font-bold text-[var(--success-text)]">
            <BadgeCheck size={15} />
            Encontre profissionais sem complicação
          </span>

          <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-black leading-[1.03] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            O profissional certo,
            <span className="block text-[var(--primary)]">perto de você.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--text-muted)] sm:text-lg">
            Pesquise, compare perfis e fale diretamente com profissionais da sua região ou que atendem remotamente.
          </p>

          <form
            id="buscar"
            className="mx-auto mt-9 flex max-w-2xl flex-col gap-3 rounded-[1.4rem] border border-[var(--border)] bg-[var(--surface)] p-3 shadow-[var(--shadow)] sm:flex-row"
          >
            <label className="flex min-h-14 flex-1 items-center gap-3 rounded-2xl px-4 transition focus-within:bg-[var(--surface-hover)]">
              <Search size={21} className="shrink-0 text-[var(--primary)]" />
              <input
                type="search"
                aria-label="Buscar serviço, profissional ou cidade"
                placeholder="Ex.: eletricista em Penedo"
                className="w-full bg-transparent text-sm font-semibold outline-none placeholder:font-medium placeholder:text-[var(--text-muted)]"
              />
            </label>
            <button
              type="submit"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-[var(--primary)] px-7 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[var(--primary-hover)]"
            >
              Buscar agora
              <ArrowRight size={18} />
            </button>
          </form>

          <p className="mt-3 text-xs font-medium text-[var(--text-muted)]">Rápido, gratuito e sem burocracia.</p>

          <div className="relative mx-auto mt-14 max-w-xl text-left">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-[var(--accent)]/10 blur-3xl" />
            <article className="rounded-[1.7rem] border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow)] sm:p-6">
              <div className="flex items-start gap-4 rounded-[1.3rem] bg-[var(--background-soft)] p-4 sm:p-5">
                <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-[var(--primary)] text-lg font-black text-white sm:size-16">
                  JS
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="truncate font-black">João Silva</h2>
                    <span className="rounded-full bg-[var(--success-bg)] px-2 py-1 text-[10px] font-bold text-[var(--success-text)]">
                      Disponível
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-bold text-[var(--primary)]">Técnico em informática</p>
                  <p className="mt-1 flex items-center gap-1 text-xs text-[var(--text-muted)]">
                    <MapPin size={13} /> Penedo, AL
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-1 rounded-xl bg-[var(--surface)] px-2.5 py-1.5 text-sm font-black">
                  <Star size={14} className="fill-current text-amber-500" /> 4,9
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 py-4">
                {services.map((service) => (
                  <div
                    key={service}
                    className="rounded-xl border border-[var(--border)] px-3 py-2.5 text-center text-xs font-bold"
                  >
                    {service}
                  </div>
                ))}
              </div>

              <button className="w-full rounded-2xl bg-[var(--primary)] px-5 py-3.5 font-bold text-white transition hover:bg-[var(--primary-hover)]">
                Ver perfil profissional
              </button>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[var(--primary)]">Como funciona</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] sm:text-4xl">Três passos. Zero complicação.</h2>
            <p className="mt-3 text-sm text-[var(--text-muted)] sm:text-base">Encontre e contrate sem perder tempo.</p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-[1.4rem] border border-[var(--border)] bg-[var(--background)] p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow)]"
              >
                <span className="grid size-11 place-items-center rounded-full bg-[var(--primary)] text-sm font-black text-white">
                  {step.number}
                </span>
                <h3 className="mt-5 font-black">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#14222c] px-5 py-20 text-[#e6edf2] sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#59d3c3]">Profissionais para toda necessidade</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] sm:text-4xl">
              Feito para encontrar quem resolve.
            </h2>
            <p className="mt-4 leading-7 text-[#9aa3ac]">
              Perfis organizados, serviços claros e informações importantes antes do primeiro contato.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {categories.map(([Icon, title, description]) => (
              <article key={title} className="rounded-[1.4rem] border border-[#2c3f4b] bg-[#1e2d38] p-6">
                <span className="grid size-12 place-items-center rounded-2xl bg-[#1d3a33] text-[#59d3c3]">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 text-lg font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#9aa3ac]">{description}</p>
                <a href="#buscar" className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-[#59d3c3]">
                  Explorar <ChevronRight size={16} />
                </a>
              </article>
            ))}
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {["Perfis com serviços detalhados", "Avaliações e informações importantes", "Atendimento presencial ou remoto", "Contato direto pelo WhatsApp"].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm font-semibold text-[#c7d2d9]">
                <span className="grid size-6 place-items-center rounded-full bg-[#1d3a33] text-[#59d3c3]">
                  <Check size={14} strokeWidth={3} />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[var(--shadow)] sm:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_.8fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[var(--primary)]">Para profissionais</p>
              <h2 className="mt-3 max-w-xl text-3xl font-black tracking-[-0.035em] sm:text-4xl">
                Mostre seu trabalho para novos clientes.
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-[var(--text-muted)]">
                Crie seu perfil, apresente seus serviços e receba contatos de pessoas que procuram exatamente o que você faz.
              </p>
              <a
                href="#"
                className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-[var(--primary)] px-6 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[var(--primary-hover)]"
              >
                Criar perfil profissional
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="rounded-[1.5rem] bg-[var(--background-soft)] p-5">
              <div className="flex items-center gap-3 rounded-2xl bg-[var(--surface)] p-4">
                <span className="grid size-11 place-items-center rounded-xl bg-[var(--success-bg)] text-[var(--primary)]">
                  <Heart size={20} />
                </span>
                <div>
                  <p className="font-black">Seu trabalho em destaque</p>
                  <p className="mt-1 text-xs text-[var(--text-muted)]">Perfil completo, galeria e contato direto.</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-3 rounded-2xl bg-[var(--surface)] p-4">
                <span className="grid size-11 place-items-center rounded-xl bg-[var(--success-bg)] text-[var(--primary)]">
                  <BadgeCheck size={20} />
                </span>
                <div>
                  <p className="font-black">Mais confiança para o cliente</p>
                  <p className="mt-1 text-xs text-[var(--text-muted)]">Informações claras e serviços organizados.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--border)] bg-[var(--surface)] px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 font-black text-[var(--text)]">
            <Sparkles size={17} className="text-[var(--primary)]" /> Indicarei
          </div>
          <p>Profissionais e serviços perto de você.</p>
        </div>
      </footer>
    </main>
  );
}
