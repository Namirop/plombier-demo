import type {
  Service,
  Testimonial,
  Realisation,
  Tarif,
  NavLink,
} from "@/types";

// Navigation
export const navLinks: NavLink[] = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/contact", label: "Contact" },
];

// Informations entreprise
export const companyInfo = {
  name: "PlombiPro",
  owner: "Michel Dubois",
  phone: "06 40 53 38 45",
  phoneUrgency: "06 40 53 38 45",
  email: "romainmaes@outlook.fr",
  address: "15 Rue de la Fontaine",
  city: "75015 Paris",
  fullAddress: "15 Rue de la Fontaine, 75015 Paris",
  hours: {
    weekdays: "8h00 - 19h00",
    saturday: "9h00 - 17h00",
    sunday: "Urgences uniquement",
  },
  yearsExperience: 15,
  certifications: ["RGE", "Qualibat", "Assurance décennale"],
  zones: [
    "Paris 15e",
    "Paris 16e",
    "Paris 14e",
    "Paris 7e",
    "Boulogne-Billancourt",
    "Neuilly-sur-Seine",
    "Issy-les-Moulineaux",
    "Vanves",
    "Malakoff",
    "Montrouge",
  ],
};

// Services résumés (page d'accueil)
export const servicesHome = [
  {
    id: "plomberie",
    title: "Plomberie",
    description:
      "Installation, réparation et entretien de tous vos équipements sanitaires",
    icon: "Wrench",
  },
  {
    id: "chauffage",
    title: "Chauffage",
    description:
      "Installation et maintenance de chaudières, pompes à chaleur et radiateurs",
    icon: "Flame",
  },
  {
    id: "urgence",
    title: "Dépannage urgence",
    description:
      "Intervention rapide 24h/24 et 7j/7 pour tous vos problèmes urgents",
    icon: "Siren",
  },
];

// Services détaillés (page services)
export const services: Service[] = [
  {
    id: "plomberie-generale",
    title: "Plomberie générale",
    description:
      "De l'installation à la réparation, nous prenons en charge tous vos travaux de plomberie. Robinetterie, tuyauterie, évacuation, nous intervenons sur l'ensemble de votre réseau d'eau.",
    icon: "Wrench",
    includes: [
      "Installation de robinetterie",
      "Réparation de fuites",
      "Remplacement de joints",
      "Débouchage de canalisations",
      "Installation de sanitaires",
      "Mise aux normes",
    ],
    priceRange: "À partir de 90€",
  },
  {
    id: "depannage-urgence",
    title: "Dépannage d'urgence",
    description:
      "Une fuite d'eau ? Une canalisation bouchée ? Nous intervenons en urgence, 24h/24 et 7j/7, pour résoudre vos problèmes de plomberie les plus critiques.",
    icon: "Siren",
    includes: [
      "Intervention sous 2 heures",
      "Fuites d'eau importantes",
      "Canalisations bouchées",
      "Robinetterie défaillante",
      "Dégât des eaux",
      "Coupure d'eau",
    ],
    priceRange: "À partir de 150€",
  },
  {
    id: "installation-chauffage",
    title: "Installation chauffage",
    description:
      "Nous installons tous types de systèmes de chauffage : chaudières gaz, fioul, pompes à chaleur. Profitez d'un confort optimal et d'économies d'énergie.",
    icon: "Flame",
    includes: [
      "Chaudières gaz à condensation",
      "Chaudières fioul",
      "Pompes à chaleur air/eau",
      "Radiateurs et planchers chauffants",
      "Ballons d'eau chaude",
      "Raccordement et mise en service",
    ],
    priceRange: "Sur devis",
  },
  {
    id: "entretien-chaudiere",
    title: "Entretien chaudière",
    description:
      "L'entretien annuel de votre chaudière est obligatoire. Confiez-nous cette mission pour garantir votre sécurité et optimiser les performances de votre appareil.",
    icon: "Settings",
    includes: [
      "Vérification complète de l'appareil",
      "Nettoyage du brûleur et de l'échangeur",
      "Contrôle des émissions de gaz",
      "Vérification de l'étanchéité",
      "Remise d'attestation d'entretien",
      "Conseils d'utilisation",
    ],
    priceRange: "120€ TTC",
  },
  {
    id: "renovation-salle-de-bain",
    title: "Rénovation salle de bain",
    description:
      "Transformez votre salle de bain en un espace moderne et fonctionnel. De la douche à l'italienne à la baignoire balnéo, nous réalisons tous vos projets.",
    icon: "Bath",
    includes: [
      "Création de douche à l'italienne",
      "Installation de baignoire",
      "Pose de sanitaires",
      "Carrelage et faïence",
      "Meuble vasque",
      "Accessoires et finitions",
    ],
    priceRange: "Sur devis",
  },
  {
    id: "detection-fuites",
    title: "Détection de fuites",
    description:
      "Grâce à nos équipements de pointe (caméra thermique, détecteur acoustique), nous localisons précisément les fuites sans travaux destructifs.",
    icon: "Search",
    includes: [
      "Recherche par caméra thermique",
      "Détection acoustique",
      "Inspection vidéo des canalisations",
      "Rapport détaillé d'intervention",
      "Méthode non destructive",
      "Localisation précise",
    ],
    priceRange: "À partir de 200€",
  },
];

// Avantages
export const advantages = [
  {
    id: "reactivite",
    title: "Réactivité garantie",
    description:
      "Intervention sous 2 heures pour les urgences, rendez-vous sous 48h pour les travaux",
    icon: "Clock",
  },
  {
    id: "certifie",
    title: "Artisan certifié",
    description:
      "Qualifications RGE et Qualibat, gage de qualité et de professionnalisme",
    icon: "Award",
  },
  {
    id: "transparence",
    title: "Prix transparents",
    description:
      "Devis gratuit et détaillé avant chaque intervention, sans surprise à la facturation",
    icon: "FileText",
  },
  {
    id: "garantie",
    title: "Garantie des travaux",
    description:
      "Tous nos travaux sont garantis et couverts par notre assurance décennale",
    icon: "ShieldCheck",
  },
];

// Témoignages
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Marie-Claire Petit",
    location: "Paris 15e",
    rating: 5,
    text: "Intervention rapide et efficace pour une fuite sous mon évier. Le plombier était ponctuel, professionnel et a pris le temps de m'expliquer le problème. Je recommande vivement !",
    problem: "Fuite sous évier",
  },
  {
    id: "2",
    name: "Jean-Pierre Moreau",
    location: "Boulogne-Billancourt",
    rating: 5,
    text: "Excellent travail pour l'installation de ma nouvelle chaudière à condensation. L'équipe a été très professionnelle et le chantier a été laissé propre. Mes factures de gaz ont baissé de 30% !",
    problem: "Installation chaudière",
  },
  {
    id: "3",
    name: "Sophie Laurent",
    location: "Neuilly-sur-Seine",
    rating: 5,
    text: "PlombiPro a entièrement rénové ma salle de bain. Le résultat est magnifique et conforme à mes attentes. Les délais ont été respectés et l'équipe était très à l'écoute.",
    problem: "Rénovation salle de bain",
  },
];

// Réalisations
export const realisations: Realisation[] = [
  {
    id: "1",
    title: "Rénovation complète salle de bain",
    city: "Paris 15e",
    duration: "5 jours",
    type: "renovation",
    typeLabel: "Rénovation",
    imageBefore: "/images/reno sdb avant.png",
    imageAfter: "/images/reno sdb apres.png",
    description:
      "Transformation complète avec douche à l'italienne, double vasque et rangements optimisés.",
  },
  {
    id: "2",
    title: "Installation chaudière condensation",
    city: "Boulogne-Billancourt",
    duration: "1 jour",
    type: "chauffage",
    typeLabel: "Chauffage",
    imageBefore: "/images/chaudiere avant.png",
    imageAfter: "/images/chaudiere après.png",
    description:
      "Remplacement d'une vieille chaudière par un modèle à condensation haute performance.",
  },
  {
    id: "3",
    title: "Dépannage fuite urgence",
    city: "Neuilly-sur-Seine",
    duration: "2 heures",
    type: "urgence",
    typeLabel: "Urgence",
    imageBefore: "/images/fuite avant.png",
    imageAfter: "/images/fuite après.png",
    description:
      "Intervention d'urgence pour une fuite importante sous plancher, réparation sans destruction.",
  },
  {
    id: "4",
    title: "Installation douche PMR",
    city: "Paris 16e",
    duration: "3 jours",
    type: "renovation",
    typeLabel: "Rénovation",
    imageBefore: "/images/douche pmr avant.png",
    imageAfter: "/images/douche pmr après.png",
    description:
      "Création d'une douche accessible PMR avec siège intégré et barre de maintien.",
  },
  {
    id: "6",
    title: "Installation pompe à chaleur",
    city: "Vanves",
    duration: "2 jours",
    type: "chauffage",
    typeLabel: "Chauffage",
    imageBefore: "/images/pompe à chaleur avant.png",
    imageAfter: "/images/pompe à chaleur après.png",
    description:
      "Installation d'une pompe à chaleur air/eau pour un chauffage économique et écologique.",
  },
  {
    id: "8",
    title: "Création salle d'eau",
    city: "Montrouge",
    duration: "4 jours",
    type: "renovation",
    typeLabel: "Rénovation",
    imageAfter: "/images/salle d'eau.png",
    description:
      "Création d'une salle d'eau complète dans un espace de 4m² avec optimisation maximale.",
  },
];

// Tarifs de base
export const tarifsBase = [
  {
    id: "deplacement",
    service: "Déplacement",
    priceRange: "40€",
    details: "Offert si travaux réalisés",
  },
  {
    id: "horaire",
    service: "Taux horaire",
    priceRange: "60€/h",
    details: "Main d'œuvre",
  },
  {
    id: "urgence",
    service: "Majoration urgence",
    priceRange: "+50%",
    details: "Soir, week-end, jours fériés",
  },
  {
    id: "devis",
    service: "Devis",
    priceRange: "Gratuit",
    details: "Sans engagement",
  },
];

// Forfaits courants
export const forfaits: Tarif[] = [
  {
    id: "debouchage-wc",
    service: "Débouchage WC",
    priceRange: "90€ - 150€",
    details: "Selon complexité",
  },
  {
    id: "robinet",
    service: "Remplacement robinet",
    priceRange: "120€ - 180€",
    details: "Fourniture incluse",
  },
  {
    id: "fuite",
    service: "Réparation fuite",
    priceRange: "150€ - 250€",
    details: "Diagnostic inclus",
  },
  {
    id: "entretien",
    service: "Entretien chaudière",
    priceRange: "120€",
    details: "Attestation fournie",
  },
  {
    id: "chauffe-eau",
    service: "Installation chauffe-eau",
    priceRange: "600€ - 1200€",
    details: "Fourniture incluse",
  },
  {
    id: "sdb",
    service: "Rénovation salle de bain",
    priceRange: "Sur devis",
    details: "Étude personnalisée",
  },
];

// Types d'urgences
export const urgencyTypes = [
  { id: "fuite", label: "Fuite d'eau importante", icon: "Droplets" },
  { id: "canalisation", label: "Canalisation bouchée", icon: "CircleSlash" },
  { id: "chaudiere", label: "Chaudière en panne", icon: "Flame" },
  { id: "degat", label: "Dégât des eaux", icon: "CloudRain" },
  {
    id: "ballon",
    label: "Ballon d'eau chaude défectueux",
    icon: "Thermometer",
  },
  {
    id: "eau-chaude",
    label: "Plus d'eau chaude",
    icon: "ThermometerSnowflake",
  },
];

// Types de services pour le formulaire
export const serviceTypes = [
  { value: "plomberie", label: "Plomberie générale" },
  { value: "urgence", label: "Dépannage urgence" },
  { value: "chauffage", label: "Installation chauffage" },
  { value: "entretien", label: "Entretien chaudière" },
  { value: "renovation", label: "Rénovation salle de bain" },
  { value: "detection", label: "Détection de fuites" },
  { value: "autre", label: "Autre demande" },
];

// Budgets approximatifs pour le formulaire
export const budgetRanges = [
  { value: "moins-500", label: "Moins de 500€" },
  { value: "500-1000", label: "500€ - 1000€" },
  { value: "1000-3000", label: "1000€ - 3000€" },
  { value: "3000-5000", label: "3000€ - 5000€" },
  { value: "plus-5000", label: "Plus de 5000€" },
  { value: "inconnu", label: "Je ne sais pas" },
];
