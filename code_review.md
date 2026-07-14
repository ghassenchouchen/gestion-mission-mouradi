# 🔍 Revue de Code & Verdict de Production — Gestion Mission El Mouradi

**Date :** 13 Juillet 2026  
**Technologie :** NestJS (Backend) / Angular (Frontend) / PostgreSQL (Base de données)

---

## ❌ Verdict : L'application n'est PAS prête pour la production en l'état

Bien que l'application soit fonctionnelle dans un environnement local pour une démonstration (prototype/MVP), elle présente plusieurs vulnérabilités de sécurité critiques, des risques de corruption de données (race conditions) et des fonctionnalités incomplètes qui bloquent un déploiement réel en production.

Voici la liste détaillée des incohérences, problèmes de logique métier et anomalies détectés lors de la revue de code.

---

## 🔴 Problèmes Critiques (Bloquants de Production)

### 1. Risque de référence de mission dupliquée (Race Condition)
* **Fichier :** `server/src/ordre-mission/ordre-mission.service.ts`
* **Description :** Le backend génère les références au format `OM-YYYY-XXXX` en faisant un simple `count()` des missions de l'année en cours puis en incrémentant de 1. Si deux administrateurs enregistrent une mission au même instant, ils obtiendront la même valeur de `count` et le backend tentera d'insérer deux lignes avec la même référence unique. Cela provoquera un crash de la requête à cause de la contrainte d'unicité PostgreSQL.
* **Solution :** Récupérer la dernière référence créée (ordonnée par ID décroissant), extraire le numéro et l'incrémenter, ou utiliser une séquence de base de données.

### 2. Pas de restriction CORS (Sécurité)
* **Fichier :** `server/src/main.ts` (ligne 7)
* **Description :** `app.enableCors()` est appelé sans configuration ni restriction. En production, cela signifie que n'importe quelle page web tierce peut émettre des requêtes vers votre API.
* **Solution :** Restreindre CORS aux domaines autorisés (le domaine du client Angular).

### 3. Pas de validation du corps de requête sur le Login
* **Fichier :** `server/src/auth/auth.controller.ts`
* **Description :** L'endpoint `/auth/login` prend un `@Body() body: any` sans DTO ni classe de validation. N'importe quelle structure de payload peut être envoyée, contournant le ValidationPipe de NestJS.
* **Solution :** Créer un `LoginDto` avec `@IsEmail()` et `@IsString()`.

### 4. Le Token JWT n'est jamais invalidé côté serveur lors de la déconnexion
* **Fichier :** `client/src/app/services/auth.service.ts`
* **Description :** Le logout client supprime simplement le token du `localStorage`. Côté backend, comme l'authentification est stateless, le token reste valide jusqu'à son expiration (définie à 8 heures). Si un token est intercepté ou volé, un attaquant peut continuer à accéder à l'API pendant des heures.
* **Solution :** Réduire la durée de vie du JWT (ex: 1 heure) et implémenter un token de rafraîchissement (refresh token), ou une blacklist temporaire.

### 5. `isAuthenticated()` côté client ne vérifie pas l'expiration du token
* **Fichier :** `client/src/app/services/auth.service.ts`
* **Description :** La méthode `isAuthenticated()` renvoie `true` si le token existe dans le stockage local, sans vérifier si la date d'expiration (`exp`) du token est dépassée.
* **Solution :** Décoder le token (avec `jwt-decode`) et vérifier si la date actuelle est inférieure à la date d'expiration.

---

## 🟠 Problèmes de Gravité Haute (Logique Métier & Cohérence)

### 6. Impression Dashboard utilise des données mockées (données fictives)
* **Fichier :** `client/src/app/admin/dashboard/dashboard.ts` (méthodes `printMission`, `getMockEmployeeFunction`, etc.)
* **Description :** Lorsque l'on clique sur imprimer une mission depuis le dashboard, l'application utilise des données fictives codées en dur (ex: des noms de chauffeurs et d'employés qui n'existent pas dans la base de données PostgreSQL).
* **Solution :** Utiliser les données réelles issues de l'objet `raw` de la mission, à l'instar de ce qui a été fait dans `missions.ts`.

### 7. Gestion des utilisateurs (Settings) entièrement factice (côté client)
* **Fichier :** `client/src/app/admin/settings/settings.ts`
* **Description :** La liste des utilisateurs administrateurs et RH est stockée dans un tableau statique en mémoire côté client. L'ajout, la modification ou la suppression d'un utilisateur ne persiste pas dans la base de données PostgreSQL. Il n'existe aucun module/contrôleur utilisateur (`Utilisateur`) sur le serveur.
* **Solution :** Créer les endpoints CRUD utilisateur côté NestJS et les connecter au composant settings d'Angular.

### 8. L'URL de l'API est hardcodée à `http://localhost:3000`
* **Fichiers :** `api.service.ts`, `auth.service.ts`, `auth.interceptor.ts`
* **Description :** En production, l'API ne sera pas hébergée sur la machine locale (`localhost`). Avoir cette URL écrite en dur à plusieurs endroits empêchera le déploiement sur un serveur distant.
* **Solution :** Utiliser les fichiers de configuration d'environnement d'Angular (`src/environments/environment.ts` et `environment.prod.ts`).

### 9. Pas de gestion du changement ou de réinitialisation de mot de passe
* **Description :** Il n'existe aucune fonctionnalité de réinitialisation de mot de passe (pas d'envoi d'e-mail, pas de page mot de passe oublié). Si les accès admin ou hr par défaut sont modifiés et perdus, il faut manuellement modifier la base de données ou réinitialiser complètement le schéma.

---

## 🟡 Problèmes de Gravité Moyenne (Qualité & robustesse)

### 10. Chauffeurs et véhicules indisponibles sélectionnables dans le formulaire
* **Fichier :** `client/src/app/admin/nouvelle-mission/nouvelle-mission.ts`
* **Description :** Lors de la création d'une mission, la liste déroulante affiche tous les chauffeurs et véhicules, y compris ceux qui ont `disponible: false`. Il est donc possible de planifier une mission pour un chauffeur déjà en route.
* **Solution :** Filtrer la liste des ressources pour ne proposer que celles qui sont disponibles.

### 11. Pas de contrôle de chevauchement de dates
* **Description :** Deux missions peuvent être créées pour le même chauffeur aux mêmes dates tant que le chauffeur n'a pas encore été marqué "En cours". Le système devrait idéalement interdire l'affectation d'un chauffeur ou véhicule à une nouvelle mission si ses dates de début et fin chevauchent une mission déjà validée.

### 12. Fermeture prématurée du formulaire d'ajout rapide d'employé
* **Fichier :** `client/src/app/admin/nouvelle-mission/nouvelle-mission.ts`
* **Description :** Lors de l'ajout d'un accompagnateur depuis le formulaire de nouvelle mission, les variables d'état du formulaire sont réinitialisées immédiatement après l'envoi de la requête HTTP, *avant* d'obtenir la confirmation de création du serveur. En cas d'erreur réseau ou serveur, l'utilisateur perd ses saisies.

### 13. Le schéma Prisma manque l'URL par défaut de la base de données
* **Fichier :** `server/prisma/schema.prisma`
* **Description :** Le bloc `datasource db` ne contient pas la ligne `url = env("DATABASE_URL")`. Prisma utilise la connexion configurée dynamiquement dans `PrismaService`, mais cela casse l'utilisation des commandes CLI Prisma classiques (`prisma migrate dev`, `prisma db pull`).

### M14. Absence de gestion d'erreur 401 globale dans Angular
* **Fichier :** `client/src/app/interceptors/auth.interceptor.ts`
* **Description :** L'intercepteur intercepte les requêtes pour ajouter le token, mais si l'API répond avec une erreur `401 Unauthorized` (token expiré ou corrompu), l'application ne redirige pas automatiquement l'utilisateur vers l'écran de login.

---

## 🟢 Problèmes de Gravité Basse

* **Emails en .tn résiduels :** Il reste des placeholders et des mentions de domaines de messagerie `@elmouradi.tn` (notamment dans `login.html`, `settings.html`, et le script de test). Ils doivent être remplacés par `@elmouradi.com`.
* **Pas de pagination côté serveur :** L'API renvoie la totalité des ordres de mission en une fois. C'est acceptable au début, mais ralentira l'application à mesure que les archives grandissent.
* **Utilisation d'alertes natives :** L'utilisation de `alert()` et `confirm()` du navigateur donne un aspect moins professionnel à l'interface comparé à des boîtes de dialogue stylisées en CSS.
