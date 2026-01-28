// Donnees pour les workflows n8n gratuits

export type WorkflowCategory =
  | 'prospection'
  | 'support-client'
  | 'marketing'
  | 'productivite'
  | 'data'
  | 'integration';

export interface Workflow {
  slug: string;
  title: string;
  description: string;
  content: string;
  category: WorkflowCategory;
  categoryLabel: string;
  difficulty: 'debutant' | 'intermediaire' | 'avance';
  difficultyLabel: string;
  estimatedTime: string;
  tools: string[];
  publishedAt: string;
  downloadUrl?: string;
  previewImage?: string;
}

export const workflows: Workflow[] = [
  {
    slug: 'reddit-research',
    title: 'Automatiser la recherche sur Reddit avec n8n + IA',
    description: 'Scrape Reddit, filtre par IA, compare avec des exemples (RAG Supabase) et envoie les posts pertinents par email. Automatique, low-cost, sans intervention.',
    content: `
## Le probleme

Vous passez des heures a scroller Reddit pour trouver des opportunites commerciales, des leads ou des discussions pertinentes pour votre activite ? Les posts interessants sont noyes dans le bruit, et vous n'avez pas le temps de surveiller ca tous les jours.

**La solution** : un systeme automatique qui fait le tri pour vous. Low-cost, sans intervention manuelle, et qui tourne 24/7.

---

## Ce que fait ce workflow

Concretement, le workflow fait tout :

- Recupere les nouveaux posts d'un subreddit (sans API officielle Reddit)
- Filtre par fraicheur (ex: posts < 2h)
- Prefiltre IA "cheap" pour economiser des tokens
- Compare a des exemples etiquetes (RAG avec Supabase)
- Valide l'opportunite avec un LLM
- Envoie les posts valides par email (Gmail)

---

## Les outils necessaires

| Outil | Ce que ca fait | Prix |
|-------|----------------|------|
| **n8n** | Orchestration du workflow | Gratuit (self-hosted) ou cloud |
| **Reddit (JSON public)** | Source des posts | Gratuit |
| **OpenAI** | Prefiltre + decision finale | ~0.01$/execution |
| **Supabase** | Base vectorielle pour les exemples | Gratuit (tier free) |
| **Airtable** | Stockage des exemples etiquetes | Gratuit (tier free) |
| **Gmail** | Envoi des resultats | Gratuit |

---

## Importer le workflow dans n8n

1. Telechargez le fichier JSON ci-dessus
2. Ouvrez n8n (cloud ou self-hosted)
3. Cliquez sur **"..."** en haut a droite → **"Import from file"**
4. Selectionnez le fichier telecharge
5. Tous les nodes doivent apparaitre connectes

---

## Connecter les credentials

### OpenAI (2 nodes)
1. Cliquez sur le node **"OpenAI Chat Model"**
2. Dans "Credential", cliquez **"Create new"**
3. Entrez votre API key OpenAI

### Supabase (Vector Store)
1. Cliquez sur le node **"Comparaison avec exemple existant"**
2. Creez un nouveau credential Supabase
3. Entrez votre **Project URL** et **API Key**

### Gmail OAuth2
1. Cliquez sur le node **"Send a message"**
2. Creez un credential **Gmail OAuth2**
3. Modifiez l'adresse email destinataire

---

## Comprendre le workflow

### Bloc A - Scraping des posts

Le workflow utilise l'endpoint JSON public de Reddit :
\`https://www.reddit.com/r/personalfinance/new.json\`

Pourquoi ? L'API officielle Reddit est payante. L'endpoint .json est gratuit et suffisant.

### Bloc B - Filtre horaire

On garde uniquement les posts publies dans les **2 dernieres heures**. Moins de bruit, opportunites plus chaudes.

### Bloc C - Prefiltre IA

Objectif : eliminer les posts hors-sujet AVANT les etapes couteuses. GPT-4.1-mini coute ~10x moins cher que GPT-4. En eliminant 60-80% des posts ici, vous economisez sur l'etape suivante.

---

## Workflow complementaire : Alimenter la base RAG

Pour que le RAG fonctionne, il faut alimenter Supabase avec des exemples etiquetes (OUI/NON). Un second workflow s'en charge automatiquement.

**[Telecharger le workflow d'alimentation RAG](/workflows/alimentation-rag-reddit.json)**

### Comment ca marche

1. **Airtable** : Vous stockez vos exemples dans une table avec les colonnes :
   - \`Titre\` : Titre du post
   - \`Contenu\` : Corps du post
   - \`A repondre ?\` : "Oui" ou "Non"
   - \`Explication\` : Pourquoi c'est oui/non

2. **Schedule Trigger** : Le workflow se declenche automatiquement

3. **Synchronisation** : Pour chaque exemple modifie dans les 2 derniers jours :
   - Supprime l'ancienne version dans Supabase
   - Genere l'embedding avec OpenAI (text-embedding-3-large)
   - Insere le document dans Supabase Vector Store

### Credentials necessaires

- **Airtable** : Personal Access Token
- **OpenAI** : API Key (pour les embeddings)
- **Supabase** : Project URL + API Key

### Astuce

Commencez avec 10-20 exemples bien etiquetes. Plus vous ajoutez d'exemples varies, plus le RAG sera precis.

---

### Bloc D - RAG avec Supabase

On recupere des exemples similaires (etiquetes OUI/NON) pour "caler" la decision du LLM final :
1. Le post est converti en embedding
2. Supabase retourne les 50 exemples les plus similaires
3. On selectionne les 4 meilleurs (2 OUI + 2 NON)

### Bloc E - Decision finale

Le LLM recoit le post + les exemples et decide si c'est une opportunite. Si oui → email envoye avec le titre et le lien.

---

## Personnaliser le workflow

### Changer de subreddit
Dans le node **"Lecture_subreddit"**, modifiez l'URL :
\`https://www.reddit.com/r/VOTRE_SUBREDDIT/new.json\`

Exemples : /r/entrepreneur, /r/smallbusiness, /r/realestate

### Modifier la fenetre de temps
Dans **"Filtre horaire"**, changez \`{hours: 2}\` par la valeur souhaitee.

### Remplacer Gmail
Supprimez le node Gmail et connectez Slack, Notion, ou Google Sheets.

---

## Limites et bonnes pratiques

- **Rate limits Reddit** : Ajoutez un delai entre les executions (minimum 5 min)
- **Posts vides** : Certains posts n'ont pas de contenu, le workflow gere ce cas
- **Couts OpenAI** : ~$0.08/jour pour 100 posts, soit ~$2.50/mois

---

## Resultat

- **2-3h/jour** de veille economisees
- **Leads qualifies** automatiquement
- **~$3/mois** en couts API
    `,
    category: 'prospection',
    categoryLabel: 'Prospection',
    difficulty: 'intermediaire',
    difficultyLabel: 'Intermediaire',
    estimatedTime: '30 min',
    tools: ['n8n', 'OpenAI', 'Supabase', 'Airtable', 'Gmail'],
    publishedAt: '2026-01-26',
    downloadUrl: '/workflows/reddit-research.json',
  },
  {
    slug: 'exemple-workflow-email-automation',
    title: 'Automatisation des relances email',
    description: 'Un workflow n8n pour automatiser les relances email vers vos prospects qui n\'ont pas repondu.',
    content: `
## Description

Ce workflow permet d'automatiser les relances email pour vos prospects qui n'ont pas repondu a votre premier email.

## Comment ca marche

1. **Declencheur** : Le workflow se declenche tous les jours a 9h
2. **Lecture des prospects** : Recuperation des prospects sans reponse depuis Google Sheets
3. **Filtrage** : Selection des prospects a relancer (dernier contact > 3 jours)
4. **Envoi email** : Envoi d'un email de relance personnalise
5. **Mise a jour** : Mise a jour du statut dans Google Sheets

## Prerequis

- Compte n8n (cloud ou self-hosted)
- Compte Google avec acces Sheets
- Compte email (Gmail, SMTP, ou autre)

## Installation

1. Telechargez le fichier JSON du workflow
2. Dans n8n, allez dans "Workflows" > "Import from File"
3. Selectionnez le fichier telecharge
4. Configurez les credentials (Google Sheets, Email)
5. Activez le workflow

## Configuration

### Google Sheets
Votre feuille doit contenir les colonnes suivantes :
- \`email\` : L'adresse email du prospect
- \`prenom\` : Le prenom pour personnaliser l'email
- \`dernier_contact\` : Date du dernier contact
- \`statut\` : Statut actuel (nouveau, relance_1, relance_2, etc.)

### Template Email
Modifiez le noeud "Send Email" pour personnaliser votre message de relance.

## Personnalisation

Vous pouvez adapter ce workflow pour :
- Changer la frequence des relances
- Ajouter plus d'etapes de relance
- Integrer avec votre CRM
- Ajouter des conditions de filtrage
    `,
    category: 'prospection',
    categoryLabel: 'Prospection',
    difficulty: 'debutant',
    difficultyLabel: 'Debutant',
    estimatedTime: '15 min',
    tools: ['n8n', 'Google Sheets', 'Gmail'],
    publishedAt: '2026-01-20',
  },
];

export function getWorkflowBySlug(slug: string): Workflow | undefined {
  return workflows.find((w) => w.slug === slug);
}

export function getAllWorkflowSlugs(): string[] {
  return workflows.map((w) => w.slug);
}

export function getWorkflowsByCategory(category: WorkflowCategory): Workflow[] {
  return workflows.filter((w) => w.category === category);
}

export const categoryLabels: Record<WorkflowCategory, string> = {
  'prospection': 'Prospection',
  'support-client': 'Support Client',
  'marketing': 'Marketing',
  'productivite': 'Productivite',
  'data': 'Data & Analytics',
  'integration': 'Integrations',
};

export const difficultyColors: Record<string, string> = {
  'debutant': 'bg-emerald-100 text-emerald-700',
  'intermediaire': 'bg-amber-100 text-amber-700',
  'avance': 'bg-red-100 text-red-700',
};
