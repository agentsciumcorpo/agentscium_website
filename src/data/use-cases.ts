export const useCaseCategories = [
  {
    id: 'leads',
    title: 'Génération & Augmentation de Leads',
    icon: 'target',
    color: 'habanero',
    cases: [
      'Capture automatique de leads',
      'Qualification intelligente',
      'Enrichissement de données',
      'Suivi et relances automatiques',
      'Scoring prédictif'
    ]
  },
  {
    id: 'support',
    title: 'Support Client & Chatbots',
    icon: 'message-circle',
    color: 'aster-blue',
    cases: [
      'FAQ automatisée',
      'Base de connaissance intelligente',
      'Routage intelligent des demandes',
      'Réponses automatiques personnalisées',
      'Support multicanal 24/7'
    ]
  },
  {
    id: 'process',
    title: 'Automatisation de Process Internes',
    icon: 'settings',
    color: 'jodhpur-tan',
    cases: [
      'Génération automatique de devis',
      'Traitement et formatage Excel',
      'Reporting automatique',
      'Mise à jour multi-outils',
      'Gestion documentaire intelligente'
    ]
  }
] as const;
