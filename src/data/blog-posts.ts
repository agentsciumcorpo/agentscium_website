// Donnees mock pour le blog
// Ces donnees seront remplacees par Sanity une fois configure

export interface MockBlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
  };
  publishedAt: string;
  category: string;
  readTime: string;
  image?: string;
}

export const mockBlogPosts: MockBlogPost[] = [
  {
    slug: 'automatiser-recherche-reddit-n8n-ia',
    title: "Automatiser la recherche sur Reddit avec n8n + IA (filtrage, scoring, email)",
    excerpt:
      "Fini de scroller Reddit pendant des heures. Ce workflow n8n scrape, filtre par IA, compare avec des exemples (RAG) et vous envoie les posts pertinents par email.",
    content: `
Vous passez des heures a scroller Reddit pour trouver des opportunites commerciales, des leads ou des discussions pertinentes pour votre activite ? Les posts interessants sont noyes dans le bruit, et vous n'avez pas le temps de surveiller ca tous les jours.

**La solution** : un systeme automatique qui fait le tri pour vous. Low-cost, sans intervention manuelle, et qui tourne 24/7.

## Ce que fait ce workflow

Concretement, le workflow fait tout :

- Recupere les nouveaux posts d'un subreddit (sans API officielle Reddit)
- Filtre par fraicheur (ex: posts < 2h)
- Prefiltre IA "cheap" pour economiser des tokens
- Compare a des exemples etiquetes (RAG avec Supabase)
- Valide l'opportunite avec un LLM
- Envoie les posts valides par email (Gmail)

## Pas le temps de tout lire ?

[Telecharger le workflow n8n (.json)](/workflows/reddit-research.json)

## Les outils necessaires

| Outil | Prix |
|-------|------|
| **n8n** | Gratuit (self-hosted) ou cloud |
| **Reddit (JSON public)** | Gratuit |
| **OpenAI** | ~0.01$/execution |
| **Supabase** | Gratuit (tier free) |
| **Gmail** | Gratuit |

## Bloc A - Scraping des posts

Le workflow utilise l'endpoint JSON public de Reddit :

\`https://www.reddit.com/r/personalfinance/new.json\`

Pourquoi cette methode ? L'API officielle Reddit est payante. L'endpoint .json est gratuit et suffisant.

## Bloc B - Filtre horaire

On garde uniquement les posts publies dans les **2 dernieres heures**. Moins de bruit, opportunites plus chaudes.

## Bloc C - Prefiltre IA

Objectif : eliminer les posts hors-sujet AVANT les etapes couteuses. GPT-4.1-mini coute ~10x moins cher que GPT-4.

## Bloc D - RAG avec Supabase

On recupere des exemples similaires (etiquetes OUI/NON) pour "caler" la decision du LLM final. Le post est converti en embedding, Supabase retourne les exemples les plus similaires.

## Bloc E - Decision finale

Le LLM recoit le post + les exemples et decide si c'est une opportunite. Si oui → email envoye.

## Resultat

- **2-3h/jour** de veille economisees
- **Leads qualifies** automatiquement
- **~$3/mois** en couts API

[Telecharger le workflow](/workflows/reddit-research.json) | [Demander de l'aide](/contact)
    `,
    author: {
      name: 'Equipe Agentscium',
      role: 'Experts en automatisation IA',
    },
    publishedAt: '2026-01-26',
    category: 'Tutoriel',
    readTime: '12 min',
  },
  {
    slug: 'introduction-automatisation-ia-pme',
    title: "Introduction a l'automatisation IA pour les PME",
    excerpt:
      "Decouvrez comment l'intelligence artificielle peut transformer votre PME en automatisant les taches repetitives et en augmentant votre productivite.",
    content: `
L'automatisation par intelligence artificielle (IA) n'est plus reservee aux grandes entreprises. Aujourd'hui, les PME peuvent egalement beneficier de ces technologies pour optimiser leurs operations et rester competitives.

## Qu'est-ce que l'automatisation IA ?

L'automatisation IA consiste a utiliser des algorithmes d'apprentissage automatique et de traitement du langage naturel pour executer des taches traditionnellement realisees par des humains. Contrairement a l'automatisation classique basee sur des regles fixes, l'IA peut s'adapter, apprendre et prendre des decisions basees sur les donnees.

## Les benefices pour les PME

### Gain de temps
Les taches repetitives comme la saisie de donnees, les relances email ou la generation de rapports peuvent etre automatisees, liberant vos equipes pour des activites a plus forte valeur ajoutee.

### Reduction des erreurs
L'IA elimine les erreurs humaines dans les processus standardises, ameliorant la qualite et la coherence de vos operations.

### Disponibilite 24/7
Vos systemes automatises travaillent en continu, meme en dehors des heures de bureau.

## Par ou commencer ?

Nous recommandons de debuter par des "Quick Wins" - des automatisations ciblees qui resolvent un probleme specifique avec un ROI rapide. Une fois ces premiers succes valides, vous pourrez etendre l'automatisation a d'autres processus.
    `,
    author: {
      name: 'Equipe Agentscium',
      role: 'Experts en automatisation IA',
    },
    publishedAt: '2026-01-15',
    category: 'Guide',
    readTime: '5 min',
  },
  {
    slug: 'chatbots-ia-service-client',
    title: 'Comment les chatbots IA revolutionnent le service client',
    excerpt:
      'Les chatbots alimentes par l\'IA permettent de repondre instantanement aux demandes clients tout en reduisant la charge de travail de vos equipes support.',
    content: `
Le service client est un domaine ou l'IA peut avoir un impact immediat et mesurable. Les chatbots modernes, alimentes par des modeles de langage avances, peuvent comprendre et repondre aux demandes clients avec une precision impressionnante.

## L'evolution des chatbots

Les premiers chatbots etaient limites a des reponses pre-programmees basees sur des mots-cles. Aujourd'hui, grace aux avancees en traitement du langage naturel (NLP), les chatbots IA peuvent :

- Comprendre le contexte et l'intention derriere les questions
- Gerer des conversations complexes sur plusieurs tours
- S'adapter au ton et au style de communication du client
- Apprendre continuellement des interactions

## Cas d'usage concrets

### FAQ automatisee
Un chatbot bien entraine peut repondre a 70-80% des questions recurrentes sans intervention humaine.

### Qualification de leads
Le chatbot peut poser des questions de qualification et scorer les prospects avant de les transmettre aux commerciaux.

### Support technique niveau 1
Pour les problemes courants, le chatbot peut guider les utilisateurs vers la solution, reduisant le volume de tickets.

## Mesurer le ROI

Les metriques cles pour evaluer l'efficacite d'un chatbot incluent :
- Taux de resolution sans escalade
- Temps de reponse moyen
- Score de satisfaction client
- Reduction du volume de tickets support
    `,
    author: {
      name: 'Equipe Agentscium',
      role: 'Experts en automatisation IA',
    },
    publishedAt: '2026-01-10',
    category: 'Cas d\'usage',
    readTime: '7 min',
  },
  {
    slug: 'roi-automatisation-2-mois',
    title: 'Comment atteindre un ROI en 2 mois avec l\'automatisation',
    excerpt:
      'Strategies et methodes pour rentabiliser rapidement vos investissements en automatisation IA.',
    content: `
L'un des principaux freins a l'adoption de l'automatisation IA est la perception d'un investissement lourd avec un retour incertain. Pourtant, avec la bonne approche, il est possible d'atteindre un ROI positif en seulement 2 mois.

## La methode Quick Wins

Au lieu de viser une transformation complete, nous recommandons de commencer par des automatisations ciblees :

1. **Identifier les goulots d'etranglement** : Quelles taches consomment le plus de temps de vos equipes ?
2. **Quantifier le cout actuel** : Combien d'heures sont passees sur ces taches ?
3. **Cibler les fruits a portee de main** : Quelles automatisations peuvent etre deployees rapidement ?

## Calculer le ROI

La formule est simple :
ROI = (Gains - Investissement) / Investissement

Les gains incluent :
- Heures economisees x cout horaire
- Reduction des erreurs et reprises
- Augmentation des conversions (si applicable)
- Amelioration de la satisfaction client

## Exemple concret

Une PME avec 5 commerciaux qui passent chacun 2h/jour sur des taches de prospection manuelle peut recuperer 10h/jour, soit 200h/mois.

A 50€/heure de cout charge, cela represente 10 000€/mois d'economie potentielle.

## Nos recommandations

- Commencez petit mais mesurez tout
- Choisissez des processus avec un volume eleve
- Impliquez les equipes des le debut
- Iterez rapidement sur les premiers retours
    `,
    author: {
      name: 'Equipe Agentscium',
      role: 'Experts en automatisation IA',
    },
    publishedAt: '2026-01-05',
    category: 'Business',
    readTime: '6 min',
  },
];

export function getPostBySlug(slug: string): MockBlogPost | undefined {
  return mockBlogPosts.find((post) => post.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return mockBlogPosts.map((post) => post.slug);
}
