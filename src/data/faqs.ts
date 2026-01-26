export interface FAQ {
  question: string;
  answer: string;
}

export const serviceFAQs: FAQ[] = [
  {
    question: "Qu'est-ce que l'automatisation IA pour les PME ?",
    answer:
      "L'automatisation IA pour les PME consiste a utiliser l'intelligence artificielle pour automatiser les taches repetitives et chronophages. Chez Agentscium, nous creons des systemes sur-mesure qui s'integrent a vos outils existants (CRM, Excel, emails) pour gagner du temps et augmenter votre productivite. Contrairement aux solutions generiques, nos automatisations sont adaptees a votre metier et vos processus specifiques.",
  },
  {
    question: "Combien coute une automatisation IA ?",
    answer:
      "Le cout varie selon la complexite du projet. Nos Quick Wins (automatisations legeres) sont accessibles aux PME avec un budget maitrise, tandis que les infrastructures IA completes sont tarifees sur devis selon vos besoins specifiques. L'investissement est generalement rentabilise en 2 mois grace aux economies de temps realisees. Nous proposons un diagnostic gratuit pour evaluer votre projet.",
  },
  {
    question: "Combien de temps pour mettre en place une automatisation ?",
    answer:
      "Les Quick Wins peuvent etre deployes en 2 a 4 semaines. Les systemes IA complets necessitent generalement 6 a 12 semaines selon la complexite. Notre processus inclut 5 etapes : diagnostic de vos besoins, conception de la solution, developpement et integration, deploiement avec formation, et monitoring continu.",
  },
  {
    question: "Quels outils pouvez-vous automatiser ?",
    answer:
      "Nous travaillons avec la plupart des outils professionnels : CRM (Salesforce, HubSpot, Pipedrive), tableurs (Excel, Google Sheets), emails (Gmail, Outlook), outils de gestion (Notion, Trello, Asana), et bien d'autres. Si votre outil dispose d'une API ou accepte les integrations, nous pouvons l'automatiser.",
  },
  {
    question: "Mes donnees sont-elles securisees ?",
    answer:
      "La securite de vos donnees est notre priorite. Nous utilisons des protocoles de chiffrement standards, des infrastructures cloud securisees, et nous ne stockons que les donnees strictement necessaires au fonctionnement des automatisations. Nous pouvons egalement deployer des solutions on-premise si votre politique de securite l'exige.",
  },
  {
    question: "Que se passe-t-il si l'automatisation ne fonctionne pas ?",
    answer:
      "Chaque projet inclut une periode de support post-deploiement (30 jours pour les Quick Wins, 3 mois pour les Systemes IA). Durant cette periode, nous corrigeons tout dysfonctionnement sans frais supplementaires. Nous mettons egalement en place des systemes de monitoring pour detecter et resoudre les problemes proactivement.",
  },
  {
    question: "Avez-vous besoin d'un acces a nos systemes ?",
    answer:
      "Oui, pour integrer nos automatisations, nous avons besoin d'acces securises a vos outils concernes. Nous utilisons des methodes d'authentification standards (OAuth, cles API) et pouvons signer des accords de confidentialite. Les acces sont limites au strict necessaire et revocables a tout moment.",
  },
  {
    question: "Pouvez-vous former nos equipes ?",
    answer:
      "Absolument. Chaque projet inclut une formation complete de vos equipes pour qu'elles puissent utiliser et maintenir les automatisations de maniere autonome. Nous fournissons egalement une documentation detaillee et restons disponibles pour des sessions de formation complementaires si necessaire.",
  },
];

export const contactFAQs: FAQ[] = [
  {
    question: "Comment se deroule le premier contact ?",
    answer:
      "Lors de notre premier echange, nous discutons de vos besoins, de vos processus actuels et des opportunites d'automatisation. Cet appel de decouverte de 30 minutes est gratuit et sans engagement. A l'issue, nous vous proposons un diagnostic personnalise.",
  },
  {
    question: "Proposez-vous un diagnostic gratuit ?",
    answer:
      "Oui, nous offrons un diagnostic gratuit pour evaluer vos besoins et identifier les meilleures opportunites d'automatisation. Ce diagnostic inclut une analyse de vos processus actuels et une estimation du ROI potentiel.",
  },
  {
    question: "Travaillez-vous avec des entreprises hors de France ?",
    answer:
      "Nous travaillons principalement avec des entreprises francophones en France, Belgique, Suisse et Canada. Nos echanges se font en francais et nous pouvons nous adapter a differents fuseaux horaires.",
  },
  {
    question: "Quel est le delai pour obtenir un devis ?",
    answer:
      "Apres notre premier echange, nous vous envoyons une proposition detaillee sous 48 a 72 heures. Cette proposition inclut le scope du projet, les livrables, le planning et le budget.",
  },
];

export const quickWinsFAQs: FAQ[] = [
  {
    question: "Qu'est-ce qu'un Quick Win exactement ?",
    answer:
      "Un Quick Win est une automatisation ciblee qui resout un probleme specifique sans bouleverser vos processus existants. C'est une solution rapide a deployer (2-4 semaines) qui s'integre a vos outils actuels pour automatiser une tache repetitive et chronophage.",
  },
  {
    question: "Quels types de taches peuvent etre automatisees en Quick Win ?",
    answer:
      "Les Quick Wins sont ideaux pour : la synchronisation de donnees entre outils, les relances email automatisees, le traitement de fichiers Excel recurrents, la generation de rapports automatiques, la capture et enrichissement de leads, et les notifications intelligentes.",
  },
  {
    question: "Mon Quick Win peut-il evoluer vers un Systeme IA complet ?",
    answer:
      "Absolument. Les Quick Wins sont souvent la premiere etape vers une automatisation plus complete. Une fois que vous avez valide les benefices sur un premier cas d'usage, nous pouvons etendre la solution ou construire un Systeme IA plus complet.",
  },
];

export const systemesIAFAQs: FAQ[] = [
  {
    question: "Quelle est la difference entre un Quick Win et un Systeme IA ?",
    answer:
      "Un Quick Win est une automatisation ciblee qui s'integre a vos outils existants. Un Systeme IA est une infrastructure complete construite sur-mesure, incluant interface utilisateur, base de donnees et agents IA intelligents. Le Systeme IA est plus puissant et evolutif, mais necessite un investissement plus important.",
  },
  {
    question: "Les agents IA sont-ils capables d'apprendre ?",
    answer:
      "Oui, nos agents IA utilisent des techniques d'apprentissage automatique qui leur permettent de s'ameliorer continuellement. Plus ils traitent de donnees, plus ils deviennent precis et efficaces. Nous mettons en place des mecanismes de feedback pour affiner leurs performances.",
  },
  {
    question: "Puis-je personnaliser l'interface utilisateur ?",
    answer:
      "Absolument. L'interface est developpee sur-mesure selon votre charte graphique et vos besoins ergonomiques. Nous travaillons en etroite collaboration avec vos equipes pour creer une experience utilisateur optimale.",
  },
  {
    question: "Comment est assuree la maintenance du systeme ?",
    answer:
      "Chaque Systeme IA inclut 3 mois de support et maintenance. Nous assurons les mises a jour de securite, la correction de bugs, et les ajustements mineurs. Au-dela, nous proposons des contrats de maintenance adaptes a vos besoins.",
  },
];
