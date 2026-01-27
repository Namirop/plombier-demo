import Link from "next/link";
import { Wrench, Flame, Siren, Settings, Bath, Search, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Wrench,
  Flame,
  Siren,
  Settings,
  Bath,
  Search,
};

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  includes?: string[];
  priceRange?: string;
  variant?: "simple" | "detailed";
  className?: string;
}

export function ServiceCard({
  id,
  title,
  description,
  icon,
  includes,
  priceRange,
  variant = "simple",
}: ServiceCardProps) {
  const Icon = iconMap[icon] || Wrench;

  if (variant === "simple") {
    return (
      <div className="group border-2 border-border bg-card p-8 transition-colors hover:border-accent">
        <div className="mb-6 flex h-16 w-16 items-center justify-center bg-primary">
          <Icon className="h-8 w-8 text-primary-foreground" />
        </div>
        <h3 className="mb-3 text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        <Link
          href="/services"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent transition-colors hover:text-accent/80"
        >
          En savoir plus
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="group border-2 border-border bg-card transition-colors hover:border-accent">
      <div className="border-b-2 border-border bg-muted p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-primary">
            <Icon className="h-7 w-7 text-primary-foreground" />
          </div>
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            {priceRange && (
              <p className="mt-1 text-sm font-bold text-accent">{priceRange}</p>
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="mb-6 text-muted-foreground">{description}</p>
        {includes && includes.length > 0 && (
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-foreground">
              Ce qui est inclus :
            </p>
            <ul className="space-y-2">
              {includes.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 border-2 border-accent bg-accent px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent/90"
        >
          Demander un devis
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
