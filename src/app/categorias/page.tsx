import Link from "next/link";
import {
  Code2,
  House,
  ShieldCheck,
  Snowflake,
  Wrench,
  Zap,
} from "lucide-react";
import { PublicPageShell } from "@/components/public-page-shell";
import { mockCategories } from "@/lib/mock-data";

const iconMap = {
  Wrench,
  Zap,
  Code2,
  ShieldCheck,
  Snowflake,
  House,
};

export default function CategoriesPage() {
  return (
    <PublicPageShell>
      <main>
        <section className="border-b border-[var(--border)] bg-[var(--surface)] px-5 py-12 text-center lg:px-10 lg:py-16">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[var(--primary)]">Categorias</p>
            <h1 className="mt-3 text-4xl font-black tracking-[-0.045em] sm:text-5xl">
              Explore serviços por categoria.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-[var(--text-muted)]">
              Por enquanto usamos conteúdo de demonstração. Depois as categorias serão administradas pelo painel e carregadas do Supabase.
            </p>
          </div>
        </section>

        <section className="px-5 py-12 lg:px-10 lg:py-16">
          <div className="mx-auto grid max-w-[1440px] gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {mockCategories.map((category) => {
              const Icon = iconMap[category.icon as keyof typeof iconMap];

              return (
                <Link
                  key={category.slug}
                  href={`/buscar?categoria=${category.slug}`}
                  className="group rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow)]"
                >
                  <span className="grid size-13 place-items-center rounded-2xl bg-[var(--success-bg)] text-[var(--primary)] transition group-hover:bg-[var(--primary)] group-hover:text-white">
                    <Icon size={23} />
                  </span>
                  <h2 className="mt-5 text-xl font-black">{category.name}</h2>
                  <p className="mt-2 leading-6 text-[var(--text-muted)]">{category.description}</p>
                  <span className="mt-6 inline-flex text-sm font-bold text-[var(--primary)]">Ver profissionais →</span>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </PublicPageShell>
  );
}
