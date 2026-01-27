import { Clock, Award, FileText, ShieldCheck } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Clock,
  Award,
  FileText,
  ShieldCheck,
};

interface AdvantageCardProps {
  title: string;
  description: string;
  icon: string;
}

export function AdvantageCard({ title, description, icon }: AdvantageCardProps) {
  const Icon = iconMap[icon] || ShieldCheck;

  return (
    <div className="flex gap-6 border-b border-border py-6 last:border-b-0">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center bg-accent">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
        <p className="mt-2 leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
