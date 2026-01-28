// Design System Colors
export const colors = {
  lusterWhite: '#F4F1EC',
  asterBlue: '#9BACD8',
  habanero: '#F98513',
  jodhpurTan: '#9AD1C8',
  deepSpace: '#223382',
  deadlyDepths: '#111144',
} as const;

// Navigation Links
export const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  // { href: '/clients', label: 'Clients' }, // Temporairement masqué
  { href: '/workflows', label: 'Workflows' },
  // { href: '/blog', label: 'Blog' }, // Temporairement masqué
  { href: '/contact', label: 'Contact' },
] as const;

// Footer Links
export const footerLinks = {
  services: [
    { href: '/services/quick-wins', label: 'Quick Wins' },
    { href: '/services/systemes-ia', label: 'Systemes IA' },
  ],
  company: [
    // { href: '/clients', label: 'Etudes de cas' }, // Temporairement masqué
    { href: '/workflows', label: 'Workflows n8n' },
    // { href: '/blog', label: 'Blog' }, // Temporairement masqué
    { href: '/contact', label: 'Contact' },
  ],
  legal: [
    { href: '/mentions-legales', label: 'Mentions legales' },
    { href: '/politique-confidentialite', label: 'Confidentialite' },
  ],
} as const;

// Site metadata
export const siteConfig = {
  name: 'Agentscium',
  description: 'Agence d\'automatisation IA qui construit des systèmes sur-mesure pour PME industrielles, BTP et agences.',
  url: 'https://agentscium.com',
} as const;
