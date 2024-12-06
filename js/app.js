// Variables globales
let game = 0; // État de la gamification (0 = désactivée, 1 = activée)

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
    updateButtonVisibility();
}

// Fonction pour réinitialiser les cookies
function resetVisitedPages() {
    console.log("Réinitialisation des cookies déclenchée");
    document.cookie = "visitedPages=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;"; // Supprime le cookie
    alert("Les cookies des pages visitées ont été réinitialisés.");
    console.log("Cookie 'visitedPages' supprimé.");
}

// Attendre que le DOM soit entièrement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('redirect-button');
    if (button) {
        console.log("Bouton 'redirect-button' trouvé dans le DOM.");
        button.style.display = 'none'; // Masqué par défaut
        button.addEventListener('click', redirectToPage); // Associer l'événement clic
    } else {
        console.error("Le bouton avec l'ID 'redirect-button' n'existe pas.");
    }

    // Appeler updateButtonVisibility après la vérification
    updateButtonVisibility();
});
