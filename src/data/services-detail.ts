export interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceUseCase {
  title: string;
  description: string;
}

export interface ServiceDeliverable {
  item: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  features: ServiceFeature[];
  useCases: ServiceUseCase[];
  deliverables: ServiceDeliverable[];
  timeline: string;
  idealFor: string[];
}

// Quick Wins items for carousel
export const quickWinsItems = [
  {
    id: 'chatbot',
    title: 'Chatbot',
    description: 'Assistant intelligent disponible 24/7 pour conseiller vos clients et repondre a leurs questions.',
    features: [
      'Reponses instantanees',
      'Personnalisation selon votre metier',
      'Escalade vers humain si necessaire',
      'Integration site web / WhatsApp',
    ],
    demo: {
      type: 'chat',
      messages: [
        { role: 'bot', text: 'Bonjour ! Comment puis-je vous aider ?' },
        { role: 'user', text: 'Je cherche un produit pour nettoyer l\'inox' },
        { role: 'bot', text: 'Pour l\'inox, je recommande notre gamme Pro-Clean. Quelle surface devez-vous traiter ?' },
      ]
    }
  },
  {
    id: 'agent-ia',
    title: 'Agent IA',
    description: 'Un agent autonome qui execute des taches complexes : recherche, analyse, redaction, qualification.',
    features: [
      'Recherche et veille automatisee',
      'Redaction de contenus',
      'Analyse de documents',
      'Qualification de leads',
    ],
    demo: {
      type: 'agent',
      tasks: [
        { name: 'Analyse du marche', status: 'completed', result: '47 concurrents identifies' },
        { name: 'Redaction rapport', status: 'completed', result: '12 pages generees' },
        { name: 'Envoi email recap', status: 'active', result: 'En cours...' },
      ]
    }
  },
  {
    id: 'automatisation',
    title: 'Automatisation',
    description: 'Automatisation de vos process internes : devis, reporting, synchronisation, relances.',
    features: [
      'Generation automatique de devis',
      'Reporting hebdomadaire',
      'Synchronisation multi-outils',
      'Relances personnalisees',
    ],
    demo: {
      type: 'workflow',
      steps: [
        { name: 'Nouveau lead', icon: 'user' },
        { name: 'Enrichissement', icon: 'database' },
        { name: 'Score', icon: 'chart' },
        { name: 'CRM', icon: 'check' },
      ]
    }
  },
];

// Infrastructure IA steps
export const infrastructureSteps = [
  {
    id: 'automatisation',
    title: 'Automatisation',
    subtitle: 'Recuperation et traitement des donnees',
    description: 'On connecte vos sources de donnees et on automatise leur recuperation, transformation et stockage.',
    tool: 'n8n',
    toolLogo: '/images/n8n-logo.svg',
    features: [
      'Connexion a vos outils existants',
      'Transformation des donnees',
      'Declencheurs automatiques',
      'Monitoring en temps reel',
    ],
  },
  {
    id: 'database',
    title: 'Base de donnees',
    subtitle: 'Stockage structure et securise',
    description: 'Mise en place d\'une base de donnees complete, structuree selon votre metier et securisee.',
    tool: 'Supabase',
    toolLogo: '/images/supabase-logo.svg',
    features: [
      'Schema sur-mesure',
      'Securite et backups',
      'API temps reel',
      'Historique complet',
    ],
  },
  {
    id: 'interface',
    title: 'Interface',
    subtitle: 'Dashboard de pilotage',
    description: 'Une interface simple et efficace qui regroupe toutes les infos dont votre business a besoin.',
    tool: 'Dashboard',
    toolLogo: '/images/dashboard-logo.svg',
    features: [
      'Vue unifiee',
      'KPIs en temps reel',
      'Filtres et exports',
      'Acces multi-utilisateurs',
    ],
  },
];

// Accompagnement steps (zigzag navigation)
export const accompagnementSteps = [
  {
    id: 'diagnostic',
    title: 'Diagnostic',
    description: 'Analyse de l\'utilisation actuelle de l\'IA a toutes les strates de l\'entreprise. On identifie les opportunites et les freins.',
    icon: 'search',
    duration: '2 semaines',
  },
  {
    id: 'comite',
    title: 'Comite IA',
    description: 'Mise en place d\'un comite IA interne dont le but sera de suivre la maturation de l\'IA au coeur de l\'entreprise.',
    icon: 'users',
    duration: '1 semaine',
  },
  {
    id: 'formation',
    title: 'Formations',
    description: 'Sessions de formation sur les outils IA et sur les bonnes pratiques a mettre en oeuvre au quotidien.',
    icon: 'book',
    duration: '3 semaines',
  },
  {
    id: 'process',
    title: 'Nouveaux Process',
    description: 'Mise en place des automatisations et infrastructures IA adaptees aux besoins identifies.',
    icon: 'cog',
    duration: '4 semaines',
  },
  {
    id: 'retour',
    title: 'Bilan',
    description: 'Retour sur les consequences de l\'integration de ces outils. Mesure des gains et ajustements.',
    icon: 'chart',
    duration: '1 semaine',
  },
  {
    id: 'roadmap',
    title: 'Roadmap',
    description: 'Creation d\'une feuille de route pour l\'annee a venir avec les prochaines etapes d\'evolution.',
    icon: 'map',
    duration: '1 semaine',
  },
];

export const servicesDetail: Record<string, ServiceDetail> = {
  "quick-wins": {
    slug: "quick-wins",
    title: "Quick Wins",
    subtitle: "Automatisations Rapides",
    description:
      "Automatisations legeres qui s'adaptent a vos outils existants pour des resultats immediats.",
    longDescription:
      "Les Quick Wins sont des automatisations ciblees qui s'integrent directement a votre stack actuel. Chatbot, Agent IA, ou Automatisation de process : choisissez la solution qui repond a votre besoin immediat.",
    features: [
      {
        icon: "zap",
        title: "Resultats rapides",
        description:
          "Deploiement en 2 a 4 semaines avec des benefices mesurables des le premier mois.",
      },
      {
        icon: "puzzle",
        title: "Integration transparente",
        description:
          "S'adapte a vos outils existants sans necessiter de changement dans vos habitudes.",
      },
      {
        icon: "trending-up",
        title: "ROI immediat",
        description:
          "Reduction immediate des taches manuelles et des erreurs de saisie.",
      },
      {
        icon: "shield",
        title: "Risque minimal",
        description:
          "Automatisations modulaires et reversibles, sans impact sur vos systemes critiques.",
      },
    ],
    useCases: [],
    deliverables: [
      { item: "Solution deployee et fonctionnelle" },
      { item: "Integration a vos outils existants" },
      { item: "Formation de votre equipe" },
      { item: "Support 30 jours post-deploiement" },
    ],
    timeline: "2 a 4 semaines",
    idealFor: [
      "PME avec des taches repetitives",
      "Equipes commerciales debordees",
      "Services administratifs",
      "Agences avec processus manuels",
    ],
  },
  "infrastructure-ia": {
    slug: "infrastructure-ia",
    title: "Infrastructure IA",
    subtitle: "Systeme Complet",
    description:
      "Construction complete d'une infrastructure IA sur-mesure : automatisation + base de donnees + interface.",
    longDescription:
      "On construit pour vous une infrastructure complete : automatisation de vos process, base de donnees structuree, et interface de pilotage. Tout ce dont votre business a besoin pour passer a l'echelle.",
    features: [
      {
        icon: "server",
        title: "Disponibilite 24/7",
        description:
          "Vos systemes IA travaillent sans interruption, meme quand vos equipes dorment.",
      },
      {
        icon: "scale",
        title: "Scalabilite garantie",
        description:
          "Architecture concue pour evoluer avec votre entreprise sans friction.",
      },
      {
        icon: "target",
        title: "100% sur-mesure",
        description:
          "Chaque systeme est concu specifiquement pour votre metier et vos processus.",
      },
      {
        icon: "brain",
        title: "Intelligence adaptive",
        description:
          "Les agents IA apprennent et s'ameliorent continuellement grace a vos donnees.",
      },
    ],
    useCases: [],
    deliverables: [
      { item: "Workflows automatises (n8n)" },
      { item: "Base de donnees complete (Supabase)" },
      { item: "Interface de pilotage sur-mesure" },
      { item: "Dashboard de monitoring" },
      { item: "Documentation technique" },
      { item: "Formation approfondie" },
      { item: "Support et maintenance 3 mois" },
    ],
    timeline: "6 a 12 semaines",
    idealFor: [
      "PME en croissance",
      "Entreprises avec processus complexes",
      "Societes a fort volume de donnees",
      "Organisations cherchant un avantage competitif",
    ],
  },
  "accompagnement": {
    slug: "accompagnement",
    title: "Accompagnement",
    subtitle: "Programme 3 mois",
    description:
      "Accompagnement integral a la mise en place de l'IA dans votre entreprise.",
    longDescription:
      "Un programme complet de 3 mois qui permet a votre entreprise une transition agreable vers l'IA. Du diagnostic initial a la roadmap annuelle, on vous accompagne a chaque etape.",
    features: [
      {
        icon: "compass",
        title: "Vision strategique",
        description:
          "On definit ensemble la place de l'IA dans votre organisation.",
      },
      {
        icon: "users",
        title: "Equipes formees",
        description:
          "Vos collaborateurs montent en competence et adoptent les bons reflexes.",
      },
      {
        icon: "shield",
        title: "Gouvernance IA",
        description:
          "Mise en place des bonnes pratiques et respect des normes.",
      },
      {
        icon: "trending-up",
        title: "ROI mesurable",
        description:
          "Suivi des indicateurs et optimisation continue.",
      },
    ],
    useCases: [],
    deliverables: [
      { item: "Diagnostic complet de l'existant" },
      { item: "Comite IA operationnel" },
      { item: "Sessions de formation" },
      { item: "Process automatises" },
      { item: "Bilan d'impact" },
      { item: "Roadmap annuelle" },
    ],
    timeline: "3 mois",
    idealFor: [
      "ETI et grandes PME",
      "Entreprises en transformation",
      "Organisations avec plusieurs services",
      "Dirigeants voulant structurer l'IA",
    ],
  },
};

export const servicesOverview = [
  {
    slug: "quick-wins",
    title: "Quick Wins",
    subtitle: "Automatisations Rapides",
    description:
      "Chatbot, Agent IA, Automatisation de process. Resultats en 2-4 semaines.",
    benefits: [
      "Resultats rapides",
      "Reduction immediate des taches manuelles",
      "S'integre a votre stack actuel",
    ],
    cta: "Decouvrir",
    color: "#F98513",
  },
  {
    slug: "infrastructure-ia",
    title: "Infrastructure IA",
    subtitle: "Systeme Complet",
    description:
      "Automatisation + Base de donnees + Interface de pilotage.",
    benefits: [
      "Systeme robuste 24/7",
      "Scalabilite garantie",
      "Usage metier dedie",
    ],
    cta: "Decouvrir",
    color: "#9BACD8",
  },
  {
    slug: "accompagnement",
    title: "Accompagnement",
    subtitle: "Programme 3 mois",
    description:
      "Transition complete vers l'IA : diagnostic, formation, process, roadmap.",
    benefits: [
      "Vision strategique",
      "Equipes formees",
      "Gouvernance IA",
    ],
    cta: "Decouvrir",
    color: "#9AD1C8",
  },
];
