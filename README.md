# Veille informatique

Tableau de bord de veille personnelle : sécurité/attaques, IT généraliste, appareils.
Aucune base de données, aucun conteneur — les flux RSS sont récupérés côté serveur
à chaque requête (avec cache d'une heure).

## Déployer sur Vercel

1. Créez un dépôt GitHub avec ce dossier (ou glissez-déposez le dossier directement
   sur https://vercel.com/new si vous n'utilisez pas Git).
2. Sur vercel.com → "Add New Project" → importez le dépôt.
3. Vercel détecte automatiquement Next.js, aucune configuration nécessaire.
4. Cliquez sur "Deploy". C'est en ligne en ~1 minute.

## Tester en local avant de déployer (optionnel)

```bash
npm install
npm run dev
```

Puis ouvrez http://localhost:3000

## Personnaliser les sources

Modifiez `lib/feeds.ts` : chaque catégorie contient une liste `{ name, url }`.
Ajoutez, supprimez ou remplacez des flux librement. Si un flux RSS change d'URL
ou tombe, il est simplement ignoré (pas de crash) — regardez les logs Vercel
("Runtime Logs") pour repérer les flux cassés.

## Aller plus loin (non inclus ici, pour rester simple)

- **Alertes push en temps réel** (ex. nouvelle CVE critique) : nécessiterait un
  Vercel Cron Job + un petit stockage (Vercel KV / Upstash Redis, gratuit) pour
  mémoriser les articles déjà vus, puis un webhook vers ntfy.sh, Discord ou Telegram.
- **Résumé automatique par IA** : possible via l'API Anthropic dans une route API,
  en envoyant les titres du jour et en demandant un résumé de 10 lignes.

Dites-moi si vous voulez qu'on ajoute l'une de ces deux briques.
