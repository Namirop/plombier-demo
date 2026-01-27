"use client";

import { useState } from "react";
import { RealisationCard } from "@/components/cards";
import type { Realisation } from "@/types";

const filters = [
  { id: "all", label: "Toutes" },
  { id: "plomberie", label: "Plomberie" },
  { id: "chauffage", label: "Chauffage" },
  { id: "urgence", label: "Urgence" },
  { id: "renovation", label: "Rénovation" },
];

interface RealisationsFilterProps {
  realisations: Realisation[];
}

export function RealisationsFilter({ realisations }: RealisationsFilterProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredRealisations =
    activeFilter === "all"
      ? realisations
      : realisations.filter((r) => r.type === activeFilter);

  return (
    <>
      {/* Filtres */}
      <div className="mb-12 flex flex-wrap justify-center gap-3">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`border-2 px-6 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
              activeFilter === filter.id
                ? "border-accent bg-accent text-white"
                : "border-border bg-card text-foreground hover:border-accent hover:text-accent"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Galerie */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredRealisations.map((realisation) => (
          <RealisationCard key={realisation.id} realisation={realisation} />
        ))}
      </div>

      {filteredRealisations.length === 0 && (
        <p className="py-12 text-center text-muted-foreground">
          Aucune réalisation trouvée pour ce filtre.
        </p>
      )}
    </>
  );
}
