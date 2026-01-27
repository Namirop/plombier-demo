import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { ServiceCard } from "@/components/cards";
import { services, companyInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Nos Services",
  description:
    "Découvrez tous nos services de plomberie et chauffage : installation, dépannage urgence, rénovation salle de bain, entretien chaudière. Artisan certifié RGE à Paris.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Header avec image */}
      <section className="relative">
        <div className="relative h-[40vh] min-h-[300px] w-full">
          <Image
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&h=600&fit=crop"
            alt="Travaux de plomberie"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="bg-primary py-12 text-center text-primary-foreground">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold md:text-5xl">Nos services</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Tous vos travaux de plomberie et chauffage réalisés par un artisan certifié.
              Du dépannage à la rénovation complète, nous intervenons sur tous types de projets.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid - 2 colonnes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                includes={service.includes}
                priceRange={service.priceRange}
                variant="detailed"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bandeau Urgence */}
      <section className="bg-accent py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div>
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Urgence plomberie 24h/24, 7j/7
              </h2>
              <p className="mt-2 text-white/80">
                Fuite d&apos;eau, canalisation bouchée, panne de chauffage ? Nous intervenons en urgence !
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="border-2 border-white bg-white px-8 font-semibold uppercase tracking-wide text-accent hover:bg-white/90"
              >
                <a href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  {companyInfo.phone}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white bg-transparent font-semibold uppercase tracking-wide text-white hover:bg-white/10"
              >
                <Link href="/urgence">
                  En savoir plus
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Nos engagements */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nos engagements qualité"
            subtitle="Ce qui fait la différence avec PlombiPro"
          />
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="border-l-4 border-accent bg-card p-6">
              <h3 className="font-bold text-foreground">Devis gratuit et détaillé</h3>
              <p className="mt-2 text-muted-foreground">
                Avant chaque intervention, nous vous fournissons un devis complet et transparent.
                Pas de mauvaise surprise à la facturation.
              </p>
            </div>
            <div className="border-l-4 border-accent bg-card p-6">
              <h3 className="font-bold text-foreground">Matériel de qualité</h3>
              <p className="mt-2 text-muted-foreground">
                Nous travaillons uniquement avec des marques reconnues pour leur fiabilité
                et leur durabilité.
              </p>
            </div>
            <div className="border-l-4 border-accent bg-card p-6">
              <h3 className="font-bold text-foreground">Respect des délais</h3>
              <p className="mt-2 text-muted-foreground">
                Nous nous engageons à respecter les délais annoncés. En cas d&apos;imprévu,
                nous vous prévenons immédiatement.
              </p>
            </div>
            <div className="border-l-4 border-accent bg-card p-6">
              <h3 className="font-bold text-foreground">Propreté du chantier</h3>
              <p className="mt-2 text-muted-foreground">
                Nous laissons votre logement propre après chaque intervention. Bâchage,
                protection des sols et nettoyage systématique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Besoin d&apos;un de nos services ?</h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-accent" />
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Décrivez-nous votre projet et recevez un devis gratuit sous 24h. Sans engagement de votre part.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 border-2 border-accent bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent/90"
          >
            Demander un devis gratuit
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
