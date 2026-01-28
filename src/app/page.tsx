import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { ServiceCard, TestimonialCard, AdvantageCard } from "@/components/cards";
import { servicesHome, advantages, testimonials, companyInfo } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Image pleine largeur en haut */}
      <section className="relative">
        {/* Image pleine largeur */}
        <div className="relative h-[50vh] min-h-[400px] w-full md:h-[60vh]">
          <Image
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1600&h=900&fit=crop"
            alt="Plombier professionnel au travail"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/60" />
        </div>

        {/* Texte centré en dessous */}
        <div className="bg-primary py-16 text-center text-primary-foreground">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Votre plombier de confiance
              <br />
              <span className="text-accent">depuis {companyInfo.yearsExperience} ans</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
              Interventions rapides 7j/7 sur Paris et proche banlieue. Dépannage, installation, rénovation.
              Artisan certifié RGE avec assurance décennale. Devis gratuit et travaux garantis.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="border-2 border-accent bg-accent px-8 text-lg font-semibold uppercase tracking-wide text-white hover:bg-accent/90"
              >
                <Link href="/contact">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground/30 bg-transparent px-8 text-lg font-semibold uppercase tracking-wide text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Urgence 24/7
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Grid 2 colonnes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nos domaines d'expertise"
            subtitle="Des solutions complètes pour tous vos besoins en plomberie et chauffage, réalisées par des professionnels qualifiés."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servicesHome.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                variant="simple"
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border-2 border-primary bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Découvrir tous nos services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir - Liste verticale */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionTitle
                title="Pourquoi choisir PlombiPro ?"
                subtitle="Notre engagement : votre satisfaction et votre tranquillité d'esprit."
                centered={false}
              />
              <div className="mt-8">
                {advantages.map((advantage) => (
                  <AdvantageCard
                    key={advantage.id}
                    title={advantage.title}
                    description={advantage.description}
                    icon={advantage.icon}
                  />
                ))}
              </div>
            </div>
            <div className="relative hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop"
                alt="Technicien PlombiPro"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages - Vertical */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Ils nous font confiance"
            subtitle="Découvrez les témoignages de nos clients satisfaits à Paris et en proche banlieue."
          />
          <div className="mx-auto max-w-4xl space-y-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Notre zone d'intervention"
            subtitle="Nous intervenons rapidement sur Paris et l'ensemble de la proche banlieue ouest."
          />
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
              {companyInfo.zones.map((zone) => (
                <div
                  key={zone}
                  className="flex items-center gap-2 border border-border bg-card px-4 py-3 text-sm"
                >
                  <MapPin className="h-4 w-4 shrink-0 text-accent" />
                  {zone}
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-muted-foreground">
              Vous habitez une autre commune ? Contactez-nous pour vérifier si nous pouvons intervenir chez vous.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle
            title="Nos certifications et garanties"
            subtitle="Des qualifications reconnues pour des travaux de qualité professionnelle."
          />
          <div className="flex flex-wrap items-center justify-center gap-6">
            {companyInfo.certifications.map((cert) => (
              <div
                key={cert}
                className="flex h-24 w-36 items-center justify-center border-2 border-primary bg-primary/5 px-4 text-center text-sm font-bold uppercase tracking-wide text-primary"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-accent py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Un problème de plomberie ou de chauffage ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Ne laissez pas un problème s&apos;aggraver. Nos équipes sont disponibles pour intervenir rapidement
            et vous proposer une solution adaptée à votre situation.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="border-2 border-white bg-white px-8 text-lg font-semibold uppercase tracking-wide text-accent hover:bg-white/90"
            >
              <Link href="/contact">
                Demander un devis gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white bg-transparent px-8 text-lg font-semibold uppercase tracking-wide text-white hover:bg-white/10"
            >
              <a href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}>
                <Phone className="mr-2 h-5 w-5" />
                {companyInfo.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
