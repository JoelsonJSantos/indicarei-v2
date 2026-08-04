import { ArrowRight, CheckCircle2, MapPin, Search, ShieldCheck, Sparkles, Star } from "lucide-react";

const categories = [
  "Assistência técnica",
  "Eletricista",
  "Desenvolvimento web",
  "Segurança eletrônica",
  "Ar-condicionado",
  "Manutenção residencial",
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Perfis mais confiáveis",
    description: "Informações organizadas para ajudar você a escolher com segurança.",
  },
  {
    icon: MapPin,
    title: "Profissionais por região",
    description: "Encontre serviços presenciais ou remotos de forma simples.",
  },
  {
    icon: Sparkles,
    title: "Experiência sem complicação",
    description: "Busca rápida, perfil claro e contato direto pelo WhatsApp.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--background)]">
      <header className="border-b border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#" className="flex items-center gap-2.5 font-black tracking-tight">
            <span className="grid size-10 place-items-center rounded-2xl bg-[var(--primary)] text-white shadow-lg shadow-emerald-900/10">
              <Sparkles size={21} />
            </span>
            <span className="text-xl">Indicarei</span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-[var(--text-muted)] md:flex">
            <a className="transition hover:text-[var(--primary)]" href="#categorias">Categorias</a>
            <a className="transition hover:text-[var(--primary)]" href="#como-funciona">Como funciona</a>
            <a className="transition hover:text-[var(--primary)]" href="#profissionais">Para profissionais</a>
          </nav>

          <a
            href="#buscar"
            className="rounded-xl bg-[var(--primary)] px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-900/10 transition hover:bg-[var(--primary-hover)]"
          >
            Entrar
          </a>
        </div>
      </header>

      <section className="relative isolate px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(37,185,168,0.16),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(242,239,228,0.9),transparent_34%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-bold text-[var(--primary)] shadow-sm">
              <CheckCircle2 size={15} />
              Profissionais e serviços perto de você
            </span>

            <h1 className="mt-7 max-w-3xl text-4xl font-black leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Encontre quem faz o serviço{" ""}
              <span className="text-[var(--primary)]">que você precisa.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--text-muted)] sm:text-lg">
              Pesquise por serviço, profissional ou cidade. Compare perfis e fale diretamente com quem pode ajudar.
            </p>

            <form id="buscar" className="mt-9 flex max-w-2xl flex-col gap-3 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-3 shadow-[var(--shadow)] sm:flex-row">
              <label className="flex min-h-14 flex-1 items-center gap-3 rounded-2xl px-4 focus-within:bg-[var(--surface-hover)]">
                <Search className="shrink-0 text-[var(--primary)]" size={22} />
                <input
                  className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-[var(--text-muted)]"
                  placeholder="Ex.: eletricista em Penedo"
                  aria-label="Buscar profissional, serviço ou cidade"
                />
              </label>
              <button className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-[var(--primary)] px-7 font-bold text-white transition hover:bg-[var(--primary-hover)]">
                Buscar
                <ArrowRight size={19} />
              </button>
            </form>

            <div id="categorias" className="mt-7 flex flex-wrap gap-2">
              {categories.slice(0, 4).map((category) => (
                <button
                  key={category}
                  className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2 text-xs font-semibold text-[var(--text-muted)] transition hover:border-[var(--accent)] hover:text-[var(--primary)]"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -left-8 top-12 size-28 rounded-full bg-[var(--accent)]/20 blur-2xl" />
            <div className="absolute -right-8 bottom-10 size-36 rounded-full bg-[#f2efe4] blur-2xl" />

            <div className="relative rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow)] sm:p-6">
              <div className="flex items-start justify-between rounded-3xl bg-[var(--background-soft)] p-5">
                <div className="flex gap-4">
                  <div className="grid size-16 shrink-0 place-items-center rounded-2xl bg-[var(--primary)] text-2xl font-black text-white">JS</div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="font-black">João Silva</h2>
                      <span className="rounded-full bg-[var(--success-bg)] px-2 py-1 text-[10px] font-bold text-[var(--success-text)]">Disponível</span>
                    </div>
                    <p className="mt-1 text-sm font-semibold text-[var(--primary)]">Técnico em informática</p>
                    <p className="mt-1 flex items-center gap-1 text-xs text-[var(--text-muted)]"><MapPin size={13} /> Penedo, AL</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 rounded-xl bg-[var(--surface)] px-2.5 py-1.5 text-sm font-black">
                  <Star size={15} className="fill-current text-amber-500" /> 4,9
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 py-5 sm:grid-cols-3">
                {["Formatação", "Redes Wi-Fi", "Manutenção", "Backup", "Instalação", "Suporte remoto"].map((service) => (
                  <div key={service} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-3 py-3 text-center text-xs font-bold">
                    {service}
                  </div>
                ))}
              </div>

              <button className="w-full rounded-2xl bg-[var(--primary)] px-5 py-4 font-black text-white transition hover:bg-[var(--primary-hover)]">
                Chamar no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="border-y border-[var(--border)] bg-[var(--surface)] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-sm font-black uppercase tracking-[0.18em] text-[var(--primary)]">Por que usar</span>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Uma busca simples para uma decisão melhor.</h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {benefits.map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-3xl border border-[var(--border)] bg-[var(--background)] p-6">
                <span className="grid size-12 place-items-center rounded-2xl bg-[var(--success-bg)] text-[var(--primary)]">
                  <Icon size={23} />
                </span>
                <h3 className="mt-5 text-lg font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="profissionais" className="px-5 py-20 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-[2rem] bg-[var(--background-soft)] p-8 sm:p-12 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <span className="text-sm font-black uppercase tracking-[0.18em] text-[var(--primary)]">Você é profissional?</span>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Mostre seu trabalho para novos clientes.</h2>
            <p className="mt-4 leading-7 text-[var(--text-muted)]">Crie seu perfil, apresente seus serviços e receba contatos diretamente pelo Indicarei.</p>
          </div>
          <button className="inline-flex shrink-0 items-center gap-2 rounded-2xl bg-[var(--primary)] px-6 py-4 font-black text-white transition hover:bg-[var(--primary-hover)]">
            Criar perfil profissional
            <ArrowRight size={19} />
          </button>
        </div>
      </section>

      <footer className="border-t border-[var(--border)] bg-[var(--surface)] px-5 py-8 text-sm text-[var(--text-muted)] sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <strong className="text-[var(--text)]">Indicarei</strong>
          <span>Profissionais e serviços perto de você.</span>
        </div>
      </footer>
    </main>
  );
}
