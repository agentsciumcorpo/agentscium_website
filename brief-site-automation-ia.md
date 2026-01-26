# Brief - Site Agentscium (Agence Automatisation IA)

## 🎨 Design System

### Palette de Couleurs
- **Luster White**: `#F4F1EC` (fond principal)
- **Aster Flower Blue**: `#9BACD8` (accents secondaires)
- **Habañero**: `#F98513` (CTA principal, accents)
- **Jodhpur Tan**: `#9AD1C8` (accents tertiaires)
- **Deep Space Royal**: `#223382` (titres, texte important)
- **Deadly Depths**: `#111144` (texte principal, fond dark)

### Typographie
- **Police principale**: Akira Expanded
- **Fallback**: Arial, sans-serif

---

## 🎯 Positionnement

### Qui sommes-nous ?
Agence d'automatisation IA qui construit des systèmes sur-mesure

### Cibles Prioritaires
- PME Industriel & BTP
- Agences commerciales / marketing

### Promesse Principale
Gagner du temps + augmenter le ROI en supprimant les tâches répétitives

### Différenciation
- ✅ Adaptation totale (pas de projet "copier-coller")
- ✅ Infrastructures IA 24/7
- ✅ **Rentabilité en ~2 mois** (argument fort)

---

## 📦 Structure de la Page d'Accueil

### 1. HERO SECTION (Au-dessus de la ligne de flottaison)

**Éléments requis:**
- Titre principal (H1) : Mettre en avant le positionnement
- Sous-titre : Promesse claire et différenciation
- CTA principal : "Audit gratuit" / "Diagnostic personnalisé"
- CTA secondaire : "Voir nos cas d'usage"
- Visuel/Illustration : Animation ou image représentant l'automatisation IA

**Proposition de contenu:**
```
H1: "Automatisez votre business avec l'IA sur-mesure"
Sous-titre: "Systèmes d'automatisation IA pour PME industrielles, BTP et agences. 
Rentable en 2 mois. Disponible 24/7."
CTA principal: "Obtenir un diagnostic gratuit"
CTA secondaire: "Découvrir nos solutions"
```

---

### 2. OFFRES (Section importante)

**Bloc: Nos 2 Offres Principales**

#### Offre 1 - Workflows Simples (Quick Wins)
- **Titre**: Quick Wins - Automatisations Rapides
- **Description**: Automatisations légères qui s'adaptent à vos outils existants (CRM, email, Excel, etc.)
- **Bénéfices**:
  - Résultats rapides
  - Réduction immédiate des tâches manuelles
  - S'intègre à votre stack actuel
- **CTA**: "Voir les workflows"

#### Offre 2 - Infrastructures IA Complètes
- **Titre**: Systèmes IA - Infrastructure Complete
- **Description**: Construction complète : interface + base de données + agents IA
- **Bénéfices**:
  - Système robuste 24/7
  - Scalabilité garantie
  - Usage métier dédié
- **CTA**: "Découvrir les systèmes"

---

### 3. CAS D'USAGE (Section tuiles/cartes)

**Bloc: 3 Catégories avec exemples concrets**

#### Catégorie 1: Génération & Augmentation de Leads
**Exemples en tuiles:**
- Capture automatique de leads
- Qualification intelligente
- Enrichissement de données
- Suivi et relances automatiques
- Scoring prédictif

#### Catégorie 2: Support Client & Chatbots
**Exemples en tuiles:**
- FAQ automatisée
- Base de connaissance intelligente
- Routage intelligent des demandes
- Réponses automatiques personnalisées
- Support multicanal 24/7

#### Catégorie 3: Automatisation de Process Internes
**Exemples en tuiles:**
- Génération automatique de devis
- Traitement et formatage Excel
- Reporting automatique
- Mise à jour multi-outils
- Gestion documentaire intelligente

---

### 4. PREUVES & GARANTIES

**Bloc: Nos Engagements**

**Carte 1: Rentabilité en 2 mois**
- Icône: 💰
- Texte: "ROI rapide grâce à l'économie de temps et l'augmentation des leads"
- Sous-texte: "Coût du système vs heures économisées mesurables"

**Carte 2: Disponibilité 24/7**
- Icône: 🔄
- Texte: "Fiabilité et continuité opérationnelle garanties"
- Sous-texte: "Vos systèmes IA travaillent même quand vous dormez"

**Carte 3: Sur-Mesure**
- Icône: 🎯
- Texte: "Méthode éprouvée : Diagnostic → Construction → Monitoring"
- Sous-texte: "Zéro solution copier-coller, 100% adapté à votre métier"

---

### 5. PROCESSUS (Optionnel mais recommandé)

**Bloc: Comment ça marche ?**

1. **Diagnostic** - Analyse de vos besoins et opportunités
2. **Conception** - Design du système sur-mesure
3. **Construction** - Développement et intégration
4. **Livraison** - Déploiement et formation
5. **Monitoring** - Suivi et optimisation continue

---

### 6. APPELS À L'ACTION FINAUX

**CTA Principal (Hero + Fin de page):**
- Texte: "Obtenir un audit gratuit"
- Couleur: Habañero (#F98513)
- Action: Formulaire de contact / Calendly

**CTA Secondaire:**
- Texte: "Voir nos études de cas"
- Style: Outline / Ghost button
- Action: Vers section case studies (même si 1-2 pour commencer)

---

## 🛠 Stack Technique Recommandé

### Frontend
- **Framework**: React / Next.js (pour performance et SEO)
- **Styling**: TailwindCSS (customisé avec notre palette)
- **Animations**: Framer Motion

### Fonctionnalités
- Responsive design (mobile-first)
- Animations smooth au scroll
- Formulaire de contact avec validation
- Performance optimisée (Lighthouse score > 90)

---

## 📁 Structure du Projet

### Architecture Recommandée (Next.js + TypeScript)

```
agentscium-website/
│
├── public/                          # Assets statiques
│   ├── fonts/                       # Akira Expanded + fallbacks
│   │   ├── AkiraExpanded.woff2
│   │   └── AkiraExpanded.woff
│   ├── images/                      # Images optimisées
│   │   ├── hero/
│   │   ├── logos/
│   │   ├── icons/
│   │   └── case-studies/
│   ├── videos/                      # Vidéos si nécessaire
│   └── favicon.ico
│
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── layout.tsx              # Layout principal
│   │   ├── page.tsx                # Page d'accueil
│   │   ├── globals.css             # Styles globaux + Tailwind
│   │   ├── about/                  # Page À propos
│   │   │   └── page.tsx
│   │   ├── services/               # Page Services
│   │   │   └── page.tsx
│   │   ├── case-studies/           # Page Études de cas
│   │   │   └── page.tsx
│   │   ├── contact/                # Page Contact
│   │   │   └── page.tsx
│   │   └── api/                    # API Routes (formulaires)
│   │       └── contact/
│   │           └── route.ts
│   │
│   ├── components/                  # Composants réutilisables
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   │
│   │   ├── home/                   # Composants page d'accueil
│   │   │   ├── HeroSection.tsx
│   │   │   ├── OffersSection.tsx
│   │   │   ├── UseCasesSection.tsx
│   │   │   ├── ProofsSection.tsx
│   │   │   ├── ProcessSection.tsx
│   │   │   └── CTASection.tsx
│   │   │
│   │   ├── ui/                     # Composants UI de base
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── Container.tsx
│   │   │
│   │   └── animations/             # Wrappers d'animations
│   │       ├── FadeInUp.tsx
│   │       ├── StaggerContainer.tsx
│   │       ├── ParallaxSection.tsx
│   │       └── ScrollReveal.tsx
│   │
│   ├── lib/                        # Utilitaires & helpers
│   │   ├── constants.ts            # Constantes (couleurs, textes)
│   │   ├── animations.ts           # Variants Framer Motion
│   │   ├── utils.ts                # Fonctions utilitaires
│   │   └── validations.ts          # Schémas de validation
│   │
│   ├── styles/                     # Styles supplémentaires
│   │   ├── animations.css          # Keyframes CSS custom
│   │   └── fonts.css               # @font-face declarations
│   │
│   ├── types/                      # Types TypeScript
│   │   ├── index.ts
│   │   └── components.ts
│   │
│   └── data/                       # Données statiques
│       ├── use-cases.ts            # Liste des cas d'usage
│       ├── offers.ts               # Détails des offres
│       └── testimonials.ts         # Témoignages (si applicable)
│
├── .env.local                      # Variables d'environnement
├── .gitignore
├── next.config.js                  # Config Next.js
├── tailwind.config.ts              # Config Tailwind (palette custom)
├── tsconfig.json                   # Config TypeScript
├── package.json
└── README.md
```

### Alternative : Structure React + Vite (Plus Simple)

```
agentscium-website/
│
├── public/                          # Assets statiques
│   ├── fonts/
│   ├── images/
│   └── favicon.ico
│
├── src/
│   ├── components/                  # Même structure que Next.js
│   │   ├── layout/
│   │   ├── home/
│   │   ├── ui/
│   │   └── animations/
│   │
│   ├── pages/                       # Pages (React Router)
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── CaseStudies.tsx
│   │   └── Contact.tsx
│   │
│   ├── lib/                         # Utilitaires
│   ├── styles/                      # Styles
│   ├── types/                       # Types
│   ├── data/                        # Données
│   │
│   ├── App.tsx                      # Composant racine
│   ├── main.tsx                     # Point d'entrée
│   └── index.css                    # Styles globaux
│
├── .env
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

### Fichiers de Configuration Importants

#### `tailwind.config.ts` (Palette Agentscium)
```typescript
export default {
  theme: {
    extend: {
      colors: {
        'luster-white': '#F4F1EC',
        'aster-blue': '#9BACD8',
        'habanero': '#F98513',
        'jodhpur-tan': '#9AD1C8',
        'deep-space': '#223382',
        'deadly-depths': '#111144',
      },
      fontFamily: {
        'akira': ['Akira Expanded', 'Arial', 'sans-serif'],
      },
    },
  },
}
```

#### `package.json` (Dépendances Principales)
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "framer-motion": "^11.0.0",
    "react-intersection-observer": "^9.0.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "@types/react": "^18.0.0",
    "@types/node": "^20.0.0"
  }
}
```

---

## 📋 Notes d'Implémentation

### Police Akira Expanded
- À intégrer via @font-face ou Google Fonts si disponible
- Utiliser pour les titres principaux (H1, H2)
- Fallback: Arial Black, sans-serif

### Inspirations
- Site référence: https://visionia.io
- Style: Moderne, tech, professionnel
- Animations: Subtiles et élégantes

### Priorités
1. Hero section percutante
2. Clarté des 2 offres
3. Cas d'usage immédiatement identifiables
4. Preuves sociales et garanties visibles
5. CTAs bien positionnés et attractifs

---

## ❓ Questions Techniques à Valider

### Framework & Setup
1. **Framework choisi** :
   - [ ] Next.js (recommandé pour SEO + performance + SSR)
   - [ ] React + Vite (plus simple, plus rapide à setup)
   - [ ] React CRA (classique)
   - [ ] Autre : __________

2. **TypeScript** :
   - [ ] Oui (recommandé pour maintenabilité)
   - [ ] Non (JavaScript pur)

3. **Pages à prévoir dès maintenant** :
   - [ ] Page d'accueil uniquement
   - [ ] + Page À propos
   - [ ] + Page Services/Offres détaillées
   - [ ] + Page Contact
   - [ ] + Page Case Studies/Portfolio
   - [ ] + Blog (optionnel)

### Gestion d'État & Logique
4. **State management** :
   - [ ] Simple (useState + useContext)
   - [ ] Redux Toolkit
   - [ ] Zustand
   - [ ] Autre : __________

### Backend & Formulaires
5. **Formulaire de contact - Solution** :
   - [ ] Service tiers (Formspree, EmailJS, Web3Forms)
   - [ ] API Route Next.js + Resend/SendGrid
   - [ ] Backend Node.js custom
   - [ ] Autre : __________

6. **CMS pour contenu** (optionnel) :
   - [ ] Pas besoin (contenu hard-codé)
   - [ ] Sanity / Contentful
   - [ ] Markdown files
   - [ ] Autre : __________

### Déploiement
7. **Hébergement prévu** :
   - [ ] Vercel (recommandé pour Next.js)
   - [ ] Netlify
   - [ ] GitHub Pages
   - [ ] Autre : __________

### Analytics & SEO
8. **Tracking** :
   - [ ] Google Analytics 4
   - [ ] Plausible
   - [ ] Pas pour l'instant
   
9. **SEO** :
   - [ ] React Helmet / Next SEO
   - [ ] Métadonnées basiques seulement

---

## 🎬 Animations & Interactions

### Librairies Confirmées
- **Framer Motion** ✅ (animations complexes, transitions de page)
- **React Intersection Observer** (trigger animations au scroll)
- **GSAP** (optionnel, pour animations très avancées)

### Animations Prévues par Section

#### Hero Section
- Apparition progressive du titre (fade + slide up)
- Animation du CTA au hover (scale + glow effect)
- Particules/background animé subtil
- Typing effect sur le sous-titre (optionnel)

#### Offres (Cards)
- Hover effect : élévation + glow
- Apparition au scroll (stagger effect)
- Transition smooth entre les états

#### Cas d'Usage (Tuiles)
- Grid animation (apparition décalée)
- Hover : zoom léger + overlay
- Icônes animées au survol

#### Preuves & Garanties
- Counter animation (chiffres qui montent)
- Icônes avec micro-animations
- Parallax subtil au scroll

#### Navigation
- Menu burger animé (mobile)
- Smooth scroll vers sections
- Indicateur de progression (scroll)

### Principes d'Animation
- **Durée** : 0.3s - 0.6s (jamais trop long)
- **Easing** : cubic-bezier personnalisés
- **Performance** : GPU-accelerated (transform, opacity)
- **Accessibilité** : respecter `prefers-reduced-motion`

### Exemple de Configuration Framer Motion
```javascript
// Variants pour réutilisation
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};
```

---

## 🎯 Prochaines Étapes

### Phase 1 : Setup
1. Valider les choix techniques (framework, TypeScript, etc.)
2. Créer la structure de dossiers
3. Installer les dépendances (Framer Motion, TailwindCSS, etc.)
4. Configurer le design system (couleurs, fonts)

### Phase 2 : Développement
1. Création de la structure HTML/JSX de la page d'accueil
2. Implémentation du design system
3. Développement des composants (Hero, Cards, etc.)
4. Intégration de Framer Motion
5. Responsive design

### Phase 3 : Finitions
1. Optimisation des animations
2. Tests de performance (Lighthouse)
3. SEO basique
4. Tests cross-browser
5. Déploiement

---

**Inspiration site**: https://visionia.io
**Date de création**: Janvier 2026
