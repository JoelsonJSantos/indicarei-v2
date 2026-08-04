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
    <article
      className="
        rounded-[1.7rem]
        border
        border-[var(--border)]
        bg-[var(--surface)]
        p-4
        shadow-sm
        transition-colors
        sm:p-6

        dark:border-[rgba(44,224,205,0.32)]
        dark:bg-[#0c1821]
        dark:shadow-[0_0_12px_rgba(44,224,205,0.20),0_0_32px_rgba(44,224,205,0.13),inset_0_0_22px_rgba(44,224,205,0.035)]
      "
    >
      <div className="flex items-start gap-3 rounded-[1.35rem] bg-[var(--background-soft)] p-4 dark:bg-[#10242d]">
        <div
          className="
            grid
            size-14
            shrink-0
            place-items-center
            rounded-2xl
            bg-[var(--primary)]
            text-base
            font-black
            text-white

            dark:bg-[#25c7b5]
            dark:shadow-[0_0_12px_rgba(44,224,205,0.58),0_0_26px_rgba(44,224,205,0.26)]
          "
        >
          {professional.initials}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="truncate font-black dark:text-[#f4ffff]">
              {professional.name}
            </h2>

            <span
              className={`rounded-full px-2 py-1 text-[10px] font-bold ${
                professional.available
                  ? "bg-[var(--success-bg)] text-[var(--success-text)] dark:bg-[#173c35] dark:text-[#73ead8]"
                  : "bg-[var(--background)] text-[var(--text-muted)]"
              }`}
            >
              {professional.available ? "Disponível" : "Indisponível"}
            </span>
          </div>

          <p className="mt-1 text-sm font-bold text-[var(--primary)] dark:text-[#2ce0cd]">
            {professional.category}
          </p>

          <p className="mt-1 flex items-center gap-1 text-xs text-[var(--text-muted)] dark:text-[#9fb5bd]">
            <MapPin size={13} />
            {professional.location}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-1 rounded-xl bg-[var(--background)] px-2.5 py-1.5 text-sm font-black dark:bg-[#142a34] dark:text-[#f4ffff]">
          <Star size={14} className="fill-current text-amber-500" />
          {professional.rating.toFixed(1).replace(".0", "")}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {professional.services.slice(0, 4).map((service) => (
          <span
            key={service}
            className="rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-3 text-center text-xs font-bold text-[var(--text)] dark:border-[#294651] dark:bg-[#10212a] dark:text-[#e9ffff]"
          >
            {service}
          </span>
        ))}
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <Link
          href={`/p/${professional.slug}`}
          className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-[var(--border)] px-4 text-sm font-bold transition-colors hover:bg-[var(--surface-hover)] dark:border-[#294651] dark:text-[#f4ffff] dark:hover:bg-[#142a34]"
        >
          Ver perfil
        </Link>

        <Link
          href={`/p/${professional.slug}`}
          className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-[var(--primary)] px-4 text-sm font-bold text-white transition-colors hover:bg-[var(--primary-hover)] dark:bg-[#25c7b5] dark:text-[#071317] dark:shadow-[0_0_12px_rgba(44,224,205,0.34),0_0_24px_rgba(44,224,205,0.16)] dark:hover:bg-[#2ce0cd]"
        >
          Chamar no WhatsApp
        </Link>
      </div>

      <p className="mt-3 text-center text-[11px] text-[var(--text-muted)] dark:text-[#78939c]">
        {professional.reviews} avaliações
      </p>
    </article>
  );
}
