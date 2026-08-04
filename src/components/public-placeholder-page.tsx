import { Construction } from "lucide-react";
import { PublicPageShell } from "@/components/public-page-shell";

type PublicPlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PublicPlaceholderPage({ eyebrow, title, description }: PublicPlaceholderPageProps) {
  return (
    <PublicPageShell>
      <main className="px-5 py-16 lg:px-10 lg:py-24">
        <section className="mx-auto max-w-3xl rounded-[1.8rem] border border-[var(--border)] bg-[var(--surface)] p-8 text-center shadow-[var(--shadow)] sm:p-12">
          <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-[var(--success-bg)] text-[var(--primary)]">
            <Construction size={25} />
          </span>
          <p className="mt-6 text-sm font-black uppercase tracking-[0.16em] text-[var(--primary)]">{eyebrow}</p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.045em]">{title}</h1>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[var(--text-muted)]">{description}</p>
          <div className="mt-8 rounded-xl bg-[var(--background)] p-4 text-sm font-semibold text-[var(--text-muted)]">
            Página criada para garantir a navegação do projeto. O conteúdo definitivo será preenchido em uma etapa futura.
          </div>
        </section>
      </main>
    </PublicPageShell>
  );
}
