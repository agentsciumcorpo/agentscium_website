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
  // Exemple de workflow - a remplacer par tes vrais workflows
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
