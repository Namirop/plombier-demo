import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionTitle({ title, subtitle, centered = true, className }: SectionTitleProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{title}</h2>
      <div className={cn("mt-4 h-1 w-16 bg-accent", centered && "mx-auto")} />
      {subtitle && <p className="mt-6 text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
