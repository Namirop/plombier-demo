import type { Metadata } from "next";
import { companyInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité du site PlombiPro.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold text-foreground">Politique de confidentialité</h1>
      <div className="mt-4 h-1 w-16 bg-accent" />

      <div className="mt-12 max-w-3xl space-y-8 text-muted-foreground">
        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">Collecte des données</h2>
          <p>
            Nous collectons les informations que vous nous fournissez via nos formulaires
            de contact et de demande d&apos;intervention : nom, prénom, adresse email,
            numéro de téléphone et adresse postale.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">Utilisation des données</h2>
          <p>
            Vos données sont utilisées uniquement pour répondre à vos demandes de devis
            ou d&apos;intervention. Elles ne sont jamais transmises à des tiers à des fins
            commerciales.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">Conservation des données</h2>
          <p>
            Vos données sont conservées pendant une durée maximale de 3 ans à compter
            de votre dernière interaction avec {companyInfo.name}.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification,
            de suppression et de portabilité de vos données. Pour exercer ces droits,
            contactez-nous à : {companyInfo.email}
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">Cookies</h2>
          <p>
            Ce site utilise des cookies techniques nécessaires à son bon fonctionnement.
            Aucun cookie publicitaire ou de tracking n&apos;est utilisé.
          </p>
        </section>
      </div>
    </div>
  );
}
