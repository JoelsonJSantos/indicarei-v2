import { Construction } from "lucide-react";
import { DashboardShell } from "@/components/dashboard-shell";

type DashboardPlaceholderPageProps = {
  role: "professional" | "admin";
  title: string;
  description: string;
};

export function DashboardPlaceholderPage({ role, title, description }: DashboardPlaceholderPageProps) {
  return (
    <DashboardShell role={role} title={title}>
      <section className="rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-10">
        <span className="grid size-14 place-items-center rounded-2xl bg-[var(--success-bg)] text-[var(--primary)]">
          <Construction size={24} />
        </span>
        <p className="mt-6 text-sm font-black uppercase tracking-[0.14em] text-[var(--primary)]">Estrutura inicial</p>
        <h2 className="mt-3 text-3xl font-black tracking-[-0.035em]">{title}</h2>
        <p className="mt-4 max-w-2xl leading-7 text-[var(--text-muted)]">{description}</p>
        <div className="mt-8 rounded-xl bg-[var(--background)] p-4 text-sm font-semibold text-[var(--text-muted)]">
          A página já existe e está responsiva. Os formulários, permissões e dados reais serão adicionados posteriormente.
        </div>
      </section>
    </DashboardShell>
  );
}
