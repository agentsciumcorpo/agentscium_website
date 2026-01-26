export type Sector = 'industrie' | 'services' | 'packaging' | 'froid' | 'marketing';

export interface CaseStudyResult {
  metric: string;
  value: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  location: string;
  sector: Sector;
  sectorLabel: string;
  tagline: string;
  challenge: string;
  solution: string;
  solutionHighlights: string[];
  results: CaseStudyResult[];
  testimonial?: Testimonial;
  serviceType: 'quick-wins' | 'infrastructure-ia';
  designStyle: 'dashboard' | 'chat' | 'workflow' | 'timeline' | 'metrics' | 'terminal' | 'seo-dashboard' | 'creative-automation' | 'prospecting';
  color: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'menuiserie-kermene',
    title: 'Infrastructure complete pour une menuiserie',
    client: 'Menuiserie Kermene',
    location: 'Quimper, Bretagne',
    sector: 'industrie',
    sectorLabel: 'Menuiserie',
    tagline: 'Toutes les donnees au meme endroit, des devis en 2 clics',
    challenge: 'Une menuiserie familiale qui perdait un temps fou a jongler entre les fichiers clients, les chiffres de production et la paperasse administrative.',
    solution: 'On a mis en place une infrastructure complete : suivi des clients, chiffres de production en temps reel, mailing automatise pour recuperer les anciens clients, et generation de devis + traitement des factures en automatique.',
    solutionHighlights: [
      'Tableau de bord centralise avec toutes les donnees clients',
      'Suivi de production en temps reel',
      'Campagnes email automatisees pour reactiver les clients',
      'Devis generes en 2 clics, factures traitees automatiquement',
    ],
    results: [
      { metric: 'Temps administratif', value: '-70%', description: 'Moins de paperasse, plus de production' },
      { metric: 'Devis envoyes', value: 'x3', description: 'Reponse aux clients beaucoup plus rapide' },
      { metric: 'Clients reactives', value: '+45', description: 'Grace aux campagnes email automatisees' },
    ],
    testimonial: {
      quote: 'On a enfin une vision claire de notre activite. Les devis partent en 5 minutes au lieu de 2 heures.',
      author: 'Yann Kermene',
      role: 'Gerant',
    },
    serviceType: 'infrastructure-ia',
    designStyle: 'dashboard',
    color: '#F98513',
  },
  {
    slug: 'nettoyage-du-poher',
    title: 'Chatbot + Agent de prospection IA',
    client: 'Societe de Nettoyage du Poher',
    location: 'Carhaix, Bretagne',
    sector: 'services',
    sectorLabel: 'Nettoyage',
    tagline: '+30% de CA le premier mois',
    challenge: 'Une entreprise de nettoyage qui passait a cote de nombreux clients potentiels faute de temps pour prospecter et repondre rapidement aux demandes.',
    solution: 'On a deploye un chatbot qui repond instantanement aux demandes clients, et un agent IA qui prospecte automatiquement toutes les entreprises du secteur pour proposer les services de nettoyage.',
    solutionHighlights: [
      'Chatbot disponible 24/7 pour qualifier les demandes',
      'Agent IA qui identifie et contacte les entreprises locales',
      'Suivi automatique des prospects interesses',
      'Relances personnalisees selon le type d\'entreprise',
    ],
    results: [
      { metric: 'Chiffre d\'affaires', value: '+30%', description: 'Des le premier mois' },
      { metric: 'Prospects contactes', value: '200+', description: 'Entreprises identifiees et contactees' },
      { metric: 'Temps de reponse', value: '< 1min', description: 'Reponse instantanee aux demandes' },
    ],
    testimonial: {
      quote: 'On a fait +30% de chiffre le premier mois. L\'agent IA nous trouve des clients qu\'on n\'aurait jamais eu le temps de contacter.',
      author: 'Jeremy',
      role: 'Gerant',
    },
    serviceType: 'quick-wins',
    designStyle: 'chat',
    color: '#9BACD8',
  },
  {
    slug: 'armortech-metal',
    title: 'Gestion complete des affaires et qualite',
    client: 'ArmorTech Metal',
    location: 'Rennes, Bretagne',
    sector: 'industrie',
    sectorLabel: 'Metallurgie',
    tagline: 'De la demande client au suivi qualite, tout est automatise',
    challenge: 'Une PME de metallurgie noyee dans les mails avec plans PDF, la ressaisie manuelle partout (devis, ordres de fab, achats, planning), et un suivi qualite disperse entre Excel, mails et papier.',
    solution: 'On a construit une infrastructure complete : capture auto des demandes, classement des plans, creation de fiches affaires, base de donnees complete pour la tracabilite, et un dashboard pour piloter l\'atelier et la qualite.',
    solutionHighlights: [
      'Capture automatique des mails et pieces jointes',
      'Dossier projet cree automatiquement avec naming propre',
      'Tracabilite complete : qui a valide quoi, quand, quelle version',
      'Dashboard charge atelier + vue qualite + alertes derives',
    ],
    results: [
      { metric: 'Temps devis', value: '-60%', description: 'Devis envoyes bien plus vite' },
      { metric: 'Erreurs version', value: '0', description: 'Plus de confusion sur les plans' },
      { metric: 'Visibilite', value: '100%', description: 'Sur la production et la qualite' },
    ],
    testimonial: {
      quote: 'On sait exactement ou en est chaque affaire. Les erreurs de version, c\'est fini.',
      author: 'Marc Le Goff',
      role: 'Directeur de production',
    },
    serviceType: 'infrastructure-ia',
    designStyle: 'workflow',
    color: '#9AD1C8',
  },
  {
    slug: 'celtik-pack',
    title: 'Agent IA Controle BAT automatise',
    client: 'Celtik Pack',
    location: 'Lorient, Bretagne',
    sector: 'packaging',
    sectorLabel: 'Packaging',
    tagline: 'BAT valides 2x plus vite, zero erreur oubliee',
    challenge: 'Le goulot d\'etranglement : la validation des BAT. Trop de temps perdu a verifier les mentions legales, codes EAN, formats... Et les relances qui font exploser les delais.',
    solution: 'On a deploye un agent IA qui analyse chaque BAT automatiquement (mentions obligatoires, coherence, format, EAN) et un systeme de relances automatiques avec gestion des versions.',
    solutionHighlights: [
      'Upload du BAT → verification complete en 30 secondes',
      'Rapport clair : OK / Risque / Bloquant avec annotations',
      'Relances automatiques J+2 et J+5 si pas de reponse',
      'Archivage et renommage automatique des versions',
    ],
    results: [
      { metric: 'Temps validation', value: '-50%', description: 'BAT valides 2x plus vite' },
      { metric: 'Erreurs detectees', value: '+40%', description: 'Plus rien ne passe entre les mailles' },
      { metric: 'Allers-retours', value: '-60%', description: 'Moins de corrections a faire' },
    ],
    testimonial: {
      quote: 'L\'agent detecte des erreurs qu\'on aurait rate. Et les relances automatiques, ca nous change la vie.',
      author: 'Nolwenn Riou',
      role: 'Responsable PAO',
    },
    serviceType: 'quick-wins',
    designStyle: 'terminal',
    color: '#F98513',
  },
  {
    slug: 'montreal-micromeca',
    title: 'Tracabilite qualite et alertes derives',
    client: 'Montreal MicroMeca',
    location: 'Montreal, Canada',
    sector: 'industrie',
    sectorLabel: 'Usinage precision',
    tagline: 'Anticiper les rebuts avant qu\'ils n\'arrivent',
    challenge: 'Beaucoup de petites series, un planning qui bouge tout le temps, des rapports qualite eparpilles partout, et des derives d\'outil/machine detectees trop tard = rebuts.',
    solution: 'Import automatique des rapports qualite, creation de dossiers lot complets, alertes quand une cote approche la limite de tolerance, et dashboard pour piloter qualite et atelier.',
    solutionHighlights: [
      'Import quotidien auto des rapports qualite',
      'Alertes quand cote proche limite tolerance',
      'Alertes si rebut 2x sur meme operation',
      'Historique par piece avec courbes de derive',
    ],
    results: [
      { metric: 'Rebuts', value: '-35%', description: 'Grace aux alertes predictives' },
      { metric: 'Temps audit', value: '-80%', description: 'Tout est trace et accessible' },
      { metric: 'Decisions', value: 'Instantanees', description: 'Dashboard temps reel' },
    ],
    testimonial: {
      quote: 'On voit les derives arriver avant les rebuts. Ca nous a fait economiser des milliers de dollars.',
      author: 'Jean-Francois Tremblay',
      role: 'Responsable qualite',
    },
    serviceType: 'infrastructure-ia',
    designStyle: 'metrics',
    color: '#9BACD8',
  },
  {
    slug: 'nordfroid-systems',
    title: 'Chatbot SAV et automatisation tickets',
    client: 'NordFroid Systems',
    location: 'Montreal, Canada',
    sector: 'froid',
    sectorLabel: 'Froid industriel',
    tagline: 'Techniciens plus efficaces, clients plus satisfaits',
    challenge: 'Des tonnes de tickets SAV (mail/appels) tries a la main, des techniciens qui perdent du temps a chercher les procedures et codes defaut, des pieces commandees trop tard.',
    solution: 'Chatbot pour les techniciens terrain (recherche instantanee codes defaut, procedures), et automatisation complete : mail entrant → ticket cree → priorite suggeree → technicien assigne → pieces pre-listees.',
    solutionHighlights: [
      'Chatbot "code defaut X" → causes + check rapide + pieces',
      'Mode terrain sur mobile : reponses courtes, etapes numerotees',
      'Ticket cree auto avec categorie, urgence, priorisation SLA',
      'Compte-rendu standardise qui remplit le CRM',
    ],
    results: [
      { metric: 'Temps triage', value: '-70%', description: 'Tickets traites beaucoup plus vite' },
      { metric: 'Satisfaction client', value: '+25%', description: 'Interventions plus rapides' },
      { metric: 'Oublis pieces', value: '-90%', description: 'Pre-liste automatique' },
    ],
    testimonial: {
      quote: 'Nos techniciens ont la reponse en 10 secondes au lieu de fouiller dans les manuels.',
      author: 'Stephane Bouchard',
      role: 'Directeur SAV',
    },
    serviceType: 'quick-wins',
    designStyle: 'chat',
    color: '#9AD1C8',
  },
  {
    slug: 'triskel-growth',
    title: 'Dashboard SEO & Trafic client-ready',
    client: 'Triskel Growth',
    location: 'Rennes, Bretagne',
    sector: 'marketing',
    sectorLabel: 'SEO & Content',
    tagline: 'Une seule source de verite pour tous les clients',
    challenge: 'L\'agence perdait du temps a justifier sa valeur. Rapports PDF differents selon les consultants, chiffres provenant de multiples sources (GA4, Search Console, Ahrefs), incohérences en reunion. Resultat : beaucoup de reunions "defensives", moins de temps pour produire.',
    solution: 'Une app dashboard par client comme source unique de verite. Pipeline consolidant trafic, leads, positions, backlinks, opportunites quick wins. Vues ultra actionnables et export rapport en 1 clic.',
    solutionHighlights: [
      'Dashboard par client : une seule source de verite',
      'Consolidation auto : GA4, Search Console, Ahrefs/SEMrush',
      'Vues "Ce qui progresse / ce qui chute" + priorites auto-generees',
      'Export rapport brande en 1 clic',
    ],
    results: [
      { metric: 'Temps reporting', value: '-75%', description: 'Plus de temps pour produire' },
      { metric: 'Reunions', value: 'Orientees decision', description: 'Fini les debats sur les chiffres' },
      { metric: 'Upsell', value: '+40%', description: 'ROI visible = clients convaincus' },
    ],
    testimonial: {
      quote: 'Nos clients voient enfin clairement le ROI. Les reunions sont devenues productives au lieu de defensives.',
      author: 'Morgane Le Bras',
      role: 'Directrice',
    },
    serviceType: 'infrastructure-ia',
    designStyle: 'seo-dashboard',
    color: '#6366F1',
  },
  {
    slug: 'atelier-northstar',
    title: 'Automatisation des declinaisons creatives',
    client: 'Atelier NorthStar',
    location: 'Montreal, Canada',
    sector: 'marketing',
    sectorLabel: 'Crea & Social Ads',
    tagline: 'Les designers creent, l\'IA decline',
    challenge: 'Un vrai talent creatif etouffe par la production repetitive. Les marques demandent 20 declinaisons (formats, langues, promos). Les designers passaient leurs journees a "adapter" au lieu de creer. Le goulot n\'etait pas l\'idee : c\'etait l\'execution industrielle.',
    solution: 'Workflow automatise : fiche produit en entree, regles de formats/variantes/langues, lots de visuels nommes correctement en sortie. Templates intelligents avec guidelines de marque + zones variables.',
    solutionHighlights: [
      'Workflow : fiche produit → lots de visuels prets a publier',
      'Templates intelligents respectant les guidelines de marque',
      'Generation auto des variantes formats/langues/promos',
      'Tableau de bord : statut des lots, validation, historique',
    ],
    results: [
      { metric: 'Temps declinaisons', value: '-80%', description: 'Production quasi instantanee' },
      { metric: 'Designers', value: 'Liberes', description: 'Retour sur les taches a forte valeur' },
      { metric: 'Satisfaction client', value: '+50%', description: 'Plus vite, plus propre, plus coherent' },
    ],
    testimonial: {
      quote: 'Nos designers font enfin ce pour quoi on les a embauches : creer. L\'IA s\'occupe du reste.',
      author: 'Alex Tremblay',
      role: 'Directeur Creatif',
    },
    serviceType: 'infrastructure-ia',
    designStyle: 'creative-automation',
    color: '#EC4899',
  },
  {
    slug: 'immopulse-media',
    title: 'Prospection automatisee conforme',
    client: 'ImmoPulse Media',
    location: 'Montreal, Canada',
    sector: 'marketing',
    sectorLabel: 'Acquisition Immobilier',
    tagline: 'Un pipeline de leads previsible et regulier',
    challenge: 'L\'agence dependait trop du reseau et des "coups" commerciaux. Prospection a la main, irreguliere, impossible a scaler. CRM pas a jour, pas de visibilite sur le pipeline. Les commerciaux cherchaient des leads au lieu de closer.',
    solution: 'Systeme outbound structure base sur sources autorisees (Apollo, listes internes, inbound, opt-in). Qualification, enrichissement, deduplication, scoring. Sequences multi-canal et routage vers le bon commercial.',
    solutionHighlights: [
      'Sources conformes : Apollo, inbound, annuaires opt-in',
      'Qualification auto : taille, secteur, signaux business',
      'Sequences email + LinkedIn (sans automatisation agressive)',
      'Dashboard : volume, taux reponse, RDV, conversion par industrie',
    ],
    results: [
      { metric: 'Pipeline', value: 'Stable', description: 'Flux regulier semaine apres semaine' },
      { metric: 'Temps commercial', value: '+60%', description: 'Focus sur la vente, pas la chasse' },
      { metric: 'Taux conversion', value: '+35%', description: 'Meilleur ciblage et personnalisation' },
    ],
    testimonial: {
      quote: 'On sait exactement combien de RDV on aura cette semaine. Fini le stress des coups commerciaux.',
      author: 'Vincent Dubois',
      role: 'Directeur Commercial',
    },
    serviceType: 'infrastructure-ia',
    designStyle: 'prospecting',
    color: '#14B8A6',
  },
];

// Social proof logos (entreprises fictives)
export const clientLogos = [
  'Menuiserie Kermene',
  'Nettoyage du Poher',
  'ArmorTech Metal',
  'Celtik Pack',
  'Montreal MicroMeca',
  'NordFroid Systems',
  'Triskel Growth',
  'Atelier NorthStar',
  'ImmoPulse Media',
  'Bretagne Usinage',
  'Atlantic Precision',
  'Ouest Mecanique',
  'Quebec Industries',
  'Finistere Tech',
  'Armor Industrie',
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getCaseStudiesBySector(sector: Sector): CaseStudy[] {
  return caseStudies.filter((cs) => cs.sector === sector);
}
