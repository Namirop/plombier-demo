import type { Metadata } from "next";
import { companyInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site PlombiPro - Plomberie et chauffage à Paris.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold text-foreground">Mentions légales</h1>
      <div className="mt-4 h-1 w-16 bg-accent" />

      <div className="mt-12 max-w-3xl space-y-8 text-muted-foreground">
        <section className="rounded-lg border-2 border-accent/30 bg-accent/5 p-4">
          <h2 className="mb-2 text-lg font-semibold text-accent">Site de démonstration</h2>
          <p>
            Ce site est un projet de démonstration réalisé à des fins de portfolio.
            L&apos;entreprise PlombiPro et les informations présentées sont fictives.
            Aucun service réel de plomberie n&apos;est proposé via ce site.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">Éditeur du site</h2>
          <p>
            <strong>{companyInfo.name}</strong><br />
            {companyInfo.address}<br />
            {companyInfo.city}<br />
            Téléphone : {companyInfo.phone}<br />
            Email : {companyInfo.email}<br />
            SIRET : 123 456 789 00012
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">Directeur de la publication</h2>
          <p>{companyInfo.owner}, gérant de {companyInfo.name}.</p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">Hébergement</h2>
          <p>
            Ce site est hébergé par Vercel Inc.<br />
            440 N Barranca Ave #4133<br />
            Covina, CA 91723, États-Unis
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, images, logos) est la propriété
            exclusive de {companyInfo.name} ou de ses partenaires. Toute reproduction,
            même partielle, est interdite sans autorisation préalable.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">Responsabilité</h2>
          <p>
            {companyInfo.name} s&apos;efforce d&apos;assurer l&apos;exactitude des informations
            diffusées sur ce site. Toutefois, elle ne peut garantir l&apos;exactitude, la
            précision ou l&apos;exhaustivité des informations mises à disposition.
          </p>
        </section>
      </div>
    </div>
  );
}
