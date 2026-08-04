import Link from "next/link";
import { MapPin, Star } from "lucide-react";

type ProfessionalCardProps = {
  professional: {
    slug: string;
    initials: string;
    name: string;
    category: string;
    location: string;
    rating: number;
    reviews: number;
    available: boolean;
    services: string[];
  };
};

export function ProfessionalCard({ professional }: ProfessionalCardProps) {
  return (
    <article className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow)] sm:p-5">
      <div className="flex items-start gap-3">
        <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-[var(--primary)] text-base font-black text-white">
          {professional.initials}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="truncate font-black">{professional.name}</h2>
            <span
              className={`rounded-full px-2 py-1 text-[10px] font-bold ${
                professional.available
                  ? "bg-[var(--success-bg)] text-[var(--success-text)]"
                  : "bg-[var(--background)] text-[var(--text-muted)]"
              }`}
            >
              {professional.available ? "Disponível" : "Indisponível"}
            </span>
          </div>

          <p className="mt-1 text-sm font-bold text-[var(--primary)]">{professional.category}</p>
          <p className="mt-1 flex items-center gap-1 text-xs text-[var(--text-muted)]">
            <MapPin size={13} />
            {professional.location}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-1 rounded-xl bg-[var(--background)] px-2.5 py-1.5 text-sm font-black">
          <Star size={14} className="fill-current text-amber-500" />
          {professional.rating.toFixed(1).replace(".0", "")}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {professional.services.slice(0, 4).map((service) => (
          <span
            key={service}
            className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-xs font-semibold text-[var(--text-muted)]"
          >
            {service}
          </span>
        ))}
      </div>

      <div className="mt-5 grid gap-2 sm:grid-cols-2">
        <Link
          href={`/p/${professional.slug}`}
          className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[var(--border)] px-4 text-sm font-bold transition hover:bg-[var(--surface-hover)]"
        >
          Ver perfil
        </Link>
        <Link
          href={`/p/${professional.slug}`}
          className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[var(--primary)] px-4 text-sm font-bold text-white transition hover:bg-[var(--primary-hover)]"
        >
          Entrar em contato
        </Link>
      </div>

      <p className="mt-3 text-center text-[11px] text-[var(--text-muted)]">
        {professional.reviews} avaliações
      </p>
    </article>
  );
}
