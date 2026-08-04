"use client";

import {
  BriefcaseBusiness,
  Home,
  Layers3,
  LogIn,
  Menu,
  Moon,
  Search,
  Sun,
  UserPlus,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const STORAGE_KEY = "indicarei-theme";

type Theme = "light" | "dark";

const navigation = [
  { href: "#inicio", label: "Início", icon: Home },
  { href: "#como-funciona", label: "Como funciona", icon: Layers3 },
  { href: "#categorias", label: "Categorias", icon: Search },
  { href: "#profissionais", label: "Para profissionais", icon: BriefcaseBusiness },
];

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
    const preferredTheme: Theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const initialTheme = storedTheme ?? preferredTheme;

    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    setTheme(initialTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
    setTheme(nextTheme);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <button
        type="button"
        onClick={toggleTheme}
        className="grid size-10 place-items-center rounded-xl text-[var(--text-muted)] transition hover:bg-[var(--surface-hover)] hover:text-[var(--text)]"
        aria-label={mounted && theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
        title={mounted && theme === "dark" ? "Tema claro" : "Tema escuro"}
      >
        {mounted && theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
      </button>

      <button
        type="button"
        onClick={() => setMenuOpen(true)}
        className="grid size-10 place-items-center rounded-xl text-[var(--text)] transition hover:bg-[var(--surface-hover)] lg:hidden"
        aria-label="Abrir menu"
        aria-expanded={menuOpen}
        aria-controls="menu-mobile"
      >
        <Menu size={22} />
      </button>

      {menuOpen ? (
        <div className="fixed inset-0 z-[100] lg:hidden" role="dialog" aria-modal="true" aria-label="Menu principal">
          <button
            type="button"
            className="absolute inset-0 bg-[#081219]/60 backdrop-blur-sm"
            onClick={closeMenu}
            aria-label="Fechar menu"
          />

          <aside
            id="menu-mobile"
            className="absolute right-0 top-0 flex h-full w-[min(88vw,380px)] flex-col border-l border-[var(--border)] bg-[var(--surface)] shadow-[-20px_0_60px_rgba(0,0,0,.18)]"
          >
            <div className="flex h-16 items-center justify-between border-b border-[var(--border)] px-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--primary)]">Navegação</p>
                <p className="font-black">Menu Indicarei</p>
              </div>
              <button
                type="button"
                onClick={closeMenu}
                className="grid size-10 place-items-center rounded-xl text-[var(--text-muted)] hover:bg-[var(--surface-hover)] hover:text-[var(--text)]"
                aria-label="Fechar menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-5">
              <div className="space-y-2">
                {navigation.map(({ href, label, icon: Icon }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={closeMenu}
                    className="flex items-center gap-3 rounded-2xl px-4 py-3.5 font-bold text-[var(--text)] transition hover:bg-[var(--background)]"
                  >
                    <span className="grid size-10 place-items-center rounded-xl bg-[var(--success-bg)] text-[var(--primary)]">
                      <Icon size={19} />
                    </span>
                    {label}
                  </a>
                ))}
              </div>
            </nav>

            <div className="border-t border-[var(--border)] p-4">
              <div className="grid gap-3">
                <a
                  href="#"
                  onClick={closeMenu}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 font-bold hover:bg-[var(--surface-hover)]"
                >
                  <LogIn size={18} />
                  Entrar
                </a>
                <a
                  href="#profissionais"
                  onClick={closeMenu}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[var(--primary)] px-4 font-bold text-white hover:bg-[var(--primary-hover)]"
                >
                  <UserPlus size={18} />
                  Criar perfil profissional
                </a>
              </div>
            </div>
          </aside>
        </div>
      ) : null}
    </>
  );
}
