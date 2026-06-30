# Finances v2 — Calibré sur ta vraie situation

Application web progressive personnalisée pour ta trajectoire 2026-2028 : alternance → chômage/AFPA → électricien → auto-entrepreneur.

## Ce qu'il y a dedans

- **Vue d'ensemble** : KPIs du mois, progression des 3 objectifs, graphiques 12 mois, dernières transactions
- **Transactions** : ajout/édition/suppression, filtres, récurrence auto
- **Patrimoine** : agrégation Courant + Livret A + CARDIF + Maison
- **Plan d'action** : ta stratégie 2026-2028 + roadmap visuelle 11 jalons
- **Objectifs** : 3 cibles (Coussin Livret A · Reconstitution · Préparation AE)
- **Suivi transition** : projection 3 scénarios sur 24 mois
- **Paramètres** : édition soldes initiaux, export JSON/CSV, restauration

Le module "Plan d'action" contient toute notre stratégie discutée — phase par phase, étape par étape — pour que tu puisses t'y référer sans relire la conversation.

---

## Installation sur PC

1. **Crée un dossier** sur ton ordi, par exemple `C:\Users\drean\Finances\`
2. **Place les 4 fichiers** dedans : `index.html`, `manifest.json`, `sw.js`, `README.md`
3. **Double-clique sur `index.html`** — ton navigateur ouvre l'app
4. **(Recommandé)** Installe-la comme app desktop :
   - **Chrome / Edge** : clique sur l'icône d'installation (carré avec flèche) à droite de la barre d'adresse, puis "Installer"
   - L'app apparaît alors dans ton menu Démarrer comme une vraie application, sans la barre d'adresse

Au premier lancement, l'app charge automatiquement tes vrais soldes (Courant 1 444,23 € · Livret A 14,38 € · CARDIF 29 400 € · Maison 250 000 €) et 4 mois d'historique simulé.

---

## Installation sur Android

L'app est conçue pour fonctionner sur mobile. Pour l'installer sur ton téléphone, **héberge-la quelque part en HTTPS** (impossible en local depuis le PC). Le plus simple :

### Étape 1 — Mettre l'app en ligne (gratuit, 2 minutes)

1. Va sur **https://app.netlify.com/drop** sur ton PC
2. **Glisse-dépose ton dossier** `Finances` complet sur la zone de dépôt
3. Netlify te génère une URL du type `https://random-name-12345.netlify.app`
4. **Copie cette URL**

### Étape 2 — Installer sur ton Android

1. Ouvre **Chrome** sur ton Android
2. Va sur l'URL Netlify que tu viens de copier
3. Tape sur le **menu (⋮)** en haut à droite
4. Choisis **"Installer l'application"** ou **"Ajouter à l'écran d'accueil"**
5. L'icône "Finances" apparaît sur ton écran d'accueil comme une vraie app

### Important : synchroniser PC ↔ Android

Les données sont stockées localement sur chaque appareil. Pour passer de PC à Android (ou vice-versa) :

1. Sur le device source : **Paramètres → Exporter (JSON)**
2. Transfère le fichier vers l'autre device (mail, Drive, USB)
3. Sur le device cible : **Paramètres → Restaurer (JSON)**

C'est manuel mais simple. À faire au minimum une fois par mois si tu utilises les deux.

---

## Première chose à faire

Va voir l'onglet **Plan d'action**. Tu y trouveras :

- Le contexte de ta situation
- La **roadmap visuelle** des 11 jalons jusqu'à mi-2028
- Les 3 phases avec revenus, charges, marges
- Les **5 actions concrètes** à faire avant le 10 septembre
- Le plan pour la phase ARE (18 mois)
- Le plan pour la reprise d'emploi
- Les règles à graver

Cette page est **ton tableau de bord stratégique**. À chaque révision (sept 2026, mars 2027, août 2027, février 2028), reviens-y et ajuste selon ta nouvelle situation.

---

## Sauvegarde recommandée

Tes données sont stockées dans IndexedDB du navigateur. Pour éviter toute perte :

- **Export mensuel** : Paramètres → Exporter (JSON), stocke le fichier sur ton Drive ou Dropbox
- **Restauration** possible à tout moment depuis ce fichier

---

## Aide rapide

- **Le `+` en bas à droite** : ajouter une transaction ponctuelle
- **Récurrence** : si tu coches "Transaction récurrente" lors de l'ajout, l'app la régénérera chaque mois automatiquement
- **Modifier un solde initial** : Paramètres → clic sur le compte → modifie le montant
- **Réinitialiser** : Paramètres → Zone dangereuse → recharge la démo de départ
