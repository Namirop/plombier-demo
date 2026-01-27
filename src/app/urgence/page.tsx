import type { Metadata } from "next";
import Image from "next/image";
import {
  Phone,
  Droplets,
  CircleSlash,
  Flame,
  CloudRain,
  Thermometer,
  ThermometerSnowflake,
  Clock,
  ShieldCheck,
  MapPin,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { UrgencyForm } from "@/components/forms/UrgencyForm";
import { companyInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Urgence Plomberie 24/7",
  description:
    "Urgence plomberie Paris 24h/24, 7j/7. Fuite d'eau, canalisation bouchée, panne chaudière. Intervention rapide sous 2 heures. Appelez maintenant !",
};

const urgencyProblems = [
  { icon: Droplets, label: "Fuite d'eau importante" },
  { icon: CircleSlash, label: "Canalisation bouchée" },
  { icon: Flame, label: "Chaudière en panne" },
  { icon: CloudRain, label: "Dégât des eaux" },
  { icon: Thermometer, label: "Ballon d'eau chaude défectueux" },
  { icon: ThermometerSnowflake, label: "Plus d'eau chaude" },
];

const steps = [
  {
    step: "01",
    title: "Appel",
    description: "Appelez-nous ou remplissez le formulaire. Nous sommes disponibles 24h/24, 7j/7.",
  },
  {
    step: "02",
    title: "Diagnostic",
    description: "Notre technicien évalue la situation par téléphone et vous donne un premier diagnostic.",
  },
  {
    step: "03",
    title: "Intervention",
    description: "Un plombier qualifié intervient chez vous sous 2 heures maximum.",
  },
];

export default function UrgencePage() {
  return (
    <>
      {/* Hero Urgence */}
      <section className="bg-accent">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Urgence plomberie 24/7
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-white/80">
            Intervention rapide sur Paris et proche banlieue. Un plombier chez vous sous 2 heures.
          </p>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="border-2 border-white bg-white px-10 py-6 text-2xl font-bold text-accent hover:bg-white/90"
            >
              <a href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}>
                <Phone className="mr-3 h-7 w-7" />
                {companyInfo.phone}
              </a>
            </Button>
            <p className="mt-4 text-white/70">
              Appel gratuit - Devis immédiat par téléphone
            </p>
          </div>
        </div>
      </section>

      {/* Nous intervenons pour */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold">Nous intervenons pour</h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-accent" />
          <p className="mt-6 text-center text-muted-foreground">
            Tous types de problèmes urgents de plomberie et chauffage
          </p>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2 lg:grid-cols-3">
            {urgencyProblems.map((problem) => (
              <div
                key={problem.label}
                className="flex items-center gap-4 border-2 border-border bg-card p-4 transition-colors hover:border-accent"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-accent">
                  <problem.icon className="h-7 w-7 text-white" />
                </div>
                <span className="font-semibold text-foreground">{problem.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre processus */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold">Notre processus d&apos;intervention</h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-accent" />
          <p className="mt-6 text-center text-muted-foreground">
            Une prise en charge rapide et efficace pour résoudre votre problème
          </p>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.step} className="border-2 border-border bg-card p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center bg-primary text-2xl font-bold text-primary-foreground">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                <p className="mt-3 text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire + Zone intervention */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Formulaire */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Demande de rappel urgent
              </h2>
              <div className="mt-2 h-1 w-12 bg-accent" />
              <p className="mt-4 text-muted-foreground">
                Vous préférez être rappelé ? Remplissez ce formulaire, nous vous contactons
                dans les plus brefs délais.
              </p>
              <div className="mt-8 border-2 border-border bg-card p-6">
                <UrgencyForm />
              </div>
            </div>

            {/* Zone d'intervention */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Zone d&apos;intervention urgence
              </h2>
              <div className="mt-2 h-1 w-12 bg-accent" />
              <p className="mt-4 text-muted-foreground">
                Nous intervenons en urgence sur l&apos;ensemble de ces communes :
              </p>
              <div className="relative mt-8 aspect-square overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&h=600&fit=crop"
                  alt="Paris - Zone d'intervention"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/90 p-8">
                  <div className="grid h-full grid-cols-2 content-center gap-3">
                    {companyInfo.zones.map((zone) => (
                      <div key={zone} className="flex items-center gap-2 text-primary-foreground">
                        <MapPin className="h-4 w-4 shrink-0 text-accent" />
                        <span className="text-sm">{zone}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Garanties */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 text-center md:grid-cols-3">
            <div className="text-primary-foreground">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center bg-accent">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Intervention sous 2h</h3>
              <p className="mt-3 text-primary-foreground/70">
                Nous nous engageons à être chez vous en moins de 2 heures
              </p>
            </div>
            <div className="text-primary-foreground">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center bg-accent">
                <ShieldCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Artisan certifié</h3>
              <p className="mt-3 text-primary-foreground/70">
                Qualifications RGE et Qualibat, assurance décennale
              </p>
            </div>
            <div className="text-primary-foreground">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center bg-accent">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Devis avant travaux</h3>
              <p className="mt-3 text-primary-foreground/70">
                Aucune intervention sans votre accord préalable sur le devis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-accent py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl font-semibold text-white">
            N&apos;attendez pas que la situation empire !
          </p>
          <Button
            asChild
            size="lg"
            className="mt-6 border-2 border-white bg-white px-10 py-6 text-xl font-bold text-accent hover:bg-white/90"
          >
            <a href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}>
              <Phone className="mr-2 h-6 w-6" />
              Appeler maintenant : {companyInfo.phone}
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
