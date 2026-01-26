export const offers = [
  {
    id: 'quick-wins',
    title: 'Quick Wins',
    subtitle: 'Automatisations Rapides',
    description: 'Automatisations légères qui s\'adaptent à vos outils existants (CRM, email, Excel, etc.)',
    benefits: [
      'Résultats rapides',
      'Réduction immédiate des tâches manuelles',
      'S\'intègre à votre stack actuel'
    ],
    cta: 'Voir les workflows',
    icon: 'zap',
    color: 'jodhpur-tan'
  },
  {
    id: 'systems-ia',
    title: 'Systèmes IA',
    subtitle: 'Infrastructure Complète',
    description: 'Construction complète : interface + base de données + agents IA',
    benefits: [
      'Système robuste 24/7',
      'Scalabilité garantie',
      'Usage métier dédié'
    ],
    cta: 'Découvrir les systèmes',
    icon: 'cpu',
    color: 'aster-blue'
  }
] as const;
