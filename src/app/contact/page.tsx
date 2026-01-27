import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, CheckCircle, FileText, Zap } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { ContactForm } from "@/components/forms/ContactForm";
import { companyInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact & Devis Gratuit",
  description:
    "Demandez votre devis gratuit pour vos travaux de plomberie et chauffage. Réponse sous 24h. Plombier Paris et proche banlieue.",
  keywords: [
    "devis plombier Paris",
    "contact plombier",
    "devis gratuit plomberie",
    "devis chauffage",
  ],
};

const engagements = [
  {
    icon: FileText,
    title: "Devis gratuit sous 24h",
    description: "Recevez un devis détaillé et transparent rapidement",
  },
  {
    icon: Zap,
    title: "Interventions rapides",
    description: "Rendez-vous sous 48h pour les travaux programmés",
  },
  {
    icon: CheckCircle,
    title: "Garantie travaux",
    description: "Tous nos travaux sont garantis et assurés",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header avec image */}
      <section className="relative">
        <div className="relative h-[40vh] min-h-[300px] w-full">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&h=600&fit=crop"
            alt="Contact PlombiPro"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="bg-primary py-12 text-center text-primary-foreground">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold md:text-5xl">Demander un devis gratuit</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Décrivez-nous votre projet et recevez un devis personnalisé sous 24h. Sans engagement de votre part.
            </p>
          </div>
        </div>
      </section>

      {/* Formulaire + Coordonnées */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Formulaire */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground">Formulaire de demande de devis</h2>
              <div className="mt-2 h-1 w-12 bg-accent" />
              <div className="mt-8 border-2 border-border bg-card p-6">
                <ContactForm />
              </div>
            </div>

            {/* Coordonnées */}
            <div className="space-y-6">
              <div className="border-2 border-border bg-card">
                <div className="border-b-2 border-border bg-muted px-6 py-4">
                  <h3 className="font-bold text-foreground">Nos coordonnées</h3>
                </div>
                <div className="p-6 space-y-4">
                  <a
                    href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-4 p-3 transition-colors hover:bg-muted"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-accent">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Téléphone</p>
                      <p className="font-semibold text-foreground">{companyInfo.phone}</p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="flex items-center gap-4 p-3 transition-colors hover:bg-muted"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary">
                      <Mail className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-semibold text-foreground">{companyInfo.email}</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary">
                      <MapPin className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Adresse</p>
                      <p className="font-semibold text-foreground">{companyInfo.address}</p>
                      <p className="text-foreground">{companyInfo.city}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary">
                      <Clock className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Horaires</p>
                      <p className="text-foreground">Lun-Ven : {companyInfo.hours.weekdays}</p>
                      <p className="text-foreground">Sam : {companyInfo.hours.saturday}</p>
                      <p className="text-foreground">Dim : {companyInfo.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="border-2 border-border overflow-hidden">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.4817988927!2d2.2923!3d48.8416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6701b4f58251b%3A0x167f5a60fb94aa76!2s75015%20Paris!5e0!3m2!1sfr!2sfr!4v1640000000000!5m2!1sfr!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation PlombiPro"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nos engagements"
            subtitle="Ce que nous vous garantissons pour chaque demande"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {engagements.map((engagement) => (
              <div key={engagement.title} className="border-2 border-border bg-card p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center bg-accent">
                  <engagement.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-foreground">{engagement.title}</h3>
                <p className="mt-3 text-muted-foreground">
                  {engagement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-accent py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl font-semibold text-white">
            Une question ? Appelez-nous directement
          </p>
          <a
            href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
            className="mt-6 inline-flex items-center gap-3 border-2 border-white bg-white px-10 py-4 text-xl font-bold text-accent transition-colors hover:bg-white/90"
          >
            <Phone className="h-6 w-6" />
            {companyInfo.phone}
          </a>
        </div>
      </section>
    </>
  );
}
