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
        window.location.href = 'page_html/equilibre_gaz.html'; // Remplacez par l'URL réelle de la page
    } else {
        alert("Gamification non activée !");
    }
}

// Fonction pour activer/désactiver la gamification
function activateGame() {
    game = game === 0 ? 1 : 0; // Alterne l'état de game
    console.log(`Game est maintenant: ${game}`);
    alert(game === 1 ? "Gamification activée !" : "Gamification désactivée !");
    
    // Sauvegarder l'état de 'game' dans localStorage
    localStorage.setItem('game', game);
    console.log(`Game sauvegardé dans localStorage: ${game}`);

    // Mettre à jour la visibilité du bouton
    updateButtonVisibility();
}

// Fonction pour réinitialiser les cookies des pages visitées uniquement
function resetVisitedPages() {
    console.log("Réinitialisation des cookies déclenchée");
    document.cookie = "visitedPages=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;"; // Supprime le cookie
    alert("Les cookies des pages visitées ont été réinitialisés.");
    console.log("Cookie 'visitedPages' supprimé.");
}

// Fonction pour réinitialiser tous les cookies
function resetAllCookies() {
    console.log("Réinitialisation de tous les cookies déclenchée");

    // Obtenir tous les cookies actuels
    const cookies = document.cookie.split("; ");

    // Supprimer chaque cookie
    for (const cookie of cookies) {
        const [name] = cookie.split("="); // Récupérer le nom du cookie
        document.cookie = `${name}=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
    }

    alert("Tous les cookies ont été réinitialisés.");
    console.log("Tous les cookies ont été supprimés.");
}
