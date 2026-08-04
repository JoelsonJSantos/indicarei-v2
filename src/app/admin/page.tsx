import { AlertCircle, CheckCircle2, Clock3, UsersRound } from "lucide-react";
import { DashboardShell } from "@/components/dashboard-shell";

const stats = [
  { label: "Profissionais cadastrados", value: "24", icon: UsersRound },
  { label: "Aguardando análise", value: "6", icon: Clock3 },
  { label: "Perfis aprovados", value: "17", icon: CheckCircle2 },
  { label: "Pendências", value: "3", icon: AlertCircle },
];

const pendingProfessionals = [
  ["Carlos Ferreira", "Eletricista", "Maceió, AL"],
  ["Mariana Souza", "Ar-condicionado", "Arapiraca, AL"],
  ["Studio Web Norte", "Desenvolvimento web", "Atendimento remoto"],
];

export default function AdminDashboardPage() {
  return (
    <DashboardShell role="admin" title="Painel administrativo">
      <section>
        <p className="text-sm font-bold text-[var(--primary)]">Visão geral de demonstração</p>
        <h2 className="mt-2 text-3xl font-black tracking-[-0.035em]">Administração do Indicarei</h2>
        <p className="mt-2 text-[var(--text-muted)]">A estrutura está pronta para receber os dados e permissões reais do Supabase.</p>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, icon: Icon }) => (
          <article key={label} className="rounded-[1.4rem] border border-[var(--border)] bg-[var(--surface)] p-5">
            <span className="grid size-11 place-items-center rounded-xl bg-[var(--success-bg)] text-[var(--primary)]"><Icon size={20} /></span>
            <p className="mt-5 text-2xl font-black">{value}</p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">{label}</p>
          </article>
        ))}
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-[1fr_360px]">
        <article className="overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)]">
          <div className="border-b border-[var(--border)] p-6">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-[var(--primary)]">Moderação</p>
            <h3 className="mt-2 text-2xl font-black">Perfis aguardando aprovação</h3>
          </div>

          <div className="divide-y divide-[var(--border)]">
            {pendingProfessionals.map(([name, category, location]) => (
              <div key={name} className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-black">{name}</p>
                  <p className="mt-1 text-sm text-[var(--primary)]">{category}</p>
                  <p className="mt-1 text-xs text-[var(--text-muted)]">{location}</p>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:flex">
                  <button className="min-h-10 rounded-xl border border-[var(--border)] px-4 text-sm font-bold">Analisar</button>
                  <button className="min-h-10 rounded-xl bg-[var(--primary)] px-4 text-sm font-bold text-white">Aprovar</button>
                </div>
              </div>
            ))}
          </div>
        </article>

        <aside className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-6">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-[var(--primary)]">Integrações futuras</p>
          <div className="mt-5 space-y-3">
            {["Supabase: banco e autenticação", "Cloudinary: fotos e vídeos", "Resend: e-mails", "Asaas: pagamentos"].map((item) => (
              <div key={item} className="rounded-xl bg-[var(--background)] p-4 text-sm font-bold">{item}</div>
            ))}
          </div>
        </aside>
      </section>
    </DashboardShell>
  );
}
