import { Filter, MapPin, Search, SlidersHorizontal } from "lucide-react";
import { ProfessionalCard } from "@/components/professional-card";
import { PublicPageShell } from "@/components/public-page-shell";
import { mockProfessionals } from "@/lib/mock-data";

export default function SearchPage() {
  return (
    <PublicPageShell>
      <main>
        <section className="border-b border-[var(--border)] bg-[var(--surface)] px-5 py-12 lg:px-10 lg:py-16">
          <div className="mx-auto max-w-[1440px]">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[var(--primary)]">Buscar profissionais</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-black tracking-[-0.045em] sm:text-5xl">
              Encontre o profissional certo para o seu serviço.
            </h1>
            <p className="mt-4 max-w-2xl leading-7 text-[var(--text-muted)]">
              A estrutura já está pronta. Os filtros e resultados reais serão conectados ao Supabase depois.
            </p>

            <form className="mt-8 grid gap-3 rounded-[1.5rem] border border-[var(--border)] bg-[var(--background)] p-3 shadow-sm lg:grid-cols-[1fr_280px_auto]">
              <label className="flex min-h-14 items-center gap-3 rounded-2xl bg-[var(--surface)] px-4">
                <Search size={20} className="text-[var(--primary)]" />
                <input
                  type="search"
                  placeholder="Profissional, serviço ou categoria"
                  className="w-full bg-transparent text-sm font-semibold outline-none placeholder:font-medium placeholder:text-[var(--text-muted)]"
                />
              </label>

              <label className="flex min-h-14 items-center gap-3 rounded-2xl bg-[var(--surface)] px-4">
                <MapPin size={20} className="text-[var(--primary)]" />
                <input
                  type="text"
                  placeholder="Cidade ou atendimento remoto"
                  className="w-full bg-transparent text-sm font-semibold outline-none placeholder:font-medium placeholder:text-[var(--text-muted)]"
                />
              </label>

              <button className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-[var(--primary)] px-7 font-bold text-white transition hover:bg-[var(--primary-hover)]">
                Buscar
                <Search size={18} />
              </button>
            </form>
          </div>
        </section>

        <section className="px-5 py-10 lg:px-10 lg:py-14">
          <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[280px_1fr]">
            <aside className="h-fit rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-5 lg:sticky lg:top-24">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-black">
                  <SlidersHorizontal size={19} className="text-[var(--primary)]" />
                  Filtros
                </div>
                <button className="text-xs font-bold text-[var(--primary)]">Limpar</button>
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <p className="text-sm font-black">Tipo de atendimento</p>
                  <div className="mt-3 space-y-3 text-sm text-[var(--text-muted)]">
                    {['Presencial', 'Remoto', 'Ambos'].map((item) => (
                      <label key={item} className="flex items-center gap-3">
                        <input type="checkbox" className="size-4 accent-[var(--primary)]" />
                        {item}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-black">Disponibilidade</p>
                  <label className="mt-3 flex items-center gap-3 text-sm text-[var(--text-muted)]">
                    <input type="checkbox" className="size-4 accent-[var(--primary)]" />
                    Disponível agora
                  </label>
                </div>

                <button className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-[var(--border)] font-bold lg:hidden">
                  <Filter size={17} /> Aplicar filtros
                </button>
              </div>
            </aside>

            <div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-bold text-[var(--primary)]">Resultados de demonstração</p>
                  <h2 className="mt-1 text-2xl font-black">Profissionais encontrados</h2>
                </div>
                <select className="min-h-11 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 text-sm font-semibold outline-none">
                  <option>Mais relevantes</option>
                  <option>Melhor avaliados</option>
                  <option>Mais próximos</option>
                </select>
              </div>

              <div className="mt-6 grid gap-4 xl:grid-cols-2">
                {mockProfessionals.map((professional) => (
                  <ProfessionalCard key={professional.slug} professional={professional} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </PublicPageShell>
  );
}
