// Variables globales
let co2Level = 50; // Niveau initial de CO₂
let o2Level = 50;  // Niveau initial d'O₂
let gameInterval;  // Intervalle pour générer les bulles
let winInterval;   // Intervalle pour surveiller la condition de victoire
let decayInterval; // Intervalle pour le mouvement naturel des jauges
let winTimer = 10; // Temps à maintenir en équilibre pour gagner (en secondes)
let gameRunning = false; // État du jeu pour vérifier s'il est en cours

// Fonction pour afficher une image de succès
function showImageOnSuccess() {
    const image = document.createElement('img');
    image.src = '../img/succes/Equilibre.png';
    image.alt = 'Succès';
    image.className = 'animated-image';

    document.body.appendChild(image);

    // Supprime l'image après 3 secondes
    setTimeout(() => {
        image.remove();
    }, 3000);
}

// Fonction pour démarrer le jeu
function startGame() {
    if (gameRunning) return; // Empêche de relancer le jeu s'il est déjà en cours

    gameRunning = true;
    const message = document.getElementById('message');
    message.textContent = 'Maintenez les niveaux équilibrés !';

    // Réinitialiser les valeurs
    co2Level = 50;
    o2Level = 50;
    winTimer = 10;

    updateBars();

    // Générer des bulles toutes les secondes
    gameInterval = setInterval(spawnBubble, 1000);

    // Surveiller la condition de victoire toutes les secondes
    winInterval = setInterval(checkWinCondition, 1000);

    // Simuler le mouvement naturel des jauges toutes les 500 ms
    decayInterval = setInterval(naturalDecay, 500);

    // Masquer le bouton Restart
    document.getElementById('restart-button').style.display = 'none';
}

// Fonction pour simuler le mouvement naturel des jauges
function naturalDecay() {
    if (!gameRunning) return;

    // Les jauges reviennent lentement vers des valeurs déséquilibrées
    co2Level = Math.min(100, co2Level + 1); // CO₂ augmente naturellement
    o2Level = Math.max(0, o2Level - 1);    // O₂ diminue naturellement

    updateBars();
}

// Fonction pour générer une bulle
function spawnBubble() {
    if (!gameRunning) return;

    const bubbleContainer = document.getElementById('bubble-container');
    const bubble = document.createElement('div');

    // Déterminer si la bulle est CO₂ ou O₂
    const isCo2 = Math.random() > 0.5;
    bubble.className = `bubble ${isCo2 ? 'co2' : 'o2'}`;
    bubble.textContent = isCo2 ? 'CO₂' : 'O₂';

    // Positionner la bulle aléatoirement
    bubble.style.left = Math.random() * 90 + '%';

    // Ajouter un événement de clic sur la bulle
    bubble.addEventListener('click', () => {
        bubble.remove();
        if (isCo2) {
            co2Level = Math.max(0, co2Level - 5);
        } else {
            o2Level = Math.min(100, o2Level + 5);
        }
        updateBars();
    });

    // Ajouter la bulle au conteneur
    bubbleContainer.appendChild(bubble);

    // Supprimer la bulle après qu'elle soit sortie de l'écran
    setTimeout(() => {
        if (bubbleContainer.contains(bubble)) bubble.remove();
    }, 4000);
}

// Fonction pour arrêter les bulles
function stopBubbles() {
    clearInterval(gameInterval);
    clearInterval(decayInterval); // Arrête aussi le mouvement naturel des jauges
    gameRunning = false;

    const bubbleContainer = document.getElementById('bubble-container');
    bubbleContainer.innerHTML = '';
}

// Fonction pour mettre à jour les barres d’équilibre
function updateBars() {
    const co2Bar = document.getElementById('co2-bar');
    const o2Bar = document.getElementById('o2-bar');

    co2Bar.style.setProperty('width', `${co2Level}%`);
    o2Bar.style.setProperty('width', `${o2Level}%`);

    if (co2Level <= 0 || o2Level >= 100) {
        stopBubbles();
        showRestartButton();
        endGame('Déséquilibre atteint. Essayez encore !');
    }
}

// Fonction pour vérifier la condition de victoire
function checkWinCondition() {
    const difference = Math.abs(co2Level - o2Level); // Calculer l'écart absolu entre CO₂ et O₂

    if (difference <= 25) { // Condition de victoire : écart ≤ 25
        winTimer--;
        document.getElementById('message').textContent = `Maintenez l'équilibre ! Temps restant : ${winTimer}s`;

        if (winTimer <= 0) {
            stopBubbles();
            showImageOnSuccess();
            showRestartButton();
            endGame('Félicitations ! Vous avez gagné !');
        }
    } else {
        winTimer =10; // Réinitialiser le timer si la condition n'est pas remplie
        document.getElementById('message').textContent = 'L’équilibre est rompu ! Recommencez à stabiliser !';
    }
}

// Fonction pour afficher le bouton Restart
function showRestartButton() {
    document.getElementById('restart-button').style.display = 'inline-block';
}

// Fonction pour redémarrer le jeu
function restartGame() {
    startGame();
}

// Fonction pour terminer le jeu
function endGame(message) {
    clearInterval(winInterval);
    clearInterval(gameInterval);
    clearInterval(decayInterval); // Arrêter aussi le mouvement naturel
    gameRunning = false;
    document.getElementById('message').textContent = message;
}
