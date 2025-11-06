# Mini-Trello

Une application de gestion de tâches légère et intuitive, inspirée de Trello. Gérez vos tâches avec une interface moderne et épurée, directement dans votre navigateur.

## 🌟 Fonctionnalités

- ✅ **Gestion complète des tâches** : Créer, modifier et supprimer des tâches facilement
- 🎯 **Statuts personnalisés** : Organisez vos tâches en trois catégories :
  - À faire
  - En cours
  - Terminé
- 🔍 **Recherche intelligente** : Trouvez rapidement vos tâches par titre
- 🎨 **Filtrage par statut** : Affichez uniquement les tâches d'un statut spécifique
- 💾 **Sauvegarde automatique** : Toutes vos données sont enregistrées localement dans votre navigateur
- 📱 **Design responsive** : Interface adaptée aux mobiles, tablettes et ordinateurs
- 🌙 **Interface moderne** : Design sombre élégant et agréable à utiliser

## 🚀 Technologies utilisées

- **HTML5** : Structure de l'application
- **CSS3** : Styles modernes avec design responsive
- **JavaScript (Vanilla)** : Logique applicative
- **Alpine.js** : Framework JavaScript léger pour la réactivité
- **LocalStorage** : Persistance des données côté client
- **Google Fonts** : Polices Inter et Ubuntu

## 📦 Installation

### Prérequis
- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Aucune installation serveur nécessaire !

### Méthode 1 : Utilisation directe
1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/hugo94110/Mini-Trello.git
   ```
2. Naviguez dans le dossier du projet :
   ```bash
   cd Mini-Trello
   ```
3. Ouvrez le fichier `index.html` dans votre navigateur

### Méthode 2 : Serveur local (optionnel)
Si vous souhaitez utiliser un serveur local :
```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js (http-server)
npx http-server

# Avec PHP
php -S localhost:8000
```
Puis ouvrez `http://localhost:8000` dans votre navigateur.

## 📖 Utilisation

### Ajouter une tâche
1. Cliquez sur le bouton **+** en haut à droite
2. Remplissez le titre de votre tâche
3. Sélectionnez un statut (À faire, En cours, Terminé)
4. Ajoutez une description (optionnel)
5. Cliquez sur **Ajouter**

### Modifier une tâche
1. Cliquez sur les **trois points** à droite de la tâche
2. Sélectionnez **Modifier**
3. Effectuez vos modifications
4. Cliquez sur **Sauvegarder**

### Supprimer une tâche
1. Cliquez sur les **trois points** à droite de la tâche
2. Sélectionnez **Supprimer**
3. Confirmez la suppression

### Rechercher et filtrer
- Utilisez la **barre de recherche** pour trouver des tâches par titre
- Utilisez le **menu déroulant** pour filtrer par statut

## 📁 Structure du projet

```
Mini-Trello/
├── index.html      # Structure HTML de l'application
├── script.js       # Logique JavaScript et gestion des données
├── styles.css      # Styles et responsive design
└── README.md       # Documentation du projet
```

## 💡 Fonctionnement

L'application utilise le **localStorage** du navigateur pour sauvegarder vos tâches. Cela signifie que :
- ✅ Vos données persistent même après avoir fermé le navigateur
- ✅ Aucune connexion internet n'est requise
- ⚠️ Les données sont spécifiques à chaque navigateur
- ⚠️ Vider le cache du navigateur supprimera vos tâches

## 🎨 Personnalisation

### Couleurs
Les couleurs principales sont définies dans `styles.css` :
- Fond : `#131313`
- Éléments secondaires : `#222222`
- Accent : `#004a77`
- Texte : `#e3e3e3` / `#c4c7c5`

### Polices
- **Inter** : Police principale pour le texte
- **Ubuntu** : Police pour les messages et titres spéciaux

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📝 Crédits

**Créé par Hugo Lévêque © 2025**

- Icônes : [Google Material Icons](https://fonts.google.com/icons)
- Polices : [Google Fonts](https://fonts.google.com)

## 📄 Licence

Ce projet est un projet personnel open source. Vous êtes libre de l'utiliser, le modifier et le distribuer.

---

⭐ Si vous aimez ce projet, n'hésitez pas à lui donner une étoile sur GitHub !