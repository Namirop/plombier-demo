import { Star } from "lucide-react";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="border-l-4 border-accent bg-card p-6">
      <div className="mb-4 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < testimonial.rating ? "fill-accent text-accent" : "text-border"
            }`}
          />
        ))}
      </div>
      <p className="mb-6 text-lg leading-relaxed text-foreground">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-foreground">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">
            {testimonial.problem}
          </p>
        </div>
      </div>
    </div>
  );
}
