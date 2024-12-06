# Application Météo

## Introduction

Bienvenue dans l'Application Météo ! Cette application vous permet de consulter la météo actuelle pour différentes villes à travers le monde. 

## Fonctionnalités de l'Application Météo

### Récupération de la Météo par Code Pays

- L'application permet de récupérer la météo d'une ville en utilisant un code pays de deux lettres.
- La liste des pays et leurs capitales est définie dans l'objet `countryCapitals`.

### Affichage de la Météo

- La météo est affichée avec le nom de la ville et la température en degrés Celsius.
- Les résultats sont affichés dans une section spécifique de la page.

### Recherche de Ville

- Les utilisateurs peuvent entrer le nom d'une ville pour obtenir la météo.
- Un écouteur d'événement est ajouté pour détecter les clics sur le bouton de recherche et récupérer la météo de la ville entrée.

### Gestion des Erreurs

- Si la ville n'est pas trouvée ou si le code pays est invalide, une alerte est affichée à l'utilisateur.

## Fonctionnalités d'Accessibilité Implémentées

### Contraste Élevé

- Utilisation de couleurs contrastées pour améliorer la lisibilité.
- Le fond de la page utilise une image avec un masque sombre pour assurer un bon contraste avec le texte blanc.

### Texte Lisibles

- Les tailles de police sont ajustées pour être lisibles sur différents appareils.
- Les titres et paragraphes utilisent des tailles de police et des marges appropriées pour une meilleure lisibilité.


### Contenu Responsive

- La mise en page est conçue pour être responsive, s'adaptant aux différentes tailles d'écran.
- Les images et les conteneurs utilisent des styles flexibles pour s'ajuster aux différentes résolutions.
