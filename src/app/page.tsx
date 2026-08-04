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
  ["1", "Diga o que precisa", "Busque pelo serviço, profissional ou cidade."],
  ["2", "Compare os perfis", "Veja serviços, avaliações, fotos e disponibilidade."],
  ["3", "Fale diretamente", "Entre em contato e combine o atendimento."],
] as const;

const categories = [
  [Wrench, "Assistência técnica", "Computadores, celulares e equipamentos"],
  [BriefcaseBusiness, "Serviços profissionais", "Soluções para empresas e pessoas"],
  [ShieldCheck, "Segurança eletrônica", "Câmeras, alarmes e controle de acesso"],
] as const;

const services = ["Formatação", "Redes Wi-Fi", "Backup", "Manutenção"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 lg:px-10">
          <a href="#inicio" className="flex items-center gap-2.5">
            <span className="grid size-10 place-items-center rounded-2xl bg-[var(--primary)] text-white shadow-[0_8px_24px_rgba(22,140,126,.22)]">
              <Sparkles size={20} strokeWidth={2.4} />
            </span>
            <span className="text-lg font-black tracking-[-0.035em]">Indicarei</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-[var(--text-muted)] lg:flex">
            <a href="#inicio" className="hover:text-[var(--text)]">Início</a>
            <a href="#como-funciona" className="hover:text-[var(--text)]">Como funciona</a>
            <a href="#categorias" className="hover:text-[var(--text)]">Categorias</a>
            <a href="#profissionais" className="hover:text-[var(--text)]">Para profissionais</a>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href="#" className="hidden rounded-xl px-4 py-2.5 text-sm font-bold text-[var(--text-muted)] hover:bg-[var(--surface-hover)] sm:inline-flex">
              Entrar
            </a>
            <a href="#buscar" className="rounded-xl bg-[var(--primary)] px-4 py-2.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(22,140,126,.18)] hover:-translate-y-0.5 hover:bg-[var(--primary-hover)]">
              Começar
            </a>
          </div>
        </div>
      </header>

      <section id="inicio" className="relative overflow-hidden px-5 py-16 lg:px-10 lg:py-24">
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
              Pesquise por serviço, profissional ou cidade. Compare perfis completos e fale diretamente com quem pode ajudar.
            </p>

            <form id="buscar" className="mt-9 flex max-w-2xl flex-col gap-3 rounded-[1.4rem] border border-[var(--border)] bg-[var(--surface)] p-3 shadow-[var(--shadow)] sm:flex-row">
              <label className="flex min-h-14 flex-1 items-center gap-3 rounded-2xl px-4 focus-within:bg-[var(--surface-hover)]">
                <Search size={21} className="shrink-0 text-[var(--primary)]" />
                <input type="search" aria-label="Buscar serviço, profissional ou cidade" placeholder="Ex.: eletricista em Penedo" className="w-full bg-transparent text-sm font-semibold outline-none placeholder:font-medium placeholder:text-[var(--text-muted)]" />
              </label>
              <button type="submit" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-[var(--primary)] px-7 font-bold text-white hover:-translate-y-0.5 hover:bg-[var(--primary-hover)]">
                Buscar agora <ArrowRight size={18} />
              </button>
            </form>

            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-[var(--text-muted)]">
              {["Gratuito para buscar", "Contato direto", "Atendimento local ou remoto"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check size={15} className="text-[var(--primary)]" /> {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-[var(--accent)]/10 blur-3xl" />
            <article className="rounded-[1.8rem] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow)] sm:p-7">
              <div className="flex items-start gap-4 rounded-[1.35rem] bg-[var(--background-soft)] p-5">
                <div className="grid size-16 shrink-0 place-items-center rounded-2xl bg-[var(--primary)] text-xl font-black text-white">JS</div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-lg font-black">João Silva</h2>
                    <span className="rounded-full bg-[var(--success-bg)] px-2 py-1 text-[10px] font-bold text-[var(--success-text)]">Disponível</span>
                  </div>
                  <p className="mt-1 text-sm font-bold text-[var(--primary)]">Técnico em informática</p>
                  <p className="mt-1 flex items-center gap-1 text-xs text-[var(--text-muted)]"><MapPin size={13} /> Penedo, AL</p>
                </div>
                <div className="flex items-center gap-1 rounded-xl bg-[var(--surface)] px-2.5 py-1.5 text-sm font-black"><Star size={14} className="fill-current text-amber-500" /> 4,9</div>
              </div>

              <div className="grid grid-cols-2 gap-3 py-5">
                {services.map((service) => (
                  <div key={service} className="rounded-xl border border-[var(--border)] px-3 py-3 text-center text-xs font-bold">{service}</div>
                ))}
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <button className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-3.5 font-bold hover:bg-[var(--surface-hover)]">Ver perfil</button>
                <button className="rounded-2xl bg-[var(--primary)] px-5 py-3.5 font-bold text-white hover:bg-[var(--primary-hover)]">Chamar no WhatsApp</button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="border-y border-[var(--border)] bg-[var(--surface)] px-5 py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[var(--primary)]">Como funciona</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] sm:text-4xl">Três passos. Zero complicação.</h2>
            <p className="mt-3 text-[var(--text-muted)]">Encontre e contrate sem perder tempo.</p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {steps.map(([number, title, description]) => (
              <article key={number} className="rounded-[1.4rem] border border-[var(--border)] bg-[var(--background)] p-7 hover:-translate-y-1 hover:shadow-[var(--shadow)]">
                <span className="grid size-11 place-items-center rounded-full bg-[var(--primary)] text-sm font-black text-white">{number}</span>
                <h3 className="mt-5 text-lg font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="categorias" className="px-5 py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-8 xl:grid-cols-[1fr_360px]">
          <div>
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[var(--primary)]">Categorias em destaque</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] sm:text-4xl">Encontre quem faz o serviço que você precisa.</h2>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {categories.map(([Icon, title, description]) => (
                <article key={title} className="rounded-[1.4rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
                  <span className="grid size-12 place-items-center rounded-2xl bg-[var(--success-bg)] text-[var(--primary)]"><Icon size={22} /></span>
                  <h3 className="mt-5 text-lg font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{description}</p>
                  <a href="#buscar" className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-[var(--primary)]">Explorar <ChevronRight size={16} /></a>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)]">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[var(--primary)]">Indicarei</p>
            <h3 className="mt-3 text-2xl font-black tracking-tight">Um jeito mais simples de escolher.</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">Informações claras, serviços organizados e contato direto.</p>
            <div className="mt-6 space-y-3">
              {["Perfis detalhados", "Avaliações", "Atendimento por região", "Contato pelo WhatsApp"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl bg-[var(--background)] px-3 py-3 text-sm font-semibold">
                  <span className="grid size-6 place-items-center rounded-full bg-[var(--success-bg)] text-[var(--primary)]"><Check size={14} strokeWidth={3} /></span>
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="profissionais" className="border-t border-[var(--border)] bg-[var(--surface)] px-5 py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 rounded-[2rem] border border-[var(--border)] bg-[var(--background-soft)] p-8 lg:grid-cols-[1fr_.8fr] lg:p-12">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[var(--primary)]">Para profissionais</p>
            <h2 className="mt-3 max-w-xl text-3xl font-black tracking-[-0.035em] sm:text-4xl">Mostre seu trabalho para novos clientes.</h2>
            <p className="mt-4 max-w-xl leading-7 text-[var(--text-muted)]">Crie seu perfil, apresente seus serviços e receba contatos de pessoas que procuram exatamente o que você faz.</p>
            <a href="#" className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-[var(--primary)] px-6 py-3.5 font-bold text-white hover:-translate-y-0.5 hover:bg-[var(--primary-hover)]">Criar perfil profissional <ArrowRight size={18} /></a>
          </div>

          <div className="space-y-3">
            {[ [Heart, "Seu trabalho em destaque", "Perfil completo, galeria e contato direto."], [BadgeCheck, "Mais confiança para o cliente", "Informações claras e serviços organizados."] ].map(([Icon, title, description]) => (
              <div key={title as string} className="flex items-center gap-3 rounded-2xl bg-[var(--surface)] p-4">
                <span className="grid size-11 place-items-center rounded-xl bg-[var(--success-bg)] text-[var(--primary)]"><Icon size={20} /></span>
                <div><p className="font-black">{title as string}</p><p className="mt-1 text-xs text-[var(--text-muted)]">{description as string}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--border)] bg-[var(--surface)] px-5 py-8 lg:px-10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 text-sm text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 font-black text-[var(--text)]"><Sparkles size={17} className="text-[var(--primary)]" /> Indicarei</div>
          <p>Profissionais e serviços perto de você.</p>
        </div>
      </footer>
    </main>
  );
}
