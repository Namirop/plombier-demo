import { companyInfo } from "@/lib/data";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: companyInfo.name,
    image: "https://plombipro.fr/og-image.jpg",
    "@id": "https://plombipro.fr",
    url: "https://plombipro.fr",
    telephone: companyInfo.phone,
    email: companyInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo.address,
      addressLocality: "Paris",
      postalCode: "75015",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.8416,
      longitude: 2.2923,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/plombipro",
      "https://www.instagram.com/plombipro",
    ],
    priceRange: "€€",
    areaServed: companyInfo.zones.map((zone) => ({
      "@type": "City",
      name: zone,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de plomberie et chauffage",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Plomberie générale",
            description: "Installation, réparation et entretien de plomberie",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dépannage urgence",
            description: "Intervention urgente 24h/24 et 7j/7",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Installation chauffage",
            description: "Installation de chaudières et pompes à chaleur",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Entretien chaudière",
            description: "Entretien annuel obligatoire de chaudière",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Rénovation salle de bain",
            description: "Rénovation complète de salle de bain",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
