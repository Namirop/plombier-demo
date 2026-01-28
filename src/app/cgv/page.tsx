import type { Metadata } from "next";
import { companyInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
  description: "Conditions générales de vente de PlombiPro.",
};

export default function CGVPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold text-foreground">Conditions Générales de Vente</h1>
      <div className="mt-4 h-1 w-16 bg-accent" />

      <div className="mt-12 max-w-3xl space-y-8 text-muted-foreground">
        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">Article 1 - Objet</h2>
          <p>
            Les présentes conditions générales régissent les prestations de services
            de plomberie et chauffage proposées par {companyInfo.name}.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">Article 2 - Devis</h2>
          <p>
            Tout devis établi par {companyInfo.name} est gratuit et valable 30 jours.
            L&apos;acceptation du devis par le client vaut commande ferme.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">Article 3 - Prix</h2>
          <p>
            Les prix sont indiqués en euros TTC. Le taux de TVA applicable est de 10%
            pour les travaux de rénovation dans les logements de plus de 2 ans, et
            de 20% dans les autres cas.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">Article 4 - Paiement</h2>
          <p>
            Le paiement s&apos;effectue à la fin des travaux, sauf accord contraire.
            Pour les chantiers importants, un acompte de 30% peut être demandé.
            Modes de paiement acceptés : chèque, virement, espèces.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">Article 5 - Garantie</h2>
          <p>
            Tous les travaux sont couverts par notre garantie décennale. Les pièces
            installées bénéficient de la garantie fabricant.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">Article 6 - Réclamations</h2>
          <p>
            Toute réclamation doit être adressée par écrit à {companyInfo.email} dans
            un délai de 8 jours suivant la fin des travaux.
          </p>
        </section>
      </div>
    </div>
  );
}
