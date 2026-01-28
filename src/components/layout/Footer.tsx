import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, ChevronRight } from "lucide-react";
import { navLinks, companyInfo, services } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Section principale */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Colonne 1 : À propos */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center border-2 border-accent bg-accent">
                <span className="text-2xl font-bold text-white">P</span>
              </div>
              <div>
                <div className="text-xl font-bold">PLOMBIPRO</div>
                <div className="text-xs text-primary-foreground/60">Plomberie & Chauffage</div>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-primary-foreground/70">
              Entreprise familiale fondée en 2009, PlombiPro est votre partenaire de confiance pour tous vos travaux de plomberie et chauffage à Paris et en proche banlieue. Notre équipe de professionnels qualifiés intervient rapidement pour résoudre vos problèmes.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center border border-primary-foreground/20 text-primary-foreground/60 transition-colors hover:border-accent hover:text-accent"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center border border-primary-foreground/20 text-primary-foreground/60 transition-colors hover:border-accent hover:text-accent"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Colonne 2 : Nos services */}
          <div>
            <h3 className="mb-6 border-b border-accent pb-3 text-lg font-bold uppercase tracking-wide">
              Nos Services
            </h3>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href="/services"
                    className="flex items-center gap-2 text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    <ChevronRight className="h-4 w-4 text-accent" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Zone d'intervention */}
          <div>
            <h3 className="mb-6 border-b border-accent pb-3 text-lg font-bold uppercase tracking-wide">
              Zone d&apos;intervention
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {companyInfo.zones.map((zone) => (
                <div key={zone} className="text-sm text-primary-foreground/70">
                  {zone}
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-primary-foreground/50">
              Intervention possible dans d&apos;autres communes sur demande.
            </p>
          </div>

          {/* Colonne 4 : Contact */}
          <div>
            <h3 className="mb-6 border-b border-accent pb-3 text-lg font-bold uppercase tracking-wide">
              Contactez-nous
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-3 text-sm transition-colors hover:text-accent"
                >
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <div className="font-semibold">{companyInfo.phone}</div>
                    <div className="text-xs text-primary-foreground/50">Urgences 24h/24</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-start gap-3 text-sm transition-colors hover:text-accent"
                >
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <div>{companyInfo.email}</div>
                    <div className="text-xs text-primary-foreground/50">Réponse sous 24h</div>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <div>{companyInfo.address}</div>
                  <div>{companyInfo.city}</div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <div>Lun-Ven : {companyInfo.hours.weekdays}</div>
                  <div>Sam : {companyInfo.hours.saturday}</div>
                  <div className="text-accent">Urgences : 24h/24, 7j/7</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barre certifications */}
      <div className="border-y border-primary-foreground/10 bg-primary-foreground/5">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">{companyInfo.yearsExperience}+</div>
              <div className="text-xs uppercase tracking-wide text-primary-foreground/60">Années d&apos;expérience</div>
            </div>
            <div className="h-12 w-px bg-primary-foreground/20" />
            {companyInfo.certifications.map((cert) => (
              <div
                key={cert}
                className="flex h-14 w-28 items-center justify-center border border-primary-foreground/20 text-center text-xs font-semibold uppercase tracking-wide text-primary-foreground/70"
              >
                {cert}
              </div>
            ))}
            <div className="h-12 w-px bg-primary-foreground/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">1500+</div>
              <div className="text-xs uppercase tracking-wide text-primary-foreground/60">Clients satisfaits</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 text-center text-xs text-primary-foreground/50 md:flex-row md:text-left">
          <p>&copy; {currentYear} PlombiPro - Tous droits réservés. SIRET : 123 456 789 00012</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="transition-colors hover:text-primary-foreground">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="transition-colors hover:text-primary-foreground">
              Politique de confidentialité
            </Link>
            <Link href="/cgv" className="transition-colors hover:text-primary-foreground">
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
