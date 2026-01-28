"use client";

import Image from "next/image";
import { useState } from "react";
import { MapPin, Clock } from "lucide-react";
import type { Realisation } from "@/types";
import { cn } from "@/lib/utils";

interface RealisationCardProps {
  realisation: Realisation;
}

export function RealisationCard({ realisation }: RealisationCardProps) {
  const [showAfter, setShowAfter] = useState(false);
  const hasBeforeImage = !!realisation.imageBefore;

  return (
    <div className="group border-2 border-border bg-card transition-colors hover:border-accent">
      <div
        className={cn(
          "relative aspect-[4/3] overflow-hidden",
          hasBeforeImage && "cursor-pointer"
        )}
        onMouseEnter={() => hasBeforeImage && setShowAfter(true)}
        onMouseLeave={() => hasBeforeImage && setShowAfter(false)}
      >
        {hasBeforeImage && realisation.imageBefore && (
          <Image
            src={realisation.imageBefore}
            alt={`${realisation.title} - Avant`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={cn(
              "object-cover transition-opacity duration-500",
              showAfter ? "opacity-0" : "opacity-100"
            )}
          />
        )}
        <Image
          src={realisation.imageAfter}
          alt={realisation.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={cn(
            "object-cover transition-opacity duration-500",
            hasBeforeImage ? (showAfter ? "opacity-100" : "opacity-0") : "opacity-100"
          )}
        />
        <div className="absolute left-0 top-0 bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
          {realisation.typeLabel}
        </div>
        {hasBeforeImage && (
          <div className="absolute bottom-0 left-0 right-0 bg-primary/90 px-4 py-2 text-sm text-primary-foreground">
            {showAfter ? "Après" : "Avant"} - Survolez pour voir {showAfter ? "avant" : "après"}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-foreground">{realisation.title}</h3>
        <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="h-4 w-4 text-accent" />
            {realisation.city}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-accent" />
            {realisation.duration}
          </span>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">{realisation.description}</p>
      </div>
    </div>
  );
}
