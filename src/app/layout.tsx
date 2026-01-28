import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "PlombiPro - Plombier Chauffagiste Paris | Dépannage 24/7",
    template: "%s | PlombiPro",
  },
  description:
    "PlombiPro, votre artisan plombier-chauffagiste à Paris et proche banlieue. Dépannage urgence 24h/24, installation, rénovation salle de bain, entretien chaudière. Devis gratuit.",
  keywords: [
    "plombier Paris",
    "chauffagiste Paris",
    "dépannage plomberie",
    "urgence plombier",
    "rénovation salle de bain",
    "installation chaudière",
    "entretien chaudière",
    "plombier 15e",
    "plombier Boulogne",
    "plombier Neuilly",
  ],
  authors: [{ name: "PlombiPro" }],
  creator: "PlombiPro",
  metadataBase: new URL("https://plombipro.fr"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://plombipro.fr",
    siteName: "PlombiPro",
    title: "PlombiPro - Plombier Chauffagiste Paris | Dépannage 24/7",
    description:
      "Votre artisan plombier-chauffagiste de confiance à Paris. Intervention rapide, devis gratuit, travaux garantis.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PlombiPro - Plombier Chauffagiste Paris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PlombiPro - Plombier Chauffagiste Paris",
    description: "Dépannage plomberie 24h/24, installation chauffage, rénovation salle de bain. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <head>
        <LocalBusinessSchema />
      </head>
      <body className={`${inter.variable} ${merriweather.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
