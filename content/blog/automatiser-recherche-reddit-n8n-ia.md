---
title: "Automatiser la recherche sur Reddit avec n8n + IA (filtrage, scoring, email)"
excerpt: "Fini de scroller Reddit pendant des heures. Ce workflow n8n scrape, filtre par IA, compare avec des exemples (RAG) et vous envoie les posts pertinents par email. Automatique, low-cost, sans intervention."
slug: "automatiser-recherche-reddit-n8n-ia"
author:
  name: "Equipe Agentscium"
  role: "Experts en automatisation IA"
publishedAt: "2026-01-26"
category: "Tutoriel"
readTime: "12 min"
seo:
  metaTitle: "Automatiser la recherche Reddit avec n8n et IA | Agentscium"
  metaDescription: "Tutoriel complet : scraper Reddit sans API, filtrer par IA, comparer avec RAG Supabase et recevoir les posts pertinents par email. Workflow n8n gratuit."
  keywords: ["n8n", "reddit", "scraping", "automatisation", "IA", "RAG", "Supabase", "OpenAI", "workflow"]
draft: false
---

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

---

## Pas le temps de tout lire ?

- [Telecharger le workflow n8n (.json)](/workflows/reddit-research.json)
- Importez-le dans n8n et configurez vos credentials
- (Optionnel) Creez votre base Supabase d'exemples

---

## Les outils dont vous avez besoin

| Outil | Ce que ca fait | Prix | Preparation |
|-------|----------------|------|-------------|
| **n8n** | Orchestration du workflow | Gratuit (self-hosted) ou cloud | Creer un compte sur n8n.io |
| **Reddit (JSON public)** | Source des posts | Gratuit | Aucune - endpoint public |
| **OpenAI** | Prefiltre + decision finale | ~0.01$/execution | Creer une API key |
| **Supabase** | Base vectorielle pour les exemples | Gratuit (tier free) | Creer un projet + table pgvector |
| **Gmail** | Envoi des resultats | Gratuit | Configurer OAuth2 |

---

## Etape 1 : Importer le workflow dans n8n

1. [Telechargez le fichier JSON](/workflows/reddit-research.json)
2. Ouvrez n8n (cloud ou self-hosted)
3. Cliquez sur **"..."** en haut a droite → **"Import from file"**
4. Selectionnez le fichier `reddit-research.json`
5. Tous les nodes doivent apparaitre connectes

**Resultat attendu** : Vous voyez un workflow avec ~15 nodes, du trigger jusqu'a l'envoi Gmail.

---

## Etape 2 : Connecter les credentials

### OpenAI (2 nodes)

1. Cliquez sur le node **"OpenAI Chat Model"**
2. Dans "Credential", cliquez **"Create new"**
3. Entrez votre API key OpenAI
4. Sauvegardez - le meme credential sera utilise pour les 2 nodes OpenAI

### Supabase (Vector Store)

1. Cliquez sur le node **"Comparaison avec exemple existant"**
2. Creez un nouveau credential Supabase
3. Entrez votre **Project URL** et **API Key** (depuis les settings Supabase)

### Gmail OAuth2

1. Cliquez sur le node **"Send a message"**
2. Creez un credential **Gmail OAuth2**
3. Suivez le flow d'autorisation Google
4. Modifiez l'adresse email destinataire dans les parametres du node

---

## Etape 3 : Comprendre le workflow (bloc par bloc)

### Bloc A - Scraping des posts du subreddit

**Nodes** : Manual Trigger → HTTP Request → Code (Recuperation des posts)

Le workflow utilise l'endpoint JSON public de Reddit :

```
https://www.reddit.com/r/personalfinance/new.json
```

Pourquoi cette methode ?
- L'API officielle Reddit est payante ou limitee
- L'endpoint `.json` est gratuit et suffisant
- Un User-Agent custom evite les blocages

Le node Code extrait pour chaque post :
- `titre` : titre du post
- `contenu` : corps du message (selftext)
- `auteur` : username
- `date` : timestamp converti en ISO
- `lien` : URL complete du post
- `id` : identifiant unique

**Personnalisation** : Changez `/r/personalfinance/` par n'importe quel subreddit.

---

### Bloc B - Filtre horaire (fraicheur)

**Node** : Filtre horaire

Regle : on garde uniquement les posts publies dans les **2 dernieres heures**.

```javascript
$json.date > $now.minus({hours: 2}).toISO()
```

**Pourquoi ?**
- Moins de bruit (posts anciens deja traites)
- Opportunites plus "chaudes"
- Moins de tokens consommes

**Personnalisation** : Passez a `{hours: 6}` ou `{hours: 24}` selon votre frequence d'execution.

---

### Bloc C - Prefiltre IA (economie de tokens)

**Nodes** : Prefiltre IA → Code JS (parser) → Filter1

**Objectif** : eliminer les posts clairement hors-sujet AVANT les etapes couteuses (RAG + LLM final).

Le prefiltre utilise GPT-4.1-mini avec ce prompt :

> "Tu es un expert en classification de posts Reddit. Dis si ce post a un rapport avec l'investissement et la gestion de patrimoine."

**Format de sortie** (JSON strict) :

```json
{
  "opportunite": "oui",
  "explication": "Raison en une phrase"
}
```

Le node Code parse ce JSON et le node Filter1 ne garde que les `opportunite: "oui"`.

**Pourquoi c'est rentable** : GPT-4.1-mini coute ~10x moins cher que GPT-4. En eliminant 60-80% des posts ici, vous economisez sur l'etape suivante.

---

### Bloc D - RAG : comparer aux exemples (Supabase)

**Nodes** : Loop Over Items → VectorStore Supabase → Edit Fields → Code JS

**Principe** : on recupere des exemples similaires (etiquetes OUI/NON) pour "caler" la decision du LLM final.

**Comment ca marche** :

1. Le post est converti en embedding (text-embedding-3-large)
2. Supabase retourne les 50 exemples les plus similaires
3. Le code JS selectionne les 4 meilleurs (2 OUI + 2 NON, alternes)
4. Ces exemples sont formates pour le prompt final

**Structure de la table Supabase** :

| Colonne | Type | Description |
|---------|------|-------------|
| Titre | text | Titre de l'exemple |
| Contenu | text | Corps du post |
| A repondre | text | "Oui" ou "Non" |
| Explication | text | Pourquoi c'est oui/non |
| embedding | vector(1024) | Genere automatiquement |

**Personnalisation** : Ajoutez vos propres exemples etiquetes pour ameliorer la precision.

---

### Bloc E - Decision finale LLM

**Nodes** : Basic LLM Chain → Code JS → Filter → Gmail

Le LLM recoit :
- Le titre et contenu du post
- Les exemples similaires (OUI/NON)
- Un prompt detaille sur votre profil cible

**Prompt systeme** (resume) :

> "Tu es un expert en analyse de posts Reddit pour identifier des opportunites commerciales. Je recherche des personnes avec de l'epargne (>10k), un heritage a placer, ou des questions sur l'investissement. Evite les personnes endettees ou les questions hors-sujet."

**Sortie** : JSON `{opportunite: "oui/non", explication: "..."}"`

Si `opportunite = "oui"` → envoi email avec le titre et le lien du post.

---

## Resultat attendu

Quand vous executez le workflow :

1. n8n scrape les derniers posts du subreddit
2. Filtre ceux des 2 dernieres heures (~5-15 posts)
3. Prefiltre IA elimine ~60% du bruit
4. RAG + LLM final qualifient les vrais leads
5. Vous recevez 1-5 emails avec les posts pertinents

**Exemple d'email** :

```
Voila des post Reddit qui pourrait t'interesser :

"I just inherited $50k, what should I do with it?"

https://www.reddit.com/r/personalfinance/comments/xxx
```

---

## Personnaliser le workflow

### Changer de subreddit

Dans le node **"Lecture_subreddit"**, modifiez l'URL :

```
https://www.reddit.com/r/VOTRE_SUBREDDIT/new.json
```

Exemples utiles :
- `/r/entrepreneur` - entrepreneurs
- `/r/smallbusiness` - PME
- `/r/realestate` - immobilier
- `/r/financialindependence` - FIRE

### Modifier la fenetre de temps

Dans **"Filtre horaire"**, changez `{hours: 2}` par la valeur souhaitee.

### Adapter le prefiltre

Modifiez le prompt systeme du node **"Prefiltre IA"** pour correspondre a vos criteres.

### Remplacer Gmail par Slack/Notion

Supprimez le node Gmail et connectez un node Slack, Notion, ou Google Sheets a la place.

### Ajouter une deduplication

Pour eviter d'envoyer plusieurs fois le meme post :
1. Stockez les `id` des posts envoyes (Supabase, Airtable, ou n8n static data)
2. Ajoutez un filtre en debut de workflow

---

## Limites et bonnes pratiques

### Rate limits Reddit

Reddit peut retourner une erreur 429 si vous faites trop de requetes.

**Solutions** :
- Ajoutez un delai entre les executions (minimum 5 min)
- Utilisez un User-Agent descriptif
- Implementez un backoff exponentiel

### Posts vides

Certains posts n'ont pas de `selftext` (juste un titre, ou un lien externe).

**Solution** : Le workflow gere deja ce cas, mais vous pouvez ajouter un filtre `contenu != ""` si besoin.

### Erreurs de parsing JSON

Si le LLM ne retourne pas un JSON valide, le code de parsing a un fallback :

```javascript
catch (error) {
  return { opportunite: "non", explication: "Erreur parsing" }
}
```

### Couts OpenAI

Estimation pour 100 posts/jour :
- Prefiltre (GPT-4.1-mini) : ~$0.02
- Embeddings : ~$0.01
- Decision finale : ~$0.05

**Total** : ~$0.08/jour soit ~$2.50/mois

---

## Conclusion

Ce workflow vous permet de :

- **Gagner 2-3h/jour** de veille manuelle sur Reddit
- **Identifier des leads qualifies** automatiquement
- **Payer moins de $3/mois** en couts API

**Telechargez le workflow** : [reddit-research.json](/workflows/reddit-research.json)

**Besoin d'aide pour l'adapter ?** Contactez-nous pour une personnalisation (autre subreddit, scoring avance, integration CRM).

[Demander un audit gratuit →](/contact)
