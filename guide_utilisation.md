# Guide d'Utilisation — Application Gestion des Missions
## El Mouradi Hotels

Ce guide complet détaille le fonctionnement et l'utilisation de l'application de gestion et de suivi des ordres de mission pour la chaîne **El Mouradi Hotels**.

---

## 1. Accès et Connexion

L'application prend en charge deux types d'utilisateurs distincts. Les identifiants par défaut issus du seed de la base de données sont :

* **Administrateur (Chef des Missions) :**
  * **Email :** `admin@elmouradi.com`
  * **Mot de passe :** `admin123`
* **Ressources Humaines (RH) :**
  * **Email :** `hr@elmouradi.com`
  * **Mot de passe :** `hr123`

---

## 2. Espace Administrateur (Chef des Missions)

L'administrateur a le contrôle total sur la planification des déplacements, la logistique et la configuration de l'application.

### A. Tableau de Bord (Dashboard)
Dès la connexion, le tableau de bord affiche des statistiques consolidées :
* **Missions ce mois :** Nombre total de missions planifiées/exécutées sur le mois courant.
* **En cours :** Missions actives (chauffeurs actuellement sur la route).
* **Chauffeurs disponibles :** Taux de chauffeurs libres prêts pour affectation.
* **Missions récentes :** Liste des 5 derniers déplacements enregistrés avec leur statut en temps réel.

### B. Comment enregistrer une nouvelle mission (Formulaire)
Pour planifier et enregistrer un déplacement, cliquez sur **"Nouvelle Mission"** et suivez ces étapes simples :
1. **Choisir la personne qui se déplace :** Sélectionnez le nom de l'employé dans la liste. Si cette personne n'est pas encore enregistrée, cliquez sur le bouton **"Nouveau"** à côté de la liste, saisissez ses informations (matricule, prénom, nom, métier, hôtel d'origine) puis validez.
2. **Choisir le transport (Chauffeur & Voiture) :** Sélectionnez un chauffeur et une voiture de service disponibles dans les listes.
   * *Si l'employé utilise ses propres moyens de transport (pas de voiture de service), choisissez l'option **"Propre moyen"** pour le véhicule et **"Aucun/Lui-même"** pour le chauffeur.*
3. **Indiquer la destination et le motif :** Sélectionnez l'hôtel El Mouradi où se rend l'employé, ainsi que la raison du voyage (réunion, audit, panne technique...).
4. **Indiquer les dates et les horaires :** Renseignez le jour et l'heure de départ. Indiquez également le jour et l'heure de retour prévus.
   * *Attention : L'application vérifie la cohérence des horaires. Par exemple, vous ne pouvez pas indiquer une heure de retour antérieure à l'heure de départ sur la même journée.*
5. **Ajouter d'autres voyageurs (Optionnel) :** Si d'autres collègues voyagent dans le même véhicule, sélectionnez-les un par un dans la liste des accompagnateurs et cliquez sur "Ajouter".
6. **Saisir les frais (Optionnel) :** Si nécessaire, renseignez les frais prévus pour ce voyage et ajoutez des remarques ou des consignes dans la zone de texte.
7. **Valider et imprimer :** Cliquez sur **"Enregistrer et Imprimer"** pour sauvegarder le voyage. La feuille de mission officielle au format A4 s'ouvre automatiquement à l'écran, prête à être imprimée et signée.

### C. Gestion des Missions
L'écran **"Ordres de mission"** liste l'ensemble des déplacements.
* **Filtres :** Recherchez par référence, employé ou destination, ou filtrez par statut et par période.
* **Détails (Icône Œil) :** Ouvre un modal complet affichant toutes les informations. 
  * *Actions de statut :* Depuis ce modal, vous pouvez cliquer sur **"Démarrer la mission"** (passe le statut à *En cours* et réserve le chauffeur/véhicule) ou **"Clôturer la mission"** (passe à *Terminé* et libère les ressources).
* **Modifier (Icône Crayon) :** Permet de rééditer les détails de la mission.
  * **Règle d'immutabilité :** La modification est bloquée et grisée pour toute mission en cours ou terminée.
* **Imprimer (Icône Imprimante) :** Réimprime l'ordre de mission officiel.

### D. Paramètres (Settings)
Gérez les tables de référence via les onglets :
* **Chauffeurs :** Ajoutez, éditez ou marquez un chauffeur comme indisponible.
* **Véhicules :** Ajoutez un véhicule avec sa plaque d'immatriculation.
* **Objets de mission & Destinations :** Configurez les motifs standards de déplacement et les hôtels cibles.
* **Employés :** Administrez les fiches du personnel de l'entreprise.

---

## 3. Espace Ressources Humaines (RH)

Le profil RH accède aux informations logistiques pour assurer la traçabilité des temps de présence (pointage) et lever les ambiguïtés à la fin du mois.

### A. Tableau de Bord RH
Affiche :
* Les missions prévues aujourd'hui.
* Les employés actuellement en déplacement.
* Le cumul des déplacements sur le mois.

### B. Suivi des Chauffeurs & Planning
L'écran **"Suivi des Chauffeurs"** présente une vue d'ensemble des chauffeurs :
* Indique en temps réel si le chauffeur est libre ou en mission.
* Affiche la liste chronologique de ses missions passées et futures.
* **Génération de rapport :** En cliquant sur **"Imprimer le rapport mensuel"**, l'application génère un tableau récapitulatif propre de toutes les missions des chauffeurs pour le mois sélectionné, prêt pour archivage ou pointage.

### C. Historique des Missions
L'écran **"Historique"** permet aux RH de consulter la totalité des ordres de mission, de filtrer les données et d'exporter les résultats. Cet espace est strictement en lecture seule.
