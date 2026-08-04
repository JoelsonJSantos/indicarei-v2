import { Camera, MapPin, MessageCircle, Share2, Star } from "lucide-react";
import { PublicPageShell } from "@/components/public-page-shell";
import { mockProfessionals } from "@/lib/mock-data";

type PublicProfilePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PublicProfilePage({ params }: PublicProfilePageProps) {
  const { slug } = await params;
  const professional = mockProfessionals.find((item) => item.slug === slug) ?? mockProfessionals[0];

  return (
    <PublicPageShell>
      <main className="pb-24 lg:pb-0">
        <section className="border-b border-[var(--border)] bg-[var(--surface)] px-5 py-8 lg:px-10 lg:py-12">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-[1.8rem] bg-[var(--background-soft)] p-5 sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <div className="grid size-24 shrink-0 place-items-center rounded-[1.7rem] bg-[var(--primary)] text-3xl font-black text-white">
                  {professional.initials}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h1 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">{professional.name}</h1>
                    <span className="rounded-full bg-[var(--success-bg)] px-3 py-1.5 text-xs font-bold text-[var(--success-text)]">
                      {professional.available ? "Disponível" : "Indisponível"}
                    </span>
                  </div>
                  <p className="mt-2 text-lg font-bold text-[var(--primary)]">{professional.category}</p>
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
                    <MapPin size={16} /> {professional.location}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                    <span className="inline-flex items-center gap-1 rounded-xl bg-[var(--surface)] px-3 py-2 font-black">
                      <Star size={16} className="fill-current text-amber-500" />
                      {professional.rating} ({professional.reviews} avaliações)
                    </span>
                    <button className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2 font-bold">
                      <Share2 size={16} /> Compartilhar
                    </button>
                  </div>
                </div>

                <button className="hidden min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-6 font-bold text-white hover:bg-[var(--primary-hover)] sm:inline-flex">
                  <MessageCircle size={18} /> Chamar no WhatsApp
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-10 lg:px-10 lg:py-14">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_340px]">
            <div className="space-y-8">
              <section className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-6">
                <p className="text-sm font-black uppercase tracking-[0.14em] text-[var(--primary)]">Sobre</p>
                <h2 className="mt-3 text-2xl font-black">Experiência e atendimento profissional.</h2>
                <p className="mt-4 leading-7 text-[var(--text-muted)]">
                  Este texto é apenas uma demonstração do espaço reservado para a descrição profissional. Depois será preenchido e atualizado pelo próprio profissional no painel.
                </p>
              </section>

              <section className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-6">
                <p className="text-sm font-black uppercase tracking-[0.14em] text-[var(--primary)]">Serviços realizados</p>
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {professional.services.concat(["Instalação", "Consultoria"]).map((service) => (
                    <div key={service} className="rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-3 text-center text-sm font-bold">
                      {service}
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.14em] text-[var(--primary)]">Galeria</p>
                    <h2 className="mt-2 text-2xl font-black">Trabalhos e serviços</h2>
                  </div>
                  <Camera className="text-[var(--primary)]" />
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className="aspect-square rounded-2xl border border-dashed border-[var(--border)] bg-[var(--background)]" />
                  ))}
                </div>
              </section>

              <section className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-6">
                <p className="text-sm font-black uppercase tracking-[0.14em] text-[var(--primary)]">Avaliações</p>
                <div className="mt-5 space-y-4">
                  {["Atendimento rápido e muito profissional.", "Resolveu o problema e explicou tudo com clareza."].map((review, index) => (
                    <article key={review} className="rounded-xl bg-[var(--background)] p-4">
                      <div className="flex items-center gap-1 text-amber-500">
                        {Array.from({ length: 5 }).map((_, star) => <Star key={star} size={14} className="fill-current" />)}
                      </div>
                      <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">{review}</p>
                      <p className="mt-3 text-xs font-bold">Cliente de demonstração {index + 1}</p>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            <aside className="h-fit rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-6 lg:sticky lg:top-24">
              <p className="font-black">Entre em contato</p>
              <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">Converse diretamente com o profissional para verificar disponibilidade, prazo e valor.</p>
              <button className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-5 font-bold text-white hover:bg-[var(--primary-hover)]">
                <MessageCircle size={18} /> Chamar no WhatsApp
              </button>
              <p className="mt-4 text-center text-xs text-[var(--text-muted)]">O Indicarei não participa da negociação.</p>
            </aside>
          </div>
        </section>

        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--border)] bg-[var(--surface)]/95 p-3 backdrop-blur lg:hidden">
          <button className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-5 font-bold text-white">
            <MessageCircle size={18} /> Chamar no WhatsApp
          </button>
        </div>
      </main>
    </PublicPageShell>
  );
}
