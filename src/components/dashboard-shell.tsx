import Link from "next/link";
import {
  CreditCard,
  Images,
  LayoutDashboard,
  LogOut,
  Settings,
  ShieldCheck,
  Sparkles,
  UserRound,
  UsersRound,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

type DashboardShellProps = {
  role: "professional" | "admin";
  title: string;
  children: React.ReactNode;
};

const professionalNavigation = [
  { href: "/painel", label: "Visão geral", icon: LayoutDashboard },
  { href: "/painel/perfil", label: "Meu perfil", icon: UserRound },
  { href: "/painel/galeria", label: "Galeria", icon: Images },
  { href: "/painel/plano", label: "Plano e cobrança", icon: CreditCard },
  { href: "/painel/configuracoes", label: "Configurações", icon: Settings },
];

const adminNavigation = [
  { href: "/admin", label: "Visão geral", icon: LayoutDashboard },
  { href: "/admin/profissionais", label: "Profissionais", icon: UsersRound },
  { href: "/admin/categorias", label: "Categorias", icon: ShieldCheck },
  { href: "/admin/configuracoes", label: "Configurações", icon: Settings },
];

export function DashboardShell({ role, title, children }: DashboardShellProps) {
  const navigation = role === "admin" ? adminNavigation : professionalNavigation;

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-[260px_1fr]">
        <aside className="hidden border-r border-[var(--border)] bg-[var(--surface)] p-5 lg:flex lg:flex-col">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid size-10 place-items-center rounded-2xl bg-[var(--primary)] text-white">
              <Sparkles size={20} />
            </span>
            <span className="font-black">Indicarei</span>
          </Link>

          <div className="mt-8 rounded-2xl bg-[var(--background)] p-4">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[var(--primary)]">
              {role === "admin" ? "Administração" : "Área profissional"}
            </p>
            <p className="mt-2 font-black">{title}</p>
          </div>

          <nav className="mt-6 flex-1 space-y-2">
            {navigation.map(({ href, label, icon: Icon }) => (
              <Link key={href} href={href} className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold text-[var(--text-muted)] transition hover:bg-[var(--background)] hover:text-[var(--text)]">
                <Icon size={18} className="text-[var(--primary)]" />
                {label}
              </Link>
            ))}
          </nav>

          <Link href="/entrar" className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold text-[var(--text-muted)] hover:bg-[var(--background)]">
            <LogOut size={18} /> Sair
          </Link>
        </aside>

        <div className="min-w-0">
          <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur-xl">
            <div className="flex min-h-16 items-center justify-between gap-4 px-5 lg:px-8">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.14em] text-[var(--primary)] lg:hidden">
                  {role === "admin" ? "Admin" : "Painel"}
                </p>
                <h1 className="font-black">{title}</h1>
              </div>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <Link href="/" className="hidden rounded-xl border border-[var(--border)] px-4 py-2 text-sm font-bold sm:inline-flex">Ver site</Link>
              </div>
            </div>

            <nav className="flex gap-2 overflow-x-auto border-t border-[var(--border)] px-4 py-2 lg:hidden">
              {navigation.map(({ href, label }) => (
                <Link key={href} href={href} className="shrink-0 rounded-xl bg-[var(--background)] px-3 py-2 text-xs font-bold text-[var(--text-muted)]">
                  {label}
                </Link>
              ))}
            </nav>
          </header>

          <main className="p-5 lg:p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
