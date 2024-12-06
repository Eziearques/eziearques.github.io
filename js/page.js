// Variables globales
let game = 0; // État de la gamification (0 = désactivée, 1 = activée)

// Restaurer l'état de la variable 'game' depuis localStorage au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    const savedGame = localStorage.getItem('game');
    if (savedGame !== null) {
        game = parseInt(savedGame, 10); // Convertir en nombre
        console.log(`Game restauré depuis localStorage: ${game}`);
    }

    // Mettre à jour la visibilité du bouton en fonction de l'état restauré
    const button = document.getElementById('redirect-button');
    if (button) {
        console.log("Bouton 'redirect-button' trouvé dans le DOM.");
        button.style.display = 'none'; // Masqué par défaut
        button.addEventListener('click', redirectToPage); // Associer l'événement clic
    } else {
        console.error("Le bouton avec l'ID 'redirect-button' n'existe pas.");
    }

    // Appeler updateButtonVisibility pour refléter l'état initial
    updateButtonVisibility();
});

// Fonction pour afficher ou masquer le bouton
function updateButtonVisibility() {
    const button = document.getElementById('redirect-button');
    console.log(`updateButtonVisibility appelée, état de game: ${game}`);
    if (button) {
        button.style.display = game === 1 ? 'block' : 'none';
    } else {
        console.error("Le bouton 'redirect-button' n'existe pas.");
    }
}

// Fonction pour rediriger vers une page
function redirectToPage() {
    if (game === 1) {
      const currentFileName = window.location.pathname.split('/').pop().replace('.html', '');
      localStorage.setItem('trophys', JSON.stringify([...(JSON.parse(localStorage.getItem('trophys')) || []), "adn"]));
      window.location.href = '../index.html'; // Remplacez par l'URL réelle de la page
    } else {
        alert("Gamification non activée !");
    }
}
