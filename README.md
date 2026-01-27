# PlombiPro - Site Vitrine Plombier Chauffagiste

Site vitrine professionnel pour un artisan plombier-chauffagiste. Projet démo portfolio avec design moderne et fonctionnalités complètes.

## Aperçu

- **6 pages** : Accueil, Services, Réalisations, Tarifs, Urgence, Contact
- **Design professionnel** bleu avec accent rouge urgence
- **Formulaires fonctionnels** avec envoi d'emails via Resend
- **SEO optimisé** avec Schema.org LocalBusiness
- **100% responsive** mobile-first

## Stack Technique

- [Next.js 15](https://nextjs.org/) - App Router
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Shadcn/ui](https://ui.shadcn.com/) - Composants UI
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) - Validation formulaires
- [Resend](https://resend.com/) - Envoi d'emails
- [Lucide React](https://lucide.dev/) - Icônes

## Installation

### Prérequis

- Node.js 18+
- npm ou yarn

### Étapes

1. **Cloner le projet**

```bash
git clone <url-du-repo>
cd plombipro
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Configurer les variables d'environnement**

Copier le fichier `.env.example` en `.env.local` :

```bash
cp .env.example .env.local
```

Remplir les variables :

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=votre@email.com
```

4. **Lancer le serveur de développement**

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## Structure du Projet

```
src/
├── app/                    # Pages Next.js (App Router)
│   ├── api/               # Routes API (contact, urgence)
│   ├── contact/           # Page contact
│   ├── realisations/      # Page réalisations
│   ├── services/          # Page services
│   ├── tarifs/            # Page tarifs
│   ├── urgence/           # Page urgence
│   ├── globals.css        # Styles globaux
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Page d'accueil
├── components/
│   ├── cards/             # Composants cartes (Service, Testimonial, etc.)
│   ├── forms/             # Formulaires (Contact, Urgence)
│   ├── layout/            # Header, Footer
│   ├── seo/               # Schema.org
│   └── ui/                # Composants Shadcn/ui
├── lib/
│   ├── data.ts            # Données du site (services, témoignages, etc.)
│   └── utils.ts           # Utilitaires
└── types/
    └── index.ts           # Types TypeScript
```

## Personnalisation

### Modifier les informations de l'entreprise

Éditer le fichier `src/lib/data.ts` :

- `companyInfo` : nom, téléphone, email, adresse, zones d'intervention
- `services` : liste des services proposés
- `testimonials` : témoignages clients
- `realisations` : galerie de réalisations
- `tarifsBase` et `forfaits` : grille tarifaire

### Modifier les couleurs

Éditer `src/app/globals.css` :

- `--primary` : couleur principale (bleu professionnel)
- `--destructive` / `--urgency` : couleur d'accent (rouge urgence)

### Ajouter des images

Les images utilisent Unsplash par défaut. Pour utiliser vos propres images :

1. Placer les images dans `public/images/`
2. Modifier les chemins dans `src/lib/data.ts`
3. Si hébergement externe, ajouter le domaine dans `next.config.ts`

## Déploiement

### Vercel (recommandé)

1. Pusher le projet sur GitHub
2. Connecter le repo à [Vercel](https://vercel.com)
3. Ajouter les variables d'environnement
4. Déployer

### Build manuel

```bash
npm run build
npm start
```

## Configuration Email (Resend)

1. Créer un compte sur [resend.com](https://resend.com)
2. Créer une clé API
3. Configurer un domaine (ou utiliser le domaine de test)
4. Mettre à jour les templates dans `src/app/api/contact/route.ts` et `src/app/api/urgency/route.ts`

## Fonctionnalités

### Pages

| Page | URL | Description |
|------|-----|-------------|
| Accueil | `/` | Hero, services, avantages, témoignages, CTA |
| Services | `/services` | Liste détaillée des 6 services |
| Réalisations | `/realisations` | Galerie avant/après avec filtres |
| Tarifs | `/tarifs` | Grille tarifaire transparente |
| Urgence | `/urgence` | Page dédiée urgence 24/7 |
| Contact | `/contact` | Formulaire devis complet |

### Composants réutilisables

- `ServiceCard` : carte service (simple ou détaillée)
- `TestimonialCard` : carte témoignage avec étoiles
- `AdvantageCard` : avantage avec icône
- `RealisationCard` : carte réalisation avec hover avant/après
- `SectionTitle` : titre de section standardisé
- `ContactForm` / `UrgencyForm` : formulaires avec validation

### SEO

- Metadata complète par page
- Schema.org LocalBusiness
- Open Graph / Twitter Cards
- Balises sémantiques HTML5

## Scripts

```bash
npm run dev      # Serveur de développement
npm run build    # Build production
npm run start    # Serveur production
npm run lint     # Linter ESLint
```

## Licence

Projet démo - Libre d'utilisation pour projets personnels et commerciaux.

---

Créé avec Next.js 15, TypeScript et Tailwind CSS.
