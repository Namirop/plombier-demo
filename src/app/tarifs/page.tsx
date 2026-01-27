import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CreditCard, Banknote, CheckCircle, Info } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { tarifsBase, forfaits } from "@/lib/data";

export const metadata: Metadata = {
  title: "Nos Tarifs",
  description:
    "Tarifs transparents pour tous vos travaux de plomberie et chauffage. Devis gratuit, prix TTC, pas de surprise. Découvrez nos forfaits.",
  keywords: [
    "tarif plombier Paris",
    "prix plomberie",
    "devis plombier",
    "cout intervention plombier",
  ],
};

export default function TarifsPage() {
  return (
    <>
      {/* Header avec image */}
      <section className="relative">
        <div className="relative h-[40vh] min-h-[300px] w-full">
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&h=600&fit=crop"
            alt="Tarifs plomberie"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="bg-primary py-12 text-center text-primary-foreground">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold md:text-5xl">Nos tarifs</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Des prix clairs et sans surprise. Tous nos tarifs sont TTC et incluent le déplacement si les travaux sont réalisés.
            </p>
          </div>
        </div>
      </section>

      {/* Tarifs de base */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Tarifs de base"
            subtitle="Les bases tarifaires applicables à toutes nos interventions"
          />
          <div className="mx-auto max-w-3xl">
            <div className="border-2 border-border bg-card">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-border bg-muted">
                    <th className="px-6 py-4 text-left font-bold text-foreground">
                      Prestation
                    </th>
                    <th className="px-6 py-4 text-right font-bold text-foreground">
                      Tarif
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tarifsBase.map((tarif, index) => (
                    <tr
                      key={tarif.id}
                      className={index !== tarifsBase.length - 1 ? "border-b border-border" : ""}
                    >
                      <td className="px-6 py-4">
                        <p className="font-semibold text-foreground">{tarif.service}</p>
                        {tarif.details && (
                          <p className="text-sm text-muted-foreground">{tarif.details}</p>
                        )}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="text-lg font-bold text-accent">
                          {tarif.priceRange}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Forfaits courants */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Forfaits courants"
            subtitle="Prix indicatifs pour les interventions les plus fréquentes"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {forfaits.map((forfait) => (
              <div key={forfait.id} className="border-2 border-border bg-card p-6 transition-colors hover:border-accent">
                <h3 className="font-bold text-foreground">{forfait.service}</h3>
                <p className="mt-2 text-2xl font-bold text-accent">{forfait.priceRange}</p>
                {forfait.details && (
                  <p className="mt-2 text-sm text-muted-foreground">{forfait.details}</p>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-start gap-4 border-2 border-accent bg-accent/10 p-6">
            <Info className="h-6 w-6 shrink-0 text-accent" />
            <p className="text-muted-foreground">
              Ces prix sont donnés à titre indicatif et peuvent varier en fonction de la complexité
              de l&apos;intervention, de l&apos;accessibilité et des pièces nécessaires. Un devis
              détaillé vous sera systématiquement fourni avant tout travail.
            </p>
          </div>
        </div>
      </section>

      {/* Garanties */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="border-l-4 border-accent bg-card p-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent" />
                  <h3 className="font-bold text-foreground">Garantie satisfait ou remboursé</h3>
                </div>
                <p className="mt-3 text-muted-foreground">
                  Si vous n&apos;êtes pas satisfait de notre intervention, nous revenons
                  gratuitement pour corriger le problème ou nous vous remboursons.
                </p>
              </div>

              <div className="border-l-4 border-accent bg-card p-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent" />
                  <h3 className="font-bold text-foreground">Prix TTC tout compris</h3>
                </div>
                <p className="mt-3 text-muted-foreground">
                  Tous nos prix sont TTC et incluent la main d&apos;œuvre, le déplacement
                  (si travaux réalisés) et le nettoyage du chantier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moyens de paiement */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Paiement facilité"
            subtitle="Plusieurs modes de paiement acceptés pour votre confort"
          />
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              <div className="flex flex-col items-center border-2 border-border bg-card p-6 text-center">
                <CreditCard className="h-10 w-10 text-primary" />
                <p className="mt-3 font-semibold">Carte bancaire</p>
              </div>
              <div className="flex flex-col items-center border-2 border-border bg-card p-6 text-center">
                <Banknote className="h-10 w-10 text-primary" />
                <p className="mt-3 font-semibold">Espèces</p>
              </div>
              <div className="flex flex-col items-center border-2 border-border bg-card p-6 text-center">
                <svg
                  className="h-10 w-10 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                <p className="mt-3 font-semibold">Chèque</p>
              </div>
              <div className="flex flex-col items-center border-2 border-border bg-card p-6 text-center">
                <svg
                  className="h-10 w-10 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
                <p className="mt-3 font-semibold">Virement</p>
              </div>
            </div>
            <p className="mt-8 text-center text-muted-foreground">
              Possibilité de paiement en plusieurs fois sans frais pour les travaux importants.
              Demandez-nous !
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground">
            Besoin d&apos;un devis personnalisé ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Chaque situation est unique. Contactez-nous pour obtenir un devis gratuit et détaillé,
            adapté à votre projet.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 border-2 border-white bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wide text-primary transition-colors hover:bg-white/90"
          >
            Demander votre devis gratuit
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
