import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RealisationsFilter } from "./RealisationsFilter";
import { realisations } from "@/lib/data";

export const metadata: Metadata = {
  title: "Nos Réalisations",
  description:
    "Découvrez nos dernières réalisations en plomberie et chauffage : rénovation salle de bain, installation chaudière, dépannage. Photos avant/après.",
  keywords: [
    "réalisations plomberie",
    "travaux plomberie avant après",
    "rénovation salle de bain Paris",
    "installation chauffage",
  ],
};

export default function RealisationsPage() {
  return (
    <>
      {/* Header avec image */}
      <section className="relative">
        <div className="relative h-[40vh] min-h-[300px] w-full">
          <Image
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1600&h=600&fit=crop"
            alt="Réalisations plomberie"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="bg-primary py-12 text-center text-primary-foreground">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold md:text-5xl">Nos réalisations</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Découvrez nos dernières interventions en photos. Survolez les images pour voir le résultat avant/après.
            </p>
          </div>
        </div>
      </section>

      {/* Filtres et galerie */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <RealisationsFilter realisations={realisations} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground">
            Votre projet ressemble à l&apos;une de ces réalisations ?
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-accent" />
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé gratuit.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 border-2 border-accent bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent/90"
          >
            Demander un devis
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
