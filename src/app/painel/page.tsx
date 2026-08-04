import { CheckCircle2, Eye, MessageCircle, Star, UserRound } from "lucide-react";
import { DashboardShell } from "@/components/dashboard-shell";

const stats = [
  { label: "Visualizações do perfil", value: "128", icon: Eye },
  { label: "Cliques no contato", value: "24", icon: MessageCircle },
  { label: "Avaliação média", value: "4,9", icon: Star },
  { label: "Perfil completo", value: "72%", icon: UserRound },
];

export default function ProfessionalDashboardPage() {
  return (
    <DashboardShell role="professional" title="Painel profissional">
      <section>
        <p className="text-sm font-bold text-[var(--primary)]">Dados de demonstração</p>
        <h2 className="mt-2 text-3xl font-black tracking-[-0.035em]">Olá, João.</h2>
        <p className="mt-2 text-[var(--text-muted)]">Acompanhe seu perfil e conclua as etapas para começar a receber contatos.</p>
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
        <article className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.14em] text-[var(--primary)]">Próximos passos</p>
              <h3 className="mt-2 text-2xl font-black">Complete seu perfil</h3>
            </div>
            <span className="rounded-full bg-[var(--success-bg)] px-3 py-1.5 text-xs font-bold text-[var(--success-text)]">3 de 5 concluídos</span>
          </div>

          <div className="mt-6 space-y-3">
            {[
              [true, "Informações básicas"],
              [true, "Categoria e serviços"],
              [true, "Cidade e atendimento"],
              [false, "Adicionar foto de perfil"],
              [false, "Adicionar trabalhos à galeria"],
            ].map(([done, label]) => (
              <div key={label as string} className="flex items-center gap-3 rounded-xl bg-[var(--background)] p-4">
                <CheckCircle2 size={20} className={done ? "text-[var(--primary)]" : "text-[var(--text-muted)]"} />
                <span className="text-sm font-bold">{label as string}</span>
              </div>
            ))}
          </div>
        </article>

        <aside className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--background-soft)] p-6">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-[var(--primary)]">Plano atual</p>
          <h3 className="mt-3 text-2xl font-black">Gratuito</h3>
          <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">A estrutura de planos será integrada ao Asaas quando os valores e regras forem definidos.</p>
          <button className="mt-6 min-h-12 w-full rounded-xl bg-[var(--primary)] px-4 font-bold text-white">Ver planos</button>
        </aside>
      </section>
    </DashboardShell>
  );
}
